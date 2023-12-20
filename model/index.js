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

db.comments = require('./commentModel')(sequelize,DataTypes)

db.sequelize.sync({force:true}).then(()=>{
    console.log('synced')
})
//associations
db.posts.hasMany(db.comments)
db.comments.belongsTo(db.posts)


module.exports=db;