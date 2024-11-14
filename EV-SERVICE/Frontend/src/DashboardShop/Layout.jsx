// Layout.jsx
// import React, { useState } from "react";
// import { Outlet } from "react-router-dom";
// import SidebarComponent from "./SidebarComponent";

// const Layout = () => {
//   const [activePage, setActivePage] = useState("add");

//   return (
//     <div className="flex min-h-screen">
//       <SidebarComponent setActivePage={setActivePage} />
//       <main className="flex-1 p-8 bg-gray-100">
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default Layout;
////

import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SidebarComponent from "./SidebarComponent";

const Layout = () => {
  const [activePage, setActivePage] = useState("add");

  return (
    <div className="flex min-h-screen bg-gray-100">
      <SidebarComponent setActivePage={setActivePage} />
      <main className="flex-1 p-8 overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
