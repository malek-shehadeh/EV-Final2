// const jwt = require('jsonwebtoken');

// module.exports = (req, res, next) => {
//   const token = req.header('x-auth-token');
//   if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded.user;
//     next();
//   } catch (err) {
//     res.status(401).json({ msg: 'Token is not valid' });
//   }
// };
// ///////////////////////////
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const protect = async (req, res, next) => {
//   let token;

//   if (req.cookies.token) {
//     try {
//       token = req.cookies.token;
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       req.user = await User.findById(decoded.id).select("-password");
//       next();
//     } catch (error) {
//       res.status(401).json({ message: "Not authorized, token failed" });
//     }
//   }

//   if (!token) {
//     res.status(401).json({ message: "Not authorized, no token" });
//   }
// };

// module.exports = protect;
// /////////////////
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const protect = async (req, res, next) => {
//   let token;

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       // Get token from header
//       token = req.headers.authorization.split(" ")[1];

//       // Verify token
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);

//       // Get user from the token
//       req.user = await User.findById(decoded.id).select("-password");

//       next();
//     } catch (error) {
//       console.error("Error in protect middleware:", error);
//       res.status(401).json({ message: "Not authorized, token failed" });
//     }
//   }

//   if (!token) {
//     res.status(401).json({ message: "Not authorized, no token" });
//   }
// };

// module.exports = protect;
// ///////////////////////
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const protect = async (req, res, next) => {
//   let token;

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       // Get token from header
//       token = req.headers.authorization.split(" ")[1];

//       // Verify token
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);

//       // Get user from the token
//       req.user = await User.findById(decoded.id).select("-password");

//       next();
//     } catch (error) {
//       console.error("Error in protect middleware:", error);
//       res.status(401).json({ message: "Not authorized, token failed" });
//     }
//   }

//   if (!token) {
//     res.status(401).json({ message: "Not authorized, no token" });
//   }
// };

// module.exports = protect;
///////////////////////////////////////
// ////////////////////////
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const protect = async (req, res, next) => {
//   let token;

//   // Check if the Authorization header exists and starts with "Bearer"
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       // Get token from header
//       token = req.headers.authorization.split(" ")[1];

//       // Log the received token for debugging
//       console.log("Received token:", token);

//       // Verify token
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);

//       // Get user from the token
//       req.user = await User.findById(decoded.id).select("-password");

//       // Check if user exists
//       if (!req.user) {
//         return res.status(401).json({ message: "User not found" });
//       }

//       next(); // Proceed to the next middleware or route handler
//     } catch (error) {
//       console.error("Error in protect middleware:", error);
//       res.status(401).json({ message: "Not authorized, token failed" });
//     }
//   } else {
//     // No token was provided
//     res.status(401).json({ message: "Not authorized, no token" });
//   }
// };

// module.exports = protect;
// ////////////////////////////////////////////////////////////////
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const protect = async (req, res, next) => {
//   let token;

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       token = req.headers.authorization.split(" ")[1];
//       console.log("Received token:", token);

//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       req.user = await User.findById(decoded.id).select("-password");

//       if (!req.user) {
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
// ///////////////////
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const protect = async (req, res, next) => {
//   let token;

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       token = req.headers.authorization.split(" ")[1];
//       console.log("Received token:", token);

//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       req.user = await User.findById(decoded.id).select("-password");

//       if (!req.user) {
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
// ////////////////////////////////////////////////////////////////////////
// const jwt = require("jsonwebtoken");
// const ShopOwner = require("../models/shopOwner");

// const protect = async (req, res, next) => {
//   let token;

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       // Get token from header
//       token = req.headers.authorization.split(" ")[1];

//       // Verify token
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);

//       // Get user from the token
//       req.user = await ShopOwner.findById(decoded.id).select("-password");

//       if (!req.user) {
//         return res
//           .status(401)
//           .json({ message: "Not authorized, user not found" });
//       }

//       next();
//     } catch (error) {
//       console.error(error);
//       res.status(401).json({ message: "Not authorized, token failed" });
//     }
//   }

//   if (!token) {
//     res.status(401).json({ message: "Not authorized, no token" });
//   }
// };

// module.exports = protect;
////////////هون اشتغل الداشبورد بالاعلى وخرب اللوج ان///////////////////////////
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const protect = async (req, res, next) => {
//   let token;

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       token = req.headers.authorization.split(" ")[1];
//       console.log("Received token:", token);

//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       req.user = await User.findById(decoded.id).select("-password");

//       if (!req.user) {
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
//////////////////هون اشتغل اللوج ان بالاعلى/////////////////////
/////////////////////////////////////////////////////////////

const jwt = require("jsonwebtoken");
const User = require("../models/User");
const ShopOwner = require("../models/shopOwner");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // استخراج الرمز المميز من الهيدر
      token = req.headers.authorization.split(" ")[1];
      console.log("Received token:", token);

      // فك تشفير الرمز المميز
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // البحث عن المستخدم في كلا النموذجين
      let user = await User.findById(decoded.id).select("-password");
      let shopOwner = await ShopOwner.findById(decoded.id).select("-password");

      if (user) {
        req.user = user;
        req.userType = "user";
      } else if (shopOwner) {
        req.user = shopOwner;
        req.userType = "shopOwner";
      } else {
        return res.status(401).json({ message: "User not found" });
      }

      next();
    } catch (error) {
      console.error("Error in protect middleware:", error);
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

module.exports = protect;
