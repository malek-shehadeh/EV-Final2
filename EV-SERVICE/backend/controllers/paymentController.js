// // // // const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// // // // const Payment = require("../models/Payment");

// // // // exports.processPayment = async (req, res) => {
// // // //   const { paymentMethodId, amount, deliveryInfo, orderSummary } = req.body;

// // // //   console.log("Received payment request:", {
// // // //     paymentMethodId,
// // // //     amount,
// // // //     deliveryInfo,
// // // //     orderSummary,
// // // //   });

// // // //   try {
// // // //     // Create a PaymentIntent with the order amount and currency
// // // //     const paymentIntent = await stripe.paymentIntents.create({
// // // //       amount,
// // // //       currency: "usd",
// // // //       payment_method: paymentMethodId,
// // // //       confirm: true,
// // // //       return_url: "http://localhost:3000/payment-success", // Add this line
// // // //       automatic_payment_methods: {
// // // //         enabled: true,
// // // //         allow_redirects: "always",
// // // //       },
// // // //     });

// // // //     console.log("Payment intent created:", paymentIntent.id);

// // // //     // Save payment info to database
// // // //     const payment = new Payment({
// // // //       stripePaymentIntentId: paymentIntent.id,
// // // //       amount: amount / 100, // Convert back to dollars
// // // //       deliveryInfo,
// // // //       orderSummary,
// // // //     });

// // // //     await payment.save();
// // // //     console.log("Payment saved to database:", payment._id);

// // // //     res.json({ success: true, paymentIntent });
// // // //   } catch (error) {
// // // //     console.error("Error processing payment:", error);
// // // //     console.error("Error stack:", error.stack);
// // // //     res.status(500).json({
// // // //       success: false,
// // // //       error: error.message,
// // // //       stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
// // // //     });
// // // //   }
// // // // };
// // // // ////////////////////////
// // // // const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// // // // const Payment = require("../models/Payment");
// // // // const Cart = require("../models/cart");

// // // // exports.processPayment = async (req, res) => {
// // // //   const { paymentMethodId, amount, deliveryInfo, cartItems } = req.body;
// // // //   const userId = req.user._id; // Assuming you have user authentication middleware

// // // //   console.log("Received payment request:", {
// // // //     paymentMethodId,
// // // //     amount,
// // // //     deliveryInfo,
// // // //     cartItems,
// // // //     userId,
// // // //   });

// // // //   try {
// // // //     // Create a PaymentIntent with the order amount and currency
// // // //     const paymentIntent = await stripe.paymentIntents.create({
// // // //       amount,
// // // //       currency: "usd",
// // // //       payment_method: paymentMethodId,
// // // //       confirm: true,
// // // //       return_url: "http://localhost:3000/payment-success",
// // // //       automatic_payment_methods: {
// // // //         enabled: true,
// // // //         allow_redirects: "always",
// // // //       },
// // // //     });

// // // //     console.log("Payment intent created:", paymentIntent.id);

// // // //     // Save payment info to database
// // // //     const payment = new Payment({
// // // //       user: userId,
// // // //       stripePaymentIntentId: paymentIntent.id,
// // // //       amount: amount / 100, // Convert back to dollars
// // // //       deliveryInfo,
// // // //       cartItems,
// // // //       status: paymentIntent.status === "succeeded" ? "completed" : "pending",
// // // //     });
// // // //     await payment.save();
// // // //     console.log("Payment saved to database:", payment._id);

// // // //     // Clear the user's cart after successful payment
// // // //     await Cart.findOneAndUpdate({ user: userId }, { $set: { items: [] } });

// // // //     res.json({ success: true, paymentIntent });
// // // //   } catch (error) {
// // // //     console.error("Error processing payment:", error);
// // // //     console.error("Error stack:", error.stack);
// // // //     res.status(500).json({
// // // //       success: false,
// // // //       error: error.message,
// // // //       stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
// // // //     });
// // // //   }
// // // // };

// // // // exports.getPaymentHistory = async (req, res) => {
// // // //   try {
// // // //     const userId = req.user._id;
// // // //     const payments = await Payment.find({ user: userId }).sort({
// // // //       createdAt: -1,
// // // //     });
// // // //     res.json(payments);
// // // //   } catch (error) {
// // // //     res.status(500).json({ message: "Error fetching payment history", error });
// // // //   }
// // // // };
// // // // ///////////////////////
// // // // const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// // // // const Payment = require("../models/Payment");
// // // // const Cart = require("../models/cart");

