// // ////////////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardContent,
//   CardFooter,
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogClose,
//   DialogActions,
// } from "../component/ui/card";
// import { Button } from "../component/ui/button";
// import { Badge } from "../component/ui/Badge";
// import { Eye } from "lucide-react";

// axios.defaults.baseURL =
//   import.meta.env.VITE_API_URL || "http://localhost:5000";

// const Orders = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [showOrderDetails, setShowOrderDetails] = useState(false);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const token = localStorage.getItem("shopOwnerToken");
//       if (!token) {
//         setError("Authentication token not found");
//         setLoading(false);
//         return;
//       }

//       const response = await axios.get(`/api/orders/shop-orders`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//           "Access-Control-Allow-Origin": "*",
//         },
//       });

//       setOrders(Array.isArray(response.data) ? response.data : []);
//       setLoading(false);
//     } catch (error) {
//       setError(error?.response?.data?.message || "Failed to fetch orders");
//       setLoading(false);
//     }
//   };

//   const handleUpdateStatus = async (orderId, status) => {
//     try {
//       const token = localStorage.getItem("shopOwnerToken");
//       if (!token) {
//         setError("Authentication token not found");
//         return;
//       }

//       const response = await axios.patch(
//         `/api/orders/${orderId}/update-status`,
//         { status },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (response.data && response.data.success) {
//         setOrders((prevOrders) =>
//           prevOrders.map((order) =>
//             order._id === orderId ? { ...order, status } : order
//           )
//         );
//         alert(`Order status updated to "${status}"`);
//       }
//     } catch (error) {
//       alert(error?.response?.data?.message || "Failed to update order status");
//     }
//   };

//   const handleShowOrderDetails = (order) => {
//     setSelectedOrder(order);
//     setShowOrderDetails(true);
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="text-xl text-gray-600">Loading...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-screen flex-col gap-4">
//         <div className="text-xl text-red-600">{error}</div>
//         <Button onClick={fetchOrders}>Retry</Button>
//       </div>
//     );
//   }

//   return (
//     <Card className="p-6 max-w-7xl mx-auto">
//       <CardHeader>
//         <CardTitle>Orders Management</CardTitle>
//         <Button onClick={fetchOrders}>Refresh Orders</Button>
//       </CardHeader>
//       <CardContent>
//         {orders.length === 0 ? (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">No orders found</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {orders.map((order) => (
//               <Card
//                 key={order._id}
//                 className="p-4 cursor-pointer"
//                 onClick={() => handleShowOrderDetails(order)}
//               >
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <p className="text-sm text-gray-500">Order ID</p>
//                     <p className="text-lg font-medium">{order._id}</p>
//                   </div>
//                   <Badge
//                     variant={
//                       order.status === "pending"
//                         ? "yellow"
//                         : order.status === "completed"
//                         ? "green"
//                         : "red"
//                     }
//                   >
//                     {order.status}
//                   </Badge>
//                 </div>
//                 <div className="mt-4">
//                   <p className="text-sm text-gray-500">Customer</p>
//                   <p className="text-gray-900">
//                     {order.deliveryInfo?.fullName || "N/A"}
//                   </p>
//                   <p className="text-gray-500 text-sm">
//                     {order.deliveryInfo?.email || "N/A"}
//                   </p>
//                 </div>
//                 <div className="mt-4 flex justify-between items-end">
//                   <p className="text-lg font-medium text-gray-900">
//                     Total: ${order.amount}
//                   </p>
//                   {order.status !== "completed" && (
//                     <button
//                       className="text-indigo-400 hover:text-indigo-300 mr-2"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         handleUpdateStatus(order._id, "completed");
//                       }}
//                     >
//                       <Eye size={18} />
//                     </button>
//                   )}
//                 </div>
//               </Card>
//             ))}
//           </div>
//         )}
//       </CardContent>
//       <CardFooter className="flex justify-end">
//         <Button onClick={fetchOrders}>Refresh Orders</Button>
//       </CardFooter>

