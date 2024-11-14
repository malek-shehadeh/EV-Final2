// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Search } from "lucide-react";
// import axios from "axios";

// const Users = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [shopOwners, setShopOwners] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchShopOwners();
//   }, []);

//   const fetchShopOwners = async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await axios.get("http://localhost:4000/api/shop-owners");
//       if (Array.isArray(response.data)) {
//         setShopOwners(response.data);
//       } else {
//         console.error("Unexpected data format:", response.data);
//         setError("Received unexpected data format from server");
//       }
//     } catch (error) {
//       console.error("Error fetching shop owners:", error);
//       setError("Failed to fetch shop owners. Please try again later.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSearch = (e) => {
//     const term = e.target.value.toLowerCase();
//     setSearchTerm(term);
//   };

//   const handleStatusChange = async (id, newStatus) => {
//     try {
//       await axios.patch(`http://localhost:4000/api/shop-owners/${id}`, {
//         isApproved: newStatus,
//       });
//       fetchShopOwners(); // Refresh the list after updating
//     } catch (error) {
//       console.error("Error updating shop owner status:", error);
//       setError("Failed to update shop owner status. Please try again.");
//     }
//   };

//   const filteredOwners = shopOwners.filter(
//     (owner) =>
//       owner.ownerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       owner.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (isLoading) {
//     return <div className="text-white">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-red-500">{error}</div>;
//   }

//   return (
//     <motion.div
//       className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.2 }}
//     >
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-xl font-semibold text-gray-100">Shop Owners</h2>
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search shop owners..."
//             className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//           <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
//         </div>
//       </div>

//       {shopOwners.length === 0 ? (
//         <div className="text-gray-300">No shop owners found.</div>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-700">
//             <thead>
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                   Name
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                   Email
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                   Shop Phone
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                   Shop Location
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                   Status
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>

//             <tbody className="divide-y divide-gray-700">
//               {filteredOwners.map((owner) => (
//                 <motion.tr
//                   key={owner._id}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="flex items-center">
//                       <div className="flex-shrink-0 h-10 w-10">
//                         <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold">
//                           {owner.ownerName.charAt(0)}
//                         </div>
//                       </div>
//                       <div className="ml-4">
//                         <div className="text-sm font-medium text-gray-100">
//                           {owner.ownerName}
//                         </div>
//                       </div>
//                     </div>
//                   </td>

//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-300">{owner.email}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-300">
//                       {owner.shopPhone}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-300">
//                       {owner.shopLocation}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span
//                       className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                         owner.isApproved
//                           ? "bg-green-800 text-green-100"
//                           : "bg-red-800 text-red-100"
//                       }`}
//                     >
//                       {owner.isApproved ? "Active" : "Inactive"}
//                     </span>
//                   </td>

//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
//                     <button
//                       className={`px-3 py-1 rounded-md ${
//                         owner.isApproved
//                           ? "bg-red-600 hover:bg-red-700"
//                           : "bg-green-600 hover:bg-green-700"
//                       } text-white`}
//                       onClick={() =>
//                         handleStatusChange(owner._id, !owner.isApproved)
//                       }
//                     >
//                       {owner.isApproved ? "Deactivate" : "Activate"}
//                     </button>
//                   </td>
//                 </motion.tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </motion.div>
//   );
// };

// export default Users;
////////////////////////////////////////
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import axios from "axios";

const Users = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://localhost:4000/api/users");
      if (Array.isArray(response.data)) {
        setUsers(response.data);
      } else {
        console.error("Unexpected data format:", response.data);
        setError("Received unexpected data format from server");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setError("Failed to fetch users. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.patch(`http://localhost:4000/api/users/${id}`, {
        isApproved: newStatus,
      });
      fetchUsers(); // Refresh the list after updating
    } catch (error) {
      console.error("Error updating user status:", error);
      setError("Failed to update user status. Please try again.");
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Users</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search users..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      {users.length === 0 ? (
        <div className="text-gray-300">No users found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-700">
              {filteredUsers.map((user) => (
                <motion.tr
                  key={user._id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        {user.profileImage ? (
                          // <img
                          //   className="h-10 w-10 rounded-full"
                          //   src={user.profileImage}
                          //   alt={user.username}
                          // />
                          <img
                            className="h-10 w-10 rounded-full"
                            src={`http://localhost:5000/uploads/${user.profileImage}`}
                            alt={user.username}
                          />
                        ) : (
                          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold">
                            {user.username.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-100">
                          {user.username}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-300">{user.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.isApproved
                          ? "bg-green-800 text-green-100"
                          : "bg-red-800 text-red-100"
                      }`}
                    >
                      {user.isApproved ? "Active" : "Inactive"}
                    </span>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    <button
                      className={`px-3 py-1 rounded-md ${
                        user.isApproved
                          ? "bg-red-600 hover:bg-red-700"
                          : "bg-green-600 hover:bg-green-700"
                      } text-white`}
                      onClick={() =>
                        handleStatusChange(user._id, !user.isApproved)
                      }
                    >
                      {user.isApproved ? "Deactivate" : "Activate"}
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </motion.div>
  );
};

export default Users;
