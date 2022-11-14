const sequelize = require('../config/connection');

const seedComments = require('./comments');
const seedBlogs = require('./blogs');
const seedUsers = require('./users');


const seedAll = async () => {
  await sequelize.sync({ force: true });


  await seedUsers();

  await seedBlogs();

  await seedComments();


  process.exit(0);
};


seedAll();