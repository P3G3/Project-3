const express = require('express');
const recipeRoutes = express.Router();
const autHelpers = require('../services/auth/autHelpers');
const recipeController = require('../controllers/recipeController');

//index and create routes for recipes
recipeRoutes.get('/', recipeController.index);
recipeRoutes.post('/', autHelpers.loginRequired, recipeController.save);

//show one and delete routes for recipes
// recipeRoutes.get('/:id', recipeController.show);

recipeRoutes.delete('/:id', autHelpers.loginRequired, recipeController.delete);

module.exports = recipeRoutes;
