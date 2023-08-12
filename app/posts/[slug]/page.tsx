import BackButton from "@/components/back-button";
import Image from "@/components/image";
import Link from "@/components/link";
import MDXContent from "@/components/mdx/mdx-content";
import PostTag from "@/components/post-tag";
import ProseLayout from "@/components/prose-layout";
import ScrollButton from "@/components/scroll-button";
import TocDesktop from "@/components/toc";
import { allSortedBlogs } from "@/lib/contentlayer";
import {
  formatDate,
  generateCommonMeta,
  isArrayNotEmpty,
  slugify,
} from "@/lib/utils";
import { css } from "@/styled-system/css";
import { Calendar } from "iconoir-react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const generateStaticParams = () => {
  return allSortedBlogs.map((post) => {
    return {
      slug: post.slug,
    };
  });
};

export const generateMetadata = ({
  params,
}: {
  params: { slug: string };
}): Metadata => {
  const post = allSortedBlogs.find((post) => post.slug === params.slug);
  if (!post) notFound();

  const { title, description, date } = post;
  const imgParams = new URLSearchParams({ title, date: formatDate(date) });
  const image = post.image ?? `/api/og?${imgParams.toString()}`;
  return generateCommonMeta({ title, description, image });
};

const Page = ({ params }: { params: { slug: string } }) => {
  const post = allSortedBlogs.find((post) => post.slug === params.slug);
  if (!post) notFound();

  const moreThanOneHeading = post.headings && post.headings.length > 1;

  return (
    <div
      className={css({
        px: {
          base: 8,
          md: 16,
        },
        pt: 8,
        pb: 16,
      })}>
      <div
        className={css({
          mb: 16,
        })}>
        <BackButton />
      </div>
      <div>
        <ProseLayout
          className={css({
            pb: 8,
            borderBottom: "1px solid",
            borderColor: "slate.200",
          })}>
          <div>
            <time
              dateTime={post.date}
              className={css({
                display: "flex",
                alignItems: "center",
                gap: 2,
                color: "slate.500",
              })}>
              <Calendar />
              {formatDate(post.date, "full")}
            </time>
          </div>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          {isArrayNotEmpty(post.tags) && (
            <div
              className={css({
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                mt: 2,
              })}>
              {post.tags.map((tag) => (
                <Link key={tag} href={`/tags/${slugify(tag)}`}>
                  <PostTag>{tag}</PostTag>
                </Link>
              ))}
            </div>
          )}
        </ProseLayout>
        {post.image && (
          <div>
            <Image
              className="post-img shadow-md"
              src={post.image}
              alt={post.title}
              sizes="(min-width: 1200px) 50vw, 100vw"
            />
          </div>
        )}
      </div>
      <div
        className={css({
          lg: {
            display: "grid",
            gridTemplateColumns: "320px 1fr",
            gap: 16,
          },
        })}>
        {moreThanOneHeading && (
          <TocDesktop
            className={css({
              display: {
                base: "none",
                lg: "block",
              },
              width: 280,
            })}
            contents={post.headings}
          />
        )}
        <div
          className={css({
            overflow: "hidden",
          })}>
          <ProseLayout>
            <MDXContent code={post.body.code} />
          </ProseLayout>
          <ScrollButton />
        </div>
      </div>
    </div>
  );
};

export default Page;
