import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-purple-300 m-2 p-2 rounded-lg flex flex-col'>
            <h1 className='text-2xl text-center font-bold text-green-700'>{price.price} BDT/mon</h1>
            <h1 className='text-lg pt-2 text-center font-semibold text-yellow-700 mb-2'>{price.name}</h1>

            <p className='underline font-semibold'>Features: </p>
            {
                price.features.map((feature , idx) => 
                    <Feature
                    key={idx}
                    feature = {feature}
                    ></Feature>
                    )
            }
            <button className='border-1 w-full bg-blue-600 mt-auto rounded-lg p-1 text-white font-bold'>BUY NOW</button>
        </div>
    );
};

export default PriceCard;