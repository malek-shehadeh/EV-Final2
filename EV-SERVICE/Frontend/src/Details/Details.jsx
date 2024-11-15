// // ///////////////////////////////////
// // import React, { useState, useEffect, useRef } from "react";
// // import { useParams, useLocation } from "react-router-dom";
// // import Header from "../component/Header/Header";
// // import Footer from "../component/Footer/Footer";
// // import { ChevronUp, ChevronDown, ShoppingCart } from "lucide-react";
// // import { useCart } from "../CartContext/CartContext";
// // import CommentSection from "./CommentSection";
// // import {
// //   FaUserMd,
// //   FaEnvelope,
// //   FaCalendarAlt,
// //   FaComments,
// //   FaStethoscope,
// //   FaHospital,
// //   FaNotesMedical,
// // } from "react-icons/fa";
// // import { motion, AnimatePresence } from "framer-motion";
// // import axios from "axios";
// // import Swal from "sweetalert2";

// // const Details = () => {
// //   const { id } = useParams();
// //   const [darkMode, setDarkMode] = useState(false);
// //   const [quantity, setQuantity] = useState(1);
// //   const [product, setProduct] = useState(null);
// //   const [currentImageIndex, setCurrentImageIndex] = useState(0);
// //   const [error, setError] = useState(null);
// //   const { cartItemsCount, fetchCartItemsCount } = useCart();
// //   const [comments, setComments] = useState([]);
// //   const [notifications, setNotifications] = useState([]);
// //   const location = useLocation();
// //   const commentSectionRef = useRef(null);

// //   const toggleDarkMode = () => setDarkMode(!darkMode);

// //   useEffect(() => {
// //     fetchProductDetails();
// //     fetchComments();
// //     fetchNotifications();
// //   }, [id]);

// //   useEffect(() => {
// //     if (
// //       location.state &&
// //       location.state.commentId &&
// //       commentSectionRef.current
// //     ) {
// //       const commentElement = document.getElementById(
// //         `comment-${location.state.commentId}`
// //       );
// //       if (commentElement) {
// //         commentElement.scrollIntoView({ behavior: "smooth", block: "center" });
// //         commentElement.classList.add("highlight-comment");
// //       }
// //     }
// //   }, [location, comments]);

// //   const fetchProductDetails = async () => {
// //     try {
// //       const response = await fetch(`http://localhost:5000/api/catalog/${id}`);
// //       if (!response.ok) {
// //         throw new Error(`HTTP error! status: ${response.status}`);
// //       }
// //       const data = await response.json();
// //       setProduct(data);
// //     } catch (error) {
// //       console.error("Error fetching product details:", error);
// //       setError("Failed to load product details. Please try again later.");
// //     }
// //   };

// //   const fetchComments = async () => {
// //     try {
// //       const token = localStorage.getItem("token");
// //       const response = await axios.get(
// //         `http://localhost:5000/api/Comment/products/${id}/comments`,
// //         {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //           withCredentials: true,
// //         }
// //       );
// //       setComments(response.data);
// //     } catch (error) {
// //       console.error("Error fetching comments:", error);
// //     }
// //   };

// //   const fetchNotifications = async () => {
// //     try {
// //       const token = localStorage.getItem("token");
// //       if (!token) {
// //         console.error("No token found");
// //         return;
// //       }
// //       const response = await axios.get(
// //         "http://localhost:5000/api/notification/notifications",
// //         {
// //           headers: { Authorization: `Bearer ${token}` },
// //           withCredentials: true,
// //         }
// //       );
// //       setNotifications(response.data);
// //     } catch (error) {
// //       console.error("Error fetching notifications:", error);
// //     }
// //   };

// //   const handleQuantityChange = (change) => {
// //     setQuantity(Math.max(1, quantity + change));
// //   };

// //   const handleAddToCart = async () => {
// //     try {
// //       const token = localStorage.getItem("token");
// //       if (!token) {
// //         throw new Error("No authentication token found");
// //       }

// //       const response = await fetch("http://localhost:5000/api/cart/add", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: `Bearer ${token}`,
// //         },
// //         body: JSON.stringify({
// //           productId: product._id,
// //           quantity: quantity,
// //         }),
// //       });

// //       if (!response.ok) {
// //         throw new Error(`HTTP error! status: ${response.status}`);
// //       }

// //       const result = await response.json();
// //       console.log(`Added ${quantity} ${product.name}(s) to cart`);

