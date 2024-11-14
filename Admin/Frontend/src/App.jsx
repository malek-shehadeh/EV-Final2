// import { Route, Routes } from "react-router-dom";

// import Sidebar from "./components/common/Sidebar";

// import OverviewPage from "./pages/OverviewPage";
// import ProductsPage from "./pages/ProductsPage";
// import SalesPage from "./pages/SalesPage";
// import OrdersPage from "./pages/OrdersPage";
// import AnalyticsPage from "./pages/AnalyticsPage";
// import SettingsPage from "./pages/SettingsPage";
// import ContactPage from "./pages/ContactPage";
// import ShopOwnersPage from "./pages/ShopOwnersPage";
// import UsersPage from "./pages/UsersPage";

// function App() {
//   return (
//     <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
//       {/* BG */}
//       <div className="fixed inset-0 z-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
//         <div className="absolute inset-0 backdrop-blur-sm" />
//       </div>

//       <Sidebar />
//       <Routes>
//         <Route path="/" element={<OverviewPage />} />
//         <Route path="/products" element={<ProductsPage />} />
//         <Route path="/Users" element={<UsersPage />} />
//         <Route path="/ShopOwner" element={<ShopOwnersPage />} />
//         <Route path="/sales" element={<SalesPage />} />
//         <Route path="/contact" element={<ContactPage />} />
//         <Route path="/orders" element={<OrdersPage />} />
//         <Route path="/analytics" element={<AnalyticsPage />} />
//         <Route path="/settings" element={<SettingsPage />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
///////////////////////////////
import React, { useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "./components/common/Sidebar";
import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
import ContactPage from "./pages/ContactPage";
import ShopOwnersPage from "./pages/ShopOwnersPage";
import UsersPage from "./pages/UsersPage";
import Login from "./components/login/Login";
import { checkAuthStatus } from "./store/authSlice";
import Reportpage from "./pages/Reportpage";
import MaintenanceCenterPage from "./pages/MaintenanceCenter";

function PrivateRoute({ children }) {
  const { isAuthenticated, isLoading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate]);

  return isAuthenticated ? children : null;
}

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAuthStatus());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* BG */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      {isAuthenticated && <Sidebar />}
      <Routes>
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <OverviewPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <ProductsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/Users"
          element={
            <PrivateRoute>
              <UsersPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/ShopOwner"
          element={
            <PrivateRoute>
              <ShopOwnersPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/sales"
          element={
            <PrivateRoute>
              <SalesPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <PrivateRoute>
              <ContactPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <PrivateRoute>
              <OrdersPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/analytics"
          element={
            <PrivateRoute>
              <AnalyticsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <SettingsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/report"
          element={
            <PrivateRoute>
              <Reportpage />
            </PrivateRoute>
          }
        />
        <Route
          path="/MaintenanceCenter"
          element={
            <PrivateRoute>
              <MaintenanceCenterPage />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
