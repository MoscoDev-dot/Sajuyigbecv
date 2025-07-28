import React from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import CertyPropsText from "./CertyPropsText";

// google font
const bokor = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const CertificationText = () => {
  return (
    <div>
      <div className="...">
        <div className="flex">
          <p style={{ fontFamily: 'Kugile' }}
            className={` uppercase lg:text-[80px] font-[400] mt-10 lg:mt-20 text-[23px]`}
          >
            certification
          </p>

          <Image
            src="/detailed-star.svg"
            alt="setail-star"
            width={20}
            height={20}
            className="mt-0 ms-3 lg:mt-8 lg:w-[30px]"
          />
        </div>

        <CertyPropsText
          text1={"associate chief of staff"}
          text2={"The Chief of Staff Association"}
          text3={"2022"}
        />
        <CertyPropsText
          text1={"Product Analytics Micro-Certification (PAC)™"}
          text2={"Product school"}
          text3={"2022"}
        />
        <CertyPropsText
          text1={"How to Achieve Product Market Fit"}
          text2={"Product school"}
          text3={"2022"}
        />
        <CertyPropsText
          text1={"Enterprise Design Thinking Practitioner"}
          text2={"Ibm"}
          text3={"2022"}
        />
        <CertyPropsText
          text1={"How to Build Digital Product"}
          text2={"Product school"}
          text3={"2021"}
        />
        <CertyPropsText
          text1={"Basic Digital Skills Training"}
          text2={"Google"}
          text3={"2018"}
        />
      </div>
    </div>
  );
};

export default CertificationText;
