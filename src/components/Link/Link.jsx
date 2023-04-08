import React from 'react';

const Link = ({route}) => {
    return (
        <li className='mr-12 hover:bg-cyan-200 hover:p-2 rounded'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;