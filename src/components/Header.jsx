import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'


function Header() {

    const[toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className='flex justify-between bg-primary px-5 py-3 '>
        <p className='text-2xl text-blue-800 font-semibold'>Muthukumar S</p>
        <nav className='hidden md:block'>
        <ul className='flex mt-1'>
            <li><a href="/">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Resume">Resume</a></li>
            <li><a href="#Contact">Contact</a></li> 
        </ul>
        </nav>

        {toggleMenu && <nav className='block md:hidden '>
        <ul onClick={()=> setToggleMenu(!toggleMenu)} className='flex flex-col mobile-nav'>
            <li><a href="/">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Resume">Resume</a></li>
            <li><a href="#Contact">Contact</a></li> 
        </ul>
        </nav>}
        
        <button onClick={()=> setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-black size-5'/></button>
    </header>
  )
}

export default Header