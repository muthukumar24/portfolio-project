import React from 'react'
import HeroImage from '../assets/hero.png';
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

function Hero() {


  const config = {
    subTitle : "I am a Full-stack Developer",
    linkGIT : "https://github.com/muthukumar24",
    linkLinkedin : "https://www.linkedin.com/in/muthukumars2408/"
  }

  return (
    <section className='flex flex-col md:flex-row justify-center px-5 py-20 bg-secondary'>
        <div className='md:w-1/2 flex flex-col'>
        <h1 className=' text-white text-5xl font-hero-font mt-10'>Hi, <br />I am Muthukumar S
            <p className='text-2xl'>{config.subTitle}</p>
        </h1>
        <div className='flex py-5'>
            <a href={config.linkLinkedin} target='_blank' className='pr-3 hover:text-white'><AiOutlineLinkedin size={30}/></a>
            <a href={config.linkGIT} target='_blank' className='hover:text-white'><AiOutlineGithub size={30}/></a>
        </div>
        </div>
        
        <img src={HeroImage} alt="hero-image" className='md:w-1/3 ' />
    </section>
  )
}

export default Hero