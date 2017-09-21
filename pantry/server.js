//node-express setup
//---IMPORTS---
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

//---PORT---
//set up port with listener
const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});

//---MIDDLEWARE---
//set up static file
app.use('/static', express.static(path.join(__dirname, 'public')));
//set up logger middleware
app.use(logger('dev'));
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

//recipe route
const recipeRoutes = require('./routes/recipeRoutes');
app.use('/savedrecipes', recipeRoutes);

//404 handling
app.get('*', function(req,res) {
  res.status(404).send({message: 'Whoops! It\'s not here, playa.'});
});
