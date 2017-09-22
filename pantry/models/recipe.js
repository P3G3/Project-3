// Imports the database configuration
const db = require('../db/config');

// Creates an object to hold the model methods
const Recipe = {};

// Lists all entries
Recipe.findAll = () => {
  return db.many(`
    SELECT *
      FROM recipes
  ORDER BY id
  `);
};

// Finds a specific entry
Recipe.findById = id => {
  return db.one(`
    SELECT *
      FROM recipes
     WHERE id = $1
  `, id);
};

// Makes a new entry
Recipe.save = recipe => {
  return db.one(`
    INSERT INTO recipes
    (name, url, img, user_id)
    VALUES
    ($/name/, $/url/, $/img/, $/userid/)
    RETURNING *
  `, recipe);
};

// Edits an existing entry
// Recipe.update = recipe => {
//   return db.one(`
//     UPDATE recipes
//     SET
//     name = $/name/,
//     url = $/url/,
//     img = $/img/
//     WHERE id = $/id/
//     RETURNING *
//   `, recipe);
// };

// Removes an existing entry
Recipe.destroy = id => {
  return db.none(`
    DELETE
      FROM recipes
     WHERE id = $1
  `, id);
};

// Shares functionality with the rest of the app
module.exports = Recipe;
