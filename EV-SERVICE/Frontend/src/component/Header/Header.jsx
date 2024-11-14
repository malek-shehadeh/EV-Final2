// // // import { useState } from "react";
// // // import { FaMoon, FaSun } from "react-icons/fa";

// // // import { BiMenuAltLeft } from "react-icons/bi";
// // // import { menuItems } from "../../constants";
// // // import { Link } from "react-router-dom";
// // // const Header = ({ handleDarkMode, darkMode }) => {
// // //   const [toggleMenu, settoggleMenu] = useState(false);
// // //   const handleToggleMenu = () => {
// // //     settoggleMenu(!toggleMenu);
// // //   };
// // //   return (
// // //     <header className="fixed left-0 right-0 top-3 z-50 px-5 md:px16">
// // //       <nav className="mx-auto flex max-w-6xl flex-col items-center justify-between rounded-lg border-2 border-slate-500 bg-slate-50 px-3 py-3 dark:bg-slate-700 dark:text-slate-300 md:flex-row ">
// // //         <div
// // //           className="flex w-full items-center justify-between md:flex-row
// // //         "
// // //         >
// // //           <h1 className="font-bold text-2xl ">
// // //             <a href="#"> EV SERVICE</a>
// // //           </h1>

// // //           <button
// // //             className="cursor-pointer rounded-full bg-slate-500 p-1 text-slate-200 dark:bg-slate-100 dark:text-slate-500 md:hidden "
// // //             onClick={handleToggleMenu}
// // //           >
// // //             <BiMenuAltLeft className="text-2xl" />
// // //           </button>
// // //         </div>
// // //         <div
// // //           className={`${
// // //             toggleMenu ? "block" : "hidden"
// // //           } w-full flex-col md:flex md:flex-row  md:w-auto md:items-center `}
// // //         >
// // //           <ul className="mt-5 flex flex-col items-start md:mt-0 md:flex-row ">
// // //             {menuItems.map((item, index) => (
// // //               <li key={index} className="w-full md:w-auto ">
// // //                 <a
// // //                   href={item.href}
// // //                   className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// // //                 >
// // //                   {item.name}
// // //                 </a>
// // //               </li>
// // //             ))}
// // //           </ul>

// // //           <button
// // //             className="mt-5 rounded-full p-2 dark:bg-slate-50 dark:text-slate-700 md:ml-5 md:mt-0 "
// // //             onClick={handleDarkMode}
// // //           >
// // //             {darkMode ? <FaSun /> : <FaMoon />}
// // //           </button>
// // //         </div>
// // //       </nav>
// // //     </header>
// // //   );
// // // };

// // // export default Header;
// // /////////////////
// // // import { useState } from "react";
// // // import { FaMoon, FaSun } from "react-icons/fa";
// // // import { BiMenuAltLeft } from "react-icons/bi";
// // // import { Link } from "react-router-dom";

// // // const Header = ({ handleDarkMode, darkMode }) => {
// // //   const [toggleMenu, settoggleMenu] = useState(false);
// // //   const handleToggleMenu = () => {
// // //     settoggleMenu(!toggleMenu);
// // //   };

// // //   const menuItems = [
// // //     { name: "Blog", href: "#blog" },
// // //     { name: "Services", href: "#services" },
// // //     { name: "FAQs", href: "#faqs" },
// // //     { name: "About", href: "#about" },
// // //     { name: "Contact", href: "#contact" },
// // //     { name: "Team", href: "#team" },
// // //     { name: "Catalog", href: "/catalog" },
// // //   ];

// // //   return (
// // //     <header className="fixed left-0 right-0 top-3 z-50 px-5 md:px16">
// // //       <nav className="mx-auto flex max-w-6xl flex-col items-center justify-between rounded-lg border-2 border-slate-500 bg-slate-50 px-3 py-3 dark:bg-slate-700 dark:text-slate-300 md:flex-row ">
// // //         <div
// // //           className="flex w-full items-center justify-between md:flex-row
// // //         "
// // //         >
// // //           <h1 className="font-bold text-2xl ">
// // //             <a href="#"> EV SERVICE</a>
// // //           </h1>

// // //           <button
// // //             className="cursor-pointer rounded-full bg-slate-500 p-1 text-slate-200 dark:bg-slate-100 dark:text-slate-500 md:hidden "
// // //             onClick={handleToggleMenu}
// // //           >
// // //             <BiMenuAltLeft className="text-2xl" />
// // //           </button>
// // //         </div>
// // //         <div
// // //           className={`${
// // //             toggleMenu ? "block" : "hidden"
// // //           } w-full flex-col md:flex md:flex-row  md:w-auto md:items-center `}
// // //         >
// // //           <ul className="mt-5 flex flex-col items-start md:mt-0 md:flex-row ">
// // //             {menuItems.map((item, index) => (
// // //               <li key={index} className="w-full md:w-auto ">
// // //                 <a
// // //                   href={item.href}
// // //                   className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// // //                 >
// // //                   {item.name}
// // //                 </a>
// // //               </li>
// // //             ))}
// // //           </ul>

// // //           <button
// // //             className="mt-5 rounded-full p-2 dark:bg-slate-50 dark:text-slate-700 md:ml-5 md:mt-0 "
// // //             onClick={handleDarkMode}
// // //           >
// // //             {darkMode ? <FaSun /> : <FaMoon />}
// // //           </button>
// // //         </div>
// // //       </nav>
// // //     </header>
// // //   );
// // // };

// // // export default Header;
// // /////////////////
// // // import { useState } from "react";
// // // import { FaMoon, FaSun } from "react-icons/fa";
// // // import { BiMenuAltLeft } from "react-icons/bi";
// // // import { Link } from "react-router-dom";

// // // const Header = ({ handleDarkMode, darkMode }) => {
// // //   const [toggleMenu, settoggleMenu] = useState(false);
// // //   const handleToggleMenu = () => {
// // //     settoggleMenu(!toggleMenu);
// // //   };

// // //   return (
// // //     <header className="fixed left-0 right-0 top-3 z-50 px-5 md:px16">
// // //       <nav className="mx-auto flex max-w-6xl flex-col items-center justify-between rounded-lg border-2 border-slate-500 bg-slate-50 px-3 py-3 dark:bg-slate-700 dark:text-slate-300 md:flex-row ">
// // //         <div className="flex w-full items-center justify-between md:flex-row">
// // //           <h1 className="font-bold text-2xl">
// // //             <a href="#"> EV SERVICE</a>
// // //           </h1>

// // //           <button
// // //             className="cursor-pointer rounded-full bg-slate-500 p-1 text-slate-200 dark:bg-slate-100 dark:text-slate-500 md:hidden"
// // //             onClick={handleToggleMenu}
// // //           >
// // //             <BiMenuAltLeft className="text-2xl" />
// // //           </button>
// // //         </div>
// // //         <div
// // //           className={`${
// // //             toggleMenu ? "block" : "hidden"
// // //           } w-full flex-col md:flex md:flex-row md:w-auto md:items-center`}
// // //         >
// // //           <ul className="mt-5 flex flex-col items-start md:mt-0 md:flex-row">
// // //             <li className="w-full md:w-auto">
// // //               <a
// // //                 href="#blog"
// // //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// // //               >
// // //                 Blog
// // //               </a>
// // //             </li>
// // //             <li className="w-full md:w-auto">
// // //               <a
// // //                 href="#services"
// // //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// // //               >
// // //                 Services
// // //               </a>
// // //             </li>
// // //             <li className="w-full md:w-auto">
// // //               <a
// // //                 href="#faqs"
// // //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// // //               >
// // //                 FAQs
// // //               </a>
// // //             </li>
// // //             <li className="w-full md:w-auto">
// // //               <a
// // //                 href="#about"
// // //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// // //               >
// // //                 About
// // //               </a>
// // //             </li>
// // //             <li className="w-full md:w-auto">
// // //               <a
// // //                 href="#contact"
// // //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// // //               >
// // //                 Contact
// // //               </a>
// // //             </li>
// // //             <li className="w-full md:w-auto">
// // //               <a
// // //                 href="#team"
// // //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// // //               >
// // //                 Team
// // //               </a>
// // //             </li>

// // //             <li className="w-full md:w-auto">
// // //               <a
// // //                 href="#team"
// // //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// // //               >
// // //                 <Link to="/catalog">Catalog</Link>
// // //               </a>
// // //             </li>

// // //             <li className="w-full md:w-auto">
// // //               <a
// // //                 href="#team"
// // //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// // //               >
// // //                 Team
// // //               </a>
// // //             </li>
// // //           </ul>

// // //           <button
// // //             className="mt-5 rounded-full p-2 dark:bg-slate-50 dark:text-slate-700 md:ml-5 md:mt-0"
// // //             onClick={handleDarkMode}
// // //           >
// // //             {darkMode ? <FaSun /> : <FaMoon />}
// // //           </button>
// // //         </div>
// // //       </nav>
// // //     </header>
// // //   );
// // // };

// // // export default Header;
// // ////////////////////////////////////

// // import { useState } from "react";
// // import { FaMoon, FaSun, FaShoppingCart } from "react-icons/fa";
// // import { BiMenuAltLeft } from "react-icons/bi";
// // import { Link } from "react-router-dom";

// // const Header = ({ handleDarkMode, darkMode }) => {
// //   const [toggleMenu, settoggleMenu] = useState(false);
// //   const handleToggleMenu = () => {
// //     settoggleMenu(!toggleMenu);
// //   };

// //   return (
// //     <header className="fixed left-0 right-0 top-3 z-50 px-5 md:px16">
// //       <nav className="mx-auto flex max-w-6xl flex-col items-center justify-between rounded-lg border-2 border-slate-500 bg-slate-50 px-3 py-3 dark:bg-slate-700 dark:text-slate-300 md:flex-row ">
// //         <div className="flex w-full items-center justify-between md:flex-row">
// //           <Link to="/">
// //             <h1 className="font-bold text-2xl">EV SERVICE</h1>
// //           </Link>

