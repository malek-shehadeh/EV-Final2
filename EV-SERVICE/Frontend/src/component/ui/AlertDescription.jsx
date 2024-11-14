import React from "react";

const AlertDescription = ({ children, ...props }) => {
  return (
    <p className="text-sm text-gray-700" {...props}>
      {children}
    </p>
  );
};

export default AlertDescription;
