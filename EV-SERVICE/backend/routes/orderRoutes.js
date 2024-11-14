
// orderRoutes.js
const express = require('express');
const router = express.Router();
const { getShopOwnerOrders, updateOrderStatus } = require('../controllers/orderController');
const protect = require('../middlewares/auth');

router.get('/shop-orders', protect, getShopOwnerOrders);
router.patch('/:orderId/update-status', protect, updateOrderStatus);

module.exports = router;