// //           <button
// //             className="cursor-pointer rounded-full bg-slate-500 p-1 text-slate-200 dark:bg-slate-100 dark:text-slate-500 md:hidden"
// //             onClick={handleToggleMenu}
// //           >
// //             <BiMenuAltLeft className="text-2xl" />
// //           </button>
// //         </div>
// //         <div
// //           className={`${
// //             toggleMenu ? "block" : "hidden"
// //           } w-full flex-col md:flex md:flex-row md:w-auto md:items-center`}
// //         >
// //           <ul className="mt-5 flex flex-col items-start md:mt-0 md:flex-row">
// //             <li className="w-full md:w-auto">
// //               <a
// //                 href="#blog"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 Blog
// //               </a>
// //             </li>
// //             <li className="w-full md:w-auto">
// //               <a
// //                 href="#services"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 Services
// //               </a>
// //             </li>
// //             <li className="w-full md:w-auto">
// //               <a
// //                 href="#faqs"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 FAQs
// //               </a>
// //             </li>
// //             <li className="w-full md:w-auto">
// //               <a
// //                 href="#about"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 About
// //               </a>
// //             </li>
// //             <li className="w-full md:w-auto">
// //               <a
// //                 href="#contact"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 Contact
// //               </a>
// //             </li>
// //             <li className="w-full md:w-auto">
// //               <a
// //                 href="#team"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 Team
// //               </a>
// //             </li>
// //             <li className="w-full md:w-auto">
// //               <a
// //                 href="#catalog"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 <Link to="/catalog">Catalog</Link>
// //               </a>
// //             </li>
// //             <li className="w-full md:w-auto">
// //               <a
// //                 href="#cart"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 <Link to="/cart">
// //                   <FaShoppingCart className="text-xl" />
// //                 </Link>
// //               </a>
// //             </li>
// //           </ul>

// //           <button
// //             className="mt-5 rounded-full p-2 dark:bg-slate-50 dark:text-slate-700 md:ml-5 md:mt-0"
// //             onClick={handleDarkMode}
// //           >
// //             {darkMode ? <FaSun /> : <FaMoon />}
// //           </button>
// //         </div>
// //       </nav>
// //     </header>
// //   );
// // };

// // export default Header;
// ////////////////////////////////
// // import { useState } from "react";
// // import { FaMoon, FaSun, FaShoppingCart, FaSignInAlt } from "react-icons/fa";
// // import { BiMenuAltLeft } from "react-icons/bi";
// // import { Link } from "react-router-dom";

// // const Header = ({ handleDarkMode, darkMode }) => {
// //   const [toggleMenu, setToggleMenu] = useState(false);
// //   const handleToggleMenu = () => {
// //     setToggleMenu(!toggleMenu);
// //   };

// //   return (
// //     <header className="fixed left-0 right-0 top-3 z-50 px-5 md:px-16">
// //       <nav className="mx-auto flex max-w-6xl flex-col items-center justify-between rounded-lg border-2 border-slate-500 bg-slate-50 px-3 py-3 dark:bg-slate-700 dark:text-slate-300 md:flex-row">
// //         <div className="flex w-full items-center justify-between md:w-auto">
// //           <Link to="/">
// //             <h1 className="text-2xl font-bold">EV SERVICE</h1>
// //           </Link>

// //           <button
// //             className="cursor-pointer rounded-full bg-slate-500 p-1 text-slate-200 dark:bg-slate-100 dark:text-slate-500 md:hidden"
// //             onClick={handleToggleMenu}
// //           >
// //             <BiMenuAltLeft className="text-2xl" />
// //           </button>
// //         </div>
// //         <div
// //           className={`${
// //             toggleMenu ? "block" : "hidden"
// //           } w-full flex-col md:flex md:w-auto md:flex-row md:items-center md:justify-between`}
// //         >
// //           <ul className="mt-5 flex flex-col items-start md:mt-0 md:flex-row">
// //             <li className="w-full md:w-auto">
// //               <a
// //                 href="#blog"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 Blog
// //               </a>
// //             </li>
// //             <li className="w-full md:w-auto">
// //               <a
// //                 href="#services"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 Services
// //               </a>
// //             </li>
// //             <li className="w-full md:w-auto">
// //               <a
// //                 href="#faqs"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 FAQs
// //               </a>
// //             </li>
// //             <li className="w-full md:w-auto">
// //               <a
// //                 href="#about"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 About
// //               </a>
// //             </li>
// //             <li className="w-full md:w-auto">
// //               <a
// //                 href="#contact"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 Contact
// //               </a>
// //             </li>
// //             <li className="w-full md:w-auto">
// //               <a
// //                 href="#team"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 Team
// //               </a>
// //             </li>
// //             <li className="w-full md:w-auto">
// //               <Link
// //                 to="/catalog"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 Catalog
// //               </Link>
// //             </li>
// //           </ul>

// //           <div className="mt-5 flex items-center justify-end md:mt-0 md:ml-4">
// //             <Link
// //               to="/cart"
// //               className="mr-4 rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500"
// //             >
// //               <FaShoppingCart className="text-xl" />
// //             </Link>
// //             <Link
// //               to="/signin"
// //               className="mr-4 flex items-center rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500"
// //             >
// //               <FaSignInAlt className="mr-2" />
// //               Sign In
// //             </Link>
// //             <button
// //               className="rounded-full p-2 dark:bg-slate-50 dark:text-slate-700"
// //               onClick={handleDarkMode}
// //             >
// //               {darkMode ? <FaSun /> : <FaMoon />}
// //             </button>
// //           </div>
// //         </div>
// //       </nav>
// //     </header>
// //   );
// // };

// // export default Header;
// /////////////////
// // import { useState } from "react";
// // import { FaMoon, FaSun, FaShoppingCart, FaSignInAlt } from "react-icons/fa";
// // import { BiMenuAltLeft } from "react-icons/bi";
// // import { Link } from "react-router-dom";

// // const Header = ({ handleDarkMode, darkMode }) => {
// //   const [toggleMenu, setToggleMenu] = useState(false);
// //   const handleToggleMenu = () => {
// //     setToggleMenu(!toggleMenu);
// //   };

// //   return (
// //     <header className="fixed left-0 right-0 top-3 z-50 px-5 md:px-16">
// //       <nav className="mx-auto flex max-w-6xl flex-col items-center justify-between rounded-lg border-2 border-slate-500 bg-slate-50 px-3 py-3 dark:bg-slate-700 dark:text-slate-300 md:flex-row">
// //         <div className="flex w-full items-center justify-between md:w-auto">
// //           <Link to="/">
// //             <h1 className="text-2xl font-bold">EV SERVICE</h1>
// //           </Link>

// //           <button
// //             className="cursor-pointer rounded-full bg-slate-500 p-1 text-slate-200 dark:bg-slate-100 dark:text-slate-500 md:hidden"
// //             onClick={handleToggleMenu}
// //           >
// //             <BiMenuAltLeft className="text-2xl" />
// //           </button>
// //         </div>
// //         <div
// //           className={`${
// //             toggleMenu ? "block" : "hidden"
// //           } w-full flex-col md:flex md:w-auto md:flex-row md:items-center md:justify-between`}
// //         >
// //           <ul className="mt-5 flex flex-col items-start md:mt-0 md:flex-row">
// //             <li className="w-full md:w-auto">
// //               <a
// //                 href="#blog"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 Blog
// //               </a>
// //             </li>
// //             <li className="w-full md:w-auto">
// //               <a
// //                 href="#services"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 Services
// //               </a>
// //             </li>
// //             <li className="w-full md:w-auto">
// //               <a
// //                 href="#faqs"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 FAQs
// //               </a>
// //             </li>
// //             <li className="w-full md:w-auto">
// //               <a
// //                 href="#about"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 About
// //               </a>
// //             </li>
// //             <li className="w-full md:w-auto">
// //               <a
// //                 href="#contact"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 Contact
// //               </a>
// //             </li>
// //             <li className="w-full md:w-auto">
// //               <a
// //                 href="#team"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 Team
// //               </a>
// //             </li>
// //             <li className="w-full md:w-auto">
// //               <Link
// //                 to="/catalog"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 Catalog
// //               </Link>
// //             </li>
// //           </ul>

// //           <div className="mt-5 flex items-center justify-end md:mt-0 md:ml-4">
// //             <Link
// //               to="/cart"
// //               className="mr-4 rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500"
// //             >
// //               <FaShoppingCart className="text-xl" />
// //             </Link>
// //             <Link
// //               to="/signin"
// //               className="mr-4 flex items-center rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500"
// //             >
// //               <FaSignInAlt className="mr-2" />
// //               Sign In
// //             </Link>
// //             <button
// //               className="rounded-full p-2 dark:bg-slate-50 dark:text-slate-700"
// //               onClick={handleDarkMode}
// //             >
// //               {darkMode ? <FaSun /> : <FaMoon />}
// //             </button>
// //           </div>
// //         </div>
// //       </nav>
// //     </header>
// //   );
// // };

// // export default Header;
// ////////////////////
// // import { useState } from "react";
// // import { FaMoon, FaSun, FaShoppingCart, FaSignInAlt } from "react-icons/fa";
// // import { BiMenuAltLeft } from "react-icons/bi";
// // import { Link } from "react-router-dom";

// // const Header = ({ handleDarkMode, darkMode }) => {
// //   const [toggleMenu, setToggleMenu] = useState(false);
// //   const handleToggleMenu = () => {
// //     setToggleMenu(!toggleMenu);
// //   };

// //   return (
// //     <header className="fixed left-0 right-0 top-3 z-50 px-5 md:px-16">
// //       <nav className="mx-auto flex max-w-6xl flex-col items-center justify-between rounded-lg border-2 border-slate-500 bg-slate-50 px-3 py-3 dark:bg-slate-700 dark:text-slate-300 md:flex-row">
// //         <div className="flex w-full items-center justify-between md:w-auto">
// //           <Link to="/">
// //             <h1 className="text-2xl font-bold">EV SERVICE</h1>
// //           </Link>

