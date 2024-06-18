import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-10 px-5 pt-10 md:px-10">
        <div className="flex w-full flex-col gap-5 sm:items-start">
          <h1 className="text-left text-[68px] font-bold leading-tight text-white sm:leading-[80px]">
            Premier
            <span className="block bg-gradient-to-r from-[#D243FA] to-[#542CB1] bg-clip-text text-transparent sm:flex">
              Blockchain
            </span>
            <span className="block bg-gradient-to-r from-[#D243FA] to-[#542CB1] bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-left text-[22px] text-white sm:p-0">
            Cutting-Edge Blockchain Technology. <br /> Secure. Scalable.
            Revolutionary.
          </p>
          <Button className="w-fit rounded-full bg-[#5663FA] px-12 py-5">
            Submit
          </Button>
        </div>
        <div className="gooey mx-auto hidden w-full items-start !justify-start sm:mr-20 sm:h-[400px] sm:max-w-[400px] md:flex"></div>
      </div>
      <div className="absolute right-0 top-0 hidden size-52 rounded-bl-full bg-[#3969D0] blur-3xl md:flex" />
    </>
  );
};

export default Hero;
