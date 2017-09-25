const express = require('express');
const recipeController = require('../controllers/recipeController');
const api = require('../api');

const resultsRoutes = express.Router();

//index and create routes for results
resultsRoutes.get('/', api.makeAxiosGet);
// resultsRoutes.post('/:id', recipeController.save);

module.exports = resultsRoutes;
