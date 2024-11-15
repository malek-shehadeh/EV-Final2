// //////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import { Camera } from "lucide-react";
// import Footer from "../component/Footer/Footer";
// import Header from "../component/Header/Header";

// const ProfilePage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [imageFile, setImageFile] = useState(null);
//   const [imageUrl, setImageUrl] = useState("/api/placeholder/150/150");

//   const purchasedParts = [
//     {
//       id: 1,
//       name: "EV Battery Pack",
//       date: "2024-07-15",
//       image: "/api/placeholder/100/100",
//     },
//     {
//       id: 2,
//       name: "Electric Motor",
//       date: "2024-07-20",
//       image: "/api/placeholder/100/100",
//     },
//     {
//       id: 3,
//       name: "Charging Port",
//       date: "2024-07-25",
//       image: "/api/placeholder/100/100",
//     },
//   ];

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   const fetchProfile = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch("http://localhost:5000/api/users/profile", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json();
//       setName(data.user.username);
//       setEmail(data.user.email);
//       if (data.user.profileImage) {
//         setImageUrl(`http://localhost:5000${data.user.profileImage}`);
//       }
//     } catch (error) {
//       console.error("Error fetching profile:", error);
//     }
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImageFile(file);
//       setImageUrl(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("username", name);
//     formData.append("email", email);
//     if (password) formData.append("password", password);
//     if (imageFile) {
//       formData.append("profileImage", imageFile);
//     }

//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch("http://localhost:5000/api/users/profile", {
//         method: "PUT",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formData,
//       });
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json();
//       if (data.user.profileImage) {
//         setImageUrl(`http://localhost:5000${data.user.profileImage}`);
//       }
//       alert("Profile updated successfully!");
//     } catch (error) {
//       console.error("Error updating profile:", error);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <Header />

//       <h1 className="text-3xl font-bold mb-6 text-center">Your Profile</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white shadow rounded-lg p-6">
//           <div className="mb-6 flex justify-center">
//             <div className="relative">
//               <img
//                 src={imageUrl}
//                 alt="Profile Picture"
//                 className="w-32 h-32 rounded-full object-cover"
//               />
//               <label
//                 htmlFor="profile-picture"
//                 className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer"
//               >
//                 <Camera className="w-4 h-4 text-white" />
//                 <input
//                   type="file"
//                   id="profile-picture"
//                   className="hidden"
//                   onChange={handleImageChange}
//                   accept="image/*"
//                 />
//               </label>
//             </div>
//           </div>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Full Name"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email Address"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="New Password"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//             >
//               Update Profile
//             </button>
//           </form>
//         </div>

//         <div className="bg-white shadow rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4">Purchased Parts</h2>
//           <ul className="space-y-4">
//             {purchasedParts.map((part) => (
//               <li key={part.id} className="flex items-center space-x-4">
//                 <img
//                   src={part.image}
//                   alt={part.name}
//                   className="w-16 h-16 object-cover rounded-md"
//                 />
//                 <div>
//                   <h3 className="font-semibold">{part.name}</h3>
//                   <p className="text-sm text-gray-500">{part.date}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       <div className="mt-6 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md">
//         <p>
//           Keep your profile up to date to receive personalized recommendations
//           for electric car parts!
//         </p>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ProfilePage;
/////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import { Camera } from "lucide-react";
// import Footer from "../component/Footer/Footer";
// import Header from "../component/Header/Header";

// const ProfilePage = () => {
//   // State management
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [imageFile, setImageFile] = useState(null);
//   const [imageUrl, setImageUrl] = useState("/api/placeholder/150/150");
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [profileLoading, setProfileLoading] = useState(false);
//   const [updateSuccess, setUpdateSuccess] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetchProfile();
//     fetchOrders();
//   }, []);

//   // Fetch user profile data
//   const fetchProfile = async () => {
//     try {
//       setProfileLoading(true);
//       const token = localStorage.getItem("token");
//       const response = await fetch("http://localhost:5000/api/users/profile", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch profile");
//       }

//       const data = await response.json();
//       setName(data.user.username);
//       setEmail(data.user.email);
//       if (data.user.profileImage) {
//         setImageUrl(`http://localhost:5000${data.user.profileImage}`);
//       }
//     } catch (error) {
//       console.error("Error fetching profile:", error);
//       setError("Failed to load profile data");
//     } finally {
//       setProfileLoading(false);
//     }
//   };

//   // Fetch user orders
//   const fetchOrders = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       const token = localStorage.getItem("token");
//       if (!token) {
//         throw new Error("No authentication token found");
//       }

//       const response = await fetch("http://localhost:5000/api/users/orders", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });

//       if (!response.ok) {
//         const errorData = await response.json().catch(() => ({}));
//         throw new Error(errorData.message || "Failed to fetch orders");
//       }

//       const data = await response.json();
//       setOrders(data.orders || []);
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//       setError(error.message || "Failed to load order history");
//       setOrders([]);
//     } finally {
//       setLoading(false);
//     }
//   };
//   // Handle profile image change
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       if (file.size > 5 * 1024 * 1024) {
//         // 5MB limit
//         setError("Image size should be less than 5MB");
//         return;
//       }
//       setImageFile(file);
//       setImageUrl(URL.createObjectURL(file));
//     }
//   };

//   // Handle profile update submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setUpdateSuccess(false);

//     const formData = new FormData();
//     formData.append("username", name);
//     formData.append("email", email);
//     if (password) formData.append("password", password);
//     if (imageFile) formData.append("profileImage", imageFile);

//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch("http://localhost:5000/api/users/profile", {
//         method: "PUT",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error("Failed to update profile");
//       }

//       const data = await response.json();
//       if (data.user.profileImage) {
//         setImageUrl(`http://localhost:5000${data.user.profileImage}`);
//       }
//       setUpdateSuccess(true);
//       setPassword(""); // Clear password field after successful update
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       setError("Failed to update profile");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />

//       <main className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
//           Your Profile
//         </h1>

//         {error && (
//           <div className="mb-4 p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
//             {error}
//           </div>
//         )}

//         {updateSuccess && (
//           <div className="mb-4 p-4 bg-green-100 border-l-4 border-green-500 text-green-700">
//             Profile updated successfully!
//           </div>
//         )}

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Profile Update Form */}
//           <div className="bg-white shadow rounded-lg p-6">
//             {profileLoading ? (
//               <div className="text-center py-4">Loading profile...</div>
//             ) : (
//               <>
//                 <div className="mb-6 flex justify-center">
//                   <div className="relative">
//                     <img
//                       src={imageUrl}
//                       alt="Profile"
//                       className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
//                     />
//                     <label
//                       htmlFor="profile-picture"
//                       className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer hover:bg-blue-600 transition-colors"
//                     >
//                       <Camera className="w-4 h-4 text-white" />
//                       <input
//                         type="file"
//                         id="profile-picture"
//                         className="hidden"
//                         onChange={handleImageChange}
//                         accept="image/*"
//                       />
//                     </label>
//                   </div>
//                 </div>

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       New Password (optional)
//                     </label>
//                     <input
//                       type="password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       minLength="6"
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
//                   >
//                     Update Profile
//                   </button>
//                 </form>
//               </>
//             )}
//           </div>

//           {/* Order History */}
//           <div className="bg-white shadow rounded-lg p-6">
//             <h2 className="text-xl font-semibold mb-4">Order History</h2>

//             {loading ? (
//               <div className="text-center py-4">Loading orders...</div>
//             ) : orders.length === 0 ? (
//               <div className="text-center py-4 text-gray-500">
//                 No orders found
//               </div>
//             ) : (
//               <div className="space-y-6">
//                 {orders.map((order) => (
//                   <div
//                     key={order.id}
//                     className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
//                   >
//                     <div className="flex justify-between items-center mb-2">
//                       <div>
//                         <p className="font-semibold">
//                           Order #{order.id.slice(-6).toUpperCase()}
//                         </p>
//                         <p className="text-sm text-gray-500">
//                           {new Date(order.date).toLocaleDateString()}
//                         </p>
//                       </div>
//                       <span
//                         className={`px-3 py-1 rounded-full text-sm ${
//                           order.status === "completed"
//                             ? "bg-green-100 text-green-800"
//                             : order.status === "pending"
//                             ? "bg-yellow-100 text-yellow-800"
//                             : "bg-red-100 text-red-800"
//                         }`}
//                       >
//                         {order.status.charAt(0).toUpperCase() +
//                           order.status.slice(1)}
//                       </span>
//                     </div>

//                     <div className="space-y-3">
//                       {order.items.map((item) => (
//                         <div
//                           key={item.id}
//                           className="flex items-center space-x-4 border-t border-gray-100 pt-2"
//                         >
//                           <img
//                             src={item.image}
//                             alt={item.name}
//                             className="w-16 h-16 object-cover rounded-md"
//                           />
//                           <div className="flex-1">
//                             <h3 className="font-semibold">{item.name}</h3>
//                             <p className="text-sm text-gray-500">
//                               Qty: {item.quantity} × ${item.price}
//                             </p>
//                             <p className="text-sm text-gray-500">
//                               Seller: {item.shopOwner}
//                             </p>
//                           </div>
//                           <div className="text-right">
//                             <p className="font-semibold">
//                               ${(item.quantity * item.price).toFixed(2)}
//                             </p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>

//                     <div className="mt-3 pt-2 border-t border-gray-200">
//                       <p className="text-right font-semibold">
//                         Total: ${order.amount.toFixed(2)}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="mt-6 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md">
//           <p>
//             Keep your profile up to date to receive personalized recommendations
//             for electric car parts!
//           </p>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default ProfilePage;
////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import { Camera, ChevronLeft, ChevronRight } from "lucide-react";
// import Footer from "../component/Footer/Footer";
// import Header from "../component/Header/Header";

// const ProfilePage = () => {
//   // State management
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [imageFile, setImageFile] = useState(null);
//   const [imageUrl, setImageUrl] = useState("/api/placeholder/150/150");
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [profileLoading, setProfileLoading] = useState(false);
//   const [updateSuccess, setUpdateSuccess] = useState(false);
//   const [error, setError] = useState("");

//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const ordersPerPage = 2;
//   const indexOfLastOrder = currentPage * ordersPerPage;
//   const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
//   const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
//   const totalPages = Math.ceil(orders.length / ordersPerPage);

//   useEffect(() => {
//     fetchProfile();
//     fetchOrders();
//   }, []);

//   // Fetch user profile data
//   const fetchProfile = async () => {
//     try {
//       setProfileLoading(true);
//       const token = localStorage.getItem("token");
//       const response = await fetch("http://localhost:5000/api/users/profile", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch profile");
//       }

//       const data = await response.json();
//       setName(data.user.username);
//       setEmail(data.user.email);
//       if (data.user.profileImage) {
//         setImageUrl(`http://localhost:5000${data.user.profileImage}`);
//       }
//     } catch (error) {
//       console.error("Error fetching profile:", error);
//       setError("Failed to load profile data");
//     } finally {
//       setProfileLoading(false);
//     }
//   };

//   // Fetch user orders
//   const fetchOrders = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       const token = localStorage.getItem("token");
//       if (!token) {
//         throw new Error("No authentication token found");
//       }

//       const response = await fetch("http://localhost:5000/api/users/orders", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });

//       if (!response.ok) {
//         const errorData = await response.json().catch(() => ({}));
//         throw new Error(errorData.message || "Failed to fetch orders");
//       }

//       const data = await response.json();
//       setOrders(data.orders || []);
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//       setError(error.message || "Failed to load order history");
//       setOrders([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle profile image change
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       if (file.size > 5 * 1024 * 1024) {
//         setError("Image size should be less than 5MB");
//         return;
//       }
//       setImageFile(file);
//       setImageUrl(URL.createObjectURL(file));
//     }
//   };

//   // Handle profile update submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setUpdateSuccess(false);

//     const formData = new FormData();
//     formData.append("username", name);
//     formData.append("email", email);
//     if (password) formData.append("password", password);
//     if (imageFile) formData.append("profileImage", imageFile);

//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch("http://localhost:5000/api/users/profile", {
//         method: "PUT",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error("Failed to update profile");
//       }

//       const data = await response.json();
//       if (data.user.profileImage) {
//         setImageUrl(`http://localhost:5000${data.user.profileImage}`);
//       }
//       setUpdateSuccess(true);
//       setPassword(""); // Clear password field after successful update
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       setError("Failed to update profile");
//     }
//   };

//   // Handle pagination
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />

//       <main className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
//           Your Profile
//         </h1>

//         {/* Alert Messages */}
//         {error && (
//           <div className="mb-4 p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
//             {error}
//           </div>
//         )}

//         {updateSuccess && (
//           <div className="mb-4 p-4 bg-green-100 border-l-4 border-green-500 text-green-700">
//             Profile updated successfully!
//           </div>
//         )}

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Profile Update Form */}
//           <div className="bg-white shadow rounded-lg p-6">
//             {profileLoading ? (
//               <div className="text-center py-4">Loading profile...</div>
//             ) : (
//               <>
//                 <div className="mb-6 flex justify-center">
//                   <div className="relative">
//                     <img
//                       src={imageUrl}
//                       alt="Profile"
//                       className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
//                     />
//                     <label
//                       htmlFor="profile-picture"
//                       className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer hover:bg-blue-600 transition-colors"
//                     >
//                       <Camera className="w-4 h-4 text-white" />
//                       <input
//                         type="file"
//                         id="profile-picture"
//                         className="hidden"
//                         onChange={handleImageChange}
//                         accept="image/*"
//                       />
//                     </label>
//                   </div>
//                 </div>

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       New Password (optional)
//                     </label>
//                     <input
//                       type="password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       minLength="6"
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
//                   >
//                     Update Profile
//                   </button>
//                 </form>
//               </>
//             )}
//           </div>

//           {/* Order History */}
//           <div className="bg-white shadow rounded-lg p-6">
//             <h2 className="text-xl font-semibold mb-4">Order History</h2>

//             {loading ? (
//               <div className="text-center py-4">Loading orders...</div>
//             ) : orders.length === 0 ? (
//               <div className="text-center py-4 text-gray-500">
//                 No orders found
//               </div>
//             ) : (
//               <>
//                 <div className="space-y-6">
//                   {currentOrders.map((order) => (
//                     <div
//                       key={order.id}
//                       className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
//                     >
//                       <div className="flex justify-between items-center mb-2">
//                         <div>
//                           <p className="font-semibold">
//                             Order #{order.id.slice(-6).toUpperCase()}
//                           </p>
//                           <p className="text-sm text-gray-500">
//                             {new Date(order.date).toLocaleDateString()}
//                           </p>
//                         </div>
//                         <span
//                           className={`px-3 py-1 rounded-full text-sm ${
//                             order.status === "completed"
//                               ? "bg-green-100 text-green-800"
//                               : order.status === "pending"
//                               ? "bg-yellow-100 text-yellow-800"
//                               : "bg-red-100 text-red-800"
//                           }`}
//                         >
//                           {order.status.charAt(0).toUpperCase() +
//                             order.status.slice(1)}
//                         </span>
//                       </div>

//                       <div className="space-y-3">
//                         {order.items.map((item) => (
//                           <div
//                             key={item.id}
//                             className="flex items-center space-x-4 border-t border-gray-100 pt-2"
//                           >
//                             <img
//                               src={`http://localhost:5000${item.image}`}
//                               alt={item.name}
//                               className="w-16 h-16 object-cover rounded-md"
//                               onError={(e) => {
//                                 e.target.src = "/api/placeholder/100/100";
//                               }}
//                             />
//                             <div className="flex-1">
//                               <h3 className="font-semibold">{item.name}</h3>
//                               <p className="text-sm text-gray-500">
//                                 Qty: {item.quantity} × ${item.price}
//                               </p>
//                               <p className="text-sm text-gray-500">
//                                 Seller: {item.shopOwner}
//                               </p>
//                             </div>
//                             <div className="text-right">
//                               <p className="font-semibold">
//                                 ${(item.quantity * item.price).toFixed(2)}
//                               </p>
//                             </div>
//                           </div>
//                         ))}
//                       </div>

//                       <div className="mt-3 pt-2 border-t border-gray-200">
//                         <p className="text-right font-semibold">
//                           Total: ${order.amount.toFixed(2)}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Pagination Controls */}
//                 {totalPages > 1 && (
//                   <div className="mt-6 flex justify-center items-center space-x-4">
//                     <button
//                       onClick={() => handlePageChange(currentPage - 1)}
//                       disabled={currentPage === 1}
//                       className={`p-2 rounded-full ${
//                         currentPage === 1
//                           ? "text-gray-400 cursor-not-allowed"
//                           : "text-blue-500 hover:bg-blue-50"
//                       }`}
//                     >
//                       <ChevronLeft className="w-5 h-5" />
//                     </button>

//                     {Array.from({ length: totalPages }, (_, i) => i + 1).map(
//                       (pageNum) => (
//                         <button
//                           key={pageNum}
//                           onClick={() => handlePageChange(pageNum)}
//                           className={`w-8 h-8 rounded-full ${
//                             currentPage === pageNum
//                               ? "bg-blue-500 text-white"
//                               : "text-gray-600 hover:bg-blue-50"
//                           }`}
//                         >
//                           {pageNum}
//                         </button>
//                       )
//                     )}

//                     <button
//                       onClick={() => handlePageChange(currentPage + 1)}
//                       disabled={currentPage === totalPages}
//                       className={`p-2 rounded-full ${
//                         currentPage === totalPages
//                           ? "text-gray-400 cursor-not-allowed"
//                           : "text-blue-500 hover:bg-blue-50"
//                       }`}
//                     >
//                       <ChevronRight className="w-5 h-5" />
//                     </button>
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         </div>

//         <div className="mt-6 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md">
//           <p>
//             Keep your profile up to date to receive personalized recommendations
//             for electric car parts!
//           </p>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default ProfilePage;
// // ////////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import { Camera, ChevronLeft, ChevronRight, X } from "lucide-react";
// import Footer from "../component/Footer/Footer";
// import Header from "../component/Header/Header";

// const ProfilePage = () => {
//   // Existing state management
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [imageFile, setImageFile] = useState(null);
//   const [imageUrl, setImageUrl] = useState("/api/placeholder/150/150");
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [profileLoading, setProfileLoading] = useState(false);
//   const [updateSuccess, setUpdateSuccess] = useState(false);
//   const [error, setError] = useState("");

//   // New state for image popup
//   const [showImagePopup, setShowImagePopup] = useState(false);
//   const [currentImages, setCurrentImages] = useState([]);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [currentItems, setCurrentItems] = useState([]);

//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const ordersPerPage = 2;
//   const indexOfLastOrder = currentPage * ordersPerPage;
//   const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
//   const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
//   const totalPages = Math.ceil(orders.length / ordersPerPage);

//   useEffect(() => {
//     fetchProfile();
//     fetchOrders();
//   }, []);

//   // Existing fetch profile function
//   const fetchProfile = async () => {
//     try {
//       setProfileLoading(true);
//       const token = localStorage.getItem("token");
//       const response = await fetch("http://localhost:5000/api/users/profile", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch profile");
//       }

//       const data = await response.json();
//       setName(data.user.username);
//       setEmail(data.user.email);
//       if (data.user.profileImage) {
//         setImageUrl(`http://localhost:5000${data.user.profileImage}`);
//       }
//     } catch (error) {
//       console.error("Error fetching profile:", error);
//       setError("Failed to load profile data");
//     } finally {
//       setProfileLoading(false);
//     }
//   };

//   // Existing fetch orders function with images
//   const fetchOrders = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       const token = localStorage.getItem("token");
//       if (!token) {
//         throw new Error("No authentication token found");
//       }

//       const response = await fetch("http://localhost:5000/api/users/orders", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });

//       if (!response.ok) {
//         const errorData = await response.json().catch(() => ({}));
//         throw new Error(errorData.message || "Failed to fetch orders");
//       }

//       const data = await response.json();
//       setOrders(data.orders || []);
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//       setError(error.message || "Failed to load order history");
//       setOrders([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // New function to handle showing images
//   const handleShowImages = (order) => {
//     const itemsWithImages = order.items?.filter(
//       (item) => item.image && item.image.length > 0
//     );

//     if (itemsWithImages && itemsWithImages.length > 0) {
//       setCurrentItems(itemsWithImages);
//       setCurrentImages(itemsWithImages.map((item) => item.image));
//       setCurrentImageIndex(0);
//       setShowImagePopup(true);
//     }
//   };

//   // Existing profile image change handler
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       if (file.size > 5 * 1024 * 1024) {
//         setError("Image size should be less than 5MB");
//         return;
//       }
//       setImageFile(file);
//       setImageUrl(URL.createObjectURL(file));
//     }
//   };

//   // Existing profile update handler
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setUpdateSuccess(false);

//     const formData = new FormData();
//     formData.append("username", name);
//     formData.append("email", email);
//     if (password) formData.append("password", password);
//     if (imageFile) formData.append("profileImage", imageFile);

//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch("http://localhost:5000/api/users/profile", {
//         method: "PUT",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error("Failed to update profile");
//       }

//       const data = await response.json();
//       if (data.user.profileImage) {
//         setImageUrl(`http://localhost:5000${data.user.profileImage}`);
//       }
//       setUpdateSuccess(true);
//       setPassword("");
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       setError("Failed to update profile");
//     }
//   };

//   // Existing pagination handler
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   // New Image Popup Component
//   const ImagePopup = () => {
//     if (!showImagePopup || !currentImages.length) return null;

//     const nextSlide = (e) => {
//       e.stopPropagation();
//       setCurrentImageIndex((prev) =>
//         prev === currentImages.length - 1 ? 0 : prev + 1
//       );
//     };

//     const prevSlide = (e) => {
//       e.stopPropagation();
//       setCurrentImageIndex((prev) =>
//         prev === 0 ? currentImages.length - 1 : prev - 1
//       );
//     };

//     const currentItem = currentItems[currentImageIndex];

//     return (
//       <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center">
//         <div className="relative max-w-4xl w-full mx-4 bg-white rounded-lg overflow-hidden">
//           <button
//             onClick={() => setShowImagePopup(false)}
//             className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-50"
//           >
//             <X size={24} />
//           </button>

//           <div className="relative">
//             <img
//               src={`http://localhost:5000/${currentImages[currentImageIndex]}`}
//               alt={`Product ${currentImageIndex + 1}`}
//               className="w-full h-auto object-contain max-h-[60vh]"
//             />

//             {currentImages.length > 1 && (
//               <>
//                 <button
//                   onClick={prevSlide}
//                   className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75"
//                 >
//                   <ChevronLeft size={24} />
//                 </button>
//                 <button
//                   onClick={nextSlide}
//                   className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75"
//                 >
//                   <ChevronRight size={24} />
//                 </button>
//               </>
//             )}
//           </div>

//           <div className="p-4 bg-white">
//             <h3 className="text-lg font-semibold text-gray-900">
//               {currentItem.name}
//             </h3>
//             <p className="text-gray-600">Quantity: {currentItem.quantity}</p>
//             <p className="text-gray-600">Price: ${currentItem.price}</p>
//             <p className="text-gray-600">
//               Subtotal: ${(currentItem.quantity * currentItem.price).toFixed(2)}
//             </p>
//           </div>

//           <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
//             <div className="flex space-x-2">
//               {currentImages.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentImageIndex(index)}
//                   className={`w-2 h-2 rounded-full transition-colors ${
//                     index === currentImageIndex
//                       ? "bg-blue-600"
//                       : "bg-gray-400 hover:bg-gray-600"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />

//       <main className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
//           Your Profile
//         </h1>

//         {/* Alert Messages */}
//         {error && (
//           <div className="mb-4 p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
//             {error}
//           </div>
//         )}

//         {updateSuccess && (
//           <div className="mb-4 p-4 bg-green-100 border-l-4 border-green-500 text-green-700">
//             Profile updated successfully!
//           </div>
//         )}

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Profile Update Form */}
//           <div className="bg-white shadow rounded-lg p-6">
//             {profileLoading ? (
//               <div className="text-center py-4">Loading profile...</div>
//             ) : (
//               <>
//                 <div className="mb-6 flex justify-center">
//                   <div className="relative">
//                     <img
//                       src={imageUrl}
//                       alt="Profile"
//                       className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
//                     />
//                     <label
//                       htmlFor="profile-picture"
//                       className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer hover:bg-blue-600 transition-colors"
//                     >
//                       <Camera className="w-4 h-4 text-white" />
//                       <input
//                         type="file"
//                         id="profile-picture"
//                         className="hidden"
//                         onChange={handleImageChange}
//                         accept="image/*"
//                       />
//                     </label>
//                   </div>
//                 </div>

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       New Password (optional)
//                     </label>
//                     <input
//                       type="password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       minLength="6"
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
//                   >
//                     Update Profile
//                   </button>
//                 </form>
//               </>
//             )}
//           </div>

//           {/* Order History */}
//           <div className="bg-white shadow rounded-lg p-6">
//             <h2 className="text-xl font-semibold mb-4">Order History</h2>

//             {loading ? (
//               <div className="text-center py-4">Loading orders...</div>
//             ) : orders.length === 0 ? (
//               <div className="text-center py-4 text-gray-500">
//                 No orders found
//               </div>
//             ) : (
//               <>
//                 <div className="space-y-6">
//                   {currentOrders.map((order) => (
//                     <div
//                       key={order.id}
//                       className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
//                     >
//                       <div className="flex justify-between items-center mb-2">
//                         <div>
//                           <p className="font-semibold">
//                             Order #{order.id.slice(-6).toUpperCase()}
//                           </p>
//                           <p className="text-sm text-gray-500">
//                             {new Date(order.date).toLocaleDateString()}
//                           </p>
//                         </div>
//                         <span
//                           className={`px-3 py-1 rounded-full text-sm ${
//                             order.status === "completed"
//                               ? "bg-green-100 text-green-800"
//                               : order.status === "pending"
//                               ? "bg-yellow-100 text-yellow-800"
//                               : "bg-red-100 text-red-800"
//                           }`}
//                         >
//                           {order.status.charAt(0).toUpperCase() +
//                             order.status.slice(1)}
//                         </span>
//                       </div>

//                       <div className="space-y-3">
//                         {order.items.map((item) => (
//                           <div
//                             key={item.id}
//                             className="flex items-center space-x-4 border-t border-gray-100 pt-2"
//                           >
//                             <img
//                               src={`http://localhost:5000/${item.image}`}
//                               alt={item.name}
//                               className="w-16 h-16 object-cover rounded-md"
//                               onError={(e) => {
//                                 e.target.src = "/api/placeholder/100/100";
//                               }}
//                             />
//                             <div className="flex-1">
//                               <h3 className="font-semibold">{item.name}</h3>
//                               <p className="text-sm text-gray-500">
//                                 Qty: {item.quantity} × ${item.price}
//                               </p>
//                               <p className="text-sm text-gray-500">
//                                 Seller: {item.shopOwner}
//                               </p>
//                             </div>
//                             <div className="text-right">
//                               <p className="font-semibold">
//                                 ${(item.quantity * item.price).toFixed(2)}
//                               </p>
//                             </div>
//                           </div>
//                         ))}
//                       </div>

//                       <div className="mt-3 pt-2 border-t border-gray-200">
//                         <div className="flex justify-between items-center">
//                           <p className="text-right font-semibold">
//                             Total: ${order.amount.toFixed(2)}
//                           </p>
//                           <button
//                             onClick={() => handleShowImages(order)}
//                             className="text-blue-600 hover:text-blue-800 text-sm font-medium"
//                           >
//                             View Images (
//                             {order.items.reduce(
//                               (count, item) => count + (item.image ? 1 : 0),
//                               0
//                             )}
//                             )
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Pagination Controls */}
//                 {totalPages > 1 && (
//                   <div className="mt-6 flex justify-center items-center space-x-4">
//                     <button
//                       onClick={() => handlePageChange(currentPage - 1)}
//                       disabled={currentPage === 1}
//                       className={`p-2 rounded-full ${
//                         currentPage === 1
//                           ? "text-gray-400 cursor-not-allowed"
//                           : "text-blue-500 hover:bg-blue-50"
//                       }`}
//                     >
//                       <ChevronLeft className="w-5 h-5" />
//                     </button>

