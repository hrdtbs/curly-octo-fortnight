"use client";

import Link from "@/components/link";
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
