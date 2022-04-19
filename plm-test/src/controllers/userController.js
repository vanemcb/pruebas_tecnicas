const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, cnx) => {
    cnx.query('SELECT * FROM form', (err, rows) => {
      if (err) {
        res.json(err);
      }
      console.log(rows);
      res.render('users', {
        data: rows
      });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  //console.log(req.body)
  req.getConnection((err, cnx) => {
    cnx.query('INSERT INTO form SET ?', data, (err, rows) => {
      if (err) {
        res.json(err);
      }
      //console.log(rows)
      res.redirect('/');
    })
  })
};

controller.edit = (req, res) => {
  const id = req.params.id;
  req.getConnection((err, cnx) => {
    cnx.query('SELECT * FROM form WHERE id = ?', id, (err, rows) => {
      if (err) {
        res.json(err);
      }
      res.render('users_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const id = req.params.id;
  const newCustomer = req.body;
  req.getConnection((err, cnx) => {
    cnx.query('UPDATE form SET ? WHERE id = ?', [newCustomer, id], (err, rows) => {
      res.redirect('/');
    });
  });
};

controller.delete = (req, res) => {
  const id = req.params.id;
  req.getConnection((err, cnx) => {
    cnx.query('DELETE FROM form WHERE id = ?', id, (err, rows) => {
      res.redirect('/');
    });
  });
};

module.exports = controller;
