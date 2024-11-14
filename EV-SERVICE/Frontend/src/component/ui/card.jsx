// import React from "react";

// const Card = ({ children, className }) => {
//   return (
//     <div className={`bg-white shadow-lg rounded-lg ${className || ""}`}>
//       {children}
//     </div>
//   );
// };

// const CardHeader = ({ children, className }) => {
//   return <div className={`px-6 py-4 ${className || ""}`}>{children}</div>;
// };

// const CardTitle = ({ children, className }) => {
//   return (
//     <h2 className={`text-xl md:text-2xl font-bold ${className || ""}`}>
//       {children}
//     </h2>
//   );
// };

// const CardContent = ({ children, className }) => {
//   return <div className={`px-6 py-4 ${className || ""}`}>{children}</div>;
// };

// const CardFooter = ({ children, className }) => {
//   return (
//     <div className={`px-6 py-4 border-t rounded-b-lg ${className || ""}`}>
//       {children}
//     </div>
//   );
// };

// export { Card, CardHeader, CardTitle, CardContent, CardFooter };
//////////////////////////////////////////////////////////////////////////
import React from "react";

const Card = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg ${className || ""}`}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className }) => {
  return <div className={`px-6 py-4 ${className || ""}`}>{children}</div>;
};

const CardTitle = ({ children, className }) => {
  return (
    <h2 className={`text-xl md:text-2xl font-bold ${className || ""}`}>
      {children}
    </h2>
  );
};

const CardContent = ({ children, className }) => {
  return <div className={`px-6 py-4 ${className || ""}`}>{children}</div>;
};

const CardFooter = ({ children, className }) => {
  return (
    <div className={`px-6 py-4 border-t rounded-b-lg ${className || ""}`}>
      {children}
    </div>
  );
};

const Dialog = ({ open, onOpenChange, children }) => {
  return (
    <div
      className={`fixed z-50 inset-0 overflow-y-auto ${
        open ? "visible" : "invisible"
      }`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {children}
    </div>
  );
};

const DialogContent = ({ children }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {children}
    </div>
  );
};

const DialogHeader = ({ children }) => {
  return <div className="px-6 py-4 border-b">{children}</div>;
};

const DialogTitle = ({ children }) => {
  return (
    <h2 className="text-xl font-bold text-gray-900" id="modal-title">
      {children}
    </h2>
  );
};

const DialogDescription = ({ children }) => {
  return <div className="px-6 py-4">{children}</div>;
};

const DialogClose = ({ onClick }) => {
  return (
    <button
      type="button"
      className="bg-transparent hover:bg-gray-200 rounded-full p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
      onClick={onClick}
    >
      <span className="sr-only">Close</span>
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

const DialogActions = ({ children }) => {
  return (
    <div className="px-6 py-4 bg-gray-50 flex justify-end space-x-4">
      {children}
    </div>
  );
};

export {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogActions,
};
