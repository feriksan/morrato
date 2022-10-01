const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes){
    return sequelize.define('operator',{
        operatorId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        operatorName:{
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        operatorRole:{
            type: DataTypes.STRING(255),
            allowNull: false,
        }
    }, {
        sequelize,
        tableName: "operatorTable",
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
                  { name: "operatorId" },
                ]
              },
            ]
    });
}