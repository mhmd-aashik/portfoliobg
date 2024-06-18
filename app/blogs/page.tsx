import BlogsItem from "@/components/shared/blogs/BlogsItem";
import { fetchBlogs } from "@/lib/backend";
import React from "react";

const Blogs = async () => {
  const blogs = await fetchBlogs();

  return (
    <div className="bg-[#020000]">
      {/* <div className="absolute right-0 top-0 hidden size-52 rounded-bl-full bg-[#3969D0] opacity-15 blur-3xl md:flex" />
      
      <div className="absolute left-0 top-[420px] hidden size-80 rounded-l-full bg-[#3969D0] opacity-45 blur-3xl md:flex" /> */}
      <BlogsItem blogs={blogs} />
    </div>
  );
};

export default Blogs;
