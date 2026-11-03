(function () {
  'use strict';

  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
  const esc = MD.esc;
  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };

  /* ---------------- Speicher (Fortschritt) ---------------- */
  const store = {
    key: 'lernheft-marketing-v1',
    d: {},
    load() {
      try { this.d = JSON.parse(localStorage.getItem(this.key)) || {}; } catch (e) { this.d = {}; }
      ['read', 'goals', 'quizBest', 'known', 'assignDone', 'orderDone', 'calc'].forEach((k) => { this.d[k] = this.d[k] || {}; });
    },
    save() { try { localStorage.setItem(this.key, JSON.stringify(this.d)); } catch (e) { /* ohne Speicher weiter */ } },
    bucket(k, t) { this.d[k][t] = this.d[k][t] || (k === 'quizBest' ? null : (k === 'calc' ? { ok: 0, total: 0 } : {})); return this.d[k][t]; },
  };
  store.load();

  /* ---------------- Themen aufbereiten ---------------- */
  function chapterize(blocks) {
    const intro = [], chapters = [];
    let cur = null;
    blocks.forEach((b) => {
      if (b.t === 'h' && b.level === 2) { cur = { title: b.text, blocks: [b] }; chapters.push(cur); }
      else if (cur) cur.blocks.push(b);
      else intro.push(b);
    });
    chapters.forEach((c) => { while (c.blocks.length && c.blocks[c.blocks.length - 1].t === 'hr') c.blocks.pop(); });
    while (intro.length && intro[intro.length - 1].t === 'hr') intro.pop();
    return { intro, chapters };
  }

  const TOPICS = {};
  [['t1', '01', 'Grundbegriffe'], ['t2', '02', 'Marketing-Mix']].forEach(([id, num, short]) => {
    const src = window.SOURCES[id];
    const doc = MD.parseDoc(src.text);
    const { intro, chapters } = chapterize(doc.blocks);
    let off = 0;
    chapters.forEach((c) => { c.goalOffset = off; off += MD.countTasks(c.blocks); });
    const h1 = intro.find((b) => b.t === 'h' && b.level === 1);
    const goalsChapter = chapters.find((c) => /Lernziele/i.test(c.title));
    const goalTexts = [];
    if (goalsChapter) goalsChapter.blocks.forEach((b) => { if (b.t === 'list') b.items.forEach((it) => { if (it.task !== null) goalTexts.push(it.text); }); });
    TOPICS[id] = { id, num, short, file: src.file, meta: doc.meta, intro, chapters, goalCount: off, goalTexts, title: h1 ? h1.text : short, tasks: window.TASKS[id] };
  });

  // Verweise zwischen den beiden Notizen
  const NOTE_LINKS = { '01_Marketing_Grundbegriffe': 't1', '02_Marketing_Mix': 't2' };

  /* ---------------- Routing ---------------- */
  let keyHandler = null;
  document.addEventListener('keydown', (e) => {
    const tag = document.activeElement ? document.activeElement.tagName : '';
    if (!keyHandler || e.ctrlKey || e.metaKey || e.altKey || /INPUT|SELECT|TEXTAREA/.test(tag)) return;
    if ((e.key === 'Enter' || e.key === ' ') && tag === 'BUTTON') return; // Button löst selbst aus
    keyHandler(e);
  });

  function route() {
    keyHandler = null;
    const parts = (location.hash.replace(/^#\/?/, '') || '').split('/').filter(Boolean);
    const app = $('#app');
    const topic = TOPICS[parts[0]];
    document.body.dataset.topic = topic ? topic.id : '';
    renderNav(topic);
    if (!topic) { $('#subbar').innerHTML = ''; app.innerHTML = renderHome(); bindHome(); window.scrollTo(0, 0); return; }
    const view = parts[1] === 'aufgaben' ? 'aufgaben' : 'theorie';
    renderSubbar(topic, view, parts);
    if (view === 'theorie') renderTheory(topic, parts[2]);
    else renderTasks(topic, parts[2], parts[3]);
  }
  window.addEventListener('hashchange', route);

  function renderNav(topic) {
    const cur = topic ? topic.id : 'home';
    $('#mainnav').innerHTML =
      `<a href="#/" class="home-link ${cur === 'home' ? 'active' : ''}">Übersicht</a>` +
      Object.values(TOPICS).map((t) =>
        `<a href="#/${t.id}/theorie/0" class="${cur === t.id ? 'active' : ''}"><span class="dot" style="background:var(--${t.id})"></span>Thema ${Number(t.num)}</a>`).join('');
  }

  function renderSubbar(t, view, parts) {
    const lastChap = store.d.lastChap && store.d.lastChap[t.id] != null ? store.d.lastChap[t.id] : 0;
    const theoryHref = view === 'theorie' && parts[2] ? `#/${t.id}/theorie/${parts[2]}` : `#/${t.id}/theorie/${lastChap}`;
    $('#subbar').innerHTML = `<div class="subbar"><div class="subbar-inner">
      <div class="topic-label"><span class="num">Thema ${t.num}</span><span class="name">${MD.inline(t.short)}</span></div>
      <nav class="segmented" aria-label="Bereich">
        <a href="${theoryHref}" class="${view === 'theorie' ? 'active' : ''}">Theorie</a>
        <a href="#/${t.id}/aufgaben" class="${view === 'aufgaben' ? 'active' : ''}">Aufgaben</a>
      </nav></div></div>`;
  }

  /* ---------------- Startseite ---------------- */
  function renderHome() {
    const cards = Object.values(TOPICS).map((t) => {
      const read = Object.keys(store.bucket('read', t.id)).length;
      const goals = Object.values(store.bucket('goals', t.id)).filter(Boolean).length;
      const best = store.d.quizBest[t.id];
      const pct = (a, b) => (b ? Math.round(a / b * 100) : 0);
      const quote = t.intro.find((b) => b.t === 'quote');
      const goalsList = t.goalTexts.slice(0, 4).map((g) => `<li><span>${MD.inline(g)}</span></li>`).join('') +
        (t.goalTexts.length > 4 ? `<li class="more">+ ${t.goalTexts.length - 4} weitere Lernziele</li>` : '');
      return `<article class="topic-card" data-topic="${t.id}">
        <div class="tc-num">Thema ${t.num}</div>
        <h2>${MD.inline(t.short)}</h2>
        <p class="tc-sub">${quote ? MD.render(quote.children).replace(/<\/?p>/g, '') : esc(t.title)}</p>
        <ul class="tc-goals">${goalsList}</ul>
        <div class="tc-stats">
          <div class="stat"><div class="lbl">Kapitel gelesen</div><div class="val">${read}/${t.chapters.length}</div><div class="bar"><i style="width:${pct(read, t.chapters.length)}%"></i></div></div>
          <div class="stat"><div class="lbl">Lernziele</div><div class="val">${goals}/${t.goalCount}</div><div class="bar"><i style="width:${pct(goals, t.goalCount)}%"></i></div></div>
          <div class="stat"><div class="lbl">Quiz-Bestwert</div><div class="val">${best == null ? '–' : best + ' %'}</div><div class="bar"><i style="width:${best || 0}%"></i></div></div>
        </div>
        <div class="tc-actions">
          <a class="btn primary" href="#/${t.id}/theorie/${(store.d.lastChap && store.d.lastChap[t.id]) || 0}">Theorie</a>
          <a class="btn" href="#/${t.id}/aufgaben">Aufgaben</a>
        </div>
      </article>`;
    }).join('');
    return `<section class="home">
      <div class="home-head">
        <p class="eyebrow">Wirtschaft &amp; Recht · Berufsmatur · 3. Jahr</p>
        <h1>Marketing</h1>
        <p class="lead">Wähle ein Thema. Im Theorieblock steht deine Zusammenfassung vollständig und unverändert, im Aufgabenblock übst du mit Karteikarten, Quiz, Zuordnungs- und Rechenaufgaben.</p>
      </div>
      <div class="topic-grid">${cards}</div>
      <div class="home-note"><span>Dein Fortschritt wird nur in diesem Browser gespeichert.</span><button type="button" id="reset">Fortschritt zurücksetzen</button></div>
    </section>`;
  }
  function bindHome() {
    $('#reset').addEventListener('click', () => {
      if (confirm('Gesamten Lernfortschritt (gelesene Kapitel, Lernziele, Quiz-Bestwerte) löschen?')) {
        store.d = {}; store.load(); store.save(); route();
      }
    });
  }

  /* ---------------- Theorie ---------------- */
  function renderTheory(t, param) {
    const all = param === 'alle';
    const n = t.chapters.length;
    const idx = all ? -1 : Math.min(Math.max(parseInt(param, 10) || 0, 0), n - 1);
    if (!all) { store.d.lastChap = store.d.lastChap || {}; store.d.lastChap[t.id] = idx; store.save(); }
    const read = store.bucket('read', t.id);
    const goals = store.bucket('goals', t.id);

    const renderChapter = (c) => MD.render(c.blocks, { goal: { offset: c.goalOffset, checked: goals } });
    const intro = MD.render(t.intro);

    let body;
    if (all) {
      body = `<div class="prose doc-intro">${intro}</div>` +
        t.chapters.map((c, i) => `<section class="prose" data-chap="${i}">${renderChapter(c)}</section>`).join('<hr class="chapter-sep">');
    } else {
      const c = t.chapters[idx];
      const prev = idx > 0 ? `<a class="btn ghost" href="#/${t.id}/theorie/${idx - 1}">← ${esc(stripMd(t.chapters[idx - 1].title))}</a>` : '';
      const isRead = !!read[idx];
      const next = idx < n - 1
        ? `<button class="btn primary" id="readNext">${isRead ? '' : 'Gelesen · '}Weiter: ${esc(stripMd(t.chapters[idx + 1].title))} →</button>`
        : `<button class="btn primary" id="readNext">${isRead ? 'Zu den Aufgaben →' : 'Gelesen · Zu den Aufgaben →'}</button>`;
      body = (idx === 0 ? `<div class="prose doc-intro">${intro}</div>` : '') +
        `<div class="reader-crumb">Kapitel ${idx + 1} von ${n}</div>` +
        `<section class="prose" data-chap="${idx}">${renderChapter(c)}</section>` +
        `<div class="chapter-foot">${prev}<span class="spacer"></span>
          <button class="btn small ghost" id="toggleRead">${isRead ? '✓ Als gelesen markiert' : 'Als gelesen markieren'}</button>${next}</div>`;
    }

    const readCount = Object.keys(read).length;
    const tocItems = t.chapters.map((c, i) => {
      const subs = c.blocks.filter((b) => b.t === 'h' && b.level === 3);
      const subHtml = (i === idx && subs.length)
        ? `<div class="subs">${subs.map((s, k) => `<a href="javascript:void 0" data-jump="${k}">${MD.inline(s.text)}</a>`).join('')}</div>` : '';
      return `<li><a class="ch ${i === idx ? 'active' : ''} ${read[i] ? 'read' : ''}" href="#/${t.id}/theorie/${i}">
        <span class="n">${String(i + 1).padStart(2, '0')}</span><span class="t">${MD.inline(c.title)}</span><span class="r" title="${read[i] ? 'gelesen' : 'noch nicht gelesen'}"></span></a>${subHtml}</li>`;
    }).join('');

    const meta = t.meta;
    $('#app').innerHTML = `<div class="theory">
      <button class="btn toc-toggle" id="tocToggle">☰ Kapitel (${idx + 1 || 'alle'} / ${n})</button>
      <aside class="toc" id="toc">
        <p class="toc-head">Inhalt</p>
        <div class="toc-progress"><div class="bar"><i style="width:${Math.round(readCount / n * 100)}%"></i></div><span>${readCount}/${n}</span></div>
        <ol>${tocItems}</ol>
        <div class="toc-all"><a class="btn small ${all ? 'primary' : ''}" href="#/${t.id}/theorie/${all ? 0 : 'alle'}">${all ? 'Einzelne Kapitel' : 'Ganzes Dokument auf einer Seite'}</a></div>
        <div class="meta">Quelle: <code>${esc(t.file)}</code>${meta.datum ? `<br>Datum: ${esc(meta.datum)}` : ''}${meta.tags ? `<br>Tags: ${esc(meta.tags.replace(/[\[\]]/g, ''))}` : ''}</div>
      </aside>
      <article class="reader">${body}</article>
    </div>`;
    window.scrollTo(0, 0);

    // Lernziele abhaken
    $$('input[data-goal]').forEach((inp) => inp.addEventListener('change', () => {
      goals[inp.dataset.goal] = inp.checked; store.save();
    }));
    // Verweise auf andere Notizen
    $$('a.wl').forEach((a) => {
      const target = NOTE_LINKS[a.dataset.target];
      if (target) { a.classList.add('internal'); a.title = 'Zum Thema wechseln'; a.addEventListener('click', () => { location.hash = `#/${target}/theorie/0`; }); }
      else a.title = 'Verknüpfung in deinem Second Brain (nicht Teil dieser App)';
    });
    // Unterkapitel-Sprung
    $$('.toc [data-jump]').forEach((a) => a.addEventListener('click', () => {
      const h3 = $$('.reader section h3')[+a.dataset.jump];
      if (h3) h3.scrollIntoView({ behavior: 'smooth', block: 'start' });
      $('#toc').classList.remove('open');
    }));
    $('#tocToggle').addEventListener('click', () => $('#toc').classList.toggle('open'));

    if (!all) {
      $('#toggleRead').addEventListener('click', () => {
        if (read[idx]) delete read[idx]; else read[idx] = true;
        store.save(); renderTheory(t, String(idx));
      });
      $('#readNext').addEventListener('click', () => {
        read[idx] = true; store.save();
        location.hash = idx < n - 1 ? `#/${t.id}/theorie/${idx + 1}` : `#/${t.id}/aufgaben`;
      });
      keyHandler = (e) => {
        if (e.key === 'ArrowRight' && idx < n - 1) location.hash = `#/${t.id}/theorie/${idx + 1}`;
        if (e.key === 'ArrowLeft' && idx > 0) location.hash = `#/${t.id}/theorie/${idx - 1}`;
      };
    }
  }

  function stripMd(s) { return s.replace(/\*\*|\*|`/g, ''); }

  /* ---------------- Aufgaben ---------------- */
  function renderTasks(t, mode, sub) {
    const T = t.tasks;
    const modes = [
      ['karten', 'Karteikarten', T.karten.length],
      ['quiz', 'Quiz', T.quiz.length],
      ['zuordnen', 'Zuordnen', T.zuordnen.length],
      ['reihenfolge', 'Reihenfolge', T.reihenfolge.length],
    ];
    if (T.rechnen) modes.push(['rechnen', 'Rechnen', window.CALC.types.length]);
    if (!modes.some((m) => m[0] === mode)) mode = 'karten';

    $('#app').innerHTML = `<div class="tasks-head"><nav class="modes">${modes.map(([id, name, c]) =>
      `<a href="#/${t.id}/aufgaben/${id}" class="${id === mode ? 'active' : ''}">${name}<span class="c">${c}</span></a>`).join('')}</nav></div>
      <div id="taskArea"></div>`;
    window.scrollTo(0, 0);
    const area = $('#taskArea');
    ({ karten: Flashcards, quiz: Quiz, zuordnen: Assign, reihenfolge: Order, rechnen: Calc })[mode](t, area, sub);
  }

  /* ----- Karteikarten ----- */
  function Flashcards(t, area) {
    const cards = t.tasks.karten;
    const known = store.bucket('known', t.id);
    let deck, pos, again, round, flipped, stats;

    function start(indices) {
      deck = indices; pos = 0; again = []; flipped = false; round++;
      stats = { known: 0, again: 0 };
      draw();
    }
    round = 0;

    function draw() {
      if (pos >= deck.length) return finish();
      const c = cards[deck[pos]];
      const knownTotal = Object.keys(known).length;
      area.innerHTML = `<div class="panel panel-narrow">
        <div class="panel-head"><h2>Karteikarten</h2><span class="muted small">Runde ${round} · Karte ${pos + 1} von ${deck.length}</span><span class="spacer"></span>
          <span class="muted small">${knownTotal}/${cards.length} sicher gewusst</span></div>
        <div class="progress"><i style="width:${pos / deck.length * 100}%"></i></div>
        <div class="flash-wrap"><div class="flash ${flipped ? 'flipped' : ''}" id="flash" tabindex="0" role="button" aria-label="Karte umdrehen">
          <div class="face front"><span class="label">Frage</span><div class="q">${MD.inline(c.f)}</div><span class="hint">Klicken oder <span class="kbd">Leertaste</span> zum Umdrehen</span></div>
          <div class="face back"><span class="label">Antwort</span><div class="prose">${MD.renderSnippet(c.b)}</div></div>
        </div></div>
        <div class="flash-actions">
          <button class="btn again" id="again" ${flipped ? '' : 'disabled'}>Nochmal <span class="kbd">1</span></button>
          <button class="btn known" id="known" ${flipped ? '' : 'disabled'}>Gewusst <span class="kbd">2</span></button>
        </div>
      </div>`;
      const flip = () => { flipped = !flipped; $('#flash').classList.toggle('flipped', flipped); $('#again').disabled = !flipped; $('#known').disabled = !flipped; };
      $('#flash').addEventListener('click', flip);
      $('#again').addEventListener('click', () => answer(false));
      $('#known').addEventListener('click', () => answer(true));
      keyHandler = (e) => {
        if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); }
        else if (flipped && e.key === '1') answer(false);
        else if (flipped && e.key === '2') answer(true);
      };
    }

    function answer(ok) {
      const id = deck[pos];
      if (ok) { known[id] = true; stats.known++; } else { delete known[id]; again.push(id); stats.again++; }
      store.save();
      pos++; flipped = false; draw();
    }

    function finish() {
      keyHandler = null;
      area.innerHTML = `<div class="panel panel-narrow"><div class="result">
        <div class="score">${stats.known}<small> / ${deck.length}</small></div>
        <p>Karten in dieser Runde gewusst.</p>
        <div class="choice-row" style="justify-content:center;margin-top:18px">
          ${again.length ? `<button class="btn primary" id="redo">${again.length} unsichere Karten wiederholen</button>` : '<p class="feedback ok" style="width:100%">Alle Karten gewusst.</p>'}
          <button class="btn" id="all">Alle Karten neu mischen</button>
        </div></div></div>`;
      if (again.length) $('#redo').addEventListener('click', () => start(shuffle(again)));
      $('#all').addEventListener('click', () => { round = 0; start(shuffle(cards.map((_, i) => i))); });
    }

    // Startbildschirm
    const knownTotal = Object.keys(known).length;
    area.innerHTML = `<div class="panel panel-narrow">
      <div class="panel-head"><h2>Karteikarten</h2><span class="spacer"></span><span class="muted small">${cards.length} Karten</span></div>
      <p>Lies die Frage, überlege dir die Antwort und dreh die Karte um. Was du nicht wusstest, kommt am Ende der Runde nochmal.</p>
      <p class="muted small">Bisher sicher gewusst: ${knownTotal} von ${cards.length}</p>
      <div class="choice-row" style="margin-top:18px">
        <button class="btn primary" id="startAll">Alle ${cards.length} Karten lernen</button>
        ${knownTotal && knownTotal < cards.length ? `<button class="btn" id="startOpen">Nur noch nicht gewusste (${cards.length - knownTotal})</button>` : ''}
        <button class="btn ghost" id="startOrder">In Reihenfolge der Theorie</button>
      </div></div>`;
    $('#startAll').addEventListener('click', () => start(shuffle(cards.map((_, i) => i))));
    $('#startOrder').addEventListener('click', () => start(cards.map((_, i) => i)));
    const so = $('#startOpen');
    if (so) so.addEventListener('click', () => start(shuffle(cards.map((_, i) => i).filter((i) => !known[i]))));
  }

  /* ----- Quiz ----- */
  function Quiz(t, area) {
    const pool = t.tasks.quiz;
    let qs, pos, score, answered, wrong;

    function intro() {
      const best = store.d.quizBest[t.id];
      area.innerHTML = `<div class="panel panel-narrow">
        <div class="panel-head"><h2>Quiz</h2><span class="spacer"></span><span class="muted small">${pool.length} Fragen im Pool${best != null ? ` · Bestwert ${best} %` : ''}</span></div>
        <p>Multiple Choice mit Erklärung nach jeder Frage. Wähle, wie viele Fragen du beantworten willst:</p>
        <div class="choice-row" style="margin-top:16px">
          <button class="btn primary" data-n="10">10 Fragen</button>
          <button class="btn" data-n="20">20 Fragen</button>
          <button class="btn" data-n="${pool.length}">Alle ${pool.length}</button>
        </div></div>`;
      $$('[data-n]', area).forEach((b) => b.addEventListener('click', () => begin(+b.dataset.n)));
    }

    function begin(n) {
      qs = shuffle(pool).slice(0, n).map((q) => {
        const opts = shuffle(q.o.map((text, i) => ({ text, ok: i === 0 })));
        return { q: q.q, e: q.e, opts };
      });
      pos = 0; score = 0; wrong = [];
      draw();
    }

    function draw() {
      if (pos >= qs.length) return finish();
      answered = false;
      const q = qs[pos];
      area.innerHTML = `<div class="panel panel-narrow">
        <div class="panel-head"><h2>Quiz</h2><span class="muted small">Frage ${pos + 1} von ${qs.length}</span><span class="spacer"></span><span class="muted small">${score} richtig</span></div>
        <div class="progress"><i style="width:${pos / qs.length * 100}%"></i></div>
        <p class="quiz-q">${MD.inline(q.q)}</p>
        <div class="options">${q.opts.map((o, i) => `<button class="option" data-i="${i}"><span class="letter">${'ABCD'[i]}</span><span>${MD.inline(o.text)}</span></button>`).join('')}</div>
        <div id="explain"></div>
      </div>`;
      $$('.option', area).forEach((b) => b.addEventListener('click', () => choose(+b.dataset.i)));
      keyHandler = (e) => {
        const k = e.key.toLowerCase();
        const map = { a: 0, b: 1, c: 2, d: 3, 1: 0, 2: 1, 3: 2, 4: 3 };
        if (!answered && k in map && map[k] < q.opts.length) choose(map[k]);
        else if (answered && (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight')) { e.preventDefault(); pos++; draw(); }
      };
    }

    function choose(i) {
      if (answered) return;
      answered = true;
      const q = qs[pos];
      const ok = q.opts[i].ok;
      if (ok) score++; else wrong.push({ q: q.q, given: q.opts[i].text, right: q.opts.find((o) => o.ok).text });
      $$('.option', area).forEach((b, k) => {
        b.disabled = true;
        if (q.opts[k].ok) b.classList.add('correct');
        else if (k === i) b.classList.add('wrong');
        else b.classList.add('dim');
      });
      $('#explain').innerHTML = `<div class="explain"><div class="verdict ${ok ? 'ok' : 'bad'}">${ok ? 'Richtig' : 'Leider falsch'}</div><div class="prose">${MD.renderSnippet(q.e)}</div></div>
        <div class="quiz-foot"><button class="btn primary" id="next">${pos < qs.length - 1 ? 'Nächste Frage' : 'Auswertung'} <span class="kbd">Enter</span></button></div>`;
      $('#next').addEventListener('click', () => { pos++; draw(); });
    }

    function finish() {
      keyHandler = null;
      const pct = Math.round(score / qs.length * 100);
      const prev = store.d.quizBest[t.id];
      if (prev == null || pct > prev) { store.d.quizBest[t.id] = pct; store.save(); }
      area.innerHTML = `<div class="panel panel-narrow"><div class="result">
        <div class="score">${pct}<small> %</small></div>
        <p>${score} von ${qs.length} Fragen richtig${prev != null && pct > prev ? ' – neuer Bestwert' : ''}.</p>
        <div class="choice-row" style="justify-content:center;margin-top:14px">
          <button class="btn primary" id="again">Neues Quiz</button>
          <a class="btn" href="#/${t.id}/aufgaben/karten">Zu den Karteikarten</a>
        </div></div>
        ${wrong.length ? `<div class="review"><p class="toc-head" style="margin:8px 0 0">Das solltest du nochmal anschauen</p>${wrong.map((w) => `<div class="review-item"><div class="rq">${MD.inline(w.q)}</div><div class="rw">${MD.inline(w.given)}</div><div class="ra">✓ ${MD.inline(w.right)}</div></div>`).join('')}</div>` : ''}
      </div>`;
      $('#again').addEventListener('click', intro);
    }

    intro();
  }

  /* ----- Zuordnen ----- */
  function Assign(t, area, sub) {
    const sets = t.tasks.zuordnen;
    const done = store.bucket('assignDone', t.id);
    let si = Math.min(Math.max(parseInt(sub, 10) || 0, 0), sets.length - 1);
    let place, selected, checked;

    function load() {
      place = {}; selected = null; checked = false;
      order = shuffle(sets[si].items.map((_, i) => i));
      draw();
    }
    let order = [];

    function chip(i) {
      const it = sets[si].items[i];
      let cls = 'chip';
      if (selected === i) cls += ' selected';
      if (checked && place[i] != null) cls += place[i] === it[1] ? ' ok' : ' bad';
      return `<button class="${cls}" draggable="true" data-item="${i}">${esc(it[0])}</button>`;
    }

    function draw() {
      const set = sets[si];
      const inPool = order.filter((i) => place[i] == null);
      const placed = Object.keys(place).length;
      let fb = '';
      if (checked) {
        const right = Object.entries(place).filter(([i, b]) => set.items[i][1] === b).length;
        const all = right === set.items.length;
        fb = `<span class="feedback ${all ? 'ok' : 'bad'}">${all ? 'Alles richtig zugeordnet.' : `${right} von ${set.items.length} richtig${placed < set.items.length ? ` · ${set.items.length - placed} noch nicht verteilt` : ''}`}</span>`;
      }
      area.innerHTML = `<div class="panel">
        <div class="sets">${sets.map((s, i) => `<button class="chip-btn ${i === si ? 'active' : ''}" data-set="${i}">${esc(s.title)}${done[i] ? '<span class="ok">✓</span>' : ''}</button>`).join('')}</div>
        <div class="panel-head"><h2>${esc(set.title)}</h2><span class="spacer"></span><span class="muted small">Begriff antippen, dann Gruppe wählen – oder ziehen.</span></div>
        <div class="pool ${inPool.length ? '' : 'empty'}" id="pool" data-bucket="pool">${inPool.map(chip).join('')}</div>
        <div class="buckets">${set.buckets.map((b, bi) => {
          const items = order.filter((i) => place[i] === bi);
          return `<div class="bucket ${selected != null ? 'armed' : ''}" data-bucket="${bi}"><h3><span>${esc(b)}</span><span class="cnt">${items.length}</span></h3><div class="items">${items.map(chip).join('')}</div></div>`;
        }).join('')}</div>
        <div class="assign-foot">${fb}<span class="spacer"></span>
          <button class="btn ghost" id="solve">Lösung zeigen</button>
          <button class="btn" id="reset">Neu mischen</button>
          <button class="btn primary" id="check" ${placed ? '' : 'disabled'}>Prüfen</button>
        </div></div>`;

      $$('[data-set]', area).forEach((b) => b.addEventListener('click', () => { si = +b.dataset.set; history.replaceState(null, '', `#/${t.id}/aufgaben/zuordnen/${si}`); load(); }));
      $$('.chip', area).forEach((c) => {
        c.addEventListener('click', (e) => {
          e.stopPropagation();
          const i = +c.dataset.item;
          selected = selected === i ? null : i;
          checked = false; draw();
        });
        c.addEventListener('dragstart', (e) => { e.dataTransfer.setData('text/plain', c.dataset.item); e.dataTransfer.effectAllowed = 'move'; });
      });
      $$('[data-bucket]', area).forEach((b) => {
        b.addEventListener('click', () => { if (selected != null) move(selected, b.dataset.bucket); });
        b.addEventListener('dragover', (e) => { e.preventDefault(); b.classList.add('drop'); });
        b.addEventListener('dragleave', () => b.classList.remove('drop'));
        b.addEventListener('drop', (e) => { e.preventDefault(); move(+e.dataTransfer.getData('text/plain'), b.dataset.bucket); });
      });
      $('#check').addEventListener('click', () => {
        checked = true;
        const allRight = set.items.every((it, i) => place[i] === it[1]);
        if (allRight) { done[si] = true; store.save(); }
        draw();
      });
      $('#solve').addEventListener('click', () => { set.items.forEach((it, i) => { place[i] = it[1]; }); selected = null; checked = true; draw(); });
      $('#reset').addEventListener('click', load);
    }

    function move(i, bucket) {
      if (bucket === 'pool') delete place[i]; else place[i] = +bucket;
      selected = null; checked = false; draw();
    }

    load();
  }

  /* ----- Reihenfolge ----- */
  function Order(t, area, sub) {
    const sets = t.tasks.reihenfolge;
    const done = store.bucket('orderDone', t.id);
    let si = Math.min(Math.max(parseInt(sub, 10) || 0, 0), sets.length - 1);
    let cur, checked, dragFrom;

    function load() {
      const n = sets[si].items.length;
      do { cur = shuffle(sets[si].items.map((_, i) => i)); } while (n > 1 && cur.every((v, i) => v === i));
      checked = false; draw();
    }

    function draw() {
      const set = sets[si];
      let fb = '';
      if (checked) {
        const right = cur.filter((v, i) => v === i).length;
        fb = `<span class="feedback ${right === cur.length ? 'ok' : 'bad'}">${right === cur.length ? 'Richtige Reihenfolge.' : `${right} von ${cur.length} an der richtigen Stelle`}</span>`;
      }
      area.innerHTML = `<div class="panel">
        <div class="sets">${sets.map((s, i) => `<button class="chip-btn ${i === si ? 'active' : ''}" data-set="${i}">${esc(s.title)}${done[i] ? '<span class="ok">✓</span>' : ''}</button>`).join('')}</div>
        <div class="panel-head"><h2>${esc(set.title)}</h2><span class="spacer"></span><span class="muted small">Mit den Pfeilen oder per Ziehen sortieren.</span></div>
        <ol class="order-list">${cur.map((v, i) => `<li class="order-item ${checked ? (v === i ? 'ok' : 'bad') : ''}" draggable="true" data-pos="${i}">
          <span class="pos">${i + 1}</span><span class="txt">${esc(set.items[v])}</span>
          <span class="mv"><button data-up="${i}" ${i === 0 ? 'disabled' : ''} aria-label="nach oben">↑</button><button data-down="${i}" ${i === cur.length - 1 ? 'disabled' : ''} aria-label="nach unten">↓</button></span></li>`).join('')}</ol>
        <div class="assign-foot">${fb}<span class="spacer"></span>
          <button class="btn ghost" id="solve">Lösung zeigen</button>
          <button class="btn" id="reset">Neu mischen</button>
          <button class="btn primary" id="check">Prüfen</button>
        </div></div>`;

      $$('[data-set]', area).forEach((b) => b.addEventListener('click', () => { si = +b.dataset.set; history.replaceState(null, '', `#/${t.id}/aufgaben/reihenfolge/${si}`); load(); }));
      $$('[data-up]', area).forEach((b) => b.addEventListener('click', () => swap(+b.dataset.up, +b.dataset.up - 1)));
      $$('[data-down]', area).forEach((b) => b.addEventListener('click', () => swap(+b.dataset.down, +b.dataset.down + 1)));
      $$('.order-item', area).forEach((li) => {
        li.addEventListener('dragstart', () => { dragFrom = +li.dataset.pos; li.classList.add('dragging'); });
        li.addEventListener('dragend', () => li.classList.remove('dragging'));
        li.addEventListener('dragover', (e) => e.preventDefault());
        li.addEventListener('drop', (e) => {
          e.preventDefault();
          const to = +li.dataset.pos;
          if (dragFrom == null || dragFrom === to) return;
          const [v] = cur.splice(dragFrom, 1); cur.splice(to, 0, v); dragFrom = null; checked = false; draw();
        });
      });
      $('#check').addEventListener('click', () => {
        checked = true;
        if (cur.every((v, i) => v === i)) { done[si] = true; store.save(); }
        draw();
      });
      $('#solve').addEventListener('click', () => { cur = set.items.map((_, i) => i); checked = true; draw(); });
      $('#reset').addEventListener('click', load);
    }

    function swap(a, b) { [cur[a], cur[b]] = [cur[b], cur[a]]; checked = false; draw(); }

    load();
  }

  /* ----- Rechnen ----- */
  function Calc(t, area, sub) {
    const types = window.CALC.types;
    const stats = store.bucket('calc', t.id);
    let ti = Math.max(0, types.findIndex((x) => x.id === sub));
    let prob, solved;

    function next() { prob = types[ti].gen(); solved = false; draw(); }

    function parseNum(s) {
      s = String(s).replace(/[’'\s]/g, '').replace(/%|chf|mio\.?|stück/gi, '').replace(',', '.');
      if (s === '' || isNaN(+s)) return null;
      return +s;
    }

    function draw(results) {
      area.innerHTML = `<div class="panel panel-narrow">
        <div class="sets">${types.map((x, i) => `<button class="chip-btn ${i === ti ? 'active' : ''}" data-type="${i}">${esc(x.name)}</button>`).join('')}</div>
        <div class="panel-head"><h2>${esc(types[ti].name)}</h2><span class="spacer"></span><span class="calc-stats">${stats.ok} von ${stats.total} Aufgaben richtig gelöst</span></div>
        <div class="prose calc-text">${MD.renderSnippet(prob.text)}</div>
        <form class="fields" id="calcForm" autocomplete="off">${prob.fields.map((f, i) => {
          const r = results ? results[i] : null;
          const cls = r == null ? '' : r ? 'ok' : 'bad';
          const inputHtml = f.type === 'select'
            ? `<select name="f${i}" id="f${i}"><option value="">– wählen –</option>${f.options.map((o, k) => `<option value="${k}">${esc(o)}</option>`).join('')}</select>`
            : `<input name="f${i}" id="f${i}" inputmode="decimal" placeholder="Ergebnis">${f.unit ? `<span class="unit">${esc(f.unit)}</span>` : ''}`;
          return `<div class="field ${cls}"><label for="f${i}">${esc(f.label)}</label><div class="inp">${inputHtml}</div><span class="mark ${cls}">${r == null ? '' : r ? '✓ richtig' : '✗'}</span></div>`;
        }).join('')}
          <div class="assign-foot" style="margin-top:6px"><span class="spacer"></span>
            <button type="button" class="btn ghost" id="show">Lösungsweg zeigen</button>
            <button type="button" class="btn" id="new">Neue Aufgabe</button>
            <button type="submit" class="btn primary">Prüfen</button>
          </div>
        </form>
        <div id="sol"></div>
      </div>`;

      $$('[data-type]', area).forEach((b) => b.addEventListener('click', () => {
        ti = +b.dataset.type; history.replaceState(null, '', `#/${t.id}/aufgaben/rechnen/${types[ti].id}`); next();
      }));
      $('#new').addEventListener('click', next);
      $('#show').addEventListener('click', showSolution);
      $('#calcForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const form = e.target;
        const values = prob.fields.map((f, i) => form.elements['f' + i].value);
        const res = prob.fields.map((f, i) => {
          if (f.type === 'select') return values[i] !== '' && +values[i] === f.answer;
          const v = parseNum(values[i]);
          return v != null && Math.abs(v - f.answer) <= f.tol;
        });
        const allOk = res.every(Boolean);
        if (!solved) { stats.total++; if (allOk) stats.ok++; store.save(); solved = true; }
        draw(res);
        prob.fields.forEach((f, i) => { $('#calcForm').elements['f' + i].value = values[i]; });
        if (allOk) showSolution();
      });
      if (!results) { const first = $('#calcForm input, #calcForm select'); if (first) first.focus({ preventScroll: true }); }
    }

    function showSolution() {
      $('#sol').innerHTML = `<div class="solution"><h4>Lösungsweg</h4><div class="prose">${MD.renderSnippet(prob.solution)}</div></div>`;
    }

    next();
  }

  route();
})();
