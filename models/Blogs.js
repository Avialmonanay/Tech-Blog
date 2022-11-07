const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}    



Blog.init({
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
        type: DataTypes.STRING,
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
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog',
  }
);

module.exports = Blog;