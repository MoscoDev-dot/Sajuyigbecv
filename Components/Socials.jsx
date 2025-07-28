import React from "react";
import { Playfair_Display } from "next/font/google";
import { Container, Link } from "@mui/material";
import LeftLine from "./LeftLine";
import Success from "./Success";

// google font
const bokor = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const Socials = () => {
  return (
    <div>
      <Container maxWidth={false} className="w-full   relative overflow-x-hidden">
        <LeftLine />

        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className="mx-auto">
            <p style={{ fontFamily: 'Kugile' }}
              className={`text-[23px] pt-10  md:text-[40px] lg:text-[100px] font-[400] uppercase`}
            >
              socials
            </p>
            <div className="italic font-semibold opacity-75">
              <Success text={"Linkedln"} link={'https://www.linkedin.com/in/faith-olaniyi'} />
              <Success text={"Twitter"}  link={'https://twitter.com/faith_olaniyi'} />
              <Success text={"Instagram"} link={'https://www.instagram.com/faith_olaniyi'} />
            </div>
          </div>

          <Link color="inherit"  href="mailto: hello@faitholaniyi.com" underline="none">
          <div  className="flex justify-center md:border-l border-t md:border-t-0 ms-1 md:ms-0  items-center h-full">
            <p style={{ fontFamily: 'Kugile' }} className="italic md:text-5xl text-xl mt-5 pb-8 md:pb-0 md:mt-0 text-center">
              Connect with me <br /> via mail at hello@faitholaniyi.com
            </p>
          </div></Link>
        </div>
      </Container>
      <hr />
    </div>
  );
};

export default Socials;
