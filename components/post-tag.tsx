import { css } from "@/styled-system/css";
import clsx from "clsx";

const PostTag = ({ children }: { children: string }) => {
  return (
    <span
      className={clsx(
        css({
          display: "block",
          fontSize: "sm",
          color: "amber.600",
          backgroundColor: "amber.50",
          py: 1,
          px: 3,
          borderRadius: "lg",
          _hover: {
            textDecoration: "underline",
          },
        }),
      )}>
      #{children}
    </span>
  );
};

export default PostTag;
