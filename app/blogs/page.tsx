import BlogsItem from "@/components/shared/blogs/BlogsItem";
import { fetchBlogs } from "@/lib/backend";

const Blogs = ({ blogs }: any) => (
  <div className="bg-[#020000]">
    <BlogsItem blogs={blogs} />
  </div>
);

export async function getServerSideProps() {
  const blogs = await fetchBlogs();

  return {
    props: {
      blogs,
    },
  };
}

export default Blogs;
