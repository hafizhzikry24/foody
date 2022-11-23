import Image from "next/image";
import Meta from "./components/Meta";
import Header from "./components/Header";
import Footer from "./components/Footer";
import profile from "../public/assets/profile.webp";
import banner from "../public/assets/banner.webp";


export default function about() {
  return (
    <div>
      <Meta title="Foody: About" />

      <Header />

      <section className="text-gray-600 body-font bg-blue-200 py-10">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                alt="banner"
                className="object-cover object-center h-full w-full"
                src={banner}
                width="1200"
                height="500"
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <Image alt="profile" src={profile} width="80" height="80" />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Muhammad Hafizh Zikry
                  </h2>
                  <div className="w-12 h-1 bg-red-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    Just people living in the wild world and want to found the
                    mean of life of world that created by god
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                Foody is application that containing how to make a food with tasty 
                this application developing with next.js with that best practice that i learn
                 that a complex fiture and son easy to develop 
                 and this application deploying with vercel that have a complex fiture ti deploy so make it easy
                 i hope i can developing this app
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
