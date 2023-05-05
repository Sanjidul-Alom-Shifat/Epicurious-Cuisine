import React, { useEffect, useState } from 'react';
import AboutItems from './AboutItems';

const AboutUs = () => {
    const [aboutData, setAboutData] = useState([])

    //fetching about us data
    useEffect(() => {
        fetch('/aboutus.json')
        .then(res => res.json())
            .then(data => setAboutData(data))
    },[])
    return (
        <div className="max-w-screen-xl mx-auto my-12 px-6">
            <h1 className="text-3xl font-bold leading-[3rem] text-emerald-700 mb-3 text-center">About Epicurious Cuisine</h1>
            <p className="text-gray-500 text-base  text text-justify md:text-center">Epicurious is a popular online platform for food lovers, offering a vast collection of recipes from around the world. With its easy-to-use interface, you can find recipes for any occasion, dietary preference or cooking level. The site also includes cooking tips, techniques, and instructional videos to help you elevate your culinary skills.</p>

            {/* about us cards  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
                {aboutData.map(item => (
                    <AboutItems key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
};

export default AboutUs;