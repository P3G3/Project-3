// Imports the database configuration
const db = require('../db/config');

// Creates an object to hold the model methods
const Item = {};

// Lists all entries
Item.findAll = () => {
  return db.query(
    `SELECT * FROM ingredients`
  );
};

// Finds a specific entry
Item.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM ingredients
    WHERE id = $1`,
    [id]
  );
};

// Makes a new entry
Item.create = (item) => {
  return db.one(`
    INSERT INTO ingredients (ingredient)
    VALUES ($1)
    RETURNING *`,
    [item.name]
  );
};

// Shares functionality with the rest of the app
module.exports = Item;
