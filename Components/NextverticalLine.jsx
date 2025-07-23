import React from "react";
import RightLine from "./RightLine";

import Image from "next/image";

const NextverticalLine = ({ text }) => {
  return (
    <div>
      {/* Rotated Resume and symbol before vertical line */}
      <div
        className="flex flex-col  items-center absolute"
        style={{
          right: 0, // place before the vertical line (adjust as needed)
          top: "15vh",
          transform: "translateY(-50%) rotate(360deg)",
          zIndex: 1,
        }}
      >
        <div className="flex">
          <div className="pt-6">
            <Image
              src="/logo.png"
              alt="Mr.Faith"
              width={55}
              height={55}
              className=""
            />
          </div>
          <div>
            <p className="text-[11px] hidden md:block pt-6 font-bold">
              FAITH <br /> OLANIYI
            </p>
          </div>
        </div>

        <Image
          src="/arrow-icon.svg"
          alt="arrow icon"
          width={50}
          height={20}
          className="rotate-90 lg:w-[100px]  lg:h-[100px] mt-5  lg:mt-15"
        />
        {/* <span className="flex items-center gap-2">
          
          <svg
            viewBox="0 0 58 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 circular-hero md:w-[1.7vw]"
          >
            <path
              id="Vector 1"
              d="M0 15.9839H53.6774M53.6774 15.9839C48.172 17.7043 37.1613 23.4161 37.1613 32.5M53.6774 15.9839C47.828 14.6075 36.129 9.58387 36.129 0.5"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </span> */}
      </div>
      {/* RIGHT VERTICAL LINE */}
      <RightLine
        className="absolute work-line"
        style={{
          right: 50,
          top: 0,
          bottom: 0,
          width: "1px",
          background: "#000000",
        }}
      />
    </div>
  );
};

export default NextverticalLine;
