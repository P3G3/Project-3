const db = require('../db/config');

const User = {};

User.findByUserName = username => {
  return db.one(`
    SELECT *
      FROM users
     WHERE username = $1
  `, username);
};

User.save = user => {
  return db.one(`
    INSERT INTO users
    (username, email, password_digest)
    VALUES ($/username/, $/email/, $/password_digest/)
    RETURNING *
  `, user);
};

User.findUserRecipes = id => {
  return db.many(`
    SELECT *
      FROM recipes
     WHERE user_id = $1
  `, id);
};

module.exports = User;
