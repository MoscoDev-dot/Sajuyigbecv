"use client";
import React from "react";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";

import WorkPropsText from "./WorkPropsText";

// google font
const bokor = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const WorkTexts = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <motion.div
        className=""
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants}>
          <WorkPropsText
            text1={"Spak.Africa"}
            text2={"president and founder"}
            text3={"2022"}
            link="https://spak.africa"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <WorkPropsText
            text1={"Entrepreneurship Village"}
            text2={"special assistant"}
            text3={"2021"}
            link={"https://entrepreneurshipvillage.org"}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <WorkPropsText
            text1={"Etrust Fund"}
            text2={"chief of staff"}
            text3={"2021"}
            link={"https://etrustfund.org"}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <WorkPropsText
            text1={"AFRICA BLOCKCHAIN INSTITUTE"}
            text2={"Executive Assistant"}
            text3={"2021"}
            link={"https://www.africablockchaininstitute.org"}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WorkTexts;
