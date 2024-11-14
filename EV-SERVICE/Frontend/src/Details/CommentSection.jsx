// ////////////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaUser,
//   FaReply,
//   FaEdit,
//   FaTrash,
//   FaComments,
//   FaPaperPlane,
//   FaFlag,
// } from "react-icons/fa";

// const ReportModal = ({ isOpen, onClose, onSubmit }) => {
//   const [reason, setReason] = useState("");
//   const [description, setDescription] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ reason, description });
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.8 }}
//         className="bg-white p-6 rounded-lg shadow-xl w-96"
//       >
//         <h2 className="text-2xl font-bold mb-4 text-[#04333a]">
//           Report Comment
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label
//               htmlFor="reason"
//               className="block text-sm font-medium text-[#04333a] mb-1"
//             >
//               Reason
//             </label>
//             <select
//               id="reason"
//               value={reason}
//               onChange={(e) => setReason(e.target.value)}
//               className="w-full p-2 border border-[#e6f0f5] rounded-md focus:ring-2 focus:ring-[#04333a] focus:border-transparent"
//               required
//             >
//               <option value="">Select a reason</option>
//               <option value="spam">Spam</option>
//               <option value="harassment">Harassment</option>
//               <option value="inappropriate">Inappropriate content</option>
//               <option value="other">Other</option>
//             </select>
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="description"
//               className="block text-sm font-medium text-[#04333a] mb-1"
//             >
//               Description
//             </label>
//             <textarea
//               id="description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="w-full p-2 border border-[#e6f0f5] rounded-md focus:ring-2 focus:ring-[#04333a] focus:border-transparent"
//               rows="3"
//               required
//             ></textarea>
//           </div>
//           <div className="flex justify-end">
//             <button
//               type="button"
//               onClick={onClose}
//               className="mr-2 px-4 py-2 bg-gray-200 text-[#04333a] rounded-md hover:bg-gray-300 transition-colors duration-300"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-[#04333a] text-white rounded-md hover:bg-opacity-90 transition-colors duration-300"
//             >
//               Submit Report
//             </button>
//           </div>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// const Comment = ({
//   comment,
//   addReply,
//   updateComment,
//   deleteComment,
//   currentUserId,
//   onReport,
// }) => {
//   const [showReplyForm, setShowReplyForm] = useState(false);
//   const [replyText, setReplyText] = useState("");
//   const [isEditing, setIsEditing] = useState(false);
//   const [editText, setEditText] = useState(comment.comment_text);
//   const [isExpanded, setIsExpanded] = useState(true);
//   const [showReportModal, setShowReportModal] = useState(false);

//   const handleSubmitReply = (e) => {
//     e.preventDefault();
//     addReply(replyText, comment._id);
//     setReplyText("");
//     setShowReplyForm(false);
//   };

//   const handleSubmitEdit = (e) => {
//     e.preventDefault();
//     updateComment(comment._id, editText);
//     setIsEditing(false);
//   };

//   const handleDelete = () => {
//     deleteComment(comment._id);
//   };

