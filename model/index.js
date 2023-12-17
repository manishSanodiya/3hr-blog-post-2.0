const {Sequelize,DataTypes} = require('sequelize');
const dbConfig  = require('../config/dbConfig')


const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        dialect: dbConfig.dialect,
        host: dbConfig.HOST
    }
)

sequelize.authenticate().then(()=>{
    console.log('connected')
}).catch((err)=>console.log(err));

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.posts = require('./postModel')(sequelize,DataTypes)

db.sequelize.sync({force:false}).then(()=>{
    console.log('synced')
})

module.exports=db;