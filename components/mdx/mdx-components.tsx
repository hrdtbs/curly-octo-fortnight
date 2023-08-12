import type { MDXComponents } from "mdx/types";
import MarkdownImage from "./mdx-image";
import MarkdownTable from "./mdx-table";
import MarkdownLink from "./mdx-link";
import MarkdownCodeTitles from "./mdx-code-titles";
import MarkdownPreCode from "./mdx-pre-code";
import { css } from "@/styled-system/css";

const mdxComponents: MDXComponents = {
  // @ts-expect-error https://github.com/DefinitelyTyped/DefinitelyTyped/pull/65003
  img: MarkdownImage,
  a: MarkdownLink,
  div: MarkdownCodeTitles as any,
  pre: MarkdownPreCode,
  ul: (props) => {
    return (
      <ul
        className={css({
          listStyleType: "disc",
          pl: 4,
          my: 4,
        })}
        {...props}
      />
    );
  },
  li: (props) => {
    return (
      <li
        className={css({
          my: 4,
          pl: 2,
          "&::marker": {
            color: "slate.600",
          },
        })}
        {...props}
      />
    );
  },
  blockquote: (props) => {
    return (
      <blockquote
        className={css({
          borderLeft: "4px solid",
          borderColor: "slate.300",
          fontWeight: "bold",
          fontStyle: "italic",
          pl: 4,
          "& p": {
            _before: {
              content: "'“'",
              display: "inline",
            },
            _after: {
              content: "'”'",
              display: "inline",
            },
          },
        })}
        {...props}
      />
    );
  },
};

export default mdxComponents;
