const express = require('express');
const router = express.Router()
const contactsRoute = require('./contacts')

//This reaches into their respective query and finds the
router.get('/contacts', contactsRoute);
router.get('/contacts/:id', contactsRoute)
router.post('/contacts', contactsRoute)


module.exports = router;