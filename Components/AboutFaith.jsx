"use client";
import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Roboto_Serif } from "next/font/google";
import { Lens } from "@/Components/magicui/lens";
import { motion } from "framer-motion";

const roboto = Roboto_Serif({
  subsets: ["latin"],
  weight: "300",
});

const AboutFaith = () => {
  return (
    <>
      <Container maxWidth={false} className="w-full">
        <div
          className={` ${roboto.className} grid mt-60 md:mt-0 grid-cols-1 lg:grid-cols-2 gap-4`}
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="uppercase mt-0 lg:mt-20 md:text-lg text-base"
            >
              Faith Olaniyi is a creative generalist specialized in
              <span className="font-black ps-2">
                product and business management.
              </span>{" "}
              He is an atypical thinker and problem solver who constantly
              generates innovative solutions to complex problems. He prides
              himself as a prolific technological management strategist,
              recognized for diverse experiences across varieties of industries.
            </motion.div>

            <div className="flex justify-end">
              <Lens>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
                >
                  <Image
                    src="/faith.png"
                    alt="Mr. Faith"
                    width={400}
                    height={350}
                    className="lg:hidden mt-5"
                  />
                </motion.div>
              </Lens>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="uppercase md:text-lg text-base mt-5"
            >
              Faith is a seasoned Chief of Staff and a member of the Chief of
              Staff association in the US. His resourcefulness and expertise
              gives him an edge in ensuring impeccable result. He has about six
              years of profound exposure in strategic planning, process
              optimization, business system building, business development,
              product and project management gained from across private, public,
              regional & international platforms.
            </motion.div>
          </div>
          <div>
            <Lens>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <Image
                  src="/faith.png"
                  alt="Mr. Faith"
                  width={400}
                  height={350}
                  className="lg:block hidden w-[40vw] py-8 ms-0 lg:ms-5 h-[100vh]"
                />
              </motion.div>
            </Lens>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutFaith;
