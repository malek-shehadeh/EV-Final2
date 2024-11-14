// import { useState } from "react";
// import Home from "./Home";
// import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
// import Catalog from "./Catalog/Catalog";
// import Cart from "./Cart/Cart";
// import Admin from "./Admin/Admin";
// import Payment from "./Payment/Payment";
// import SignUp from "./Signup/Signup";
// import LogIn from "./LogIn/LogIn";
// import ContactForm from "./MessageForm/MessageForm";
// import ProfilePage from "./Profilepage/Profilepage";

// const App = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const handleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/Menu/Cart/payment" element={<Payment />} />
//           <Route path="/Admin" element={<Admin />} />
//           <Route path="/SignUp" element={<SignUp />} />
//           <Route path="/LogIn" element={<LogIn />} />
//           <Route path="/ContactForm" element={<ContactForm />} />
//           <Route path="/ProfilePage" element={<ProfilePage />} />
//           <Route path="/catalog" element={<Catalog />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;
////////////////////
// import React, { useState, useEffect } from "react";
// import Home from "./Home";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Catalog from "./Catalog/Catalog";
// import Cart from "./Cart/Cart";
// import Admin from "./Admin/Admin";
// import Payment from "./Payment/Payment";
// import SignUp from "./Signup/Signup";
// import LogIn from "./LogIn/LogIn";
// import ContactForm from "./MessageForm/MessageForm";
// import ProfilePage from "./Profilepage/Profilepage";
// import Header from "./component/Header/Header";
// import Footer from "./component/Footer/Footer";

// const App = () => {
//   const [darkMode, setDarkMode] = useState(() => {
//     // تحقق من الحالة المخزنة في localStorage
//     const savedMode = localStorage.getItem("darkMode");
//     return savedMode ? JSON.parse(savedMode) : false;
//   });

