import React from 'react';
import HeroImage from "../assets/heroImage.jpg";
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import {Link} from 'react-scroll';


const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20 pb-20  md:pt-0 md:pb-0">
       
       <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row pt-20 sm:pt-5'>

            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white '>
                    I'm a <span  className='text-gray-500'>Front End Developer</span>
                </h2>
                <p className='text-white py-4 max-w-md'>
                Embarking on a journey as a Front-End Virtuoso, I channel my passion into crafting captivating and interactive <span  className='text-gray-400'> web applications.</span><br/>Here is a bit more <span  className='text-gray-400'>about me.</span>
                </p>

                <div>
                    <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300 '>
                            <MdOutlineKeyboardArrowRight size={20} className='ml-1'/>
                        </span>

                    </Link>
                </div>
            </div>

            <div className='w-2/3 md:w-1/2' >
                <img src={HeroImage} alt="Batrick Profile" className="rounded-2xl mx-auto  w-full h1/2 object-cover h-full mt-10 md:mt-0" />
            </div>
       </div>
        
    </div>
  )
}

export default Home;