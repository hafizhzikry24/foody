import Image from "next/image"

export default function ItemCard(props) {
    try {
        return (
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a class="block relative h-48 rounded overflow-hidden">
                    <Image alt="thumbnail" class="object-cover object-center w-full h-full block" src={props.data.thumbnail_url} width="421" height="261" />
                </a>
                <div class="mt-4">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{props.data.servings_noun_plural}</h3>
                    <h2 class="text-gray-900 title-font text-lg font-medium">{props.data.name}</h2>
                    <p class="mt-1">{props.data.num_servings} Servings</p>
                </div>
            </div>
        )
    } catch (e) {
        console.log(e)
    }
}
