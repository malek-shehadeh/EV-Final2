// const jwt = require('jsonwebtoken');

// exports.authenticateToken = (req, res, next) => {
//   const token = req.cookies['Patient Token'];

//   if (!token) {
//     return res.status(401).json({ message: 'Authentication required' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     return res.status(403).json({ message: 'Invalid or expired token' });
//   }
// };

/////////////////

// const jwt = require("jsonwebtoken");
// // const User = require("../models/User");
// // const ShopOwner = require("../models/shopOwner");

// const protect = async (req, res, next) => {
//   let token;

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       // استخراج الرمز المميز من الهيدر
//       token = req.headers.authorization.split(" ")[1];
//       console.log("Received token:", token);

//       // فك تشفير الرمز المميز
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);

//       // البحث عن المستخدم في كلا النموذجين
//       let user = await User.findById(decoded.id).select("-password");
//       let shopOwner = await ShopOwner.findById(decoded.id).select("-password");

//       if (user) {
//         req.user = user;
//         req.userType = "user";
//       } else if (shopOwner) {
//         req.user = shopOwner;
//         req.userType = "shopOwner";
//       } else {
//         return res.status(401).json({ message: "User not found" });
//       }

//       next();
//     } catch (error) {
//       console.error("Error in protect middleware:", error);
//       res.status(401).json({ message: "Not authorized, token failed" });
//     }
//   } else {
//     res.status(401).json({ message: "Not authorized, no token" });
//   }
// };

// module.exports = protect;
//////////////////////
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res
      .status(401)
      .json({ message: "No authentication token, access denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = authMiddleware;
///////////////////////////

// // middlewares/adminAuth.js
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// module.exports = async (req, res, next) => {
//   try {
//     const token = req.header('Authorization').replace('Bearer ', '');
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await User.findOne({ _id: decoded._id, 'tokens.token': token, isAdmin: true });

//     if (!user) {
//       throw new Error();
//     }

//     req.token = token;
//     req.user = user;
//     next();
//   } catch (error) {
//     res.status(401).send({ error: 'Please authenticate as an admin.' });
//   }
// };
