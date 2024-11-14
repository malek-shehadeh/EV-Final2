import React from "react";

const Separator = ({ className = "", orientation = "horizontal" }) => {
  const baseStyles =
    orientation === "horizontal" ? "w-full h-px my-4" : "h-full w-px mx-4";

  return (
    <div
      className={`${baseStyles} bg-gray-200 ${className}`}
      role="separator"
    />
  );
};

export { Separator };
