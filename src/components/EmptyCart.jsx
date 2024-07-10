import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <svg
        className="w-24 h-24 mb-4 text-gray-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a2 2 0 001.7 2.3h10.3a2 2 0 001.7-2.3L17 13M7 13H5.4M5 6h14M9 21h6"
        />
      </svg>
      <h2 className="mb-4 text-2xl font-semibold text-gray-700">Your cart is empty</h2>
      <p className="text-gray-500">Looks like you haven't added anything to your cart yet.</p>
      <Link to='/'>
      <button className="px-4 py-2 mt-6 text-white bg-green-500 rounded hover:bg-gray-400">
        Add Items
      </button>
      </Link>
    </div>
  );
};

export default EmptyCart;
