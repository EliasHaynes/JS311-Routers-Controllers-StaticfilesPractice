const express = require('express');
const router = express.Router()
const contactsRoute = require('./contacts')
const commentsRoute = require('./comments');
const vehiclesRoute = require('./vehicles');
const productsRoute = require('./products')

//Contacts
router.get('/contacts', contactsRoute);
router.get('/contacts/:_id', contactsRoute)
router.post('/contacts', contactsRoute)

//Comments
router.get('/comments',commentsRoute)
router.get('/comments/:_id',commentsRoute)
router.post('/comments', commentsRoute)

//Vehicles
router.get('/vehicles', vehiclesRoute)
router.get('/vehicles/:_id', vehiclesRoute)
router.post('/vehicles', vehiclesRoute)

//Products
router.get('/products', productsRoute)
router.get('/products/:_id', productsRoute)
router.post('/products', productsRoute)

module.exports = router;