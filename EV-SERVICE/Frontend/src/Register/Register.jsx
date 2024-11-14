// // import React, { useState } from "react";
// // import { FaGoogle, FaGithub, FaBolt } from "react-icons/fa";
// // import { Link } from "react-router-dom";

// // const Register = () => {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (password !== confirmPassword) {
// //       alert("Passwords don't match!");
// //       return;
// //     }
// //     console.log("Registration attempted with:", { name, email, password });
// //     // Here you would typically handle the registration logic
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
// //       <div className="bg-white p-8 rounded-xl shadow-2xl flex w-full max-w-4xl pt-24">
// //         <div className="w-1/2 pr-8">
// //           <h2 className="text-3xl font-bold mb-6 text-blue-600 flex items-center">
// //             <FaBolt className="mr-2" />
// //             Join the Electric Revolution
// //           </h2>
// //           <form onSubmit={handleSubmit} className="space-y-4">
// //             <div>
// //               <label
// //                 htmlFor="name"
// //                 className="block text-sm font-medium text-gray-700"
// //               >
// //                 Full Name
// //               </label>
// //               <input
// //                 type="text"
// //                 id="name"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label
// //                 htmlFor="email"
// //                 className="block text-sm font-medium text-gray-700"
// //               >
// //                 Email
// //               </label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label
// //                 htmlFor="password"
// //                 className="block text-sm font-medium text-gray-700"
// //               >
// //                 Password
// //               </label>
// //               <input
// //                 type="password"
// //                 id="password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label
// //                 htmlFor="confirmPassword"
// //                 className="block text-sm font-medium text-gray-700"
// //               >
// //                 Confirm Password
// //               </label>
// //               <input
// //                 type="password"
// //                 id="confirmPassword"
// //                 value={confirmPassword}
// //                 onChange={(e) => setConfirmPassword(e.target.value)}
// //                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// //                 required
// //               />
// //             </div>
// //             <button
// //               type="submit"
// //               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
// //             >
// //               Sign Up
// //             </button>
// //           </form>
// //           <div className="mt-6">
// //             <div className="relative">
// //               <div className="absolute inset-0 flex items-center">
// //                 <div className="w-full border-t border-gray-300"></div>
// //               </div>
// //               <div className="relative flex justify-center text-sm">
// //                 <span className="px-2 bg-white text-gray-500">
// //                   Or register with
// //                 </span>
// //               </div>
// //             </div>
// //             <div className="mt-6 grid grid-cols-2 gap-3">
// //               <div>
// //                 <a
// //                   href="#"
// //                   className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
// //                 >
// //                   <FaGoogle className="w-5 h-5 text-red-500" />
// //                 </a>
// //               </div>
// //               <div>
// //                 <a
// //                   href="#"
// //                   className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
// //                 >
// //                   <FaGithub className="w-5 h-5 text-gray-900" />
// //                 </a>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="mt-6 text-center">
// //             <p className="text-gray-600">
// //               Already have an account?{" "}
// //               <Link to="/login" className="text-blue-600 hover:text-blue-800">
// //                 Sign in
// //               </Link>
// //             </p>
// //           </div>
// //         </div>
// //         <div className="w-1/2 pl-8 flex items-center justify-center">
// //           <img
// //             src="/public/image/Portable Charger.jpg"
// //             alt="Electric Car Accessory"
// //             className="rounded-lg shadow-lg h-screen"
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Register;
// // //////////////////
// // import React, { useState } from "react";
// // import { FaGoogle, FaGithub, FaBolt } from "react-icons/fa";
// // import { Link } from "react-router-dom";

