const express = require('express');
const recipeController = require('../controllers/recipeController');

const recipeRoutes = express.Router();

//index and create routes for recipes
recipeRoutes.get('/', recipeController.index);
recipeRoutes.post('/', recipeController.create);

//show one and delete routes for recipes
recipeRoutes.get('/:id', recipeController.show);
recipeRoutes.delete('/:id', recipeController.delete);

module.exports = recipeRoutes;
