"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import PackageCard from "./PackageCard";
import BlogTeleg from "./BlogTeleg";
import BannerWallet from "./BannerWallet";
import ReciptBlog from "./ReciptBlog";

const BlogBanner = ({ id, title, description, image }: any) => {
  const [blogdata, setBlogData] = useState(true);
  const [showtelegram, setShowTelegram] = useState(true);
  const [showForm, setShowForm] = useState(true);
  const [showrecipt, setShowRecipt] = useState(true);

  const myRef: any = useRef(null);

  const truncateDescription =
    description.length > 1000
      ? description.slice(0, 1000) + "..."
      : description;

  const handleButtonClick = () => {
    setBlogData(false);

    myRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className={`${blogdata ? "" : "hidden"}`} ref={myRef}>
        <h2 className="text-[30px] font-medium text-white sm:text-[48px]">
          Trending topic of this week
        </h2>
      </div>
      {blogdata && (
        <div
          className={`mx-auto my-4 ml-5 mt-10 max-w-7xl gap-5 rounded-3xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-0.5 ${blogdata ? "" : "hidden"}`}
        >
          <div className="overflow-hidden rounded-3xl bg-black">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${image}`}
              alt={`${title}`}
              width={1700}
              height={700}
              className="max-h-[400px] rounded-t-3xl bg-center object-cover"
            />
            <div className="p-8">
              <div>
                <h2 className="pb-8 font-medium text-[#40E9FD] sm:text-[30px]">
                  {title}
                </h2>
                <p className=" max-h-[800px] overflow-auto text-[18px] font-normal text-white">
                  {truncateDescription}
                </p>
              </div>
              <div className="mt-10 flex items-center justify-between">
                <Link
                  href={`/blog/${id}`}
                  className="text-[16px] font-medium text-purple-700"
                >
                  Read More
                </Link>
                <Button
                  className="bg-purple-700 hover:bg-purple-800"
                  onClick={handleButtonClick}
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      {!blogdata && (
        <PackageCard
          setShowTelegram={setShowTelegram}
          showtelegram={showtelegram}
        />
      )}
      {!showtelegram && (
        <BlogTeleg setShowForm={setShowForm} showForm={showForm} />
      )}

      {!showForm && (
        <BannerWallet setShowRecipt={setShowRecipt} showrecipt={showrecipt} />
      )}

      {!showrecipt && <ReciptBlog />}
    </>
  );
};

export default BlogBanner;