//   const handleReport = (reportData) => {
//     onReport(comment._id, reportData);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       className="border-l-2 border-[#04333a] pl-4 mb-6 transition-all duration-300 ease-in-out"
//     >
//       <div className="flex items-center mb-3">
//         <img
//           src={
//             `http://localhost:5000/uploads/${comment.user_id.profileImage}` ||
//             "/default-avatar.png"
//           }
//           alt="Profile"
//           className="w-12 h-12 rounded-full border-2 border-[#04333a] transition-transform duration-300 hover:scale-110 object-cover"
//         />
//         <p className="font-semibold ml-3 text-[#04333a]">
//           {comment.user_id.username}
//         </p>
//       </div>
//       {isEditing ? (
//         <motion.form
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onSubmit={handleSubmitEdit}
//           className="mt-3"
//         >
//           <textarea
//             value={editText}
//             onChange={(e) => setEditText(e.target.value)}
//             className="w-full p-3 border-2 border-[#e6f0f5] rounded-lg focus:ring-2 focus:ring-[#04333a] focus:border-transparent transition-all duration-300 bg-white text-[#04333a]"
//             rows="3"
//           />
//           <div className="flex mt-3">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               type="submit"
//               className="px-4 py-2 bg-[#04333a] text-white rounded-full hover:bg-opacity-90 transition-colors duration-300 flex items-center"
//             >
//               <FaEdit className="mr-2" /> Save Edit
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setIsEditing(false)}
//               className="ml-3 px-4 py-2 bg-[#e6f0f5] text-[#04333a] rounded-full hover:bg-opacity-90 transition-colors duration-300 flex items-center"
//             >
//               Cancel
//             </motion.button>
//           </div>
//         </motion.form>
//       ) : (
//         <p className="text-[#04333a] bg-[#e6f0f5] p-3 rounded-lg">
//           {comment.comment_text}
//         </p>
//       )}
//       <div className="mt-3 flex items-center">
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => setShowReplyForm(!showReplyForm)}
//           className="text-[#04333a] hover:text-opacity-80 transition-colors duration-300 mr-3 flex items-center"
//         >
//           <FaReply className="mr-1" /> Reply
//         </motion.button>
//         {currentUserId === comment.user_id._id && (
//           <>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setIsEditing(true)}
//               className="text-[#04333a] hover:text-opacity-80 transition-colors duration-300 mr-3 flex items-center"
//             >
//               <FaEdit className="mr-1" /> Edit
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handleDelete}
//               className="text-red-500 hover:text-red-700 transition-colors duration-300 flex items-center mr-3"
//             >
//               <FaTrash className="mr-1" /> Delete
//             </motion.button>
//           </>
//         )}
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => setShowReportModal(true)}
//           className="text-[#04333a] hover:text-opacity-80 transition-colors duration-300 flex items-center"
//         >
//           <FaFlag className="mr-1" /> Report
//         </motion.button>
//       </div>
//       <AnimatePresence>
//         {showReplyForm && (
//           <motion.form
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             onSubmit={handleSubmitReply}
//             className="mt-3"
//           >
//             <textarea
//               value={replyText}
//               onChange={(e) => setReplyText(e.target.value)}
//               className="w-full p-3 border-2 border-[#e6f0f5] rounded-lg focus:ring-2 focus:ring-[#04333a] focus:border-transparent transition-all duration-300 bg-white text-[#04333a]"
//               rows="3"
//               placeholder="Write your reply here..."
//             />
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               type="submit"
//               className="mt-2 px-4 py-2 bg-[#04333a] text-white rounded-full hover:bg-opacity-90 transition-colors duration-300 flex items-center"
//             >
//               <FaPaperPlane className="mr-2" /> Submit Reply
//             </motion.button>
//           </motion.form>
//         )}
//       </AnimatePresence>
//       {comment.replies && comment.replies.length > 0 && (
//         <div className="mt-3">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setIsExpanded(!isExpanded)}
//             className="text-[#04333a] hover:text-opacity-80 transition-colors duration-300 flex items-center"
//           >
//             <FaComments className="mr-2" />
//             {isExpanded
//               ? "Hide Replies"
//               : `Show ${comment.replies.length} Replies`}
//           </motion.button>
//           <AnimatePresence>
//             {isExpanded && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//                 className="mt-3 pl-4 border-l-2 border-[#e6f0f5]"
//               >
//                 {comment.replies.map((reply) => (
//                   <Comment
//                     key={reply._id}
//                     comment={reply}
//                     addReply={addReply}
//                     updateComment={updateComment}
//                     deleteComment={deleteComment}
//                     currentUserId={currentUserId}
//                     onReport={onReport}
//                   />
//                 ))}
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       )}
//       <ReportModal
//         isOpen={showReportModal}
//         onClose={() => setShowReportModal(false)}
//         onSubmit={handleReport}
//       />
//     </motion.div>
//   );
// };

// // ... (rest of the CommentSection component remains unchanged)

// const CommentSection = ({ productId }) => {
//   const [comments, setComments] = useState([]);
//   const [commentText, setCommentText] = useState("");
//   const [currentUserId, setCurrentUserId] = useState(null);

//   useEffect(() => {
//     fetchComments();
//     fetchCurrentUser();
//   }, [productId]);

//   const fetchComments = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.get(
//         `http://localhost:5000/api/Comment/products/${productId}/comments`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//           withCredentials: true,
//         }
//       );

//       setComments(response.data);
//     } catch (error) {
//       console.error("Error fetching comments:", error);
//     }
//   };

//   const fetchCurrentUser = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.get("http://localhost:5000/api/users/me", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         withCredentials: true,
//       });
//       setCurrentUserId(response.data._id);
//     } catch (error) {
//       console.error("Error fetching current user:", error);
//     }
//   };

