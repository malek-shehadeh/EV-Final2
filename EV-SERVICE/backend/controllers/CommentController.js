// // ////////////////////////////////
const Comment = require("../models/Comment");
const Notification = require("../models/Notification");
const User = require("../models/User");
const mongoose = require("mongoose");

exports.addComment = async (req, res) => {
  const { product_id, parent_comment_id, comment_text } = req.body;
  const user_id = req.user._id;

  try {
    let parentComment;
    if (parent_comment_id) {
      parentComment = await Comment.findById(parent_comment_id);
      if (!parentComment) {
        return res.status(404).json({ error: "Parent comment not found" });
      }
    }

    const newComment = new Comment({
      product_id,
      user_id,
      parent_comment_id,
      comment_text,
    });

    await newComment.save();

    // Create notification for parent comment author
    if (parentComment && !parentComment.user_id.equals(user_id)) {
      const commenter = await User.findById(user_id);
      const notification = new Notification({
        user_id: parentComment.user_id,
        product_id,
        message: `${commenter.username} replied to your comment`,
        comment_id: parent_comment_id,
      });
      await notification.save();

      // Increment unread notification count for the user
      await User.findByIdAndUpdate(parentComment.user_id, {
        $inc: { unreadNotificationCount: 1 },
      });
    }

    // Populate user details
    await newComment.populate("user_id", "username profileImage");

    res.status(201).json(newComment);
  } catch (error) {
    console.error("Error adding comment:", error);
    res
      .status(500)
      .json({ error: "An error occurred while adding the comment" });
  }
};

exports.getCommentsByProduct = async (req, res) => {
  const { product_id } = req.params;
  try {
    const comments = await Comment.find({ product_id })
      .populate("user_id", "username profileImage")
      .sort({ created_at: -1 });

    const commentMap = new Map();

    comments.forEach((comment) => {
      commentMap.set(comment._id.toString(), {
        ...comment.toObject(),
        replies: [],
      });
    });

    comments.forEach((comment) => {
      if (comment.parent_comment_id) {
        const parentComment = commentMap.get(
          comment.parent_comment_id.toString()
        );
        if (parentComment) {
          parentComment.replies.push(commentMap.get(comment._id.toString()));
        }
      }
    });

    const topLevelComments = Array.from(commentMap.values()).filter(
      (comment) => !comment.parent_comment_id
    );

    res.json(topLevelComments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching comments" });
  }
};

exports.updateComment = async (req, res) => {
  const { comment_id } = req.params;
  const { comment_text } = req.body;
  const user_id = req.user._id;

  try {
    const comment = await Comment.findOneAndUpdate(
      { _id: comment_id, user_id },
      { comment_text },
      { new: true }
    ).populate("user_id", "username profileImage");

    if (!comment) {
      return res.status(404).json({
        error: "Comment not found or you do not have permission to edit it",
      });
    }

    res.json(comment);
  } catch (error) {
    console.error("Error updating comment:", error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the comment" });
  }
};

exports.deleteComment = async (req, res) => {
  const { comment_id } = req.params;
  const user_id = req.user._id;

  try {
    const comment = await Comment.findOneAndDelete({
      _id: comment_id,
      user_id,
    });

    if (!comment) {
      return res.status(404).json({
        error: "Comment not found or you do not have permission to delete it",
      });
    }

    // Delete all replies to this comment
    await Comment.deleteMany({ parent_comment_id: comment_id });

    res.json({ message: "Comment and its replies deleted successfully" });
  } catch (error) {
    console.error("Error deleting comment:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the comment" });
  }
};

exports.getNotifications = async (req, res) => {
  const user_id = req.user._id;

  try {
    const notifications = await Notification.find({ user_id })
      .sort({ created_at: -1 })
      .limit(20); // Limiting to 20 most recent notifications

    res.json(notifications);
  } catch (error) {
    console.error("Error fetching notifications:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching notifications" });
  }
};

exports.markNotificationAsRead = async (req, res) => {
  const { notification_id } = req.params;
  const user_id = req.user._id;

  try {
    // Validate notification_id
    if (!mongoose.Types.ObjectId.isValid(notification_id)) {
      return res.status(400).json({ error: "Invalid notification ID" });
    }

    const notification = await Notification.findOneAndUpdate(
      { _id: notification_id, user_id, read: false },
      { read: true },
      { new: true }
    );

    if (!notification) {
      return res.status(404).json({
        error:
          "Notification not found, already read, or you do not have permission to mark it as read",
      });
    }

    // Decrease the unread notification count for the user
    await User.findByIdAndUpdate(user_id, {
      $inc: { unreadNotificationCount: -1 },
    });

    res.json(notification);
  } catch (error) {
    console.error("Error marking notification as read:", error);
    res.status(500).json({
      error: "An error occurred while marking the notification as read",
    });
  }
};

exports.getUnreadNotificationCount = async (req, res) => {
  const user_id = req.user._id;

  try {
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ count: user.unreadNotificationCount });
  } catch (error) {
    console.error("Error fetching unread notification count:", error);
    res.status(500).json({
      error: "An error occurred while fetching the unread notification count",
    });
  }
};
exports.markAllNotificationsAsRead = async (req, res) => {
  const user_id = req.user._id;

  try {
    const result = await Notification.updateMany(
      { user_id, read: false },
      { read: true }
    );

    await User.findByIdAndUpdate(user_id, { unreadNotificationCount: 0 });

    res.json({
      message: "All notifications marked as read",
      count: result.nModified,
    });
  } catch (error) {
    console.error("Error marking all notifications as read:", error);
    res.status(500).json({
      error: "An error occurred while marking all notifications as read",
    });
  }
};

///

///////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
// ////////////////ok up okay/////////////
