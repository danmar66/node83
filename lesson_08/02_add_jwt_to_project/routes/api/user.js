const express = require('express');
const router = express.Router();
const controller = require('../../controllers/user')
const auth = require('../../middlewares/authorizationMiddleware')
const wrapper = require('../../helpers/controllerWrapper')

// router.use(auth)

router.post('', wrapper(auth), controller.addBook)
router.get('', wrapper(auth), controller.getBooks)
router.get('/info', wrapper(auth), controller.getInfo)

// router.post('', auth, controller.addBook)
// router.get('', auth, controller.getBooks)
// router.get('/info', auth, controller.getInfo)

module.exports = router;