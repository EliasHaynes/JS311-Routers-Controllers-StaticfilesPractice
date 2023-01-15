const express = require('express')
const router = express.Router()
const commentsController = require('../controllers/comments')

//GET
router.get('/comments', commentsController.list)
router.get('/comments/:_id', commentsController.show)
//POST
router.post('/comments', commentsController.create)

module.exports = router;