const { Router } = require('express');
const db = require('../db/index');
const userRoute = Router();

/** 
 * Route takes in a name and returns the cooresponding job title and description
 * @returns {JSON} 
  {
    "job_title": "developer",
    "job_description": "writes software"
  }
 */
userRoute.get('/:name', (req, res) => {
  // deconstruct name from the req.params return
  const { name } = req.params;

  // query returns the title and description from the jobs table
  // using the id from the name param in the jobs table
  const sqlFindUser = `
    SELECT title, description 
    FROM jobs 
    WHERE id = (SELECT job FROM users WHERE name = '${name}')
    `;

  // db function to pass in the query and return the output
  db.get(sqlFindUser, (err, row) => {
    if (err) console.error(err.message);
    // if the name does not exist or not in the database
    // return 404 and 'user not found'
    // else return the job_title and job_descripion based on query
    return row
      ? res
          .json({ job_title: row.title, job_description: row.description })
          .status(200)
      : res.status(404).send('user not found');
  });
});

module.exports = userRoute;
