import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { Frown } from "lucide-react";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="text-9xl text-gray-800 dark:text-gray-200"
      >
        <Frown />
      </motion.div>
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-6xl font-semibold text-gray-800 dark:text-gray-300 mt-6"
      >
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-xl text-gray-600 dark:text-gray-400 mt-2"
      >
        Page Not Found
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-4 text-gray-600 dark:text-gray-400"
      >
        The page you're looking for doesn't exist or has been moved.
      </motion.p>
      <Link
        to="/"
        className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white rounded-md shadow-lg hover:bg-indigo-700 transition-colors duration-200"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