// // // // exports.processPayment = async (req, res) => {
// // // //   const { paymentMethodId, amount, deliveryInfo, cartItems } = req.body;

// // // //   // Check if user is authenticated
// // // //   if (!req.user) {
// // // //     return res
// // // //       .status(401)
// // // //       .json({ success: false, error: "User not authenticated" });
// // // //   }

// // // //   const userId = req.user._id;

// // // //   console.log("Received payment request:", {
// // // //     paymentMethodId,
// // // //     amount,
// // // //     deliveryInfo,
// // // //     cartItems,
// // // //     userId,
// // // //   });

// // // //   try {
// // // //     // Create a PaymentIntent with the order amount and currency
// // // //     const paymentIntent = await stripe.paymentIntents.create({
// // // //       amount,
// // // //       currency: "usd",
// // // //       payment_method: paymentMethodId,
// // // //       confirm: true,
// // // //       return_url: "http://localhost:3000/payment-success",
// // // //       automatic_payment_methods: {
// // // //         enabled: true,
// // // //         allow_redirects: "always",
// // // //       },
// // // //     });

// // // //     console.log("Payment intent created:", paymentIntent.id);

// // // //     // Save payment info to database
// // // //     const payment = new Payment({
// // // //       user: userId,
// // // //       stripePaymentIntentId: paymentIntent.id,
// // // //       amount: amount / 100, // Convert back to dollars
// // // //       deliveryInfo,
// // // //       cartItems,
// // // //       status: paymentIntent.status === "succeeded" ? "completed" : "pending",
// // // //     });
// // // //     await payment.save();
// // // //     console.log("Payment saved to database:", payment._id);

// // // //     // Clear the user's cart after successful payment
// // // //     await Cart.findOneAndUpdate({ user: userId }, { $set: { items: [] } });

// // // //     res.json({ success: true, paymentIntent });
// // // //   } catch (error) {
// // // //     console.error("Error processing payment:", error);
// // // //     console.error("Error stack:", error.stack);
// // // //     res.status(500).json({
// // // //       success: false,
// // // //       error: error.message,
// // // //       stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
// // // //     });
// // // //   }
// // // // };

// // // // exports.getPaymentHistory = async (req, res) => {
// // // //   try {
// // // //     const userId = req.user._id;
// // // //     const payments = await Payment.find({ user: userId }).sort({
// // // //       createdAt: -1,
// // // //     });
// // // //     res.json(payments);
// // // //   } catch (error) {
// // // //     res.status(500).json({ message: "Error fetching payment history", error });
// // // //   }
// // // // };
// // // // /////////////////////////////////
// // // // const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// // // // const Payment = require("../models/Payment");
// // // // const Cart = require("../models/cart");

// // // // exports.processPayment = async (req, res) => {
// // // //   const { paymentMethodId, amount, deliveryInfo, cartItems } = req.body;

// // // //   // Check if user is authenticated
// // // //   if (!req.user) {
// // // //     return res
// // // //       .status(401)
// // // //       .json({ success: false, error: "User not authenticated" });
// // // //   }

// // // //   const userId = req.user._id;

// // // //   console.log("Received payment request:", {
// // // //     paymentMethodId,
// // // //     amount,
// // // //     deliveryInfo,
// // // //     cartItems,
// // // //     userId,
// // // //   });

// // // //   try {
// // // //     // Ensure STRIPE_SECRET_KEY is set
// // // //     if (!process.env.STRIPE_SECRET_KEY) {
// // // //       throw new Error(
// // // //         "Stripe secret key is not set in the environment variables"
// // // //       );
// // // //     }

// // // //     // Create a PaymentIntent with the order amount and currency
// // // //     const paymentIntent = await stripe.paymentIntents.create({
// // // //       amount,
// // // //       currency: "usd",
// // // //       payment_method: paymentMethodId,
// // // //       confirm: true,
// // // //       return_url: "http://localhost:3000/payment-success",
// // // //       automatic_payment_methods: {
// // // //         enabled: true,
// // // //         allow_redirects: "always",
// // // //       },
// // // //     });

// // // //     console.log("Payment intent created:", paymentIntent.id);

// // // //     // Save payment info to database
// // // //     const payment = new Payment({
// // // //       user: userId,
// // // //       stripePaymentIntentId: paymentIntent.id,
// // // //       amount: amount / 100, // Convert back to dollars
// // // //       deliveryInfo,
// // // //       cartItems,
// // // //       status: paymentIntent.status === "succeeded" ? "completed" : "pending",
// // // //     });
// // // //     await payment.save();
// // // //     console.log("Payment saved to database:", payment._id);

