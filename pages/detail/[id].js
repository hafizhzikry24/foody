import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Meta from "../components/Meta";
import Header from "../components/Header";
import Footer from "../components/Footer";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
  },
};

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://tasty.p.rapidapi.com/recipes/get-more-info?id=${id}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Meta title={`Foody: ${data.name ?? ''}`} />

      <Header />

      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-8 items-center justify-center flex-col">
          <Image
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 rounded"
            alt={data.name ?? ''}
            width="720"
            height="600"
            objectFit="cover"
            src={data.thumbnail_url}
          />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {data.name}
            </h1>
            <p class="mb-8 leading-relaxed">{data.description}</p>
            <div class="flex justify-center">
              <Link
                href={data.original_video_url ?? ''}
                class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
              >
                Watch Videos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
