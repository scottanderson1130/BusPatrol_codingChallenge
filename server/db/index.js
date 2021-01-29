var sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(
  './buspatrol.db',
  sqlite3.OPEN_READWRITE,
  err => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the buspatrol database.');
  }
);

module.exports = db;