//                     {Array.from({ length: totalPages }, (_, i) => i + 1).map(
//                       (pageNum) => (
//                         <button
//                           key={pageNum}
//                           onClick={() => handlePageChange(pageNum)}
//                           className={`w-8 h-8 rounded-full ${
//                             currentPage === pageNum
//                               ? "bg-blue-500 text-white"
//                               : "text-gray-600 hover:bg-blue-50"
//                           }`}
//                         >
//                           {pageNum}
//                         </button>
//                       )
//                     )}

//                     <button
//                       onClick={() => handlePageChange(currentPage + 1)}
//                       disabled={currentPage === totalPages}
//                       className={`p-2 rounded-full ${
//                         currentPage === totalPages
//                           ? "text-gray-400 cursor-not-allowed"
//                           : "text-blue-500 hover:bg-blue-50"
//                       }`}
//                     >
//                       <ChevronRight className="w-5 h-5" />
//                     </button>
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         </div>

//         <div className="mt-6 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md">
//           <p>
//             Keep your profile up to date to receive personalized recommendations
//             for electric car parts!
//           </p>
//         </div>
//       </main>

//       <Footer />

//       {/* Image Popup Component */}
//       {showImagePopup && <ImagePopup />}
//     </div>
//   );
// };

// export default ProfilePage;
/////////////////////

