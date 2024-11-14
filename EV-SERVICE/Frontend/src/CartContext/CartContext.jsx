// import React, { createContext, useState, useContext, useEffect } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItemsCount, setCartItemsCount] = useState(0);

//   const fetchCartItemsCount = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/cart");
//       if (response.ok) {
//         const data = await response.json();
//         const totalCount = data.items.reduce(
//           (total, item) => total + item.quantity,
//           0
//         );
//         setCartItemsCount(totalCount);
//       }
//     } catch (error) {
//       console.error("Error fetching cart items count:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCartItemsCount();
//   }, []);

//   return (
//     <CartContext.Provider value={{ cartItemsCount, fetchCartItemsCount }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
//////////////////////

// import React, { createContext, useContext, useState, useEffect } from "react";

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//   const [cartItemsCount, setCartItemsCount] = useState(0);

//   const fetchCartItemsCount = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.log("No token found in localStorage");
//         return;
//       }

//       const response = await fetch("http://localhost:5000/api/cart", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) {
//         if (response.status === 401) {
//           console.log("Unauthorized access. Token may be invalid or expired.");
//           // Optionally, you can clear the token and redirect to login
//           // localStorage.removeItem('token');
//           // window.location.href = '/login';
//         }
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       const count = data.items.reduce(
//         (total, item) => total + item.quantity,
//         0
//       );
//       setCartItemsCount(count);
//     } catch (error) {
//       console.error("Error fetching cart items count:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCartItemsCount();
//   }, []);

//   return (
//     <CartContext.Provider value={{ cartItemsCount, fetchCartItemsCount }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
// // ////////////////////
// import React, { createContext, useContext, useState, useEffect } from "react";

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//   const [cartItemsCount, setCartItemsCount] = useState(0);

//   const fetchCartItemsCount = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.log("No token found in localStorage");
//         return;
//       }
//       const response = await fetch("http://localhost:5000/api/cart", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       if (!response.ok) {
//         if (response.status === 401) {
//           console.log("Unauthorized access. Token may be invalid or expired.");
//           // Optionally, you can clear the token and redirect to login
//           // localStorage.removeItem('token');
//           // window.location.href = '/login';
//         }
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       const count = data.items.reduce(
//         (total, item) => total + item.quantity,
//         0
//       );
//       setCartItemsCount(count);
//     } catch (error) {
//       console.error("Error fetching cart items count:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCartItemsCount();
//   }, []);

//   return (
//     <CartContext.Provider value={{ cartItemsCount, fetchCartItemsCount }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;
// ///////////////////////////////////////////

///////////////ok up////////////////////////
/////////////////////////////////////

// import React, { createContext, useContext, useState, useEffect } from "react";

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [cartItemsCount, setCartItemsCount] = useState(0);

//   const fetchCart = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.log("No token found in localStorage");
//         return;
//       }
//       const response = await fetch("http://localhost:5000/api/cart", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       if (!response.ok) {
//         if (response.status === 401) {
//           console.log("Unauthorized access. Token may be invalid or expired.");
//           // Optionally, you can clear the token and redirect to login
//           // localStorage.removeItem('token');
//           // window.location.href = '/login';
//         }
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       setCartItems(data.items);
//       const count = data.items.reduce(
//         (total, item) => total + item.quantity,
//         0
//       );
//       setCartItemsCount(count);
//     } catch (error) {
//       console.error("Error fetching cart:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   const addToCart = async (productId, quantity = 1) => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.log("No token found in localStorage");
//         return;
//       }
//       const response = await fetch("http://localhost:5000/api/cart/add", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ productId, quantity }),
//       });
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       await fetchCart(); // Refresh the cart after adding an item
//     } catch (error) {
//       console.error("Error adding item to cart:", error);
//     }
//   };

//   const removeFromCart = async (productId) => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.log("No token found in localStorage");
//         return;
//       }
//       const response = await fetch(
//         `http://localhost:5000/api/cart/remove/${productId}`,
//         {
//           method: "DELETE",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       await fetchCart(); // Refresh the cart after removing an item
//     } catch (error) {
//       console.error("Error removing item from cart:", error);
//     }
//   };

//   const clearCart = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.log("No token found in localStorage");
//         return;
//       }
//       const response = await fetch("http://localhost:5000/api/cart/clear", {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       setCartItems([]);
//       setCartItemsCount(0);
//     } catch (error) {
//       console.error("Error clearing cart:", error);
//     }
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         cartItemsCount,
//         fetchCart,
//         addToCart,
//         removeFromCart,
//         clearCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;
////////////////////////////////////////////
// ///////////////////////////////
// import React, { createContext, useContext, useState, useEffect } from "react";

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [cartItemsCount, setCartItemsCount] = useState(0);

//   const fetchCart = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.log("No token found in localStorage");
//         return;
//       }
//       const response = await fetch("http://localhost:5000/api/cart", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       if (!response.ok) {
//         if (response.status === 401) {
//           console.log("Unauthorized access. Token may be invalid or expired.");
//         }
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       setCartItems(data.items);
//       const count = data.items.reduce(
//         (total, item) => total + item.quantity,
//         0
//       );
//       setCartItemsCount(count);
//     } catch (error) {
//       console.error("Error fetching cart:", error);
//     }
//   };

//   const fetchCartItemsCount = async () => {
//     await fetchCart(); // This will update both cartItems and cartItemsCount
//   };

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   const addToCart = async (productId, quantity = 1) => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.log("No token found in localStorage");
//         return;
//       }
//       const response = await fetch("http://localhost:5000/api/cart/add", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ productId, quantity }),
//       });
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       await fetchCart();
//     } catch (error) {
//       console.error("Error adding item to cart:", error);
//     }
//   };

//   const removeFromCart = async (productId) => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.log("No token found in localStorage");
//         return;
//       }
//       const response = await fetch(
//         `http://localhost:5000/api/cart/remove/${productId}`,
//         {
//           method: "DELETE",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       await fetchCart();
//     } catch (error) {
//       console.error("Error removing item from cart:", error);
//     }
//   };

//   const clearCart = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.log("No token found in localStorage");
//         return;
//       }
//       const response = await fetch("http://localhost:5000/api/cart/clear", {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       setCartItems([]);
//       setCartItemsCount(0);
//     } catch (error) {
//       console.error("Error clearing cart:", error);
//     }
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         cartItemsCount,
//         addToCart,
//         removeFromCart,
//         clearCart,
//         fetchCart,
//         fetchCartItemsCount,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;
// ///////////////////////////////////////////////////////////////////////////////////جدييييد
// import React, { createContext, useContext, useState, useEffect } from "react";

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [cartItemsCount, setCartItemsCount] = useState(0);

//   const fetchCart = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.log("No token found in localStorage");
//         return;
//       }
//       const response = await fetch("http://localhost:5000/api/cart", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       if (!response.ok) {
//         if (response.status === 401) {
//           console.log("Unauthorized access. Token may be invalid or expired.");
//         }
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       setCartItems(data.items || []); // Ensure items is always an array
//       const count = (data.items || []).reduce(
//         (total, item) => total + (item.quantity || 0),
//         0
//       );
//       setCartItemsCount(count);
//     } catch (error) {
//       console.error("Error fetching cart:", error);
//       setCartItems([]);
//       setCartItemsCount(0);
//     }
//   };

//   const fetchCartItemsCount = async () => {
//     await fetchCart();
//   };

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   const addToCart = async (productId, quantity = 1) => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.log("No token found in localStorage");
//         return;
//       }
//       const response = await fetch("http://localhost:5000/api/cart/add", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ productId, quantity }),
//       });
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       await fetchCart();
//       return true; // Return success
//     } catch (error) {
//       console.error("Error adding item to cart:", error);
//       return false; // Return failure
//     }
//   };

//   const removeFromCart = async (productId) => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.log("No token found in localStorage");
//         return false;
//       }
//       const response = await fetch(
//         `http://localhost:5000/api/cart/remove/${productId}`,
//         {
//           method: "DELETE",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       await fetchCart();
//       return true;
//     } catch (error) {
//       console.error("Error removing item from cart:", error);
//       return false;
//     }
//   };

//   const clearCart = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.log("No token found in localStorage");
//         return false;
//       }
//       const response = await fetch("http://localhost:5000/api/cart/clear", {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       setCartItems([]);
//       setCartItemsCount(0);
//       return true;
//     } catch (error) {
//       console.error("Error clearing cart:", error);
//       return false;
//     }
//   };

//   const updateCartItem = async (productId, quantity) => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.log("No token found in localStorage");
//         return false;
//       }
//       const response = await fetch("http://localhost:5000/api/cart/update", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ productId, quantity }),
//       });
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       await fetchCart();
//       return true;
//     } catch (error) {
//       console.error("Error updating cart item:", error);
//       return false;
//     }
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         cartItemsCount,
//         addToCart,
//         removeFromCart,
//         clearCart,
//         fetchCart,
//         fetchCartItemsCount,
//         updateCartItem,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;
///////////////////////////////////////////////////////////////////////////////////

import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("No token found in localStorage");
        return;
      }
      const response = await fetch("http://localhost:5000/api/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCartItems(data.items || []);
      const count = (data.items || []).reduce(
        (total, item) => total + (item.quantity || 0),
        0
      );
      setCartItemsCount(count);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const fetchCartItemsCount = async () => {
    await fetchCart();
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const addToCart = async (productId, quantity = 1) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("No token found in localStorage");
        return;
      }
      const response = await fetch("http://localhost:5000/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId, quantity }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      await fetchCart();
    } catch (error) {
      console.error("Error adding item to cart:", error);
      throw error;
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("No token found in localStorage");
        return;
      }
      const response = await fetch(
        `http://localhost:5000/api/cart/remove/${productId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      await fetchCart();
    } catch (error) {
      console.error("Error removing item from cart:", error);
      throw error;
    }
  };

  const clearCart = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("No token found in localStorage");
        return;
      }

      const response = await fetch("http://localhost:5000/api/cart/clear", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to clear cart');
      }

      setCartItems([]);
      setCartItemsCount(0);
    } catch (error) {
      console.error("Error clearing cart:", error);
      throw error;
    }
  };

  const updateCartItem = async (productId, quantity) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("No token found in localStorage");
        return;
      }
      const response = await fetch("http://localhost:5000/api/cart/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId, quantity }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      await fetchCart();
    } catch (error) {
      console.error("Error updating cart item:", error);
      throw error;
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartItemsCount,
        addToCart,
        removeFromCart,
        clearCart,
        fetchCart,
        fetchCartItemsCount,
        updateCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;