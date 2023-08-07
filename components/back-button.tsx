"use client";

import { NavArrowLeft } from "iconoir-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => {
        router.back();
      }}>
      <NavArrowLeft />
      <span>Back</span>
    </button>
  );
}