// import React, { useState, useEffect } from "react";
// import { Camera, ChevronLeft, ChevronRight, X } from "lucide-react";
// import Footer from "../component/Footer/Footer";
// import Header from "../component/Header/Header";

// const ProfilePage = () => {
//   // State Management
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [imageFile, setImageFile] = useState(null);
//   const [imageUrl, setImageUrl] = useState("/api/placeholder/150/150");
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [profileLoading, setProfileLoading] = useState(false);
//   const [updateSuccess, setUpdateSuccess] = useState(false);
//   const [error, setError] = useState("");

//   // Image popup state
//   const [showImagePopup, setShowImagePopup] = useState(false);
//   const [currentImages, setCurrentImages] = useState([]);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [currentItems, setCurrentItems] = useState([]);

//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const ordersPerPage = 2;
//   const indexOfLastOrder = currentPage * ordersPerPage;
//   const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
//   const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
//   const totalPages = Math.ceil(orders.length / ordersPerPage);

//   useEffect(() => {
//     fetchProfile();
//     fetchOrders();
//   }, []);

//   const fetchProfile = async () => {
//     try {
//       setProfileLoading(true);
//       const token = localStorage.getItem("token");
//       const response = await fetch("http://localhost:5000/api/users/profile", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch profile");
//       }

