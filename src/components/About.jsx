import React from 'react'
import AbouImg from '../assets/about.png';

function About() {

    const config = {
        line1: "Hi, My name is Muthukumar S. I am a Fullstack web developer",
        line2: "I am proficient in Frontend skills like HTML, CSS, Bootstrap, JavaScript, React.js",
        line3: "In Backend Node.js, Express.js and MongoDB"
    }
  return (
    <section id='About' className='flex flex-col md:flex-row about-bg px-5'>
        <div className='py-5 md:w-1/2'>
            <img src={AbouImg} alt="About-Image" />
        </div>
        <div className='md:w-1/2 flex justify-center'>
         <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl  border-b-2 mb-3 w-[160px]'>About Me</h1>
            <p className='pb-5'>{config.line1}</p>
            <p className='pb-5'>{config.line2}</p>
            <p className='pb-5'>{config.line3}</p>
         </div>
        </div>
    </section>
  )
}

export default About