// // // import React, { useState } from "react";
// // // import { FcGoogle } from "react-icons/fc";
// // // import { FaUser, FaLock } from "react-icons/fa";

// // // const LogIn = () => {
// // //   const [formData, setFormData] = useState({
// // //     usernameOrEmail: "",
// // //     password: "",
// // //   });

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData((prevData) => ({
// // //       ...prevData,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     // Handle form submission
// // //   };

// // //   return (
// // //     <div className="min-h-screen flex">
// // //       <div className="flex-1 bg-green-500 flex items-center justify-center text-white p-10">
// // //         <div>
// // //           <h2 className="text-4xl font-bold mb-2">Sign In</h2>
// // //           <p className="mb-8">
// // //             Login to ev.care to ask questions, answer people's questions, and
// // //             connect with other people.
// // //           </p>
// // //           <button className="bg-blue-600 text-white py-2 px-4 rounded-full flex items-center">
// // //             <FcGoogle size={24} className="mr-2" /> Continue with Google
// // //           </button>
// // //         </div>
// // //       </div>
// // //       <div className="flex-1 bg-gray-900 text-white p-10 flex items-center justify-center">
// // //         <form onSubmit={handleSubmit} className="w-full max-w-md">
// // //           <div className="mb-4">
// // //             <label className="block text-gray-400 text-sm mb-2">
// // //               Username or email *
// // //             </label>
// // //             <div className="flex items-center border-b border-gray-600 py-2">
// // //               <FaUser className="mr-2" />
// // //               <input
// // //                 type="text"
// // //                 name="usernameOrEmail"
// // //                 value={formData.usernameOrEmail}
// // //                 onChange={handleChange}
// // //                 className="bg-gray-900 appearance-none border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
// // //                 required
// // //               />
// // //             </div>
// // //           </div>
// // //           <div className="mb-4">
// // //             <label className="block text-gray-400 text-sm mb-2">
// // //               Password *
// // //             </label>
// // //             <div className="flex items-center border-b border-gray-600 py-2">
// // //               <FaLock className="mr-2" />
// // //               <input
// // //                 type="password"
// // //                 name="password"
// // //                 value={formData.password}
// // //                 onChange={handleChange}
// // //                 className="bg-gray-900 appearance-none border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
// // //                 required
// // //               />
// // //             </div>
// // //           </div>
// // //           <div className="mb-4 flex items-center justify-between">
// // //             <label className="inline-flex items-center text-gray-500">
// // //               <input
// // //                 type="checkbox"
// // //                 className="form-checkbox bg-gray-900 text-green-500"
// // //               />
// // //               <span className="ml-2">Remember Me!</span>
// // //             </label>
// // //             <a href="#" className="text-green-400 text-sm">
// // //               Forgot Password?
// // //             </a>
// // //           </div>
// // //           <button
// // //             type="submit"
// // //             className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
// // //           >
// // //             Login
// // //           </button>
// // //           <p className="mt-4 text-center text-gray-500">
// // //             Don't have an account?{" "}
// // //             <a href="#" className="text-green-400">
// // //               Sign Up Here
// // //             </a>
// // //           </p>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default LogIn;
// // /////////////////////////////////////////////
// // // import React, { useState } from "react";
// // // import { FaGoogle, FaGithub } from "react-icons/fa";

// // // const Login = () => {
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     console.log("Login attempted with:", { email, password });
// // //     // Here you would typically handle the login logic
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
// // //       <div className="bg-white p-8 rounded-xl shadow-2xl flex w-full max-w-4xl">
// // //         <div className="w-1/2 pr-8">
// // //           <h2 className="text-3xl font-bold mb-6 text-blue-600">
// // //             Welcome Back
// // //           </h2>
// // //           <form onSubmit={handleSubmit} className="space-y-4">
// // //             <div>
// // //               <label
// // //                 htmlFor="email"
// // //                 className="block text-sm font-medium text-gray-700"
// // //               >
// // //                 Email
// // //               </label>
// // //               <input
// // //                 type="email"
// // //                 id="email"
// // //                 value={email}
// // //                 onChange={(e) => setEmail(e.target.value)}
// // //                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// // //                 required
// // //               />
// // //             </div>
// // //             <div>
// // //               <label
// // //                 htmlFor="password"
// // //                 className="block text-sm font-medium text-gray-700"
// // //               >
// // //                 Password
// // //               </label>
// // //               <input
// // //                 type="password"
// // //                 id="password"
// // //                 value={password}
// // //                 onChange={(e) => setPassword(e.target.value)}
// // //                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// // //                 required
// // //               />
// // //             </div>
// // //             <button
// // //               type="submit"
// // //               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
// // //             >
// // //               Sign In
// // //             </button>
// // //           </form>
// // //           <div className="mt-6">
// // //             <div className="relative">
// // //               <div className="absolute inset-0 flex items-center">
// // //                 <div className="w-full border-t border-gray-300"></div>
// // //               </div>
// // //               <div className="relative flex justify-center text-sm">
// // //                 <span className="px-2 bg-white text-gray-500">
// // //                   Or continue with
// // //                 </span>
// // //               </div>
// // //             </div>
// // //             <div className="mt-6 grid grid-cols-2 gap-3">
// // //               <div>
// // //                 <a
// // //                   href="#"
// // //                   className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
// // //                 >
// // //                   <FaGoogle className="w-5 h-5 text-red-500" />
// // //                 </a>
// // //               </div>
// // //               <div>
// // //                 <a
// // //                   href="#"
// // //                   className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
// // //                 >
// // //                   <FaGithub className="w-5 h-5 text-gray-900" />
// // //                 </a>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //         <div className="w-1/2 pl-8 flex items-center justify-center">
// // //           <img
// // //             src="/api/placeholder/400/400"
// // //             alt="Electric Car Accessory"
// // //             className="rounded-lg shadow-lg"
// // //           />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Login;
// // //////////////////////
// // // import React, { useState } from "react";
// // // import { FaGoogle, FaGithub } from "react-icons/fa";
// // // import { Link } from "react-router-dom";

// // // const LogIn = () => {
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     console.log("Login attempted with:", { email, password });
// // //     // Here you would typically handle the login logic
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 flex items-center justify-center ">
// // //       <div className="bg-white p-8 rounded-xl shadow-2xl flex w-full max-w-4xl pt-20">
// // //         <div className="w-1/2 pr-8">
// // //           <h2 className="text-3xl font-bold mb-6 text-blue-600">
// // //             Welcome Back
// // //           </h2>
// // //           <form onSubmit={handleSubmit} className="space-y-4">
// // //             <div>
// // //               <label
// // //                 htmlFor="email"
// // //                 className="block text-sm font-medium text-gray-700"
// // //               >
// // //                 Email
// // //               </label>
// // //               <input
// // //                 type="email"
// // //                 id="email"
// // //                 value={email}
// // //                 onChange={(e) => setEmail(e.target.value)}
// // //                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// // //                 required
// // //               />
// // //             </div>
// // //             <div>
// // //               <label
// // //                 htmlFor="password"
// // //                 className="block text-sm font-medium text-gray-700"
// // //               >
// // //                 Password
// // //               </label>
// // //               <input
// // //                 type="password"
// // //                 id="password"
// // //                 value={password}
// // //                 onChange={(e) => setPassword(e.target.value)}
// // //                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// // //                 required
// // //               />
// // //             </div>
// // //             <button
// // //               type="submit"
// // //               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
// // //             >
// // //               Sign In
// // //             </button>
// // //           </form>
// // //           <div className="mt-6">
// // //             <div className="relative">
// // //               <div className="absolute inset-0 flex items-center">
// // //                 <div className="w-full border-t border-gray-300"></div>
// // //               </div>
// // //               <div className="relative flex justify-center text-sm">
// // //                 <span className="px-2 bg-white text-gray-500">
// // //                   Or continue with
// // //                 </span>
// // //               </div>
// // //             </div>
// // //             <div className="mt-6 grid grid-cols-2 gap-3">
// // //               <div>
// // //                 <a
// // //                   href="#"
// // //                   className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
// // //                 >
// // //                   <FaGoogle className="w-5 h-5 text-red-500" />
// // //                 </a>
// // //               </div>
// // //               <div>
// // //                 <a
// // //                   href="#"
// // //                   className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
// // //                 >
// // //                   <FaGithub className="w-5 h-5 text-gray-900" />
// // //                 </a>
// // //               </div>
// // //             </div>
// // //           </div>
// // //           <div className="mt-6 text-center">
// // //             <p className="text-gray-500">
// // //               Don't have an account?{" "}
// // //               <Link
// // //                 to="/Register"
// // //                 className="text-blue-600 hover:text-blue-800"
// // //               >
// // //                 Sign up
// // //               </Link>
// // //             </p>
// // //           </div>
// // //         </div>
// // //         <div className="w-1/2  pl-8 flex items-center justify-center">
// // //           <img
// // //             src="/public/image/Portable Charger.jpg"
// // //             alt="Electric Car Accessory"
// // //             className="rounded-lg shadow-lg h-screen "
// // //           />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default LogIn;
// // // /////////////////////////
// // // import React, { useState } from "react";
// // // import { FaGoogle, FaGithub } from "react-icons/fa";
// // // import { Link } from "react-router-dom";

// // // const LogIn = () => {
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     console.log("Login attempted with:", { email, password });
// // //     // Here you would typically handle the login logic
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
// // //       <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col md:flex-row w-full pt-20">
// // //         <div className="w-full md:w-1/2 p-8">
// // //           <h2 className="text-3xl font-bold mb-6 text-slate-800">
// // //             Welcome Back
// // //           </h2>
// // //           <form onSubmit={handleSubmit} className="space-y-4">
// // //             <div>
// // //               <label
// // //                 htmlFor="email"
// // //                 className="block text-sm font-medium text-gray-700"
// // //               >
// // //                 Email
// // //               </label>
// // //               <input
// // //                 type="email"
// // //                 id="email"
// // //                 value={email}
// // //                 onChange={(e) => setEmail(e.target.value)}
// // //                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// // //                 required
// // //               />
// // //             </div>
// // //             <div>
// // //               <label
// // //                 htmlFor="password"
// // //                 className="block text-sm font-medium text-gray-700"
// // //               >
// // //                 Password
// // //               </label>
// // //               <input
// // //                 type="password"
// // //                 id="password"
// // //                 value={password}
// // //                 onChange={(e) => setPassword(e.target.value)}
// // //                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// // //                 required
// // //               />
// // //             </div>
// // //             <button
// // //               type="submit"
// // //               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
// // //             >
// // //               Sign In
// // //             </button>
// // //           </form>
// // //           <div className="mt-6">
// // //             <div className="relative">
// // //               <div className="absolute inset-0 flex items-center">
// // //                 <div className="w-full border-t border-gray-300"></div>
// // //               </div>
// // //               <div className="relative flex justify-center text-sm">
// // //                 <span className="px-2 bg-white text-gray-500">
// // //                   Or continue with
// // //                 </span>
// // //               </div>
// // //             </div>
// // //             <div className="mt-6 grid grid-cols-2 gap-3">
// // //               <div>
// // //                 <a
// // //                   href="#"
// // //                   className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
// // //                 >
// // //                   <FaGoogle className="w-5 h-5 text-red-500" />
// // //                 </a>
// // //               </div>
// // //               <div>
// // //                 <a
// // //                   href="#"
// // //                   className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
// // //                 >
// // //                   <FaGithub className="w-5 h-5 text-gray-900" />
// // //                 </a>
// // //               </div>
// // //             </div>
// // //           </div>
// // //           <div className="mt-6 text-center">
// // //             <p className="text-gray-500">
// // //               Don't have an account?{" "}
// // //               <Link
// // //                 to="/Register"
// // //                 className="text-blue-600 hover:text-blue-800"
// // //               >
// // //                 Sign up
// // //               </Link>
// // //             </p>
// // //           </div>
// // //         </div>
// // //         <div className="w-full md:w-1/2 flex items-center justify-center p-8">
// // //           <img
// // //             src="/public/image/Portable Charger.jpg"
// // //             alt="Electric Car Accessory"
// // //             className="rounded-lg shadow-lg w-full h-96 "
// // //           />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default LogIn;
// // // ////////ok top /////////
// // // import React, { useState } from "react";
// // // import { FaGoogle, FaGithub } from "react-icons/fa";
// // // import { Link, useNavigate } from "react-router-dom";

// // // const LogIn = () => {
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [error, setError] = useState(""); // لإظهار رسالة الخطأ
// // //   const navigate = useNavigate(); // لاستخدام التوجيه

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     try {
// // //       const response = await fetch("http://localhost:5000/api/auth/login", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //         },
// // //         body: JSON.stringify({ email, password }),
// // //       });

// // //       const data = await response.json();

// // //       if (response.ok) {
// // //         console.log("Login successful:", data);
// // //         localStorage.setItem("token", data.token); // تخزين التوكن
// // //         navigate("/"); // التوجيه للـ Dashboard
// // //       } else {
// // //         setError(data.message || "Login failed, please try again."); // عرض الخطأ
// // //       }
// // //     } catch (err) {
// // //       setError("Something went wrong. Please try again later.");
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
// // //       <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col md:flex-row w-full pt-20">
// // //         <div className="w-full md:w-1/2 p-8">
// // //           <h2 className="text-3xl font-bold mb-6 text-slate-800">
// // //             Welcome Back
// // //           </h2>
// // //           {error && <div className="text-red-500 mb-4">{error}</div>}{" "}
// // //           {/* عرض الأخطاء */}
// // //           <form onSubmit={handleSubmit} className="space-y-4">
// // //             <div>
// // //               <label
// // //                 htmlFor="email"
// // //                 className="block text-sm font-medium text-gray-700"
// // //               >
// // //                 Email
// // //               </label>
// // //               <input
// // //                 type="email"
// // //                 id="email"
// // //                 value={email}
// // //                 onChange={(e) => setEmail(e.target.value)}
// // //                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// // //                 required
// // //               />
// // //             </div>
// // //             <div>
// // //               <label
// // //                 htmlFor="password"
// // //                 className="block text-sm font-medium text-gray-700"
// // //               >
// // //                 Password
// // //               </label>
// // //               <input
// // //                 type="password"
// // //                 id="password"
// // //                 value={password}
// // //                 onChange={(e) => setPassword(e.target.value)}
// // //                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// // //                 required
// // //               />
// // //             </div>
// // //             <button
// // //               type="submit"
// // //               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
// // //             >
// // //               Sign In
// // //             </button>
// // //           </form>
// // //           <div className="mt-6">
// // //             <div className="relative">
// // //               <div className="absolute inset-0 flex items-center">
// // //                 <div className="w-full border-t border-gray-300"></div>
// // //               </div>
// // //               <div className="relative flex justify-center text-sm">
// // //                 <span className="px-2 bg-white text-gray-500">
// // //                   Or continue with
// // //                 </span>
// // //               </div>
// // //             </div>
// // //             <div className="mt-6 grid grid-cols-2 gap-3">
// // //               <div>
// // //                 <a
// // //                   href="#"
// // //                   className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
// // //                 >
// // //                   <FaGoogle className="w-5 h-5 text-red-500" />
// // //                 </a>
// // //               </div>
// // //               <div>
// // //                 <a
// // //                   href="#"
// // //                   className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
// // //                 >
// // //                   <FaGithub className="w-5 h-5 text-gray-900" />
// // //                 </a>
// // //               </div>
// // //             </div>
// // //           </div>
// // //           <div className="mt-6 text-center">
// // //             <p className="text-gray-500">
// // //               Don't have an account?{" "}
// // //               <Link
// // //                 to="/Register"
// // //                 className="text-blue-600 hover:text-blue-800"
// // //               >
// // //                 Sign up
// // //               </Link>
// // //             </p>
// // //           </div>
// // //         </div>
// // //         <div className="w-full md:w-1/2 flex items-center justify-center p-8">
// // //           <img
// // //             src="/image/Portable Charger.jpg"
// // //             alt="Electric Car Accessory"
// // //             className="rounded-lg shadow-lg w-full h-96 "
// // //           />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default LogIn;
// // // /////////قبل التعديل لصاحب المحل /////
// // // import React, { useState } from "react";
// // // import { FaGoogle, FaGithub } from "react-icons/fa";
// // // import { Link, useNavigate } from "react-router-dom";

// // // const LogIn = () => {
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [error, setError] = useState("");
// // //   const navigate = useNavigate();

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     try {
// // //       const response = await fetch("http://localhost:5000/api/auth/login", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //         },
// // //         body: JSON.stringify({ email, password }),
// // //       });

// // //       const data = await response.json();

// // //       if (response.ok) {
// // //         console.log("Login successful:", data);
// // //         localStorage.setItem("token", data.token);
// // //         navigate("/");
// // //       } else {
// // //         setError(data.message || "Login failed, please try again.");
// // //       }
// // //     } catch (err) {
// // //       setError("Something went wrong. Please try again later.");
// // //     }
// // //   };

// // //   const handleShopOwnerLogin = () => {
// // //     // هنا يمكنك إضافة المنطق الخاص بتسجيل دخول صاحب المحل
// // //     console.log("Shop owner login clicked");
// // //     // يمكنك توجيه المستخدم إلى صفحة تسجيل دخول مخصصة لأصحاب المحلات
// // //     // navigate("/shop-owner-login");
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
// // //       <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col md:flex-row w-full pt-20">
// // //         <div className="w-full md:w-1/2 p-8">
// // //           <h2 className="text-3xl font-bold mb-6 text-slate-800">
// // //             Welcome Back
// // //           </h2>
// // //           {error && <div className="text-red-500 mb-4">{error}</div>}
// // //           <form onSubmit={handleSubmit} className="space-y-4">
// // //             <div>
// // //               <label
// // //                 htmlFor="email"
// // //                 className="block text-sm font-medium text-gray-700"
// // //               >
// // //                 Email
// // //               </label>
// // //               <input
// // //                 type="email"
// // //                 id="email"
// // //                 value={email}
// // //                 onChange={(e) => setEmail(e.target.value)}
// // //                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// // //                 required
// // //               />
// // //             </div>
// // //             <div>
// // //               <label
// // //                 htmlFor="password"
// // //                 className="block text-sm font-medium text-gray-700"
// // //               >
// // //                 Password
// // //               </label>
// // //               <input
// // //                 type="password"
// // //                 id="password"
// // //                 value={password}
// // //                 onChange={(e) => setPassword(e.target.value)}
// // //                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// // //                 required
// // //               />
// // //             </div>
// // //             <button
// // //               type="submit"
// // //               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
// // //             >
// // //               Sign In
// // //             </button>
// // //           </form>
// // //           <button
// // //             onClick={handleShopOwnerLogin}
// // //             className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
// // //           >
// // //             Sign In as Shop Owner
// // //           </button>
// // //           <div className="mt-6">
// // //             <div className="relative">
// // //               <div className="absolute inset-0 flex items-center">
// // //                 <div className="w-full border-t border-gray-300"></div>
// // //               </div>
// // //               <div className="relative flex justify-center text-sm">
// // //                 <span className="px-2 bg-white text-gray-500">
// // //                   Or continue with
// // //                 </span>
// // //               </div>
// // //             </div>
// // //             <div className="mt-6 grid grid-cols-2 gap-3">
// // //               <div>
// // //                 <a
// // //                   href="#"
// // //                   className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
// // //                 >
// // //                   <FaGoogle className="w-5 h-5 text-red-500" />
// // //                 </a>
// // //               </div>
// // //               <div>
// // //                 <a
// // //                   href="#"
// // //                   className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
// // //                 >
// // //                   <FaGithub className="w-5 h-5 text-gray-900" />
// // //                 </a>
// // //               </div>
// // //             </div>
// // //           </div>
// // //           <div className="mt-6 text-center">
// // //             <p className="text-gray-500">
// // //               Don't have an account?{" "}
// // //               <Link
// // //                 to="/Register"
// // //                 className="text-blue-600 hover:text-blue-800"
// // //               >
// // //                 Sign up
// // //               </Link>
// // //             </p>
// // //           </div>
// // //         </div>
// // //         <div className="w-full md:w-1/2 flex items-center justify-center p-8">
// // //           <img
// // //             src="/image/Portable Charger.jpg"
// // //             alt="Electric Car Accessory"
// // //             className="rounded-lg shadow-lg w-full h-96 "
// // //           />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default LogIn;
// // // ////////////////////ffff///////////////
// // // import React, { useState } from "react";
// // // import { FaGoogle, FaGithub } from "react-icons/fa";
// // // import { Link, useNavigate } from "react-router-dom";

// // // const LogIn = () => {
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [error, setError] = useState("");
// // //   const navigate = useNavigate();

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     try {
// // //       const response = await fetch("http://localhost:5000/api/auth/login", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //         },
// // //         body: JSON.stringify({ email, password }),
// // //       });

// // //       const data = await response.json();

// // //       if (response.ok) {
// // //         console.log("Login successful:", data);
// // //         localStorage.setItem("token", data.token);
// // //         navigate("/");
// // //       } else {
// // //         setError(data.message || "Login failed, please try again.");
// // //       }
// // //     } catch (err) {
// // //       setError("Something went wrong. Please try again later.");
// // //     }
// // //   };

// // //   const handleShopOwnerLogin = async () => {
// // //     try {
// // //       const response = await fetch(
// // //         "http://localhost:5000/api/shop-owner/login",
// // //         {
// // //           method: "POST",
// // //           headers: {
// // //             "Content-Type": "application/json",
// // //           },
// // //           body: JSON.stringify({ email, password }),
// // //         }
// // //       );

// // //       const data = await response.json();

// // //       if (response.ok) {
// // //         if (data.isApproved) {
// // //           console.log("Shop owner login successful:", data);
// // //           localStorage.setItem("shopOwnerToken", data.token);
// // //           navigate("/"); // Navigate to the home page for shop owners
// // //         } else {
// // //           setError(
// // //             "Your account is not yet approved. Please wait for admin approval."
// // //           );
// // //         }
// // //       } else {
// // //         setError(data.message || "Shop owner login failed, please try again.");
// // //       }
// // //     } catch (err) {
// // //       setError("Something went wrong. Please try again later.");
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
// // //       <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col md:flex-row w-full pt-20">
// // //         <div className="w-full md:w-1/2 p-8">
// // //           <h2 className="text-3xl font-bold mb-6 text-slate-800">
// // //             Welcome Back
// // //           </h2>
// // //           {error && <div className="text-red-500 mb-4">{error}</div>}
// // //           <form onSubmit={handleSubmit} className="space-y-4">
// // //             <div>
// // //               <label
// // //                 htmlFor="email"
// // //                 className="block text-sm font-medium text-gray-700"
// // //               >
// // //                 Email
// // //               </label>
// // //               <input
// // //                 type="email"
// // //                 id="email"
// // //                 value={email}
// // //                 onChange={(e) => setEmail(e.target.value)}
// // //                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// // //                 required
// // //               />
// // //             </div>
// // //             <div>
// // //               <label
// // //                 htmlFor="password"
// // //                 className="block text-sm font-medium text-gray-700"
// // //               >
// // //                 Password
// // //               </label>
// // //               <input
// // //                 type="password"
// // //                 id="password"
// // //                 value={password}
// // //                 onChange={(e) => setPassword(e.target.value)}
// // //                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// // //                 required
// // //               />
// // //             </div>
// // //             <button
// // //               type="submit"
// // //               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
// // //             >
// // //               Sign In
// // //             </button>
// // //           </form>
// // //           <button
// // //             onClick={handleShopOwnerLogin}
// // //             className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
// // //           >
// // //             Sign In as Shop Owner
// // //           </button>
// // //           <div className="mt-6">
// // //             <div className="relative">
// // //               <div className="absolute inset-0 flex items-center">
// // //                 <div className="w-full border-t border-gray-300"></div>
// // //               </div>
// // //               <div className="relative flex justify-center text-sm">
// // //                 <span className="px-2 bg-white text-gray-500">
// // //                   Or continue with
// // //                 </span>
// // //               </div>
// // //             </div>
// // //             <div className="mt-6 grid grid-cols-2 gap-3">
// // //               <div>
// // //                 <a
// // //                   href="#"
// // //                   className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
// // //                 >
// // //                   <FaGoogle className="w-5 h-5 text-red-500" />
// // //                 </a>
// // //               </div>
// // //               <div>
// // //                 <a
// // //                   href="#"
// // //                   className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
// // //                 >
// // //                   <FaGithub className="w-5 h-5 text-gray-900" />
// // //                 </a>
// // //               </div>
// // //             </div>
// // //           </div>
// // //           <div className="mt-6 text-center">
// // //             <p className="text-gray-500">
// // //               Don't have an account?{" "}
// // //               <Link
// // //                 to="/Register"
// // //                 className="text-blue-600 hover:text-blue-800"
// // //               >
// // //                 Sign up
// // //               </Link>
// // //             </p>
// // //           </div>
// // //         </div>
// // //         <div className="w-full md:w-1/2 flex items-center justify-center p-8">
// // //           <img
// // //             src="/image/Portable Charger.jpg"
// // //             alt="Electric Car Accessory"
// // //             className="rounded-lg shadow-lg w-full h-96 "
// // //           />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default LogIn;
// // // /////////////////
// // import React, { useState } from "react";
// // import { FaGoogle, FaGithub } from "react-icons/fa";
// // import { Link, useNavigate } from "react-router-dom";

// // const LogIn = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await fetch("http://localhost:5000/api/auth/login", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({ email, password }),
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         console.log("Login successful:", data);
// //         localStorage.setItem("token", data.token);
// //         navigate("/");
// //       } else {
// //         setError(data.message || "Login failed, please try again.");
// //       }
// //     } catch (err) {
// //       setError("Something went wrong. Please try again later.");
// //     }
// //   };

// //   const handleShopOwnerLogin = async () => {
// //     try {
// //       const response = await fetch(
// //         "http://localhost:5000/api/shop-owner/login",
// //         {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify({ email, password }),
// //         }
// //       );

// //       const data = await response.json();

// //       if (response.ok) {
// //         if (data.isApproved) {
// //           console.log("Shop owner login successful:", data);
// //           localStorage.setItem("shopOwnerToken", data.token);
// //           navigate("/dashboard"); // Navigate to the home page for shop owners
// //         } else {
// //           setError(
// //             "Your account is not yet approved. Please wait for admin approval."
// //           );
// //         }
// //       } else {
// //         setError(data.message || "Shop owner login failed, please try again.");
// //       }
// //     } catch (err) {
// //       console.error("Login error:", err);
// //       setError("Something went wrong. Please try again later.");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
// //       <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col md:flex-row w-full pt-20">
// //         <div className="w-full md:w-1/2 p-8">
// //           <h2 className="text-3xl font-bold mb-6 text-slate-800">
// //             Welcome Back
// //           </h2>
// //           {error && <div className="text-red-500 mb-4">{error}</div>}
// //           <form onSubmit={handleSubmit} className="space-y-4">
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
// //             <button
// //               type="submit"
// //               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
// //             >
// //               Sign In
// //             </button>
// //           </form>
// //           <button
// //             onClick={handleShopOwnerLogin}
// //             className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
// //           >
// //             Sign In as Shop Owner
// //           </button>
// //           <div className="mt-6">
// //             <div className="relative">
// //               <div className="absolute inset-0 flex items-center">
// //                 <div className="w-full border-t border-gray-300"></div>
// //               </div>
// //               <div className="relative flex justify-center text-sm">
// //                 <span className="px-2 bg-white text-gray-500">
// //                   Or continue with
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
// //             <p className="text-gray-500">
// //               Don't have an account?{" "}
// //               <Link
// //                 to="/Register"
// //                 className="text-blue-600 hover:text-blue-800"
// //               >
// //                 Sign up
// //               </Link>
// //             </p>
// //           </div>
// //         </div>
// //         <div className="w-full md:w-1/2 flex items-center justify-center p-8">
// //           <img
// //             src="/image/Portable Charger.jpg"
// //             alt="Electric Car Accessory"
// //             className="rounded-lg shadow-lg w-full h-96 "
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LogIn;
// ////////////////////////////////////////////

// // import React, { useState } from "react";
// // import { FaGoogle, FaGithub } from "react-icons/fa";
// // import { Link, useNavigate } from "react-router-dom";

// // const LogIn = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await fetch("http://localhost:5000/api/auth/login", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({ email, password }),
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         if (data.isApproved) {
// //           console.log("Login successful:", data);
// //           localStorage.setItem("token", data.token);
// //           navigate("/");
// //         } else {
// //           setError("Your account is not approved. Please contact support.");
// //         }
// //       } else {
// //         setError(data.message || "Login failed, please try again.");
// //       }
// //     } catch (err) {
// //       setError("Something went wrong. Please try again later.");
// //     }
// //   };

// //   const handleShopOwnerLogin = async () => {
// //     try {
// //       const response = await fetch(
// //         "http://localhost:5000/api/shop-owner/login",
// //         {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify({ email, password }),
// //         }
// //       );

// //       const data = await response.json();

// //       if (response.ok) {
// //         if (data.isApproved) {
// //           console.log("Shop owner login successful:", data);
// //           localStorage.setItem("shopOwnerToken", data.token);
// //           navigate("/dashboard"); // Navigate to the home page for shop owners
// //         } else {
// //           setError(
// //             "Your account is not yet approved. Please wait for admin approval."
// //           );
// //         }
// //       } else {
// //         setError(data.message || "Shop owner login failed, please try again.");
// //       }
// //     } catch (err) {
// //       console.error("Login error:", err);
// //       setError("Something went wrong. Please try again later.");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
// //       <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col md:flex-row w-full pt-20">
// //         <div className="w-full md:w-1/2 p-8">
// //           <h2 className="text-3xl font-bold mb-6 text-slate-800">
// //             Welcome Back
// //           </h2>
// //           {error && <div className="text-red-500 mb-4">{error}</div>}
// //           <form onSubmit={handleSubmit} className="space-y-4">
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
// //             <button
// //               type="submit"
// //               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
// //             >
// //               Sign In
// //             </button>
// //           </form>
// //           <button
// //             onClick={handleShopOwnerLogin}
// //             className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
// //           >
// //             Sign In as Shop Owner
// //           </button>
// //           <div className="mt-6">
// //             <div className="relative">
// //               <div className="absolute inset-0 flex items-center">
// //                 <div className="w-full border-t border-gray-300"></div>
// //               </div>
// //               <div className="relative flex justify-center text-sm">
// //                 <span className="px-2 bg-white text-gray-500">
// //                   Or continue with
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
// //             <p className="text-gray-500">
// //               Don't have an account?{" "}
// //               <Link
// //                 to="/Register"
// //                 className="text-blue-600 hover:text-blue-800"
// //               >
// //                 Sign up
// //               </Link>
// //             </p>
// //           </div>
// //         </div>
// //         <div className="w-full md:w-1/2 flex items-center justify-center p-8">
// //           <img
// //             src="/image/Portable Charger.jpg"
// //             alt="Electric Car Accessory"
// //             className="rounded-lg shadow-lg w-full h-96 "
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LogIn;
// /////////////////////////
// /////////////////////////////////////////////////////////
// // ///////////////////////
// // import React, { useState } from "react";
// // import { FaGoogle, FaGithub } from "react-icons/fa";
// // import { Link, useNavigate } from "react-router-dom";
// // import axios from "axios";

// // const LogIn = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await axios.post(
// //         "http://localhost:5000/api/auth/login",
// //         {
// //           email,
// //           password,
// //         }
// //       );

// //       const data = response.data;

// //       if (data.isApproved) {
// //         console.log("Login successful:", data);
// //         localStorage.setItem("token", data.token);
// //         navigate("/");
// //       } else {
// //         setError("Your account is not approved. Please contact support.");
// //       }
// //     } catch (err) {
// //       setError(
// //         err.response?.data?.message || "Login failed, please try again."
// //       );
// //     }
// //   };

// //   const handleShopOwnerLogin = async () => {
// //     try {
// //       const response = await axios.post(
// //         "http://localhost:5000/api/shop-owner/login",
// //         {
// //           email,
// //           password,
// //         }
// //       );

// //       const data = response.data;

// //       if (data.token) {
// //         console.log("Shop owner login successful:", data);
// //         localStorage.setItem("shopOwnerToken", data.token);
// //         localStorage.setItem("shopOwnerInfo", JSON.stringify(data.shopOwner));
// //         navigate("/dashboard");
// //       } else {
// //         setError(
// //           "Your account is not yet approved. Please wait for admin approval."
// //         );
// //       }
// //     } catch (err) {
// //       console.error("Login error:", err);
// //       setError(
// //         err.response?.data?.message ||
// //           "Shop owner login failed, please try again."
// //       );
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
// //       <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col md:flex-row w-full pt-20">
// //         <div className="w-full md:w-1/2 p-8">
// //           <h2 className="text-3xl font-bold mb-6 text-slate-800">
// //             Welcome Back
// //           </h2>
// //           {error && <div className="text-red-500 mb-4">{error}</div>}
// //           <form onSubmit={handleSubmit} className="space-y-4">
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
// //             <button
// //               type="submit"
// //               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
// //             >
// //               Sign In
// //             </button>
// //           </form>
// //           <button
// //             onClick={handleShopOwnerLogin}
// //             className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
// //           >
// //             Sign In as Shop Owner
// //           </button>
// //           <div className="mt-6">
// //             <div className="relative">
// //               <div className="absolute inset-0 flex items-center">
// //                 <div className="w-full border-t border-gray-300"></div>
// //               </div>
// //               <div className="relative flex justify-center text-sm">
// //                 <span className="px-2 bg-white text-gray-500">
// //                   Or continue with
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
// //             <p className="text-gray-500">
// //               Don't have an account?{" "}
// //               <Link
// //                 to="/Register"
// //                 className="text-blue-600 hover:text-blue-800"
// //               >
// //                 Sign up
// //               </Link>
// //             </p>
// //           </div>
// //         </div>
// //         <div className="w-full md:w-1/2 flex items-center justify-center p-8">
// //           <img
// //             src="/image/Portable Charger.jpg"
// //             alt="Electric Car Accessory"
// //             className="rounded-lg shadow-lg w-full h-96 "
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LogIn;
// ////////////////
// /////
// ///////////
// import React, { useState, useEffect } from "react";
// import { FaGoogle, FaGithub } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Cookies from "js-cookie";
// import Swal from "sweetalert2";

// const LogIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
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

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         {
//           email,
//           password,
//         }
//       );

//       const data = response.data;

//       if (data.isApproved) {
//         console.log("Login successful:", data);
//         localStorage.setItem("token", data.token);
//         navigate("/");
//       } else {
//         setError("Your account is not approved. Please contact support.");
//       }
//     } catch (err) {
//       setError(
//         err.response?.data?.message || "Login failed, please try again."
//       );
//     }
//   };

//   const handleShopOwnerLogin = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/shop-owner/login",
//         {
//           email,
//           password,
//         }
//       );

//       const data = response.data;

//       if (data.token) {
//         console.log("Shop owner login successful:", data);
//         localStorage.setItem("shopOwnerToken", data.token);
//         localStorage.setItem("shopOwnerInfo", JSON.stringify(data.shopOwner));
//         navigate("/dashboard");
//       } else {
//         setError(
//           "Your account is not yet approved. Please wait for admin approval."
//         );
//       }
//     } catch (err) {
//       console.error("Login error:", err);
//       setError(
//         err.response?.data?.message ||
//           "Shop owner login failed, please try again."
//       );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col md:flex-row w-full pt-20">
//         <div className="w-full md:w-1/2 p-8">
//           <h2 className="text-3xl font-bold mb-6 text-slate-800">
//             Welcome Back
//           </h2>
//           {error && <div className="text-red-500 mb-4">{error}</div>}
//           <form onSubmit={handleSubmit} className="space-y-4">
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
//             <button
//               type="submit"
//               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//               Sign In
//             </button>
//           </form>
//           <button
//             onClick={handleShopOwnerLogin}
//             className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//           >
//             Sign In as Shop Owner
//           </button>
//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">
//                   Or continue with
//                 </span>
//               </div>
//             </div>
//             <div className="mt-4 flex justify-center">
//               <div
//                 id="g_id_onload"
//                 data-client_id="446212780559-birkalm64aacvjjq3f4qcosuvnmgetqu.apps.googleusercontent.com"
//                 data-context="signin"
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
//               Don't have an account?{" "}
//               <Link to="/register" className="text-blue-600 hover:text-blue-800">
//                 Sign up
//               </Link>
//             </p>
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 flex items-center justify-center p-8">
//           <img
//             src="/image/Portable Charger.jpg"
//             alt="Electric Car Accessory"
//             className="rounded-lg shadow-lg w-full h-96 "
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LogIn;
//////////////////////////////////////////////////////////////////
import React, { useState, useEffect } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      const data = response.data;

      if (data.isApproved) {
        console.log("Login successful:", data);
        localStorage.setItem("token", data.token);
        navigate("/");
      } else {
        setError("Your account is not approved. Please contact support.");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed, please try again."
      );
    }
  };

  const handleShopOwnerLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/shop-owner/login",
        {
          email,
          password,
        }
      );

      const data = response.data;

      if (data.token) {
        console.log("Shop owner login successful:", data);
        localStorage.setItem("shopOwnerToken", data.token);
        localStorage.setItem("shopOwnerInfo", JSON.stringify(data.shopOwner));
        navigate("/dashboard");
      } else {
        setError(
          "Your account is not yet approved. Please wait for admin approval."
        );
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(
        err.response?.data?.message ||
          "Shop owner login failed, please try again."
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col md:flex-row w-full pt-20">
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">
            Welcome Back
          </h2>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <form onSubmit={handleSubmit} className="space-y-4">
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
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign In
            </button>
          </form>
          <button
            onClick={handleShopOwnerLogin}
            className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Sign In as Shop Owner
          </button>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <div
                id="g_id_onload"
                data-client_id="446212780559-birkalm64aacvjjq3f4qcosuvnmgetqu.apps.googleusercontent.com"
                data-context="signin"
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
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-blue-600 hover:text-blue-800"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <img
            src="/image/Portable Charger.jpg"
            alt="Electric Car Accessory"
            className="rounded-lg shadow-lg w-full h-96 "
          />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
