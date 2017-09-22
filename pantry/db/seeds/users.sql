-- Builds table, if absent
-- Should this be split out into more than one table?
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL
);

ALTER TABLE recipes
ADD COLUMN user_id INTEGER REFERENCES users(id);
