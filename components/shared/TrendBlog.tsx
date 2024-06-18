import React, { memo } from "react";
import { TrendingBlogs } from "@/lib/backend";
import Link from "next/link";
import BlogCards from "./BlogCards";


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
