"use client";
import { Container } from "@mui/material";
import React from "react";
import LeftLine from "./LeftLine";
import NextverticalLine from "./NextverticalLine";
import Image from "next/image";
import Success from "./Success";
import WorkEx from "./WorkEx";
import WorkImgLAyouts from "./WorkImgLAyouts";

const WorkExperience = () => {
  return (
    <div>
      <Container maxWidth={false} className="w-full relative">
        <NextverticalLine text={"SCROLL UP"} />
        <LeftLine />

        <div className="px-4 sm:px-10">
          <WorkEx />

          <WorkImgLAyouts />
          <div className="flex justify-end">
            <Image
            
              src="/detailed-star.svg"
              alt="setail-star"
              width={50}
              height={50}
              className="mt-7 lg:mt-8 me-10 md:me-25 lg:me-30 md:w-[80px] md:h-[80px]  "
            />
          </div>
          <Success text={"I am very acquainted with success"} />
        </div>
      </Container>
      <hr className="md:me-37 me-12 " />
    </div>
  );
};

export default WorkExperience;
