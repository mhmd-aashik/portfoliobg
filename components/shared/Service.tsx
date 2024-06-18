import React from "react";
import { TrendingBlogs } from "@/lib/backend";
import BlogCards from "./BlogCards";
import Link from "next/link";

const trendingBlogs = [
  {
    id: 1,
    title: "Flashloan Arbitrage Bot",
    description:
      "Automated bot for profitable cryptocurrency arbitrage opportunities.",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Sniper Bot DEX",
    description: "Rapid execution bot for decentralized exchange trading.",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Sandwich Bot",
    description: "Strategic trading bot exploiting order book slippage..",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Flashloan Arbitrage Bot",
    description:
      "Automated bot for profitable cryptocurrency arbitrage opportunities.",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Sniper Bot DEX",
    description: "Rapid execution bot for decentralized exchange trading.",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Sandwich Bot",
    description: "Strategic trading bot exploiting order book slippage..",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Service = async () => {
  const serviceData: any = await TrendingBlogs(
    `blogs?pagination[limit]=8&populate=*`
  );
  const services = serviceData?.data?.data;

  return (
    <>
      <div className="mx-auto max-w-7xl px-5 pt-10 md:px-10">
        <div>
          <h2 className="text-[30px] font-medium text-white sm:text-[48px]">
            Expert Services for Your Existing Token{" "}
          </h2>
        </div>
        <div className="mt-10 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services?.map((item: any) => (
            <BlogCards key={item.id} item={item} />
          ))}
        </div>
        <Link href="/blogs" className="text-[16px] font-medium text-[#5663FA]">
          View More
        </Link>
      </div>
    </>
  );
};

export default Service;
