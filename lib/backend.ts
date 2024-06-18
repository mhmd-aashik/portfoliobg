import axios from "axios";

export async function fetchBlogs() {
  try {
    const blogs = await axios.get(`${process.env.BACKEND}/blogs?populate=*`);
    const blogData = blogs?.data?.data;
    return blogData;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchBlogsById({ id }: { id: string }) {
  try {
    const res = await fetch(`${process.env.BACKEND}/blogs/${id}?populate=*`);
    const data = await res.json();
    return { data };
  } catch (error) {
    console.error(error);
    return { error: "Fetch failed" };
  }
}

export async function TrendingBlogs(params: string) {
  try {
    const res = await fetch(`${process.env.BACKEND}/${params}`);
    const data = await res.json();
    return { data };
  } catch (error) {
    console.error(error);
    return { error: "Fetch failed" };
  }
}
