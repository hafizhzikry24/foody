import Link from "next/link";
import Image from "next/image";
import icon from "../../public/assets/icon.webp";

export default function Header() {
  return (
    <header className="sticky top-0 text-gray-900 body-font z-50 bg-amber-100">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Image alt="icon" src={icon} width="40" height="40" />
          <span className="ml-3 text-xl">
            Foody</span>
        </Link>
        {/* <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
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
            About 
          </Link>
        </nav> */}

        
         
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start ">
            <a
              href="https://www.instagram.com/hafizh.zikry/"
              className="ml-3 text-gray-700  hover:text-gray-900"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-hafizh-zikry-784b37249/"
              className="ml-8 text-gray-700 hover:text-gray-900"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      
    </header>
  );
}
