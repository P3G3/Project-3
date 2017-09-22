// Imports the database configuration
const db = require('../db/config');

// Creates an object to hold the model methods
const Item = {};

// Lists all entries
Item.findAll = () => {
  return db.many(`
    SELECT *
      FROM ingredients
  ORDER BY id
  `);
};

// Finds a specific entry
Item.findById = id => {
  return db.one(`
    SELECT *
      FROM ingredients
     WHERE id = $1
  `, id);
};

// Makes a new entry
Item.save = item => {
  return db.one(`
    INSERT INTO ingredients
    (ingredient)
    VALUES
    ($/name/)
    RETURNING *
  `, item);
};

// Edits an existing entry
Item.update = item => {
  return db.one(`
    UPDATE ingredients
    SET
    ingredient = $/name/
    WHERE id = $/id/
    RETURNING *
  `, item);
};

// Removes an existing entry
Item.destroy = id => {
  return db.none(`
    DELETE
      FROM ingredients
     WHERE id = $1
  `, id);
};

// Shares functionality with the rest of the app
module.exports = Item;