// // // //     // Clear the user's cart after successful payment
// // // //     await Cart.findOneAndUpdate({ user: userId }, { $set: { items: [] } });

// // // //     res.json({ success: true, paymentIntent });
// // // //   } catch (error) {
// // // //     console.error("Error processing payment:", error);
// // // //     console.error("Error stack:", error.stack);
// // // //     res.status(500).json({
// // // //       success: false,
// // // //       error: error.message,
// // // //       stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
// // // //     });
// // // //   }
// // // // };

// // // // exports.getPaymentHistory = async (req, res) => {
// // // //   try {
// // // //     const userId = req.user._id;
// // // //     const payments = await Payment.find({ user: userId }).sort({
// // // //       createdAt: -1,
// // // //     });
// // // //     res.json(payments);
// // // //   } catch (error) {
// // // //     res.status(500).json({ message: "Error fetching payment history", error });
// // // //   }
// // // // };
// // // ///////////////////////////
// // // //////////

// // // // //////////
// // // // // controllers/paymentController.js
// // // // const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// // // // const Payment = require("../models/Payment");
// // // // const Cart = require("../models/cart");

// // // // exports.processPayment = async (req, res) => {
// // // //   const { paymentMethodId, amount, deliveryInfo, cartItems } = req.body;

// // // //   if (!req.user) {
// // // //     return res
// // // //       .status(401)
// // // //       .json({ success: false, error: "User not authenticated" });
// // // //   }

// // // //   const userId = req.user._id;
// // // //   console.log("Received payment request:", {
// // // //     paymentMethodId,
// // // //     amount,
// // // //     deliveryInfo,
// // // //     cartItems,
// // // //     userId,
// // // //   });

// // // //   try {
// // // //     if (!process.env.STRIPE_SECRET_KEY) {
// // // //       throw new Error(
// // // //         "Stripe secret key is not set in the environment variables"
// // // //       );
// // // //     }

// // // //     const paymentIntent = await stripe.paymentIntents.create({
// // // //       amount,
// // // //       currency: "usd",
// // // //       payment_method: paymentMethodId,
// // // //       confirm: true,
// // // //       return_url: "http://localhost:3000/payment-success",
// // // //     });

// // // //     console.log("Payment intent created:", paymentIntent.id);

// // // //     const payment = new Payment({
// // // //       user: userId,
// // // //       stripePaymentIntentId: paymentIntent.id,
// // // //       amount: amount / 100,
// // // //       deliveryInfo,
// // // //       cartItems,
// // // //       status: paymentIntent.status === "succeeded" ? "completed" : "pending",
// // // //     });
// // // //     await payment.save();

// // // //     console.log("Payment saved to database:", payment._id);

// // // //     await Cart.findOneAndUpdate({ user: userId }, { $set: { items: [] } });

// // // //     res.json({ success: true, paymentIntent });
// // // //   } catch (error) {
// // // //     console.error("Error processing payment:", error);
// // // //     res.status(500).json({
// // // //       success: false,
// // // //       error: error.message,
// // // //       stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
// // // //     });
// // // //   }
// // // // };

// // // // exports.getPaymentHistory = async (req, res) => {
// // // //   try {
// // // //     const userId = req.user._id;
// // // //     const payments = await Payment.find({ user: userId }).sort({
// // // //       createdAt: -1,
// // // //     });
// // // //     res.json(payments);
// // // //   } catch (error) {
// // // //     res
// // // //       .status(500)
// // // //       .json({
// // // //         message: "Error fetching payment history",
// // // //         error: error.message,
// // // //       });
// // // //   }
// // // // };
// // // //////////////////////////////////////////
// // // // controllers/paymentController.js
// // // const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// // // const Payment = require("../models/Payment");
// // // const Cart = require("../models/cart");

// // // exports.processPayment = async (req, res) => {
// // //   const { paymentMethodId, amount, deliveryInfo, cartItems } = req.body;

// // //   if (!req.user) {
// // //     return res
// // //       .status(401)
// // //       .json({ success: false, error: "User not authenticated" });
// // //   }

// // //   const userId = req.user._id;
// // //   console.log("Received payment request:", {
// // //     paymentMethodId,
// // //     amount,
// // //     deliveryInfo,
// // //     cartItems,
// // //     userId,
// // //   });

