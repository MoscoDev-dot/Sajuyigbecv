import React from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

// google font
const bokor = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const CertyPropsText = ({ text1, text2, text3 }) => {
  return (
    <div style={{ fontFamily: 'Kugile' }} className={` mt-10 md:mt-50 flex`}>
      <div>
        <Image
          src="/focused.svg"
          width={15}
          height={15}
          alt="focused"
          className="md:w-[20px]   md:h-[20px]"
        />
      </div>
      <div>
        <p  className="uppercase  md:text-[30px] text-[15px] ms-0 md:ms-7  ">
          {text1}
        </p>
        <span className="ms-3 text-sm md:text-lg md:ms-7">{text2}</span> <br />
        <span className="ms-3 md:ms-7">{text3}</span>
      </div>
    </div>
  );
};

export default CertyPropsText;
