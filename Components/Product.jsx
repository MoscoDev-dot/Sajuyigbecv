import React from "react";
import RightLine from "./RightLine";
import { Container } from "@mui/material";
import { Playfair_Display } from "next/font/google";
import Success from "./Success";
import Image from "next/image";
import MetroBox from "./MetroBox";
import AgriDrone from "./AgriDrone";

// google font
const bokor = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const Product = () => {
  return (
    <div>
      <Container maxWidth={false} className="w-full relative">
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
        <div>
          <p
            className={`${bokor.className} uppercase lg:text-[80px] font-bold pt-10 lg:pt-20 text-[23px]`}
          >
            Product <br />
            showcase
          </p>
          <div className="flex ">
            <div>
              <Success
                text={
                  "here are some of the products i’ve lead, shipped and ideated"
                }
              />
            </div>

            {/* Move this block to the right end */}
            <div className="pb-10 flex mt-20 ml-auto me-15  md:me-35 items-center gap-5">
              <div>
                <p className="opacity-75">2016</p>
              </div>
              <div>
                <Image
                  src="/detailed-star.svg"
                  width={20}
                  height={20}
                  alt="star"
                 
                />
              </div>
              <div>
                <p className="opacity-75">2022</p>
              </div>
            </div>
          </div>
          <MetroBox/>
          <AgriDrone/>
          
        </div>
        
      </Container>
      <hr />
    </div>
  );
};

export default Product;
