"use client";

import { css } from "@/styled-system/css";
import { NavArrowLeft } from "iconoir-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      className={css({
        display: "flex",
        alignItems: "center",
        gap: 1,
        color: "amber.600",
        cursor: "pointer",
      })}
      onClick={() => {
        router.back();
      }}>
      <NavArrowLeft />
      <span>Back</span>
    </button>
  );
}
