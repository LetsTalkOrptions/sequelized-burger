var Sequelize = require("sequelize");

// DB Connection
var sequelize = require("../config/connection");

module.exports = function(sequelize) {

  var Burger = sequelize.define('Burger', {
    burger_name: {
      type: Sequelize.STRING,
      allowNull: false 
    },
    // Only allow a true/false here, defaulted to false (not eaten yet)
    devoured: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  // Return results of the burger conditions
  return Burger;

};