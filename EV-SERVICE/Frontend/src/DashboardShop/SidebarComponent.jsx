// /////////////////////////////
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const SidebarComponent = ({ setActivePage }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("shopOwnerToken");
//     navigate("/login");

//   };

//   const isLoggedIn = !!localStorage.getItem("shopOwnerToken");

//   return (
//     <div className="w-64 h-screen bg-gray-100">
//       <div className="p-4">
//         <h2 className="text-xl font-bold mb-4">Car Parts Admin</h2>
//         <nav>
//           <button
//             className="w-full text-left p-2 mb-2 hover:bg-gray-200"
//             onClick={() => setActivePage("add")}
//           >
//             Add Product
//           </button>
//           <button
//             className="w-full text-left p-2 mb-2 hover:bg-gray-200"
//             onClick={() => setActivePage("list")}
//           >
//             Product List
//           </button>
//           <button
//             className="w-full text-left p-2 mb-2 hover:bg-gray-200"
//             onClick={() => setActivePage("orders")} // تغيير هنا
//           >
//             Orders
//           </button>
//           <button
//             className="w-full text-left p-2 mb-2 hover:bg-gray-200"
//             onClick={() => setActivePage("profile")}
//           >
//             Shop Owner Profile
//           </button>
//           {isLoggedIn && (
//             <button
//               className="w-full text-left p-2 mt-4 flex items-center hover:bg-gray-200"
//               onClick={handleLogout}
//             >
//               Logout
//             </button>
//           )}
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default SidebarComponent;
// ///////////////////in the top 100%
// /////////////
// /////////////////////////////////////////////////////
// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import {
//   Menu,
//   ShoppingBag,
//   Package,
//   ShoppingCart,
//   User,
//   LogOut,
//   Plus,
// } from "lucide-react";
// import { AnimatePresence, motion } from "framer-motion";

// const SIDEBAR_ITEMS = [
//   {
//     name: "Add Product",
//     icon: Plus,
//     color: "#6366f1",
//     action: "add",
//     href: "/addproduct",
//   },
//   {
//     name: "Product List",
//     icon: Package,
//     color: "#8B5CF6",
//     action: "list",
//     href: "/products",
//   },
//   {
//     name: "Orders",
//     icon: ShoppingCart,
//     color: "#F59E0B",
//     action: "orders",
//     href: "/orders",
//   },
//   {
//     name: "Shop Owner Profile",
//     icon: User,
//     color: "#EC4899",
//     action: "profile",
//     href: "/profile",
//   },
// ];

// const SidebarComponent = ({ setActivePage }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const navigate = useNavigate();
//   const isLoggedIn = !!localStorage.getItem("shopOwnerToken");

//   const handleLogout = () => {
//     localStorage.removeItem("shopOwnerToken");
//     navigate("/login");
//   };

//   return (
//     <>
//       {/* Spacer div to prevent content from being hidden behind fixed sidebar */}
//       <div className={`flex-shrink-0 ${isSidebarOpen ? "w-64" : "w-20"}`} />

//       <motion.div
//         className={`fixed left-0 top-0 z-10 h-full transition-all duration-300 ease-in-out`}
//         animate={{ width: isSidebarOpen ? 256 : 80 }}
//       >
//         <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
//           <div className="flex items-center justify-between mb-8">
//             <motion.h2
//               className={`text-xl font-bold text-white ${
//                 !isSidebarOpen && "hidden"
//               }`}
//             >
//               Car Parts Admin
//             </motion.h2>
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//               className="p-2 rounded-full hover:bg-gray-700 transition-colors"
//             >
//               <Menu size={24} className="text-white" />
//             </motion.button>
//           </div>

//           <nav className="flex-grow">
//             {SIDEBAR_ITEMS.map((item) => (
//               <Link
//                 key={item.action}
//                 to={item.href}
//                 className="block text-white no-underline"
//                 onClick={() => setActivePage(item.action)}
//               >
//                 <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2 cursor-pointer">
//                   <item.icon
//                     size={20}
//                     style={{ color: item.color, minWidth: "20px" }}
//                   />
//                   <AnimatePresence>
//                     {isSidebarOpen && (
//                       <motion.span
//                         className="ml-4 whitespace-nowrap text-white"
//                         initial={{ opacity: 0, width: 0 }}
//                         animate={{ opacity: 1, width: "auto" }}
//                         exit={{ opacity: 0, width: 0 }}
//                         transition={{ duration: 0.2, delay: 0.1 }}
//                       >
//                         {item.name}
//                       </motion.span>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               </Link>
//             ))}

//             {isLoggedIn && (
//               <motion.div
//                 className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2 cursor-pointer mt-auto"
//                 onClick={handleLogout}
//               >
//                 <LogOut
//                   size={20}
//                   style={{ color: "#6EE7B7", minWidth: "20px" }}
//                 />
//                 <AnimatePresence>
//                   {isSidebarOpen && (
//                     <motion.span
//                       className="ml-4 whitespace-nowrap text-white"
//                       initial={{ opacity: 0, width: 0 }}
//                       animate={{ opacity: 1, width: "auto" }}
//                       exit={{ opacity: 0, width: 0 }}
//                       transition={{ duration: 0.2, delay: 0.1 }}
//                     >
//                       Logout
//                     </motion.span>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             )}
//           </nav>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default SidebarComponent;
/////////////////////////////////////////////////////////////////////

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Menu,
  ShoppingBag,
  Package,
  ShoppingCart,
  User,
  LogOut,
  Plus,
  BoxIcon,
  Store,
  ClipboardList,
  UserCircle,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const SIDEBAR_ITEMS = [
  {
    name: "Add Product",
    icon: Plus,
    color: "#dcfce7", // green-100
    bgColor: "bg-green-800",
    action: "add",
    href: "/addproduct",
  },
  {
    name: "Product List",
    icon: Store,
    color: "#bbf7d0", // green-200
    bgColor: "bg-green-800",
    action: "list",
    href: "/products",
  },
  {
    name: "Orders",
    icon: ClipboardList,
    color: "#86efac", // green-300
    bgColor: "bg-green-800",
    action: "orders",
    href: "/orders",
  },
  {
    name: "Shop Owner Profile",
    icon: UserCircle,
    color: "#4ade80", // green-400
    bgColor: "bg-green-800",
    action: "profile",
    href: "/profile",
  },
];

const SidebarComponent = ({ setActivePage }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("shopOwnerToken");

  const handleLogout = () => {
    localStorage.removeItem("shopOwnerToken");
    navigate("/login");
  };

  return (
    <>
      <div className={`flex-shrink-0 ${isSidebarOpen ? "w-64" : "w-20"}`} />

      <motion.div
        className={`fixed left-0 top-0 z-10 h-full transition-all duration-300 ease-in-out`}
        animate={{ width: isSidebarOpen ? 256 : 80 }}
      >
        <div className="h-full bg-green-800 bg-opacity-95 backdrop-blur-md p-4 flex flex-col border-r border-green-700">
          <div className="flex items-center justify-between mb-8">
            <motion.h2
              className={`text-xl font-bold text-green-50 ${
                !isSidebarOpen && "hidden"
              }`}
            >
              Car Parts Admin
            </motion.h2>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <Menu size={24} className="text-green-50" />
            </motion.button>
          </div>

          <nav className="flex-grow">
            {SIDEBAR_ITEMS.map((item) => (
              <Link
                key={item.action}
                to={item.href}
                className="block text-green-50 no-underline"
                onClick={() => setActivePage(item.action)}
              >
                <motion.div className="flex items-center p-3 text-sm font-medium rounded-lg hover:bg-green-700 transition-colors mb-2 cursor-pointer">
                  <div
                    className={`p-2 rounded-lg ${item.bgColor} bg-opacity-30`}
                  >
                    <item.icon
                      size={20}
                      strokeWidth={2.5}
                      style={{
                        color: item.color,
                        minWidth: "20px",
                      }}
                    />
                  </div>
                  <AnimatePresence>
                    {isSidebarOpen && (
                      <motion.span
                        className="ml-3 whitespace-nowrap text-green-50"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Link>
            ))}

            {isLoggedIn && (
              <motion.div
                className="flex items-center p-3 text-sm font-medium rounded-lg hover:bg-green-700 transition-colors mb-2 cursor-pointer mt-auto"
                onClick={handleLogout}
              >
                <div className="p-2 rounded-lg bg-green-800 bg-opacity-30">
                  <LogOut
                    size={20}
                    strokeWidth={2.5}
                    style={{
                      color: "#dcfce7", // green-100
                      minWidth: "20px",
                    }}
                  />
                </div>
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-3 whitespace-nowrap text-green-50"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    >
                      Logout
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </nav>
        </div>
      </motion.div>
    </>
  );
};

export default SidebarComponent;
