-- Removes previous version(s)
DROP DATABASE IF EXISTS pantry_db;

-- Builds a new one
CREATE DATABASE pantry_db;

-- Mounts the database
\connect pantry_db;

-- Imports tables
\i recipes.sql;
\i ingredients.sql;
