const router = require('express').Router();
const { Blogs, Comments, Users } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;



router.get('/', async (req, res) => {
    try {
      const cardData = await Blogs.findAll().catch((err) => res.json(err));
      const cards = cardData.map((card) => card.get({ plain: true }));
      res.render('homepage', { cards, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  })

  router.get('/blog/:id', async (req, res) => {
    try {
      // Get Blogs from the database
      const blogData = await Blogs.findByPk(req.params.id).catch((err) => res.json(err));
      const blog = blogData.get({ plain: true });
      const blogUserData = await Users.findByPk(blog.user_id).catch(err => res.json(err));
        const blogUser = blogUserData.get({ plain: true });
        blog.username = blogUser.name;
      // Get comments from the database
      const commentData = await Comments.findAll({ where: { blog_id: req.params.id } }).catch(err => res.json(err));
      const comments = commentData.map(comment => comment.get({ plain: true }));
  
      // Finds the user that made the comment
      for (let i = 0; i < comments.length; i++) {
        const userData = await Users.findByPk(comments[i].user_id).catch(err => res.json(err));
        const user = userData.get({ plain: true });
        comments[i].username = user.name;
      }
  
      console.log(comments);
      console.log(req.session.userId);
  
      res.render('blog', { blog, comments, loggedIn: req.session.loggedIn, userId: req.session.userId });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login', { loggedIn: req.session.loggedIn });
  });


  router.get('/post', withAuth, (req, res) => {
    if (req.session.loggedIn) {
    res.render('post', { loggedIn: req.session.loggedIn });
      return;
    }
    res.redirect('/login');
    
  })


  router.get('/search/:title', async (req, res) => {
    try {
      
      const cardData = await Blogs.findAll({where:{title:{
        [Op.like]: "%"+req.params.title+"%"}}}).catch((err) => res.json(err));
      const cards = cardData.map((card) => card.get({ plain: true }));
      res.render('search', { cards, loggedIn: req.session.loggedIn, title: req.params.title });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  })

  router.get('/dashboard', async (req, res) => {
    try {
      const userID = req.session.userId;
      const cardData = await Blogs.findAll({where:{user_id:userID}}).catch((err) => res.json(err));
      const cards = cardData.map((card) => card.get({ plain: true }));
      res.render('search', { cards, loggedIn: req.session.loggedIn, title: req.params.title });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  })

  module.exports = router;