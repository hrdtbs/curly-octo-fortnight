import config from "@/lib/siteConfig";
import Link from "@/components/link";
import { css } from "@/styled-system/css";

const Header = () => {
  return (
    <div>
      <header
        className={css({
          paddingBlock: "16px",
          paddingInline: {
            base: "16px",
            md: "32px",
          },
          shadow: "xs",
        })}>
        <h1
          className={css({
            fontSize: "2xl",
          })}>
          <Link href="/">{config.title}</Link>
        </h1>
      </header>
    </div>
  );
};

export default Header;