// // const Register = () => {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (password !== confirmPassword) {
// //       alert("Passwords don't match!");
// //       return;
// //     }
// //     console.log("Registration attempted with:", { name, email, password });
// //     // Here you would typically handle the registration logic
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
// //       <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col md:flex-row w-full pt-20">
// //         <div className="w-full md:w-1/2 p-8">
// //           <h2 className="text-3xl font-bold mb-6 text-slate-800 flex items-center">
// //             <FaBolt className="mr-2" />
// //             Join the EV SERVICE
// //           </h2>
// //           <form onSubmit={handleSubmit} className="space-y-4">
// //             <div>
// //               <label
// //                 htmlFor="name"
// //                 className="block text-sm font-medium text-gray-700"
// //               >
// //                 Full Name
// //               </label>
// //               <input
// //                 type="text"
// //                 id="name"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label
// //                 htmlFor="email"
// //                 className="block text-sm font-medium text-gray-700"
// //               >
// //                 Email
// //               </label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label
// //                 htmlFor="password"
// //                 className="block text-sm font-medium text-gray-700"
// //               >
// //                 Password
// //               </label>
// //               <input
// //                 type="password"
// //                 id="password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label
// //                 htmlFor="confirmPassword"
// //                 className="block text-sm font-medium text-gray-700"
// //               >
// //                 Confirm Password
// //               </label>
// //               <input
// //                 type="password"
// //                 id="confirmPassword"
// //                 value={confirmPassword}
// //                 onChange={(e) => setConfirmPassword(e.target.value)}
// //                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// //                 required
// //               />
// //             </div>
// //             <button
// //               type="submit"
// //               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
// //             >
// //               Sign Up
// //             </button>
// //           </form>
// //           <div className="mt-6">
// //             <div className="relative">
// //               <div className="absolute inset-0 flex items-center">
// //                 <div className="w-full border-t border-gray-300"></div>
// //               </div>
// //               <div className="relative flex justify-center text-sm">
// //                 <span className="px-2 bg-white text-gray-500">
// //                   Or register with
// //                 </span>
// //               </div>
// //             </div>
// //             <div className="mt-6 grid grid-cols-2 gap-3">
// //               <div>
// //                 <a
// //                   href="#"
// //                   className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
// //                 >
// //                   <FaGoogle className="w-5 h-5 text-red-500" />
// //                 </a>
// //               </div>
// //               <div>
// //                 <a
// //                   href="#"
// //                   className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
// //                 >
// //                   <FaGithub className="w-5 h-5 text-gray-900" />
// //                 </a>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="mt-6 text-center">
// //             <p className="text-gray-600">
// //               Already have an account?{" "}
// //               <Link to="/login" className="text-blue-600 hover:text-blue-800">
// //                 Sign in
// //               </Link>
// //             </p>
// //           </div>
// //         </div>
// //         <div className="w-full md:w-1/2 flex items-center justify-center">
// //           <img
// //             src="/public/image/Portable Charger.jpg"
// //             alt="Electric Car Accessory"
// //             className="rounded-lg shadow-lg w-full h-svh mr-8 "
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Register;
// // /////////////ok top//////////////
// // import React, { useState } from "react";
// // import { FaGoogle, FaGithub, FaBolt } from "react-icons/fa";
// // import { Link } from "react-router-dom";
// // import axios from "axios"; // لإرسال الطلبات إلى السيرفر

// // const Register = () => {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (password !== confirmPassword) {
// //       alert("Passwords don't match!");
// //       return;
// //     }

