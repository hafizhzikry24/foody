import { useState, useEffect } from 'react';
import ItemCard from './ItemCard';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPID_API_HOST
    }
};

export default function List() {
    const [data, setData] = useState({results: []})

    useEffect(() => {
        fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes', options)
            .then(response => response.json())
            .then(response => setData(response))
            .catch(err => console.error(err));
    }, []);

    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-8 mx-auto">
                <div class="flex flex-wrap -m-4">
                    {   
                        data.results.length === 0 ? (<p class="mx-auto text-center font-bold">Loading...</p>) :
                        data.results.map((item, index) => (
                            <ItemCard key={index} data={item} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
