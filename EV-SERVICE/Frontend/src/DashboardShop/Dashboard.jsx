// import React, { useState } from "react";
// import SidebarComponent from "./SidebarComponent";
// import AddProductPage from "./AddProductPage";
// import ProductListPage from "./ProductListPage";
// import ShopOwnerProfile from "./shopOwnerProfile";
// const Dashboard = () => {
//   const [activePage, setActivePage] = useState("add");

//   return (
//     <div className="flex">
//       <SidebarComponent setActivePage={setActivePage} />
//       <main className="flex-1 p-6">
//         {activePage === "add" ? <AddProductPage /> : <ProductListPage />}
//       </main>
//     </div>
//   );
// };

// export default Dashboard;
////////////

// import React, { useState } from "react";
// import SidebarComponent from "./SidebarComponent";
// import AddProductPage from "./AddProductPage";
// import ProductListPage from "./ProductListPage";
// import ShopOwnerProfile from "./shopOwnerProfile";

// const Dashboard = () => {
//   const [activePage, setActivePage] = useState("add");
//   const shopOwnerId = "your-shop-owner-id"; // Replace with actual shop owner ID

//   return (
//     <div className="flex">
//       <SidebarComponent setActivePage={setActivePage} />
//       <main className="flex-1 p-6">
//         {activePage === "add" && <AddProductPage />}
//         {activePage === "list" && <ProductListPage />}
//         {activePage === "profile" && (
//           <ShopOwnerProfile shopOwnerId={shopOwnerId} />
//         )}
//       </main>
//     </div>
//   );
// };

// export default Dashboard;
//////////////
import React, { useState } from "react";
import SidebarComponent from "./SidebarComponent";
import AddProductPage from "./AddProductPage";
import ProductListPage from "./ProductListPage";
import ShopOwnerProfile from "./shopOwnerProfile"; // تأكد من أن اسم الملف صحيح
import Orders from "./Orders"; // استيراد مكون الأوامر

const Dashboard = () => {
  const [activePage, setActivePage] = useState("add");
  const shopOwnerId = "your-shop-owner-id"; // استبدل بـ ID الخاص بالمالك

  return (
    <div className="flex">
      <SidebarComponent setActivePage={setActivePage} />
      <main className="flex-1 p-6">
        {activePage === "add" && <AddProductPage />}
        {activePage === "list" && <ProductListPage />}
        {activePage === "orders" && <Orders />} {/* إضافة هذه السطر */}
        {activePage === "profile" && (
          <ShopOwnerProfile shopOwnerId={shopOwnerId} />
        )}
      </main>
    </div>
  );
};

export default Dashboard;