// //     try {
// //       // طلب التسجيل عبر الـ backend
// //       const response = await axios.post("http://localhost:5000/api/register", {
// //         name,
// //         email,
// //         password,
// //       });
// //       console.log("Registration successful:", response.data);
// //     } catch (error) {
// //       console.error("Error during registration:", error);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
// //       <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col md:flex-row w-full pt-20">
// //         <div className="w-full md:w-1/2 p-8">
// //           <h2 className="text-3xl font-bold mb-6 text-slate-800 flex items-center">
// //             <FaBolt className="mr-2" />
// //             Join the EV SERVICE
// //           </h2>
// //           <form onSubmit={handleSubmit} className="space-y-4">
// //             <div>
// //               <label
// //                 htmlFor="name"
// //                 className="block text-sm font-medium text-gray-700"
// //               >
// //                 Full Name
// //               </label>
// //               <input
// //                 type="text"
// //                 id="name"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label
// //                 htmlFor="email"
// //                 className="block text-sm font-medium text-gray-700"
// //               >
// //                 Email
// //               </label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label
// //                 htmlFor="password"
// //                 className="block text-sm font-medium text-gray-700"
// //               >
// //                 Password
// //               </label>
// //               <input
// //                 type="password"
// //                 id="password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label
// //                 htmlFor="confirmPassword"
// //                 className="block text-sm font-medium text-gray-700"
// //               >
// //                 Confirm Password
// //               </label>
// //               <input
// //                 type="password"
// //                 id="confirmPassword"
// //                 value={confirmPassword}
// //                 onChange={(e) => setConfirmPassword(e.target.value)}
// //                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// //                 required
// //               />
// //             </div>
// //             <button
// //               type="submit"
// //               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
// //             >
// //               Sign Up
// //             </button>
// //           </form>
// //           <div className="mt-6">
// //             <div className="relative">
// //               <div className="absolute inset-0 flex items-center">
// //                 <div className="w-full border-t border-gray-300"></div>
// //               </div>
// //               <div className="relative flex justify-center text-sm">
// //                 <span className="px-2 bg-white text-gray-500">
// //                   Or register with
// //                 </span>
// //               </div>
// //             </div>
// //             <div className="mt-6 grid grid-cols-2 gap-3">
// //               <div>
// //                 <a
// //                   href="#"
// //                   className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
// //                 >
// //                   <FaGoogle className="w-5 h-5 text-red-500" />
// //                 </a>
// //               </div>
// //               <div>
// //                 <a
// //                   href="#"
// //                   className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
// //                 >
// //                   <FaGithub className="w-5 h-5 text-gray-900" />
// //                 </a>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="mt-6 text-center">
// //             <p className="text-gray-600">
// //               Already have an account?{" "}
// //               <Link to="/login" className="text-blue-600 hover:text-blue-800">
// //                 Sign in
// //               </Link>
// //             </p>
// //           </div>
// //         </div>
// //         <div className="w-full md:w-1/2 flex items-center justify-center">
// //           <img
// //             src="/public/image/Portable Charger.jpg"
// //             alt="Electric Car Accessory"
// //             className="rounded-lg shadow-lg w-full h-svh mr-8 "
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Register;
// // //////////////////////////
// // import React, { useState } from "react";
// // import { FaGoogle, FaGithub, FaBolt } from "react-icons/fa";
// // import { Link, useNavigate } from "react-router-dom";
// // import axios from "axios";

// // const Register = () => {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError(""); // Clear previous errors

// //     if (password !== confirmPassword) {
// //       setError("Passwords don't match!");
// //       return;
// //     }

// //     try {
// //       const response = await axios.post(
// //         "http://localhost:5000/api/auth/register",
// //         {
// //           username: name,
// //           email,
// //           password,
// //         },
// //         {
// //           withCredentials: true,
// //         }
// //       );
// //       console.log("Registration successful:", response.data);
// //       // Redirect to login page or dashboard after successful registration
// //       navigate("/login");
// //     } catch (error) {
// //       console.error("Error during registration:", error);
// //       setError(
// //         error.response?.data?.message || "An error occurred during registration"
// //       );
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
// //       <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col md:flex-row w-full pt-20">
// //         <div className="w-full md:w-1/2 p-8">
// //           <h2 className="text-3xl font-bold mb-6 text-slate-800 flex items-center">
// //             <FaBolt className="mr-2" />
// //             Join the EV SERVICE
// //           </h2>
// //           {error && <div className="text-red-500 mb-4">{error}</div>}
// //           <form onSubmit={handleSubmit} className="space-y-4">
// //             <div>
// //               <label
// //                 htmlFor="name"
// //                 className="block text-sm font-medium text-gray-700"
// //               >
// //                 Full Name
// //               </label>
// //               <input
// //                 type="text"
// //                 id="name"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label
// //                 htmlFor="email"
// //                 className="block text-sm font-medium text-gray-700"
// //               >
// //                 Email
// //               </label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label
// //                 htmlFor="password"
// //                 className="block text-sm font-medium text-gray-700"
// //               >
// //                 Password
// //               </label>
// //               <input
// //                 type="password"
// //                 id="password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label
// //                 htmlFor="confirmPassword"
// //                 className="block text-sm font-medium text-gray-700"
// //               >
// //                 Confirm Password
// //               </label>
// //               <input
// //                 type="password"
// //                 id="confirmPassword"
// //                 value={confirmPassword}
// //                 onChange={(e) => setConfirmPassword(e.target.value)}
// //                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// //                 required
// //               />
// //             </div>
// //             <button
// //               type="submit"
// //               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
// //             >
// //               Sign Up
// //             </button>
// //           </form>
// //           <div className="mt-6">
// //             <div className="relative">
// //               <div className="absolute inset-0 flex items-center">
// //                 <div className="w-full border-t border-gray-300"></div>
// //               </div>
// //               <div className="relative flex justify-center text-sm">
// //                 <span className="px-2 bg-white text-gray-500">
// //                   Or register with
// //                 </span>
// //               </div>
// //             </div>
// //             <div className="mt-6 grid grid-cols-2 gap-3">
// //               <div>
// //                 <a
// //                   href="#"
// //                   className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
// //                 >
// //                   <FaGoogle className="w-5 h-5 text-red-500" />
// //                 </a>
// //               </div>
// //               <div>
// //                 <a
// //                   href="#"
// //                   className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
// //                 >
// //                   <FaGithub className="w-5 h-5 text-gray-900" />
// //                 </a>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="mt-6 text-center">
// //             <p className="text-gray-600">
// //               Already have an account?{" "}
// //               <Link to="/login" className="text-blue-600 hover:text-blue-800">
// //                 Sign in
// //               </Link>
// //             </p>
// //           </div>
// //         </div>
// //         <div className="w-full md:w-1/2 flex items-center justify-center">
// //           <img
// //             src="/public/image/Portable Charger.jpg"
// //             alt="Electric Car Accessory"
// //             className="rounded-lg shadow-lg w-full h-svh mr-8 "
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Register;
// // /////////قبل التعديل كصاحب /////
// // import React, { useState } from "react";
// // import { FaGoogle, FaGithub, FaBolt } from "react-icons/fa";
// // import { Link, useNavigate } from "react-router-dom";
// // import axios from "axios";

