var DataTypes = require("sequelize").DataTypes;
var _produk = require("./productModel");
var _color = require("./colorModel");
var _brand = require("./brandModel");
var _family = require("./familyModel");
var _operator = require("./operatorModel");
var _transaction = require("./transactionModel");

function initModels(sequelize) {
  var produk = _produk(sequelize, DataTypes);
  var color = _color(sequelize, DataTypes);
  var brand = _brand(sequelize, DataTypes);
  var family = _family(sequelize, DataTypes);
  var operator = _operator(sequelize, DataTypes);
  var transaction = _transaction(sequelize, DataTypes);


  return {
    produk,color, brand, family, operator, transaction
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
