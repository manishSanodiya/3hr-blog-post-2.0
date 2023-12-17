module.exports = (sequelize,DataTypes)=>{
    const Comment = sequelize.define('post',{
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
         
    })

    return Comment;
}