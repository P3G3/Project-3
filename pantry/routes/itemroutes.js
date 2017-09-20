const express = require('express');
const itemController = require('../controllers/itemController');

const itemRoutes = express.Router();

itemRoutes.get('/', itemController.index);
itemRoutes.get('/:id', itemController.show);
itemRoutes.post('/', itemController.create);

module.exports = itemRoutes;
