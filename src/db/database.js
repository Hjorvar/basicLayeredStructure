// database.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(process.env.DB_PATH || './src/db/database.sqlite'); // Bættu við fallback slóð

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY,
      name TEXT,
      email TEXT,
      password TEXT
    )
  `);
});

module.exports = db;

/*
Útskýring á kóðanum:

1. `const sqlite3 = require('sqlite3').verbose();`
   - Flytur inn sqlite3 og stillir hana á verbose til að fá ítarlegri villuskilaboð.

2. `const db = new sqlite3.Database(process.env.DB_PATH || './src/db/database.sqlite');`
   - Býr til nýjan SQLite gagnagrunn eða tengist núverandi gagnagrunni.
   - Slóðin er sótt úr umhverfisbreytunni DB_PATH eða notast við fallback slóð.

3. `db.serialize(() => { ... });`
   - Notar serialize til að tryggja að allar gagnagrunnsaðgerðir séu framkvæmdar í röð.

4. `db.run(\` CREATE TABLE IF NOT EXISTS users ( ... ) \`);`
   - Býr til users töflu ef hún er ekki til.

5. `module.exports = db;`
   - Flytur út db hlutinn svo hann sé aðgengilegur í öðrum skrám.
*/