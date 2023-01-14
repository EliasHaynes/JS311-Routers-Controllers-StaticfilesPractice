const express = require('express')
const router = express.Router()
const contactsController = require('../controllers/contacts')


//'/contacts' folder routes
//GET
router.get('/contacts', contactsController.list)
router.get('/contacts/:_id', contactsController.show)
//POST
router.post('/contacts',contactsController.create)

module.exports = router;