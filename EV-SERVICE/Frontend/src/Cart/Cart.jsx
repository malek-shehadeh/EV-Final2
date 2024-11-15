// ///////////////////////////

// //////////////////////
// //////////////////////////////////
// import React, { useState, useEffect } from "react";
// import Header from "../component/Header/Header";
// import { FaTrash } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import Footer from "../component/Footer/Footer";
// import { useCart } from "../CartContext/CartContext";

// export default function Cart() {
//   const [darkMode, setDarkMode] = useState(false);
//   const toggleDarkMode = () => setDarkMode(!darkMode);
//   const [cartItems, setCartItems] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const { fetchCartItemsCount } = useCart();

//   useEffect(() => {
//     console.log("Fetching cart with token:", localStorage.getItem("token"));
//     fetchCart();
//   }, []);

//   const fetchCart = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch("http://localhost:5000/api/cart", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(
//           `HTTP error! status: ${response.status}, message: ${errorData.message}`
//         );
//       }
//       const data = await response.json();
//       setCartItems(data.items || []);
//       await fetchCartItemsCount();
//     } catch (error) {
//       console.error("Error fetching cart:", error.message);
//       setError(error.message || "Failed to load cart. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleQuantityChange = async (itemId, newQuantity) => {
//     try {
//       const response = await fetch("http://localhost:5000/api/cart/update", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         body: JSON.stringify({
//           productId: itemId,
//           quantity: newQuantity,
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(
//           `HTTP error! status: ${response.status}, message: ${errorData.message}`
//         );
//       }

//       await fetchCart();
//     } catch (error) {
//       console.error("Error updating cart item:", error.message);
//       setError(
//         error.message || "Failed to update cart item. Please try again later."
//       );
//     }
//   };

//   const handleRemoveItem = async (itemId) => {
//     try {
//       const response = await fetch(
//         `http://localhost:5000/api/cart/remove/${itemId}`,
//         {
//           method: "DELETE",
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(
//           `HTTP error! status: ${response.status}, message: ${errorData.message}`
//         );
//       }

//       await fetchCart();
//     } catch (error) {
//       console.error("Error removing cart item:", error.message);
//       setError(
//         error.message || "Failed to remove cart item. Please try again later."
//       );
//     }
//   };

//   const subtotal = cartItems
//     .reduce((total, item) => {
//       const price =
//         item.productId && item.productId.price ? item.productId.price : 0;
//       const quantity = item.quantity || 0;
//       return total + price * quantity;
//     }, 0)
//     .toFixed(2);

//   const deliveryFee = 10.0;
//   const total = (parseFloat(subtotal) + deliveryFee).toFixed(2);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-center justify-center">
//         <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
//           <h2 className="text-2xl font-bold mb-4">Loading...</h2>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-center justify-center">
//         <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
//           <h2 className="text-2xl font-bold mb-4">Error</h2>
//           <p className="text-red-500">{error}</p>
//           <button
//             onClick={fetchCart}
//             className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           >
//             Retry
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className={`${darkMode ? "dark" : ""}`}>
//       <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
//         <Header darkMode={darkMode} handleDarkMode={toggleDarkMode} />

//         <div className="max-w-screen-2xl container mx-auto xl:px-24 pt-28 px-16">
//           <h2 className="text-3xl font-bold leading-snug mb-8">
//             Shopping Cart
//           </h2>

//           <div className="flex flex-col lg:flex-row justify-between">
//             {/* Cart Items */}
//             <div className="flex-1 lg:mr-8 mb-8 lg:mb-0">
//               {cartItems.length === 0 ? (
//                 <p>Your cart is empty.</p>
//               ) : (
//                 cartItems.map((item) => (
//                   <div
//                     key={item._id}
//                     className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-4 flex items-center justify-between"
//                   >
//                     <div className="flex items-center">
//                       <img
//                         src={
//                           item.productId &&
//                           item.productId.images &&
//                           item.productId.images.length > 0
//                             ? `http://localhost:5000/${item.productId.images[0]}`
//                             : "/placeholder-image.jpg"
//                         }
//                         alt={item.productId ? item.productId.name : "Product"}
//                         className="w-24 h-24 object-cover rounded border border-gray-300 dark:border-gray-700 mr-4"
//                       />
//                       <div>
//                         <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
//                           {item.productId
//                             ? item.productId.name
//                             : "Unknown Product"}
//                         </h3>
//                         <div className="flex items-center mt-2">
//                           <span className="mr-2">QTY</span>
//                           <select
//                             className="border border-gray-300 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
//                             value={item.quantity}
//                             onChange={(e) =>
//                               handleQuantityChange(
//                                 item.productId._id,
//                                 parseInt(e.target.value)
//                               )
//                             }
//                           >
//                             {[...Array(10).keys()].map((n) => (
//                               <option key={n + 1} value={n + 1}>
//                                 {n + 1}
//                               </option>
//                             ))}
//                           </select>
//                         </div>
//                         <button
//                           className="mt-2 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex items-center"
//                           onClick={() => handleRemoveItem(item._id)}
//                         >
//                           <FaTrash className="mr-1" /> Remove
//                         </button>
//                       </div>
//                     </div>
//                     <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
//                       $
//                       {(
//                         (item.productId ? item.productId.price : 0) *
//                         item.quantity
//                       ).toFixed(2)}
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>

//             {/* Cart Summary */}
//             <div className="lg:w-1/3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
//               <h3 className="text-xl font-semibold mb-4">Cart Summary</h3>
//               <div className="mb-4">
//                 <label className="block mb-2" htmlFor="promo-code">
//                   Add Promo Code
//                 </label>
//                 <div className="flex">
//                   <input
//                     type="text"
//                     id="promo-code"
//                     className="border border-gray-300 dark:border-gray-700 rounded-l px-4 py-2 w-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
//                     placeholder="Promo code"
//                   />
//                   <button className="bg-orange-500 text-white px-4 py-2 rounded-r hover:bg-orange-600">
//                     Apply
//                   </button>
//                 </div>
//               </div>
//               <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
//                 <div className="flex justify-between mb-2">
//                   <span>Subtotal</span>
//                   <span>${subtotal}</span>
//                 </div>
//                 <div className="flex justify-between mb-2">
//                   <span>Delivery</span>
//                   <span>${deliveryFee.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between text-lg font-semibold">
//                   <span>Total (Incl. VAT)</span>
//                   <span>${total}</span>
//                 </div>
//               </div>
//               <Link to="/payment">
//                 <button className="mt-6 w-full bg-green-500 text-white py-2 rounded hover:bg-green-700">
//                   Go to Secure Checkout
//                 </button>
//               </Link>
//               <div className="mt-4">
//                 <p>We Accept</p>
//                 <div className="flex mt-2 space-x-2">
//                   <img
//                     src="/image/Visa-Logo-700x394.png"
//                     alt="Visa"
//                     className="w-10 h-6 object-contain"
//                   />
//                   <img
//                     src="/image/Mastercard-Logo.png"
//                     alt="MasterCard"
//                     className="w-10 h-6 object-contain"
//                   />
//                   <img
//                     src="/image/PayPal-Logo.png"
//                     alt="paypal"
//                     className="w-10 h-6 object-contain"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <Footer />
//       </div>
//     </div>
//   );
// }
/////////////////////////////////////////////////
import React, { useState, useEffect } from "react";
import Header from "../component/Header/Header";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../component/Footer/Footer";
import { useCart } from "../CartContext/CartContext";

export default function Cart() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { fetchCartItemsCount } = useCart();

  useEffect(() => {
    console.log("Fetching cart with token:", localStorage.getItem("token"));
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/cart", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorData.message}`
        );
      }
      const data = await response.json();
      setCartItems(data.items || []);
      await fetchCartItemsCount();
    } catch (error) {
      console.error("Error fetching cart:", error.message);
      setError(error.message || "Failed to load cart. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleQuantityChange = async (itemId, newQuantity) => {
    try {
      const response = await fetch("http://localhost:5000/api/cart/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          productId: itemId,
          quantity: newQuantity,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorData.message}`
        );
      }

      await fetchCart();
    } catch (error) {
      console.error("Error updating cart item:", error.message);
      setError(
        error.message || "Failed to update cart item. Please try again later."
      );
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/cart/remove/${itemId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorData.message}`
        );
      }

      await fetchCart();
    } catch (error) {
      console.error("Error removing cart item:", error.message);
      setError(
        error.message || "Failed to remove cart item. Please try again later."
      );
    }
  };

  const subtotal = cartItems
    .reduce((total, item) => {
      const price =
        item.productId && item.productId.price ? item.productId.price : 0;
      const quantity = item.quantity || 0;
      return total + price * quantity;
    }, 0)
    .toFixed(2);

  const deliveryFee = 0;
  const total = (parseFloat(subtotal) + deliveryFee).toFixed(2);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-center justify-center">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Loading...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-center justify-center">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Error</h2>
          <p className="text-red-500">{error}</p>
          <button
            onClick={fetchCart}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Header darkMode={darkMode} handleDarkMode={toggleDarkMode} />

        <div className="pt-28 px-5 md:px-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold leading-snug mb-8">
              Shopping Cart
            </h2>

            <div className="flex flex-col lg:flex-row justify-between">
              {/* Cart Items */}
              <div className="flex-1 lg:mr-8 mb-8 lg:mb-0">
                {cartItems.length === 0 ? (
                  <p>Your cart is empty.</p>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={item._id}
                      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-4 flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <img
                          src={
                            item.productId &&
                            item.productId.images &&
                            item.productId.images.length > 0
                              ? `http://localhost:5000/${item.productId.images[0]}`
                              : "/placeholder-image.jpg"
                          }
                          alt={item.productId ? item.productId.name : "Product"}
                          className="w-24 h-24 object-cover rounded border border-gray-300 dark:border-gray-700 mr-4"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            {item.productId
                              ? item.productId.name
                              : "Unknown Product"}
                          </h3>
                          <div className="flex items-center mt-2">
                            <span className="mr-2">QTY</span>
                            <select
                              className="border border-gray-300 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                              value={item.quantity}
                              onChange={(e) =>
                                handleQuantityChange(
                                  item.productId._id,
                                  parseInt(e.target.value)
                                )
                              }
                            >
                              {[...Array(10).keys()].map((n) => (
                                <option key={n + 1} value={n + 1}>
                                  {n + 1}
                                </option>
                              ))}
                            </select>
                          </div>
                          <button
                            className="mt-2 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex items-center"
                            onClick={() => handleRemoveItem(item._id)}
                          >
                            <FaTrash className="mr-1" /> Remove
                          </button>
                        </div>
                      </div>
                      <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        $
                        {(
                          (item.productId ? item.productId.price : 0) *
                          item.quantity
                        ).toFixed(2)}
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Cart Summary */}
              <div className="lg:w-1/3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4">Cart Summary</h3>
                <div className="mb-4">
                  <label className="block mb-2" htmlFor="promo-code">
                    Add Promo Code
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      id="promo-code"
                      className="border border-gray-300 dark:border-gray-700 rounded-l px-4 py-2 w-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      placeholder="Promo code"
                    />
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-r hover:bg-orange-600">
                      Apply
                    </button>
                  </div>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>${subtotal}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    {/* <span>Delivery</span> */}
                    {/* <span>${deliveryFee.toFixed(2)}</span> */}
                  </div>
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total (Incl. VAT)</span>
                    <span>${total}</span>
                  </div>
                </div>
                <Link to="/payment">
                  <button className="mt-6 w-full bg-green-500 text-white py-2 rounded hover:bg-green-700">
                    Go to Secure Checkout
                  </button>
                </Link>
                <div className="mt-4">
                  <p>We Accept</p>
                  <div className="flex mt-2 space-x-2">
                    <img
                      src="/image/Visa-Logo-700x394.png"
                      alt="Visa"
                      className="w-10 h-6 object-contain"
                    />
                    <img
                      src="/image/Mastercard-Logo.png"
                      alt="MasterCard"
                      className="w-10 h-6 object-contain"
                    />
                    <img
                      src="/image/PayPal-Logo.png"
                      alt="paypal"
                      className="w-10 h-6 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
