"use client";

import { motion } from "framer-motion";

const Animation = () => {
  const variants = {
    variant1: {
      x: 400,
      y: 300,
      opacity: 0.5,
      transition: {
        duration: 3,
        delay: 2,
      },
    },
    variant2: {
      x: 100,
      y: -300,
      rotation: 90,
    },
  };

  return (
    <div className=" h-full flex justify-center items-center">
      <motion.div
        className="w-96 h-96 bg-red-400 rounded"
        variants={variants}
        animate="variant1"
        /* Use the animate propriety to write conditions */
      ></motion.div>
    </div>
  );
};

export default Animation;
