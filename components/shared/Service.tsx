import React from "react";
import { TrendingBlogs } from "@/lib/backend";
import BlogCards from "./BlogCards";
import Link from "next/link";

const Service = async () => {
  const serviceData = await TrendingBlogs(
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
