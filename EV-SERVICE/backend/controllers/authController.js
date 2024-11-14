// const User = require("../models/User");
// const jwt = require("jsonwebtoken");

// // Helper function to generate JWT
// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
// };

// // Register user
// exports.register = async (req, res) => {
//   const { username, email, password } = req.body;

//   try {
//     const userExists = await User.findOne({ email });

//     if (userExists) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const user = await User.create({
//       username,
//       email,
//       password,
//     });

//     res.status(201).json({
//       _id: user._id,
//       username: user.username,
//       email: user.email,
//       token: generateToken(user._id),
//     });
//   } catch (error) {
//     console.error("Error during registration:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// // Login user
// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (user && (await user.matchPassword(password))) {
//       res.cookie("token", generateToken(user._id), {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === "production", // Use secure cookies in production
//         sameSite: "strict",
//       });
//       res.json({
//         _id: user._id,
//         username: user.username,
//         email: user.email,
//         token: generateToken(user._id),
//       });
//     } else {
//       res.status(401).json({ message: "Invalid email or password" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };
// //////////////////////
// const User = require("../models/User");
// const jwt = require("jsonwebtoken");

// // Helper function to generate JWT
// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
// };

// // Register user
// exports.register = async (req, res) => {
//   const { username, email, password } = req.body;
//   try {
//     // Check if all required fields are provided
//     if (!username || !email || !password) {
//       return res
//         .status(400)
//         .json({ message: "Please provide all required fields" });
//     }

//     // Check if user already exists
//     const userExists = await User.findOne({ $or: [{ email }, { username }] });
//     if (userExists) {
//       return res
//         .status(400)
//         .json({ message: "User with this email or username already exists" });
//     }

//     // Create new user
//     const user = await User.create({
//       username,
//       email,
//       password,
//     });

//     if (user) {
//       res.status(201).json({
//         _id: user._id,
//         username: user.username,
//         email: user.email,
//         token: generateToken(user._id),
//       });
//     } else {
//       res.status(400).json({ message: "Invalid user data" });
//     }
//   } catch (error) {
//     console.error("Error during registration:", error);
//     res.status(500).json({
//       message: "Server error during registration",
//       error: error.message,
//       stack: process.env.NODE_ENV === "production" ? "🥞" : error.stack,
//     });
//   }
// };

// // Login user
// exports.login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (user && (await user.matchPassword(password))) {
//       res.json({
//         _id: user._id,
//         username: user.username,
//         email: user.email,
//         token: generateToken(user._id),
//       });
//     } else {
//       res.status(401).json({ message: "Invalid email or password" });
//     }
//   } catch (error) {
//     console.error("Error during login:", error);
//     res.status(500).json({
//       message: "Server error during login",
//       error: error.message,
//       stack: process.env.NODE_ENV === "production" ? "🥞" : error.stack,
//     });
//   }
// };
/////////////////ok up الامور تمام تحت//////////////

// authController.js
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Helper function to generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// Register user
exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Check if all required fields are provided
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }
    // Check if user already exists
    const userExists = await User.findOne({ $or: [{ email }, { username }] });
    if (userExists) {
      return res
        .status(400)
        .json({ message: "User with this email or username already exists" });
    }
    // Create new user
    const user = await User.create({
      username,
      email,
      password,
    });
    if (user) {
      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        isApproved: user.isApproved,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({
      message: "Server error during registration",
      error: error.message,
      stack: process.env.NODE_ENV === "production" ? "🥞" : error.stack,
    });
  }
};

// Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      // Check if the user is approved
      if (!user.isApproved) {
        return res.status(403).json({
          message: "Your account is not approved. Please contact support.",
        });
      }
      res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        isApproved: user.isApproved,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({
      message: "Server error during login",
      error: error.message,
      stack: process.env.NODE_ENV === "production" ? "🥞" : error.stack,
    });
  }
};
//////////////////////////////GooGle///

exports.googleSignup = async (req, res) => {
  try {
    const { credential } = req.body;

    // Verify the ID token from the client
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name, picture } = payload;

    // Check if the user already exists
    let user = await User.findOne({ email });

    if (!user) {
      // Create a new user
      user = new User({
        name,
        email,
        profilePicture: picture,
        googleId: payload.sub,
      });
      await user.save();
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" } // Token expires in 1 day
    );
    // Set the token as an HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
    });

    // Set the user_id as an HTTP-only cookie
    // res.cookie("user_id", user._id.toString(), {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   sameSite: "strict",
    //   maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
    // });

    // Send the response
    res.status(200).json({
      success: true,
      message: "Signup successful",
      token: token,
      // user_id: user._id, // Include user_id in response for frontend storage
    });
  } catch (error) {
    console.error("Google signup error:", error);
    res.status(500).json({ message: "Error during Google signup" });
  }
};
