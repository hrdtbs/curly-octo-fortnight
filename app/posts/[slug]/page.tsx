import BackButton from "@/components/back-button";
import Image from "@/components/image";
import Link from "@/components/link";
import MDXContent from "@/components/mdx/mdx-content";
import PostTag from "@/components/post-tag";
import ProseLayout from "@/components/prose-layout";
import ScrollButton from "@/components/scroll-button";
import TocDesktop, { TocMobile } from "@/components/toc";
import { allSortedBlogs } from "@/lib/contentlayer";
import {
  formatDate,
  generateCommonMeta,
  isArrayNotEmpty,
  slugify,
} from "@/lib/utils";
import { Calendar, NavArrowLeft } from "iconoir-react";
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
    <main>
      <BackButton />
      <div>
        <ProseLayout>
          <div>
            <time dateTime={post.date}>
              <Calendar />
              {formatDate(post.date, "full")}
            </time>
          </div>
          <h1 className="md:leading-tight">{post.title}</h1>
          <p className="mt-0 lg:mt-0">{post.description}</p>
          {isArrayNotEmpty(post.tags) && (
            <div>
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
      <div>
        {moreThanOneHeading && <TocDesktop contents={post.headings} />}
        <ProseLayout>
          {moreThanOneHeading && (
            <TocMobile contents={post.headings} className="xl:hidden" />
          )}
          <MDXContent code={post.body.code} />
        </ProseLayout>
        <ScrollButton />
      </div>
    </main>
  );
};

export default Page;
