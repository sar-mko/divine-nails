const express = require('express')
const router = express.Router()
const bookController = require('../controllers/book') 
// const { ensureAuth } = require('../middleware/auth')

router.post('/createAppointment', bookController.createAppointment)

router.get('/confirmation', bookController.confirmAppointment)

module.exports = router