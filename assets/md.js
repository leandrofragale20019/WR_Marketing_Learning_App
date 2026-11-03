// Kleiner Markdown-Renderer für die Lernzusammenfassungen.
// Gibt den Text unverändert wieder – er übersetzt nur die Formatierung in HTML.
(function () {
  'use strict';

  function esc(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function inline(s) {
    s = esc(s);
    const codes = [];
    s = s.replace(/`([^`]+)`/g, (m, c) => { codes.push(c); return '\u0000' + (codes.length - 1) + '\u0000'; });
    s = s.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g,
      (m, target, label) => `<a class="wl" data-target="${target}" href="javascript:void 0">${label || target}</a>`);
    s = s.replace(/\*\*([^*]+?)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/(^|[^*])\*([^*\s][^*]*?)\*/g, '$1<em>$2</em>');
    s = s.replace(/\u0000(\d+)\u0000/g, (m, i) => `<code>${codes[i]}</code>`);
    return s;
  }

  const LIST_RE = /^(\s*)([-*+]|(\d+)\.)\s+(.*)$/;
  const isList = (l) => LIST_RE.test(l);
  const isTableSep = (l) => /^\s*\|?\s*:?-{2,}/.test(l) && /^[\s|:\-]+$/.test(l);

  function splitRow(l) {
    let s = l.trim();
    if (s.startsWith('|')) s = s.slice(1);
    if (s.endsWith('|')) s = s.slice(0, -1);
    return s.split('|').map((c) => c.trim());
  }

  function table(buf) {
    const rows = buf.filter((l) => !isTableSep(l)).map(splitRow);
    return { t: 'table', head: rows[0], rows: rows.slice(1) };
  }

  function list(buf) {
    const items = [];
    buf.forEach((l) => {
      const m = l.match(LIST_RE);
      if (m) items.push({ ind: m[1].replace(/\t/g, '  ').length, ord: !!m[3], start: m[3], text: m[4] });
      else if (items.length) items[items.length - 1].text += ' ' + l.trim();
    });
    function build(arr) {
      const node = { t: 'list', ord: arr[0].ord, start: arr[0].start, items: [] };
      const base = arr[0].ind;
      let k = 0;
      while (k < arr.length) {
        const it = arr[k++];
        const sub = [];
        while (k < arr.length && arr[k].ind > base) sub.push(arr[k++]);
        const task = it.text.match(/^\[( |x|X)\]\s+(.*)$/);
        node.items.push({
          text: task ? task[2] : it.text,
          task: task ? (task[1] !== ' ') : null,
          sub: sub.length ? build(sub) : null,
        });
      }
      return node;
    }
    return build(items);
  }

  function blocks(lines) {
    const out = [];
    let i = 0;
    while (i < lines.length) {
      const l = lines[i];
      if (!l.trim()) { i++; continue; }

      if (/^\s*```/.test(l)) {
        const buf = [];
        let j = i + 1;
        while (j < lines.length && !/^\s*```/.test(lines[j])) buf.push(lines[j++]);
        out.push({ t: 'code', text: buf.join('\n') });
        i = j + 1;
        continue;
      }
      let m = l.match(/^(#{1,6})\s+(.*)$/);
      if (m) { out.push({ t: 'h', level: m[1].length, text: m[2].trim() }); i++; continue; }
      if (/^\s*(-{3,}|\*{3,})\s*$/.test(l)) { out.push({ t: 'hr' }); i++; continue; }
      if (/^\s*>/.test(l)) {
        const buf = [];
        while (i < lines.length && /^\s*>/.test(lines[i])) buf.push(lines[i++].replace(/^\s*>\s?/, ''));
        out.push({ t: 'quote', children: blocks(buf) });
        continue;
      }
      if (/^\s*\|/.test(l)) {
        const buf = [];
        while (i < lines.length && /^\s*\|/.test(lines[i])) buf.push(lines[i++]);
        out.push(table(buf));
        continue;
      }
      if (isList(l)) {
        const buf = [];
        while (i < lines.length && (isList(lines[i]) || (buf.length && /^\s+\S/.test(lines[i])))) buf.push(lines[i++]);
        out.push(list(buf));
        continue;
      }
      const buf = [];
      while (i < lines.length && lines[i].trim() &&
        !/^(\s*```|#{1,6}\s|\s*>|\s*\||\s*-{3,}\s*$)/.test(lines[i]) && !isList(lines[i])) {
        buf.push(lines[i++].trim());
      }
      out.push({ t: 'p', lines: buf });
    }
    return out;
  }

  function parseDoc(src) {
    src = src.replace(/\r\n?/g, '\n');
    const meta = {};
    const fm = src.match(/^---\n([\s\S]*?)\n---\n/);
    if (fm) {
      fm[1].split('\n').forEach((line) => {
        const m = line.match(/^(\w+):\s*(.*)$/);
        if (m) meta[m[1]] = m[2];
      });
      src = src.slice(fm[0].length);
    }
    return { meta, blocks: blocks(src.split('\n')) };
  }

  // ctx.goal: { offset, checked } – für die abhakbaren Lernziele
  function render(bl, ctx) {
    ctx = ctx || {};
    return bl.map((b) => renderBlock(b, ctx)).join('\n');
  }

  function renderList(node, ctx) {
    const tag = node.ord ? 'ol' : 'ul';
    const start = node.ord && node.start && node.start !== '1' ? ` start="${node.start}"` : '';
    const isTasks = node.items.some((it) => it.task !== null);
    const li = node.items.map((it) => {
      const sub = it.sub ? renderList(it.sub, ctx) : '';
      if (it.task !== null && ctx.goal) {
        const n = ctx.goal.offset++;
        const on = ctx.goal.checked[n] || it.task;
        return `<li class="task"><label class="check"><input type="checkbox" data-goal="${n}"${on ? ' checked' : ''}><span class="box" aria-hidden="true"></span><span class="txt">${inline(it.text)}</span></label>${sub}</li>`;
      }
      if (it.task !== null) {
        return `<li class="task"><span class="check static"><span class="box" aria-hidden="true"></span><span class="txt">${inline(it.text)}</span></span>${sub}</li>`;
      }
      return `<li>${inline(it.text)}${sub}</li>`;
    }).join('');
    return `<${tag}${start}${isTasks ? ' class="tasks"' : ''}>${li}</${tag}>`;
  }

  function renderBlock(b, ctx) {
    switch (b.t) {
      case 'h': return `<h${b.level}>${inline(b.text)}</h${b.level}>`;
      case 'hr': return '<hr>';
      case 'p': return `<p>${b.lines.map(inline).join('<br>')}</p>`;
      case 'code': return `<pre class="code"><code>${esc(b.text)}</code></pre>`;
      case 'quote': return `<blockquote>${render(b.children, ctx)}</blockquote>`;
      case 'list': return renderList(b, ctx);
      case 'table': {
        const head = b.head.map((c) => `<th>${inline(c)}</th>`).join('');
        const rows = b.rows.map((r) => '<tr>' + b.head.map((_, k) => `<td>${inline(r[k] || '')}</td>`).join('') + '</tr>').join('');
        return `<div class="table-wrap"><table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>`;
      }
      default: return '';
    }
  }

  function countTasks(bl) {
    let n = 0;
    const walk = (node) => node.items.forEach((it) => { if (it.task !== null) n++; if (it.sub) walk(it.sub); });
    bl.forEach((b) => {
      if (b.t === 'list') walk(b);
      if (b.t === 'quote') n += countTasks(b.children);
    });
    return n;
  }

  // Für kurze Texte in Aufgaben (Karteikarten-Rückseite, Erklärungen)
  function renderSnippet(text) {
    return render(blocks(text.split('\n')));
  }

  window.MD = { parseDoc, render, inline, countTasks, renderSnippet, esc };
})();
