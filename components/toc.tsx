"use client";

import Link from "@/components/link";
import { css } from "@/styled-system/css";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

type TocProps = {
  contents: Array<{ text: string; slug: string; depth: number }>;
  className?: string;
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
      <nav
        className={css({
          p: 8,
          position: "sticky",
          top: 0,
        })}>
        <ul>
          {contents.map((e) => {
            if (e.depth > 2) return;
            return (
              <li key={e.text}>
                <Link
                  href={`#${e.slug}`}
                  className={clsx(
                    css({
                      display: "block",
                      fontSize: "md",
                      color: "slate.600",
                      py: 2,
                      px: 4,
                      whiteSpace: "nowrap",
                      borderLeft: "2px solid",
                      borderLeftColor: "slate.400",
                      "&.active": {
                        borderLeftColor: "amber.600",
                      },
                    }),
                    hash === e.slug && "active",
                  )}>
                  {e.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default TocDesktop;
