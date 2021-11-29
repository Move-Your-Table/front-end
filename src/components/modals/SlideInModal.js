import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
};

const SlideInModal = ({ handleClose, children, isOpen, title }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={"initial"}
          animate={"isOpen"}
          exit={"exit"}
          variants={modalVariant}
        >
          <div
            className="fixed inset-0 overflow-hidden"
            aria-labelledby="slide-over-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="absolute inset-0 overflow-hidden">
              <div
                onClick={handleClose}
                className="absolute inset-0 bg-opacity-75 transition-opacity bg-gray-800 blur-md"
                aria-hidden="true"
              ></div>
              <motion.div
                initial={{ left: "200%" }}
                animate={{ left: "" }}
                exit={{ left: "200%" }}
                transition={{ easeInOut: [0.17, 0.67, 0.83, 0.67] }}
                className="fixed inset-y-0 right-0 pl-10 max-w-full flex"
              >
                <div className="relative w-screen max-w-3xl bg-myt_ghostwhite">
                  <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                    <button
                      onClick={handleClose}
                      type="button"
                      className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      <span className="sr-only">Close panel</span>

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
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-auto text-black">
                    <div className="px-4 sm:px-6">
                      <h2
                        className="text-lg font-medium text-gray-900"
                        id="slide-over-title"
                      >
                        {title ? title : "Default title"}
                      </h2>
                    </div>
                    <div className="mt-6 relative flex-1 px-4 sm:px-6">
                      <div className="absolute inset-0 px-4 sm:px-6">
                        <div
                          className="h-full  border-gray-200"
                          aria-hidden="true"
                        >
                          {children}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SlideInModal;
