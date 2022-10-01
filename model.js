const initModels = require('./model/init-models')
const sequelize = require('./connection');
var models = initModels(sequelize);

module.exports = models;