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
        <nav  className='flex justify-between mx-10 mt-10'>
          <span className='flex gap-2 ' onClick={()=> setOpen(!open)}>


        <div className='flex flex-col cursor-pointer'>
               <div>
               { open ?
             <X className='md:hidden '></X> : 
            <Menu className='md:hidden'></Menu> 
            }
         </div>

          <div>
                {
                <ul className={`md:hidden mt-5  duration-500
                 ${open ? `` : `hidden`}
                  bg-amber-400`}>
                    {links}
                </ul>
            }
          </div>
        </div>
              
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