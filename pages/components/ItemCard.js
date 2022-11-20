import Image from "next/image";

export default function ItemCard(props) {
  try {
    return (
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="thumbnail"
            className="object-cover object-center w-full h-full block"
            layout="fill"
            objectFit="cover"
            src={props.data.thumbnail_url}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {props.data.servings_noun_plural}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {props.data.name}
          </h2>
          <p className="mt-1">{props.data.num_servings} Servings</p>
        </div>
      </div>
    );
  } catch (e) {
    console.log(e);
  }
}