// // const Register = () => {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError(""); // Clear previous errors

// //     if (password !== confirmPassword) {
// //       setError("Passwords don't match!");
// //       return;
// //     }

// //     try {
// //       const response = await axios.post(
// //         "http://localhost:5000/api/auth/register",
// //         {
// //           username: name,
// //           email,
// //           password,
// //           isShopOwner: false, // Default registration as a regular user
// //         },
// //         {
// //           withCredentials: true,
// //         }
// //       );
// //       console.log("Registration successful:", response.data);
// //       // Redirect to login page or dashboard after successful registration
// //       navigate("/login");
// //     } catch (error) {
// //       console.error("Error during registration:", error);
// //       setError(
// //         error.response?.data?.message || "An error occurred during registration"
// //       );
// //     }
// //   };

// //   const handleShopOwnerSignUp = () => {
// //     // Here you can add logic for shop owner registration
// //     // For now, we'll just navigate to a hypothetical shop owner registration page
// //     navigate("/shopowner");
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
// //       <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col md:flex-row w-full pt-20">
// //         <div className="w-full md:w-1/2 p-8">
// //           <h2 className="text-3xl font-bold mb-6 text-slate-800 flex items-center">
// //             <FaBolt className="mr-2" />
// //             Join the EV SERVICE
// //           </h2>
// //           {error && <div className="text-red-500 mb-4">{error}</div>}
// //           <form onSubmit={handleSubmit} className="space-y-4">
// //             <div>
// //               <label
// //                 htmlFor="name"
// //                 className="block text-sm font-medium text-gray-700"
// //               >
// //                 Full Name
// //               </label>
// //               <input
// //                 type="text"
// //                 id="name"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label
// //                 htmlFor="email"
// //                 className="block text-sm font-medium text-gray-700"
// //               >
// //                 Email
// //               </label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label
// //                 htmlFor="password"
// //                 className="block text-sm font-medium text-gray-700"
// //               >
// //                 Password
// //               </label>
// //               <input
// //                 type="password"
// //                 id="password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label
// //                 htmlFor="confirmPassword"
// //                 className="block text-sm font-medium text-gray-700"
// //               >
// //                 Confirm Password
// //               </label>
// //               <input
// //                 type="password"
// //                 id="confirmPassword"
// //                 value={confirmPassword}
// //                 onChange={(e) => setConfirmPassword(e.target.value)}
// //                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// //                 required
// //               />
// //             </div>
// //             <button
// //               type="submit"
// //               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
// //             >
// //               Sign Up
// //             </button>
// //           </form>
// //           <button
// //             onClick={handleShopOwnerSignUp}
// //             className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
// //           >
// //             Sign Up as Shop Owner
// //           </button>
// //           <div className="mt-6">
// //             <div className="relative">
// //               <div className="absolute inset-0 flex items-center">
// //                 <div className="w-full border-t border-gray-300"></div>
// //               </div>
// //               <div className="relative flex justify-center text-sm">
// //                 <span className="px-2 bg-white text-gray-500">
// //                   Or register with
// //                 </span>
// //               </div>
// //             </div>
// //             <div className="mt-6 grid grid-cols-2 gap-3">
// //               <div>
// //                 <a
// //                   href="#"
// //                   className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
// //                 >
// //                   <FaGoogle className="w-5 h-5 text-red-500" />
// //                 </a>
// //               </div>
// //               <div>
// //                 <a
// //                   href="#"
// //                   className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
// //                 >
// //                   <FaGithub className="w-5 h-5 text-gray-900" />
// //                 </a>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="mt-6 text-center">
// //             <p className="text-gray-600">
// //               Already have an account?{" "}
// //               <Link to="/login" className="text-blue-600 hover:text-blue-800">
// //                 Sign in
// //               </Link>
// //             </p>
// //           </div>
// //         </div>
// //         <div className="w-full md:w-1/2 flex items-center justify-center">
// //           <img
// //             src="/public/image/Portable Charger.jpg"
// //             alt="Electric Car Accessory"
// //             className="rounded-lg shadow-lg w-full h-svh mr-8 "
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Register;
// //////////////////////////////////
// /////////
// /////////////////////////////////
// import React, { useState, useEffect } from "react";
// import { FaGithub, FaBolt } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Cookies from "js-cookie";
// import Swal from "sweetalert2";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Load Google Sign-In API
//     const loadGoogleSignInScript = () => {
//       if (!document.getElementById("google-signin-script")) {
//         const script = document.createElement("script");
//         script.src = "https://accounts.google.com/gsi/client";
//         script.async = true;
//         script.defer = true;
//         script.id = "google-signin-script";
//         document.body.appendChild(script);
//       }
//     };

