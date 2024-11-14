import { useState, useEffect } from "react";
import axios from "axios";
import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import Users from "../components/Users/Users";

const UsersPage = () => {
  const [userStats, setUserStats] = useState({
    totalUsers: 0,
    newUsersToday: 0,
    activeUsers: 0,
    churnRate: "0%",
  });

  useEffect(() => {
    fetchUserStats();
  }, []);

  const fetchUserStats = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/users");
      const users = response.data;

      // Get today's date at midnight for comparison
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      // Calculate statistics
      const stats = {
        totalUsers: users.length,

        // Count users created today
        newUsersToday: users.filter((user) => {
          const createdAt = new Date(user.createdAt);
          createdAt.setHours(0, 0, 0, 0);
          return createdAt.getTime() === today.getTime();
        }).length,

        // Count active users (users who are approved)
        activeUsers: users.filter((user) => user.isApproved).length,

        // Calculate churn rate (percentage of inactive users)
        churnRate:
          users.length > 0
            ? (
                (users.filter((user) => !user.isApproved).length /
                  users.length) *
                100
              ).toFixed(1) + "%"
            : "0%",
      };

      setUserStats(stats);
    } catch (error) {
      console.error("Error fetching user stats:", error);
    }
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Users" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Users"
            icon={UsersIcon}
            value={userStats.totalUsers.toLocaleString()}
            color="#6366F1"
          />
          <StatCard
            name="New Users Today"
            icon={UserPlus}
            value={userStats.newUsersToday.toString()}
            color="#10B981"
          />
          <StatCard
            name="Active Users"
            icon={UserCheck}
            value={userStats.activeUsers.toLocaleString()}
            color="#F59E0B"
          />
          <StatCard
            name="Churn Rate"
            icon={UserX}
            value={userStats.churnRate}
            color="#EF4444"
          />
        </motion.div>

        <Users onUsersUpdate={fetchUserStats} />
      </main>
    </div>
  );
};

export default UsersPage;
