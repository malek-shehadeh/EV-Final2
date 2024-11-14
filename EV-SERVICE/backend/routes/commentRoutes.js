// // const express = require("express");
// // const router = express.Router();
// // const commentController = require("../controllers/CommentController");
// // const { authenticateToken } = require("../middleware/authMiddleware");

// // router.post(
// //   "/doctors/comments",
// //   authenticateToken,
// //   commentController.addComment
// // );
// // router.get(
// //   "/doctors/:doctor_id/comments",
// //   commentController.getCommentsByDoctor
// // );
// // router.put(
// //   "/doctors/comments/:comment_id",
// //   authenticateToken,
// //   commentController.updateComment
// // );
// // router.delete(
// //   "/doctors/comments/:comment_id",
// //   authenticateToken,
// //   commentController.deleteComment
// // );
// // router.get(
// //   "/notifications",
// //   authenticateToken,
// //   commentController.getNotifications
// // );
// // router.put(
// //   "/notifications/:notification_id/read",
// //   authenticateToken,
// //   commentController.markNotificationAsRead
// // );

// // module.exports = router;
// /////////////////////////////////

// // const express = require("express");
// // const router = express.Router();
// // const commentController = require("../controllers/CommentController");
// // const { authenticateToken } = require("../middlewares/auth");

// // router.post(
// //   "/products/comments",
// //   authenticateToken,
// //   commentController.addComment
// // );
// // router.get(
// //   "/products/:product_id/comments",
// //   commentController.getCommentsByProduct
// // );
// // router.put(
// //   "/products/comments/:comment_id",
// //   authenticateToken,
// //   commentController.updateComment
// // );
// // router.delete(
// //   "/products/comments/:comment_id",
// //   authenticateToken,
// //   commentController.deleteComment
// // );
// // router.get(
// //   "/notifications",
// //   authenticateToken,
// //   commentController.getNotifications
// // );
// // router.put(
// //   "/notifications/:notification_id/read",
// //   authenticateToken,
// //   commentController.markNotificationAsRead
// // );

// // module.exports = router;
// // /////////////////////////////////
// // const express = require("express");
// // const router = express.Router();
// // const commentController = require("../controllers/CommentController");
// // const { authenticateToken } = require("../middlewares/auth");

// // // Existing routes
// // router.post(
// //   "/products/comments",
// //   authenticateToken,
// //   commentController.addComment
// // );
// // router.get(
// //   "/products/:product_id/comments",
// //   commentController.getCommentsByProduct
// // );
// // router.put(
// //   "/products/comments/:comment_id",
// //   authenticateToken,
// //   commentController.updateComment
// // );
// // router.delete(
// //   "/products/comments/:comment_id",
// //   authenticateToken,
// //   commentController.deleteComment
// // );
// // router.get(
// //   "/notifications",
// //   authenticateToken,
// //   commentController.getNotifications
// // );
// // router.put(
// //   "/notifications/:notification_id/read",
// //   authenticateToken,
// //   commentController.markNotificationAsRead
// // );

// // module.exports = router;
// ///////////////////////////////////
// const express = require("express");
// const router = express.Router();
// const commentController = require("../controllers/CommentController"); // Check the import path
// const { authenticateToken } = require("../middlewares/auth");

// router.post(
//   "/products/comments",
//   authenticateToken,
//   commentController.addComment
// );
// router.get(
//   "/products/:product_id/comments",
//   commentController.getCommentsByProduct
// );
// router.put(
//   "/products/comments/:comment_id",
//   authenticateToken,
//   commentController.updateComment
// );
// router.delete(
//   "/products/comments/:comment_id",
//   authenticateToken,
//   commentController.deleteComment
// );
// router.get(
//   "/notifications",
//   authenticateToken,
//   commentController.getNotifications
// );
// router.put(
//   "/notifications/:notification_id/read",
//   authenticateToken,
//   commentController.markNotificationAsRead
// );

// module.exports = router;
//////////////////////
const express = require("express");
const router = express.Router();
const commentController = require("../controllers/CommentController"); // Ensure correct path
const protect = require("../middlewares/auth"); // Assuming you have a middleware for token authentication
// Route to add a new comment
router.post("/products/comments", protect, commentController.addComment);

// Route to get comments for a specific product
router.get(
  "/products/:product_id/comments",
  protect,
  commentController.getCommentsByProduct
);

// Route to update a comment
router.put(
  "/products/comments/:comment_id",
  protect,
  commentController.updateComment
);

// Route to delete a comment
router.delete(
  "/products/comments/:comment_id",
  protect,
  commentController.deleteComment
);

// Route to get notifications
router.get("/notifications", protect, commentController.getNotifications);

// Route to mark a notification as read
router.put(
  "/notifications/:notification_id/read",
  protect,
  commentController.markNotificationAsRead
);
router.get(
  "/notifications/unread-count",
  protect,
  commentController.getUnreadNotificationCount
);

module.exports = router;
/////////////////////////////////////////////
