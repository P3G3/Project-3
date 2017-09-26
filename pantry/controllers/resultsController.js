// const api = require('../api/index');
const axios = require("axios");
const dotenv = require('dotenv').config();

const QI = process.env.QI;

//create object for recipe controller
const resultsController = {};

//controller to find all recipes from database
resultsController.index = (req,res) => {
  let query = req.headers.referer;
  let qInject = query.substr(query.indexOf('?') + 1);
  axios(`http://food2fork.com/api/search?key=${QI}&${qInject}`)
    .then(results => {
      let query = req.headers.referer;
      console.log(query.substr(query.indexOf('?') + 1));
      let result = results.data.recipes;
      let arr = result.map(el => {return {
          name: el.title,
          img: el.image_url,
          url: el.source_url,
        }});
      res.json({
        message: 'ok',
        data: {arr},
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        message: '400', err
      });
});
};

// axios.get(`http://food2fork.com/api/search?key=009041d6686e69bcfa223c2b77a95136&q=chicken`)
//     .then(results => {
//       let arr = results.map
//       console.log(results);
//       res({
//         message: 'ok',
//         data: {results},
//       });
//     })

module.exports = resultsController;
