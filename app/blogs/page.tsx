import BlogsItem from "@/components/shared/blogs/BlogsItem";
import { fetchBlogs } from "@/lib/backend";
import React from "react";

const Blogs = async () => {
  const blogData = await fetchBlogs();

  return (
    <div className="bg-[#020000]">
      <BlogsItem blogs={blogData} />
    </div>
  );
};

export default Blogs;
