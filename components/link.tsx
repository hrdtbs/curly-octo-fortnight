import { css } from "@/styled-system/css";
import { flex } from "@/styled-system/patterns";
import { ArrowTr } from "iconoir-react";
import { default as NextLink } from "next/link";
import { forwardRef } from "react";

type LinkProps = React.ComponentPropsWithoutRef<"a"> & {
  showIcon?: boolean;
};

const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { children, showIcon = false, href = "", ...restProps },
  forwardedRef,
) {
  // TODO: use regex instead of `startWith`
  const isRouterLink = href.startsWith("/");
  const isExternalLink = href.startsWith("https") || href.startsWith("http");
  // const isAnchorLink = href.startsWith("#");
  const Link = isRouterLink ? NextLink : "a";

  return (
    <Link
      href={href}
      ref={forwardedRef}
      className={css({
        display: "inline-flex",
        alignItems: "center",
        color: "amber.600",
        _hover: {
          textDecoration: "underline",
        },
      })}
      {...(isExternalLink
        ? {
            rel: "noopener noreferrer nofollow",
          }
        : {})}
      {...restProps}>
      {children}
      {isExternalLink && showIcon && (
        <span
          className={css({
            fontSize: "xs",
          })}>
          <ArrowTr />
        </span>
      )}
    </Link>
  );
});

export default Link;
