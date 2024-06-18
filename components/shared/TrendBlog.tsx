import React, { memo } from "react";
import { TrendingBlogs } from "@/lib/backend";
import Link from "next/link";
import BlogCards from "./BlogCards";

export const revalidate = 0;
// const trendingBlogs = [
//   {
//     id: 1,
//     title: "Flashloan Arbitrage Bot",
//     description:
//       "Automated bot for profitable cryptocurrency arbitrage opportunities.",
//     img: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 2,
//     title: "Sniper Bot DEX",
//     description: "Rapid execution bot for decentralized exchange trading.",
//     img: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 3,
//     title: "Sandwich Bot",
//     description: "Strategic trading bot exploiting order book slippage..",
//     img: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 4,
//     title: "Flashloan Arbitrage Bot",
//     description:
//       "Automated bot for profitable cryptocurrency arbitrage opportunities.",
//     img: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 5,
//     title: "Sniper Bot DEX",
//     description: "Rapid execution bot for decentralized exchange trading.",
//     img: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 6,
//     title: "Sandwich Bot",
//     description: "Strategic trading bot exploiting order book slippage..",
//     img: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];

const TrendBlog = async () => {
  const result = await TrendingBlogs(`blogs?pagination[limit]=4&populate=*`);

  const product = result?.data?.data;

  return (
    <>
      <div className="relative z-20 mx-auto max-w-7xl px-5 pt-20 md:px-10">
        <div>
          <h2 className="text-[30px] font-medium text-white sm:text-[48px]">
            Unlock Investment Opportunities
          </h2>
          <p className="text-left text-[22px] font-light text-white sm:text-[32px]">
            In Cutting-Edge Solutions
          </p>
        </div>
        <div className="mt-10 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {product?.map((item: any) => <BlogCards key={item.id} item={item} />)}
        </div>
        <Link href="/blogs" className="text-[16px] font-medium text-[#40E9FD]">
          View More
        </Link>
      </div>
    </>
  );
};

export default TrendBlog;
