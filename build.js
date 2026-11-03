// Übernimmt die beiden Markdown-Zusammenfassungen unverändert in die App.
// Nach Änderungen an den Notizen einfach erneut ausführen:  node build.js
const fs = require('fs');
const path = require('path');

const SRC = process.argv[2] ||
  'C:/Users/Leandro/SecondeBrain/Seconde_Brain/Schule/Berufsmatur/Wirtschaft und Recht/3. Jahr/Marketing';

const files = { t1: '01_Marketing_Grundbegriffe.md', t2: '02_Marketing_Mix.md' };
const out = {};
for (const [key, file] of Object.entries(files)) {
  out[key] = { file, text: fs.readFileSync(path.join(SRC, file), 'utf8') };
}

fs.writeFileSync(
  path.join(__dirname, 'data', 'content.js'),
  '// Automatisch erzeugt mit "node build.js" – nicht von Hand bearbeiten.\n' +
  'window.SOURCES = ' + JSON.stringify(out, null, 1) + ';\n',
  'utf8'
);
console.log('Inhalte übernommen:', Object.values(files).join(', '));
