import { useState, useEffect } from "react";
import axios from "axios";
import { CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import DailyOrders from "../components/orders/DailyOrders";
import OrderDistribution from "../components/orders/OrderDistribution";
import OrdersTable from "../components/orders/OrdersTable";

const OrdersPage = () => {
  const [orderStats, setOrderStats] = useState({
    totalOrders: 0,
    pendingOrders: 0,
    completedOrders: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    fetchOrderStats();
  }, []);

  const fetchOrderStats = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/orders");
      const orders = response.data;

      // Calculate statistics from orders
      const stats = {
        totalOrders: orders.length,
        pendingOrders: orders.filter((order) => order.status === "pending")
          .length,
        completedOrders: orders.filter((order) => order.status === "completed")
          .length,
        totalRevenue: orders.reduce(
          (total, order) => total + (order.amount || 0),
          0
        ),
      };

      setOrderStats(stats);
    } catch (error) {
      console.error("Error fetching order stats:", error);
    }
  };

  return (
    <div className="flex-1 relative z-10 overflow-auto">
      <Header title={"Orders"} />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Orders"
            icon={ShoppingBag}
            value={orderStats.totalOrders.toString()}
            color="#6366F1"
          />
          <StatCard
            name="Pending Orders"
            icon={Clock}
            value={orderStats.pendingOrders.toString()}
            color="#F59E0B"
          />
          <StatCard
            name="Completed Orders"
            icon={CheckCircle}
            value={orderStats.completedOrders.toString()}
            color="#10B981"
          />
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value={`$${orderStats.totalRevenue.toFixed(2)}`}
            color="#EF4444"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <DailyOrders />
          <OrderDistribution />
        </div>

        <OrdersTable onOrdersUpdate={fetchOrderStats} />
      </main>
    </div>
  );
};

export default OrdersPage;
