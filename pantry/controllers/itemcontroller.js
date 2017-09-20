const Item = require('../models/item');

//create object for controller
const itemController = {};

//controller to find all items from database
itemController.index = (req,res) => {
  Pantry.findAll()
    .then(items => {
      res.json({
        message: 'ok',
        data: {items},
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        message: '400', err
      });
});
};

//controller to return a single item
itemController.show = (req,res) => {
  Item.findById(req.params.id)
    .then(item => {
      res.json({
        message: 'ok',
        data: {item},
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        message: '400', err
      });
    });
  };

//controller to create a single item
itemController.create = (req,res) => {
  Item.create({
    // name: req.body
  })
    .then(item => {
      res.json({
        message: 'ok',
        data: {item},
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        message: '400', err
      });
    });
  };

module.exports = itemController;