//   const handleSubmitComment = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post(
//         "http://localhost:5000/api/Comment/products/comments",
//         {
//           product_id: productId,
//           comment_text: commentText,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//           withCredentials: true,
//         }
//       );
//       setComments((prevComments) => [response.data, ...prevComments]);
//       setCommentText("");
//     } catch (error) {
//       console.error("Error adding comment:", error);
//     }
//   };

//   const addReply = async (replyText, parentCommentId) => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post(
//         "http://localhost:5000/api/Comment/products/comments",
//         {
//           product_id: productId,
//           parent_comment_id: parentCommentId,
//           comment_text: replyText,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//           withCredentials: true,
//         }
//       );

//       setComments((prevComments) => {
//         return prevComments.map((comment) => {
//           if (comment._id === parentCommentId) {
//             return {
//               ...comment,
//               replies: [...(comment.replies || []), response.data],
//             };
//           }
//           return comment;
//         });
//       });
//     } catch (error) {
//       console.error("Error adding reply:", error);
//     }
//   };

//   const updateComment = async (commentId, newText) => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.put(
//         `http://localhost:5000/api/Comment/products/comments/${commentId}`,
//         {
//           comment_text: newText,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//           withCredentials: true,
//         }
//       );

//       setComments((prevComments) => {
//         return prevComments.map((comment) => {
//           if (comment._id === commentId) {
//             return { ...comment, comment_text: newText };
//           }
//           if (comment.replies) {
//             return {
//               ...comment,
//               replies: comment.replies.map((reply) =>
//                 reply._id === commentId
//                   ? { ...reply, comment_text: newText }
//                   : reply
//               ),
//             };
//           }
//           return comment;
//         });
//       });
//     } catch (error) {
//       console.error("Error updating comment:", error);
//     }
//   };

//   const deleteComment = async (commentId) => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.delete(
//         `http://localhost:5000/api/Comment/products/comments/${commentId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//           withCredentials: true,
//         }
//       );

//       setComments((prevComments) => {
//         return prevComments.filter((comment) => {
//           if (comment._id === commentId) {
//             return false;
//           }
//           if (comment.replies) {
//             comment.replies = comment.replies.filter(
//               (reply) => reply._id !== commentId
//             );
//           }
//           return true;
//         });
//       });
//     } catch (error) {
//       console.error("Error deleting comment:", error);
//     }
//   };

//   const handleReport = async (commentId, reportData) => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.post(
//         "http://localhost:5000/api/report",
//         {
//           comment_id: commentId,
//           ...reportData,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//           withCredentials: true,
//         }
//       );
//       alert("Report submitted successfully");
//     } catch (error) {
//       console.error("Error submitting report:", error);
//       alert("Error submitting report. Please try again.");
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="mt-8 bg-white rounded-lg shadow-xl p-6 border border-[#e6f0f5]"
//     >
//       <h2 className="text-3xl font-bold mb-6 text-[#04333a] flex items-center">
//         <FaComments className="mr-3" /> Customer Reviews
//       </h2>
//       <motion.form
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         onSubmit={handleSubmitComment}
//         className="mb-8"
//       >
//         <textarea
//           value={commentText}
//           onChange={(e) => setCommentText(e.target.value)}
//           className="w-full p-4 border-2 border-[#e6f0f5] rounded-lg focus:ring-2 focus:ring-[#04333a] focus:border-transparent transition-all duration-300 bg-white text-[#04333a]"
//           rows="4"
//           placeholder="Share your thoughts about this product..."
//         />
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           type="submit"
//           className="mt-3 px-6 py-3 bg-[#04333a] text-white rounded-full hover:bg-opacity-90 transition-colors duration-300 flex items-center"
//         >
//           <FaPaperPlane className="mr-2" /> Submit Review
//         </motion.button>
//       </motion.form>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ staggerChildren: 0.1 }}
//         className="space-y-6"
//       >
//         {comments.map((comment) => (
//           <Comment
//             key={comment._id}
//             comment={comment}
//             addReply={addReply}
//             updateComment={updateComment}
//             deleteComment={deleteComment}
//             currentUserId={currentUserId}
//             onReport={handleReport}
//           />
//         ))}
//       </motion.div>
//     </motion.div>
//   );
// };

// export default CommentSection;
////////////////////////////////////////////////////////
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUser,
  FaReply,
  FaEdit,
  FaTrash,
  FaComments,
  FaPaperPlane,
  FaFlag,
} from "react-icons/fa";

