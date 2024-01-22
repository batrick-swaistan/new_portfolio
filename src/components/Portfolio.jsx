import React from 'react';
import formm from '../assets/portfolio/Form.png';
import weather from '../assets/portfolio/Weather.png';
import calculator from '../assets/portfolio/Calculator.png';
import notes from '../assets/portfolio/Notes.png';
import quote from '../assets/portfolio/Quote.png';
import waila from '../assets/portfolio/Waila.png';



const Portfolio = () => {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) {
          newWindow.opener = null;
        }
      };

    const navigateToDemo = (demoLink) => {
        openInNewTab(demoLink);
    };

    const navigateToCode=(codeLink) =>{
        openInNewTab(codeLink);
    };

    const portfolios=[
        {
            id:1,
            src: formm,
            demoLink:'https://form-design-pied.vercel.app/',
            codeLink:'https://github.com/batrick-swaistan/form-design', 
        },
        {
            id:2,
            src:weather,
            demoLink:'https://weather-app-ten-pi.vercel.app/',
            codeLink:'https://github.com/batrick-swaistan/Weather_App',

        },
        {
            id:3,
            src:calculator,
            demoLink:'https://calculator-react-pi-two.vercel.app/',
            codeLink:'https://github.com/batrick-swaistan/calculator-react',
        },
        {
            id:4,
            src: notes,
            demoLink:'https://notes-app-two-zeta.vercel.app//',
            codeLink:'https://github.com/batrick-swaistan/Notes_App',
        },
        {
            id:5,
            src: quote,
            demoLink:'https://quote-generator-sepia.vercel.app/',
            codeLink:'https://github.com/batrick-swaistan/Quote_Generator',
        },
        {
            id:6,
            src: waila,
            demoLink:'https://waila-tech.vercel.app/',
            codeLink:'https://github.com/batrick-swaistan/waila_tech',
        },

    ]
  return (
    <div name="portfolio" className=" bg-gradient-to-b  from-black to-gray-800 w-full text-white md:h-screen  portfolio">
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div  className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>


            
                
            <div  className='grid sm:gridgrid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
                {
                     portfolios.map(({id,src,demoLink,codeLink})=>(
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                        <div className='flex items-center justify-center'>
                            <button onClick={()=> navigateToDemo(demoLink)} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                            <button onClick={()=> navigateToCode(codeLink)} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                        </div>
                    </div>
                      ))
                }
                    
            </div>

               
            

           

        </div>
        
    </div>
  )
}

export default Portfolio;