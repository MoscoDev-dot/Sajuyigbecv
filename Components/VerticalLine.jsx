import React from "react";
import RightLine from "./RightLine";


const VerticalLine = ({text}) => {
  return (
    <div>
      {/* Rotated Resume and symbol before vertical line */}
      <div
        className="flex flex-col items-center absolute"
        style={{
          right: -60, // place before the vertical line (adjust as needed)
          top: "25%",
          transform: "translateY(-50%) rotate(90deg)",
          zIndex: 1,
        }}
      >
        <span className="flex items-center gap-2">
          <p className="text-[10px] font-medium lg:text-[1.06vw]">
            {" "}
            {text}
          </p>
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
        </span>
      </div>
      {/* RIGHT VERTICAL LINE */}
     <RightLine className="absolute"
        style={{
          right: 20,
          top: 0,
          bottom: 0,
          width: "1px",
          background: "#000000",
        }} />
     
    </div>
  );
};

export default VerticalLine;
