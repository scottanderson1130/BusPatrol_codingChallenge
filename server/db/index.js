var sqlite3 = require('sqlite3').verbose();
/**
 * Import database buspatrol.db
 * This will be exported/imported to use for query
 * Once the app is started, the messaging will inform whether it is successful or not
 */

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
