// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../CartContext/CartContext";

// const PaymentSuccess = () => {
//   const navigate = useNavigate();
//   const { clearCart } = useCart();

//   useEffect(() => {
//     // Clear the cart after successful payment
//     clearCart();

//     // Redirect to home after 5 seconds
//     const timeout = setTimeout(() => {
//       navigate("/");
//     }, 5000);

//     return () => clearTimeout(timeout);
//   }, [clearCart, navigate]);

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
//       <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center max-w-md mx-4">
//         <div className="text-green-500 mb-6">
//           <svg
//             className="w-20 h-20 mx-auto"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M5 13l4 4L19 7"
//             />
//           </svg>
//         </div>

//         <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
//           Payment Successful!
//         </h2>

//         <p className="text-gray-600 dark:text-gray-300 mb-6">
//           Thank you for your purchase. Your order has been processed
//           successfully.
//         </p>

//         <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
//           You will be redirected to the home page in 5 seconds...
//         </p>

//         <button
//           onClick={() => navigate("/")}
//           className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700
//                    transition-colors duration-200"
//         >
//           Return to Home
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PaymentSuccess;
//////////////////////////////////////////////////

import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../CartContext/CartContext";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import { Check, Download, Home, Printer } from "lucide-react";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const [darkMode, setDarkMode] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    clearCart();
    fetchPaymentDetails();

    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timeout);
  }, [clearCart, navigate]);

  const fetchPaymentDetails = async () => {
    try {
      // Assuming the payment ID is passed in the URL or state
      const paymentId = new URLSearchParams(location.search).get("payment_id");
      if (!paymentId) return;

      const response = await fetch(
        `http://localhost:5000/api/payments/${paymentId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setPaymentDetails(data);
      }
    } catch (error) {
      console.error("Error fetching payment details:", error);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header
        darkMode={darkMode}
        handleDarkMode={() => setDarkMode(!darkMode)}
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-28 px-5 md:px-16">
        <div className="mx-auto max-w-6xl">
          {/* Success Message */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <div className="flex flex-col items-center">
              <div className="bg-green-100 dark:bg-green-900/20 rounded-full p-4 mb-6">
                <Check className="w-12 h-12 text-green-500" />
              </div>

              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Payment Successful!
              </h1>

              <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                Thank you for your purchase. Your order has been processed
                successfully.
              </p>

              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                You will be redirected to the home page in 5 seconds...
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() => navigate("/")}
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Home className="w-4 h-4" />
                  Return to Home
                </button>
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  Print Invoice
                </button>
              </div>
            </div>
          </div>

          {/* Invoice Section */}
          {paymentDetails && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 print:shadow-none">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Invoice
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Order #{paymentDetails._id.slice(-6).toUpperCase()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 dark:text-gray-400">Date:</p>
                  <p className="font-medium">
                    {new Date(paymentDetails.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Customer Info */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Bill To:
                  </h3>
                  <div className="text-gray-600 dark:text-gray-400">
                    <p>{paymentDetails.deliveryInfo.fullName}</p>
                    <p>{paymentDetails.deliveryInfo.email}</p>
                    <p>{paymentDetails.deliveryInfo.phone}</p>
                    <p>{paymentDetails.deliveryInfo.address}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Payment Info:
                  </h3>
                  <div className="text-gray-600 dark:text-gray-400">
                    <p>Payment ID: {paymentDetails.stripePaymentIntentId}</p>
                    <p>Status: {paymentDetails.status}</p>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="border dark:border-gray-700 rounded-lg overflow-hidden mb-8">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="text-left p-4">Item</th>
                      <th className="text-right p-4">Quantity</th>
                      <th className="text-right p-4">Price</th>
                      <th className="text-right p-4">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y dark:divide-gray-700">
                    {paymentDetails.cartItems.map((item, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 dark:hover:bg-gray-700/50"
                      >
                        <td className="p-4">
                          <div className="flex items-center gap-4">
                            {item.images && item.images[0] && (
                              <img
                                src={`http://localhost:5000/${item.images[0]}`}
                                alt={item.name}
                                className="w-16 h-16 object-cover rounded-md"
                              />
                            )}
                            <div>
                              <p className="font-medium text-gray-900 dark:text-white">
                                {item.name}
                              </p>
                              {item.shopOwner && (
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                  Seller: {item.shopOwner.name}
                                </p>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="p-4 text-right">{item.quantity}</td>
                        <td className="p-4 text-right">
                          ${item.price.toFixed(2)}
                        </td>
                        <td className="p-4 text-right">
                          ${(item.price * item.quantity).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <td colSpan="3" className="p-4 text-right font-semibold">
                        Total Amount:
                      </td>
                      <td className="p-4 text-right font-semibold">
                        ${paymentDetails.amount.toFixed(2)}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Footer Notes */}
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <p className="mb-2">Thank you for shopping with us!</p>
                <p>
                  For any questions about your order, please contact our
                  customer support.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentSuccess;
