import config from "@/lib/siteConfig";
import Link from "@/components/link";

const Header = () => {
  return (
    <div>
      <header>
        <Link href="/">{config.title}</Link>
      </header>
    </div>
  );
};

export default Header;
