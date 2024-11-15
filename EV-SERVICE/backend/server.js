// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const contact = require("./routes/contactRoutes");
// require("dotenv").config();
// const path = require("path");
// const recipeRoutes = require("./routes/reciperoutes");
// const postRoutes = require("./routes/postRoutes");
// const reviewRoutes = require("./routes/reviewRoutes");

// const app = express();
// const PORT = process.env.PORT || 5001;

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// mongoose
//   .connect(
//     "mongodb+srv://bn7bkn:dZj6eiruj3JnznzO@attout.n2ukx.mongodb.net/littleItaly?retryWrites=true&w=majority&appName=attout",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   )
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// //contact
// app.use("/api/", contact);
// app.use("/api/users", require("./routes/usersroutes"));
// app.use("/api/dishes", require("./routes/dishroutes"));
// app.use("/api/dishescategory", require("./routes/dishescategoryroutes"));
// app.use("/api/recipes", require("./routes/reciperoutes"));
// app.use("/api/comments", require("./routes/commentsroutes"));
// app.use("/api/ratings", require("./routes/ratingsroutes"));
// app.use("/api/orders", require("./routes/ordersroutes"));
// app.use("/api/discounts", require("./routes/discountroutes"));
// app.use("/api/notifications", require("./routes/notificationroutes"));
// app.use("/api/chefs", require("./routes/chefsroutes"));
// app.use("/api/subscriptions", require("./routes/subscriptionroutes"));
// app.use("/api", reviewRoutes);

// app.use("/api/chefinfo", require("./routes/chefinforoutes"));

// app.use("/api/cheforders", require("./routes/chefordersroutes"));
// app.use("/api/reports", require("./routes/reportsroutes"));
// app.use("/api/userprofile", require("./routes/userprofileroutes"));
// app.use("/api/recipes", recipeRoutes);
// app.use("/posts", postRoutes);

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// /////////////////////////////////////////////////////////////////////////////////
// const express = require("express");
// const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");
// const dotenv = require("dotenv");
// const cors = require("cors"); // استيراد cors
// const authRoutes = require("./routes/authRoutes");

// // Load environment variables
// dotenv.config();

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cookieParser());

// // استخدام cors مع الإعدادات الافتراضية (السماح بالطلبات من أي نطاق)
// app.use(cors());

// // Routes
// app.use("/api", authRoutes);

// // Connect to MongoDB
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error(err));

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// ////////////////////////
// const express = require("express");
// const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const authRoutes = require("./routes/authRoutes");

// // Load environment variables
// dotenv.config();

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cookieParser());

// // CORS configuration
// app.use(
//   cors({
//     origin: "http://localhost:5173", // Replace with your frontend URL
//     credentials: true,
//   })
// );

// // Routes
// app.use("/api", authRoutes);

// // Connect to MongoDB
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// //////////////////////////////////
// const express = require("express");
// const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const authRoutes = require("./routes/authRoutes");
// const contactRoutes = require("./routes/contactRoutes"); // إضافة مسارات الاتصال

// // Load environment variables
// dotenv.config();

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cookieParser());

// // CORS configuration
// app.use(
//   cors({
//     origin: "http://localhost:5173", // Replace with your frontend URL
//     credentials: true,
//   })
// );

// // Routes
// app.use("/api/auth", authRoutes); // تحديث المسارات لتشمل المسارات الأخرى
// app.use("/api/contact", contactRoutes); // إضافة مسارات الاتصال

// // Connect to MongoDB
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// /////////////////
// const express = require("express");
// const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const authRoutes = require("./routes/authRoutes");
// const contactRoutes = require("./routes/contactRoutes"); // Import contact routes

// // Load environment variables
// dotenv.config();

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cookieParser());

// // CORS configuration
// app.use(
//   cors({
//     origin: "http://localhost:5173", // Replace with your frontend URL
//     credentials: true,
//   })
// );

// // Routes
// app.use("/api/auth", authRoutes); // Auth routes
// app.use("/api/contact", contactRoutes); // Contact routes

// // Connect to MongoDB
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// //////ok ok /////////////
// const express = require("express");
// const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const authRoutes = require("./routes/authRoutes");
// const contactRoutes = require("./routes/contactRoutes"); // Import contact routes
// const uploadRoutes = require("./routes/uploadRoutes"); // Import upload routes
// const userRoutes = require("./routes/userRoutes");

// // Load environment variables
// dotenv.config();

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cookieParser());

// // Serve static files from the uploads directory
// app.use("/uploads", express.static("uploads"));

// // CORS configuration
// app.use(
//   cors({
//     origin: "http://localhost:5173", // Replace with your frontend URL
//     credentials: true,
//   })
// );

// // Routes
// app.use("/api/auth", authRoutes); // Auth routes
// app.use("/api/contact", contactRoutes); // Contact routes
// app.use("/api/upload", uploadRoutes); // Upload routes
// app.use("/api/users", userRoutes);