// // //   try {
// // //     if (!process.env.STRIPE_SECRET_KEY) {
// // //       throw new Error(
// // //         "Stripe secret key is not set in the environment variables"
// // //       );
// // //     }

// // //     console.log(
// // //       "Using Stripe Secret Key:",
// // //       process.env.STRIPE_SECRET_KEY.substr(0, 8) + "..."
// // //     );

// // //     const paymentIntent = await stripe.paymentIntents.create({
// // //       amount,
// // //       currency: "usd",
// // //       payment_method: paymentMethodId,
// // //       confirm: true,
// // //     });

// // //     console.log("Payment intent created:", paymentIntent.id);

// // //     const payment = new Payment({
// // //       user: userId,
// // //       stripePaymentIntentId: paymentIntent.id,
// // //       amount: amount / 100,
// // //       deliveryInfo,
// // //       cartItems,
// // //       status: paymentIntent.status === "succeeded" ? "completed" : "pending",
// // //     });
// // //     await payment.save();

// // //     console.log("Payment saved to database:", payment._id);

// // //     await Cart.findOneAndUpdate({ user: userId }, { $set: { items: [] } });

// // //     res.json({ success: true, paymentIntent });
// // //   } catch (error) {
// // //     console.error("Error processing payment:", error);
// // //     res.status(500).json({
// // //       success: false,
// // //       error: error.message,
// // //       stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
// // //     });
// // //   }
// // // };

// // // exports.getPaymentHistory = async (req, res) => {
// // //   try {
// // //     const userId = req.user._id;
// // //     const payments = await Payment.find({ user: userId }).sort({
// // //       createdAt: -1,
// // //     });
// // //     res.json(payments);
// // //   } catch (error) {
// // //     res.status(500).json({
// // //       message: "Error fetching payment history",
// // //       error: error.message,
// // //     });
// // //   }
// // // };
// // ////////////////////////////////////////////////////////
// // const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// // const Payment = require('../models/Payment');
// // const Cart = require('../models/cart');

// // const paymentController = {
// //   createPaymentIntent: async (req, res) => {
// //     try {
// //       const { amount, deliveryInfo, cartItems } = req.body;

// //       // Check if amount is valid
// //       if (!amount || amount <= 0) {
// //         return res.status(400).json({ message: 'Invalid amount' });
// //       }

// //       // Create payment intent
// //       const paymentIntent = await stripe.paymentIntents.create({
// //         amount: Math.round(amount),
// //         currency: 'usd',
// //         payment_method_types: ['card'],
// //         metadata: {
// //           userId: req.user._id.toString()
// //         }
// //       });

// //       // Create payment record
// //       const payment = new Payment({
// //         user: req.user._id,
// //         stripePaymentIntentId: paymentIntent.id,
// //         amount: amount / 100,
// //         deliveryInfo,
// //         cartItems: cartItems || [], // Ensure cartItems is always defined
// //         status: 'pending'
// //       });

// //       await payment.save();

// //       res.json({
// //         clientSecret: paymentIntent.client_secret
// //       });
// //     } catch (error) {
// //       console.error('Payment Intent Error:', error);
// //       res.status(500).json({ message: error.message });
// //     }
// //   },

// //   confirmPayment: async (req, res) => {
// //     try {
// //       const { paymentIntentId } = req.body;

// //       const payment = await Payment.findOne({
// //         stripePaymentIntentId: paymentIntentId,
// //         status: 'pending' // Only update if status is pending
// //       });

// //       if (!payment) {
// //         return res.status(404).json({ message: 'Payment not found or already processed' });
// //       }

// //       // Update payment status
// //       payment.status = 'completed';
// //       await payment.save();

// //       // Clear user's cart
// //       await Cart.findOneAndUpdate(
// //         { user: req.user._id },
// //         { $set: { items: [] } }
// //       );

// //       res.json({ success: true });
// //     } catch (error) {
// //       console.error('Confirmation Error:', error);
// //       res.status(500).json({ message: error.message });
// //     }
// //   }
// // };

// // module.exports = paymentController;
// ///////////////////

// // const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// // const Payment = require('../models/Payment');
// // const Cart = require('../models/cart');
// // const Product = require('../models/Product');

// // const paymentController = {
// //   createPaymentIntent: async (req, res) => {
// //     try {
// //       const { amount, deliveryInfo, cartItems } = req.body;

