const express = require('express');

const router = express.Router();

const postController = require('../controller/postController');

router.post('/addPost',postController.AddPost)

router.get('/getPost',postController.GetPost);

module.exports = router;