//       {selectedOrder && (
//         <Dialog open={showOrderDetails} onOpenChange={setShowOrderDetails}>
//           <DialogContent>
//             <DialogHeader>
//               <DialogTitle>Order Details</DialogTitle>
//               <DialogClose />
//             </DialogHeader>
//             <DialogDescription>
//               <div className="space-y-4">
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <p className="text-sm text-gray-500">Order ID</p>
//                     <p className="text-lg font-medium">{selectedOrder._id}</p>
//                   </div>
//                   <Badge
//                     variant={
//                       selectedOrder.status === "pending"
//                         ? "yellow"
//                         : selectedOrder.status === "completed"
//                         ? "green"
//                         : "red"
//                     }
//                   >
//                     {selectedOrder.status}
//                   </Badge>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Customer</p>
//                   <p className="text-gray-900">
//                     {selectedOrder.deliveryInfo?.fullName || "N/A"}
//                   </p>
//                   <p className="text-gray-500 text-sm">
//                     {selectedOrder.deliveryInfo?.email || "N/A"}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Items</p>
//                   <div className="space-y-1">
//                     {selectedOrder.cartItems?.map((item, index) => (
//                       <div
//                         key={item._id || index}
//                         className="flex items-center"
//                       >
//                         <img
//                           src={`http://localhost:5000/${item.images[0]}`}
//                           alt={item.name}
//                           className="w-16 h-12 object-cover rounded mr-4"
//                         />
//                         <div>
//                           <p className="text-gray-900">{item.name}</p>
//                           <p className="text-gray-500 text-sm">
//                             {item.quantity} x ${item.price}
//                           </p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-end">
//                   <p className="text-lg font-medium text-gray-900">
//                     Total: ${selectedOrder.amount}
//                   </p>
//                   {selectedOrder.status !== "completed" && (
//                     <Button
//                       onClick={() =>
//                         handleUpdateStatus(selectedOrder._id, "completed")
//                       }
//                       variant="primary"
//                       size="sm"
//                     >
//                       Mark as Completed
//                     </Button>
//                   )}
//                 </div>
//               </div>
//             </DialogDescription>
//           </DialogContent>
//         </Dialog>
//       )}
//     </Card>
//   );
// };

// export default Orders;
// // ///////////////in the top 100%///
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardContent,
//   CardFooter,
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogClose,
//   DialogActions,
// } from "../component/ui/card";
// import { Button } from "../component/ui/button";
// import { Badge } from "../component/ui/Badge";
// import { Eye, ImageOff } from "lucide-react";

// // Set base URL for API requests
// const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
// axios.defaults.baseURL = BASE_URL;

// const Orders = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [showOrderDetails, setShowOrderDetails] = useState(false);
//   const [imageErrors, setImageErrors] = useState({});

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const token = localStorage.getItem("shopOwnerToken");
//       if (!token) {
//         setError("Authentication token not found");
//         setLoading(false);
//         return;
//       }

//       const response = await axios.get(`/api/orders/shop-orders`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//           "Access-Control-Allow-Origin": "*",
//         },
//       });

//       setOrders(Array.isArray(response.data) ? response.data : []);
//       setLoading(false);
//     } catch (error) {
//       setError(error?.response?.data?.message || "Failed to fetch orders");
//       setLoading(false);
//     }
//   };

//   const handleImageError = (itemId) => {
//     setImageErrors((prev) => ({
//       ...prev,
//       [itemId]: true,
//     }));
//   };

//   // Updated function to handle Multer image paths
//   const getImageUrl = (imagePath) => {
//     if (!imagePath) return null;

//     // Handle both absolute and relative paths
//     const cleanPath = imagePath.replace(/^\//, "").replace(/^uploads\//, "");
//     return `${BASE_URL}/uploads/${cleanPath}`;
//   };

//   const handleUpdateStatus = async (orderId, status) => {
//     try {
//       const token = localStorage.getItem("shopOwnerToken");
//       if (!token) {
//         setError("Authentication token not found");
//         return;
//       }

//       const response = await axios.patch(
//         `/api/orders/${orderId}/update-status`,
//         { status },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (response.data && response.data.success) {
//         setOrders((prevOrders) =>
//           prevOrders.map((order) =>
//             order._id === orderId ? { ...order, status } : order
//           )
//         );
//         alert(`Order status updated to "${status}"`);
//         if (selectedOrder?._id === orderId) {
//           setSelectedOrder({ ...selectedOrder, status });
//         }
//       }
//     } catch (error) {
//       alert(error?.response?.data?.message || "Failed to update order status");
//     }
//   };

