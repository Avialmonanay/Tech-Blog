const Users = require('./Users');
const Comments = require('./Comments');
const Blogs = require('./Blogs');

//Model relationships to eachother. Links users to blogs, and comments, Links comments to blogs.
Users.hasMany(Comments, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });

Users.hasMany(Blogs, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });

Comments.belongsTo(Users, {
    foreignKey: 'user_id',
  });

Blogs.belongsTo(Users, {
    foreignKey: 'user_id',
  });

Blogs.hasMany(Comments, {
    foreignKey: 'blog_id',
  });

Comments.belongsTo(Blogs, {
    foreignKey: 'blog_id',
})
module.exports = { Users, Comments, Blogs };