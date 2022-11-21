export default function Footer() {
    return (
        <footer className="sticky bottom-0 text-gray-600 body-font z-50 bg-white">
            <div className="container px-5 py-6  mx-auto flex items-center sm:flex-row flex-col">
                <p className="text-sm text-gray-500 sm:mt-0 mt-4">© 2022 Foody —
                    <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1 hover:text-gray-900" target="_blank">@hafizhzikry</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start ">
                    <a href = "https://www.instagram.com/hafizh.zikry/"className="ml-3 text-gray-500  hover:text-gray-900">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-hafizh-zikry-784b37249/" className="ml-8 text-gray-500 hover:text-gray-900">
                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                    </a>
                </span>
            </div>
        </footer>
    )
}