// //       // Check if amount is valid
// //       if (!amount || amount <= 0) {
// //         return res.status(400).json({ message: 'Invalid amount' });
// //       }

// //       // Process cart items to include shop owner information
// //       const processedCartItems = await Promise.all(
// //         cartItems.map(async (item) => {
// //           const product = await Product.findById(item.productId)
// //             .populate('shopOwner', 'ownerName _id');

// //           if (!product) {
// //             throw new Error(`Product not found: ${item.productId}`);
// //           }

// //           return {
// //             ...item,
// //             shopOwner: {
// //               id: product.shopOwner._id,
// //               name: product.shopOwner.ownerName
// //             }
// //           };
// //         })
// //       );

// //       // Create payment intent
// //       const paymentIntent = await stripe.paymentIntents.create({
// //         amount: Math.round(amount),
// //         currency: 'usd',
// //         payment_method_types: ['card'],
// //         metadata: {
// //           userId: req.user._id.toString()
// //         }
// //       });

// //       // Create payment record with shop owner information
// //       const payment = new Payment({
// //         user: req.user._id,
// //         stripePaymentIntentId: paymentIntent.id,
// //         amount: amount / 100,
// //         deliveryInfo,
// //         cartItems: processedCartItems,
// //         status: 'pending'
// //       });

// //       await payment.save();

// //       res.json({
// //         clientSecret: paymentIntent.client_secret,
// //         payment: {
// //           id: payment._id,
// //           amount: payment.amount,
// //           status: payment.status,
// //           cartItems: processedCartItems
// //         }
// //       });
// //     } catch (error) {
// //       console.error('Payment Intent Error:', error);
// //       res.status(500).json({ message: error.message });
// //     }
// //   },

// //   confirmPayment: async (req, res) => {
// //     try {
// //       const { paymentIntentId } = req.body;

// //       const payment = await Payment.findOne({
// //         stripePaymentIntentId: paymentIntentId,
// //         status: 'pending'
// //       });

// //       if (!payment) {
// //         return res.status(404).json({ message: 'Payment not found or already processed' });
// //       }

// //       // Update payment status
// //       payment.status = 'completed';
// //       await payment.save();

// //       // Clear user's cart
// //       await Cart.findOneAndUpdate(
// //         { user: req.user._id },
// //         { $set: { items: [] } }
// //       );

// //       res.json({
// //         success: true,
// //         payment: {
// //           id: payment._id,
// //           status: payment.status,
// //           amount: payment.amount
// //         }
// //       });
// //     } catch (error) {
// //       console.error('Confirmation Error:', error);
// //       res.status(500).json({ message: error.message });
// //     }
// //   },

// //   // New method to get payment details
// //   getPaymentDetails: async (req, res) => {
// //     try {
// //       const payment = await Payment.findById(req.params.paymentId)
// //         .populate({
// //           path: 'cartItems.productId',
// //           select: 'name price images'
// //         });

// //       if (!payment) {
// //         return res.status(404).json({ message: 'Payment not found' });
// //       }

// //       // Check if the payment belongs to the requesting user
// //       if (payment.user.toString() !== req.user._id.toString()) {
// //         return res.status(403).json({ message: 'Not authorized to view this payment' });
// //       }

// //       res.json({
// //         success: true,
// //         payment: {
// //           id: payment._id,
// //           amount: payment.amount,
// //           status: payment.status,
// //           deliveryInfo: payment.deliveryInfo,
// //           cartItems: payment.cartItems,
// //           createdAt: payment.createdAt
// //         }
// //       });
// //     } catch (error) {
// //       console.error('Get Payment Details Error:', error);
// //       res.status(500).json({ message: error.message });
// //     }
// //   }
// // };

// // module.exports = paymentController;
// //////////////////in the top 100%////

// // Payment Controller
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// const Payment = require("../models/Payment");
// const Cart = require("../models/cart");
// const Product = require("../models/Product");

// const paymentController = {
//   createPaymentIntent: async (req, res) => {
//     try {
//       const { amount, deliveryInfo, cartItems } = req.body;

//       // Check if amount is valid
//       if (!amount || amount <= 0) {
//         return res.status(400).json({ message: "Invalid amount" });
//       }

//       // Process cart items to include shop owner information and images
//       const processedCartItems = await Promise.all(
//         cartItems.map(async (item) => {
//           const product = await Product.findById(item.productId).populate(
//             "shopOwner",
//             "ownerName _id"
//           );

