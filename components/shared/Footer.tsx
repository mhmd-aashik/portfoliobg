import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className=" bg-black">
      <div className="mx-auto flex max-w-7xl flex-col justify-between px-5 py-4 pt-20 sm:flex-row md:px-10">
        <h2 className="text-[30px] font-medium text-white sm:text-[48px]">
          Ranga Tecnologies
        </h2>
        <div className="">
          <p className="text-[20px] font-light text-white sm:text-[32px]">
            Let&apos;s Taks
          </p>
          <div className="flex gap-3">
            <SocialIcon network="linkedin" className="!size-8" bgColor="grey" />
            <SocialIcon network="whatsapp" className="!size-8" bgColor="grey" />
            <SocialIcon network="telegram" className="!size-8" bgColor="grey" />
            <SocialIcon network="facebook" className="!size-8" bgColor="grey" />
            <SocialIcon
              network="instagram"
              className="!size-8"
              bgColor="grey"
            />
            <SocialIcon network="twitter" className="!size-8" bgColor="grey" />
          </div>
        </div>
      </div>
      <p className="mx-auto max-w-7xl px-5 pb-3 text-left text-[16px] font-medium text-[#40E9FD] sm:px-10">
        © 2022 Ranga Technologies. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
