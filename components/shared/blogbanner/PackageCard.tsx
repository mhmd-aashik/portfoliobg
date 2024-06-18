"use client";
import { Check, ChevronDown, ChevronsRight } from "lucide-react";
import React, { useRef, useState } from "react";
import BlogTeleg from "./BlogTeleg";

const pakageDetails = [
  {
    id: 1,
    title: "Basic",
    description: "This is basic package",
    price: 100,
    features: [
      {
        id: 1,
        name: "Multiple wallets",
      },
      {
        id: 2,
        name: "Random order size",
      },
      {
        id: 3,
        name: "Random delay",
      },
    ],
  },
  {
    id: 2,
    title: "Premium",
    description: "This is premium package",
    price: 200,
    features: [
      {
        id: 1,
        name: "Multiple wallets",
      },
      {
        id: 2,
        name: "Random order size",
      },
      {
        id: 3,
        name: "Random delay",
      },
    ],
  },
  {
    id: 3,
    title: "Ultimate",
    description: "This is ultimate package",
    price: 300,
    features: [
      {
        id: 1,
        name: "Multiple wallets",
      },
      {
        id: 2,
        name: "Random order size",
      },
      {
        id: 3,
        name: "Random delay",
      },
    ],
  },
];

const PackageCard = ({ showtelegram, setShowTelegram }: any) => {
  const handleButtonClick = () => {
    setShowTelegram(false);
  };

  return (
    <>
      <div className={`${showtelegram ? "" : "hidden"}`}>
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
                <h2 className="text-xl font-medium text-white">Volume Bot</h2>
                <ChevronsRight className="size-7 text-white" />
              </div>
              <p className="mt-2  text-white">Select Your Volume Bot Network</p>
              <div className="mt-2 flex justify-between rounded-full border border-[#40E9FD] p-1 px-2">
                <p className=" text-gray-600">Solana Network</p>
                <ChevronDown className="text-gray-600" />
              </div>
              <p className="mt-2 text-white">Select Your Package</p>
            </div>

            <div className="grid gap-10 rounded-3xl bg-[#020000] px-10 py-5 sm:grid-cols-2 md:grid-cols-3">
              {pakageDetails.map((item: any) => (
                <div
                  className="mx-auto flex w-full max-w-7xl flex-col rounded-3xl bg-[#020000] shadow-xl outline outline-2 outline-[#40E9FD] ring-1 ring-black/10 dark:bg-gray-950"
                  key={item.id}
                >
                  <div className=" p-8 sm:p-10">
                    <h3
                      id="tier-basic"
                      className="text-lg font-semibold leading-8 tracking-tight text-indigo-600"
                    >
                      {item.title}
                    </h3>
                    <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-white">
                      <span> ${item.price} </span>
                      <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500">
                        /mo
                      </span>
                    </div>
                    <p className="mt-6 text-base leading-7 text-white">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col p-2">
                    <div className="flex flex-1 flex-col justify-between rounded-2xl bg-[#020000] px-6 dark:bg-gray-900">
                      <ul role="list" className="space-y-6">
                        {item.features.map((feature: any) => (
                          <li className="flex items-start" key={feature.id}>
                            <p className="ml-3 flex gap-2 text-sm leading-6 text-white">
                              <Check className="rounded-full bg-blue-800 p-1 text-white" />{" "}
                              {feature.name}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="my-8">
                        <p
                          onClick={handleButtonClick}
                          aria-describedby="tier-basic"
                          className="inline-block w-full cursor-pointer rounded-lg bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-indigo-700"
                        >
                          Select
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageCard;
