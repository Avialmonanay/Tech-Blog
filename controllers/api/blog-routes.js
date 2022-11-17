const router = require('express').Router();
const { Blogs } = require('../../models');

// route used for creating a new blog
router.post('/create', async (req, res) => {
    try {
      const dbPostData = await Blogs.create({
        title: req.body.title,
        description: req.body.description,
        user_id: req.body.user_id,
      });
      res.status(200).json(dbPostData)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });

//Deletes existing blogs
router.delete('/destroy', async (req, res) => {
  try {
    const dbDeletePostData = await Blogs.destroy({ where: {id:req.body.blog_id}})
    res.status(200).json(dbDeletePostData)
  } catch (err){
      console.log(err);
      res.status(500).json(err);
  }
})

// allows you to edit an existing blog uses the edit handlebars for display.
router.get('/edit/:id', async (req, res) => {
  console.log(req.session.userId)
  const blogData = await Blogs.findByPk(req.params.id).catch((err) => res.json(err));
      const blog = blogData.get({ plain: true })
      res.render('edit', { blog, loggedIn: req.session.loggedIn, userId: req.session.userId });
})
module.exports = router;


// put request for editing the blog that updates the SQL database.
router.put('/edit', async (req, res) => {
  console.log(req.session.userId)
  await Blogs.update(
    {
      title:req.body.title,
      description:req.body.description,
    },
    {
    where: {
      id:req.body.blog_id
    }
  }
  )
  .then((updatedBlog) => {
    res.json(updatedBlog);
  })
  .catch((err) => {
    console.log(err);
    res.json(err);
  });
})
module.exports = router;