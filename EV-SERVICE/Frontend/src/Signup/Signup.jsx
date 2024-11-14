// import React, { useState } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { FaUser, FaEnvelope, FaLock, FaCity, FaCheck } from "react-icons/fa";

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     city: "",
//     gender: "male",
//     captcha: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//   };

//   return (
//     <div className="min-h-screen flex">
//       <div className="flex-1 bg-green-500 flex items-center justify-center text-white p-10">
//         <div>
//           <h2 className="text-4xl font-bold mb-2">Sign Up</h2>
//           <p className="mb-8">
//             Sign Up to ev.care to ask questions, answer people's questions, and
//             connect with other people.
//           </p>
//           <button className="bg-blue-600 text-white py-2 px-4 rounded-full flex items-center">
//             <FcGoogle size={24} className="mr-2" /> Continue with Google
//           </button>
//         </div>
//       </div>
//       <div className="flex-1 bg-gray-900 text-white p-10 flex items-center justify-center">
//         <form onSubmit={handleSubmit} className="w-full max-w-md">
//           <div className="mb-4">
//             <label className="block text-gray-400 text-sm mb-2">
//               Username *
//             </label>
//             <div className="flex items-center border-b border-gray-600 py-2">
//               <FaUser className="mr-2" />
//               <input
//                 type="text"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 className="bg-gray-900 appearance-none border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
//                 required
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-400 text-sm mb-2">E-Mail *</label>
//             <div className="flex items-center border-b border-gray-600 py-2">
//               <FaEnvelope className="mr-2" />
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="bg-gray-900 appearance-none border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
//                 required
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-400 text-sm mb-2">
//               Password *
//             </label>
//             <div className="flex items-center border-b border-gray-600 py-2">
//               <FaLock className="mr-2" />
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="bg-gray-900 appearance-none border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
//                 required
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-400 text-sm mb-2">
//               Confirm Password *
//             </label>
//             <div className="flex items-center border-b border-gray-600 py-2">
//               <FaLock className="mr-2" />
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className="bg-gray-900 appearance-none border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
//                 required
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-400 text-sm mb-2">City *</label>
//             <div className="flex items-center border-b border-gray-600 py-2">
//               <FaCity className="mr-2" />
//               <input
//                 type="text"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 className="bg-gray-900 appearance-none border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
//                 required
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-400 text-sm mb-2">Gender</label>
//             <div className="flex items-center">
//               <input
//                 type="radio"
//                 name="gender"
//                 value="male"
//                 checked={formData.gender === "male"}
//                 onChange={handleChange}
//                 className="mr-2"
//               />
//               <label className="mr-4">Male</label>
//               <input
//                 type="radio"
//                 name="gender"
//                 value="female"
//                 checked={formData.gender === "female"}
//                 onChange={handleChange}
//                 className="mr-2"
//               />
//               <label>Female</label>
//             </div>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-400 text-sm mb-2">
//               Captcha *
//             </label>
//             <div className="flex items-center border-b border-gray-600 py-2">
//               <FaCheck className="mr-2" />
//               <input
//                 type="text"
//                 name="captcha"
//                 value={formData.captcha}
//                 onChange={handleChange}
//                 className="bg-gray-900 appearance-none border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
//                 required
//               />
//             </div>
//             <small className="text-gray-500">
//               What is the capital of Egypt? ( Cairo )
//             </small>
//           </div>
//           <div className="mb-4 flex items-center">
//             <input type="checkbox" name="terms" className="mr-2" required />
//             <span className="text-gray-500 text-sm">
//               By registering, you agree to the{" "}
//               <a href="#" className="text-green-400">
//                 Terms of Service
//               </a>{" "}
//               and{" "}
//               <a href="#" className="text-green-400">
//                 Privacy Policy
//               </a>
//               .
//             </span>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Signup
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
////////////////////////////////
