import React from 'react';
import Link from './Link';

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
    return (
        <nav>

          <ul className='flex '>
                {
                navData.map(route => <Link key={route.id} route={route}></Link>)
                 }
          </ul>

            {/* <ul className='flex'>
                {
                    navData.map(route => <li className='mr-10'><a href={route.path}>{route.name}</a></li>)
                }
            </ul> */}

        </nav>
    );
};

export default Navber;