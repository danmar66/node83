const express = require('express');
const router = express.Router();
const controller = require('../../controllers/user')
const { authorization: auth }  = require('../../middlewares/authorizationMiddleware')

router.use(auth)

router.post('', controller.addBook)
router.get('', controller.getBooks)
router.get('/info', controller.getInfo)

// router.post('', auth, controller.addBook)
// router.get('', auth, controller.getBooks)
// router.get('/info', auth, controller.getInfo)

// router.post('', wrapper(auth), controller.addBook)
// router.get('', wrapper(auth), controller.getBooks)
// router.get('/info', wrapper(auth), controller.getInfo)

module.exports = router;