//       const data = await response.json();
//       setName(data.user.username);
//       setEmail(data.user.email);
//       if (data.user.profileImage) {
//         setImageUrl(`http://localhost:5000${data.user.profileImage}`);
//       }
//     } catch (error) {
//       console.error("Error fetching profile:", error);
//       setError("Failed to load profile data");
//     } finally {
//       setProfileLoading(false);
//     }
//   };

//   const fetchOrders = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       const token = localStorage.getItem("token");
//       if (!token) {
//         throw new Error("No authentication token found");
//       }

//       const response = await fetch("http://localhost:5000/api/users/orders", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });

//       if (!response.ok) {
//         const errorData = await response.json().catch(() => ({}));
//         throw new Error(errorData.message || "Failed to fetch orders");
//       }

//       const data = await response.json();
//       setOrders(data.orders || []);
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//       setError(error.message || "Failed to load order history");
//       setOrders([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleShowImages = (order) => {
//     const itemsWithImages = order.items?.filter(
//       (item) => item.image && item.image.length > 0
//     );

//     if (itemsWithImages && itemsWithImages.length > 0) {
//       setCurrentItems(itemsWithImages);
//       setCurrentImages(itemsWithImages.map((item) => item.image));
//       setCurrentImageIndex(0);
//       setShowImagePopup(true);
//     }
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       if (file.size > 5 * 1024 * 1024) {
//         setError("Image size should be less than 5MB");
//         return;
//       }
//       setImageFile(file);
//       setImageUrl(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setUpdateSuccess(false);

//     const formData = new FormData();
//     formData.append("username", name);
//     formData.append("email", email);
//     if (password) formData.append("password", password);
//     if (imageFile) formData.append("profileImage", imageFile);

//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch("http://localhost:5000/api/users/profile", {
//         method: "PUT",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error("Failed to update profile");
//       }

//       const data = await response.json();
//       if (data.user.profileImage) {
//         setImageUrl(`http://localhost:5000${data.user.profileImage}`);
//       }
//       setUpdateSuccess(true);
//       setPassword("");
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       setError("Failed to update profile");
//     }
//   };

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const ImagePopup = () => {
//     if (!showImagePopup || !currentImages.length) return null;

//     const nextSlide = (e) => {
//       e.stopPropagation();
//       setCurrentImageIndex((prev) =>
//         prev === currentImages.length - 1 ? 0 : prev + 1
//       );
//     };

//     const prevSlide = (e) => {
//       e.stopPropagation();
//       setCurrentImageIndex((prev) =>
//         prev === 0 ? currentImages.length - 1 : prev - 1
//       );
//     };

//     const currentItem = currentItems[currentImageIndex];

//     return (
//       <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center">
//         <div className="relative max-w-4xl w-full mx-4 bg-white rounded-lg overflow-hidden">
//           <button
//             onClick={() => setShowImagePopup(false)}
//             className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-50"
//           >
//             <X size={24} />
//           </button>

//           <div className="relative">
//             <img
//               src={`http://localhost:5000/${currentImages[currentImageIndex]}`}
//               alt={`Product ${currentImageIndex + 1}`}
//               className="w-full h-auto object-contain max-h-[60vh]"
//             />

//             {currentImages.length > 1 && (
//               <>
//                 <button
//                   onClick={prevSlide}
//                   className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75"
//                 >
//                   <ChevronLeft size={24} />
//                 </button>
//                 <button
//                   onClick={nextSlide}
//                   className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75"
//                 >
//                   <ChevronRight size={24} />
//                 </button>
//               </>
//             )}
//           </div>

//           <div className="p-4 bg-white">
//             <h3 className="text-lg font-semibold text-gray-900">
//               {currentItem.name}
//             </h3>
//             <p className="text-gray-600">Quantity: {currentItem.quantity}</p>
//             <p className="text-gray-600">Price: ${currentItem.price}</p>
//             <p className="text-gray-600">
//               Subtotal: ${(currentItem.quantity * currentItem.price).toFixed(2)}
//             </p>
//           </div>

//           <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
//             <div className="flex space-x-2">
//               {currentImages.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentImageIndex(index)}
//                   className={`w-2 h-2 rounded-full transition-colors ${
//                     index === currentImageIndex
//                       ? "bg-blue-600"
//                       : "bg-gray-400 hover:bg-gray-600"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />

//       <main className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
//           Your Profile
//         </h1>

//         {/* Alert Messages */}
//         {error && (
//           <div className="mb-4 p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
//             {error}
//           </div>
//         )}

//         {updateSuccess && (
//           <div className="mb-4 p-4 bg-green-100 border-l-4 border-green-500 text-green-700">
//             Profile updated successfully!
//           </div>
//         )}

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Profile Update Form */}
//           <div className="bg-white shadow rounded-lg p-6">
//             {profileLoading ? (
//               <div className="text-center py-4">Loading profile...</div>
//             ) : (
//               <>
//                 <div className="mb-6 flex justify-center">
//                   <div className="relative">
//                     <img
//                       src={imageUrl}
//                       alt="Profile"
//                       className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
//                     />
//                     <label
//                       htmlFor="profile-picture"
//                       className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer hover:bg-blue-600 transition-colors"
//                     >
//                       <Camera className="w-4 h-4 text-white" />
//                       <input
//                         type="file"
//                         id="profile-picture"
//                         className="hidden"
//                         onChange={handleImageChange}
//                         accept="image/*"
//                       />
//                     </label>
//                   </div>
//                 </div>

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       New Password (optional)
//                     </label>
//                     <input
//                       type="password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       minLength="6"
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
//                   >
//                     Update Profile
//                   </button>
//                 </form>
//               </>
//             )}
//           </div>

//           {/* Order History */}
//           <div className="bg-white shadow rounded-lg p-6">
//             <h2 className="text-xl font-semibold mb-4">Order History</h2>

//             {loading ? (
//               <div className="text-center py-4">Loading orders...</div>
//             ) : orders.length === 0 ? (
//               <div className="text-center py-4 text-gray-500">
//                 No orders found
//               </div>
//             ) : (
//               <>
//                 <div className="space-y-6">
//                   {currentOrders.map((order) => (
//                     <div
//                       key={order.id}
//                       className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
//                     >
//                       <div className="flex justify-between items-center mb-2">
//                         <div>
//                           <p className="font-semibold">
//                             Order #{order.id.slice(-6).toUpperCase()}
//                           </p>
//                           <p className="text-sm text-gray-500">
//                             {new Date(order.date).toLocaleDateString()}
//                           </p>
//                         </div>
//                         <span
//                           className={`px-3 py-1 rounded-full text-sm ${
//                             order.status === "completed"
//                               ? "bg-green-100 text-green-800"
//                               : order.status === "pending"
//                               ? "bg-yellow-100 text-yellow-800"
//                               : "bg-red-100 text-red-800"
//                           }`}
//                         >
//                           {order.status.charAt(0).toUpperCase() +
//                             order.status.slice(1)}
//                         </span>
//                       </div>

//                       <div className="mt-3 pt-2 border-t border-gray-200">
//                         <div className="flex justify-between items-center">
//                           <p className="text-right font-semibold">
//                             Total: ${order.amount.toFixed(2)}
//                           </p>
//                           <button
//                             onClick={() => handleShowImages(order)}
//                             className="text-blue-600 hover:text-blue-800 text-sm font-medium"
//                           >
//                             View Images (
//                             {order.items.reduce(
//                               (count, item) => count + (item.image ? 1 : 0),
//                               0
//                             )}
//                             )
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Pagination Controls */}
//                 {totalPages > 1 && (
//                   <div className="mt-6 flex justify-center items-center space-x-4">
//                     <button
//                       onClick={() => handlePageChange(currentPage - 1)}
//                       disabled={currentPage === 1}
//                       className={`p-2 rounded-full ${
//                         currentPage === 1
//                           ? "text-gray-400 cursor-not-allowed"
//                           : "text-blue-500 hover:bg-blue-50"
//                       }`}
//                     >
//                       <ChevronLeft className="w-5 h-5" />
//                     </button>

