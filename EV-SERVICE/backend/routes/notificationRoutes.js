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
////////////////
// New routes for notifications
router.get("/notifications", protect, commentController.getNotifications);
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
