import BlogCard from "@/components/blog-card";
import BlogPageLayout from "@/components/layout/blog-page-layout";
import Link from "@/components/link";
import PostPaginator from "@/components/post-paginator";
import RenderPosts from "@/components/render-posts";
import { allSortedBlogs } from "@/lib/contentlayer";
import config from "@/lib/siteConfig";
import { cn, generateCommonMeta } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = generateCommonMeta({
  title: "Blog",
  description: "Latest blog posts",
  image: "/api/og",
});

const Page = () => {
  const blogs = [...allSortedBlogs];

  return (
    <main>
      <BlogPageLayout title="All Blog Posts">
        <RenderPosts posts={blogs} />
      </BlogPageLayout>
    </main>
  );
};

export default Page;
