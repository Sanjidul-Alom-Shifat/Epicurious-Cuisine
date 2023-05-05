import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cheif from './Cheif';

const CheifsPage = () => {

    const [cheifinfo, setCheifinfo] = useState([]);

    useEffect(() => {
        fetch('https://epicurious-server-side-sanjidul-alom-shifat.vercel.app/cheifs')
            .then((response) => response.json())
            .then((data) => setCheifinfo(data))
    }, []);

    return (
        <div className='my-14  max-w-screen-xl mx-auto px-5 lg:px-6'>
            <h1 className="text-3xl font-bold leading-[3rem] text-emerald-700 mb-3 text-center">
                Epicurious Cuisine Chefs
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-9">
                {cheifinfo &&
                    cheifinfo.map((chef) =>
                        <Cheif
                            key={chef.id}
                            chef={chef}
                        >
                        </Cheif>
                    )}
            </div>
        </div>
    );
};

export default CheifsPage;