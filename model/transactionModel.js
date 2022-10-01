const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes){
    return sequelize.define('transaction',{
        productionId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        productionCode:{
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        productionStatus:{
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        productionProcess:{
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        productionDate:{
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        productionOperator:{
            type: DataTypes.STRING(255),
            allowNull: false,
        }
    }, {
        sequelize,
        tableName: "transactionTable",
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
                  { name: "productionId" },
                ]
              },
            ]
    });
}