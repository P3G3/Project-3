const express = require('express');
const resultsController = require('../controllers/resultsController');
const recipeController = require('../controllers/recipeController');

const resultsRoutes = express.Router();

//index and create routes for results
resultsRoutes.get('/', resultsController.index);
resultsRoutes.post('/', recipeController.save);

module.exports = resultsRoutes;
