// user.js
const db = require('../db/database');
const bcrypt = require('bcrypt');

const createUser = async (user) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.run(query, [user.name, user.email, hashedPassword], function(err) {
      if (err) return reject(err);
      resolve({ id: this.lastID });
    });
  });
};

const getUserById = (id) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM users WHERE id = ?';
    db.get(query, [id], (err, row) => {
      if (err) return reject(err);
      resolve(row);
    });
  });
};

const updateUser = async (id, user) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  return new Promise((resolve, reject) => {
    const query = 'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?';
    db.run(query, [user.name, user.email, hashedPassword, id], function(err) {
      if (err) return reject(err);
      resolve({ changes: this.changes });
    });
  });
};

const deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM users WHERE id = ?';
    db.run(query, [id], function(err) {
      if (err) return reject(err);
      resolve({ changes: this.changes });
    });
  });
};

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM users';
    db.all(query, [], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
};

module.exports = { createUser, getUserById, updateUser, deleteUser, getAllUsers };

/*
Útskýring á kóðanum:

1. `const db = require('../db/database');`
   - Flytur inn db hlutinn frá database.js.

2. `const bcrypt = require('bcrypt');`
   - Flytur inn bcrypt til að dulkóða lykilorð.

3. `const createUser = async (user) => { ... };`
   - Skilgreinir aðgerðina createUser sem býr til nýjan notanda með dulkóðuðu lykilorði.

4. `const hashedPassword = await bcrypt.hash(user.password, 10);`
   - Dulkóðar lykilorðið með bcrypt.

5. `const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';`
   - SQL fyrirspurn til að bæta við nýjum notanda í gagnagrunninn.

6. `db.run(query, [user.name, user.email, hashedPassword], function(err) { ... });`
   - Keyrir SQL fyrirspurnina og bætir við nýjum notanda.

7. `const getUserById = (id) => { ... };`
   - Skilgreinir aðgerðina getUserById sem sækir notanda eftir ID.

8. `const query = 'SELECT * FROM users WHERE id = ?';`
   - SQL fyrirspurn til að sækja notanda eftir ID.

9. `db.get(query, [id], (err, row) => { ... });`
   - Keyrir SQL fyrirspurnina og sækir notandann.

10. `const updateUser = async (id, user) => { ... };`
    - Skilgreinir aðgerðina updateUser sem uppfærir notanda með nýju dulkóðuðu lykilorði.

11. `const query = 'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?';`
    - SQL fyrirspurn til að uppfæra notanda eftir ID.

12. `db.run(query, [user.name, user.email, hashedPassword, id], function(err) { ... });`
    - Keyrir SQL fyrirspurnina og uppfærir notandann.

13. `const deleteUser = (id) => { ... };`
    - Skilgreinir aðgerðina deleteUser sem eyðir notanda eftir ID.

14. `const query = 'DELETE FROM users WHERE id = ?';`
    - SQL fyrirspurn til að eyða notanda eftir ID.

15. `db.run(query, [id], function(err) { ... });`
    - Keyrir SQL fyrirspurnina og eyðir notandanum.

16. `const getAllUsers = () => { ... };`
    - Skilgreinir aðgerðina getAllUsers sem sækir alla notendur.

17. `const query = 'SELECT * FROM users';`
    - SQL fyrirspurn til að sækja alla notendur.

18. `db.all(query, [], (err, rows) => { ... });`
    - Keyrir SQL fyrirspurnina og sækir alla notendur.

19. `module.exports = { createUser, getUserById, updateUser, deleteUser, getAllUsers };`
    - Flytur út aðgerðirnar svo þær séu aðgengilegar í öðrum skrám.
*/