// // // const express = require("express");
// // // const router = express.Router();
// // // const { processPayment } = require("../controllers/paymentController");

// // // router.post("/payment", processPayment);
// // // router.get(
// // //   "/payment-history",
// // //   authMiddleware,
// // //   paymentController.getPaymentHistory
// // // );
// // // module.exports = router;

// // ///
// // // const express = require("express");
// // // const router = express.Router();
// // // const {
// // //   processPayment,
// // //   getPaymentHistory,
// // // } = require("../controllers/paymentController");
// // // const authMiddleware = require("../middlewares/auth"); // Make sure this path is correct

// // // // Apply authMiddleware to both routes
// // // router.post("/payment", authMiddleware, processPayment);
// // // router.get("/payment-history", authMiddleware, getPaymentHistory);

// // // module.exports = router;
// // // /////////////
// // const express = require("express");
// // const router = express.Router();
// // const {
// //   processPayment,
// //   getPaymentHistory,
// // } = require("../controllers/paymentController");
// // const protect = require("../middlewares/auth");

// // router.post("/", protect, processPayment);
// // router.get("/history", protect, getPaymentHistory);

// // module.exports = router;
// //////////////////////////////////////////
// const express = require('express');
// const router = express.Router();
// const paymentController = require('../controllers/paymentController');
// const protect = require('../middlewares/auth');

// // Create payment intent
// router.post('/create-payment-intent', protect, paymentController.createPaymentIntent);

// // Confirm payment
// router.post('/confirm-payment', protect, paymentController.confirmPayment);

// module.exports = router;
/////////////////


const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const protect = require('../middlewares/auth');

// Create payment intent
router.post('/create-payment-intent', protect, paymentController.createPaymentIntent);

// Confirm payment
router.post('/confirm-payment', protect, paymentController.confirmPayment);

// Get payment details
router.get('/payment/:paymentId', protect, paymentController.getPaymentDetails);

module.exports = router;