import React from 'react'

function Contact() {

  const config = {
    email : "muthukumar24081999@gmail.com",
    phone: "+91 8667587543"
  }

  return (
    <section id='Contact' className='flex flex-col bg-secondary px-5 py-20'>
        <div className='flex flex-col items-center'>
            <h1 className='text-4xl  border-b-2 mb-3 w-[130px] text-white'>Contact</h1>
            <p className='text-white pb-5'>Want to discuss more in detail, Contact me.</p>
            <p className='text-white py-2'><span className='font-bold'>Email :</span> {config.email}</p>
            <p className='text-white py-2'><span className='font-bold'>Phone :</span> {config.phone}</p>

        </div>
    </section>
  )
}

export default Contact