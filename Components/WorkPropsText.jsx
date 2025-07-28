import React from "react";
import { Playfair_Display } from "next/font/google";


// google font
const bokor = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const WorkPropsText = ({ text1, text2, text3, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
      <div style={{ fontFamily: 'Kugile' }} className={` mt-10 md:mt-50 flex`}>
        <div>
          <p className="uppercase font-[400] text-[#111111] lg:text-[40px] md:text-[12px]  text-[11px] ms-0 md:ms-7  ">
            {text1}
          </p>
          <span className="ms-3 uppercase  text-[9px] lg:text-lg  md:ms-7">
            {text2}
          </span>{" "}
          <br />
          <span className="ms-3 md:ms-7">{text3}</span>
        </div>
      </div>
    </a>
  );
};

export default WorkPropsText;