//   useEffect(() => {
//     // تحديث class الخاص بالوثيقة
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   const handleDarkMode = () => {
//     setDarkMode((prevMode) => {
//       const newMode = !prevMode;
//       localStorage.setItem("darkMode", JSON.stringify(newMode));
//       return newMode;
//     });
//   };

//   return (
//     <div className={`${darkMode ? "dark" : ""}`}>
//       <BrowserRouter>
//         <Header handleDarkMode={handleDarkMode} darkMode={darkMode} />
//         <main className="min-h-screen bg-white dark:bg-slate-800 dark:text-slate-200">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/Menu/Cart/payment" element={<Payment />} />
//             <Route path="/Admin" element={<Admin />} />
//             <Route path="/SignUp" element={<SignUp />} />
//             <Route path="/LogIn" element={<LogIn />} />
//             <Route path="/ContactForm" element={<ContactForm />} />
//             <Route path="/ProfilePage" element={<ProfilePage />} />
//             <Route path="/catalog" element={<Catalog />} />
//           </Routes>
//         </main>
//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;
// ////////////////////
// import React, { useState, useEffect } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./Home";
// import Catalog from "./Catalog/Catalog";
// import Cart from "./Cart/Cart";
// import Admin from "./Admin/Admin";
// import Payment from "./Payment/Payment";
// import LogIn from "./LogIn/LogIn";
// import ContactForm from "./ContactForm/ContactForm";
// import ProfilePage from "./Profilepage/Profilepage";
// import Header from "./component/Header/Header";
// import Footer from "./component/Footer/Footer";
// import Register from "./Register/Register";
// import Details from "./Details/Details";

// const App = () => {
//   const [darkMode, setDarkMode] = useState(() => {
//     // تحقق من الحالة المخزنة في localStorage
//     const savedMode = localStorage.getItem("darkMode");
//     return savedMode ? JSON.parse(savedMode) : false;
//   });

//   useEffect(() => {
//     // تحديث class الخاص بالوثيقة
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   const handleDarkMode = () => {
//     setDarkMode((prevMode) => {
//       const newMode = !prevMode;
//       localStorage.setItem("darkMode", JSON.stringify(newMode));
//       return newMode;
//     });
//   };

//   return (
//     <div className={`${darkMode ? "dark" : ""}`}>
//       <BrowserRouter>
//         {/* <Header handleDarkMode={handleDarkMode} darkMode={darkMode} /> */}
//         {/* <main className="min-h-screen bg-white dark:bg-slate-800 dark:text-slate-200"> */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/Menu/Cart/payment" element={<Payment />} />
//           <Route path="/Admin" element={<Admin />} />
//           <Route path="/LogIn" element={<LogIn />} />
//           <Route path="/Register" element={<Register />} />
//           <Route path="/ContactForm" element={<ContactForm />} />
//           <Route path="/ProfilePage" element={<ProfilePage />} />
//           <Route path="/catalog" element={<Catalog />} />
//           <Route path="/details/:id" element={<Details />} />
//         </Routes>
//         {/* </main> */}
//         {/* <Footer /> */}
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;
// // ///////////////////////////ok top////
// import React, { useState, useEffect } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./Home";
// import Catalog from "./Catalog/Catalog";
// import Cart from "./Cart/Cart";
// import Admin from "./Admin/Admin";
// import Payment from "./Payment/Payment";
// import LogIn from "./LogIn/LogIn";
// import ContactForm from "./ContactForm/ContactForm";
// import ProfilePage from "./Profilepage/Profilepage";
// import Register from "./Register/Register";
// import Details from "./Details/Details";
// import Header from "./component/Header/Header";
// // import Footer from "./component/Footer/Footer";

// const App = () => {
//   const [darkMode, setDarkMode] = useState(() => {
//     const savedMode = localStorage.getItem("darkMode");
//     return savedMode ? JSON.parse(savedMode) : false;
//   });

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   const handleDarkMode = () => {
//     setDarkMode((prevMode) => {
//       const newMode = !prevMode;
//       localStorage.setItem("darkMode", JSON.stringify(newMode));
//       return newMode;
//     });
//   };

//   return (
//     <div className={`${darkMode ? "dark" : ""}`}>
//       <BrowserRouter>
//         <Header
//           handleDarkMode={handleDarkMode}
//           darkMode={darkMode}
//           cartItemsCount={0}
//         />
//         <main className="min-h-screen bg-white dark:bg-slate-800 dark:text-slate-200">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/Menu/Cart/payment" element={<Payment />} />
//             <Route path="/Admin" element={<Admin />} />
//             <Route path="/LogIn" element={<LogIn />} />
//             <Route path="/Register" element={<Register />} />
//             <Route path="/ContactForm" element={<ContactForm />} />
//             <Route path="/ProfilePage" element={<ProfilePage />} />
//             <Route path="/catalog" element={<Catalog />} />
//             <Route path="/details/:id" element={<Details />} />
//           </Routes>
//         </main>
//         {/* <Footer /> */}
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;
// ////ok ok top////
// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { DarkModeProvider } from "./DarkModeContext";
// import Home from "./Home";
// import Catalog from "./Catalog/Catalog";
// import Cart from "./Cart/Cart";
// import Admin from "./Admin/Admin";
// import Payment from "./Payment/Payment";
// import LogIn from "./LogIn/LogIn";
// import ContactForm from "./ContactForm/ContactForm";
// import ProfilePage from "./Profilepage/Profilepage";
// import Register from "./Register/Register";
// import Details from "./Details/Details";
// import Header from "./component/Header/Header";
// // import Footer from "./component/Footer/Footer";

// const App = () => {
//   return (
//     <DarkModeProvider>
//       <AppContent />
//     </DarkModeProvider>
//   );
// };

// const AppContent = () => {
//   return (
//     <BrowserRouter>
//       <Header cartItemsCount={0} />
//       <main className="min-h-screen bg-white dark:bg-slate-800 dark:text-slate-200">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/Menu/Cart/payment" element={<Payment />} />
//           <Route path="/Admin" element={<Admin />} />
//           <Route path="/LogIn" element={<LogIn />} />
//           <Route path="/Register" element={<Register />} />
//           <Route path="/ContactForm" element={<ContactForm />} />
//           <Route path="/ProfilePage" element={<ProfilePage />} />
//           <Route path="/catalog" element={<Catalog />} />
//           <Route path="/details/:id" element={<Details />} />
//         </Routes>
//       </main>
//       {/* <Footer /> */}
//     </BrowserRouter>
//   );
// };

// export default App;
// //////////ok ok ok ok top/////
// import React, { useEffect } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { DarkModeProvider, useDarkMode } from "./DarkModeContext";
// import Home from "./Home";
// import Catalog from "./Catalog/Catalog";
// import Cart from "./Cart/Cart";
// import Admin from "./Admin/Admin";
// import Payment from "./Payment/Payment";
// import LogIn from "./LogIn/LogIn";
// import ContactForm from "./ContactForm/ContactForm";
// import ProfilePage from "./Profilepage/Profilepage";
// import Register from "./Register/Register";
// import Details from "./Details/Details";
// import Header from "./component/Header/Header";
// import ShopOwnerRegistration from "./Register/ShopOwnerRegistration";
// import Dashboard from "./DashboardShop/Dashboard";
// // import Footer from "./component/Footer/Footer";
// import { CartProvider } from "./CartContext/CartContext";

// const App = () => {
//   return (
//     <DarkModeProvider>
//       <AppContent />
//     </DarkModeProvider>
//   );
// };

// const AppContent = () => {
//   const { darkMode } = useDarkMode();

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   return (
//     <BrowserRouter>
//       <div className={`${darkMode ? "dark" : ""}`}>
//         {/* <Header cartItemsCount={0} /> */}
//         <main className="min-h-screen bg-white dark:bg-slate-800 dark:text-slate-200">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/Menu/Cart/payment" element={<Payment />} />
//             <Route path="/Admin" element={<Admin />} />
//             <Route path="/LogIn" element={<LogIn />} />
//             <Route path="/Register" element={<Register />} />
//             <Route path="/ContactForm" element={<ContactForm />} />
//             <Route path="/ProfilePage" element={<ProfilePage />} />
//             <Route path="/catalog" element={<Catalog />} />
//             <Route path="/details/:id" element={<Details />} />
//             <Route
//               path="/shop-owner-register"
//               element={<ShopOwnerRegistration />}
//             />
//             <Route path="/Dashboard" element={<Dashboard />} />
//           </Routes>
//         </main>

//         {/* <Footer /> */}
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;
///////////////////////////////////////////top ok ok ok before context/////
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DarkModeProvider, useDarkMode } from "./DarkModeContext";
import Home from "./Home";
import Catalog from "./Catalog/Catalog";
import Cart from "./Cart/Cart";
import Admin from "./Admin/Admin";
import Payment from "./Payment/Payment";
import LogIn from "./LogIn/LogIn";
import ContactForm from "./ContactForm/ContactForm";
import ProfilePage from "./Profilepage/Profilepage";
import Register from "./Register/Register";
import Details from "./Details/Details";
import Header from "./component/Header/Header";
import ShopOwnerRegistration from "./Register/ShopOwnerRegistration";
import Dashboard from "./DashboardShop/Dashboard";
// import Footer from "./component/Footer/Footer";
import { CartProvider } from "./CartContext/CartContext";
import CarCenterFinder from "./CarCenter/CarCenter";
import PaymentSuccess from "../src/component/PaymentSuccess";
import AddProductPage from "./DashboardShop/AddProductPage";
import Layout from "./DashboardShop/Layout";
import ProductListPage from "./DashboardShop/ProductListPage";
import Orders from "./DashboardShop/Orders";
import ShopOwnerProfile from "./DashboardShop/shopOwnerProfile";

const App = () => {
  return (
    <CartProvider>
      <DarkModeProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </DarkModeProvider>
    </CartProvider>
  );
};

const AppContent = () => {
  const { darkMode } = useDarkMode();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
        {/* <Route path="/Menu/Cart/payment" element={<Payment />} /> */}
        <Route path="/payment" element={<Payment />} />

        <Route path="/login" element={<LogIn />} />
        <Route path="/ContactForm" element={<ContactForm />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/shopowner" element={<ShopOwnerRegistration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/carcenter" element={<CarCenterFinder />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />

        {/* //Dashboard// */}
        <Route element={<Layout />}>
          <Route path="/addproduct" element={<AddProductPage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<ShopOwnerProfile />} />
          <Route path="/" element={<AddProductPage />} />
        </Route>

        {/* //End dashboard// */}
      </Routes>
      {/*
      <Footer />
      */}
    </>
  );
};

export default App;
