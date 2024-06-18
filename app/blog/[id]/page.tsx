import SingleTrendBlog from "@/components/shared/blogs/SingleTrendBlog";
import { fetchBlogsById } from "@/lib/backend";
import Image from "next/image";
import React from "react";

export const revalidate = 0;

const SingleBlog = async ({ params }: any) => {
  const results: any = await fetchBlogsById({ id: params.id });
  const { attributes } = results.data.data;

  const { Title, Description } = attributes;
  const imageData = attributes.Image.data.attributes.formats;
  const imageUrl = imageData?.small?.url;

  return (
    <div className="relative h-full bg-[#020000] px-10">
      <div className="absolute right-0 top-0 hidden size-52 rounded-bl-full bg-[#3969D0] opacity-15 blur-3xl md:flex" />
      <div className="absolute left-40 top-[520px] hidden h-60 w-[200px] rotate-45 bg-[#D243FA] opacity-35 blur-3xl sm:flex" />
      <div className="absolute left-0 top-[420px] hidden size-80 rounded-l-full bg-[#3969D0] opacity-45 blur-3xl md:flex" />
      <div className="pt-16" />
      <div className="mx-auto max-w-7xl rounded-3xl outline outline-1 outline-[#40E9FD]">
        <Image
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${imageUrl}`}
          alt={`${Title}`}
          width={1700}
          height={700}
          className="max-h-[700px] rounded-t-3xl bg-center object-cover"
        />
        <div className="p-6">
          <h2 className="pb-8 font-medium  text-[#40E9FD] sm:text-[30px]">
            {Title}
          </h2>
          <p className="max-h-[800px] overflow-auto text-[18px] font-normal text-white">
            {Description}
          </p>
        </div>
      </div>
      <SingleTrendBlog />
    </div>
  );
};

export default SingleBlog;
