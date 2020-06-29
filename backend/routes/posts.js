const router = require('express').Router();
let Post = require('../models/post.model');

router.route('/').get(async (req, res) => {
   await Post.find()
      .then(posts => res.json(posts))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(async (req, res) => {
   const username = req.body.username;
   const title = req.body.title;
   const body = req.body.body;

   const newPost = new Post({
      username,

      title: title,
      body: body,
   });

   await newPost.save()
      .then(() => res.json('Post added!'))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get(async (req, res) => {
   await Post.findById(req.params.id)
      .then(post => res.json(post))
      .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;