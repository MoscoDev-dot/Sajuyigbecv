import React from 'react'
import { Playfair_Display } from "next/font/google";


// google font
const bokor = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const WorkEx = () => {
  return (
    <div>
      {/* Title */}
          <div
            className={` ${bokor.className} flex text-[23px] md:text-[40px] lg:text-[80px] work-text font-black pt-8 uppercase`}
          >
            <span>
              work <br /> experiences
            </span>
          </div>
    </div>
  )
}

export default WorkEx
