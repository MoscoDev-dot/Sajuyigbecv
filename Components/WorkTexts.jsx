import React from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import CertyPropsText from "./CertyPropsText";
import WorkPropsText from "./WorkPropsText";

// google font
const bokor = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const WorkTexts = () => {
  return (
    <div>
      <div className="">
        

        <WorkPropsText
          text1={"Spak.Africa"}
          text2={"president and founder"}
          text3={"2022"}
          link='https://spak.africa'
        />
        <WorkPropsText
          text1={"Entrepreneurship Village"}
          text2={"special assistant"}
          text3={"2021"}
          link={'https://entrepreneurshipvillage.org'}
        />
        <WorkPropsText
          text1={"Etrust Fund"}
          text2={"chief of staff"}
          text3={"2021"}
          link={'https://etrustfund.org'}
        />
        <WorkPropsText
          text1={"AFRICA BLOCKCHAIN INSTITUTE"}
          text2={"Executive Assistant"}
          text3={"2021"}
            link={'https://www.africablockchaininstitute.org'}
        />
        
       
      </div>
    </div>
  )
}

export default WorkTexts
