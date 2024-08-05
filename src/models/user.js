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