//           if (!product) {
//             throw new Error(`Product not found: ${item.productId}`);
//           }

//           return {
//             ...item,
//             images: product.images, // Include product images
//             shopOwner: {
//               id: product.shopOwner._id,
//               name: product.shopOwner.ownerName,
//             },
//           };
//         })
//       );

//       // Create payment intent
//       const paymentIntent = await stripe.paymentIntents.create({
//         amount: Math.round(amount),
//         currency: "usd",
//         payment_method_types: ["card"],
//         metadata: {
//           userId: req.user._id.toString(),
//         },
//       });

//       // Create payment record with shop owner information and images
//       const payment = new Payment({
//         user: req.user._id,
//         stripePaymentIntentId: paymentIntent.id,
//         amount: amount / 100,
//         deliveryInfo,
//         cartItems: processedCartItems,
//         status: "pending",
//       });

//       await payment.save();

//       res.json({
//         clientSecret: paymentIntent.client_secret,
//         payment: {
//           id: payment._id,
//           amount: payment.amount,
//           status: payment.status,
//           cartItems: processedCartItems,
//         },
//       });
//     } catch (error) {
//       console.error("Payment Intent Error:", error);
//       res.status(500).json({ message: error.message });
//     }
//   },

//   confirmPayment: async (req, res) => {
//     try {
//       const { paymentIntentId } = req.body;

//       const payment = await Payment.findOne({
//         stripePaymentIntentId: paymentIntentId,
//         status: "pending",
//       });

//       if (!payment) {
//         return res
//           .status(404)
//           .json({ message: "Payment not found or already processed" });
//       }

//       // Update payment status
//       payment.status = "completed";
//       await payment.save();

//       // Clear user's cart
//       await Cart.findOneAndUpdate(
//         { user: req.user._id },
//         { $set: { items: [] } }
//       );

//       res.json({
//         success: true,
//         payment: {
//           id: payment._id,
//           status: payment.status,
//           amount: payment.amount,
//         },
//       });
//     } catch (error) {
//       console.error("Confirmation Error:", error);
//       res.status(500).json({ message: error.message });
//     }
//   },

//   getPaymentDetails: async (req, res) => {
//     try {
//       const payment = await Payment.findById(req.params.paymentId).populate({
//         path: "cartItems.productId",
//         select: "name price images",
//       });

//       if (!payment) {
//         return res.status(404).json({ message: "Payment not found" });
//       }

//       // Check if the payment belongs to the requesting user
//       if (payment.user.toString() !== req.user._id.toString()) {
//         return res
//           .status(403)
//           .json({ message: "Not authorized to view this payment" });
//       }

//       res.json({
//         success: true,
//         payment: {
//           id: payment._id,
//           amount: payment.amount,
//           status: payment.status,
//           deliveryInfo: payment.deliveryInfo,
//           cartItems: payment.cartItems,
//           createdAt: payment.createdAt,
//         },
//       });
//     } catch (error) {
//       console.error("Get Payment Details Error:", error);
//       res.status(500).json({ message: error.message });
//     }
//   },
// };

// module.exports = paymentController;
//////////////////////////////////////////////////////////

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// const Payment = require("../models/Payment");
// const Cart = require("../models/cart");
// const Product = require("../models/Product");

// const paymentController = {
//   createPaymentIntent: async (req, res) => {
//     try {
//       const { amount, deliveryInfo, cartItems } = req.body;

//       // Check if amount is valid
//       if (!amount || amount <= 0) {
//         return res.status(400).json({ message: "Invalid amount" });
//       }

//       // Process cart items to include shop owner information and images
//       const processedCartItems = await Promise.all(
//         cartItems.map(async (item) => {
//           const product = await Product.findById(item.productId).populate(
//             "shopOwner",
//             "ownerName _id shopLocation shopPhone" // Added shopLocation and shopPhone
//           );

//           if (!product) {
//             throw new Error(`Product not found: ${item.productId}`);
//           }

//           return {
//             ...item,
//             images: product.images,
//             shopOwner: {
//               id: product.shopOwner._id,
//               name: product.shopOwner.ownerName,
//               location: product.shopOwner.shopLocation,
//               phone: product.shopOwner.shopPhone,
//             },
//           };
//         })
//       );

//       // Create payment intent
//       const paymentIntent = await stripe.paymentIntents.create({
//         amount: Math.round(amount),
//         currency: "usd",
//         payment_method_types: ["card"],
//         metadata: {
//           userId: req.user._id.toString(),
//         },
//       });

