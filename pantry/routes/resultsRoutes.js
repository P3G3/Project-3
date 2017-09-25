const express = require('express');
const resultsController = require('../controllers/resultsController');

const resultsRoutes = express.Router();

//index and create routes for results
resultsRoutes.get('/', resultsController.index);
// resultsRoutes.post('/:id', recipeController.save);

module.exports = resultsRoutes;
