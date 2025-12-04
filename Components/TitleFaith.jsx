"use client";
import { Container } from "@mui/material";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";

// google font
const bokor = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const TitleFaith = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="py-20 px-2 md:px-5">
      <Container maxWidth={false} className="w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-row items-center justify-between">
            <motion.h1
              variants={itemVariants}
              style={{ fontFamily: "Kugile" }}
              className={` lg:text-[100px] text-[40px]`}
            >
              FOUNDER & CEO, <br />
              CHIEF OF STAFF, <br />
            </motion.h1>

            <motion.div variants={imageVariants}>
              <Image
                className="circular-hero hidden md:block img-fluid"
                src="/circular-hero.png"
                alt="Mr.Faith"
                width={160}
                height={190}
              />
            </motion.div>
          </div>
          <div>
            <motion.h1
              variants={itemVariants}
              className={` lg:text-[100px] text-[40px]`}
              style={{ fontFamily: "Kugile" }}
            >
              CREATIVE SPECIALIST, <br /> BUSINESS STRATEGIST
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-[10px] lg:text-[15px]"
            >
              CONSISTENCY IN GROWTH, PERFECTION IN SUSTAINABILITY.
            </motion.p>
            <motion.div variants={imageVariants}>
              <Image
                className="circular-hero md:hidden mt-10 float-right img-fluid"
                src="/circular-hero.png"
                alt="Mr.Faith"
                width={100}
                height={100}
              />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default TitleFaith;
