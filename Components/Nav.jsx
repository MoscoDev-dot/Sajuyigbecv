"use client"
import React, { useState } from "react";
import { Container } from "@mui/material";

import AboutFaith from "@/Components/AboutFaith";
import TitleFaith from "@/Components/TitleFaith";
import MovingText from "./MovingText";
import VerticalLine from "./VerticalLine";
import Faith from "./Faith";
import RequestResumeModal from "./RequestResumeModal";

const Nav = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <Container maxWidth={false} className="w-full relative overflow-x-hidden">
        <div
          className="flex px-8 md:px-13 items-center "
          style={{ minHeight: "70px" }}
        >
          {/* <div className="flex">
            <div className="pt-6">
            <Image src="/logo.png" alt="Mr.Faith" width={55} height={55} />
          </div>
          <div>
            <p className="text-[11px] pt-6 font-bold">
            FAITH <br /> OLANIYI
          </p>
          </div>
          </div> */}
          <Faith />
          <div className="flex pt-8 md:pt-6 justify-end w-full">
            <button
              onClick={() => setOpenModal(true)}
              className="no-underline bg-transparent border-none cursor-pointer p-0"
            >
              <span className="flex items-center text-[#111111] gap-2">
                <p className="text-[10px] font-medium lg:text-[1.06vw]">
                  RESUME
                </p>
                <svg
                  viewBox="0 0 58 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 md:w-[1.7vw]"
                >
                  <path
                    id="Vector 1"
                    d="M0 15.9839H53.6774M53.6774 15.9839C48.172 17.7043 37.1613 23.4161 37.1613 32.5M53.6774 15.9839C47.828 14.6075 36.129 9.58387 36.129 0.5"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
              </span>
            </button>
          </div>
          <VerticalLine text={"SCROLL DOWN"} />
        </div>
        <TitleFaith />
        <AboutFaith />
      </Container>
      <MovingText />
      <RequestResumeModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default Nav;
