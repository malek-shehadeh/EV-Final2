import React from "react";

const Alert = ({ variant = "default", children, ...props }) => {
  let variantClasses = "";
  switch (variant) {
    case "default":
      variantClasses = "bg-gray-50 text-gray-900 border-gray-200";
      break;
    case "destructive":
      variantClasses = "bg-red-50 text-red-900 border-red-200";
      break;
    case "info":
      variantClasses = "bg-blue-50 text-blue-900 border-blue-200";
      break;
    case "success":
      variantClasses = "bg-green-50 text-green-900 border-green-200";
      break;
    case "warning":
      variantClasses = "bg-yellow-50 text-yellow-900 border-yellow-200";
      break;
    default:
      variantClasses = "";
  }

  return (
    <div className={`rounded-md p-4 border ${variantClasses}`} {...props}>
      {children}
    </div>
  );
};

export default Alert;
