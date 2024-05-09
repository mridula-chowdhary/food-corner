import React from 'react';
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
                <a href='/' className='text-white hover:text-gray-300'>
                  Home
                </a>
              </li>
              <li className='mr-6'>
                <a href='/' className='text-white hover:text-gray-300'>
                  Menu
                </a>
              </li>
              <li className='mr-6'>
                <a href='/' className='text-white hover:text-gray-300'>
                  Contact us
                </a>
              </li>
              <li className='mr-6'>
                <a href='/' className='text-white hover:text-gray-300'>
               <div className='flex justify-center items-center'> Cart <MdOutlineShoppingCart/></div> 
                </a>
              </li>
              <li>
                <a href='/' className='text-white hover:text-gray-300'>
                  Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
