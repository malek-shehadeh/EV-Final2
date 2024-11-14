import React from "react";
import clsx from "clsx";

const Badge = ({ children, variant = "default", className, ...props }) => {
  const variantClasses = {
    default:
      "bg-neutral-100 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200",
    primary: "bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-blue-200",
    success:
      "bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-200",
    danger: "bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-200",
    warning:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-200",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export { Badge };