// //       fetchCartItemsCount();
// //     } catch (error) {
// //       console.error("Error adding item to cart:", error);
// //       setError("Failed to add item to cart. Please try again later.");
// //     }
// //   };

// //   const handleImageChange = (direction) => {
// //     if (direction === "next") {
// //       setCurrentImageIndex(
// //         (prevIndex) => (prevIndex + 1) % product.images.length
// //       );
// //     } else {
// //       setCurrentImageIndex(
// //         (prevIndex) =>
// //           (prevIndex - 1 + product.images.length) % product.images.length
// //       );
// //     }
// //   };

// //   const addComment = async (commentText, parentCommentId = null) => {
// //     try {
// //       const response = await axios.post(
// //         "http://localhost:5000/api/products/comments",
// //         {
// //           product_id: id,
// //           parent_comment_id: parentCommentId,
// //           comment_text: commentText,
// //         },
// //         {
// //           withCredentials: true,
// //         }
// //       );
// //       fetchComments();
// //     } catch (error) {
// //       console.error("Error adding comment:", error);
// //       Swal.fire({
// //         title: "Oops!",
// //         text: "We couldn't add your comment. Please try again.",
// //         icon: "error",
// //         confirmButtonText: "OK",
// //         customClass: {
// //           popup:
// //             "bg-[#e6f0f5] rounded-lg shadow-xl border border-[#04333a] max-w-md",
// //           title: "text-[#04333a] text-xl font-bold",
// //           content: "text-[#04333a]",
// //           confirmButton:
// //             "bg-[#04333a] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all duration-300",
// //         },
// //       });
// //     }
// //   };

// //   const updateComment = async (commentId, newText) => {
// //     try {
// //       const response = await axios.put(
// //         `http://localhost:5000/api/products/comments/${commentId}`,
// //         {
// //           comment_text: newText,
// //         },
// //         {
// //           withCredentials: true,
// //         }
// //       );
// //       fetchComments();
// //     } catch (error) {
// //       console.error("Error updating comment:", error);
// //       Swal.fire({
// //         title: "Oops!",
// //         text: "We couldn't update your comment. Please try again.",
// //         icon: "error",
// //         confirmButtonText: "OK",
// //         customClass: {
// //           popup:
// //             "bg-[#e6f0f5] rounded-lg shadow-xl border border-[#04333a] max-w-md",
// //           title: "text-[#04333a] text-xl font-bold",
// //           content: "text-[#04333a]",
// //           confirmButton:
// //             "bg-[#04333a] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all duration-300",
// //         },
// //       });
// //     }
// //   };

// //   const deleteComment = async (commentId) => {
// //     try {
// //       await axios.delete(
// //         `http://localhost:5000/api/products/comments/${commentId}`,
// //         {
// //           withCredentials: true,
// //         }
// //       );
// //       fetchComments();
// //     } catch (error) {
// //       console.error("Error deleting comment:", error);
// //       Swal.fire({
// //         title: "Oops!",
// //         text: "We couldn't delete your comment. Please try again.",
// //         icon: "error",
// //         confirmButtonText: "OK",
// //         customClass: {
// //           popup:
// //             "bg-[#e6f0f5] rounded-lg shadow-xl border border-[#04333a] max-w-md",
// //           title: "text-[#04333a] text-xl font-bold",
// //           content: "text-[#04333a]",
// //           confirmButton:
// //             "bg-[#04333a] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all duration-300",
// //         },
// //       });
// //     }
// //   };

// //   const markNotificationAsRead = async (notificationId) => {
// //     try {
// //       await axios.put(
// //         `http://localhost:5000/api/notifications/${notificationId}/read`,
// //         {},
// //         { withCredentials: true }
// //       );
// //       fetchNotifications();
// //     } catch (error) {
// //       console.error("Error marking notification as read:", error);
// //     }
// //   };

// //   if (error) {
// //     return <div className="text-red-500">{error}</div>;
// //   }