//     loadGoogleSignInScript();

//     // Attach the handleGoogleSignup function to the window object
//     window.handleGoogleSignup = async (response) => {
//       try {
//         const res = await axios.post(
//           "http://localhost:5000/api/auth/google-signup",
//           { credential: response.credential },
//           { withCredentials: true }
//         );
//         if (res.data.token) {
//           Cookies.set("token", res.data.token, { expires: 1 });
//         }

//         if (res.data.user_id) {
//           Cookies.set("user_id", res.data.user_id, { expires: 1 });
//         }

//         Swal.fire({
//           icon: "success",
//           title: "Signup Successful",
//           text: "You have successfully signed up with Google!",
//           confirmButtonText: "OK",
//         }).then(() => {
//           navigate("/");
//         });
//       } catch (error) {
//         console.error("Google signup error:", error);
//         Swal.fire({
//           icon: "error",
//           title: "Signup Error",
//           text:
//             error.response?.data?.message ||
//             "There was an error during Google signup. Please try again.",
//           confirmButtonText: "OK",
//         });
//       }
//     };
//   }, [navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); // Clear previous errors

//     if (password !== confirmPassword) {
//       setError("Passwords don't match!");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/register",
//         {
//           username: name,
//           email,
//           password,
//           isShopOwner: false, // Default registration as a regular user
//         },
//         {
//           withCredentials: true,
//         }
//       );
//       console.log("Registration successful:", response.data);
//       // Redirect to login page or dashboard after successful registration
//       navigate("/login");
//     } catch (error) {
//       console.error("Error during registration:", error);
//       setError(
//         error.response?.data?.message || "An error occurred during registration"
//       );
//     }
//   };

