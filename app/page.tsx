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
  const recentBlogs = blogs.splice(0, 4);
  const latestPost = recentBlogs.shift();
  const allPostsCount = config.blog.postPerPage - 4;

  return (
    <main>
      <BlogPageLayout title="Recent Blog Posts">
        {latestPost && (
          <BlogCard
            key={latestPost.title}
            title={latestPost.title}
            desc={latestPost.description}
            tags={latestPost.tags}
            date={latestPost.date}
            img={latestPost.image}
            href={`/posts/${latestPost.slug}`}
            className={cn(
              // If sufficient blogs are present then make the most recent one
              // stand out from the rest
              recentBlogs.length >= 3 && [
                "lg:grid gap-8 grid-cols-2 lg:col-span-full",
                "lg:[&>img]:mb-0 lg:text-lg lg:[&_h3]:text-2xl lg:[&_h3+p]:mt-[1em]",
              ],
            )}
          />
        )}

        <RenderPosts posts={recentBlogs} />
      </BlogPageLayout>
      <hr className="border-borders my-8 lg:my-12" />
      {blogs.length > 0 && (
        <BlogPageLayout title="All Posts Posts">
          <PostPaginator posts={blogs} postPerPage={allPostsCount} page={1} />
        </BlogPageLayout>
      )}
    </main>
  );
};

export default Page;
