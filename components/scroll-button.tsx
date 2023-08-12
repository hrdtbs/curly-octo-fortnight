"use client";

import { ArrowUp } from "iconoir-react";
import { useEffect, useState } from "react";

const ScrollButton = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const userHasScrolled = window.scrollY >= window.innerHeight / 2;
    setScrolled(userHasScrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      <ArrowUp />
    </button>
  );
};

export default ScrollButton;
