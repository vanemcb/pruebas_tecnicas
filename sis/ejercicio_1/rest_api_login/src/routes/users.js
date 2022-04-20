const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');

router.get('/api/users', (req, res) => {
  mysqlConnection.query('SELECT * FROM users', (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      res.json(rows);
    }
  });
});

router.get('/api/users/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('SELECT * FROM users WHERE id = ?', [id], (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      res.json(rows[0]);
    }
  });
});

router.post('/api/add', (req, res) => {
  const data = req.body;
  mysqlConnection.query('INSERT INTO users SET ?', [data], (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      res.json({Status: 'User saved'});
    }
  });
});

router.put('/api/update/:id', (req, res) => {
  const { id } = req.params;
  const data = req.body;
  mysqlConnection.query('UPDATE users SET ? WHERE id = ?', [data, id], (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ Status: 'User updated' });
    }
  });
});

router.delete('/api/delete/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM users WHERE id = ?', [id], (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ Status: 'User deleted' });
    }
  });
});

module.exports = router;
