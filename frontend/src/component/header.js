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
        <div className='text-2xl relative'><BsCart4/>
        {/*orders*/}
        <div className='absolute -top-2 -right-1 text-white bg-red-600 h-4 w-4 rounded-full m-0 p-0 text-sm text-center'>0</div>
        </div>
        <div className='text-1xl'>
          <div className='border-2 border-solid border-slate-500 p-1 rounded-full cursor-pointer'><FaRegUser/></div>
          <div className='absolute right-2 py-2 px-2 bg-white shadow drop-shadow-md'>
            <p className='whitespace-nowrap cursor-pointer'>New Product</p>
            <p className='whitespace-nowrap cursor-pointer'>Login</p>
          </div>
          </div>
          </div>
          </div>
      {/*for mobile view*/}
    </header>
  )
}

export default Header