//   const handleShopOwnerSignUp = () => {
//     // Here you can add logic for shop owner registration
//     // For now, we'll just navigate to a hypothetical shop owner registration page
//     navigate("/shopowner");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col md:flex-row w-full pt-20">
//         <div className="w-full md:w-1/2 p-8">
//           <h2 className="text-3xl font-bold mb-6 text-slate-800 flex items-center">
//             <FaBolt className="mr-2" />
//             Join the EV SERVICE
//           </h2>
//           {error && <div className="text-red-500 mb-4">{error}</div>}
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="confirmPassword"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Confirm Password
//               </label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//               Sign Up
//             </button>
//           </form>
//           <button
//             onClick={handleShopOwnerSignUp}
//             className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//           >
//             Sign Up as Shop Owner
//           </button>
//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">
//                   Or register with
//                 </span>
//               </div>
//             </div>
//             <div className="mt-4 flex justify-center">
//               <div
//                 id="g_id_onload"
//                 data-client_id="446212780559-birkalm64aacvjjq3f4qcosuvnmgetqu.apps.googleusercontent.com"
//                 data-context="signup"
//                 data-ux_mode="popup"
//                 data-callback="handleGoogleSignup"
//                 data-auto_prompt="false"
//               ></div>
//               <div
//                 className="g_id_signin"
//                 data-type="standard"
//                 data-shape="rectangular"
//                 data-theme="outline"
//                 data-text="signup_with"
//                 data-size="large"
//                 data-logo_alignment="left"
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               ></div>
//             </div>
//             <div className="mt-4 flex justify-center">
//               <a
//                 href="#"
//                 className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
//               >
//                 <FaGithub className="w-5 h-5 text-gray-900" />
//               </a>
//             </div>
//           </div>
//           <div className="mt-6 text-center">
//             <p className="text-gray-600">
//               Already have an account?{" "}
//               <Link to="/login" className="text-blue-600 hover:text-blue-800">
//                 Sign in
//               </Link>
//             </p>
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 flex items-center justify-center">
//           <img
//             src="/public/image/Portable Charger.jpg"
//             alt="Electric Car Accessory"
//             className="rounded-lg shadow-lg w-full h-svh mr-8 "
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
/////////////////////////////////////////////////////////////////
import React, { useState, useEffect } from "react";
import { FaGithub, FaBolt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Load Google Sign-In API
    const loadGoogleSignInScript = () => {
      if (!document.getElementById("google-signin-script")) {
        const script = document.createElement("script");
        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        script.defer = true;
        script.id = "google-signin-script";
        document.body.appendChild(script);
      }
    };

    loadGoogleSignInScript();

    // Attach the handleGoogleSignup function to the window object
    window.handleGoogleSignup = async (response) => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/auth/google-signup",
          { credential: response.credential },
          { withCredentials: true }
        );
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
        }

        if (res.data.user_id) {
          localStorage.setItem("user_id", res.data.user_id);
        }

        Swal.fire({
          icon: "success",
          title: "Signup Successful",
          text: "You have successfully signed up with Google!",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/");
        });
      } catch (error) {
        console.error("Google signup error:", error);
        Swal.fire({
          icon: "error",
          title: "Signup Error",
          text:
            error.response?.data?.message ||
            "There was an error during Google signup. Please try again.",
          confirmButtonText: "OK",
        });
      }
    };
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    if (password !== confirmPassword) {
      setError("Passwords don't match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          username: name,
          email,
          password,
          isShopOwner: false, // Default registration as a regular user
        },
        {
          withCredentials: true,
        }
      );
      console.log("Registration successful:", response.data);
      // Redirect to login page or dashboard after successful registration
      navigate("/login");
    } catch (error) {
      console.error("Error during registration:", error);
      setError(
        error.response?.data?.message || "An error occurred during registration"
      );
    }
  };

  const handleShopOwnerSignUp = () => {
    // Here you can add logic for shop owner registration
    // For now, we'll just navigate to a hypothetical shop owner registration page
    navigate("/shopowner");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col md:flex-row w-full pt-20">
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-6 text-slate-800 flex items-center">
            <FaBolt className="mr-2" />
            Join the EV SERVICE
          </h2>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </form>
          <button
            onClick={handleShopOwnerSignUp}
            className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Sign Up as Shop Owner
          </button>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or register with
                </span>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <div
                id="g_id_onload"
                data-client_id="446212780559-birkalm64aacvjjq3f4qcosuvnmgetqu.apps.googleusercontent.com"
                data-context="signup"
                data-ux_mode="popup"
                data-callback="handleGoogleSignup"
                data-auto_prompt="false"
              ></div>
              <div
                className="g_id_signin"
                data-type="standard"
                data-shape="rectangular"
                data-theme="outline"
                data-text="signup_with"
                data-size="large"
                data-logo_alignment="left"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></div>
            </div>
            <div className="mt-4 flex justify-center">
              <a
                href="#"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <FaGithub className="w-5 h-5 text-gray-900" />
              </a>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:text-blue-800">
                Sign in
              </Link>
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src="/public/image/Portable Charger.jpg"
            alt="Electric Car Accessory"
            className="rounded-lg shadow-lg w-full h-svh mr-8 "
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
