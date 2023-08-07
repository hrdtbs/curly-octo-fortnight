"use client";

import Link from "@/components/link";
import { isArrayNotEmpty } from "@/lib/utils";
import { NavArrowRight } from "iconoir-react";
import { useEffect, useRef, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu";

type TocProps = {
  contents: Array<{ text: string; slug: string; depth: number }>;
  className?: string;
};

export const TocMobile = ({ contents, className }: TocProps) => {
  if (!isArrayNotEmpty(contents)) return null;

  return (
    <div>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger>
          <span>On this page</span>
          <NavArrowRight />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          loop
          // don't autofocus back to the trigger when clicked
          onCloseAutoFocus={(e) => e.preventDefault()}
          align="start"
          sideOffset={10}
          avoidCollisions={false}>
          <nav>
            <ul>
              {contents.map((e) => {
                if (e.depth > 2) return;
                return (
                  <li key={e.text} className="hover:text-accent">
                    <DropdownMenuItem key={e.text} asChild>
                      <Link
                        href={`#${e.slug}`}
                        className="p-2 block hover:outline-none">
                        {e.text}
                      </Link>
                    </DropdownMenuItem>
                  </li>
                );
              })}
            </ul>
          </nav>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

const TocDesktop = ({ contents, className }: TocProps) => {
  const [hash, setHash] = useState("");
  const allAnchorLinksRef = useRef<NodeListOf<HTMLElement>>();
  const observerRef = useRef<IntersectionObserver>();

  useEffect(() => {
    allAnchorLinksRef.current = document.querySelectorAll("h2[id]");
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHash(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -70% 0px" },
    );
    allAnchorLinksRef.current.forEach((e) => observerRef.current?.observe(e));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  if (!contents.length) return null;
  return (
    <div className={className}>
      <nav className="pl-8">
        <p className="text-xl pb-4 font-medium">On this page</p>
        <ul>
          {contents.map((e) => {
            if (e.depth > 2) return;
            return (
              <li key={e.text}>
                <Link href={`#${e.slug}`}>{e.text}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default TocDesktop;
