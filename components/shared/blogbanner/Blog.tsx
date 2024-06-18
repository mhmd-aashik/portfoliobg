import { fetchBlogs } from "@/lib/backend";
import React from "react";
import BlogBanner from "./BlogBanner";

export const revalidate = 0;

const Blog = async () => {
  const serviceData = await fetchBlogs();
  const items = serviceData?.data.data;

  const { id, attributes } = items[5];
  const { Title, Description } = attributes;
  const imageData = attributes.Image.data.attributes.formats;
  const imageUrl = imageData?.small?.url;


  return (
    <>
      <div className="mx-auto max-w-7xl px-5 pt-10 md:px-10">
        <BlogBanner id={id} title={Title} description={Description} image={imageUrl} />
      </div>
    </>
  );
};

export default Blog;
