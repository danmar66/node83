const express = require('express');
const router = express.Router();
const controller = require('../../controllers/user')
const { authorization: auth }  = require('../../middlewares/authorizationMiddleware')

router.use(auth)

router.post('', controller.addBook)
router.get('', controller.getBooks)
router.get('/info', controller.getInfo)

module.exports = router;