import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navData = [
  {
    "name": "Home",
    "path": "/",
    "id": "nav-home"
  },
  {
    "name": "About Us",
    "path": "/about",
    "id": "nav-about"
  },
  {
    "name": "Services",
    "path": "/services",
    "id": "nav-services"
  },
  {
    "name": "Portfolio",
    "path": "/portfolio",
    "id": "nav-portfolio"
  },
  {
    "name": "Contact",
    "path": "/contact",
    "id": "nav-contact"
  }
]

const Navber = () => {
    const [open , setOpen] = useState(false)

    const links =   navData.map(route => <Link key={route.id} route={route}></Link>)
    return (
        <nav  className='flex justify-between mx-10'>
          <span className='flex gap-2 ' onClick={()=> setOpen(!open)}>


            { open ?
             <X className='md:hidden'></X> : 
            <Menu className='md:hidden'></Menu> 
            }

            {
                <ul className='md:hidden'>
                    {links}
                </ul>
            }
              
            <h3>my navbar</h3>
          </span>
          <ul className=' md:flex hidden '>
                {
                    links
                 }
          </ul>

            {/* <ul className='flex'>
                {
                    navData.map(route => <li className='mr-10'><a href={route.path}>{route.name}</a></li>)
                }
            </ul> */}
            <h3>sign in </h3>
        </nav>
    );
};

export default Navber;