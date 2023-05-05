import React, { useEffect, useState } from 'react';
import FoodItems from './FoodItems';

const Foods = () => {

    const [food, setFood] = useState([]);

    useEffect(() => {
        fetch('/food.json')
            .then((response) => response.json())
            .then((data) => setFood(data.slice(0,6)))
    }, []);

    return (
        <div className='my-16 max-w-screen-xl mx-auto px-6'>
            
            <h1 className="text-3xl  font-bold leading-[3rem] text-emerald-700 mb-3 text-center">Recipes Reviews</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-9">
                {
                    food.map((item) =>
                        <FoodItems
                            key={item.id}
                            {...item}
                        >
                        </FoodItems>
                    )
                }
            </div>

        </div>
    );
};

export default Foods;