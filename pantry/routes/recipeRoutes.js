const express = require('express');
const recipeController = require('../controllers/recipeController');

const recipeRoutes = express.Router();

recipeRoutes.get('/', recipeController.index);
recipeRoutes.get('/:id', recipeController.show);
recipeRoutes.post('/', recipeController.create);

module.exports = recipeRoutes;
