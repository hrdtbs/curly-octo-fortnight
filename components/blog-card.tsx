import { formatDate, isArrayNotEmpty, slugify } from "@/lib/utils";
import PostTag from "./post-tag";
import Link from "@/components/link";
import Image from "@/components/image";
import { css } from "@/styled-system/css";

type BlogCardProps = {
  img?: string;
  date: Date | string;
  title: string;
  desc: string;
  tags?: string[];
  href: string;
};

const BlogCard = ({ title, desc, tags, date, img, href }: BlogCardProps) => {
  return (
    <article
      className={css({
        cursor: "pointer",
        transition: "shadow 50ms ease-in-out",
        shadow: {
          base: "sm",
          _hover: "lg",
        },
        padding: "16px",
      })}>
      {img && (
        <Image
          className="post-img mb-6"
          src={img}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          alt={title}
        />
      )}
      <div
        className={css({
          display: "grid",
          gap: 2,
        })}>
        <time
          className={css({
            fontSize: "sm",
            color: "amber.600",
          })}
          dateTime={date.toString()}>
          {formatDate(date)}
        </time>
        <h3
          className={css({
            fontSize: "xl",
            color: "slate.900",
            fontWeight: "medium",
          })}>
          <Link href={href}>{title}</Link>
        </h3>
        <p
          className={css({
            fontSize: "sm",
            color: "slate.500",
          })}>
          {desc}
        </p>
        {isArrayNotEmpty(tags) && (
          <div
            className={css({
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              mt: 2,
            })}>
            {tags.map((tag) => (
              <Link key={tag} href={`/tags/${slugify(tag)}`}>
                <PostTag>{tag}</PostTag>
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default BlogCard;
