import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogContent = ({ children, className, ...props }) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50 z-40" />
    <DialogPrimitive.Content
      className={`fixed z-50 max-w-md w-full bg-white p-6 rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${className}`}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
);
export const DialogHeader = ({ children, className, ...props }) => (
  <div
    className={`flex items-center justify-between mb-4 ${className}`}
    {...props}
  >
    {children}
  </div>
);
export const DialogTitle = ({ children, className, ...props }) => (
  <DialogPrimitive.Title
    className={`text-xl font-semibold text-gray-900 ${className}`}
    {...props}
  >
    {children}
  </DialogPrimitive.Title>
);
export const DialogDescription = ({ children, className, ...props }) => (
  <DialogPrimitive.Description
    className={`mt-2 text-sm text-gray-600 ${className}`}
    {...props}
  >
    {children}
  </DialogPrimitive.Description>
);
export const DialogClose = ({ className, ...props }) => (
  <DialogPrimitive.Close
    className={`absolute top-3 right-3 inline-flex items-center justify-center rounded-full p-1 text-gray-500 hover:bg-gray-200 ${className}`}
    {...props}
  >
    <span className="sr-only">Close</span>✕
  </DialogPrimitive.Close>
);

export default {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
};
