"use server";

export async function fetchBlogs() {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.BACKEND_TOKEN}`,
    },
  };

  try {
    const res = await fetch(`${process.env.BACKEND}/blogs?populate=*`, options);
    const data = await res.json();
    return { data };
  } catch (error) {
    console.log(error);
  }
}

export async function fetchBlogsById({ id }: any) {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.BACKEND_TOKEN}`,
    },
  };

  try {
    const res = await fetch(
      `${process.env.BACKEND}/blogs/${id}?populate=*`,
      options
    );
    const data = await res.json();
    return { data };
  } catch (error) {
    console.log(error);
  }
}

export async function TrendingBlogs(params: any) {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.BACKEND_TOKEN}`,
    },
  };

  try {
    const res = await fetch(`${process.env.BACKEND}/${params}`, options);
    const data = await res.json();
    return { data };
  } catch (error) {
    console.log(error);
  }
}
