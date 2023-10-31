const express = require('express')
const router= express.Router()
const controller = require('../../controllers/auth')
const wrapper = require('../../helpers/controllerWrapper')

router.post('/registration', wrapper(controller.registration))
router.post('/login', wrapper(controller.login))        
router.get('/verify/:token', wrapper(controller.verify))        

module.exports = router
