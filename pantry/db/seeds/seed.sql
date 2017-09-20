-- Mounts the database
\connect pantry_dev;

-- Imports tables
\i recipes.sql;
\i ingredients.sql;