// // Connect to MongoDB
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// ////////////////////
// const express = require("express");
// const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const path = require("path");
// const authRoutes = require("./routes/authRoutes");
// const contactRoutes = require("./routes/contactRoutes");
// const uploadRoutes = require("./routes/uploadRoutes");
// const userRoutes = require("./routes/userRoutes");
// const shopOwnerRoutes = require("./routes/shopOwnerRoutes");
// const productRoutes = require("./routes/productRoutes");
// const catalogRoutes = require("./routes/catalogRoutes"); // Adjust the path as needed
// const productController = require("./controllers/productController");
// const cartRoutes = require("./routes/cartRoutes");
// const commentRoutes = require("./routes/commentRoutes");

// dotenv.config();
// const app = express();

// app.use(express.json());
// app.use(cookieParser());
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );
// /////////
// // app.get("/api/catalog/approved", productController.getApprovedProducts);
// // app.get("/api/catalog/:id", productController.getProductById);
// /////////
// app.use("/api/auth", authRoutes);
// app.use("/api/contact", contactRoutes);
// app.use("/api/upload", uploadRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/shop-owner", shopOwnerRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/catalog", catalogRoutes);
// app.use("/api/cart", cartRoutes);
// app.use("/api/Comment", commentRoutes);

// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// /////////////////////////////////////////
// const express = require("express");
// const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const path = require("path");
// const authRoutes = require("./routes/authRoutes");
// const contactRoutes = require("./routes/contactRoutes");
// const uploadRoutes = require("./routes/uploadRoutes");
// const userRoutes = require("./routes/userRoutes");
// const shopOwnerRoutes = require("./routes/shopOwnerRoutes");
// const productRoutes = require("./routes/productRoutes");
// const catalogRoutes = require("./routes/catalogRoutes");
// const cartRoutes = require("./routes/cartRoutes");
// const commentRoutes = require("./routes/commentRoutes");
// const notificationRoutes = require("./routes/notificationRoutes");
// const paymentRoutes = require("./routes/paymentRoutes");
// const reportRoutes = require("./routes/reportRoutes");
// const authMiddleware = require("./middlewares/auth");
// const carCenterRoutes = require("./routes/CarCenterRoutes");
// const shopProfileRoutes = require("./routes/shopProfileRoutes");

// dotenv.config();
// const app = express();

// app.use(express.json());
// app.use(cookieParser());
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // CORS configuration
// app.use(
//   cors({
//     origin: ["http://localhost:5173", "http://localhost:5174"], // Allow both origins
//     credentials: true, // Allow cookies to be sent and received
//   })
// );

// ///////////////////////
// app.use("/api/auth", authRoutes);
// app.use("/api/contact", contactRoutes);
// app.use("/api/upload", uploadRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/shop-owner", shopOwnerRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/catalog", catalogRoutes);
// app.use("/api/cart", cartRoutes);
// app.use("/api/Comment", commentRoutes);
// app.use("/api/notification", notificationRoutes);
// app.use("/api/report", authMiddleware, reportRoutes);
// app.use("/api/carcenters", carCenterRoutes);
// ///////////////
// app.use("/api/shop-owners", shopProfileRoutes);

// //////////
// app.use("/api/payments", paymentRoutes);
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: err.message });
// });
///////////////////////////////////
//////
///////////////////////////////////

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

// Load environment variables first
dotenv.config();

// Initialize stripe with secret key
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Import routes
const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const userRoutes = require("./routes/userRoutes");
const shopOwnerRoutes = require("./routes/shopOwnerRoutes");
const productRoutes = require("./routes/productRoutes");
const homeproductRoutes = require("./routes/homeproductRoutes");
const catalogRoutes = require("./routes/catalogRoutes");
const cartRoutes = require("./routes/cartRoutes");
const commentRoutes = require("./routes/commentRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const reportRoutes = require("./routes/reportRoutes");
const authMiddleware = require("./middlewares/auth");
const carCenterRoutes = require("./routes/CarCenterRoutes");
const shopProfileRoutes = require("./routes/shopProfileRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  })
);

// Make stripe available to routes
app.set("stripe", stripe);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/users", userRoutes);
app.use("/api/shop-owner", shopOwnerRoutes);
app.use("/api/products", productRoutes);
app.use("/api/homeproduct", homeproductRoutes);
app.use("/api/catalog", catalogRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/Comment", commentRoutes);
app.use("/api/notification", notificationRoutes);
app.use("/api/report", authMiddleware, reportRoutes);
app.use("/api/carcenters", carCenterRoutes);
app.use("/api/shop-owners", shopProfileRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/orders", orderRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: err.message,
    error: process.env.NODE_ENV === "development" ? err : {},
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
