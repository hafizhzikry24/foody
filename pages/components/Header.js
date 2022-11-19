import Link from 'next/link'

export default function Header() {
    return (
        <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    
                    <span class="ml-3 text-xl">Foody</span>
                </a>
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