//   const handleShowOrderDetails = (order) => {
//     setSelectedOrder(order);
//     setShowOrderDetails(true);
//   };

//   const OrderItemImage = ({ item }) => (
//     <div className="relative aspect-square bg-gray-50 rounded-md overflow-hidden">
//       {item.images?.[0] && !imageErrors[item._id] ? (
//         <img
//           src={getImageUrl(item.images[0])}
//           alt={item.name}
//           onError={() => handleImageError(item._id)}
//           className="w-full h-full object-cover"
//         />
//       ) : (
//         <div className="w-full h-full flex items-center justify-center">
//           <ImageOff className="w-6 h-6 text-gray-400" />
//         </div>
//       )}
//     </div>
//   );

//   const OrderCard = ({ order }) => (
//     <Card
//       key={order._id}
//       className="p-4 cursor-pointer hover:shadow-lg transition-shadow"
//       onClick={() => handleShowOrderDetails(order)}
//     >
//       <div className="flex justify-between items-start">
//         <div className="flex-1">
//           <div className="flex justify-between items-center">
//             <p className="text-sm text-gray-500">Order ID</p>
//             <Badge
//               variant={
//                 order.status === "pending"
//                   ? "yellow"
//                   : order.status === "completed"
//                   ? "green"
//                   : "red"
//               }
//             >
//               {order.status}
//             </Badge>
//           </div>
//           <p className="text-sm font-medium truncate">{order._id}</p>
//         </div>
//       </div>

//       <div className="mt-4 grid grid-cols-2 gap-2">
//         {order.cartItems?.slice(0, 2).map((item, index) => (
//           <OrderItemImage key={item._id || index} item={item} />
//         ))}
//       </div>

//       <div className="mt-4">
//         <p className="text-sm text-gray-500">Customer</p>
//         <p className="text-gray-900">{order.deliveryInfo?.fullName || "N/A"}</p>
//         <p className="text-gray-500 text-sm">
//           {order.deliveryInfo?.email || "N/A"}
//         </p>
//       </div>

//       <div className="mt-4 flex justify-between items-end">
//         <p className="text-lg font-medium text-gray-900">
//           Total: ${order.amount}
//         </p>
//         {order.status !== "completed" && (
//           <button
//             className="text-indigo-400 hover:text-indigo-300 mr-2"
//             onClick={(e) => {
//               e.stopPropagation();
//               handleUpdateStatus(order._id, "completed");
//             }}
//           >
//             <Eye size={18} />
//           </button>
//         )}
//       </div>
//     </Card>
//   );

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="text-xl text-gray-600">Loading...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-screen flex-col gap-4">
//         <div className="text-xl text-red-600">{error}</div>
//         <Button onClick={fetchOrders}>Retry</Button>
//       </div>
//     );
//   }

//   return (
//     <Card className="p-6 max-w-7xl mx-auto">
//       <CardHeader>
//         <CardTitle>Orders Management</CardTitle>
//         <Button onClick={fetchOrders}>Refresh Orders</Button>
//       </CardHeader>
//       <CardContent>
//         {orders.length === 0 ? (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">No orders found</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {orders.map((order) => (
//               <OrderCard key={order._id} order={order} />
//             ))}
//           </div>
//         )}
//       </CardContent>
//       <CardFooter className="flex justify-end">
//         <Button onClick={fetchOrders}>Refresh Orders</Button>
//       </CardFooter>

