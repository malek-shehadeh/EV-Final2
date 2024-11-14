import React from "react";

const Input = ({ label, error, className = "", ...props }) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        className={`
          w-full px-3 py-2 
          border border-gray-300 
          rounded-md 
          shadow-sm
          focus:ring-2 
          focus:ring-blue-500 
          focus:border-blue-500 
          ${error ? "border-red-500" : ""}
          ${className}
        `}
        {...props}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

export { Input };
