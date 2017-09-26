// Creates an object for use with PG Promise
const options = {
  query: e => console.log(e.query),
};

// Imports PG Promise and
const pgp = require('pg-promise')(options);

// Creates a database variable
let db;

// Detects environment and assigns database values
if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  db = pgp({
    database: 'pantry_dev',
    port: 5432,
    host: 'localhost',
  });
}

if (process.env.NODE_ENV === 'production') {
  db = pgp(process.env.DATABASE_URL);
}

// Shares functionality with the rest of the app
module.exports = db;
