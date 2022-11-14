const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./blog-routes');
const commentRoutes = require('./comment-routes.js');

router.use('/users', userRoutes);
router.use('/blogs', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;