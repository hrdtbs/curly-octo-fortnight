import Link from "@/components/link";
import { ArrowRight } from "iconoir-react";

const NotFound = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center">
      <h2 className="text-6xl lg:text-[7.5rem] font-medium">404</h2>
      <p className="text-xl lg:text-2xl mb-8">Page not found.</p>
      <Link href="/">
        <span>Go to Home</span>
        <ArrowRight className="text-xs" />
      </Link>
    </main>
  );
};

export default NotFound;
