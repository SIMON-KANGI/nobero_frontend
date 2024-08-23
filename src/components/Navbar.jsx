import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

function Navbar() {
  return (
    <header className='sticky z-10  top-0 bg-white w-screen shadow-md p-6'>
    <div>

    </div>
      <nav className='flex justify-evenly items-center'> 
      <Link className='mx-3'>
        <img src="https://nobero.com/cdn/shop/files/Nobero_logo_1_2.svg?v=1694697396" alt="logo" width="70px" height="70px" />
      </Link>
      <ul className='flex items-center justify-evenly hover:text-slate-300'>
        
      <Link to="/" className='mx-3'>
    <li className='font-bold text-indigo-950 text-lg'>Men</li>    
      </Link>
      <Link className='mx-3'>
    <li className='font-bold text-indigo-950 text-lg'>Women</li>    
      </Link>
      <Link className='mx-3'>
    <li className='font-bold text-indigo-950 text-lg'>Clasc-T-Shirts</li>    
      </Link>
      <Link className='mx-3'>
    <li className='font-bold text-indigo-950 text-lg'>Oversized T-Shirts</li>    
      </Link>
      <Link className='mx-3'>
    <li className='font-bold text-indigo-950 text-lg'>Fashion Joggers</li>    
      </Link>
      <Link className='mx-3'>
    <li className='font-bold text-indigo-950 text-lg'>Hoodie</li>    
      </Link>
      </ul>
     

  <Search/>
      </nav>
    
    </header>
  )
}

export default Navbar
