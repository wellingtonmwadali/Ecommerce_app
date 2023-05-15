import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import {FaRegUser} from 'react-icons/fa';
import {BsCart4} from 'react-icons/bs'
const Header = () => {
  return (
    /*logo*/
    <header className='fixed shadow-md w-full h-14 px-2 md:px-4'>
      {/*for desktop view */}
      <div className='flex items-center justify-between'>
       <Link to={""}>
       <div className='h-12'>
          <img src={logo} className = 'h-full'/>
        </div>
       </Link>
       {/*icons*/}
       <div className='flex items-center gap-3 md:gap-6'>
        <nav className='flex gap-3 md:gap-6 text-base md:text-lg'>
          <Link to = {""}>Home</Link>
          <Link to = {"menu"}>Menu</Link>
          <Link to = {"about"}>About</Link>
          <Link to = {"contact"}>Contact</Link>
        </nav>
        <div className='text-2xl'><BsCart4/></div>
        <div className='text-2xl'><FaRegUser/></div>
       </div>
      </div>
      {/*for mobile view*/}
    </header>
  )
}

export default Header
