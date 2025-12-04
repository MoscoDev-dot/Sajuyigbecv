"use client";
import React from "react";
import { Playfair_Display } from "next/font/google";
import { Container, Link } from "@mui/material";
import LeftLine from "./LeftLine";
import Success from "./Success";
import { motion } from "framer-motion";

// google font
const bokor = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const Socials = () => {
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
      <Container
        maxWidth={false}
        className="w-full   relative overflow-x-hidden"
      >
        <LeftLine />

        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className="mx-auto">
            <motion.p
              style={{ fontFamily: "Kugile" }}
              className={`text-[23px] pt-10  md:text-[40px] lg:text-[100px] font-[400] uppercase`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              socials
            </motion.p>
            <motion.div
              className="italic font-semibold opacity-75"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants}>
                <Success
                  text={"Linkedln"}
                  link={"https://www.linkedin.com/in/faith-olaniyi"}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Success
                  text={"Twitter"}
                  link={"https://twitter.com/faith_olaniyi"}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Success
                  text={"Instagram"}
                  link={"https://www.instagram.com/faith_olaniyi"}
                />
              </motion.div>
            </motion.div>
          </div>

          <Link
            color="inherit"
            href="mailto: hello@faitholaniyi.com"
            underline="none"
          >
            <motion.div
              className="flex justify-center md:border-l border-t md:border-t-0 ms-1 md:ms-0  items-center h-full"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.4 }}
            >
              <p
                style={{ fontFamily: "Kugile" }}
                className="italic md:text-5xl text-xl mt-5 pb-8 md:pb-0 md:mt-0 text-center"
              >
                Connect with me <br /> via mail at hello@faitholaniyi.com
              </p>
            </motion.div>
          </Link>
        </div>
      </Container>
      <hr />
    </div>
  );
};

export default Socials;
