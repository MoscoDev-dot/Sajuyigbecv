"use client";

import React, { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import { useScroll } from "framer-motion";
import { useTransform } from "framer-motion";

import Image from "next/image";
import { Lens } from "@/components/magicui/lens";

const WorkAnime = () => {
  const images = [
    { src: "/second.png", alt: "chief" },
    { src: "/third.png", alt: "chief-1" },
    { src: "/fourth.png", alt: "chief-2" },
    { src: "/second.png", alt: "chief-5" },
    { src: "/dummy.png", alt: "chief-3" },
  ];

  const { scrollY } = useScroll();
  const indexTransform = useTransform(
    scrollY,
    [0, 2000],
    [0, images.length - 1]
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = indexTransform.on("change", (v) => {
      const clampedIndex = Math.min(
        images.length - 1,
        Math.max(0, Math.floor(v))
      );
      setIndex(clampedIndex);
    });
    return () => unsubscribe();
  }, [indexTransform, images.length]);

  return (
    <div className=" md:flex hidden md:block justify-center items-center h-screen w-full bg-white">
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Lens>
          <Image
            src={images[index].src}
            alt={images[index].alt}
            width={500}
            height={500}
            priority
            className="w-full h-full "
          />
        </Lens>
      </motion.div>
    </div>
  );
};

export default WorkAnime;
