import Link from "next/link";
import Image from "next/image";
import icon from "../../public/assets/icon.webp";

export default function Header() {
  return (
    <header className="sticky top-0 text-gray-600 body-font z-50 bg-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Image alt="icon" src={icon} width="40" height="40" />
          <span className="ml-3 text-xl">Foody</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-gray-900" href="/">
            List
          </Link>
          <Link className="mr-5 hover:text-gray-900" href="/references">
            References
          </Link>
          <Link className="mr-5 hover:text-gray-900" href="/faq">
            FAQ
          </Link>
          <Link className="mr-5 hover:text-gray-900" href="/about">
            About Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