// //           <button
// //             className="cursor-pointer rounded-full bg-slate-500 p-1 text-slate-200 dark:bg-slate-100 dark:text-slate-500 md:hidden"
// //             onClick={handleToggleMenu}
// //           >
// //             <BiMenuAltLeft className="text-2xl" />
// //           </button>
// //         </div>
// //         <div
// //           className={`${
// //             toggleMenu ? "block" : "hidden"
// //           } w-full flex-col md:flex md:w-auto md:flex-row md:items-center md:justify-between`}
// //         >
// //           <ul className="mt-5 flex flex-col items-start md:mt-0 md:flex-row">
// //             <li className="w-full md:w-auto">
// //               <a
// //                 href="#blog"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 Blog
// //               </a>
// //             </li>
// //             <li className="w-full md:w-auto">
// //               <a
// //                 href="#services"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 Services
// //               </a>
// //             </li>
// //             <li className="w-full md:w-auto">
// //               <a
// //                 href="#faqs"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 FAQs
// //               </a>
// //             </li>
// //             <li className="w-full md:w-auto">
// //               <a
// //                 href="#about"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 About
// //               </a>
// //             </li>
// //             <li className="w-full md:w-auto">
// //               <a
// //                 href="#contact"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 Contact
// //               </a>
// //             </li>
// //             <li className="w-full md:w-auto">
// //               <a
// //                 href="#team"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 Team
// //               </a>
// //             </li>
// //             <li className="w-full md:w-auto">
// //               <Link
// //                 to="/catalog"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 Catalog
// //               </Link>
// //             </li>
// //           </ul>

// //           <div className="mt-5 flex items-center justify-end md:mt-0 md:ml-4">
// //             <Link
// //               to="/cart"
// //               className="mr-4 rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500"
// //             >
// //               <FaShoppingCart className="text-xl" />
// //             </Link>
// //             <Link
// //               to="/signin"
// //               className="mr-4 flex items-center rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500"
// //             >
// //               <FaSignInAlt className="mr-2" />
// //               Sign In
// //             </Link>
// //             <button
// //               className="rounded-full p-2 dark:bg-slate-50 dark:text-slate-700"
// //               onClick={handleDarkMode}
// //             >
// //               {darkMode ? <FaSun /> : <FaMoon />}
// //             </button>
// //           </div>
// //         </div>
// //       </nav>
// //     </header>
// //   );
// // };

// // export default Header;
// //////////////////
// import { useState } from "react";
// import { FaMoon, FaSun, FaShoppingCart, FaSignInAlt } from "react-icons/fa";
// import { BiMenuAltLeft } from "react-icons/bi";
// import { Link } from "react-router-dom";

// const Header = ({ handleDarkMode, darkMode }) => {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   const handleToggleMenu = () => {
//     setToggleMenu(!toggleMenu);
//   };

//   return (
//     <header className="fixed left-0 right-0 top-3 z-50 px-5 md:px-16">
//       <nav className="mx-auto flex max-w-6xl flex-col items-center justify-between rounded-lg border-2 border-slate-500 bg-slate-50 px-3 py-3 dark:bg-slate-700 dark:text-slate-300 md:flex-row">
//         <div className="flex w-full items-center justify-between md:w-auto">
//           <Link to="/">
//             <h1 className="text-2xl font-bold">EV SERVICE</h1>
//           </Link>

//           <button
//             className="cursor-pointer rounded-full bg-slate-500 p-1 text-slate-200 dark:bg-slate-100 dark:text-slate-500 md:hidden"
//             onClick={handleToggleMenu}
//           >
//             <BiMenuAltLeft className="text-2xl" />
//           </button>
//         </div>
//         <div
//           className={`${
//             toggleMenu ? "block" : "hidden"
//           } w-full flex-col md:flex md:w-auto md:flex-row md:items-center md:justify-between`}
//         >
//           <ul className="mt-5 flex flex-col items-start md:mt-0 md:flex-row">
//             <li className="w-full md:w-auto">
//               <a
//                 href="#Home"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 <Link to="/">Home</Link>
//               </a>
//             </li>

//             <li className="w-full md:w-auto">
//               <a
//                 href="#contact"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 <Link to="/ContactForm">Contact</Link>
//               </a>
//             </li>
//             <li className="w-full md:w-auto">
//               <a
//                 href="#Profile"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 <Link to="/ProfilePage">Profile</Link>
//               </a>
//             </li>

//             <li className="w-full md:w-auto">
//               <Link
//                 to="/catalog"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Catalog
//               </Link>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/Admin"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Admin
//               </Link>
//             </li>
//           </ul>

//           <div className="mt-5 flex items-center justify-end md:mt-0 md:ml-4">
//             <Link
//               to="/cart"
//               className="mr-4 rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500"
//             >
//               <FaShoppingCart className="text-xl" />
//             </Link>
//             <Link
//               to="/LogIn"
//               className="mr-4 flex items-center rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500"
//             >
//               <FaSignInAlt className="mr-2" />
//               Sign In
//             </Link>
//             <button
//               className="rounded-full p-2 dark:bg-slate-50 dark:text-slate-700"
//               onClick={handleDarkMode}
//             >
//               {darkMode ? <FaSun /> : <FaMoon />}
//             </button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
// ////////////
// import { useState } from "react";
// import { FaMoon, FaSun, FaShoppingCart, FaSignInAlt } from "react-icons/fa";
// import { BiMenuAltLeft } from "react-icons/bi";
// import { Link } from "react-router-dom";

// const Header = ({ handleDarkMode, darkMode, cartItemsCount }) => {
//   const [toggleMenu, setToggleMenu] = useState(false);

//   const handleToggleMenu = () => {
//     setToggleMenu(!toggleMenu);
//   };

//   return (
//     <header className="fixed left-0 right-0 top-3 z-50 px-5 md:px-16">
//       <nav className="mx-auto flex max-w-6xl flex-col items-center justify-between rounded-lg border-2 border-slate-500 bg-slate-50 px-3 py-3 dark:bg-slate-700 dark:text-slate-300 md:flex-row">
//         <div className="flex w-full items-center justify-between md:w-auto">
//           <Link to="/">
//             <h1 className="text-2xl font-bold">EV SERVICE</h1>
//           </Link>
//           <button
//             className="cursor-pointer rounded-full bg-slate-500 p-1 text-slate-200 dark:bg-slate-100 dark:text-slate-500 md:hidden"
//             onClick={handleToggleMenu}
//           >
//             <BiMenuAltLeft className="text-2xl" />
//           </button>
//         </div>
//         <div
//           className={`${
//             toggleMenu ? "block" : "hidden"
//           } w-full flex-col md:flex md:w-auto md:flex-row md:items-center md:justify-between`}
//         >
//           <ul className="mt-5 flex flex-col items-start md:mt-0 md:flex-row">
//             <li className="w-full md:w-auto">
//               <a
//                 href="#Home"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 <Link to="/">Home</Link>
//               </a>
//             </li>
//             <li className="w-full md:w-auto">
//               <a
//                 href="#contact"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 <Link to="/ContactForm">Contact</Link>
//               </a>
//             </li>
//             <li className="w-full md:w-auto">
//               <a
//                 href="#Profile"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 <Link to="/ProfilePage">Profile</Link>
//               </a>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/catalog"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Catalog
//               </Link>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/Admin"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Admin
//               </Link>
//             </li>
//           </ul>
//           <div className="mt-5 flex items-center justify-end md:mt-0 md:ml-4">
//             <Link
//               to="/cart"
//               className="mr-4 rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500 relative"
//             >
//               <FaShoppingCart className="text-xl" />
//               {cartItemsCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
//                   {cartItemsCount}
//                 </span>
//               )}
//             </Link>
//             <Link
//               to="/LogIn"
//               className="mr-4 flex items-center rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500"
//             >
//               <FaSignInAlt className="mr-2" />
//               Sign In
//             </Link>
//             <button
//               className="rounded-full p-2 dark:bg-slate-50 dark:text-slate-700"
//               onClick={handleDarkMode}
//             >
//               {darkMode ? <FaSun /> : <FaMoon />}
//             </button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
// ///////////////////////////////
// import { useState } from "react";
// import { FaMoon, FaSun, FaShoppingCart, FaSignInAlt } from "react-icons/fa";
// import { BiMenuAltLeft } from "react-icons/bi";
// import { Link } from "react-router-dom";

// const Header = ({ handleDarkMode, darkMode, cartItemsCount }) => {
//   const [toggleMenu, setToggleMenu] = useState(false);

//   const handleToggleMenu = () => {
//     setToggleMenu(!toggleMenu);
//   };

//   return (
//     <header className="fixed left-0 right-0 top-3 z-50 px-5 md:px-16">
//       <nav className="mx-auto flex max-w-6xl flex-col items-center justify-between rounded-lg border-2 border-slate-500 bg-slate-50 px-3 py-3 dark:bg-slate-700 dark:text-slate-300 md:flex-row">
//         <div className="flex w-full items-center justify-between md:w-auto">
//           <Link to="/">
//             <h1 className="text-2xl font-bold">EV SERVICE</h1>
//           </Link>
//           <button
//             className="cursor-pointer rounded-full bg-slate-500 p-1 text-slate-200 dark:bg-slate-100 dark:text-slate-500 md:hidden"
//             onClick={handleToggleMenu}
//           >
//             <BiMenuAltLeft className="text-2xl" />
//           </button>
//         </div>
//         <div
//           className={`${
//             toggleMenu ? "block" : "hidden"
//           } w-full flex-col md:flex md:w-auto md:flex-row md:items-center md:justify-between`}
//         >
//           <ul className="mt-5 flex flex-col items-start md:mt-0 md:flex-row">
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Home
//               </Link>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/ContactForm"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Contact
//               </Link>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/ProfilePage"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Profile
//               </Link>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/catalog"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Catalog
//               </Link>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/Admin"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Admin
//               </Link>
//             </li>
//           </ul>
//           <div className="mt-5 flex items-center justify-end md:mt-0 md:ml-4">
//             <Link
//               to="/cart"
//               className="mr-4 rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500 relative"
//             >
//               <FaShoppingCart className="text-xl" />
//               {cartItemsCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
//                   {cartItemsCount}
//                 </span>
//               )}
//             </Link>
//             <Link
//               to="/LogIn"
//               className="mr-4 flex items-center rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500"
//             >
//               <FaSignInAlt className="mr-2" />
//               Sign In
//             </Link>
//             <button
//               className="rounded-full p-2 dark:bg-slate-50 dark:text-slate-700"
//               onClick={handleDarkMode}
//             >
//               {darkMode ? <FaSun /> : <FaMoon />}
//             </button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
// ////////ok down ///////////////////////
// import { useState, useEffect } from "react";
// import {
//   FaMoon,
//   FaSun,
//   FaShoppingCart,
//   FaSignInAlt,
//   FaSignOutAlt,
// } from "react-icons/fa";
// import { BiMenuAltLeft } from "react-icons/bi";
// import { Link, useNavigate } from "react-router-dom";

