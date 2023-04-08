import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices,  setPrices] = useState([]);

    useEffect(()=> {
        fetch('prices.json')
        .then(res => res.json())
        .then(data => setPrices(data))
    } ,[])

    return (
        <div className='mx-12'>
            <h2 className='text-4xl bg-cyan-400 text-center font-bold text-red-600 p-2'>Awesome Price! Nice</h2>
        <div className='grid md:grid-cols-3 gap-3  p-4'>
        {
                prices.map(price =>
                    <PriceCard 
                    key = {price.id}
                    price={price}
                    ></PriceCard>
                    )
            }
        </div>
        </div>
    );
};

export default PriceList;