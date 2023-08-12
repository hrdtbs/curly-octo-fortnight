import { makeSource } from "contentlayer/source-files";
import flattenImageParagraphs from "mdast-flatten-image-paragraphs";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { defineDocumentType } from "contentlayer/source-files";
import GithubSlugger from "github-slugger";
import { fromMarkdown } from "mdast-util-from-markdown";
import { toString } from "mdast-util-to-string";
import { visit } from "unist-util-visit";

type Headings = Array<{ depth: number; text: string; slug: string }>;

function extractHeadings(rawPostBody: string) {
  const slugger = new GithubSlugger();
  const tree = fromMarkdown(rawPostBody);
  const headings: Headings = [];
  visit(tree, "heading", (node) => {
    const text = toString(node);
    headings.push({
      depth: node.depth,
      slug: slugger.slug(text),
      text,
    });
  });
  slugger.reset();
  return headings;
}

const BlogPost = defineDocumentType(() => ({
  name: "BlogPost",
  contentType: "mdx",
  filePathPattern: "*.md",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    description: {
      type: "string",
      description: "Short description of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date when the post was published",
      required: true,
    },
    lastmod: {
      type: "date",
      description: "The date when the post was last modified",
    },
    tags: {
      type: "list",
      of: { type: "string" },
      description: "Post tags",
    },
    image: {
      type: "string",
      description: "Heading image",
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath,
    },
    headings: {
      type: "json",
      description: "All headings from the post",
      resolve: (post) => extractHeadings(post.body.raw),
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [BlogPost],
  mdx: {
    remarkPlugins: [remarkGfm, flattenImageParagraphs],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          properties: {
            className: ["anchor-link"],
            ariaHidden: true,
          },
        },
      ],
      [
        rehypePrettyCode,
        {
          theme: { light: "github-light" },
          keepBackground: false,
        },
      ],
    ],
  },
});
