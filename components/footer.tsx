import config from "@/lib/siteConfig";
import { GitHub, Twitter } from "iconoir-react";
import Link from "./link";
import { css } from "@/styled-system/css";

const socialLinks = [
  { icon: GitHub, href: config.socials.github, title: "Github" },
  { icon: Twitter, href: config.socials.twitter, title: "Twitter" },
];

const Footer = () => {
  return (
    <footer
      className={css({
        display: "grid",
        gap: 8,
        py: 12,
        borderTop: "1px solid token(colors.slate.300)",
      })}>
      <div
        className={css({
          display: "flex",
          gap: 4,
          justifyContent: "center",
        })}>
        {socialLinks.map((link) => (
          <Link
            key={link.href}
            className={css({
              _hover: {
                color: "amber.500",
              },
            })}
            target="_blank"
            href={link.href}
            aria-label={link.title}>
            <link.icon />
          </Link>
        ))}
      </div>
      <div
        className={css({
          textAlign: "center",
        })}>
        <p>Built using Next.js, Tailwind CSS and Contentlayer.</p>
        <p
          className={css({
            fontSize: "sm",
            mt: 2,
          })}>
          © {new Date().getFullYear()}, hrdtbs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
