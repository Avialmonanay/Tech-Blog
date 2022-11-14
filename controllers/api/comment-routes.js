const router = require('express').Router();
const { Comments } = require('../../models');

router.post('/create', async (req, res) => {
    try {
        const dbCommentData = await Comments.create({
            comment: req.body.comment,
            user_id: req.body.user_id,
            blog_id: req.body.blog_id
        });
        res.status(200).json(dbCommentData)
    } catch (err){
        console.log(err);
        res.status(500).json(err);
    }
})

router.delete('/destroy/:id', async (req, res) => {
    try {
        const dbDeleteCommentData = await Comments.destroy({ where: {id:req.params.id}})
       res.status(200).json(dbDeleteCommentData)
    } catch (err){
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;