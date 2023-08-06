import config from "@/lib/siteConfig";
import { cn } from "@/lib/utils";
import { GitHub, Twitter } from "iconoir-react";
import Link from "./link";

const socialLinks = [
  { icon: GitHub, href: config.socials.github, title: "Github" },
  { icon: Twitter, href: config.socials.twitter, title: "Twitter" },
];

const Footer = () => {
  return (
    <footer
      className={cn(
        "flex flex-col items-center gap-8 px-2 py-10 lg:py-12",
        "border-t border-borders text-foreground-secondary",
      )}>
      <div className="flex gap-4 justify-center">
        {socialLinks.map((link) => (
          <Link
            key={link.href}
            className="hover:text-accent"
            target="_blank"
            href={link.href}
            aria-label={link.title}>
            <link.icon />
          </Link>
        ))}
      </div>
      <div className="text-center">
        <p>Built using Next.js, Tailwind CSS and Contentlayer.</p>
        <p className="text-sm mt-2">
          © {new Date().getFullYear()}, hrdtbs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
