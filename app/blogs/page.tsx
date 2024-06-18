import BlogsItem from "@/components/shared/blogs/BlogsItem";
import { fetchBlogs } from "@/lib/backend";
import React from "react";

const Blogs = async () => {
  const blogs: any = await fetchBlogs();

  return (
    <div className="bg-[#020000]">
      <BlogsItem blogs={blogs} />
    </div>
  );
};

export default Blogs;
