const express = require('express');
const authRouter = express.Router();
const passport = require('../services/auth/local');
const autHelpers = require('../services/auth/autHelpers');
const userController = require('../controllers/userController');

authRouter.get('/login', autHelpers.loginRedirect, (req, res) => {
  res.render('auth/login');
});

authRouter.get('/register', autHelpers.loginRedirect, (req, res) => {
  res.render('auth/register');
});

authRouter.post('/register', userController.create);

authRouter.post('/login', passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect: '/auth/login',
    failureFlash: true,
  })
);

authRouter.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = authRouter;
