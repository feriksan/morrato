const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes){
    return sequelize.define('product',{
        productId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        productPo:{
            type: DataTypes.STRING(10),
            allowNull: false,
            primaryKey: true
        },
        productColor:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        productFactory:{
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        productBrand:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize,
        tableName: "produkTable",
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
                  { name: "productId" },
                ]
              },
            ]
    });
}