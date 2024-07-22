import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from 'react-redux';

function Navbar() {
  const cartItems = useSelector(state => state.cart.cart);
  const cartItemCount = cartItems.reduce((total, item) => total + item.qty, 0);
  const navigate = useNavigate();

  const handleCartClick = () => {
    if (cartItemCount > 0) {
      navigate('/cart');
    } else {
      navigate('/emptyCart');
    }
  };

  return (
    <div className='text-white bg-black opacity-0.25'>
      <div className='container mx-auto px-4'>
        <nav className='flex items-center justify-between h-16'>
          <div className='flex-shrink-0'>
            <Link to='/' className='text-white text-lg font-semibold'>
              Food Corner
            </Link>
          </div>
          <div className='flex justify-end'>
            <ul className='flex'>
              <li className='mr-6'>
                <Link to='/' className='text-white hover:text-gray-300'>
                  Home
                </Link>
              </li>
              <li className='mr-6'>
                <Link to='/menus' className='text-white hover:text-gray-300'>
                  Menu
                </Link>
              </li>
              <li className='mr-6'>
                <Link to='/contactus' className='text-white hover:text-gray-300'>
                  Contact Us
                </Link>
              </li>
              <li className='mr-6'>
                <button onClick={handleCartClick} className='text-white hover:text-gray-300'>
                  <div className='flex items-center'>
                    Cart <MdOutlineShoppingCart className='ml-1' />
                    {cartItemCount > 0 && (
                      <span className="bg-red-500 text-white px-2 rounded-full ml-1">
                        {cartItemCount}
                      </span>
                    )}
                  </div>
                </button>
              </li>
              <li className='mr-6'>
                <Link to='/signup' className='text-white hover:text-gray-300'>
                  Sign Up
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
