import Image from "next/image";
import Link from "next/link";
import React from "react";

const TrendBlogCards = ({ item }: any) => {
  const { id, attributes } = item;
  const { Title, Description } = attributes;
  const imageData = attributes.Image.data.attributes.formats;
  const imageUrl = imageData?.small?.url;

  return (
    <>
      <Link
        href={`/blog/${id}`}
        className="z-10 mx-auto my-4 max-h-[350] max-w-sm overflow-hidden rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-0.5"
      >
        <div>
          <Image
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${imageUrl}`}
            alt=""
            width={400}
            height={230}
            className="h-[230px] overflow-hidden rounded-t-xl object-cover"
          />
        </div>
        <div className="rounded-b-xl bg-[#020000] p-5 px-12">
          <p className="line-clamp-1 text-[18px] font-bold text-[#40E9FD]">
            {Title}
          </p>
          <p className="line-clamp-2 pt-3 text-[12px] font-normal text-white">
            {Description}
          </p>
        </div>
      </Link>
    </>
  );
};

export default TrendBlogCards;
