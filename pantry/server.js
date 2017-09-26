//node-express setup
//---IMPORTS---
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const axios = require("axios");
const cors = require('cors');

// Imports required for authentication
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const app = express();

// Imports .env
const dotenv = require('dotenv').config();

//---PORT---
//set up port with listener
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

//---MIDDLEWARE---
//set up static file
app.use(express.static(path.join(__dirname, 'client/build')));
//set up logger middleware
app.use(logger('dev'));
//set up cors middleware
app.use(cors());
//set up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//set up method-override
app.use(methodOverride('_method'));

// Configurations required for authentication
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));

// Configures passport
app.use(passport.initialize());
app.use(passport.session());

//--ROUTES--
//index route
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

//item route
const itemRoutes = require('./routes/itemRoutes');
app.use('/inventory', itemRoutes);

//route to external API axios call
const resultsRoutes = require('./routes/resultsRoutes');
app.use('/results', resultsRoutes);

//recipe route
const recipeRoutes = require('./routes/recipeRoutes');
app.use('/recipes', recipeRoutes);

// Routes authentication
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

// Routes users
const userRoutes = require('./routes/userRoutes');
app.use('/user', userRoutes);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

