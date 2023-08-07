"use client";

import { cn } from "@/lib/utils";
import { NavArrowLeft } from "iconoir-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => {
        router.back();
      }}
      className={cn(
        "inline-flex gap-1 items-center text-accent text-sm",
        "-ml-1 mb-[--_space] font-medium",
        "hover:text-accent hover:no-underline",
        "lg:text-base lg:leading-none",
      )}>
      <NavArrowLeft />
      <span>Back</span>
    </button>
  );
}
