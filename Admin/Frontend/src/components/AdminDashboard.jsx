// // Frontend: src/components/AdminDashboard.js
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const AdminDashboard = () => {
//   const [reports, setReports] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchReports();
//   }, []);

//   const fetchReports = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(
//         "http://localhost:5000/api/admin/reported-comments",
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
//           },
//         }
//       );
//       setReports(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching reports:", error);
//       setError("Failed to fetch reports. Please try again.");
//       setLoading(false);
//     }
//   };

//   const handleReviewReport = async (reportId, action) => {
//     try {
//       await axios.put(
//         `http://localhost:5000/api/admin/reports/${reportId}/review`,
//         { action },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
//           },
//         }
//       );
//       fetchReports(); // Refresh the list after action
//     } catch (error) {
//       console.error("Error reviewing report:", error);
//       setError("Failed to review report. Please try again.");
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="admin-dashboard">
//       <h1 className="text-2xl font-bold mb-4">
//         Admin Dashboard - Reported Comments
//       </h1>
//       {reports.length === 0 ? (
//         <p>No reported comments to review.</p>
//       ) : (
//         reports.map((report) => (
//           <div
//             key={report._id}
//             className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
//           >
//             <h2 className="text-xl font-semibold mb-2">Report #{report._id}</h2>
//             <p>
//               <strong>Reporter:</strong> {report.reporter_id.username}
//             </p>
//             <p>
//               <strong>Reason:</strong> {report.reason}
//             </p>
//             <p>
//               <strong>Description:</strong> {report.description}
//             </p>
//             <p>
//               <strong>Reported Comment:</strong>{" "}
//               {report.comment_id.comment_text}
//             </p>
//             <p>
//               <strong>Comment Author:</strong>{" "}
//               {report.comment_id.user_id.username}
//             </p>
//             <div className="mt-4">
//               <button
//                 onClick={() => handleReviewReport(report._id, "approve")}
//                 className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
//               >
//                 Approve Report (Delete Comment)
//               </button>
//               <button
//                 onClick={() => handleReviewReport(report._id, "reject")}
//                 className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 Reject Report
//               </button>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;
