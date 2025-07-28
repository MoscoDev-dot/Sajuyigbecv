"use client";
import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

// google font
const bokor = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const TitleFaith = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    // Check screen size on mount and on resize 
    const checkScreen = () => setIsLargeScreen(window.innerWidth >= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkScreen);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Only transform on medium and larger screens
  const transformStyle = isLargeScreen
    ? {
        transform: `translateX(-${scrollY * 0.3}px) rotateX(${Math.min(
          scrollY,
          90
        )}deg)`,
        opacity: Math.max(1 - scrollY / 300, 3),
        transition:
          "transform 3.5s cubic-bezier(0.6,0.7,0.8,0.9), opacity 2.5s cubic-bezier(0.6,0.7,0.8,0.9)",
      }
    : {};

    // the UI codes

  return (
    <div className="py-20 px-2 md:px-5">
      <Container maxWidth={false} className="w-full">
        <div>
          <div className="flex flex-row items-center justify-between">
            <h1 style={{fontFamily: 'Kugile', ...transformStyle}}
              className={` lg:text-[100px] text-[40px]`}
              
            >
              FOUNDER & CEO, <br />
              CHIEF OF STAFF, <br />
            </h1>
            <Image
              className="circular-hero hidden md:block img-fluid"
              src="/circular-hero.png"
              alt="Mr.Faith"
              width={160}
              height={190}
            />
          </div>
          <div>
            <h1
              className={` lg:text-[100px] text-[40px]`}
              style={{fontFamily: 'Kugile', ...transformStyle}}
            >
              CREATIVE SPECIALIST, <br /> BUSINESS STRATEGIST
            </h1>
            <p className="text-[10px] lg:text-[15px]">CONSISTENCY IN GROWTH, PERFECTION IN SUSTAINABILITY.</p>
            <Image
              className="circular-hero md:hidden mt-10 float-right img-fluid"
              src="/circular-hero.png"
              alt="Mr.Faith"
              width={100}
              height={100}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TitleFaith;