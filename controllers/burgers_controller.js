// Creates router
var db = require('../models');

module.exports = function (app) {

  // API route to show all choices
  app.get('/', function (req, res) {
    db.Burger.findAll({}).then(function (dbBurger) {
      res.render('index', { burgers: dbBurger });
    });
  });

  // API route to add burger
  app.post('/', function (req, res) {
    db.Burger.create({
      burger_name: req.body.burger
    }).then(function () {
      res.redirect('/');
    });
  });

  // API route to remove burger
  app.delete('/:id', function (req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function () {
      res.redirect('/');
    });
  });

  // Changes devoured to a "true" condition
  app.put('/:id', function (req, res) {
    db.Burger.update({
      devoured: 1
    },
      {
        where: {
          id: req.params.id
        }
      }).then(function () {
        res.redirect('/');
      });
  });
};