// //   if (!product) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <div className={darkMode ? "dark" : ""}>
// //       <Header
// //         handleDarkMode={toggleDarkMode}
// //         darkMode={darkMode}
// //         cartItemsCount={cartItemsCount}
// //       />
// //       <div className="bg-white dark:bg-gray-900 dark:text-white pt-28 px-16">
// //         {/* Product details section */}
// //         <div className="flex flex-col lg:flex-row gap-10">
// //           {/* Image section */}
// //           <div className="lg:w-1/2">
// //             <div className="relative">
// //               <img
// //                 src={`http://localhost:5000/${product.images[currentImageIndex]}`}
// //                 alt={`${product.name} - Image ${currentImageIndex + 1}`}
// //                 className="w-full h-96 object-cover rounded-lg"
// //               />
// //               <button
// //                 onClick={() => handleImageChange("prev")}
// //                 className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full"
// //               >
// //                 &lt;
// //               </button>
// //               <button
// //                 onClick={() => handleImageChange("next")}
// //                 className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full"
// //               >
// //                 &gt;
// //               </button>
// //             </div>
// //             <div className="flex mt-4 gap-2 overflow-x-auto">
// //               {product.images.map((image, index) => (
// //                 <img
// //                   key={index}
// //                   src={`http://localhost:5000/${image}`}
// //                   alt={`${product.name} - Thumbnail ${index + 1}`}
// //                   className={`w-20 h-20 object-cover rounded-md cursor-pointer ${
// //                     index === currentImageIndex
// //                       ? "border-2 border-blue-500"
// //                       : ""
// //                   }`}
// //                   onClick={() => setCurrentImageIndex(index)}
// //                 />
// //               ))}
// //             </div>
// //           </div>
// //           {/* Product info section */}
// //           <div className="lg:w-1/2">
// //             <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
// //             <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
// //               {product.description}
// //             </p>
// //             <p className="text-2xl font-bold mb-4">${product.price}</p>
// //             <p className="text-lg mb-4">Category: {product.category}</p>
// //             <div className="flex items-center gap-4 mb-6">
// //               <button
// //                 onClick={() => handleQuantityChange(-1)}
// //                 className="bg-gray-200 p-2 rounded-full"
// //               >
// //                 <ChevronDown />
// //               </button>
// //               <span className="text-lg font-bold">{quantity}</span>
// //               <button
// //                 onClick={() => handleQuantityChange(1)}
// //                 className="bg-gray-200 p-2 rounded-full"
// //               >
// //                 <ChevronUp />
// //               </button>
// //             </div>
// //             <button
// //               onClick={handleAddToCart}
// //               className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 flex items-center gap-2"
// //             >
// //               <ShoppingCart />
// //               Add to Cart
// //             </button>
// //           </div>
// //         </div>
// //         {/* Comment section */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5, delay: 0.2 }}
// //           ref={commentSectionRef}
// //           className="mt-8 bg-white rounded-2xl shadow-2xl p-8"
// //         >
// //           <CommentSection
// //             comments={comments}
// //             addComment={addComment}
// //             updateComment={updateComment}
// //             deleteComment={deleteComment}
// //             productId={id}
// //           />
// //         </motion.div>
// //       </div>
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default Details;
// ///////////////////////////ok top ok top ////////////////////
// import React, { useState, useEffect, useRef } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import Header from "../component/Header/Header";
// import Footer from "../component/Footer/Footer";
// import { ChevronUp, ChevronDown, ShoppingCart } from "lucide-react";
// import { useCart } from "../CartContext/CartContext";
// import CommentSection from "./CommentSection";
// import {
//   FaUserMd,
//   FaEnvelope,
//   FaCalendarAlt,
//   FaComments,
//   FaStethoscope,
//   FaHospital,
//   FaNotesMedical,
// } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";
// import axios from "axios";
// import Swal from "sweetalert2";

