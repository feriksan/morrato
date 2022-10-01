const Sequelize = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();
console.log(process.env.db,process.env.user,process.env.password);
const sequelize = new Sequelize(process.env.db,process.env.user,process.env.password,{
    host:process.env.host,
    dialect : "mysql",
    operatorAliases:false,
    pool:{
        max:5,min:0,acquire:30000,idle:10000
    }
});
sequelize.sync();
module.exports =  sequelize;

