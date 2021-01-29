const { Router } = require('express');
const db = require('../db/index');
const userRoute = Router();

userRoute.get('/:name', (req, res) => {
  const { name } = req.params;

  const sqlFindUser = `
    SELECT title, description 
    FROM jobs 
    WHERE id = (SELECT job FROM users WHERE name = '${name}')
    `;

  db.get(sqlFindUser, (err, row) => {
    if (err) console.error(err.message);
    row ? res.json(row).status(200) : res.status(404).send('user not found');
  });
});

module.exports = userRoute;