//       // Create payment record with enhanced information
//       const payment = new Payment({
//         user: req.user._id,
//         stripePaymentIntentId: paymentIntent.id,
//         amount: amount / 100,
//         deliveryFee: 10.0, // Added fixed delivery fee
//         deliveryInfo,
//         cartItems: processedCartItems,
//         status: "pending",
//         orderNumber: generateOrderNumber(), // New function to generate unique order numbers
//       });

//       await payment.save();

//       res.json({
//         clientSecret: paymentIntent.client_secret,
//         payment: {
//           id: payment._id,
//           orderNumber: payment.orderNumber,
//           amount: payment.amount,
//           deliveryFee: payment.deliveryFee,
//           status: payment.status,
//           cartItems: processedCartItems,
//         },
//       });
//     } catch (error) {
//       console.error("Payment Intent Error:", error);
//       res.status(500).json({ message: error.message });
//     }
//   },

//   confirmPayment: async (req, res) => {
//     try {
//       const { paymentIntentId } = req.body;

//       const payment = await Payment.findOne({
//         stripePaymentIntentId: paymentIntentId,
//         status: "pending",
//       });

//       if (!payment) {
//         return res
//           .status(404)
//           .json({ message: "Payment not found or already processed" });
//       }

//       // Update payment status
//       payment.status = "completed";
//       await payment.save();

//       // Clear user's cart
//       await Cart.findOneAndUpdate(
//         { user: req.user._id },
//         { $set: { items: [] } }
//       );

//       res.json({
//         success: true,
//         payment: {
//           id: payment._id,
//           orderNumber: payment.orderNumber,
//           status: payment.status,
//           amount: payment.amount,
//         },
//       });
//     } catch (error) {
//       console.error("Confirmation Error:", error);
//       res.status(500).json({ message: error.message });
//     }
//   },

//   getPaymentDetails: async (req, res) => {
//     try {
//       const payment = await Payment.findById(req.params.paymentId)
//         .populate({
//           path: "cartItems.productId",
//           select: "name price images",
//         })
//         .populate({
//           path: "user",
//           select: "username email",
//         })
//         .populate({
//           path: "cartItems.shopOwner.id",
//           select: "ownerName shopLocation shopPhone",
//         });

//       if (!payment) {
//         return res.status(404).json({ message: "Payment not found" });
//       }

//       // Check if the payment belongs to the requesting user
//       if (payment.user._id.toString() !== req.user._id.toString()) {
//         return res
//           .status(403)
//           .json({ message: "Not authorized to view this payment" });
//       }

//       // Format the response with all necessary invoice information
//       const formattedPayment = {
//         id: payment._id,
//         orderNumber: payment.orderNumber,
//         amount: payment.amount,
//         deliveryFee: payment.deliveryFee,
//         subtotal: payment.amount - payment.deliveryFee,
//         status: payment.status,
//         deliveryInfo: payment.deliveryInfo,
//         cartItems: payment.cartItems.map((item) => ({
//           name: item.productId.name,
//           quantity: item.quantity,
//           price: item.price,
//           images: item.productId.images,
//           shopOwner: {
//             name: item.shopOwner.name,
//             location: item.shopOwner.location,
//             phone: item.shopOwner.phone,
//           },
//           subtotal: item.price * item.quantity,
//         })),
//         createdAt: payment.createdAt,
//         customerInfo: {
//           name: payment.user.username,
//           email: payment.user.email,
//         },
//         paymentMethod: "Credit Card",
//         invoiceNumber: `INV-${payment.orderNumber}`,
//       };

//       res.json({
//         success: true,
//         payment: formattedPayment,
//       });
//     } catch (error) {
//       console.error("Get Payment Details Error:", error);
//       res.status(500).json({ message: error.message });
//     }
//   },

//   // Helper function to generate unique order numbers
//   generateOrderNumber: () => {
//     const prefix = "EV";
//     const timestamp = Date.now().toString().slice(-6);
//     const random = Math.floor(Math.random() * 1000)
//       .toString()
//       .padStart(3, "0");
//     return `${prefix}${timestamp}${random}`;
//   },
// };

// module.exports = paymentController;
//////////////////////////////////////////////////////////////

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Payment = require("../models/Payment");
const Cart = require("../models/cart");
const Product = require("../models/Product");

// Helper function to generate order number
const generateOrderNumber = () => {
  const prefix = "EV";
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0");
  return `${prefix}${timestamp}${random}`;
};

