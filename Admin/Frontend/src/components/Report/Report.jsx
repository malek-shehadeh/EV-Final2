////////////////ok ok ok ok ok ok /////////////
import React, { useState, useEffect } from "react";
import { Search, Check, X, Trash2, ChevronDown, ChevronUp } from "lucide-react";
import axios from "axios";

const Report = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [reports, setReports] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);
  const [expandedReports, setExpandedReports] = useState({});

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/reports");
      setReports(response.data);
      setFilteredReports(response.data);
    } catch (error) {
      console.error("Error fetching reports:", error);
    }
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = reports.filter(
      (report) =>
        (report.reporter_id &&
          report.reporter_id.username &&
          report.reporter_id.username.toLowerCase().includes(term)) ||
        report.reason.toLowerCase().includes(term) ||
        report.status.toLowerCase().includes(term) ||
        (report.comment_id &&
          report.comment_id.user_id &&
          report.comment_id.user_id.username &&
          report.comment_id.user_id.username.toLowerCase().includes(term)) ||
        (report.comment_id &&
          report.comment_id.comment_text &&
          report.comment_id.comment_text.toLowerCase().includes(term))
    );
    setFilteredReports(filtered);
  };

  const handleUpdateStatus = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:4000/api/reports/${id}`, {
        status: newStatus,
      });
      fetchReports();
    } catch (error) {
      console.error("Error updating report status:", error);
      alert("Failed to update report status. Please try again.");
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(
        `http://localhost:4000/api/reports/comments/${commentId}`
      );
      fetchReports();
      alert("Comment and associated reports deleted successfully.");
    } catch (error) {
      console.error("Error deleting comment:", error);
      alert("Failed to delete comment. Please try again.");
    }
  };

  const toggleReportExpansion = (reportId) => {
    setExpandedReports((prev) => ({
      ...prev,
      [reportId]: !prev[reportId],
    }));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500";
      case "reviewed":
        return "bg-blue-500";
      case "resolved":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-100 mb-8">
          Report Dashboard
        </h1>
        <div className="mb-6 flex justify-between items-center">
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search reports..."
              className="w-full bg-gray-800 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleSearch}
              value={searchTerm}
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
          </div>
          <div className="text-gray-300">
            Total Reports: {filteredReports.length}
          </div>
        </div>

        <div className="space-y-4">
          {filteredReports.map((report) => (
            <div
              key={report._id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div
                className="p-4 flex justify-between items-center cursor-pointer"
                onClick={() => toggleReportExpansion(report._id)}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-3 h-3 rounded-full ${getStatusColor(
                      report.status
                    )}`}
                  ></div>
                  <span className="text-lg font-medium text-gray-100">
                    Report by {report.reporter_id?.username || "Unknown"}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-400">{report.reason}</span>
                  {expandedReports[report._id] ? (
                    <ChevronUp className="text-gray-400" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-400" size={20} />
                  )}
                </div>
              </div>
              {expandedReports[report._id] && (
                <div className="p-4 bg-gray-750 border-t border-gray-700">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-100 mb-2">
                      Reported Comment
                    </h3>
                    <p className="text-gray-300 bg-gray-700 p-3 rounded">
                      {report.comment_id?.comment_text || "N/A"}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-400">
                        Commenter
                      </h4>
                      <p className="text-gray-200">
                        {report.comment_id?.user_id?.username || "Unknown"}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400">
                        Status
                      </h4>
                      <p className="text-gray-200 capitalize">
                        {report.status}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400">
                        Reason
                      </h4>
                      <p className="text-gray-200 capitalize">
                        {report.reason}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400">
                        Description
                      </h4>
                      <p className="text-gray-200">{report.description}</p>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <button
                      onClick={() => handleUpdateStatus(report._id, "reviewed")}
                      className={`px-3 py-1 rounded ${
                        report.status === "reviewed"
                          ? "bg-blue-700 text-blue-200 cursor-not-allowed"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                      disabled={report.status === "reviewed"}
                    >
                      <Check size={16} className="inline mr-1" /> Review
                    </button>
                    <button
                      onClick={() => handleUpdateStatus(report._id, "resolved")}
                      className={`px-3 py-1 rounded ${
                        report.status === "resolved"
                          ? "bg-green-700 text-green-200 cursor-not-allowed"
                          : "bg-green-600 text-white hover:bg-green-700"
                      }`}
                      disabled={report.status === "resolved"}
                    >
                      <X size={16} className="inline mr-1" /> Resolve
                    </button>
                    <button
                      onClick={() => handleDeleteComment(report.comment_id._id)}
                      className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      <Trash2 size={16} className="inline mr-1" /> Delete
                      Comment
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Report;
