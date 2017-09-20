// Imports the database configuration
const db = require('../db/config');

// Creates an object to hold the model methods
const Recipe = {};

// Lists all entries
Recipe.findAll = () => {
  return db.query(
    `SELECT * FROM recipes`
  );
};

// Finds a specific entry
Recipe.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM recipes
    WHERE id = $1`,
    [id]
  );
};

// Makes a new entry
Recipe.create = (recipe) => {
  return db.one(`
    INSERT INTO recipes (name, url, img)
    VALUES ($1, $2, $3)
    RETURNING *`,
    [recipe.name, recipe.url, recipe.img]
  );
};

// Shares functionality with the rest of the app
module.exports = Recipe;
