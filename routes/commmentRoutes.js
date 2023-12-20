const express = require('express');

const router = express.Router();

const commentController = require('../controller/commentController');

router.post('/addComment',commentController.addComments);

router.get('/getComment/:postId',commentController.getComments);

router.delete('/deleteComment/:id',commentController.deleteComments);


module.exports = router;