const paymentController = {
  createPaymentIntent: async (req, res) => {
    try {
      const { amount, deliveryInfo, cartItems } = req.body;

      // Check if amount is valid
      if (!amount || amount <= 0) {
        return res.status(400).json({ message: "Invalid amount" });
      }

      // Process cart items to include shop owner information and images
      const processedCartItems = await Promise.all(
        cartItems.map(async (item) => {
          const product = await Product.findById(item.productId).populate(
            "shopOwner",
            "ownerName _id shopLocation shopPhone"
          );

          if (!product) {
            throw new Error(`Product not found: ${item.productId}`);
          }

          return {
            ...item,
            images: product.images,
            shopOwner: {
              id: product.shopOwner._id,
              name: product.shopOwner.ownerName,
              location: product.shopOwner.shopLocation,
              phone: product.shopOwner.shopPhone,
            },
          };
        })
      );

      // Create payment intent
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Convert to cents
        currency: "usd",
        payment_method_types: ["card"],
        metadata: {
          userId: req.user._id.toString(),
        },
      });

      // Generate order number
      const orderNumber = generateOrderNumber();

      // Create payment record
      const payment = new Payment({
        user: req.user._id,
        stripePaymentIntentId: paymentIntent.id,
        orderNumber,
        amount: amount,
        deliveryFee: 10.0,
        deliveryInfo,
        cartItems: processedCartItems,
        status: "pending",
      });

      await payment.save();

      res.json({
        clientSecret: paymentIntent.client_secret,
        payment: {
          id: payment._id,
          orderNumber: payment.orderNumber,
          amount: payment.amount,
          deliveryFee: payment.deliveryFee,
          status: payment.status,
          cartItems: processedCartItems,
        },
      });
    } catch (error) {
      console.error("Payment Intent Error:", error);
      res.status(500).json({ message: error.message });
    }
  },

  confirmPayment: async (req, res) => {
    try {
      const { paymentIntentId } = req.body;

      const payment = await Payment.findOne({
        stripePaymentIntentId: paymentIntentId,
        status: "pending",
      });

      if (!payment) {
        return res.status(404).json({
          message: "Payment not found or already processed",
        });
      }

      // Update payment status
      payment.status = "completed";
      await payment.save();

      // Clear user's cart
      await Cart.findOneAndUpdate(
        { user: req.user._id },
        { $set: { items: [] } }
      );

      res.json({
        success: true,
        payment: {
          id: payment._id,
          orderNumber: payment.orderNumber,
          status: payment.status,
          amount: payment.amount,
        },
      });
    } catch (error) {
      console.error("Confirmation Error:", error);
      res.status(500).json({ message: error.message });
    }
  },

  getPaymentDetails: async (req, res) => {
    try {
      const payment = await Payment.findById(req.params.paymentId)
        .populate({
          path: "cartItems.productId",
          select: "name price images",
        })
        .populate({
          path: "user",
          select: "username email",
        })
        .populate({
          path: "cartItems.shopOwner.id",
          select: "ownerName shopLocation shopPhone",
        });

      if (!payment) {
        return res.status(404).json({ message: "Payment not found" });
      }

      // Check if the payment belongs to the requesting user
      if (payment.user._id.toString() !== req.user._id.toString()) {
        return res.status(403).json({
          message: "Not authorized to view this payment",
        });
      }

      const formattedPayment = {
        id: payment._id,
        orderNumber: payment.orderNumber,
        amount: payment.amount,
        deliveryFee: payment.deliveryFee,
        subtotal: payment.amount - payment.deliveryFee,
        status: payment.status,
        deliveryInfo: payment.deliveryInfo,
        cartItems: payment.cartItems.map((item) => ({
          name: item.productId.name,
          quantity: item.quantity,
          price: item.price,
          images: item.productId.images,
          shopOwner: {
            name: item.shopOwner.name,
            location: item.shopOwner.location,
            phone: item.shopOwner.phone,
          },
          subtotal: item.price * item.quantity,
        })),
        createdAt: payment.createdAt,
        customerInfo: {
          name: payment.user.username,
          email: payment.user.email,
        },
        paymentMethod: "Credit Card",
        stripePaymentIntentId: payment.stripePaymentIntentId,
      };

      res.json({
        success: true,
        payment: formattedPayment,
      });
    } catch (error) {
      console.error("Get Payment Details Error:", error);
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = paymentController;
