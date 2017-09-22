const express = require('express');
const userRoutes = express.Router();
const autHelpers = require('../services/auth/autHelpers');
const userController = require('../controllers/userController');

userRoutes.get('/', autHelpers.loginRequired, userController.index);

module.exports = userRoutes;
