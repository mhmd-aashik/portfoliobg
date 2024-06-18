
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
    console.error(error);
    return { error: "Fetch failed" };
  }
}

export async function fetchBlogsById({ id }: { id: string }) {
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
    console.error(error);
    return { error: "Fetch failed" };
  }
}

export async function TrendingBlogs(params: string) {
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
    console.error(error);
    return { error: "Fetch failed" };
  }
}
