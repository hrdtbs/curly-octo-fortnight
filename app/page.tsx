import RenderPosts from "@/components/render-posts";
import { allSortedBlogs } from "@/lib/contentlayer";
import { generateCommonMeta } from "@/lib/utils";
import { css } from "@/styled-system/css";
import { Metadata } from "next";

export const metadata: Metadata = generateCommonMeta({
  title: "Blog",
  description: "Blog posts",
  image: "/api/og",
});

const Page = () => {
  const blogs = [...allSortedBlogs];

  return (
    <div
      className={css({
        paddingBlock: "16px",
        paddingInline: {
          base: "16px",
          md: "32px",
        },
        display: "grid",
        gap: 8,
      })}>
      <RenderPosts posts={blogs} />
    </div>
  );
};

export default Page;