//                     {Array.from({ length: totalPages }, (_, i) => i + 1).map(
//                       (pageNum) => (
//                         <button
//                           key={pageNum}
//                           onClick={() => handlePageChange(pageNum)}
//                           className={`w-8 h-8 rounded-full ${
//                             currentPage === pageNum
//                               ? "bg-blue-500 text-white"
//                               : "text-gray-600 hover:bg-blue-50"
//                           }`}
//                         >
//                           {pageNum}
//                         </button>
//                       )
//                     )}

//                     <button
//                       onClick={() => handlePageChange(currentPage + 1)}
//                       disabled={currentPage === totalPages}
//                       className={`p-2 rounded-full ${
//                         currentPage === totalPages
//                           ? "text-gray-400 cursor-not-allowed"
//                           : "text-blue-500 hover:bg-blue-50"
//                       }`}
//                     >
//                       <ChevronRight className="w-5 h-5" />
//                     </button>
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         </div>

//         <div className="mt-6 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md">
//           <p>
//             Keep your profile up to date to receive personalized recommendations
//             for electric car parts!
//           </p>
//         </div>
//       </main>

//       <Footer />

//       {/* Image Popup Component */}
//       {showImagePopup && <ImagePopup />}
//     </div>
//   );
// };

// export default ProfilePage;
////////////////

