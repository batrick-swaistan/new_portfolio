import React, { useState } from 'react';
import {FaBars,FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll';

const NavBar = () => {

    const [nav, setNav]= useState(false);

    const links =[
        {
            id:1,
            link:'home'
        },
        {
            id:2,
            link:'about'
        },
        {
            id:3,
            link:'portfolio'
        },
        {
            id:4,
            link:'skills'
        },
        {
            id:5,
            link:'contact'
        }
    ]

  return (
    <div className='flex justify-between items-center w-full h-20 text-white bg-black  px-4 fixed'>

        <div>
            <h1 className='text-5xl font-signature ml-2 select-none'>Batrick </h1>
        </div>

        <ul className='hidden md:flex select-none ml-auto'>

            {links.map(({id,link}) =>(
                <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 "> 
                    <Link to={link} smooth duration={500}>{link}</Link>
                </li>

            ))

            }

        </ul>

        <div 
            onClick={() => setNav(!nav)} 
            className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden ml-auto'>

            {nav ? < FaTimes size={30}/> :<FaBars size={30}/>}
        </div>

        <div>

            { nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 select-none '>

                {links.map(({id,link}) =>(
                    <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl select-none "> 
                        <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                    </li>
    
                ))
    
                }
    
                </ul>

            )

            }

            
        </div>

    </div>
  )
}

export default NavBar