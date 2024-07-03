import React from 'react';
import {Link} from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";

function Navbar() {
  return (
    <div className='text-white bg-black opacity-0.25'>
      <div className='container mx-auto px-4'>
        <nav className='flex items-center justify-between h-16'>
          <div className='flex-shrink-0'>
            <a href='/' className='text-white text-lg font-semibold'>
             Food Corner
            </a>
          </div>
          <div className='flex justify-end'>
            <ul className='flex'>
              <li className='mr-6'>
                <Link to ='/' className='text-white hover:text-gray-300'>
                  Home
                </Link>
              </li>
              <li className='mr-6'>
                <Link to ='/menus'  className='text-white hover:text-gray-300'>
                  Menu
                </Link>
              </li>
              <li className='mr-6'>
                <Link to ='/contactus'  className='text-white hover:text-gray-300'>
                  Contact us
                </Link>
              </li>
              <li className='mr-6'>
                <Link to ='/cart' className='text-white hover:text-gray-300 '>
               <div className='flex justify-center items-center'> Cart <MdOutlineShoppingCart /></div> 
                </Link>
              </li>
              <li>
                <Link to ='/login'  className='text-white hover:text-gray-300'>
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
