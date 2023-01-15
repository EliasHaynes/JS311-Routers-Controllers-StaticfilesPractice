const express = require('express')
const router = express.Router()
const vehiclesController = require('../controllers/vehicles')

//GET
router.get('/vehicles', vehiclesController.list)
router.get('/vehicles/:_id', vehiclesController.show)
//POST
router.post('/vehicles', vehiclesController.create)

module.exports = router;