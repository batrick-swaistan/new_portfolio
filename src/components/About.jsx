    import React from 'react';

    const About = () => {
    return (
        <div name="about" className="h-screen w-full bg-gradient-to-b  from-gray-800 to-black text-white abt md:pt-0">
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-15 md:mt-20'>Hello! I'm Batrick Swaistan, a 21-year-old recent graduate in Computer Science and Engineering. I am a creative and skilled web developer with prior experience as an intern at Tcare Private Limited, where I worked as a Data Miner.</p>
            
                <br />

                <p className='text-xl'>I possess knowledge in a variety of technologies, including HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, React.js, Python, and SQL. My expertise extends to frontend development, with a focus on React.js, where I have successfully completed numerous projects. </p>

                <br/>
                <p className='text-xl'>
                Feel free to reach out to me for any projects that require development in React.js. I am enthusiastic about leveraging my skills to contribute to the success of your projects.


                </p>

            </div>
                
            
        </div>
    )
    }

    export default About;