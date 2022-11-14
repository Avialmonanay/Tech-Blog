const router = require('express').Router();
const { Blogs } = require('../../models');

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

module.exports = router;