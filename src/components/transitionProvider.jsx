"use client";

import Navbar from "./navbar";
import { delay, motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100"
      >
        {/* INITIAL BLACK DIV */}
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[75px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        {/* PATH NAME DIV */}
        <motion.div
          className="fixed w-fit h-fit m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {pathName.substring(1)}
        </motion.div>

        {/* FINAL BLACK DIV */}
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[75px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)] ">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
