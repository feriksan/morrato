const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes){
    return sequelize.define('brand',{
        idClient:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        namaClient:{
            type: DataTypes.STRING(255),
            allowNull: false,
        }
    }, {
        sequelize,
        tableName: "clientTable",
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
                  { name: "idClient" },
                ]
              },
            ]
    });
}