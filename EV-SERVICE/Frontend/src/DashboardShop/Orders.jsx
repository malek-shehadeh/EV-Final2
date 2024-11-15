// // // // /////down 100%///////

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

//   // Updated function to handle image paths
//   const getImageUrl = (imagePath) => {
//     if (!imagePath) return null;

//     // Remove leading slash and 'uploads' if present
//     const cleanPath = imagePath.replace(/^\//, "").replace(/^uploads\//, "");
//     return `${BASE_URL}/${imagePath}`;
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

//   const OrderItemImage = ({ item }) => {
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);

//     return (
//       <div className="relative aspect-square bg-gray-50 rounded-md overflow-hidden">
//         {item.images && item.images.length > 0 && !imageErrors[item._id] ? (
//           <img
//             src={getImageUrl(item.images[currentImageIndex])}
//             alt={item.name}
//             onError={() => handleImageError(item._id)}
//             className="w-full h-full object-cover"
//           />
//         ) : (
//           <div className="w-full h-full flex items-center justify-center">
//             <ImageOff className="w-6 h-6 text-gray-400" />
//           </div>
//         )}
//       </div>
//     );
//   };

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
// // // ////////////////////////////////////////////

////////////////////////////////////

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../component/ui/card";
import { Button } from "../component/ui/button";
import { Badge } from "../component/ui/Badge";
import { Eye, ChevronLeft, ChevronRight, X, Search } from "lucide-react";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
axios.defaults.baseURL = BASE_URL;

