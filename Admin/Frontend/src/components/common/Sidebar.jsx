// import {
//   BarChart2,
//   Contact,
//   DollarSign,
//   LogOut,
//   Menu,
//   Settings,
//   ShoppingBag,
//   ShoppingCart,
//   TrendingUp,
//   User,
//   Users,
// } from "lucide-react";
// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const SIDEBAR_ITEMS = [
//   {
//     name: "Overview",
//     icon: BarChart2,
//     color: "#6366f1",
//     href: "/",
//   },
//   { name: "Products", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
//   { name: "Users", icon: User, color: "#EC4899", href: "/users" },
//   {
//     name: "Shop Owner Users",
//     icon: Users,
//     color: "#EC4899",
//     href: "/ShopOwner",
//   },
//   // { name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales" },
//   { name: "Contact", icon: Contact, color: "#10B981", href: "/Contact" },
//   { name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
//   { name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
//   { name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
//   { name: "LogOut", icon: LogOut, color: "#6EE7B7", href: "/login" },
// ];

// const Sidebar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <motion.div
//       className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
//         isSidebarOpen ? "w-64" : "w-20"
//       }`}
//       animate={{ width: isSidebarOpen ? 256 : 80 }}
//     >
//       <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//           className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
//         >
//           <Menu size={24} />
//         </motion.button>

//         <nav className="mt-8 flex-grow">
//           {SIDEBAR_ITEMS.map((item) => (
//             <Link key={item.href} to={item.href}>
//               <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
//                 <item.icon
//                   size={20}
//                   style={{ color: item.color, minWidth: "20px" }}
//                 />
//                 <AnimatePresence>
//                   {isSidebarOpen && (
//                     <motion.span
//                       className="ml-4 whitespace-nowrap"
//                       initial={{ opacity: 0, width: 0 }}
//                       animate={{ opacity: 1, width: "auto" }}
//                       exit={{ opacity: 0, width: 0 }}
//                       transition={{ duration: 0.2, delay: 0.3 }}
//                     >
//                       {item.name}
//                     </motion.span>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             </Link>
//           ))}
//         </nav>
//       </div>
//     </motion.div>
//   );
// };
// export default Sidebar;
// /////////////////////////////////////////

// import {
//   BarChart2,
//   Contact,
//   DollarSign,
//   LogOut,
//   Menu,
//   Settings,
//   ShoppingBag,
//   ShoppingCart,
//   TrendingUp,
//   User,
//   Users,
// } from "lucide-react";
// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Link, useNavigate } from "react-router-dom";

// const SIDEBAR_ITEMS = [
//   {
//     name: "Overview",
//     icon: BarChart2,
//     color: "#6366f1",
//     href: "/",
//   },
//   { name: "Products", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
//   { name: "Users", icon: User, color: "#EC4899", href: "/users" },
//   {
//     name: "Shop Owner Users",
//     icon: Users,
//     color: "#EC4899",
//     href: "/ShopOwner",
//   },
//   { name: "Contact", icon: Contact, color: "#10B981", href: "/Contact" },
//   { name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
//   { name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
//   { name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
// ];

// const Sidebar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const navigate = useNavigate(); // استخدام useNavigate

//   // وظيفة تسجيل الخروج
//   const handleLogout = () => {
//     localStorage.removeItem("AdminToken"); // مسح التوكن
//     navigate("/login"); // النقل إلى صفحة تسجيل الدخول
//   };

//   return (
//     <motion.div
//       className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
//         isSidebarOpen ? "w-64" : "w-20"
//       }`}
//       animate={{ width: isSidebarOpen ? 256 : 80 }}
//     >
//       <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//           className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
//         >
//           <Menu size={24} />
//         </motion.button>

//         <nav className="mt-8 flex-grow">
//           {SIDEBAR_ITEMS.map((item) => (
//             <Link key={item.href} to={item.href}>
//               <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
//                 <item.icon
//                   size={20}
//                   style={{ color: item.color, minWidth: "20px" }}
//                 />
//                 <AnimatePresence>
//                   {isSidebarOpen && (
//                     <motion.span
//                       className="ml-4 whitespace-nowrap"
//                       initial={{ opacity: 0, width: 0 }}
//                       animate={{ opacity: 1, width: "auto" }}
//                       exit={{ opacity: 0, width: 0 }}
//                       transition={{ duration: 0.2, delay: 0.3 }}
//                     >
//                       {item.name}
//                     </motion.span>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             </Link>
//           ))}
//           <div
//             className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2 cursor-pointer"
//             onClick={handleLogout} // إضافة وظيفة تسجيل الخروج
//           >
//             <LogOut size={20} style={{ color: "#6EE7B7", minWidth: "20px" }} />
//             <AnimatePresence>
//               {isSidebarOpen && (
//                 <motion.span
//                   className="ml-4 whitespace-nowrap"
//                   initial={{ opacity: 0, width: 0 }}
//                   animate={{ opacity: 1, width: "auto" }}
//                   exit={{ opacity: 0, width: 0 }}
//                   transition={{ duration: 0.2, delay: 0.3 }}
//                 >
//                   LogOut
//                 </motion.span>
//               )}
//             </AnimatePresence>
//           </div>
//         </nav>
//       </div>
//     </motion.div>
//   );
// };

// export default Sidebar;
////////////////////////////////////////////////////////////
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart2,
  Contact,
  FileText,
  LogOut,
  Menu,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  User,
  Users,
} from "lucide-react";
import { logout } from "../../store/authSlice"; // Adjust this import path as needed

const SIDEBAR_ITEMS = [
  { name: "Overview", icon: BarChart2, color: "#6366f1", href: "/" },
  { name: "Products", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
  { name: "Users", icon: User, color: "#EC4899", href: "/users" },
  {
    name: "Shop Owner Users",
    icon: Users,
    color: "#EC4899",
    href: "/ShopOwner",
  },
  { name: "Contact", icon: Contact, color: "#10B981", href: "/Contact" },
  /////
  { name: "Report", icon: FileText, color: "#10B981", href: "/Report" },

  /////
  { name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
  { name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
  { name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
    navigate("/"); // Navigate to the home page
  };

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
        >
          <Menu size={24} />
        </motion.button>
        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.href} to={item.href}>
              <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
                <item.icon
                  size={20}
                  style={{ color: item.color, minWidth: "20px" }}
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
          <div
            className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2 cursor-pointer"
            onClick={handleLogout}
          >
            <LogOut size={20} style={{ color: "#6EE7B7", minWidth: "20px" }} />
            <AnimatePresence>
              {isSidebarOpen && (
                <motion.span
                  className="ml-4 whitespace-nowrap"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  Logout
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
