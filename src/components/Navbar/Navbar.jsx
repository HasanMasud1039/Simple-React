import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from '../Link/Link';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        {id: 1, name: 'Home', path: '/' },
        {id: 2, name: 'About', path: '/about' },
        {id: 3, name: 'Products', path: '/products' },
        {id: 4, name: 'Contact', path: '/contact' },
        {id: 5, name: 'Cart', path: '/contact' },
        ];

    return (
        <nav>
            <div onClick={()=> setOpen(!open)} className='md:hidden'>
                <span>{open === true ? <XMarkIcon className="h-10 w-10 text-red-500" />
                : <Bars3Icon className="h-10 w-10 text-blue-500" />}
                </span>
            </div>

            <ul className={`md:flex absolute md:static m-4 font-semibold text-purple-800 duration-500
                    ${open ? 'top-6 p-4' : '-top-36'}
                `}>
                {
                    routes.map(route => 
                        <Link
                        key={route.id}
                        route={route}>
                        </Link>
                        ) 
                }
            </ul>
        </nav>
    );

};

export default Navbar;