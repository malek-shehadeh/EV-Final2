import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesTrendChart from "../components/products/SalesTrendChart";
import ProductsTable from "../components/products/ProductsTable";

const ProductsPage = () => {
  const [productStats, setProductStats] = useState({
    totalProducts: 0,
    topSelling: 0,
    lowStock: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    fetchProductStats();
  }, []);

  const fetchProductStats = async () => {
    try {
      // Fetch products and orders data in parallel
      const [productsResponse, ordersResponse] = await Promise.all([
        axios.get("http://localhost:4000/api/products"),
        axios.get("http://localhost:4000/api/orders"),
      ]);

      const products = productsResponse.data;
      const orders = ordersResponse.data;

      // Calculate total products (excluding deleted ones)
      const totalProducts = products.filter(
        (product) => !product.isDeletedAdmin
      ).length;

      // Calculate low stock (assuming products with quantity less than 10 are low stock)
      const lowStock = products.filter(
        (product) => !product.isDeletedAdmin && product.quantity < 10
      ).length;

      // Create a map to track product sales
      const productSales = new Map();

      // Calculate total revenue and track product sales
      let totalRevenue = 0;
      orders.forEach((order) => {
        if (order.status === "completed") {
          totalRevenue += order.amount || 0;

          // Track product sales
          order.cartItems?.forEach((item) => {
            const currentSales = productSales.get(item.productId) || 0;
            productSales.set(
              item.productId,
              currentSales + (item.quantity || 0)
            );
          });
        }
      });

      // Find number of top selling products (products with sales > 50)
      const topSelling = Array.from(productSales.values()).filter(
        (sales) => sales > 50
      ).length;

      setProductStats({
        totalProducts,
        topSelling,
        lowStock,
        totalRevenue,
      });
    } catch (error) {
      console.error("Error fetching product stats:", error);
    }
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Products" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Products"
            icon={Package}
            value={productStats.totalProducts.toString()}
            color="#6366F1"
          />
          <StatCard
            name="Top Selling"
            icon={TrendingUp}
            value={productStats.topSelling.toString()}
            color="#10B981"
          />
          <StatCard
            name="Low Stock"
            icon={AlertTriangle}
            value={productStats.lowStock.toString()}
            color="#F59E0B"
          />
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value={`$${productStats.totalRevenue.toFixed(2)}`}
            color="#EF4444"
          />
        </motion.div>

        <ProductsTable onProductsUpdate={fetchProductStats} />

        <div className="grid grid-col-1 lg:grid-cols-2 gap-8">
          <SalesTrendChart />
          <CategoryDistributionChart />
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
