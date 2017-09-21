const express = require('express');
const itemController = require('../controllers/itemController');

const itemRoutes = express.Router();

//index and create routes for items
itemRoutes.get('/', itemController.index);
itemRoutes.post('/', itemController.create);

//show one, update and delete routes for items
itemRoutes.get('/:id', itemController.show);
itemRoutes.put('/:id', itemController.update);
itemRoutes.delete('/:id', itemController.delete);

module.exports = itemRoutes;
