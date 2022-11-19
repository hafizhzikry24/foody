import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    return (
        <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg> */}
                    <Image src="/assets/icon.png" width="40" height="40" />
                    <span class="ml-3 text-xl">Foody</span>
                </Link>
                <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    <Link class="mr-5 hover:text-gray-900" href="/">List</Link>
                    <Link class="mr-5 hover:text-gray-900" href="/references">References</Link>
                    <Link class="mr-5 hover:text-gray-900" href="/faq">FAQ</Link>
                    <Link class="mr-5 hover:text-gray-900" href="/about">About Us</Link>
                </nav>
            </div>
        </header>

    )
}