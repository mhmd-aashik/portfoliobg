export const navLinks = [
  {
    _id: 1,
    title: "Home",
    path: "/",
  },
  {
    _id: 2,
    title: "Blogs",
    path: "/blogs",
  },
];

export const categories = [
  {
    _id: 1,
    title: "All",
    slug: "/blogs",
  },
  {
    _id: 2,
    title: "Lion",
    slug: "/blogs?filters[category][$eq]=AI",
  },
  {
    _id: 3,
    title: "Cat",
    slug: "/api/blogs?populate=*&filters[Category][$eq]=Cat",
  },
  {
    _id: 4,
    title: "Tom",
    slug: "/blogs?filters[category][$eq]=block chain",
  },
];
