import React from "react";
import clsx from "clsx";

const Table = ({ children, className, ...props }) => {
  return (
    <table
      className={clsx("w-full text-left text-sm font-light", className)}
      {...props}
    >
      {children}
    </table>
  );
};

const TableHead = ({ children, className, ...props }) => {
  return (
    <thead
      className={clsx(
        "border-b font-medium dark:border-neutral-700",
        className
      )}
      {...props}
    >
      {children}
    </thead>
  );
};

const TableBody = ({ children, className, ...props }) => {
  return (
    <tbody className={clsx("dark:border-neutral-700", className)} {...props}>
      {children}
    </tbody>
  );
};

const TableRow = ({ children, className, ...props }) => {
  return (
    <tr
      className={clsx(
        "border-b transition-colors duration-300 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800",
        className
      )}
      {...props}
    >
      {children}
    </tr>
  );
};

const TableCell = ({ children, className, ...props }) => {
  return (
    <td className={clsx("px-6 py-4", className)} {...props}>
      {children}
    </td>
  );
};

export { Table, TableHead, TableBody, TableRow, TableCell };
