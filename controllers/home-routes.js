const router = require('express').Router();
const { Blogs, Comments, Users } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


//gets all blogs from the database renders the homepage.
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

  //gets a specific blog, its comments, and the users that made said comments and renders the blog page.
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

  //renders the login page. If the user is already logged in it will route to the homepage.
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login', { loggedIn: req.session.loggedIn });
  });

// renders the post page, if not logged in the user will be directed to the login page.
  router.get('/post', withAuth, (req, res) => {
    if (req.session.loggedIn) {
    res.render('post', { loggedIn: req.session.loggedIn, userId: req.session.userId});
      return;
    }
    res.redirect('/login');
    
  })

//searches the database for matching words in the title of the blog, renders the search page.
  router.get('/search/:title', withAuth, async (req, res) => {
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

  //gets all blogs for the logged in user and renders the search page showing them all of their posted blogs.
  router.get('/dashboard', withAuth, async (req, res) => {
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