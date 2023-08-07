import Footer from "@/components/footer";
import Header from "@/components/header";
import config from "@/lib/siteConfig";
import { Metadata } from "next";
import styles from "@/app/layout.module.css";

export const metadata: Metadata = {
  title: {
    default: config.title,
    template: `%s | ${config.title}`,
  },
  description: config.description,
  authors: { name: config.author, url: config.socials.site },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      // { url: "/icon.svg", type: "image/svg+xml" },
    ],
    // apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL(config.url),
  openGraph: {
    type: "website",
    title: {
      default: config.title,
      template: `%s | ${config.title}`,
    },
    description: config.description,
    siteName: config.title,
    url: config.url,
    images: [config.siteImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    creator: `${config.socials.twitter.replace("https://twitter.com/", "@")}`,
  },
};

export default function RootLayout({
  children,
  peek,
}: {
  children: React.ReactNode;
  peek: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <Header />
        <div className={styles.root}>
          {children}
          {peek}
        </div>
        <Footer />
      </body>
    </html>
  );
}
