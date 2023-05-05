import React from 'react';
import LazyLoad from 'react-lazy-load';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Cheif = ({ chef }) => {
    const { image, name, years_of_experience, number_of_recipes, likes, id } = chef;

    return (
        <div className="card card-compact h-[600px] w-full bg-base-100 shadow-xl ">
            <figure>
                <LazyLoad >
                    <img src={image} className='transform  transition duration-300 hover:scale-105' />
                </LazyLoad>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <p className="text-xl ">
                    Years of experience : {years_of_experience} years
                </p>
                <p className="text-lg">
                    Number of Recipes : {number_of_recipes} types
                </p>
                <div className="text-lg flex items-center gap-2">
                    Likes :
                
                    <Rating
                        initialRating={likes}
                        emptySymbol={<FaStar className="text-yellow-300 " />}
                        fullSymbol={<FaStar className="text-amber-400" />}
                        readonly
                        className='mt-1'
                    />
                    {likes}
                </div>
                <div className="justify-center">
                    <Link to={`/cheifs/${id}`}>
                        <button className="bg-red-500 w-full font-semibold text-white py-3 focus:outline-none  rounded-full mt-3 transform transition duration-300 hover:scale-105">VIEW RECIPES</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cheif;