// const Header = ({ handleDarkMode, darkMode, cartItemsCount }) => {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//   }, []);

//   const handleToggleMenu = () => {
//     setToggleMenu(!toggleMenu);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     navigate("/LogIn");
//   };

//   return (
//     <header className="fixed left-0 right-0 top-3 z-50 px-5 md:px-16">
//       <nav className="mx-auto flex max-w-6xl flex-col items-center justify-between rounded-lg border-2 border-slate-500 bg-slate-50 px-3 py-3 dark:bg-slate-700 dark:text-slate-300 md:flex-row">
//         <div className="flex w-full items-center justify-between md:w-auto">
//           <Link to="/">
//             <h1 className="text-2xl font-bold">EV SERVICE</h1>
//           </Link>
//           <button
//             className="cursor-pointer rounded-full bg-slate-500 p-1 text-slate-200 dark:bg-slate-100 dark:text-slate-500 md:hidden"
//             onClick={handleToggleMenu}
//           >
//             <BiMenuAltLeft className="text-2xl" />
//           </button>
//         </div>
//         <div
//           className={`${
//             toggleMenu ? "block" : "hidden"
//           } w-full flex-col md:flex md:w-auto md:flex-row md:items-center md:justify-between`}
//         >
//           <ul className="mt-5 flex flex-col items-start md:mt-0 md:flex-row">
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Home
//               </Link>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/ContactForm"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Contact
//               </Link>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/ProfilePage"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Profile
//               </Link>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/catalog"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Catalog
//               </Link>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/Admin"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Admin
//               </Link>
//             </li>
//           </ul>
//           <div className="mt-5 flex items-center justify-end md:mt-0 md:ml-4">
//             <Link
//               to="/cart"
//               className="mr-4 rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500 relative"
//             >
//               <FaShoppingCart className="text-xl" />
//               {cartItemsCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
//                   {cartItemsCount}
//                 </span>
//               )}
//             </Link>
//             {isLoggedIn ? (
//               <button
//                 onClick={handleLogout}
//                 className="mr-4 flex items-center rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 <FaSignOutAlt className="mr-2" />
//                 Logout
//               </button>
//             ) : (
//               <Link
//                 to="/LogIn"
//                 className="mr-4 flex items-center rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 <FaSignInAlt className="mr-2" />
//                 Sign In
//               </Link>
//             )}
//             <button
//               className="rounded-full p-2 dark:bg-slate-50 dark:text-slate-700"
//               onClick={handleDarkMode}
//             >
//               {darkMode ? <FaSun /> : <FaMoon />}
//             </button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
// ///////////////////////
// ////////
//////////
//////////
///////////////
///////////////
/////
// ///////////////////////////////////////////////////////
// import { useState, useEffect } from "react";
// import {
//   FaMoon,
//   FaSun,
//   FaShoppingCart,
//   FaSignInAlt,
//   FaSignOutAlt,
// } from "react-icons/fa";
// import { BiMenuAltLeft } from "react-icons/bi";
// import { Link, useNavigate } from "react-router-dom";
// import { useDarkMode } from "../../DarkModeContext";

// const Header = ({ cartItemsCount }) => {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const { darkMode, toggleDarkMode } = useDarkMode();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//   }, []);

//   const handleToggleMenu = () => {
//     setToggleMenu(!toggleMenu);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     navigate("/LogIn");
//   };

//   return (
//     <header className="fixed left-0 right-0 top-3 z-50 px-5 md:px-16">
//       <nav className="mx-auto flex max-w-6xl flex-col items-center justify-between rounded-lg border-2 border-slate-500 bg-slate-50 px-3 py-3 dark:bg-slate-700 dark:text-slate-300 md:flex-row">
//         <div className="flex w-full items-center justify-between md:w-auto">
//           <Link to="/">
//             <h1 className="text-2xl font-bold">EV SERVICE</h1>
//           </Link>
//           <button
//             className="cursor-pointer rounded-full bg-slate-500 p-1 text-slate-200 dark:bg-slate-100 dark:text-slate-500 md:hidden"
//             onClick={handleToggleMenu}
//           >
//             <BiMenuAltLeft className="text-2xl" />
//           </button>
//         </div>
//         <div
//           className={`${
//             toggleMenu ? "block" : "hidden"
//           } w-full flex-col md:flex md:w-auto md:flex-row md:items-center md:justify-between`}
//         >
//           <ul className="mt-5 flex flex-col items-start md:mt-0 md:flex-row">
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Home
//               </Link>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/ContactForm"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Contact
//               </Link>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/ProfilePage"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Profile
//               </Link>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/catalog"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Catalog
//               </Link>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/Admin"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Admin
//               </Link>
//             </li>
//           </ul>
//           <div className="mt-5 flex items-center justify-end md:mt-0 md:ml-4">
//             <Link
//               to="/cart"
//               className="mr-4 rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500 relative"
//             >
//               <FaShoppingCart className="text-xl" />
//               {cartItemsCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
//                   {cartItemsCount}
//                 </span>
//               )}
//             </Link>
//             {isLoggedIn ? (
//               <button
//                 onClick={handleLogout}
//                 className="mr-4 flex items-center rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 <FaSignOutAlt className="mr-2" />
//                 Logout
//               </button>
//             ) : (
//               <Link
//                 to="/LogIn"
//                 className="mr-4 flex items-center rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 <FaSignInAlt className="mr-2" />
//                 Sign In
//               </Link>
//             )}
//             <button
//               className="rounded-full p-2 dark:bg-slate-50 dark:text-slate-700"
//               onClick={toggleDarkMode}
//             >
//               {darkMode ? <FaSun /> : <FaMoon />}
//             </button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
// ///////////////ok 90% //////
// import { useState, useEffect, useRef } from "react";
// import {
//   FaMoon,
//   FaSun,
//   FaShoppingCart,
//   FaSignInAlt,
//   FaUserCircle,
//   FaSignOutAlt,
// } from "react-icons/fa";
// import { BiMenuAltLeft } from "react-icons/bi";
// import { Link, useNavigate } from "react-router-dom";
// import { useDarkMode } from "../../DarkModeContext";

