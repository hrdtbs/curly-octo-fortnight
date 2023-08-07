import { makeSource } from "contentlayer/source-files";
import flattenImageParagraphs from "mdast-flatten-image-paragraphs";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import BlogPost from "./schema/contentlayer/blog-post";

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
          theme: { dark: "github-dark", light: "github-light" },
          keepBackground: false,
        },
      ],
    ],
  },
});
