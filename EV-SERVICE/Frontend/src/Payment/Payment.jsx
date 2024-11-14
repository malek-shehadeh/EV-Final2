// // // // //////////////////////////////
// // // // import React, { useState } from "react";
// // // // import Header from "../component/Header/Header";
// // // // import Footer from "../component/Footer/Footer";

// // // // const Payment = () => {
// // // //   const [cardDetails, setCardDetails] = useState({
// // // //     name: "Malek Shehadeh",
// // // //     number: "4256 7890 5678 4532",
// // // //     expiryMonth: "09",
// // // //     expiryYear: "2026",
// // // //     cvc: "345",
// // // //   });
// // // //   const [darkMode, setDarkMode] = useState(false);

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setCardDetails((prevDetails) => ({
// // // //       ...prevDetails,
// // // //       [name]: value,
// // // //     }));
// // // //   };

// // // //   const toggleDarkMode = () => setDarkMode(!darkMode);

// // // //   return (
// // // //     <div className={`flex flex-col min-h-screen ${darkMode ? "dark" : ""}`}>
// // // //       <Header handleDarkMode={toggleDarkMode} darkMode={darkMode} />
// // // //       <main className="flex-grow bg-gray-100 dark:bg-gray-900 p-6 pt-24 px-16">
// // // //         <div className="flex flex-col md:flex-row gap-6">
// // // //           <div className="md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
// // // //             <div className="bg-gradient-to-r from-slate-700 to-slate-900 w-80 h-48 rounded-lg text-white p-6 flex flex-col justify-between shadow-lg">
// // // //               <div className="text-lg tracking-wide">{cardDetails.number}</div>
// // // //               <div className="flex justify-between">
// // // //                 <div>
// // // //                   <div className="text-xs">Card Holder</div>
// // // //                   <div>{cardDetails.name}</div>
// // // //                 </div>
// // // //                 <div>
// // // //                   <div className="text-xs">Expires</div>
// // // //                   <div>{`${cardDetails.expiryMonth}/${cardDetails.expiryYear}`}</div>
// // // //                 </div>
// // // //                 <div>
// // // //                   <div className="text-xs">CVC</div>
// // // //                   <div>{cardDetails.cvc}</div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //           <div className="md:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg ">
// // // //             <form>
// // // //               <div className="mb-4">
// // // //                 <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // // //                   CARDHOLDER NAME
// // // //                 </label>
// // // //                 <input
// // // //                   type="text"
// // // //                   name="name"
// // // //                   value={cardDetails.name}
// // // //                   onChange={handleChange}
// // // //                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // // //                 />
// // // //               </div>
// // // //               <div className="mb-4">
// // // //                 <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // // //                   CARD NUMBER
// // // //                 </label>
// // // //                 <input
// // // //                   type="text"
// // // //                   name="number"
// // // //                   value={cardDetails.number}
// // // //                   onChange={handleChange}
// // // //                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // // //                 />
// // // //               </div>
// // // //               <div className="flex mb-4">
// // // //                 <div className="w-1/3 mr-2">
// // // //                   <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // // //                     EXPIRY MONTH
// // // //                   </label>
// // // //                   <input
// // // //                     type="text"
// // // //                     name="expiryMonth"
// // // //                     value={cardDetails.expiryMonth}
// // // //                     onChange={handleChange}
// // // //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // // //                   />
// // // //                 </div>
// // // //                 <div className="w-1/3 mr-2">
// // // //                   <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // // //                     EXPIRY YEAR
// // // //                   </label>
// // // //                   <input
// // // //                     type="text"
// // // //                     name="expiryYear"
// // // //                     value={cardDetails.expiryYear}
// // // //                     onChange={handleChange}
// // // //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // // //                   />
// // // //                 </div>
// // // //                 <div className="w-1/3">
// // // //                   <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // // //                     CVC
// // // //                   </label>
// // // //                   <input
// // // //                     type="text"
// // // //                     name="cvc"
// // // //                     value={cardDetails.cvc}
// // // //                     onChange={handleChange}
// // // //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // // //                   />
// // // //                 </div>
// // // //               </div>
// // // //               <div className="mb-4">
// // // //                 <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // // //                   PAYMENT AMOUNT
// // // //                 </label>
// // // //                 <div className="text-2xl font-bold text-red-500 dark:text-red-400">
// // // //                   12 300 JOD
// // // //                 </div>
// // // //               </div>
// // // //               <button
// // // //                 type="submit"
// // // //                 className="w-full bg-slate-700 text-white font-bold py-2 px-4 rounded hover:bg-slate-600 dark:bg-slate-900 dark:hover:bg-slate-600 focus:outline-none focus:shadow-outline"
// // // //               >
// // // //                 PAY
// // // //               </button>
// // // //             </form>
// // // //           </div>
// // // //         </div>
// // // //       </main>
// // // //       <Footer />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Payment;
// // // // ////////////////////////////////////
// // // // import React, { useState, useEffect } from "react";
// // // // import Header from "../component/Header/Header";
// // // // import Footer from "../component/Footer/Footer";
// // // // import { useCart } from "../CartContext/CartContext";

// // // // const Payment = () => {
// // // //   const [cardDetails, setCardDetails] = useState({
// // // //     name: "Malek Shehadeh",
// // // //     number: "4256 7890 5678 4532",
// // // //     expiryMonth: "09",
// // // //     expiryYear: "2026",
// // // //     cvc: "345",
// // // //   });
// // // //   const [darkMode, setDarkMode] = useState(false);
// // // //   const { cartItems } = useCart();

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setCardDetails((prevDetails) => ({
// // // //       ...prevDetails,
// // // //       [name]: value,
// // // //     }));
// // // //   };

// // // //   const toggleDarkMode = () => setDarkMode(!darkMode);

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();

// // // //     const totalAmount = cartItems.reduce(
// // // //       (total, item) => total + item.productId.price * item.quantity,
// // // //       0
// // // //     );

// // // //     try {
// // // //       const response = await fetch("http://localhost:5000/api/payment", {
// // // //         method: "POST",
// // // //         headers: {
// // // //           "Content-Type": "application/json",
// // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // //         },
// // // //         body: JSON.stringify({
// // // //           paymentMethodId: "pm_card_visa", // This should be obtained from Stripe.js in a real implementation
// // // //           amount: Math.round(totalAmount * 100), // Convert to cents
// // // //           deliveryInfo: {
// // // //             name: cardDetails.name,
// // // //             // Add other delivery info fields here
// // // //           },
// // // //           cartItems: cartItems.map((item) => ({
// // // //             productId: item.productId._id,
// // // //             name: item.productId.name,
// // // //             quantity: item.quantity,
// // // //             price: item.productId.price,
// // // //           })),
// // // //         }),
// // // //       });

// // // //       if (!response.ok) {
// // // //         throw new Error("Payment failed");
// // // //       }

// // // //       const result = await response.json();
// // // //       console.log("Payment successful:", result);
// // // //       // Handle successful payment (e.g., show success message, clear cart, redirect to order confirmation page)
// // // //     } catch (error) {
// // // //       console.error("Payment error:", error);
// // // //       // Handle payment error (e.g., show error message to user)
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className={`flex flex-col min-h-screen ${darkMode ? "dark" : ""}`}>
// // // //       <Header handleDarkMode={toggleDarkMode} darkMode={darkMode} />
// // // //       <main className="flex-grow bg-gray-100 dark:bg-gray-900 p-6 pt-24 px-16">
// // // //         <div className="flex flex-col md:flex-row gap-6">
// // // //           <div className="md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
// // // //             <div className="bg-gradient-to-r from-slate-700 to-slate-900 w-80 h-48 rounded-lg text-white p-6 flex flex-col justify-between shadow-lg">
// // // //               <div className="text-lg tracking-wide">{cardDetails.number}</div>
// // // //               <div className="flex justify-between">
// // // //                 <div>
// // // //                   <div className="text-xs">Card Holder</div>
// // // //                   <div>{cardDetails.name}</div>
// // // //                 </div>
// // // //                 <div>
// // // //                   <div className="text-xs">Expires</div>
// // // //                   <div>{`${cardDetails.expiryMonth}/${cardDetails.expiryYear}`}</div>
// // // //                 </div>
// // // //                 <div>
// // // //                   <div className="text-xs">CVC</div>
// // // //                   <div>{cardDetails.cvc}</div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //           <div className="md:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg ">
// // // //             <form onSubmit={handleSubmit}>
// // // //               {/* ... (existing form fields) ... */}
// // // //               <div className="mb-4">
// // // //                 <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // // //                   PAYMENT AMOUNT
// // // //                 </label>
// // // //                 <div className="text-2xl font-bold text-red-500 dark:text-red-400">
// // // //                   {cartItems
// // // //                     .reduce(
// // // //                       (total, item) =>
// // // //                         total + item.productId.price * item.quantity,
// // // //                       0
// // // //                     )
// // // //                     .toFixed(2)}{" "}
// // // //                   JOD
// // // //                 </div>
// // // //               </div>
// // // //               <button
// // // //                 type="submit"
// // // //                 className="w-full bg-slate-700 text-white font-bold py-2 px-4 rounded hover:bg-slate-600 dark:bg-slate-900 dark:hover:bg-slate-600 focus:outline-none focus:shadow-outline"
// // // //               >
// // // //                 PAY
// // // //               </button>
// // // //             </form>
// // // //           </div>
// // // //         </div>
// // // //       </main>
// // // //       <Footer />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Payment;
// // // // //////////////////////////////////////
// // // // import React, { useState, useEffect } from "react";
// // // // import Header from "../component/Header/Header";
// // // // import Footer from "../component/Footer/Footer";
// // // // import { useCart } from "../CartContext/CartContext";

// // // // const Payment = () => {
// // // //   const [cardDetails, setCardDetails] = useState({
// // // //     name: "Malek Shehadeh",
// // // //     number: "4256 7890 5678 4532",
// // // //     expiryMonth: "09",
// // // //     expiryYear: "2026",
// // // //     cvc: "345",
// // // //   });
// // // //   const [darkMode, setDarkMode] = useState(false);
// // // //   const { cartItems } = useCart();

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setCardDetails((prevDetails) => ({
// // // //       ...prevDetails,
// // // //       [name]: value,
// // // //     }));
// // // //   };

// // // //   const toggleDarkMode = () => setDarkMode(!darkMode);

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();

// // // //     const totalAmount = cartItems.reduce(
// // // //       (total, item) => total + item.productId.price * item.quantity,
// // // //       0
// // // //     );

// // // //     try {
// // // //       const response = await fetch("http://localhost:5000/api/payment", {
// // // //         method: "POST",
// // // //         headers: {
// // // //           "Content-Type": "application/json",
// // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // //         },
// // // //         body: JSON.stringify({
// // // //           paymentMethodId: "pm_card_visa", // This should be obtained from Stripe.js in a real implementation
// // // //           amount: Math.round(totalAmount * 100), // Convert to cents
// // // //           deliveryInfo: {
// // // //             name: cardDetails.name,
// // // //             // Add other delivery info fields here
// // // //           },
// // // //           cartItems: cartItems.map((item) => ({
// // // //             productId: item.productId._id,
// // // //             name: item.productId.name,
// // // //             quantity: item.quantity,
// // // //             price: item.productId.price,
// // // //           })),
// // // //         }),
// // // //       });

// // // //       if (!response.ok) {
// // // //         throw new Error("Payment failed");
// // // //       }

// // // //       const result = await response.json();
// // // //       console.log("Payment successful:", result);
// // // //       // Handle successful payment (e.g., show success message, clear cart, redirect to order confirmation page)
// // // //     } catch (error) {
// // // //       console.error("Payment error:", error);
// // // //       // Handle payment error (e.g., show error message to user)
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className={`flex flex-col min-h-screen ${darkMode ? "dark" : ""}`}>
// // // //       <Header handleDarkMode={toggleDarkMode} darkMode={darkMode} />
// // // //       <main className="flex-grow bg-gray-100 dark:bg-gray-900 p-6 pt-24 px-16">
// // // //         <div className="flex flex-col md:flex-row gap-6">
// // // //           <div className="md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
// // // //             <div className="bg-gradient-to-r from-slate-700 to-slate-900 w-80 h-48 rounded-lg text-white p-6 flex flex-col justify-between shadow-lg">
// // // //               <div className="text-lg tracking-wide">{cardDetails.number}</div>
// // // //               <div className="flex justify-between">
// // // //                 <div>
// // // //                   <div className="text-xs">Card Holder</div>
// // // //                   <div>{cardDetails.name}</div>
// // // //                 </div>
// // // //                 <div>
// // // //                   <div className="text-xs">Expires</div>
// // // //                   <div>{`${cardDetails.expiryMonth}/${cardDetails.expiryYear}`}</div>
// // // //                 </div>
// // // //                 <div>
// // // //                   <div className="text-xs">CVC</div>
// // // //                   <div>{cardDetails.cvc}</div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //           <div className="md:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg ">
// // // //             <form onSubmit={handleSubmit}>
// // // //               <div className="mb-4">
// // // //                 <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // // //                   CARDHOLDER NAME
// // // //                 </label>
// // // //                 <input
// // // //                   type="text"
// // // //                   name="name"
// // // //                   value={cardDetails.name}
// // // //                   onChange={handleChange}
// // // //                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // // //                 />
// // // //               </div>
// // // //               <div className="mb-4">
// // // //                 <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // // //                   CARD NUMBER
// // // //                 </label>
// // // //                 <input
// // // //                   type="text"
// // // //                   name="number"
// // // //                   value={cardDetails.number}
// // // //                   onChange={handleChange}
// // // //                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // // //                 />
// // // //               </div>
// // // //               <div className="flex mb-4">
// // // //                 <div className="w-1/3 mr-2">
// // // //                   <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // // //                     EXPIRY MONTH
// // // //                   </label>
// // // //                   <input
// // // //                     type="text"
// // // //                     name="expiryMonth"
// // // //                     value={cardDetails.expiryMonth}
// // // //                     onChange={handleChange}
// // // //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // // //                   />
// // // //                 </div>
// // // //                 <div className="w-1/3 mr-2">
// // // //                   <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // // //                     EXPIRY YEAR
// // // //                   </label>
// // // //                   <input
// // // //                     type="text"
// // // //                     name="expiryYear"
// // // //                     value={cardDetails.expiryYear}
// // // //                     onChange={handleChange}
// // // //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // // //                   />
// // // //                 </div>
// // // //                 <div className="w-1/3">
// // // //                   <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // // //                     CVC
// // // //                   </label>
// // // //                   <input
// // // //                     type="text"
// // // //                     name="cvc"
// // // //                     value={cardDetails.cvc}
// // // //                     onChange={handleChange}
// // // //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // // //                   />
// // // //                 </div>
// // // //               </div>
// // // //               <div className="mb-4">
// // // //                 <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // // //                   PAYMENT AMOUNT
// // // //                 </label>
// // // //                 <div className="text-2xl font-bold text-red-500 dark:text-red-400">
// // // //                   {cartItems
// // // //                     .reduce(
// // // //                       (total, item) =>
// // // //                         total + item.productId.price * item.quantity,
// // // //                       0
// // // //                     )
// // // //                     .toFixed(2)}{" "}
// // // //                   JOD
// // // //                 </div>
// // // //               </div>
// // // //               <button
// // // //                 type="submit"
// // // //                 className="w-full bg-slate-700 text-white font-bold py-2 px-4 rounded hover:bg-slate-600 dark:bg-slate-900 dark:hover:bg-slate-600 focus:outline-none focus:shadow-outline"
// // // //               >
// // // //                 PAY
// // // //               </button>
// // // //             </form>
// // // //           </div>
// // // //         </div>
// // // //       </main>
// // // //       <Footer />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Payment;
// // // ////////////////////////////////////////////
// // // import React, { useState, useEffect } from "react";
// // // import Header from "../component/Header/Header";
// // // import Footer from "../component/Footer/Footer";
// // // import { useCart } from "../CartContext/CartContext";

// // // const Payment = () => {
// // //   const [cardDetails, setCardDetails] = useState({
// // //     name: "Malek Shehadeh",
// // //     number: "4256 7890 5678 4532",
// // //     expiryMonth: "09",
// // //     expiryYear: "2026",
// // //     cvc: "345",
// // //   });
// // //   const [customerDetails, setCustomerDetails] = useState({
// // //     fullName: "",
// // //     phone: "",
// // //     email: "",
// // //     address: "",
// // //   });
// // //   const [darkMode, setDarkMode] = useState(false);
// // //   const { cartItems } = useCart();

// // //   const handleCardChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setCardDetails((prevDetails) => ({
// // //       ...prevDetails,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   const handleCustomerChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setCustomerDetails((prevDetails) => ({
// // //       ...prevDetails,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   const toggleDarkMode = () => setDarkMode(!darkMode);

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     const totalAmount = cartItems.reduce(
// // //       (total, item) => total + item.productId.price * item.quantity,
// // //       0
// // //     );

// // //     try {
// // //       const response = await fetch("http://localhost:5000/api/payment", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // //         },
// // //         body: JSON.stringify({
// // //           paymentMethodId: "pm_card_visa",
// // //           amount: Math.round(totalAmount * 100), // Convert to cents
// // //           deliveryInfo: {
// // //             name: customerDetails.fullName,
// // //             phone: customerDetails.phone,
// // //             email: customerDetails.email,
// // //             address: customerDetails.address,
// // //           },
// // //           cartItems: cartItems.map((item) => ({
// // //             productId: item.productId._id,
// // //             name: item.productId.name,
// // //             quantity: item.quantity,
// // //             price: item.productId.price,
// // //           })),
// // //         }),
// // //       });

// // //       if (!response.ok) {
// // //         throw new Error("Payment failed");
// // //       }

// // //       const result = await response.json();
// // //       console.log("Payment successful:", result);
// // //       // Handle successful payment (e.g., show success message, clear cart, redirect to order confirmation page)
// // //     } catch (error) {
// // //       console.error("Payment error:", error);
// // //       // Handle payment error (e.g., show error message to user)
// // //     }
// // //   };

// // //   return (
// // //     <div className={`flex flex-col min-h-screen ${darkMode ? "dark" : ""}`}>
// // //       <Header handleDarkMode={toggleDarkMode} darkMode={darkMode} />
// // //       <main className="flex-grow bg-gray-100 dark:bg-gray-900 p-6 pt-24 px-16">
// // //         <div className="flex flex-col md:flex-row gap-6">
// // //           <div className="md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
// // //             <div className="bg-gradient-to-r from-slate-700 to-slate-900 w-80 h-48 rounded-lg text-white p-6 flex flex-col justify-between shadow-lg">
// // //               <div className="text-lg tracking-wide">{cardDetails.number}</div>
// // //               <div className="flex justify-between">
// // //                 <div>
// // //                   <div className="text-xs">Card Holder</div>
// // //                   <div>{cardDetails.name}</div>
// // //                 </div>
// // //                 <div>
// // //                   <div className="text-xs">Expires</div>
// // //                   <div>{`${cardDetails.expiryMonth}/${cardDetails.expiryYear}`}</div>
// // //                 </div>
// // //                 <div>
// // //                   <div className="text-xs">CVC</div>
// // //                   <div>{cardDetails.cvc}</div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //           <div className="md:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg ">
// // //             <form onSubmit={handleSubmit}>
// // //               <div className="flex mb-4 gap-4">
// // //                 <div className="w-1/2">
// // //                   <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // //                     FULL NAME
// // //                   </label>
// // //                   <input
// // //                     type="text"
// // //                     name="fullName"
// // //                     value={customerDetails.fullName}
// // //                     onChange={handleCustomerChange}
// // //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // //                   />
// // //                 </div>
// // //                 <div className="w-1/2">
// // //                   <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // //                     PHONE NUMBER
// // //                   </label>
// // //                   <input
// // //                     type="tel"
// // //                     name="phone"
// // //                     value={customerDetails.phone}
// // //                     onChange={handleCustomerChange}
// // //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // //                   />
// // //                 </div>
// // //               </div>
// // //               <div className="flex mb-4 gap-4">
// // //                 <div className="w-1/2">
// // //                   <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // //                     EMAIL
// // //                   </label>
// // //                   <input
// // //                     type="email"
// // //                     name="email"
// // //                     value={customerDetails.email}
// // //                     onChange={handleCustomerChange}
// // //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // //                   />
// // //                 </div>
// // //                 <div className="w-1/2">
// // //                   <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // //                     ADDRESS
// // //                   </label>
// // //                   <input
// // //                     type="text"
// // //                     name="address"
// // //                     value={customerDetails.address}
// // //                     onChange={handleCustomerChange}
// // //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // //                   />
// // //                 </div>
// // //               </div>
// // //               <div className="mb-4">
// // //                 <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // //                   CARDHOLDER NAME
// // //                 </label>
// // //                 <input
// // //                   type="text"
// // //                   name="name"
// // //                   value={cardDetails.name}
// // //                   onChange={handleCardChange}
// // //                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // //                 />
// // //               </div>
// // //               <div className="mb-4">
// // //                 <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // //                   CARD NUMBER
// // //                 </label>
// // //                 <input
// // //                   type="text"
// // //                   name="number"
// // //                   value={cardDetails.number}
// // //                   onChange={handleCardChange}
// // //                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // //                 />
// // //               </div>
// // //               <div className="flex mb-4">
// // //                 <div className="w-1/3 mr-2">
// // //                   <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // //                     EXPIRY MONTH
// // //                   </label>
// // //                   <input
// // //                     type="text"
// // //                     name="expiryMonth"
// // //                     value={cardDetails.expiryMonth}
// // //                     onChange={handleCardChange}
// // //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // //                   />
// // //                 </div>
// // //                 <div className="w-1/3 mr-2">
// // //                   <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // //                     EXPIRY YEAR
// // //                   </label>
// // //                   <input
// // //                     type="text"
// // //                     name="expiryYear"
// // //                     value={cardDetails.expiryYear}
// // //                     onChange={handleCardChange}
// // //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // //                   />
// // //                 </div>
// // //                 <div className="w-1/3">
// // //                   <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // //                     CVC
// // //                   </label>
// // //                   <input
// // //                     type="text"
// // //                     name="cvc"
// // //                     value={cardDetails.cvc}
// // //                     onChange={handleCardChange}
// // //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // //                   />
// // //                 </div>
// // //               </div>
// // //               <div className="flex justify-center">
// // //                 <button
// // //                   type="submit"
// // //                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
// // //                 >
// // //                   Proceed to Pay
// // //                 </button>
// // //               </div>
// // //             </form>
// // //           </div>
// // //         </div>
// // //       </main>
// // //       <Footer />
// // //     </div>
// // //   );
// // // };

// // // export default Payment;
// // // ////////////////////////////////////////////////////////
// // // import React, { useState, useEffect } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import Header from "../component/Header/Header";
// // // import Footer from "../component/Footer/Footer";
// // // import { useCart } from "../CartContext/CartContext";
// // // import { loadStripe } from "@stripe/stripe-js";
// // // import {
// // //   Elements,
// // //   CardElement,
// // //   useStripe,
// // //   useElements,
// // // } from "@stripe/react-stripe-js";

// // // const stripePromise = loadStripe(
// // //   "pk_test_51Q3Ycn04h0rzqybR8WuN9Eb9HnDUcmGcmkSzhcQ8LIcda1hDOhlRu3t1nYgZh8bQL0QW7dwYSlRka2Y6ljOEnKu000k8RO6FFu"
// // // );

// // // const PaymentForm = () => {
// // //   const [customerDetails, setCustomerDetails] = useState({
// // //     fullName: "",
// // //     phone: "",
// // //     email: "",
// // //     address: "",
// // //   });
// // //   const [darkMode, setDarkMode] = useState(false);
// // //   const { cartItems, clearCart } = useCart();
// // //   const [error, setError] = useState(null);
// // //   const [processing, setProcessing] = useState(false);
// // //   const stripe = useStripe();
// // //   const elements = useElements();
// // //   const navigate = useNavigate();

// // //   const toggleDarkMode = () => setDarkMode(!darkMode);

// // //   const handleCustomerChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setCustomerDetails((prevDetails) => ({
// // //       ...prevDetails,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setProcessing(true);

// // //     if (!stripe || !elements) {
// // //       return;
// // //     }

// // //     const cardElement = elements.getElement(CardElement);

// // //     const { error, paymentMethod } = await stripe.createPaymentMethod({
// // //       type: "card",
// // //       card: cardElement,
// // //     });

// // //     if (error) {
// // //       setError(error.message);
// // //       setProcessing(false);
// // //       return;
// // //     }

// // //     const totalAmount = cartItems.reduce(
// // //       (total, item) => total + item.productId.price * item.quantity,
// // //       0
// // //     );

// // //     try {
// // //       const response = await fetch("http://localhost:5000/api/payment", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // //         },
// // //         body: JSON.stringify({
// // //           paymentMethodId: paymentMethod.id,
// // //           amount: Math.round(totalAmount * 100), // Convert to cents
// // //           deliveryInfo: customerDetails,
// // //           cartItems: cartItems.map((item) => ({
// // //             productId: item.productId._id,
// // //             name: item.productId.name,
// // //             quantity: item.quantity,
// // //             price: item.productId.price,
// // //           })),
// // //         }),
// // //       });

// // //       if (!response.ok) {
// // //         throw new Error("Payment failed");
// // //       }

// // //       const result = await response.json();
// // //       console.log("Payment successful:", result);

// // //       // Clear the cart
// // //       await clearCart();

// // //       // Redirect to a success page or show a success message
// // //       navigate("/payment-success");
// // //     } catch (error) {
// // //       console.error("Payment error:", error);
// // //       setError(error.message);
// // //     } finally {
// // //       setProcessing(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className={`flex flex-col min-h-screen ${darkMode ? "dark" : ""}`}>
// // //       <Header handleDarkMode={toggleDarkMode} darkMode={darkMode} />
// // //       <main className="flex-grow bg-gray-100 dark:bg-gray-900 p-6 pt-24 px-16">
// // //         <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
// // //           <form onSubmit={handleSubmit}>
// // //             <div className="mb-4">
// // //               <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // //                 Full Name
// // //               </label>
// // //               <input
// // //                 type="text"
// // //                 name="fullName"
// // //                 value={customerDetails.fullName}
// // //                 onChange={handleCustomerChange}
// // //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // //                 required
// // //               />
// // //             </div>
// // //             <div className="mb-4">
// // //               <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // //                 Phone Number
// // //               </label>
// // //               <input
// // //                 type="tel"
// // //                 name="phone"
// // //                 value={customerDetails.phone}
// // //                 onChange={handleCustomerChange}
// // //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // //                 required
// // //               />
// // //             </div>
// // //             <div className="mb-4">
// // //               <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // //                 Email
// // //               </label>
// // //               <input
// // //                 type="email"
// // //                 name="email"
// // //                 value={customerDetails.email}
// // //                 onChange={handleCustomerChange}
// // //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // //                 required
// // //               />
// // //             </div>
// // //             <div className="mb-4">
// // //               <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // //                 Address
// // //               </label>
// // //               <input
// // //                 type="text"
// // //                 name="address"
// // //                 value={customerDetails.address}
// // //                 onChange={handleCustomerChange}
// // //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // //                 required
// // //               />
// // //             </div>
// // //             <div className="mb-4">
// // //               <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // //                 Card Details
// // //               </label>
// // //               <CardElement
// // //                 options={{
// // //                   style: {
// // //                     base: {
// // //                       fontSize: "16px",
// // //                       color: darkMode ? "#ffffff" : "#424770",
// // //                       "::placeholder": {
// // //                         color: darkMode ? "#aab7c4" : "#aab7c4",
// // //                       },
// // //                     },
// // //                     invalid: {
// // //                       color: "#9e2146",
// // //                     },
// // //                   },
// // //                 }}
// // //               />
// // //             </div>
// // //             {error && <div className="text-red-500 mb-4">{error}</div>}
// // //             <button
// // //               type="submit"
// // //               disabled={!stripe || processing}
// // //               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
// // //             >
// // //               {processing ? "Processing..." : "Pay Now"}
// // //             </button>
// // //           </form>
// // //         </div>
// // //       </main>
// // //       <Footer />
// // //     </div>
// // //   );
// // // };

// // // const Payment = () => (
// // //   <Elements stripe={stripePromise}>
// // //     <PaymentForm />
// // //   </Elements>
// // // );

// // // export default Payment;
// // // //////////////////////////////////////
// // // import React, { useState, useEffect } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import Header from "../component/Header/Header";
// // // import Footer from "../component/Footer/Footer";
// // // import { useCart } from "../CartContext/CartContext";
// // // import { loadStripe } from "@stripe/stripe-js";
// // // import {
// // //   Elements,
// // //   CardElement,
// // //   useStripe,
// // //   useElements,
// // // } from "@stripe/react-stripe-js";

// // // const stripePromise = loadStripe(
// // //   "pk_test_51Q3Ycn04h0rzqybR8WuN9Eb9HnDUcmGcmkSzhcQ8LIcda1hDOhlRu3t1nYgZh8bQL0QW7dwYSlRka2Y6ljOEnKu000k8RO6FFu"
// // // );

// // // const PaymentForm = () => {
// // //   const [customerDetails, setCustomerDetails] = useState({
// // //     fullName: "",
// // //     phone: "",
// // //     email: "",
// // //     address: "",
// // //   });
// // //   const [darkMode, setDarkMode] = useState(false);
// // //   const { cartItems, clearCart } = useCart();
// // //   const [error, setError] = useState(null);
// // //   const [processing, setProcessing] = useState(false);
// // //   const stripe = useStripe();
// // //   const elements = useElements();
// // //   const navigate = useNavigate();

// // //   const toggleDarkMode = () => setDarkMode(!darkMode);

// // //   const handleCustomerChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setCustomerDetails((prevDetails) => ({
// // //       ...prevDetails,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setProcessing(true);

// // //     if (!stripe || !elements) {
// // //       return;
// // //     }

// // //     const cardElement = elements.getElement(CardElement);

// // //     const { error, paymentMethod } = await stripe.createPaymentMethod({
// // //       type: "card",
// // //       card: cardElement,
// // //     });

// // //     if (error) {
// // //       setError(error.message);
// // //       setProcessing(false);
// // //       return;
// // //     }

// // //     const totalAmount = cartItems.reduce(
// // //       (total, item) => total + item.productId.price * item.quantity,
// // //       0
// // //     );

// // //     try {
// // //       const response = await fetch("http://localhost:5000/api/payment", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // //         },
// // //         body: JSON.stringify({
// // //           paymentMethodId: paymentMethod.id,
// // //           amount: Math.round(totalAmount * 100), // Convert to cents
// // //           deliveryInfo: customerDetails,
// // //           cartItems: cartItems.map((item) => ({
// // //             productId: item.productId._id,
// // //             name: item.productId.name,
// // //             quantity: item.quantity,
// // //             price: item.productId.price,
// // //           })),
// // //         }),
// // //       });

// // //       if (!response.ok) {
// // //         const errorData = await response.json();
// // //         throw new Error(errorData.error || "Payment failed");
// // //       }

// // //       const result = await response.json();
// // //       console.log("Payment successful:", result);

// // //       // Clear the cart
// // //       await clearCart();

// // //       // Redirect to a success page or show a success message
// // //       navigate("/payment-success");
// // //     } catch (error) {
// // //       console.error("Payment error:", error);
// // //       setError(error.message);
// // //       if (error.message === "User not authenticated") {
// // //         // Redirect to login page or show login modal
// // //         navigate("/login");
// // //       }
// // //     } finally {
// // //       setProcessing(false);
// // //     }
// // //   };
// // //   return (
// // //     <div className={`flex flex-col min-h-screen ${darkMode ? "dark" : ""}`}>
// // //       <Header handleDarkMode={toggleDarkMode} darkMode={darkMode} />
// // //       <main className="flex-grow bg-gray-100 dark:bg-gray-900 p-6 pt-24 px-16">
// // //         <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
// // //           <form onSubmit={handleSubmit}>
// // //             <div className="mb-4">
// // //               <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // //                 Full Name
// // //               </label>
// // //               <input
// // //                 type="text"
// // //                 name="fullName"
// // //                 value={customerDetails.fullName}
// // //                 onChange={handleCustomerChange}
// // //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // //                 required
// // //               />
// // //             </div>
// // //             <div className="mb-4">
// // //               <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // //                 Phone Number
// // //               </label>
// // //               <input
// // //                 type="tel"
// // //                 name="phone"
// // //                 value={customerDetails.phone}
// // //                 onChange={handleCustomerChange}
// // //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // //                 required
// // //               />
// // //             </div>
// // //             <div className="mb-4">
// // //               <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // //                 Email
// // //               </label>
// // //               <input
// // //                 type="email"
// // //                 name="email"
// // //                 value={customerDetails.email}
// // //                 onChange={handleCustomerChange}
// // //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // //                 required
// // //               />
// // //             </div>
// // //             <div className="mb-4">
// // //               <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // //                 Address
// // //               </label>
// // //               <input
// // //                 type="text"
// // //                 name="address"
// // //                 value={customerDetails.address}
// // //                 onChange={handleCustomerChange}
// // //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // //                 required
// // //               />
// // //             </div>
// // //             <div className="mb-4">
// // //               <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // //                 Card Details
// // //               </label>
// // //               <CardElement
// // //                 options={{
// // //                   style: {
// // //                     base: {
// // //                       fontSize: "16px",
// // //                       color: darkMode ? "#ffffff" : "#424770",
// // //                       "::placeholder": {
// // //                         color: darkMode ? "#aab7c4" : "#aab7c4",
// // //                       },
// // //                     },
// // //                     invalid: {
// // //                       color: "#9e2146",
// // //                     },
// // //                   },
// // //                 }}
// // //               />
// // //             </div>
// // //             {error && <div className="text-red-500 mb-4">{error}</div>}
// // //             <button
// // //               type="submit"
// // //               disabled={!stripe || processing}
// // //               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
// // //             >
// // //               {processing ? "Processing..." : "Pay Now"}
// // //             </button>
// // //           </form>
// // //         </div>
// // //       </main>
// // //       <Footer />
// // //     </div>
// // //   );
// // // };

// // // const Payment = () => (
// // //   <Elements stripe={stripePromise}>
// // //     <PaymentForm />
// // //   </Elements>
// // // );

// // // export default Payment;
// // // ////////////////ok70%//////////////
// // // import React, { useState, useEffect } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import Header from "../component/Header/Header";
// // // import Footer from "../component/Footer/Footer";
// // // import { useCart } from "../CartContext/CartContext";
// // // import { loadStripe } from "@stripe/stripe-js";
// // // import {
// // //   Elements,
// // //   CardElement,
// // //   useStripe,
// // //   useElements,
// // // } from "@stripe/react-stripe-js";

// // // const stripePromise = loadStripe(
// // //   "pk_test_51Q3Ycn04h0rzqybR8WuN9Eb9HnDUcmGcmkSzhcQ8LIcda1hDOhlRu3t1nYgZh8bQL0QW7dwYSlRka2Y6ljOEnKu000k8RO6FFu"
// // // );

// // // const PaymentForm = () => {
// // //   const [customerDetails, setCustomerDetails] = useState({
// // //     fullName: "",
// // //     phone: "",
// // //     email: "",
// // //     address: "",
// // //   });
// // //   const [darkMode, setDarkMode] = useState(false);
// // //   const { cartItems, clearCart } = useCart();
// // //   const [error, setError] = useState(null);
// // //   const [processing, setProcessing] = useState(false);
// // //   const stripe = useStripe();
// // //   const elements = useElements();
// // //   const navigate = useNavigate();

// // //   const toggleDarkMode = () => setDarkMode(!darkMode);

// // //   const handleCustomerChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setCustomerDetails((prevDetails) => ({
// // //       ...prevDetails,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setProcessing(true);
// // //     setError(null);

// // //     if (!stripe || !elements) {
// // //       setError("Stripe has not loaded. Please try again later.");
// // //       setProcessing(false);
// // //       return;
// // //     }

// // //     const cardElement = elements.getElement(CardElement);

// // //     const { error, paymentMethod } = await stripe.createPaymentMethod({
// // //       type: "card",
// // //       card: cardElement,
// // //     });

// // //     if (error) {
// // //       setError(error.message);
// // //       setProcessing(false);
// // //       return;
// // //     }

// // //     const totalAmount = cartItems.reduce(
// // //       (total, item) => total + item.productId.price * item.quantity,
// // //       0
// // //     );
// // //     //////////////////////////////

// // //     /////////////////////////

// // //     try {
// // //       const token = localStorage.getItem("token");
// // //       if (!token) {
// // //         throw new Error("No authentication token found. Please log in.");
// // //       }

// // //       const response = await fetch("http://localhost:5000/api/payment", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //           Authorization: `Bearer ${token}`,
// // //         },
// // //         body: JSON.stringify({
// // //           paymentMethodId: paymentMethod.id,
// // //           amount: Math.round(totalAmount * 100), // Convert to cents
// // //           deliveryInfo: customerDetails,
// // //           cartItems: cartItems.map((item) => ({
// // //             productId: item.productId._id,
// // //             name: item.productId.name,
// // //             quantity: item.quantity,
// // //             price: item.productId.price,
// // //           })),
// // //         }),
// // //       });
// // //       console.log("abedalmajeed" + response.data);
// // //       if (!response.ok) {
// // //         const errorData = await response.json();
// // //         throw new Error(errorData.error || "Payment failed");
// // //       }

// // //       const result = await response.json();
// // //       console.log("Payment successful:", result);

// // //       // Clear the cart
// // //       await clearCart();

// // //       // Redirect to a success page or show a success message
// // //       navigate("/payment-success");
// // //     } catch (error) {
// // //       console.error("Payment error:", error);
// // //       setError(error.message);
// // //       if (
// // //         error.message.includes("authentication") ||
// // //         error.message.includes("log in")
// // //       ) {
// // //         // Redirect to login page
// // //         navigate("/");
// // //       }
// // //     } finally {
// // //       setProcessing(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className={`flex flex-col min-h-screen ${darkMode ? "dark" : ""}`}>
// // //       <Header handleDarkMode={toggleDarkMode} darkMode={darkMode} />
// // //       <main className="flex-grow bg-gray-100 dark:bg-gray-900 p-6 pt-24 px-16">
// // //         <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
// // //           <form onSubmit={handleSubmit}>
// // //             <div className="mb-4">
// // //               <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // //                 Full Name
// // //               </label>
// // //               <input
// // //                 type="text"
// // //                 name="fullName"
// // //                 value={customerDetails.fullName}
// // //                 onChange={handleCustomerChange}
// // //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // //                 required
// // //               />
// // //             </div>
// // //             <div className="mb-4">
// // //               <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // //                 Phone Number
// // //               </label>
// // //               <input
// // //                 type="tel"
// // //                 name="phone"
// // //                 value={customerDetails.phone}
// // //                 onChange={handleCustomerChange}
// // //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // //                 required
// // //               />
// // //             </div>
// // //             <div className="mb-4">
// // //               <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // //                 Email
// // //               </label>
// // //               <input
// // //                 type="email"
// // //                 name="email"
// // //                 value={customerDetails.email}
// // //                 onChange={handleCustomerChange}
// // //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // //                 required
// // //               />
// // //             </div>
// // //             <div className="mb-4">
// // //               <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // //                 Address
// // //               </label>
// // //               <input
// // //                 type="text"
// // //                 name="address"
// // //                 value={customerDetails.address}
// // //                 onChange={handleCustomerChange}
// // //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // //                 required
// // //               />
// // //             </div>
// // //             <div className="mb-4">
// // //               <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // //                 Card Details
// // //               </label>
// // //               <CardElement
// // //                 options={{
// // //                   style: {
// // //                     base: {
// // //                       fontSize: "16px",
// // //                       color: darkMode ? "#ffffff" : "#424770",
// // //                       "::placeholder": {
// // //                         color: darkMode ? "#aab7c4" : "#aab7c4",
// // //                       },
// // //                     },
// // //                     invalid: {
// // //                       color: "#9e2146",
// // //                     },
// // //                   },
// // //                 }}
// // //               />
// // //             </div>
// // //             {error && <div className="text-red-500 mb-4">{error}</div>}
// // //             <button
// // //               type="submit"
// // //               disabled={!stripe || processing}
// // //               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
// // //             >
// // //               {processing ? "Processing..." : "Pay Now"}
// // //             </button>
// // //           </form>
// // //         </div>
// // //       </main>
// // //       <Footer />
// // //     </div>
// // //   );
// // // };

// // // const Payment = () => (
// // //   <Elements stripe={stripePromise}>
// // //     <PaymentForm />
// // //   </Elements>
// // // );

// // // export default Payment;
// // /////////////////////////////////////////////////////////////////////////
// // // import React, { useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import axios from "axios";
// // // import Header from "../component/Header/Header";
// // // import Footer from "../component/Footer/Footer";
// // // import { useCart } from "../CartContext/CartContext";
// // // import { loadStripe } from "@stripe/stripe-js";
// // // import {
// // //   Elements,
// // //   CardElement,
// // //   useStripe,
// // //   useElements,
// // // } from "@stripe/react-stripe-js";

// // // const stripePromise = loadStripe(
// // //   "pk_test_51Q3Ycn04h0rzqybR8WuN9Eb9HnDUcmGcmkSzhcQ8LIcda1hDOhlRu3t1nYgZh8bQL0QW7dwYSlRka2Y6ljOEnKu000k8RO6FFu"
// // // );

// // // const PaymentForm = () => {
// // //   const [customerDetails, setCustomerDetails] = useState({
// // //     fullName: "",
// // //     phone: "",
// // //     email: "",
// // //     address: "",
// // //   });
// // //   const [darkMode, setDarkMode] = useState(false);
// // //   const { cartItems, clearCart } = useCart();
// // //   const [error, setError] = useState(null);
// // //   const [processing, setProcessing] = useState(false);
// // //   const stripe = useStripe();
// // //   const elements = useElements();
// // //   const navigate = useNavigate();

// // //   const toggleDarkMode = () => setDarkMode(!darkMode);

// // //   const handleCustomerChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setCustomerDetails((prevDetails) => ({
// // //       ...prevDetails,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setProcessing(true);
// // //     setError(null);

// // //     if (!stripe || !elements) {
// // //       setError("Stripe has not loaded. Please try again later.");
// // //       setProcessing(false);
// // //       return;
// // //     }

// // //     const cardElement = elements.getElement(CardElement);

// // //     const { error, paymentMethod } = await stripe.createPaymentMethod({
// // //       type: "card",
// // //       card: cardElement,
// // //     });

// // //     if (error) {
// // //       setError(error.message);
// // //       setProcessing(false);
// // //       return;
// // //     }

// // //     const totalAmount = cartItems.reduce(
// // //       (total, item) => total + item.productId.price * item.quantity,
// // //       0
// // //     );

// // //     try {
// // //       const token = localStorage.getItem("token");
// // //       if (!token) {
// // //         throw new Error("No authentication token found. Please log in.");
// // //       }

// // //       const response = await axios.post(
// // //         "http://localhost:5000/api/payment",
// // //         {
// // //           paymentMethodId: paymentMethod.id,
// // //           amount: Math.round(totalAmount * 100), // Convert to cents
// // //           deliveryInfo: customerDetails,
// // //           cartItems: cartItems.map((item) => ({
// // //             productId: item.productId._id,
// // //             name: item.productId.name,
// // //             quantity: item.quantity,
// // //             price: item.productId.price,
// // //           })),
// // //         },
// // //         {
// // //           headers: {
// // //             "Content-Type": "application/json",
// // //             Authorization: `Bearer ${token}`,
// // //           },
// // //         }
// // //       );

// // //       console.log("Payment successful:", response.data);

// // //       // Clear the cart
// // //       await clearCart();

// // //       // Redirect to a success page or show a success message
// // //       navigate("/payment-success");
// // //     } catch (error) {
// // //       console.error("Payment error:", error);
// // //       setError(
// // //         error.response?.data?.error || error.message || "Payment failed"
// // //       );
// // //       if (
// // //         error.message.includes("authentication") ||
// // //         error.message.includes("log in")
// // //       ) {
// // //         // Redirect to login page
// // //         navigate("/");
// // //       }
// // //     } finally {
// // //       setProcessing(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className={`flex flex-col min-h-screen ${darkMode ? "dark" : ""}`}>
// // //       <Header handleDarkMode={toggleDarkMode} darkMode={darkMode} />
// // //       <main className="flex-grow bg-gray-100 dark:bg-gray-900 p-6 pt-24 px-16">
// // //         <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
// // //           <form onSubmit={handleSubmit}>
// // //             <div className="mb-4">
// // //               <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // //                 Full Name
// // //               </label>
// // //               <input
// // //                 type="text"
// // //                 name="fullName"
// // //                 value={customerDetails.fullName}
// // //                 onChange={handleCustomerChange}
// // //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // //                 required
// // //               />
// // //             </div>
// // //             <div className="mb-4">
// // //               <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // //                 Phone Number
// // //               </label>
// // //               <input
// // //                 type="tel"
// // //                 name="phone"
// // //                 value={customerDetails.phone}
// // //                 onChange={handleCustomerChange}
// // //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // //                 required
// // //               />
// // //             </div>
// // //             <div className="mb-4">
// // //               <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // //                 Email
// // //               </label>
// // //               <input
// // //                 type="email"
// // //                 name="email"
// // //                 value={customerDetails.email}
// // //                 onChange={handleCustomerChange}
// // //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // //                 required
// // //               />
// // //             </div>
// // //             <div className="mb-4">
// // //               <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // //                 Address
// // //               </label>
// // //               <input
// // //                 type="text"
// // //                 name="address"
// // //                 value={customerDetails.address}
// // //                 onChange={handleCustomerChange}
// // //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// // //                 required
// // //               />
// // //             </div>
// // //             <div className="mb-4">
// // //               <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// // //                 Card Details
// // //               </label>
// // //               <CardElement
// // //                 options={{
// // //                   style: {
// // //                     base: {
// // //                       fontSize: "16px",
// // //                       color: darkMode ? "#ffffff" : "#424770",
// // //                       "::placeholder": {
// // //                         color: darkMode ? "#aab7c4" : "#aab7c4",
// // //                       },
// // //                     },
// // //                     invalid: {
// // //                       color: "#9e2146",
// // //                     },
// // //                   },
// // //                 }}
// // //               />
// // //             </div>
// // //             {error && <div className="text-red-500 mb-4">{error}</div>}
// // //             <button
// // //               type="submit"
// // //               disabled={!stripe || processing}
// // //               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
// // //             >
// // //               {processing ? "Processing..." : "Pay Now"}
// // //             </button>
// // //           </form>
// // //         </div>
// // //       </main>
// // //       <Footer />
// // //     </div>
// // //   );
// // // };

// // // const Payment = () => (
// // //   <Elements stripe={stripePromise}>
// // //     <PaymentForm />
// // //   </Elements>
// // // );

// // // export default Payment;
// // /////////////////////////////////////////////
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import Header from "../component/Header/Header";
// // import Footer from "../component/Footer/Footer";
// // import { useCart } from "../CartContext/CartContext";
// // import { loadStripe } from "@stripe/stripe-js";
// // import {
// //   Elements,
// //   CardElement,
// //   useStripe,
// //   useElements,
// // } from "@stripe/react-stripe-js";

// // const stripePromise = loadStripe(
// //   "pk_test_51Q3Ycn04h0rzqybR8WuN9Eb9HnDUcmGcmkSzhcQ8LIcda1hDOhlRu3t1nYgZh8bQL0QW7dwYSlRka2Y6ljOEnKu000k8RO6FFu"
// // );

// // const PaymentForm = () => {
// //   const [customerDetails, setCustomerDetails] = useState({
// //     fullName: "",
// //     phone: "",
// //     email: "",
// //     address: "",
// //   });
// //   const [darkMode, setDarkMode] = useState(false);
// //   const { cartItems, clearCart } = useCart();
// //   const [error, setError] = useState(null);
// //   const [processing, setProcessing] = useState(false);
// //   const stripe = useStripe();
// //   const elements = useElements();
// //   const navigate = useNavigate();

// //   const toggleDarkMode = () => setDarkMode(!darkMode);

// //   const handleCustomerChange = (e) => {
// //     const { name, value } = e.target;
// //     setCustomerDetails((prevDetails) => ({
// //       ...prevDetails,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setProcessing(true);
// //     setError(null);

// //     if (!stripe || !elements) {
// //       setError("Stripe has not loaded. Please try again later.");
// //       setProcessing(false);
// //       return;
// //     }

// //     const cardElement = elements.getElement(CardElement);

// //     try {
// //       const { error, paymentMethod } = await stripe.createPaymentMethod({
// //         type: "card",
// //         card: cardElement,
// //       });

// //       if (error) {
// //         throw error;
// //       }

// //       const totalAmount = cartItems.reduce(
// //         (total, item) => total + item.productId.price * item.quantity,
// //         0
// //       );

// //       const token = localStorage.getItem("token");
// //       if (!token) {
// //         throw new Error("No authentication token found. Please log in.");
// //       }

// //       const response = await axios.post(
// //         "http://localhost:5000/api",
// //         {
// //           paymentMethodId: paymentMethod.id,
// //           amount: Math.round(totalAmount * 100), // Convert to cents
// //           deliveryInfo: customerDetails,
// //           cartItems: cartItems.map((item) => ({
// //             productId: item.productId._id,
// //             name: item.productId.name,
// //             quantity: item.quantity,
// //             price: item.productId.price,
// //           })),
// //         },
// //         {
// //           headers: {
// //             "Content-Type": "application/json",
// //             Authorization: `Bearer ${token}`,
// //           },
// //         }
// //       );

// //       console.log("Payment successful:", response.data);
// //       await clearCart();
// //       navigate("/payment-success");
// //     } catch (error) {
// //       console.error("Payment error:", error);
// //       setError(
// //         error.response?.data?.error || error.message || "Payment failed"
// //       );
// //       if (error.response?.status === 401) {
// //         // Unauthorized, redirect to login
// //         navigate("/");
// //       }
// //     } finally {
// //       setProcessing(false);
// //     }
// //   };

// //   return (
// //     <div className={`flex flex-col min-h-screen ${darkMode ? "dark" : ""}`}>
// //       <Header handleDarkMode={toggleDarkMode} darkMode={darkMode} />
// //       <main className="flex-grow bg-gray-100 dark:bg-gray-900 p-6 pt-24 px-16">
// //         <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
// //           <form onSubmit={handleSubmit}>
// //             <div className="mb-4">
// //               <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// //                 Full Name
// //               </label>
// //               <input
// //                 type="text"
// //                 name="fullName"
// //                 value={customerDetails.fullName}
// //                 onChange={handleCustomerChange}
// //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// //                 required
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// //                 Phone Number
// //               </label>
// //               <input
// //                 type="tel"
// //                 name="phone"
// //                 value={customerDetails.phone}
// //                 onChange={handleCustomerChange}
// //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// //                 required
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// //                 Email
// //               </label>
// //               <input
// //                 type="email"
// //                 name="email"
// //                 value={customerDetails.email}
// //                 onChange={handleCustomerChange}
// //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// //                 required
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// //                 Address
// //               </label>
// //               <input
// //                 type="text"
// //                 name="address"
// //                 value={customerDetails.address}
// //                 onChange={handleCustomerChange}
// //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
// //                 required
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
// //                 Card Details
// //               </label>
// //               <CardElement
// //                 options={{
// //                   style: {
// //                     base: {
// //                       fontSize: "16px",
// //                       color: darkMode ? "#ffffff" : "#424770",
// //                       "::placeholder": {
// //                         color: darkMode ? "#aab7c4" : "#aab7c4",
// //                       },
// //                     },
// //                     invalid: {
// //                       color: "#9e2146",
// //                     },
// //                   },
// //                 }}
// //               />
// //             </div>
// //             {error && <div className="text-red-500 mb-4">{error}</div>}
// //             <button
// //               type="submit"
// //               disabled={!stripe || processing}
// //               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
// //             >
// //               {processing ? "Processing..." : "Pay Now"}
// //             </button>
// //           </form>
// //         </div>
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // };

// // const Payment = () => (
// //   <Elements stripe={stripePromise}>
// //     <PaymentForm />
// //   </Elements>
// // );

// // export default Payment;
// ///////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import { useCart } from '../CartContext/CartContext';
// import { useNavigate } from 'react-router-dom';

// const PaymentForm = () => {
//   const navigate = useNavigate();
//   const { cartItems, clearCart } = useCart();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [deliveryInfo, setDeliveryInfo] = useState({
//     fullName: '',
//     phone: '',
//     email: '',
//     address: ''
//   });

//   // Calculate total
//   const total = cartItems.reduce((sum, item) => {
//     return sum + (item.productId.price * item.quantity);
//   }, 0);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setDeliveryInfo(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const validateForm = () => {
//     if (!deliveryInfo.fullName.trim()) {
//       setError('Full name is required');
//       return false;
//     }
//     if (!deliveryInfo.phone.trim()) {
//       setError('Phone number is required');
//       return false;
//     }
//     if (!deliveryInfo.email.trim()) {
//       setError('Email is required');
//       return false;
//     }
//     if (!deliveryInfo.address.trim()) {
//       setError('Delivery address is required');
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setLoading(true);
//     setError(null);

//     try {
//       // Format cart items for the backend
//       const formattedCartItems = cartItems.map(item => ({
//         productId: item.productId._id,
//         name: item.productId.name,
//         quantity: item.quantity,
//         price: item.productId.price
//       }));

//       // Create payment intent
//       const response = await fetch('http://localhost:5000/api/payments/create-payment-intent', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         },
//         body: JSON.stringify({
//           amount: Math.round(total * 100),
//           deliveryInfo,
//           cartItems: formattedCartItems
//         })
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Payment failed');
//       }

//       const paymentData = await response.json();

//       // Simulate successful payment (in real app, this would be handled by Stripe)
//       const confirmResponse = await fetch('http://localhost:5000/api/payments/confirm-payment', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         },
//         body: JSON.stringify({
//           paymentIntentId: paymentData.clientSecret.split('_secret')[0]
//         })
//       });

//       if (!confirmResponse.ok) {
//         throw new Error('Failed to confirm payment');
//       }

//       // Clear cart after successful payment
//       await clearCart();
      
//       // Navigate to success page
//       navigate('/payment-success');
//     } catch (err) {
//       console.error('Payment Error:', err);
//       setError(err.message || 'An error occurred during payment');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCancel = () => {
//     navigate('/cart');
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
//             Payment Details
//           </h2>
//           <button
//             onClick={handleCancel}
//             className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
//           >
//             ✕
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="space-y-4">
//             {/* Full Name */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 name="fullName"
//                 value={deliveryInfo.fullName}
//                 onChange={handleInputChange}
//                 required
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
//                          focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 
//                          dark:border-gray-600 dark:text-white p-2"
//                 placeholder="John Doe"
//               />
//             </div>

//             {/* Phone */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={deliveryInfo.phone}
//                 onChange={handleInputChange}
//                 required
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
//                          focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 
//                          dark:border-gray-600 dark:text-white p-2"
//                 placeholder="+1 234 567 8900"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={deliveryInfo.email}
//                 onChange={handleInputChange}
//                 required
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
//                          focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 
//                          dark:border-gray-600 dark:text-white p-2"
//                 placeholder="john@example.com"
//               />
//             </div>

//             {/* Address */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
//                 Delivery Address
//               </label>
//               <textarea
//                 name="address"
//                 value={deliveryInfo.address}
//                 onChange={handleInputChange}
//                 required
//                 rows="3"
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
//                          focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 
//                          dark:border-gray-600 dark:text-white p-2"
//                 placeholder="Enter your full delivery address"
//               />
//             </div>

//             {/* Order Summary */}
//             <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
//               <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
//                 Order Summary
//               </h3>
//               <div className="space-y-2">
//                 {cartItems.map((item) => (
//                   <div key={item._id} className="flex justify-between text-sm">
//                     <span>{item.productId.name} x {item.quantity}</span>
//                     <span>${(item.productId.price * item.quantity).toFixed(2)}</span>
//                   </div>
//                 ))}
//                 <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
//                   <div className="flex justify-between font-semibold text-lg">
//                     <span>Total Amount:</span>
//                     <span>${total.toFixed(2)}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Error Message */}
//           {error && (
//             <div className="text-red-600 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded">
//               {error}
//             </div>
//           )}

//           {/* Action Buttons */}
//           <div className="flex justify-end space-x-4">
//             <button
//               type="button"
//               onClick={handleCancel}
//               className="px-4 py-2 text-gray-600 bg-gray-100 rounded hover:bg-gray-200
//                      dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               disabled={loading}
//               className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 
//                      disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
//             >
//               {loading ? (
//                 <>
//                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Processing...
//                 </>
//               ) : (
//                 'Pay Now'
//               )}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PaymentForm;
///////////////////////////////////////////////جديدجديد

import React, { useState, useEffect } from 'react';
import { useCart } from '../CartContext/CartContext';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
  CardElement
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

// Stripe Card Element styles
const cardStyle = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: 'Arial, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#32325d"
      }
    },
    invalid: {
      fontFamily: 'Arial, sans-serif',
      color: "#fa755a",
      iconColor: "#fa755a"
    }
  }
};

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deliveryInfo, setDeliveryInfo] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: ''
  });

  const total = cartItems.reduce((sum, item) => {
    return sum + (item.productId.price * item.quantity);
  }, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!deliveryInfo.fullName.trim()) return 'Full name is required';
    if (!deliveryInfo.phone.trim()) return 'Phone number is required';
    if (!deliveryInfo.email.trim()) return 'Email is required';
    if (!deliveryInfo.address.trim()) return 'Delivery address is required';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const formattedCartItems = cartItems.map(item => ({
        productId: item.productId._id,
        name: item.productId.name,
        quantity: item.quantity,
        price: item.productId.price
      }));

      // Create payment intent
      const response = await fetch('http://localhost:5000/api/payments/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          amount: Math.round(total * 100),
          deliveryInfo,
          cartItems: formattedCartItems
        })
      });

      if (!response.ok) {
        throw new Error('Failed to create payment intent');
      }

      const { clientSecret } = await response.json();

      // Confirm card payment
      const { error: paymentError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: deliveryInfo.fullName,
            email: deliveryInfo.email,
            phone: deliveryInfo.phone,
            address: {
              line1: deliveryInfo.address
            }
          }
        }
      });

      if (paymentError) {
        throw new Error(paymentError.message);
      }

      if (paymentIntent.status === 'succeeded') {
        await clearCart();
        navigate('/payment-success');
      }
    } catch (err) {
      console.error('Payment Error:', err);
      setError(err.message || 'An error occurred during payment');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Payment Details
          </h2>
          <button
            onClick={() => navigate('/cart')}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Delivery Information Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={deliveryInfo.fullName}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                         focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 
                         dark:border-gray-600 dark:text-white p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={deliveryInfo.phone}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                         focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 
                         dark:border-gray-600 dark:text-white p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={deliveryInfo.email}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                         focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 
                         dark:border-gray-600 dark:text-white p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Delivery Address
              </label>
              <textarea
                name="address"
                value={deliveryInfo.address}
                onChange={handleInputChange}
                required
                rows="3"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                         focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 
                         dark:border-gray-600 dark:text-white p-2"
              />
            </div>

            {/* Card Element */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Card Details
              </label>
              <div className="p-3 border rounded-md dark:bg-gray-700">
                <CardElement options={cardStyle} />
              </div>
            </div>

            {/* Order Summary */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Order Summary
              </h3>
              <div className="space-y-2">
                {cartItems.map((item) => (
                  <div key={item._id} className="flex justify-between text-sm">
                    <span>{item.productId.name} x {item.quantity}</span>
                    <span>${(item.productId.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total Amount:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {error && (
            <div className="text-red-600 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded">
              {error}
            </div>
          )}

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate('/cart')}
              className="px-4 py-2 text-gray-600 bg-gray-100 rounded hover:bg-gray-200
                     dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!stripe || loading}
              className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 
                     disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                'Pay Now'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const PaymentForm = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default PaymentForm;