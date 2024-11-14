const express = require('express');
const router = express.Router();
const userprofilecontroller = require('../controllers/userprofilecontroller');
const auth = require('../middlewares/auth');

// Order routes
router.post('/orders', auth, userprofilecontroller.createOrder);
router.get('/orders/user', auth, userprofilecontroller.getUserOrders);
router.get('/orders/:orderId', auth, userprofilecontroller.getOrderById);

// User routes
router.get('/:userId', auth, userprofilecontroller.getUserInfo);
router.put('/:userId', auth, userprofilecontroller.updateUserInfo);

module.exports = router;