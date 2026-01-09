"use client";

import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useEffect } from "react";
 

export default function Modal({ isOpen, onClose, title, children }) {
     // Close modal on ESC key
     useEffect(() => {
          const handleEsc = (e) => {
               if (e.key === "Escape") onClose();
          };
          window.addEventListener("keydown", handleEsc);
          return () => window.removeEventListener("keydown", handleEsc);
     }, [onClose]);

     return (
          <AnimatePresence>
               {isOpen && (
                    <>
                         {/* Backdrop */}
                         <motion.div
                              className="fixed inset-0 bg-black/50 z-40"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              onClick={onClose}
                         />

                         {/* Modal */}
                         <motion.div
                              className="fixed inset-0 z-50 flex items-center justify-center p-4"
                              initial={{ opacity: 0, scale: 0.9, y: 30 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.9, y: 30 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                         >
                              <div className="bg-white rounded-xl shadow-xl max-w-lg w-full relative p-6">
                                   {/* Close Button */}
                                   <button
                                        onClick={onClose}
                                        className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                                   >
                                        <X className="w-6 h-6" />
                                   </button>

                                   {/* Title */}
                                   {title && (
                                        <p className=" font-inter text-xl  mb-4 pr-8">{title}</p>
                                   )}

                                   {/* Content */}
                                   <div>{children}</div>
                             
                              </div>
                         </motion.div>
                    </>
               )}
          </AnimatePresence>
     );
}
