const Item = require('../models/item');

//create object for controller
const itemController = {};

//controller to find all items from database
itemController.index = (req,res) => {
  Item.findAll()
    .then(items => {
      console.log(items);
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
itemController.save = (req,res) => {
  Item.save({
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

//controller to update a single item
itemController.update = (req,res) => {
  Item.update({
    // name: req.body
  }, req.params.id)
    .then(item => {
      res.json({
        message: 'item updated successfully',
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

//controller to delete a single item
itemController.delete = (req,res) => {
  Item.destroy(req.params.id)
    .then(item => {
      res.json({
        message: 'item deleted successfully',
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