// const Details = () => {
//   const { id } = useParams();
//   const [darkMode, setDarkMode] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [product, setProduct] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [error, setError] = useState(null);
//   const { cartItemsCount, addToCart, fetchCart } = useCart();
//   const [comments, setComments] = useState([]);
//   const [notifications, setNotifications] = useState([]);
//   const location = useLocation();
//   const commentSectionRef = useRef(null);

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   useEffect(() => {
//     fetchProductDetails();
//     fetchComments();
//     fetchNotifications();
//   }, [id]);

//   useEffect(() => {
//     if (
//       location.state &&
//       location.state.commentId &&
//       commentSectionRef.current
//     ) {
//       const commentElement = document.getElementById(
//         `comment-${location.state.commentId}`
//       );
//       if (commentElement) {
//         commentElement.scrollIntoView({ behavior: "smooth", block: "center" });
//         commentElement.classList.add("highlight-comment");
//       }
//     }
//   }, [location, comments]);

//   const fetchProductDetails = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/catalog/${id}`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       setProduct(data);
//     } catch (error) {
//       console.error("Error fetching product details:", error);
//       setError("Failed to load product details. Please try again later.");
//     }
//   };

//   const fetchComments = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.get(
//         `http://localhost:5000/api/Comment/products/${id}/comments`,
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

//   const fetchNotifications = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.error("No token found");
//         return;
//       }
//       const response = await axios.get(
//         "http://localhost:5000/api/notification/notifications",
//         {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true,
//         }
//       );
//       setNotifications(response.data);
//     } catch (error) {
//       console.error("Error fetching notifications:", error);
//     }
//   };

//   const handleQuantityChange = (change) => {
//     setQuantity(Math.max(1, quantity + change));
//   };

//   const handleAddToCart = async () => {
//     try {
//       await addToCart(product._id, quantity);
//       console.log(`Added ${quantity} ${product.name}(s) to cart`);
//       await fetchCart(); // Refresh the cart after adding an item
//     } catch (error) {
//       console.error("Error adding item to cart:", error);
//       setError("Failed to add item to cart. Please try again later.");
//     }
//   };

//   const handleImageChange = (direction) => {
//     if (direction === "next") {
//       setCurrentImageIndex(
//         (prevIndex) => (prevIndex + 1) % product.images.length
//       );
//     } else {
//       setCurrentImageIndex(
//         (prevIndex) =>
//           (prevIndex - 1 + product.images.length) % product.images.length
//       );
//     }
//   };

//   const addComment = async (commentText, parentCommentId = null) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/products/comments",
//         {
//           product_id: id,
//           parent_comment_id: parentCommentId,
//           comment_text: commentText,
//         },
//         {
//           withCredentials: true,
//         }
//       );
//       fetchComments();
//     } catch (error) {
//       console.error("Error adding comment:", error);
//       Swal.fire({
//         title: "Oops!",
//         text: "We couldn't add your comment. Please try again.",
//         icon: "error",
//         confirmButtonText: "OK",
//         customClass: {
//           popup:
//             "bg-[#e6f0f5] rounded-lg shadow-xl border border-[#04333a] max-w-md",
//           title: "text-[#04333a] text-xl font-bold",
//           content: "text-[#04333a]",
//           confirmButton:
//             "bg-[#04333a] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all duration-300",
//         },
//       });
//     }
//   };

//   const updateComment = async (commentId, newText) => {
//     try {
//       const response = await axios.put(
//         `http://localhost:5000/api/products/comments/${commentId}`,
//         {
//           comment_text: newText,
//         },
//         {
//           withCredentials: true,
//         }
//       );
//       fetchComments();
//     } catch (error) {
//       console.error("Error updating comment:", error);
//       Swal.fire({
//         title: "Oops!",
//         text: "We couldn't update your comment. Please try again.",
//         icon: "error",
//         confirmButtonText: "OK",
//         customClass: {
//           popup:
//             "bg-[#e6f0f5] rounded-lg shadow-xl border border-[#04333a] max-w-md",
//           title: "text-[#04333a] text-xl font-bold",
//           content: "text-[#04333a]",
//           confirmButton:
//             "bg-[#04333a] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all duration-300",
//         },
//       });
//     }
//   };

//   const deleteComment = async (commentId) => {
//     try {
//       await axios.delete(
//         `http://localhost:5000/api/products/comments/${commentId}`,
//         {
//           withCredentials: true,
//         }
//       );
//       fetchComments();
//     } catch (error) {
//       console.error("Error deleting comment:", error);
//       Swal.fire({
//         title: "Oops!",
//         text: "We couldn't delete your comment. Please try again.",
//         icon: "error",
//         confirmButtonText: "OK",
//         customClass: {
//           popup:
//             "bg-[#e6f0f5] rounded-lg shadow-xl border border-[#04333a] max-w-md",
//           title: "text-[#04333a] text-xl font-bold",
//           content: "text-[#04333a]",
//           confirmButton:
//             "bg-[#04333a] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all duration-300",
//         },
//       });
//     }
//   };

//   const markNotificationAsRead = async (notificationId) => {
//     try {
//       await axios.put(
//         `http://localhost:5000/api/notifications/${notificationId}/read`,
//         {},
//         { withCredentials: true }
//       );
//       fetchNotifications();
//     } catch (error) {
//       console.error("Error marking notification as read:", error);
//     }
//   };

//   if (error) {
//     return <div className="text-red-500">{error}</div>;
//   }

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       <Header
//         handleDarkMode={toggleDarkMode}
//         darkMode={darkMode}
//         cartItemsCount={cartItemsCount}
//       />
//       <div className="bg-white dark:bg-gray-900 dark:text-white pt-28 px-16">
//         {/* Product details section */}
//         <div className="flex flex-col lg:flex-row gap-10">
//           {/* Image section */}
//           <div className="lg:w-1/2">
//             <div className="relative">
//               <img
//                 src={`http://localhost:5000/${product.images[currentImageIndex]}`}
//                 alt={`${product.name} - Image ${currentImageIndex + 1}`}
//                 className="w-full h-96 object-cover rounded-lg"
//               />
//               <button
//                 onClick={() => handleImageChange("prev")}
//                 className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full"
//               >
//                 &lt;
//               </button>
//               <button
//                 onClick={() => handleImageChange("next")}
//                 className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full"
//               >
//                 &gt;
//               </button>
//             </div>
//             <div className="flex mt-4 gap-2 overflow-x-auto">
//               {product.images.map((image, index) => (
//                 <img
//                   key={index}
//                   src={`http://localhost:5000/${image}`}
//                   alt={`${product.name} - Thumbnail ${index + 1}`}
//                   className={`w-20 h-20 object-cover rounded-md cursor-pointer ${
//                     index === currentImageIndex
//                       ? "border-2 border-blue-500"
//                       : ""
//                   }`}
//                   onClick={() => setCurrentImageIndex(index)}
//                 />
//               ))}
//             </div>
//           </div>
//           {/* Product info section */}
//           <div className="lg:w-1/2">
//             <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//             <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
//               {product.description}
//             </p>
//             <p className="text-2xl font-bold mb-4">${product.price}</p>
//             <p className="text-lg mb-4">Category: {product.category}</p>
//             <div className="flex items-center gap-4 mb-6">
//               <button
//                 onClick={() => handleQuantityChange(-1)}
//                 className="bg-gray-200 p-2 rounded-full"
//               >
//                 <ChevronDown />
//               </button>
//               <span className="text-lg font-bold">{quantity}</span>
//               <button
//                 onClick={() => handleQuantityChange(1)}
//                 className="bg-gray-200 p-2 rounded-full"
//               >
//                 <ChevronUp />
//               </button>
//             </div>
//             <button
//               onClick={handleAddToCart}
//               className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 flex items-center gap-2"
//             >
//               <ShoppingCart />
//               Add to Cart
//             </button>
//           </div>
//         </div>
//         {/* Comment section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           ref={commentSectionRef}
//           className="mt-8 bg-white rounded-2xl shadow-2xl p-8"
//         >
//           <CommentSection
//             comments={comments}
//             addComment={addComment}
//             updateComment={updateComment}
//             deleteComment={deleteComment}
//             productId={id}
//           />
//         </motion.div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Details;
///////////////////////////////////////////

import React, { useState, useEffect, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import { ChevronUp, ChevronDown, ShoppingCart } from "lucide-react";
import { useCart } from "../CartContext/CartContext";
import CommentSection from "./CommentSection";
import {
  FaUserMd,
  FaEnvelope,
  FaCalendarAlt,
  FaComments,
  FaStethoscope,
  FaHospital,
  FaNotesMedical,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import Swal from "sweetalert2";

const Details = () => {
  const { id } = useParams();
  const [darkMode, setDarkMode] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [error, setError] = useState(null);
  const { cartItemsCount, addToCart, fetchCart } = useCart();
  const [comments, setComments] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const location = useLocation();
  const commentSectionRef = useRef(null);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    fetchProductDetails();
    fetchComments();
    fetchNotifications();
  }, [id]);

  useEffect(() => {
    if (
      location.state &&
      location.state.commentId &&
      commentSectionRef.current
    ) {
      const commentElement = document.getElementById(
        `comment-${location.state.commentId}`
      );
      if (commentElement) {
        commentElement.scrollIntoView({ behavior: "smooth", block: "center" });
        commentElement.classList.add("highlight-comment");
      }
    }
  }, [location, comments]);

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/catalog/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product details:", error);
      setError("Failed to load product details. Please try again later.");
    }
  };

  const fetchComments = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:5000/api/Comment/products/${id}/comments`,
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

  const fetchNotifications = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }
      const response = await axios.get(
        "http://localhost:5000/api/notification/notifications",
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );
      setNotifications(response.data);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const handleAddToCart = async () => {
    try {
      await addToCart(product._id, quantity);
      console.log(`Added ${quantity} ${product.name}(s) to cart`);
      await fetchCart();
    } catch (error) {
      console.error("Error adding item to cart:", error);
      setError("Failed to add item to cart. Please try again later.");
    }
  };

  const handleImageChange = (direction) => {
    if (direction === "next") {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % product.images.length
      );
    } else {
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex - 1 + product.images.length) % product.images.length
      );
    }
  };

  const addComment = async (commentText, parentCommentId = null) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/products/comments",
        {
          product_id: id,
          parent_comment_id: parentCommentId,
          comment_text: commentText,
        },
        {
          withCredentials: true,
        }
      );
      fetchComments();
    } catch (error) {
      console.error("Error adding comment:", error);
      Swal.fire({
        title: "Oops!",
        text: "We couldn't add your comment. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
        customClass: {
          popup:
            "bg-[#e6f0f5] rounded-lg shadow-xl border border-[#04333a] max-w-md",
          title: "text-[#04333a] text-xl font-bold",
          content: "text-[#04333a]",
          confirmButton:
            "bg-[#04333a] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all duration-300",
        },
      });
    }
  };

  const updateComment = async (commentId, newText) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/products/comments/${commentId}`,
        {
          comment_text: newText,
        },
        {
          withCredentials: true,
        }
      );
      fetchComments();
    } catch (error) {
      console.error("Error updating comment:", error);
      Swal.fire({
        title: "Oops!",
        text: "We couldn't update your comment. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
        customClass: {
          popup:
            "bg-[#e6f0f5] rounded-lg shadow-xl border border-[#04333a] max-w-md",
          title: "text-[#04333a] text-xl font-bold",
          content: "text-[#04333a]",
          confirmButton:
            "bg-[#04333a] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all duration-300",
        },
      });
    }
  };

  const deleteComment = async (commentId) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/products/comments/${commentId}`,
        {
          withCredentials: true,
        }
      );
      fetchComments();
    } catch (error) {
      console.error("Error deleting comment:", error);
      Swal.fire({
        title: "Oops!",
        text: "We couldn't delete your comment. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
        customClass: {
          popup:
            "bg-[#e6f0f5] rounded-lg shadow-xl border border-[#04333a] max-w-md",
          title: "text-[#04333a] text-xl font-bold",
          content: "text-[#04333a]",
          confirmButton:
            "bg-[#04333a] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all duration-300",
        },
      });
    }
  };

  const markNotificationAsRead = async (notificationId) => {
    try {
      await axios.put(
        `http://localhost:5000/api/notifications/${notificationId}/read`,
        {},
        { withCredentials: true }
      );
      fetchNotifications();
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header
        handleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        cartItemsCount={cartItemsCount}
      />
      <div className="bg-white dark:bg-gray-900 dark:text-white pt-28 px-5 md:px-16">
        <div className="mx-auto max-w-6xl">
          {/* Product details section */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Image section */}
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src={`http://localhost:5000/${product.images[currentImageIndex]}`}
                  alt={`${product.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-96 object-cover rounded-lg"
                />
                <button
                  onClick={() => handleImageChange("prev")}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full"
                >
                  &lt;
                </button>
                <button
                  onClick={() => handleImageChange("next")}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full"
                >
                  &gt;
                </button>
              </div>
              <div className="flex mt-4 gap-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={`http://localhost:5000/${image}`}
                    alt={`${product.name} - Thumbnail ${index + 1}`}
                    className={`w-20 h-20 object-cover rounded-md cursor-pointer ${
                      index === currentImageIndex
                        ? "border-2 border-blue-500"
                        : ""
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
            {/* Product info section */}
            <div className="lg:w-1/2">
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                {product.description}
              </p>
              <p className="text-2xl font-bold mb-4">${product.price}</p>
              <p className="text-lg mb-4">Category: {product.category}</p>
              <div className="flex items-center gap-4 mb-6">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="bg-gray-200 p-2 rounded-full"
                >
                  <ChevronDown />
                </button>
                <span className="text-lg font-bold">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="bg-gray-200 p-2 rounded-full"
                >
                  <ChevronUp />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 flex items-center gap-2"
              >
                <ShoppingCart />
                Add to Cart
              </button>
            </div>
          </div>
          {/* Comment section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            ref={commentSectionRef}
            className="mt-8 bg-white rounded-2xl shadow-2xl p-8"
          >
            <CommentSection
              comments={comments}
              addComment={addComment}
              updateComment={updateComment}
              deleteComment={deleteComment}
              productId={id}
            />
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