// const Header = ({ cartItemsCount }) => {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userImage, setUserImage] = useState(null);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const { darkMode, toggleDarkMode } = useDarkMode();
//   const navigate = useNavigate();
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//     if (token) {
//       fetchUserImage();
//     }
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const fetchUserImage = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch("http://localhost:5000/api/users/profile", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       if (response.ok) {
//         const data = await response.json();
//         setUserImage(data.user.profileImage);
//       }
//     } catch (error) {
//       console.error("Error fetching user image:", error);
//     }
//   };

//   const handleToggleMenu = () => {
//     setToggleMenu(!toggleMenu);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     setShowDropdown(false);
//     navigate("/LogIn");
//   };

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   return (
//     <header className="fixed left-0 right-0 top-3 z-50 px-5 md:px-16">
//       <nav className="mx-auto flex max-w-6xl flex-col items-center justify-between rounded-lg border-2 border-slate-500 bg-slate-50 px-3 py-3 dark:bg-slate-700 dark:text-slate-300 md:flex-row">
//         <div className="flex w-full items-center justify-between md:w-auto">
//           <Link to="/">
//             <h1 className="text-2xl font-bold">EV SERVICE</h1>
//           </Link>
//           <button
//             className="cursor-pointer rounded-full bg-slate-500 p-1 text-slate-200 dark:bg-slate-100 dark:text-slate-500 md:hidden"
//             onClick={handleToggleMenu}
//           >
//             <BiMenuAltLeft className="text-2xl" />
//           </button>
//         </div>
//         <div
//           className={`${
//             toggleMenu ? "block" : "hidden"
//           } w-full flex-col md:flex md:w-auto md:flex-row md:items-center md:justify-between`}
//         >
//           <ul className="mt-5 flex flex-col items-start md:mt-0 md:flex-row">
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Home
//               </Link>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/ContactForm"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Contact
//               </Link>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/catalog"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Catalog
//               </Link>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/Admin"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Admin
//               </Link>
//             </li>
//           </ul>
//           <div className="mt-5 flex items-center justify-end md:mt-0 md:ml-4">
//             <Link
//               to="/cart"
//               className="mr-4 rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500 relative"
//             >
//               <FaShoppingCart className="text-xl" />
//               {cartItemsCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
//                   {cartItemsCount}
//                 </span>
//               )}
//             </Link>
//             {isLoggedIn ? (
//               <div className="relative" ref={dropdownRef}>
//                 <button
//                   onClick={toggleDropdown}
//                   className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden"
//                 >
//                   {userImage ? (
//                     <img
//                       src={`http://localhost:5000${userImage}`}
//                       alt="User"
//                       className="w-full h-full object-cover"
//                     />
//                   ) : (
//                     <FaUserCircle className="w-full h-full text-gray-600" />
//                   )}
//                 </button>
//                 {showDropdown && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
//                     <Link
//                       to="/ProfilePage"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                       onClick={() => setShowDropdown(false)}
//                     >
//                       Profile
//                     </Link>
//                     <button
//                       onClick={handleLogout}
//                       className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <Link
//                 to="/LogIn"
//                 className="mr-4 flex items-center rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 <FaSignInAlt className="mr-2" />
//                 Sign In
//               </Link>
//             )}
//             <button
//               className="rounded-full p-2 dark:bg-slate-50 dark:text-slate-700"
//               onClick={toggleDarkMode}
//             >
//               {darkMode ? <FaSun /> : <FaMoon />}
//             </button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
// /////////////////////////////
// import { useState, useEffect, useRef } from "react";
// import {
//   FaMoon,
//   FaSun,
//   FaShoppingCart,
//   FaSignInAlt,
//   FaUserCircle,
//   FaSignOutAlt,
// } from "react-icons/fa";
// import { BiMenuAltLeft } from "react-icons/bi";
// import { Link, useNavigate } from "react-router-dom";
// import { useDarkMode } from "../../DarkModeContext";

// const Header = ({ cartItemsCount }) => {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userImage, setUserImage] = useState(null);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const { darkMode, toggleDarkMode } = useDarkMode();
//   const navigate = useNavigate();
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//     if (token) {
//       fetchUserImage();
//     }
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const fetchUserImage = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch("http://localhost:5000/api/users/profile", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       if (response.ok) {
//         const data = await response.json();
//         setUserImage(data.user.profileImage);
//       }
//     } catch (error) {
//       console.error("Error fetching user image:", error);
//     }
//   };

//   const handleToggleMenu = () => {
//     setToggleMenu(!toggleMenu);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     setShowDropdown(false);
//     navigate("/LogIn");
//   };

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   return (
//     <header className="fixed left-0 right-0 top-3 z-50 px-5 md:px-16">
//       <nav className="mx-auto flex max-w-6xl flex-col items-center justify-between rounded-lg border-2 border-slate-500 bg-slate-50 px-3 py-3 dark:bg-slate-700 dark:text-slate-300 md:flex-row">
//         <div className="flex w-full items-center justify-between md:w-auto">
//           <Link to="/">
//             <h1 className="text-2xl font-bold">EV SERVICE</h1>
//           </Link>
//           <button
//             className="cursor-pointer rounded-full bg-slate-500 p-1 text-slate-200 dark:bg-slate-100 dark:text-slate-500 md:hidden"
//             onClick={handleToggleMenu}
//           >
//             <BiMenuAltLeft className="text-2xl" />
//           </button>
//         </div>
//         <div
//           className={`${
//             toggleMenu ? "block" : "hidden"
//           } w-full flex-col md:flex md:w-auto md:flex-row md:items-center md:justify-between`}
//         >
//           <ul className="mt-5 flex flex-col items-start md:mt-0 md:flex-row">
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Home
//               </Link>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/ContactForm"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Contact
//               </Link>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/catalog"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Catalog
//               </Link>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/Admin"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Admin
//               </Link>
//             </li>
//           </ul>
//           <div className="mt-5 flex items-center justify-end md:mt-0 md:ml-4">
//             <Link
//               to="/cart"
//               className="mr-4 rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500 relative"
//             >
//               <FaShoppingCart className="text-xl" />
//               {cartItemsCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
//                   {cartItemsCount}
//                 </span>
//               )}
//             </Link>
//             {isLoggedIn ? (
//               <div className="relative mr-4" ref={dropdownRef}>
//                 <button
//                   onClick={toggleDropdown}
//                   className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden"
//                 >
//                   {userImage ? (
//                     <img
//                       src={`http://localhost:5000${userImage}`}
//                       alt="User"
//                       className="w-full h-full object-cover"
//                     />
//                   ) : (
//                     <FaUserCircle className="w-full h-full text-gray-600" />
//                   )}
//                 </button>
//                 {showDropdown && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
//                     <Link
//                       to="/ProfilePage"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                       onClick={() => setShowDropdown(false)}
//                     >
//                       Profile
//                     </Link>
//                     <button
//                       onClick={handleLogout}
//                       className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       <FaSignOutAlt className="inline-block mr-2" />
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <Link
//                 to="/LogIn"
//                 className="mr-4 flex items-center rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 <FaSignInAlt className="mr-2" />
//                 Sign In
//               </Link>
//             )}
//             <button
//               className="rounded-full p-2 dark:bg-slate-50 dark:text-slate-700"
//               onClick={toggleDarkMode}
//             >
//               {darkMode ? <FaSun /> : <FaMoon />}
//             </button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
// ///////////////////ok ok //////////////
// import { useState, useEffect, useRef } from "react";
// import {
//   FaMoon,
//   FaSun,
//   FaShoppingCart,
//   FaSignInAlt,
//   FaUserCircle,
//   FaSignOutAlt,
// } from "react-icons/fa";
// import { BiMenuAltLeft } from "react-icons/bi";
// import { Link, useNavigate } from "react-router-dom";
// import { useDarkMode } from "../../DarkModeContext";

// const Header = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userImage, setUserImage] = useState(null);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const { darkMode, toggleDarkMode } = useDarkMode();
//   const navigate = useNavigate();
//   const dropdownRef = useRef(null);
//   const [cartItemsCount, setCartItemsCount] = useState(0);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//     if (token) {
//       fetchUserImage();
//     }
//     fetchCartItemsCount();
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const fetchUserImage = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch("http://localhost:5000/api/users/profile", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       if (response.ok) {
//         const data = await response.json();
//         setUserImage(data.user.profileImage);
//       }
//     } catch (error) {
//       console.error("Error fetching user image:", error);
//     }
//   };

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

//   const handleToggleMenu = () => {
//     setToggleMenu(!toggleMenu);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     setShowDropdown(false);
//     navigate("/LogIn");
//   };

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   return (
//     <header className="fixed left-0 right-0 top-3 z-50 px-5 md:px-16">
//       <nav className="mx-auto flex max-w-6xl flex-col items-center justify-between rounded-lg border-2 border-slate-500 bg-slate-50 px-3 py-3 dark:bg-slate-700 dark:text-slate-300 md:flex-row">
// <div className="flex w-full items-center justify-between md:w-auto">
//   <Link to="/">
//     <h1 className="text-2xl font-bold">EV SERVICE</h1>
//   </Link>
//   <button
//     className="cursor-pointer rounded-full bg-slate-500 p-1 text-slate-200 dark:bg-slate-100 dark:text-slate-500 md:hidden"
//     onClick={handleToggleMenu}
//   >
//     <BiMenuAltLeft className="text-2xl" />
//   </button>
// </div>
// <div
//   className={`${
//     toggleMenu ? "block" : "hidden"
//   } w-full flex-col md:flex md:w-auto md:flex-row md:items-center md:justify-between`}
// >
//   <ul className="mt-5 flex flex-col items-start md:mt-0 md:flex-row">
//     <li className="w-full md:w-auto">
//       <Link
//         to="/"
//         className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//       >
//         Home
//       </Link>
//     </li>
//     <li className="w-full md:w-auto">
//       <Link
//         to="/ContactForm"
//         className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//       >
//         Contact
//       </Link>
//     </li>
//     <li className="w-full md:w-auto">
//       <Link
//         to="/catalog"
//         className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//       >
//         Catalog
//       </Link>
//     </li>
//     <li className="w-full md:w-auto">
//       <Link
//         to="/Admin"
//         className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//       >
//         Admin
//       </Link>
//     </li>
//   </ul>
//   <div className="mt-5 flex items-center justify-end md:mt-0 md:ml-4">
//             <Link
//               to="/cart"
//               className="mr-4 rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500 relative"
//             >
//               <FaShoppingCart className="text-xl" />
//               {cartItemsCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
//                   {cartItemsCount}
//                 </span>
//               )}
//             </Link>
//             {isLoggedIn ? (
//               <div className="relative mr-4" ref={dropdownRef}>
//                 <button
//                   onClick={toggleDropdown}
//                   className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden"
//                 >
//                   {userImage ? (
//                     <img
//                       src={`http://localhost:5000${userImage}`}
//                       alt="User"
//                       className="w-full h-full object-cover"
//                     />
//                   ) : (
//                     <FaUserCircle className="w-full h-full text-gray-600" />
//                   )}
//                 </button>
//                 {showDropdown && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
//                     <Link
//                       to="/ProfilePage"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                       onClick={() => setShowDropdown(false)}
//                     >
//                       Profile
//                     </Link>
//                     <button
//                       onClick={handleLogout}
//                       className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       <FaSignOutAlt className="inline-block mr-2" />
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <Link
//                 to="/LogIn"
//                 className="mr-4 flex items-center rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 <FaSignInAlt className="mr-2" />
//                 Sign In
//               </Link>
//             )}
//             <button
//               className="rounded-full p-2 dark:bg-slate-50 dark:text-slate-700"
//               onClick={toggleDarkMode}
//             >
//               {darkMode ? <FaSun /> : <FaMoon />}
//             </button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
// ////////////////okokokkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkok/////////////
// import { useState, useEffect, useRef } from "react";
// import {
//   FaMoon,
//   FaSun,
//   FaShoppingCart,
//   FaSignInAlt,
//   FaUserCircle,
//   FaSignOutAlt,
// } from "react-icons/fa";
// import { BiMenuAltLeft } from "react-icons/bi";
// import { Link, useNavigate } from "react-router-dom";
// import { useDarkMode } from "../../DarkModeContext";
// import { useCart } from "../../CartContext/CartContext";

// const Header = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userImage, setUserImage] = useState(null);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const { darkMode, toggleDarkMode } = useDarkMode();
//   const navigate = useNavigate();
//   const dropdownRef = useRef(null);
//   const { cartItemsCount } = useCart();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//     if (token) {
//       fetchUserImage();
//     }
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const fetchUserImage = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch("http://localhost:5000/api/users/profile", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       if (response.ok) {
//         const data = await response.json();
//         setUserImage(data.user.profileImage);
//       }
//     } catch (error) {
//       console.error("Error fetching user image:", error);
//     }
//   };

//   const handleToggleMenu = () => {
//     setToggleMenu(!toggleMenu);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     setShowDropdown(false);
//     navigate("/LogIn");
//   };

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   return (
//     <header className="fixed left-0 right-0 top-3 z-50 px-5 md:px-16">
//       <nav className="mx-auto flex max-w-6xl flex-col items-center justify-between rounded-lg border-2 border-slate-500 bg-slate-50 px-3 py-3 dark:bg-slate-700 dark:text-slate-300 md:flex-row">
//         <div className="flex w-full items-center justify-between md:w-auto">
//           <Link to="/">
//             <h1 className="text-2xl font-bold">EV SERVICE</h1>
//           </Link>
//           <button
//             className="cursor-pointer rounded-full bg-slate-500 p-1 text-slate-200 dark:bg-slate-100 dark:text-slate-500 md:hidden"
//             onClick={handleToggleMenu}
//           >
//             <BiMenuAltLeft className="text-2xl" />
//           </button>
//         </div>
//         <div
//           className={`${
//             toggleMenu ? "block" : "hidden"
//           } w-full flex-col md:flex md:w-auto md:flex-row md:items-center md:justify-between`}
//         >
//           <ul className="mt-5 flex flex-col items-start md:mt-0 md:flex-row">
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Home
//               </Link>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/ContactForm"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Contact
//               </Link>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/catalog"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Catalog
//               </Link>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/Admin"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Admin
//               </Link>
//             </li>
//           </ul>
//           <div className="mt-5 flex items-center justify-end md:mt-0 md:ml-4">
//             <Link
//               to="/cart"
//               className="mr-4 rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500 relative"
//             >
//               <FaShoppingCart className="text-xl" />
//               {cartItemsCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
//                   {cartItemsCount}
//                 </span>
//               )}
//             </Link>
//             {isLoggedIn ? (
//               <div className="relative mr-4" ref={dropdownRef}>
//                 <button
//                   onClick={toggleDropdown}
//                   className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden"
//                 >
//                   {userImage ? (
//                     <img
//                       src={`http://localhost:5000${userImage}`}
//                       alt="User"
//                       className="w-full h-full object-cover"
//                     />
//                   ) : (
//                     <FaUserCircle className="w-full h-full text-gray-600" />
//                   )}
//                 </button>
//                 {showDropdown && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
//                     <Link
//                       to="/ProfilePage"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                       onClick={() => setShowDropdown(false)}
//                     >
//                       Profile
//                     </Link>
//                     <button
//                       onClick={handleLogout}
//                       className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       <FaSignOutAlt className="inline-block mr-2" />
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <Link
//                 to="/LogIn"
//                 className="mr-4 flex items-center rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 <FaSignInAlt className="mr-2" />
//                 Sign In
//               </Link>
//             )}
//             <button
//               className="rounded-full p-2 dark:bg-slate-50 dark:text-slate-700"
//               onClick={toggleDarkMode}
//             >
//               {darkMode ? <FaSun /> : <FaMoon />}
//             </button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
////////////////////////////ok up ok up //////////////////////////////

//////////////////////////////////
//////////number static///////////////////////
// ////////////////////////////////
// import { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import {
//   FaMoon,
//   FaSun,
//   FaShoppingCart,
//   FaSignInAlt,
//   FaUserCircle,
//   FaSignOutAlt,
// } from "react-icons/fa";
// import { BiMenuAltLeft } from "react-icons/bi";
// import { Link, useNavigate } from "react-router-dom";
// import { useDarkMode } from "../../DarkModeContext";
// import { useCart } from "../../CartContext/CartContext";

// const Header = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userImage, setUserImage] = useState(null);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] =
//     useState(false);
//   const [notifications, setNotifications] = useState([]);
//   const { darkMode, toggleDarkMode } = useDarkMode();
//   const navigate = useNavigate();
//   const dropdownRef = useRef(null);
//   const notificationDropdownRef = useRef(null);
//   const { cartItemsCount } = useCart();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//     if (token) {
//       fetchUserImage();
//       fetchNotifications();
//     }
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//       if (
//         notificationDropdownRef.current &&
//         !notificationDropdownRef.current.contains(event.target)
//       ) {
//         setIsNotificationDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const fetchUserImage = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch("http://localhost:5000/api/users/profile", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       if (response.ok) {
//         const data = await response.json();
//         setUserImage(data.user.profileImage);
//       }
//     } catch (error) {
//       console.error("Error fetching user image:", error);
//     }
//   };

//   const fetchNotifications = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:5000/api/notification/notifications",
//         {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         }
//       );
//       setNotifications(response.data);
//     } catch (error) {
//       console.error("Error fetching notifications:", error);
//     }
//   };

//   const handleToggleMenu = () => {
//     setToggleMenu(!toggleMenu);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     setShowDropdown(false);
//     navigate("/LogIn");
//   };

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const handleNotificationDropdownToggle = () => {
//     setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
//   };

//   const handleMarkAsRead = async (notificationId) => {
//     try {
//       await axios.put(
//         `http://localhost:5000/api/notification/notifications/${notificationId}/read`,
//         null,
//         {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         }
//       );
//       fetchNotifications();
//     } catch (error) {
//       console.error("Error marking notification as read:", error);
//     }
//   };

//   const handleNotificationClick = async (notification) => {
//     try {
//       await handleMarkAsRead(notification.id);
//       const productId = notification.product_id;
//       if (productId) {
//         navigate(`/details/${productId}`, {
//           state: { commentId: notification.comment_id },
//         });
//       } else {
//         console.error(
//           "No valid product ID found in notification:",
//           notification
//         );
//       }
//     } catch (error) {
//       console.error("Error handling notification click:", error);
//     }
//     setIsNotificationDropdownOpen(false);
//   };

//   return (
//     <header className="fixed left-0 right-0 top-3 z-50 px-5 md:px-16">
//       <nav className="mx-auto flex max-w-6xl flex-col items-center justify-between rounded-lg border-2 border-slate-500 bg-slate-50 px-3 py-3 dark:bg-slate-700 dark:text-slate-300 md:flex-row">
//         <div className="flex w-full items-center justify-between md:w-auto">
//           <Link to="/">
//             <h1 className="text-2xl font-bold">EV SERVICE</h1>
//           </Link>
//           <button
//             className="cursor-pointer rounded-full bg-slate-500 p-1 text-slate-200 dark:bg-slate-100 dark:text-slate-500 md:hidden"
//             onClick={handleToggleMenu}
//           >
//             <BiMenuAltLeft className="text-2xl" />
//           </button>
//         </div>
//         <div
//           className={`${
//             toggleMenu ? "block" : "hidden"
//           } w-full flex-col md:flex md:w-auto md:flex-row md:items-center md:justify-between`}
//         >
//           <ul className="mt-5 flex flex-col items-start md:mt-0 md:flex-row">
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Home
//               </Link>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/ContactForm"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Contact
//               </Link>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/catalog"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Catalog
//               </Link>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/Admin"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Admin
//               </Link>
//             </li>
//           </ul>
//           <div className="mt-5 flex items-center justify-end md:mt-0 md:ml-4">
//             <Link
//               to="/cart"
//               className="mr-4 rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500 relative"
//             >
//               <FaShoppingCart className="text-xl" />
//               {cartItemsCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
//                   {cartItemsCount}
//                 </span>
//               )}
//             </Link>
//             {isLoggedIn ? (
//               <>
//                 <div className="relative mr-4" ref={notificationDropdownRef}>
//                   <button
//                     onClick={handleNotificationDropdownToggle}
//                     className="text-gray-600 hover:text-[#04333a] focus:outline-none"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//                       />
//                     </svg>
//                   </button>
//                   {notifications.filter((n) => !n.read).length > 0 && (
//                     <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
//                       {notifications.filter((n) => !n.read).length}
//                     </span>
//                   )}
//                   {isNotificationDropdownOpen && (
//                     <div className="absolute top-full right-0 mt-2 w-64 bg-[#f6f5f2] border border-gray-200 rounded-lg shadow-lg z-10">
//                       <ul className="py-2 max-h-64 overflow-y-auto">
//                         {notifications.length > 0 ? (
//                           notifications.map((notification) => (
//                             <li
//                               key={notification.id}
//                               className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                               onClick={() =>
//                                 handleNotificationClick(notification)
//                               }
//                             >
//                               <div className="flex items-center justify-between">
//                                 <span
//                                   className={`text-sm ${
//                                     notification.read
//                                       ? "text-gray-500"
//                                       : "text-gray-700 font-semibold"
//                                   }`}
//                                 >
//                                   {notification.message}
//                                 </span>
//                               </div>
//                             </li>
//                           ))
//                         ) : (
//                           <li className="px-4 py-2 text-sm text-gray-500">
//                             No notifications
//                           </li>
//                         )}
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//                 <div className="relative mr-4" ref={dropdownRef}>
//                   <button
//                     onClick={toggleDropdown}
//                     className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden"
//                   >
//                     {userImage ? (
//                       <img
//                         src={`http://localhost:5000${userImage}`}
//                         alt="User"
//                         className="w-full h-full object-cover"
//                       />
//                     ) : (
//                       <FaUserCircle className="w-full h-full text-gray-600" />
//                     )}
//                   </button>
//                   {showDropdown && (
//                     <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
//                       <Link
//                         to="/ProfilePage"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                         onClick={() => setShowDropdown(false)}
//                       >
//                         Profile
//                       </Link>
//                       <button
//                         onClick={handleLogout}
//                         className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                       >
//                         <FaSignOutAlt className="inline-block mr-2" />
//                         Logout
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </>
//             ) : (
//               <Link
//                 to="/LogIn"
//                 className="mr-4 flex items-center rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 <FaSignInAlt className="mr-2" />
//                 Sign In
//               </Link>
//             )}
//             <button
//               className="rounded-full p-2 dark:bg-slate-50 dark:text-slate-700"
//               onClick={toggleDarkMode}
//             >
//               {darkMode ? <FaSun /> : <FaMoon />}
//             </button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
//////////////////////////////////////////////////////////////////
///////////////////////
// /////////////////////////////////////////////////////////
// import { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import {
//   FaMoon,
//   FaSun,
//   FaShoppingCart,
//   FaSignInAlt,
//   FaUserCircle,
//   FaSignOutAlt,
// } from "react-icons/fa";
// import { BiMenuAltLeft } from "react-icons/bi";
// import { Link, useNavigate } from "react-router-dom";
// import { useDarkMode } from "../../DarkModeContext";
// import { useCart } from "../../CartContext/CartContext";

// const Header = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userImage, setUserImage] = useState(null);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] =
//     useState(false);
//   const [notifications, setNotifications] = useState([]);
//   const [unreadNotificationCount, setUnreadNotificationCount] = useState(0);
//   const { darkMode, toggleDarkMode } = useDarkMode();
//   const navigate = useNavigate();
//   const dropdownRef = useRef(null);
//   const notificationDropdownRef = useRef(null);
//   const { cartItemsCount } = useCart();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//     if (token) {
//       fetchUserImage();
//       fetchNotifications();
//       fetchUnreadNotificationCount();
//     }
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//       if (
//         notificationDropdownRef.current &&
//         !notificationDropdownRef.current.contains(event.target)
//       ) {
//         setIsNotificationDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const fetchUserImage = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch("http://localhost:5000/api/users/profile", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       if (response.ok) {
//         const data = await response.json();
//         setUserImage(data.user.profileImage);
//       }
//     } catch (error) {
//       console.error("Error fetching user image:", error);
//     }
//   };

//   const fetchNotifications = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:5000/api/notification/notifications",
//         {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         }
//       );
//       setNotifications(response.data);
//     } catch (error) {
//       console.error("Error fetching notifications:", error);
//     }
//   };

//   const fetchUnreadNotificationCount = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:5000/api/notification/unread-count",
//         {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         }
//       );
//       setUnreadNotificationCount(response.data.count);
//     } catch (error) {
//       console.error("Error fetching unread notification count:", error);
//     }
//   };

//   const handleToggleMenu = () => {
//     setToggleMenu(!toggleMenu);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     setShowDropdown(false);
//     navigate("/LogIn");
//   };

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const handleNotificationDropdownToggle = () => {
//     setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
//   };

//   const handleMarkAsRead = async (notificationId) => {
//     try {
//       await axios.put(
//         `http://localhost:5000/api/notification/notifications/${notificationId}/read`,
//         null,
//         {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         }
//       );
//       fetchNotifications();
//       setUnreadNotificationCount((prevCount) => Math.max(prevCount - 1, 0));
//     } catch (error) {
//       console.error("Error marking notification as read:", error);
//     }
//   };

//   const handleNotificationClick = async (notification) => {
//     try {
//       await handleMarkAsRead(notification._id);
//       const productId = notification.product_id;
//       if (productId) {
//         navigate(`/details/${productId}`, {
//           state: { commentId: notification.comment_id },
//         });
//       } else {
//         console.error(
//           "No valid product ID found in notification:",
//           notification
//         );
//       }
//     } catch (error) {
//       console.error("Error handling notification click:", error);
//     }
//     setIsNotificationDropdownOpen(false);
//   };

//   return (
//     <header className="fixed left-0 right-0 top-3 z-50 px-5 md:px-16">
//       <nav className="mx-auto flex max-w-6xl flex-col items-center justify-between rounded-lg border-2 border-slate-500 bg-slate-50 px-3 py-3 dark:bg-slate-700 dark:text-slate-300 md:flex-row">
//         <div className="flex w-full items-center justify-between md:w-auto">
//           <Link to="/">
//             <h1 className="text-2xl font-bold">EV SERVICE</h1>
//           </Link>
//           <button
//             className="cursor-pointer rounded-full bg-slate-500 p-1 text-slate-200 dark:bg-slate-100 dark:text-slate-500 md:hidden"
//             onClick={handleToggleMenu}
//           >
//             <BiMenuAltLeft className="text-2xl" />
//           </button>
//         </div>
//         <div
//           className={`${
//             toggleMenu ? "block" : "hidden"
//           } w-full flex-col md:flex md:w-auto md:flex-row md:items-center md:justify-between`}
//         >
//           <ul className="mt-5 flex flex-col items-start md:mt-0 md:flex-row">
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Home
//               </Link>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/ContactForm"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Contact
//               </Link>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/catalog"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Catalog
//               </Link>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/Admin"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Admin
//               </Link>
//             </li>
//           </ul>
//           <div className="mt-5 flex items-center justify-end md:mt-0 md:ml-4">
//             <Link
//               to="/cart"
//               className="mr-4 rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500 relative"
//             >
//               <FaShoppingCart className="text-xl" />
//               {cartItemsCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
//                   {cartItemsCount}
//                 </span>
//               )}
//             </Link>
//             {isLoggedIn ? (
//               <>
//                 <div className="relative mr-4" ref={notificationDropdownRef}>
//                   <button
//                     onClick={handleNotificationDropdownToggle}
//                     className="text-gray-600 hover:text-[#04333a] focus:outline-none"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//                       />
//                     </svg>
//                   </button>
//                   {unreadNotificationCount > 0 && (
//                     <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
//                       {unreadNotificationCount}
//                     </span>
//                   )}
//                   {isNotificationDropdownOpen && (
//                     <div className="absolute top-full right-0 mt-2 w-64 bg-[#f6f5f2] border border-gray-200 rounded-lg shadow-lg z-10">
//                       <ul className="py-2 max-h-64 overflow-y-auto">
//                         {notifications.length > 0 ? (
//                           notifications.map((notification) => (
//                             <li
//                               key={notification._id}
//                               className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                               onClick={() =>
//                                 handleNotificationClick(notification)
//                               }
//                             >
//                               <div className="flex items-center justify-between">
//                                 <span
//                                   className={`text-sm ${
//                                     notification.read
//                                       ? "text-gray-500"
//                                       : "text-gray-700 font-semibold"
//                                   }`}
//                                 >
//                                   {notification.message}
//                                 </span>
//                               </div>
//                             </li>
//                           ))
//                         ) : (
//                           <li className="px-4 py-2 text-sm text-gray-500">
//                             No notifications
//                           </li>
//                         )}
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//                 <div className="relative mr-4" ref={dropdownRef}>
//                   <button
//                     onClick={toggleDropdown}
//                     className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden"
//                   >
//                     {userImage ? (
//                       <img
//                         src={`http://localhost:5000${userImage}`}
//                         alt="User"
//                         className="w-full h-full object-cover"
//                       />
//                     ) : (
//                       <FaUserCircle className="w-full h-full text-gray-600" />
//                     )}
//                   </button>
//                   {showDropdown && (
//                     <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
//                       <Link
//                         to="/ProfilePage"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                         onClick={() => setShowDropdown(false)}
//                       >
//                         Profile
//                       </Link>
//                       <button
//                         onClick={handleLogout}
//                         className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                       >
//                         <FaSignOutAlt className="inline-block mr-2" />
//                         Logout
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </>
//             ) : (
//               <Link
//                 to="/LogIn"
//                 className="mr-4 flex items-center rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 <FaSignInAlt className="mr-2" />
//                 Sign In
//               </Link>
//             )}
//             <button
//               className="rounded-full p-2 dark:bg-slate-50 dark:text-slate-700"
//               onClick={toggleDarkMode}
//             >
//               {darkMode ? <FaSun /> : <FaMoon />}
//             </button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
///////////////////////////////////////////////////
///////////////////////////////////////////////
// // // ////////////wooooooooooooooooooork with out number/////////////////////////////////
// import { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import {
//   FaMoon,
//   FaSun,
//   FaShoppingCart,
//   FaSignInAlt,
//   FaUserCircle,
//   FaSignOutAlt,
// } from "react-icons/fa";
// import { BiMenuAltLeft } from "react-icons/bi";
// import { Link, useNavigate } from "react-router-dom";
// import { useDarkMode } from "../../DarkModeContext";
// import { useCart } from "../../CartContext/CartContext";

// const Header = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userImage, setUserImage] = useState(null);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] =
//     useState(false);
//   const [notifications, setNotifications] = useState([]);
//   const [unreadNotificationCount, setUnreadNotificationCount] = useState(0);
//   const { darkMode, toggleDarkMode } = useDarkMode();
//   const navigate = useNavigate();
//   const dropdownRef = useRef(null);
//   const notificationDropdownRef = useRef(null);
//   const { cartItemsCount } = useCart();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//     if (token) {
//       fetchUserImage();
//       fetchNotifications();
//       fetchUnreadNotificationCount();
//     }
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//       if (
//         notificationDropdownRef.current &&
//         !notificationDropdownRef.current.contains(event.target)
//       ) {
//         setIsNotificationDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const fetchUserImage = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch("http://localhost:5000/api/users/profile", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       if (response.ok) {
//         const data = await response.json();
//         setUserImage(data.user.profileImage);
//       }
//     } catch (error) {
//       console.error("Error fetching user image:", error);
//     }
//   };

//   const fetchNotifications = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:5000/api/notification/notifications",
//         {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         }
//       );
//       setNotifications(response.data);
//     } catch (error) {
//       console.error("Error fetching notifications:", error);
//     }
//   };

//   const fetchUnreadNotificationCount = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:5000/api/notification/notifications/unread-count",
//         {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         }
//       );
//       setUnreadNotificationCount(response.data.count);
//     } catch (error) {
//       console.error("Error fetching unread notification count:", error);
//     }
//   };

//   const handleToggleMenu = () => {
//     setToggleMenu(!toggleMenu);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     setShowDropdown(false);
//     navigate("/LogIn");
//   };

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const handleNotificationDropdownToggle = () => {
//     setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
//   };

//   const handleMarkAsRead = async (notificationId) => {
//     try {
//       await axios.put(
//         `http://localhost:5000/api/notification/notifications/${notificationId}/read`,
//         null,
//         {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         }
//       );
//       fetchNotifications();
//       setUnreadNotificationCount((prevCount) => Math.max(prevCount - 1, 0));
//     } catch (error) {
//       console.error("Error marking notification as read:", error);
//     }
//   };

//   const handleNotificationClick = async (notification) => {
//     try {
//       if (!notification.read) {
//         await handleMarkAsRead(notification._id);
//       }
//       const productId = notification.product_id;
//       if (productId) {
//         navigate(`/details/${productId}`, {
//           state: { commentId: notification.comment_id },
//         });
//       } else {
//         console.error(
//           "No valid product ID found in notification:",
//           notification
//         );
//       }
//     } catch (error) {
//       console.error("Error handling notification click:", error);
//     }
//     setIsNotificationDropdownOpen(false);
//   };

//   return (
//     <header className="fixed left-0 right-0 top-3 z-50 px-5 md:px-16">
//       <nav className="mx-auto flex max-w-6xl flex-col items-center justify-between rounded-lg border-2 border-slate-500 bg-slate-50 px-3 py-3 dark:bg-slate-700 dark:text-slate-300 md:flex-row">
//         <div className="flex w-full items-center justify-between md:w-auto">
//           <Link to="/">
//             <h1 className="text-2xl font-bold">EV SERVICE</h1>
//           </Link>
//           <button
//             className="cursor-pointer rounded-full bg-slate-500 p-1 text-slate-200 dark:bg-slate-100 dark:text-slate-500 md:hidden"
//             onClick={handleToggleMenu}
//           >
//             <BiMenuAltLeft className="text-2xl" />
//           </button>
//         </div>
//         <div
//           className={`${
//             toggleMenu ? "block" : "hidden"
//           } w-full flex-col md:flex md:w-auto md:flex-row md:items-center md:justify-between`}
//         >
//           <ul className="mt-5 flex flex-col items-start md:mt-0 md:flex-row">
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Home
//               </Link>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/ContactForm"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Contact
//               </Link>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/catalog"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Catalog
//               </Link>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/Admin"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Admin
//               </Link>
//             </li>
//           </ul>
//           <div className="mt-5 flex items-center justify-end md:mt-0 md:ml-4">
//             <Link
//               to="/cart"
//               className="mr-4 rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500 relative"
//             >
//               <FaShoppingCart className="text-xl" />
//               {cartItemsCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
//                   {cartItemsCount}
//                 </span>
//               )}
//             </Link>
//             {isLoggedIn ? (
//               <>
//                 <div className="relative mr-4" ref={notificationDropdownRef}>
//                   <button
//                     onClick={handleNotificationDropdownToggle}
//                     className="text-gray-600 hover:text-[#04333a] focus:outline-none relative"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//                       />
//                     </svg>
//                     {unreadNotificationCount > 0 && (
//                       <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
//                         {unreadNotificationCount}
//                       </span>
//                     )}
//                   </button>
//                   {isNotificationDropdownOpen && (
//                     <div className="absolute top-full right-0 mt-2 w-64 bg-[#f6f5f2] border border-gray-200 rounded-lg shadow-lg z-10">
//                       <ul className="py-2 max-h-64 overflow-y-auto">
//                         {notifications.length > 0 ? (
//                           notifications.map((notification) => (
//                             <li
//                               key={notification._id}
//                               className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                               onClick={() =>
//                                 handleNotificationClick(notification)
//                               }
//                             >
//                               <div className="flex items-center justify-between">
//                                 <span
//                                   className={`text-sm ${
//                                     notification.read
//                                       ? "text-gray-500"
//                                       : "text-gray-700 font-semibold"
//                                   }`}
//                                 >
//                                   {notification.message}
//                                 </span>
//                               </div>
//                             </li>
//                           ))
//                         ) : (
//                           <li className="px-4 py-2 text-sm text-gray-500">
//                             No notifications
//                           </li>
//                         )}
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//                 <div className="relative mr-4" ref={dropdownRef}>
//                   <button
//                     onClick={toggleDropdown}
//                     className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden"
//                   >
//                     {userImage ? (
//                       <img
//                         src={`http://localhost:5000${userImage}`}
//                         alt="User"
//                         className="w-full h-full object-cover"
//                       />
//                     ) : (
//                       <FaUserCircle className="w-full h-full text-gray-600" />
//                     )}
//                   </button>
//                   {showDropdown && (
//                     <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
//                       <Link
//                         to="/ProfilePage"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                         onClick={() => setShowDropdown(false)}
//                       >
//                         Profile
//                       </Link>
//                       <button
//                         onClick={handleLogout}
//                         className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                       >
//                         <FaSignOutAlt className="inline-block mr-2" />
//                         Logout
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </>
//             ) : (
//               <Link
//                 to="/LogIn"
//                 className="mr-4 flex items-center rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 <FaSignInAlt className="mr-2" />
//                 Sign In
//               </Link>
//             )}
//             <button
//               className="rounded-full p-2 dark:bg-slate-50 dark:text-slate-700"
//               onClick={toggleDarkMode}
//             >
//               {darkMode ? <FaSun /> : <FaMoon />}
//             </button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
//////////////////////////////ok up full//////
// ////////////////////////////////////////////////

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  FaMoon,
  FaSun,
  FaShoppingCart,
  FaSignInAlt,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useDarkMode } from "../../DarkModeContext";
import { useCart } from "../../CartContext/CartContext";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userImage, setUserImage] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] =
    useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreadNotificationCount, setUnreadNotificationCount] = useState(0);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const notificationDropdownRef = useRef(null);
  const { cartItemsCount } = useCart();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
    if (token) {
      fetchUserImage();
      fetchNotifications();
      fetchUnreadNotificationCount();
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
      if (
        notificationDropdownRef.current &&
        !notificationDropdownRef.current.contains(event.target)
      ) {
        setIsNotificationDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fetchUserImage = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/users/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUserImage(data.user.profileImage);
      }
    } catch (error) {
      console.error("Error fetching user image:", error);
    }
  };

  const fetchNotifications = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }
      const response = await axios.get(
        "http://localhost:5000/api/notification/notifications",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setNotifications(response.data);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  const fetchUnreadNotificationCount = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }
      const response = await axios.get(
        "http://localhost:5000/api/notification/notifications/unread-count",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUnreadNotificationCount(response.data.count);
    } catch (error) {
      console.error("Error fetching unread notification count:", error);
    }
  };

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setShowDropdown(false);
    navigate("/LogIn");
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleNotificationDropdownToggle = () => {
    setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
  };

  const handleMarkAsRead = async (notificationId) => {
    try {
      await axios.put(
        `http://localhost:5000/api/notification/notifications/${notificationId}/read`,
        null,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      fetchNotifications();
      setUnreadNotificationCount((prevCount) => Math.max(prevCount - 1, 0));
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  const handleNotificationClick = async (notification) => {
    try {
      if (!notification.read) {
        await handleMarkAsRead(notification._id);
      }
      const productId = notification.product_id;
      if (productId) {
        navigate(`/details/${productId}`, {
          state: { commentId: notification.comment_id },
        });
      } else {
        console.error(
          "No valid product ID found in notification:",
          notification
        );
      }
    } catch (error) {
      console.error("Error handling notification click:", error);
    }
    setIsNotificationDropdownOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-3 z-50 px-5 md:px-16">
      <nav className="mx-auto flex max-w-6xl flex-col items-center justify-between rounded-lg border-2 border-slate-500 bg-slate-50 px-3 py-3 dark:bg-slate-700 dark:text-slate-300 md:flex-row">
        <div className="flex w-full items-center justify-between md:w-auto">
          <Link to="/">
            <h1 className="text-2xl font-bold">EV SERVICE</h1>
          </Link>
          <button
            className="cursor-pointer rounded-full bg-slate-500 p-1 text-slate-200 dark:bg-slate-100 dark:text-slate-500 md:hidden"
            onClick={handleToggleMenu}
          >
            <BiMenuAltLeft className="text-2xl" />
          </button>
        </div>
        <div
          className={`${
            toggleMenu ? "block" : "hidden"
          } w-full flex-col md:flex md:w-auto md:flex-row md:items-center md:justify-between`}
        >
          <ul className="mt-5 flex flex-col items-start md:mt-0 md:flex-row">
            <li className="w-full md:w-auto">
              <Link
                to="/"
                className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
              >
                Home
              </Link>
            </li>
            <li className="w-full md:w-auto">
              <Link
                to="/ContactForm"
                className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
              >
                Contact
              </Link>
            </li>
            <li className="w-full md:w-auto">
              <Link
                to="/catalog"
                className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
              >
                Catalog
              </Link>
            </li>
            <li className="w-full md:w-auto">
              <Link
                to="/Admin"
                className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
              >
                Admin
              </Link>
            </li>
          </ul>
          <div className="mt-5 flex items-center justify-end md:mt-0 md:ml-4">
            <Link
              to="/cart"
              className="mr-4 rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500 relative"
            >
              <FaShoppingCart className="text-xl" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            {isLoggedIn ? (
              <>
                <div className="relative mr-4" ref={notificationDropdownRef}>
                  <button
                    onClick={handleNotificationDropdownToggle}
                    className="text-gray-600 hover:text-[#04333a] focus:outline-none relative"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                    {unreadNotificationCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {unreadNotificationCount}
                      </span>
                    )}
                  </button>
                  {isNotificationDropdownOpen && (
                    <div className="absolute top-full right-0 mt-2 w-64 bg-[#f6f5f2] border border-gray-200 rounded-lg shadow-lg z-10">
                      <ul className="py-2 max-h-64 overflow-y-auto">
                        {notifications.length > 0 ? (
                          notifications.map((notification) => (
                            <li
                              key={notification._id}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                              onClick={() =>
                                handleNotificationClick(notification)
                              }
                            >
                              <div className="flex items-center justify-between">
                                <span
                                  className={`text-sm ${
                                    notification.read
                                      ? "text-gray-500"
                                      : "text-gray-700 font-semibold"
                                  }`}
                                >
                                  {notification.message}
                                </span>
                              </div>
                            </li>
                          ))
                        ) : (
                          <li className="px-4 py-2 text-sm text-gray-500">
                            No notifications
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="relative mr-4" ref={dropdownRef}>
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden"
                  >
                    {userImage ? (
                      <img
                        src={`http://localhost:5000${userImage}`}
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <FaUserCircle className="w-full h-full text-gray-600" />
                    )}
                  </button>
                  {showDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                      <Link
                        to="/ProfilePage"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setShowDropdown(false)}
                      >
                        Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <FaSignOutAlt className="inline-block mr-2" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <Link
                to="/LogIn"
                className="mr-4 flex items-center rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500"
              >
                <FaSignInAlt className="mr-2" />
                Sign In
              </Link>
            )}
            <button
              className="rounded-full p-2 dark:bg-slate-50 dark:text-slate-700"
              onClick={toggleDarkMode}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