//       {selectedOrder && (
//         <Dialog open={showOrderDetails} onOpenChange={setShowOrderDetails}>
//           <DialogContent className="max-w-2xl">
//             <DialogHeader>
//               <DialogTitle>Order Details</DialogTitle>
//               <DialogClose />
//             </DialogHeader>
//             <DialogDescription>
//               <div className="space-y-4">
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <p className="text-sm text-gray-500">Order ID</p>
//                     <p className="text-lg font-medium">{selectedOrder._id}</p>
//                   </div>
//                   <Badge
//                     variant={
//                       selectedOrder.status === "pending"
//                         ? "yellow"
//                         : selectedOrder.status === "completed"
//                         ? "green"
//                         : "red"
//                     }
//                   >
//                     {selectedOrder.status}
//                   </Badge>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Customer</p>
//                   <p className="text-gray-900">
//                     {selectedOrder.deliveryInfo?.fullName || "N/A"}
//                   </p>
//                   <p className="text-gray-500 text-sm">
//                     {selectedOrder.deliveryInfo?.email || "N/A"}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500 mb-2">Items</p>
//                   <div className="space-y-3">
//                     {selectedOrder.cartItems?.map((item, index) => (
//                       <div
//                         key={item._id || index}
//                         className="flex items-center p-3 bg-gray-50 rounded-lg"
//                       >
//                         <div className="w-24 h-24 relative flex-shrink-0">
//                           <OrderItemImage item={item} />
//                         </div>
//                         <div className="ml-4 flex-1">
//                           <p className="text-gray-900 font-medium">
//                             {item.name}
//                           </p>
//                           <p className="text-gray-500 text-sm">
//                             Quantity: {item.quantity}
//                           </p>
//                           <p className="text-gray-700">Price: ${item.price}</p>
//                           <p className="text-gray-700">
//                             Subtotal: ${item.quantity * item.price}
//                           </p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-end pt-4 border-t">
//                   <p className="text-xl font-medium text-gray-900">
//                     Total: ${selectedOrder.amount}
//                   </p>
//                   {selectedOrder.status !== "completed" && (
//                     <Button
//                       onClick={() =>
//                         handleUpdateStatus(selectedOrder._id, "completed")
//                       }
//                       variant="default"
//                       size="sm"
//                     >
//                       Mark as Completed
//                     </Button>
//                   )}
//                 </div>
//               </div>
//             </DialogDescription>
//           </DialogContent>
//         </Dialog>
//       )}
//     </Card>
//   );
// };

// export default Orders;
/////down 100%///////

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogActions,
} from "../component/ui/card";
import { Button } from "../component/ui/button";
import { Badge } from "../component/ui/Badge";
import { Eye, ImageOff } from "lucide-react";

