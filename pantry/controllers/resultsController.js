// const api = require('../api/index');
const axios = require("axios");

//create object for recipe controller
const resultsController = {};

//controller to search recipes from Food2Fork API
resultsController.index = (req,res) => {
  axios(`http://food2fork.com/api/search?key=QI&q=chicken`)
    .then(results => {
      console.log(req);
      let result = results.data.recipes;
      let arr = result.map(el => {return {
          name: el.title,
          img: el.image_url,
          url: el.source_url,
        }});
      console.log(arr);
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
