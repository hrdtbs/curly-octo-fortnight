import RenderPosts from "@/components/render-posts";
import { allSortedBlogs } from "@/lib/contentlayer";
import { generateCommonMeta } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = generateCommonMeta({
  title: "Blog",
  description: "Blog posts",
  image: "/api/og",
});

const Page = () => {
  const blogs = [...allSortedBlogs];

  return <RenderPosts posts={blogs} />;
};

export default Page;
