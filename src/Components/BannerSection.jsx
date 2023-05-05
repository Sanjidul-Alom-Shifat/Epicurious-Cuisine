import React from 'react';
import chef_img from '../assets/heroImg.png'

const BannerSection = () => {
    return (
        <div className="my-container mb-7 mt-0 lg:mt-5 block lg:flex items-center justify-between gap-10">
            <div className="w-full">
                <h1 className="text-4xl font-bold leading-[3rem] text-emerald-700 mb-3">
                    Discover Delicious Recipes with Epicurious Cuisine
                </h1>
                <p className="text-2xl font-semibold leading-8 text-gray-800 mb-3">
                    Bringing You a World of Flavors and Spices
                </p>
                <p className="leading-6 text-lg">
                    At Epicurious Cuisine, we believe that cooking should be a fun and
                    enjoyable experience that brings people together. That's why we
                    encourage our community of food lovers to share their own recipes,
                    tips, and tricks, and to connect with each other over their shared
                    love of cooking. Whether you're looking for a quick weeknight meal
                    or a show-stopping dinner party dish, Epicurious Cuisine has got you
                    covered. Join us on our culinary journey and start exploring the
                    world of cuisine today!
                </p>
                <button className='mt-5 bg-gradient-to-r from-emerald-400 to-emerald-700 text-xl rounded-md px-4 py-2 text-white font-semibold '>Explore Menu</button>
            </div>
            <div className="w-full mt-7 lg:mt-0">
                <img src={chef_img} alt=""  />
            </div>
        </div>
    );
};

export default BannerSection;