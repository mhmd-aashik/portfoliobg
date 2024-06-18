import BlogsItem from "@/components/shared/blogs/BlogsItem";
// import { fetchBlogs } from "@/lib/backend";
import React from "react";
import { fetchBlogs } from "@/lib/backend";

const Blogs = async () => {
  const blogData = await fetchBlogs();
  console.log(blogData);

  return (
    <div className=" bg-[#020000]">
      <BlogsItem blogs={blogData && blogData} />
    </div>
  );
};

export default Blogs;
