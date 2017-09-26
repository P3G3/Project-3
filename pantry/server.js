//node-express setup
//---IMPORTS---
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const axios = require("axios");
const cors = require('cors');
const app = express();
const dotenv = require('dotenv').config();

//---PORT---
//set up port with listener
const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
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

//--ROUTES--
//index route
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

//item route
const itemRoutes = require('./routes/itemroutes');
app.use('/inventory', itemRoutes);

//route to external API axios call
const resultsRoutes = require('./routes/resultsRoutes');
app.use('/results', resultsRoutes);

//recipe route
const recipeRoutes = require('./routes/recipeRoutes');
app.use('/recipes', recipeRoutes);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

