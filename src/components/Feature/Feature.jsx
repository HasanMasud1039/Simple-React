import { CheckCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Feature = ({feature}) => {
    return (
        <div className='flex items-center'>
            <CheckCircleIcon className='w-5 h-5 text-green-500 me-2'></CheckCircleIcon>
            <span>{feature}</span>
        </div>
    );
};

export default Feature;