import React from 'react'
import ResumeImg from '../assets/resume.jpg';

function Resume() {

    const config = {
        line1: "You can view my Resume",
        link: 'https://muthkumar-resume.tiiny.site'
    }

  return (
    <section id='Resume' className='flex flex-col md:flex-row about-bg px-5'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img src={ResumeImg} alt="Resume-Image" className='w-[300px]'/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
         <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl  border-b-2 mb-3 w-[130px]'>Resume</h1>
            <p className='pb-5'>{config.line1} <a href={config.link} className='btn'>Download</a></p>
         </div>
        </div>
    </section>
  )
}

export default Resume