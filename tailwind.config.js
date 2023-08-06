import tailwindTypography from "@tailwindcss/typography";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  darkMode: ["class", "[data-theme='dark']"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "hsl(var(--color-accent) / <alpha-value>)",
        background: {
          DEFAULT: "hsl(var(--color-background-primary) / <alpha-value>)",
          secondary: "hsl(var(--color-background-secondary) / <alpha-value>)",
          tertiary: "hsl(var(--color-background-tertiary) / <alpha-value>)",
        },
        foreground: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          tertiary: "var(--color-text-tertiary)",
        },
        borders: "var(--color-borders)",
      },
      borderRadius: {
        global: "var(--border-radius)",
      },
      aspectRatio: {
        "5/3": "5/3",
      },
      keyframes: {
        "slide-up-fade": {
          from: { opacity: 0, transform: "translateY(10px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        "slide-down-fade": {
          from: { opacity: 1, transform: "translateY(0px)" },
          to: { opacity: 0, transform: "translateY(10px)" },
        },
      },
      animation: {
        "slide-up-fade": "slide-up-fade 300ms cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade":
          "slide-down-fade 300ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
      typography: () => ({
        custom: {
          css: {
            // other stuff
            "--tw-prose-border-radius": "var(--border-radius)",

            // colors
            "--tw-prose-body": "var(--color-body)",
            "--tw-prose-borders": "var(--color-borders)",
            "--tw-prose-headings": "var(--color-headings)",
            "--tw-prose-lead": "var(--color-lead)",
            "--tw-prose-link-inactive": "var(--color-link-inactive)",
            "--tw-prose-links": "var(--color-links)",
            "--tw-prose-bold": "var(--color-bold)",
            "--tw-prose-counters": "var(--color-counters)",
            "--tw-prose-bullets": "var(--color-bullets)",
            "--tw-prose-hr": "var(--color-hr)",
            "--tw-prose-quotes": "var(--color-quotes)",
            "--tw-prose-quote-borders": "var(--color-quote-borders)",
            "--tw-prose-captions": "var(--color-captions)",
            "--tw-prose-code": "var(--color-code-fg)",
            "--tw-prose-code-bg": "var(--color-code-bg)",
            "--tw-prose-pre-bg": "var(--color-pre-code-bg)",
            "--tw-prose-pre-code": "var(--color-pre-code-fg)",
            "--tw-prose-pre-code-borders": "var(--color-pre-code-borders)",
            "--tw-prose-pre-code-line-highlight":
              "var(--color-pre-code-line-highlight)",
            "--tw-prose-pre-code-line-highlight-border":
              "var(--color-pre-code-line-highlight-border)",
            "--tw-prose-pre-code-title-fg": "var(--color-pre-code-title-fg)",
            "--tw-prose-pre-code-title-bg": "var(--color-pre-code-title-bg)",
            "--tw-prose-th-bg": "var(--color-th-bg)",
            "--tw-prose-th-borders": "var(--color-th-borders)",
            "--tw-prose-td-borders": "var(--color-td-borders)",
          },
        },
      }),
    },
  },
  plugins: [
    tailwindTypography,
    plugin(({ addVariant }) => {
      addVariant("hover-none", "@media (hover: none) and (pointer: coarse)");
    }),
  ],
};

export default tailwindConfig;