const StatusBadge = ({ status }) => {
  const variants = {
    pending: {
      bg: "bg-yellow-100",
      text: "text-yellow-800",
      border: "border-yellow-200",
    },
    completed: {
      bg: "bg-green-100",
      text: "text-green-800",
      border: "border-green-200",
    },
    failed: {
      bg: "bg-red-100",
      text: "text-red-800",
      border: "border-red-200",
    },
  };

  const style = variants[status] || variants.pending;

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${style.bg} ${style.text} ${style.border}`}
    >
      {status}
    </span>
  );
};
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showImagePopup, setShowImagePopup] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(8);

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
      }
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  const handleShowImages = (order) => {
    const itemsWithImages = order.cartItems?.filter(
      (item) => item.images && item.images.length > 0
    );

    if (itemsWithImages && itemsWithImages.length > 0) {
      setCurrentItems(itemsWithImages);
      setCurrentImages(itemsWithImages.map((item) => item.images[0]));
      setCurrentImageIndex(0);
      setShowImagePopup(true);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    setCurrentPage(1);
  };

  const filteredOrders = orders.filter((order) => {
    const searchString = searchTerm.toLowerCase();
    return (
      order.deliveryInfo?.fullName?.toLowerCase().includes(searchString) ||
      order.deliveryInfo?.email?.toLowerCase().includes(searchString) ||
      order._id.toLowerCase().includes(searchString) ||
      order.cartItems.some((item) =>
        item.name?.toLowerCase().includes(searchString)
      )
    );
  });

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
              src={`${BASE_URL}/${currentImages[currentImageIndex]}`}
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

  const OrderCard = ({ order }) => {
    const imageCount = order.cartItems?.reduce((count, item) => {
      return count + (Array.isArray(item.images) ? item.images.length : 0);
    }, 0);

    return (
      <Card className="p-4 hover:shadow-lg transition-shadow">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex justify-between items-center">
              {/* <p className="text-sm text-gray-500">Order ID</p> */}
              <StatusBadge status={order.status} />
            </div>
            {/* <p className="text-sm font-medium truncate">{order._id}</p> */}
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray-500">Customer</p>
          <p className="text-gray-900">
            {order.deliveryInfo?.fullName || "N/A"}
          </p>
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
              className="text-green-500 hover:text-green-600 mr-2"
              onClick={(e) => {
                e.stopPropagation();
                handleUpdateStatus(order._id, "completed");
              }}
            >
              <Eye size={18} />
            </button>
          )}
        </div>

        {imageCount > 0 && (
          <button
            onClick={() => handleShowImages(order)}
            className="mt-4 w-full py-2 text-blue-600 hover:text-blue-800 font-medium text-sm"
          >
            View {imageCount} {imageCount === 1 ? "Image" : "Images"}
          </button>
        )}
      </Card>
    );
  };

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
    <div className="min-h-screen bg-green-100 p-3 sm:p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-green-900">
            Orders Management
          </h1>
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search orders..."
              className="w-full sm:w-64 bg-white text-green-700 placeholder-green-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              onChange={handleSearch}
              value={searchTerm}
            />
            <Search
              className="absolute left-3 top-2.5 text-green-400"
              size={18}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {currentOrders.map((order) => (
            <Card
              key={order._id}
              className="bg-green-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      {/* <p className="text-sm text-green-700">Order ID</p> */}
                      <StatusBadge status={order.status} />
                    </div>
                    {/* <p className="text-sm font-medium text-green-900 truncate">
                      {order._id}
                    </p> */}
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-sm text-green-700">Customer</p>
                  <p className="text-green-900">
                    {order.deliveryInfo?.fullName || "N/A"}
                  </p>
                  <p className="text-sm text-green-600">
                    {order.deliveryInfo?.email || "N/A"}
                  </p>
                </div>

                <div className="mt-4 flex justify-between items-end">
                  <p className="text-lg font-medium text-green-900">
                    Total: ${order.amount}
                  </p>
                  {order.status !== "completed" && (
                    <button
                      className="text-green-900 hover:text-green-700 p-1.5 sm:p-2 rounded-full bg-green-200 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleUpdateStatus(order._id, "completed");
                      }}
                    >
                      <Eye size={18} />
                    </button>
                  )}
                </div>

                {order.cartItems?.length > 0 && (
                  <button
                    onClick={() => handleShowImages(order)}
                    className="mt-4 w-full py-2 text-sm font-semibold text-green-900 hover:text-green-700 bg-green-200 rounded-lg transition-colors"
                  >
                    View Images (
                    {order.cartItems.reduce(
                      (count, item) =>
                        count +
                        (Array.isArray(item.images) ? item.images.length : 0),
                      0
                    )}
                    )
                  </button>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2">
          {Array.from({
            length: Math.ceil(filteredOrders.length / ordersPerPage),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-2 sm:px-3 py-1 rounded text-sm sm:text-base ${
                currentPage === index + 1
                  ? "bg-green-500 text-white"
                  : "bg-white text-green-700 hover:bg-green-300"
              } transition-colors`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Image Popup with green theme */}
        {showImagePopup && (
          <div className="fixed inset-0 z-50 bg-green-900 bg-opacity-75 flex items-center justify-center">
            <div className="relative max-w-4xl w-full mx-4 bg-green-100 rounded-lg overflow-hidden">
              <button
                onClick={() => setShowImagePopup(false)}
                className="absolute top-4 right-4 text-green-900 hover:text-green-700 z-50 p-2 bg-green-200 rounded-full"
              >
                <X size={24} />
              </button>

              <div className="relative">
                <img
                  src={`${BASE_URL}/${currentImages[currentImageIndex]}`}
                  alt={`Product ${currentImageIndex + 1}`}
                  className="w-full h-auto object-contain max-h-[60vh]"
                />

                {currentImages.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex((prev) =>
                          prev === 0 ? currentImages.length - 1 : prev - 1
                        );
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-green-800 bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-opacity"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex((prev) =>
                          prev === currentImages.length - 1 ? 0 : prev + 1
                        );
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-800 bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-opacity"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              <div className="p-4 bg-green-50">
                <h3 className="text-lg font-semibold text-green-900">
                  {currentItems[currentImageIndex]?.name}
                </h3>
                <p className="text-green-700">
                  Quantity: {currentItems[currentImageIndex]?.quantity}
                </p>
                <p className="text-green-700">
                  Price: ${currentItems[currentImageIndex]?.price}
                </p>
                <p className="text-green-700">
                  Subtotal: $
                  {(
                    currentItems[currentImageIndex]?.quantity *
                    currentItems[currentImageIndex]?.price
                  ).toFixed(2)}
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
                          ? "bg-green-600"
                          : "bg-green-300 hover:bg-green-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
