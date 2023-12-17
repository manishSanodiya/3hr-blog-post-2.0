

module.exports = (sequelize,DataTypes)=>{
    const Post = sequelize.define('post',{
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                 allowNull: false,
                 primaryKey: true
            },
        
        post:{
                type:DataTypes.STRING,
                allowNull: false
            },
            author:{
                type:DataTypes.STRING,
                allowNull: false
            },
            desc:{
                type: DataTypes.STRING,
                allowNull:true
            }
    })

    return Post;
}