const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


//blogs model for storing the blogs in the DB
class Blogs extends Model {}    



Blogs.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    title:{
        type: DataTypes.STRING,
        allowNull: true,        
    },
    description:{
        type: DataTypes.STRING(10000),
        allowNull: true,        
    },
    user_id:{
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model:'user',
            key: 'id',
        },       
    },    
},
{
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog',
  }
);

module.exports = Blogs;