const ReportModal = ({ isOpen, onClose, onSubmit }) => {
  const [reason, setReason] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ reason, description });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-white p-6 rounded-lg shadow-xl w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-[#04333a]">
          Report Comment
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="reason"
              className="block text-sm font-medium text-[#04333a] mb-1"
            >
              Reason
            </label>
            <select
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full p-2 border border-[#e6f0f5] rounded-md focus:ring-2 focus:ring-[#04333a] focus:border-transparent"
              required
            >
              <option value="">Select a reason</option>
              <option value="spam">Spam</option>
              <option value="harassment">Harassment</option>
              <option value="inappropriate">Inappropriate content</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-[#04333a] mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-[#e6f0f5] rounded-md focus:ring-2 focus:ring-[#04333a] focus:border-transparent"
              rows="3"
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 bg-gray-200 text-[#04333a] rounded-md hover:bg-gray-300 transition-colors duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#04333a] text-white rounded-md hover:bg-opacity-90 transition-colors duration-300"
            >
              Submit Report
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

const Comment = ({
  comment,
  addReply,
  updateComment,
  deleteComment,
  currentUserId,
  onReport,
}) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment.comment_text);
  const [isExpanded, setIsExpanded] = useState(true);
  const [showReportModal, setShowReportModal] = useState(false);

  const handleSubmitReply = (e) => {
    e.preventDefault();
    addReply(replyText, comment._id);
    setReplyText("");
    setShowReplyForm(false);
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    updateComment(comment._id, editText);
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteComment(comment._id);
  };

  const handleReport = (reportData) => {
    onReport(comment._id, reportData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="border-l-2 border-[#04333a] pl-4 mb-6 transition-all duration-300 ease-in-out"
    >
      <div className="flex items-center mb-3">
        <img
          src={
            `http://localhost:5000/uploads/${comment.user_id.profileImage}` ||
            "/default-avatar.png"
          }
          alt="Profile"
          className="w-12 h-12 rounded-full border-2 border-[#04333a] transition-transform duration-300 hover:scale-110 object-cover"
        />
        <p className="font-semibold ml-3 text-[#04333a]">
          {comment.user_id.username}
        </p>
      </div>
      {isEditing ? (
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmitEdit}
          className="mt-3"
        >
          <textarea
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="w-full p-3 border-2 border-[#e6f0f5] rounded-lg focus:ring-2 focus:ring-[#04333a] focus:border-transparent transition-all duration-300 bg-white text-[#04333a]"
            rows="3"
          />
          <div className="flex mt-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-4 py-2 bg-[#04333a] text-white rounded-full hover:bg-opacity-90 transition-colors duration-300 flex items-center"
            >
              <FaEdit className="mr-2" /> Save Edit
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsEditing(false)}
              className="ml-3 px-4 py-2 bg-[#e6f0f5] text-[#04333a] rounded-full hover:bg-opacity-90 transition-colors duration-300 flex items-center"
            >
              Cancel
            </motion.button>
          </div>
        </motion.form>
      ) : (
        <p className="text-[#04333a] bg-[#e6f0f5] p-3 rounded-lg">
          {comment.comment_text}
        </p>
      )}
      <div className="mt-3 flex items-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowReplyForm(!showReplyForm)}
          className="text-[#04333a] hover:text-opacity-80 transition-colors duration-300 mr-3 flex items-center"
        >
          <FaReply className="mr-1" /> Reply
        </motion.button>
        {currentUserId === comment.user_id._id ? (
          <>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsEditing(true)}
              className="text-[#04333a] hover:text-opacity-80 transition-colors duration-300 mr-3 flex items-center"
            >
              <FaEdit className="mr-1" /> Edit
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDelete}
              className="text-red-500 hover:text-red-700 transition-colors duration-300 flex items-center mr-3"
            >
              <FaTrash className="mr-1" /> Delete
            </motion.button>
          </>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowReportModal(true)}
            className="text-[#04333a] hover:text-opacity-80 transition-colors duration-300 flex items-center"
          >
            <FaFlag className="mr-1" /> Report
          </motion.button>
        )}
      </div>
      <AnimatePresence>
        {showReplyForm && (
          <motion.form
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            onSubmit={handleSubmitReply}
            className="mt-3"
          >
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              className="w-full p-3 border-2 border-[#e6f0f5] rounded-lg focus:ring-2 focus:ring-[#04333a] focus:border-transparent transition-all duration-300 bg-white text-[#04333a]"
              rows="3"
              placeholder="Write your reply here..."
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="mt-2 px-4 py-2 bg-[#04333a] text-white rounded-full hover:bg-opacity-90 transition-colors duration-300 flex items-center"
            >
              <FaPaperPlane className="mr-2" /> Submit Reply
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
      {comment.replies && comment.replies.length > 0 && (
        <div className="mt-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#04333a] hover:text-opacity-80 transition-colors duration-300 flex items-center"
          >
            <FaComments className="mr-2" />
            {isExpanded
              ? "Hide Replies"
              : `Show ${comment.replies.length} Replies`}
          </motion.button>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3 pl-4 border-l-2 border-[#e6f0f5]"
              >
                {comment.replies.map((reply) => (
                  <Comment
                    key={reply._id}
                    comment={reply}
                    addReply={addReply}
                    updateComment={updateComment}
                    deleteComment={deleteComment}
                    currentUserId={currentUserId}
                    onReport={onReport}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
      <ReportModal
        isOpen={showReportModal}
        onClose={() => setShowReportModal(false)}
        onSubmit={handleReport}
      />
    </motion.div>
  );
};

const CommentSection = ({ productId }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    fetchComments();
    fetchCurrentUser();
  }, [productId]);

  const fetchComments = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:5000/api/Comment/products/${productId}/comments`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const fetchCurrentUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:5000/api/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
      setCurrentUserId(response.data._id);
    } catch (error) {
      console.error("Error fetching current user:", error);
    }
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:5000/api/Comment/products/comments",
        {
          product_id: productId,
          comment_text: commentText,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      setComments((prevComments) => [response.data, ...prevComments]);
      setCommentText("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const addReply = async (replyText, parentCommentId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:5000/api/Comment/products/comments",
        {
          product_id: productId,
          parent_comment_id: parentCommentId,
          comment_text: replyText,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      setComments((prevComments) => {
        return prevComments.map((comment) => {
          if (comment._id === parentCommentId) {
            return {
              ...comment,
              replies: [...(comment.replies || []), response.data],
            };
          }
          return comment;
        });
      });
    } catch (error) {
      console.error("Error adding reply:", error);
    }
  };

  const updateComment = async (commentId, newText) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `http://localhost:5000/api/Comment/products/comments/${commentId}`,
        {
          comment_text: newText,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      setComments((prevComments) => {
        return prevComments.map((comment) => {
          if (comment._id === commentId) {
            return { ...comment, comment_text: newText };
          }
          if (comment.replies) {
            return {
              ...comment,
              replies: comment.replies.map((reply) =>
                reply._id === commentId
                  ? { ...reply, comment_text: newText }
                  : reply
              ),
            };
          }
          return comment;
        });
      });
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };

  const deleteComment = async (commentId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `http://localhost:5000/api/Comment/products/comments/${commentId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      setComments((prevComments) => {
        return prevComments.filter((comment) => {
          if (comment._id === commentId) {
            return false;
          }
          if (comment.replies) {
            comment.replies = comment.replies.filter(
              (reply) => reply._id !== commentId
            );
          }
          return true;
        });
      });
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const handleReport = async (commentId, reportData) => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:5000/api/report",
        {
          comment_id: commentId,
          ...reportData,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      alert("Report submitted successfully");
    } catch (error) {
      console.error("Error submitting report:", error);
      alert("Error submitting report. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 bg-white rounded-lg shadow-xl p-6 border border-[#e6f0f5]"
    >
      <h2 className="text-3xl font-bold mb-6 text-[#04333a] flex items-center">
        <FaComments className="mr-3" /> Customer Reviews
      </h2>
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onSubmit={handleSubmitComment}
        className="mb-8"
      >
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="w-full p-4 border-2 border-[#e6f0f5] rounded-lg focus:ring-2 focus:ring-[#04333a] focus:border-transparent transition-all duration-300 bg-white text-[#04333a]"
          rows="4"
          placeholder="Share your thoughts about this product..."
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="mt-3 px-6 py-3 bg-[#04333a] text-white rounded-full hover:bg-opacity-90 transition-colors duration-300 flex items-center"
        >
          <FaPaperPlane className="mr-2" /> Submit Review
        </motion.button>
      </motion.form>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
        className="space-y-6"
      >
        {comments.map((comment) => (
          <Comment
            key={comment._id}
            comment={comment}
            addReply={addReply}
            updateComment={updateComment}
            deleteComment={deleteComment}
            currentUserId={currentUserId}
            onReport={handleReport}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CommentSection;