import React, { useState, useEffect } from "react";
import { Camera, ChevronLeft, ChevronRight, X } from "lucide-react";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";

const ProfilePage = () => {
  // State Management
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("/api/placeholder/150/150");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [profileLoading, setProfileLoading] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [error, setError] = useState("");

  // Image popup state
  const [showImagePopup, setShowImagePopup] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 2;
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(orders.length / ordersPerPage);

  useEffect(() => {
    fetchProfile();
    fetchOrders();
  }, []);

  const fetchProfile = async () => {
    try {
      setProfileLoading(true);
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/users/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch profile");
      }

      const data = await response.json();
      setName(data.user.username);
      setEmail(data.user.email);
      if (data.user.profileImage) {
        setImageUrl(`http://localhost:5000${data.user.profileImage}`);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
      setError("Failed to load profile data");
    } finally {
      setProfileLoading(false);
    }
  };

  const fetchOrders = async () => {
    try {
      setLoading(true);
      setError("");

      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await fetch("http://localhost:5000/api/users/orders", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to fetch orders");
      }

      const data = await response.json();
      setOrders(data.orders || []);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setError(error.message || "Failed to load order history");
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  const handleShowImages = (order) => {
    const itemsWithImages = order.items?.filter(
      (item) => item.image && item.image.length > 0
    );

    if (itemsWithImages && itemsWithImages.length > 0) {
      setCurrentItems(itemsWithImages);
      setCurrentImages(itemsWithImages.map((item) => item.image));
      setCurrentImageIndex(0);
      setShowImagePopup(true);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError("Image size should be less than 5MB");
        return;
      }
      setImageFile(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setUpdateSuccess(false);

    const formData = new FormData();
    formData.append("username", name);
    formData.append("email", email);
    if (password) formData.append("password", password);
    if (imageFile) formData.append("profileImage", imageFile);

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/users/profile", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      const data = await response.json();
      if (data.user.profileImage) {
        setImageUrl(`http://localhost:5000${data.user.profileImage}`);
      }
      setUpdateSuccess(true);
      setPassword("");
    } catch (error) {
      console.error("Error updating profile:", error);
      setError("Failed to update profile");
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const ImagePopup = () => {
    if (!showImagePopup || !currentImages.length) return null;

    const nextSlide = (e) => {
      e.stopPropagation();
      setCurrentImageIndex((prev) =>
        prev === currentImages.length - 1 ? 0 : prev + 1
      );
    };

    const prevSlide = (e) => {
      e.stopPropagation();
      setCurrentImageIndex((prev) =>
        prev === 0 ? currentImages.length - 1 : prev - 1
      );
    };

    const currentItem = currentItems[currentImageIndex];

    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center">
        <div className="relative max-w-4xl w-full mx-4 bg-white rounded-lg overflow-hidden">
          <button
            onClick={() => setShowImagePopup(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-50"
          >
            <X size={24} />
          </button>

          <div className="relative">
            <img
              src={`http://localhost:5000/${currentImages[currentImageIndex]}`}
              alt={`Product ${currentImageIndex + 1}`}
              className="w-full h-auto object-contain max-h-[60vh]"
            />

            {currentImages.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>

          <div className="p-4 bg-white">
            <h3 className="text-lg font-semibold text-gray-900">
              {currentItem.name}
            </h3>
            <p className="text-gray-600">Quantity: {currentItem.quantity}</p>
            <p className="text-gray-600">Price: ${currentItem.price}</p>
            <p className="text-gray-600">
              Subtotal: ${(currentItem.quantity * currentItem.price).toFixed(2)}
            </p>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <div className="flex space-x-2">
              {currentImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex
                      ? "bg-blue-600"
                      : "bg-gray-400 hover:bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="px-5 md:px-16 py-8">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Your Profile
          </h1>

          {/* Alert Messages */}
          {error && (
            <div className="mb-4 p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
              {error}
            </div>
          )}

          {updateSuccess && (
            <div className="mb-4 p-4 bg-green-100 border-l-4 border-green-500 text-green-700">
              Profile updated successfully!
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Profile Update Form */}
            <div className="bg-white shadow rounded-lg p-6">
              {profileLoading ? (
                <div className="text-center py-4">Loading profile...</div>
              ) : (
                <>
                  <div className="mb-6 flex justify-center">
                    <div className="relative">
                      <img
                        src={imageUrl}
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <label
                        htmlFor="profile-picture"
                        className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer hover:bg-blue-600 transition-colors"
                      >
                        <Camera className="w-4 h-4 text-white" />
                        <input
                          type="file"
                          id="profile-picture"
                          className="hidden"
                          onChange={handleImageChange}
                          accept="image/*"
                        />
                      </label>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        New Password (optional)
                      </label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        minLength="6"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                    >
                      Update Profile
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Order History */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Order History</h2>

              {loading ? (
                <div className="text-center py-4">Loading orders...</div>
              ) : orders.length === 0 ? (
                <div className="text-center py-4 text-gray-500">
                  No orders found
                </div>
              ) : (
                <>
                  <div className="space-y-6">
                    {currentOrders.map((order) => (
                      <div
                        key={order.id}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <div>
                            <p className="font-semibold">
                              Order #{order.id.slice(-6).toUpperCase()}
                            </p>
                            <p className="text-sm text-gray-500">
                              {new Date(order.date).toLocaleDateString()}
                            </p>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-sm ${
                              order.status === "completed"
                                ? "bg-green-100 text-green-800"
                                : order.status === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {order.status.charAt(0).toUpperCase() +
                              order.status.slice(1)}
                          </span>
                        </div>

                        <div className="mt-3 pt-2 border-t border-gray-200">
                          <div className="flex justify-between items-center">
                            <p className="text-right font-semibold">
                              Total: ${order.amount.toFixed(2)}
                            </p>
                            <button
                              onClick={() => handleShowImages(order)}
                              className="text-blue-600 hover:text-blue-800 text-smfont-medium"
                            >
                              View Images (
                              {order.items.reduce(
                                (count, item) => count + (item.image ? 1 : 0),
                                0
                              )}
                              )
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pagination Controls */}
                  {totalPages > 1 && (
                    <div className="mt-6 flex justify-center items-center space-x-4">
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`p-2 rounded-full ${
                          currentPage === 1
                            ? "text-gray-400 cursor-not-allowed"
                            : "text-blue-500 hover:bg-blue-50"
                        }`}
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>

                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (pageNum) => (
                          <button
                            key={pageNum}
                            onClick={() => handlePageChange(pageNum)}
                            className={`w-8 h-8 rounded-full ${
                              currentPage === pageNum
                                ? "bg-blue-500 text-white"
                                : "text-gray-600 hover:bg-blue-50"
                            }`}
                          >
                            {pageNum}
                          </button>
                        )
                      )}

                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`p-2 rounded-full ${
                          currentPage === totalPages
                            ? "text-gray-400 cursor-not-allowed"
                            : "text-blue-500 hover:bg-blue-50"
                        }`}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          <div className="mt-6 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md">
            <p>
              Keep your profile up to date to receive personalized
              recommendations for electric car parts!
            </p>
          </div>
        </div>
      </main>

      <Footer />

      {/* Image Popup Component */}
      {showImagePopup && <ImagePopup />}
    </div>
  );
};

export default ProfilePage;
