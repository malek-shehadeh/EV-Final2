// // // // const mongoose = require("mongoose");

// // // // const PaymentSchema = new mongoose.Schema({
// // // //   stripePaymentIntentId: {
// // // //     type: String,
// // // //     required: true,
// // // //   },
// // // //   amount: {
// // // //     type: Number,
// // // //     required: true,
// // // //   },
// // // //   deliveryInfo: {
// // // //     name: String,
// // // //     email: String,
// // // //     address: String,
// // // //     city: String,
// // // //     state: String,
// // // //     zipCode: String,
// // // //   },
// // // //   orderSummary: {
// // // //     totalPrice: Number,
// // // //     itemCount: Number,
// // // //     items: [
// // // //       {
// // // //         name: String,
// // // //         quantity: Number,
// // // //         price: Number,
// // // //       },
// // // //     ],
// // // //   },
// // // //   createdAt: {
// // // //     type: Date,
// // // //     default: Date.now,
// // // //   },
// // // // });

// // // // module.exports = mongoose.model("Payment", PaymentSchema);
// // // /////////////////

// // // const mongoose = require("mongoose");

// // // const PaymentSchema = new mongoose.Schema({
// // //   stripePaymentIntentId: {
// // //     type: String,
// // //     required: true,
// // //   },
// // //   amount: {
// // //     type: Number,
// // //     required: true,
// // //   },
// // //   deliveryInfo: {
// // //     name: String,
// // //     email: String,
// // //     address: String,
// // //     city: String,
// // //     state: String,
// // //     zipCode: String,
// // //   },
// // //   cartItems: [
// // //     {
// // //       productId: {
// // //         type: mongoose.Schema.Types.ObjectId,
// // //         ref: "Product",
// // //         required: true,
// // //       },
// // //       name: String,
// // //       quantity: Number,
// // //       price: Number,
// // //     },
// // //   ],
// // //   createdAt: {
// // //     type: Date,
// // //     default: Date.now,
// // //   },
// // // });

// // // module.exports = mongoose.model("Payment", PaymentSchema);
// // /////////////////////////////////////

// // const mongoose = require("mongoose");

// // const PaymentSchema = new mongoose.Schema(
// //   {
// //     user: {
// //       type: mongoose.Schema.Types.ObjectId,
// //       ref: "User",
// //       required: true,
// //     },
// //     stripePaymentIntentId: {
// //       type: String,
// //       required: true,
// //     },
// //     amount: {
// //       type: Number,
// //       required: true,
// //     },
// //     deliveryInfo: {
// //       fullName: String,
// //       phone: String,
// //       email: String,
// //       address: String,
// //     },
// //     cartItems: [
// //       {
// //         productId: {
// //           type: mongoose.Schema.Types.ObjectId,
// //           ref: "Product",
// //         },
// //         name: String,
// //         quantity: Number,
// //         price: Number,
// //       },
// //     ],
// //     status: {
// //       type: String,
// //       enum: ["pending", "completed", "failed"],
// //       default: "pending",
// //     },
// //   },
// //   { timestamps: true }
// // );

// // module.exports = mongoose.model("Payment", PaymentSchema);
// /////////////

// const mongoose = require('mongoose');

// const PaymentSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   stripePaymentIntentId: {
//     type: String,
//     required: true
//   },
//   amount: {
//     type: Number,
//     required: true
//   },
//   status: {
//     type: String,
//     enum: ['pending', 'completed', 'failed'],
//     default: 'pending'
//   },
//   deliveryInfo: {
//     fullName: String,
//     phone: String,
//     email: String,
//     address: String
//   },
//   cartItems: [{
//     productId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'Product'
//     },
//     name: String,
//     quantity: Number,
//     price: Number
//   }]
// }, {
//   timestamps: true
// });

// module.exports = mongoose.model('Payment', PaymentSchema);
//////////////////////

// const mongoose = require('mongoose');

// const PaymentSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   stripePaymentIntentId: {
//     type: String,
//     required: true
//   },
//   amount: {
//     type: Number,
//     required: true
//   },
//   status: {
//     type: String,
//     enum: ['pending', 'completed', 'failed'],
//     default: 'pending'
//   },
//   deliveryInfo: {
//     fullName: String,
//     phone: String,
//     email: String,
//     address: String
//   },
//   cartItems: [{
//     productId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'Product'
//     },
//     name: String,
//     quantity: Number,
//     price: Number,
//     shopOwner: {
//       id: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'ShopOwner',
//         required: true
//       },
//       name: {
//         type: String,
//         required: true
//       }
//     }
//   }]
// }, {
//   timestamps: true
// });

// module.exports = mongoose.model('Payment', PaymentSchema);
////////////////in the top 100%////

// Payment Model
const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    stripePaymentIntentId: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
    deliveryInfo: {
      fullName: String,
      phone: String,
      email: String,
      address: String,
    },
    cartItems: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        name: String,
        quantity: Number,
        price: Number,
        images: [String], // Added field to store product images
        shopOwner: {
          id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ShopOwner",
            required: true,
          },
          name: {
            type: String,
            required: true,
          },
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Payment", PaymentSchema);
