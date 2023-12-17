const express = require('express');

const router = express.Router();

const commentController = require('../controller/commentController');

router.post('/addComment',commentController.addComments);

router.get('/getComment',commentController.getComments);

router.delete('/deleteComment',commentController.deleteComments);


module.exports = router;