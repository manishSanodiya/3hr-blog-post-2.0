module.exports = (sequelize,DataTypes)=>{
    const Comment = sequelize.define('comment',{
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                 allowNull: false,
                 primaryKey: true
            },
        
            comment:{
                type:DataTypes.STRING,
                allowNull: false
            },
         postId:{
            type:DataTypes.INTEGER
         }
    })

    return Comment;
}