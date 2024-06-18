"use client";
import { Button } from "@/components/ui/button";
import { Check, ChevronsRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const details = [
  { label: "Selected Network", value: "Solana Network" },
  { label: "Selected Package", value: "Advanced" },
  { label: "Email Address", value: "example@email.com" },
  { label: "Telegram ID", value: "1234567" },
  { label: "Wallet Address", value: "jffjwfhquhwiojfq`984mffmfnefen" },
  { label: "Transaction Address", value: "dfgsfdgsfdgdfbdfgsdbxvb" },
];

const ReciptBlog = () => {
  return (
    <div>
      <div>
        <h2 className="text-[30px] font-medium text-white sm:text-[48px]">
          Trending topic of this week
        </h2>
      </div>
      <div
        className={`mx-auto my-4 ml-5 mt-10 max-w-7xl gap-5 overflow-hidden  rounded-3xl bg-black bg-gradient-to-r  from-rose-400 via-fuchsia-500 to-indigo-500 p-0.5 `}
      >
        <div className="overflow-hidden rounded-3xl bg-[#020000] ">
          <div className="px-10 py-3 ">
            <div className="flex items-center justify-between">
              <h2 className="py-4 text-xl font-medium text-white">
                Volume Bot
              </h2>
              <ChevronsRight className="size-7 text-white" />
            </div>
            <div className="">
              {details.map((detail, index) => (
                <div key={index} className="mt-3 flex w-[500px] gap-5">
                  <div className="hidden flex-1 text-left font-medium leading-6 text-white sm:block">
                    {detail.label}
                  </div>
                  <div className="flex-1 text-left text-sm leading-5 text-white text-opacity-50 ">
                    <span className="mr-3">:</span> {detail.value}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col items-center justify-center gap-10">
              <div className="mt-5  flex items-center gap-3">
                <Check className="size-7 rounded-full bg-green-500 p-1 text-black" />
                <p className="font-medium text-green-500">Payment Successful</p>
              </div>
              <Link href="/">
                <Button className="mt-10 bg-[#853a84] hover:bg-[#530352]">
                  Back to Home Page
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReciptBlog;
