const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes){
    return sequelize.define('color',{
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        printName:{
            type: DataTypes.STRING(255),
            allowNull: false,
        }
    }, {
        sequelize,
        tableName: "printTable",
        defaultScope: {
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        },
        timestamp: false,
        indexes:[
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                  { name: "id" },
                ]
              },
            ]
    });
}