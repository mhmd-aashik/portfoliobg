import Blog from "@/components/shared/blogbanner/Blog";
import ContactUs from "@/components/shared/ContactUs";
import Hero from "@/components/shared/Hero";
import Review from "@/components/shared/Review";
import Service from "@/components/shared/Service";
import TrendBlog from "@/components/shared/TrendBlog";

export const revalidate = 0;

export default async function Home() {
  return (
    <>
      <div className="relative h-full bg-[#020000]">
        <div className="absolute right-0 top-0 hidden size-52 rounded-bl-full bg-[#3969D0] opacity-15 blur-3xl md:flex" />
        <div className="absolute left-40 top-[520px] hidden h-60 w-[800px] rotate-45 bg-[#D243FA] opacity-35 blur-3xl sm:flex" />
        <div className="absolute left-0 top-[420px] hidden size-80 rounded-l-full bg-[#3969D0] opacity-45 blur-3xl md:flex" />
        <Hero />
        <Review />
        <Blog />
        <TrendBlog />
        <Service />
        <ContactUs />
      </div>
    </>
  );
}
