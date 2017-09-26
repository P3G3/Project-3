const axios = require("axios");

const api = {};

api.results = [];

api.makeAxiosGet = () => {
  axios.get(`http://food2fork.com/api/search?key=009041d6686e69bcfa223c2b77a95136&q=chicken`)
  .then(res => {
    api.results = res.data.recipes;
    api.results = api.results.map(el => {return {
      name: el.title,
      img: el.image_url,
      url: el.source_url,
    }})
    console.log(api.results);
  });
}

module.exports = api;