// Set base URL for API requests
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
axios.defaults.baseURL = BASE_URL;

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [imageErrors, setImageErrors] = useState({});

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("shopOwnerToken");
      if (!token) {
        setError("Authentication token not found");
        setLoading(false);
        return;
      }

      const response = await axios.get(`/api/orders/shop-orders`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });

      setOrders(Array.isArray(response.data) ? response.data : []);
      setLoading(false);
    } catch (error) {
      setError(error?.response?.data?.message || "Failed to fetch orders");
      setLoading(false);
    }
  };

  const handleImageError = (itemId) => {
    setImageErrors((prev) => ({
      ...prev,
      [itemId]: true,
    }));
  };

  // Updated function to handle image paths
  const getImageUrl = (imagePath) => {
    if (!imagePath) return null;

    // Remove leading slash and 'uploads' if present
    const cleanPath = imagePath.replace(/^\//, "").replace(/^uploads\//, "");
    return `${BASE_URL}/${imagePath}`;
  };

  const handleUpdateStatus = async (orderId, status) => {
    try {
      const token = localStorage.getItem("shopOwnerToken");
      if (!token) {
        setError("Authentication token not found");
        return;
      }

      const response = await axios.patch(
        `/api/orders/${orderId}/update-status`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data && response.data.success) {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === orderId ? { ...order, status } : order
          )
        );
        alert(`Order status updated to "${status}"`);
        if (selectedOrder?._id === orderId) {
          setSelectedOrder({ ...selectedOrder, status });
        }
      }
    } catch (error) {
      alert(error?.response?.data?.message || "Failed to update order status");
    }
  };

  const handleShowOrderDetails = (order) => {
    setSelectedOrder(order);
    setShowOrderDetails(true);
  };

  const OrderItemImage = ({ item }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    return (
      <div className="relative aspect-square bg-gray-50 rounded-md overflow-hidden">
        {item.images && item.images.length > 0 && !imageErrors[item._id] ? (
          <img
            src={getImageUrl(item.images[currentImageIndex])}
            alt={item.name}
            onError={() => handleImageError(item._id)}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ImageOff className="w-6 h-6 text-gray-400" />
          </div>
        )}
      </div>
    );
  };

  const OrderCard = ({ order }) => (
    <Card
      key={order._id}
      className="p-4 cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => handleShowOrderDetails(order)}
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">Order ID</p>
            <Badge
              variant={
                order.status === "pending"
                  ? "yellow"
                  : order.status === "completed"
                  ? "green"
                  : "red"
              }
            >
              {order.status}
            </Badge>
          </div>
          <p className="text-sm font-medium truncate">{order._id}</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        {order.cartItems?.slice(0, 2).map((item, index) => (
          <OrderItemImage key={item._id || index} item={item} />
        ))}
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-500">Customer</p>
        <p className="text-gray-900">{order.deliveryInfo?.fullName || "N/A"}</p>
        <p className="text-gray-500 text-sm">
          {order.deliveryInfo?.email || "N/A"}
        </p>
      </div>

      <div className="mt-4 flex justify-between items-end">
        <p className="text-lg font-medium text-gray-900">
          Total: ${order.amount}
        </p>
        {order.status !== "completed" && (
          <button
            className="text-indigo-400 hover:text-indigo-300 mr-2"
            onClick={(e) => {
              e.stopPropagation();
              handleUpdateStatus(order._id, "completed");
            }}
          >
            <Eye size={18} />
          </button>
        )}
      </div>
    </Card>
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen flex-col gap-4">
        <div className="text-xl text-red-600">{error}</div>
        <Button onClick={fetchOrders}>Retry</Button>
      </div>
    );
  }

  return (
    <Card className="p-6 max-w-7xl mx-auto">
      <CardHeader>
        <CardTitle>Orders Management</CardTitle>
        <Button onClick={fetchOrders}>Refresh Orders</Button>
      </CardHeader>
      <CardContent>
        {orders.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No orders found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {orders.map((order) => (
              <OrderCard key={order._id} order={order} />
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={fetchOrders}>Refresh Orders</Button>
      </CardFooter>

      {selectedOrder && (
        <Dialog open={showOrderDetails} onOpenChange={setShowOrderDetails}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Order Details</DialogTitle>
              <DialogClose />
            </DialogHeader>
            <DialogDescription>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Order ID</p>
                    <p className="text-lg font-medium">{selectedOrder._id}</p>
                  </div>
                  <Badge
                    variant={
                      selectedOrder.status === "pending"
                        ? "yellow"
                        : selectedOrder.status === "completed"
                        ? "green"
                        : "red"
                    }
                  >
                    {selectedOrder.status}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Customer</p>
                  <p className="text-gray-900">
                    {selectedOrder.deliveryInfo?.fullName || "N/A"}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {selectedOrder.deliveryInfo?.email || "N/A"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Items</p>
                  <div className="space-y-3">
                    {selectedOrder.cartItems?.map((item, index) => (
                      <div
                        key={item._id || index}
                        className="flex items-center p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="w-24 h-24 relative flex-shrink-0">
                          <OrderItemImage item={item} />
                        </div>
                        <div className="ml-4 flex-1">
                          <p className="text-gray-900 font-medium">
                            {item.name}
                          </p>
                          <p className="text-gray-500 text-sm">
                            Quantity: {item.quantity}
                          </p>
                          <p className="text-gray-700">Price: ${item.price}</p>
                          <p className="text-gray-700">
                            Subtotal: ${item.quantity * item.price}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-end pt-4 border-t">
                  <p className="text-xl font-medium text-gray-900">
                    Total: ${selectedOrder.amount}
                  </p>
                  {selectedOrder.status !== "completed" && (
                    <Button
                      onClick={() =>
                        handleUpdateStatus(selectedOrder._id, "completed")
                      }
                      variant="default"
                      size="sm"
                    >
                      Mark as Completed
                    </Button>
                  )}
                </div>
              </div>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      )}
    </Card>
  );
};

export default Orders;
