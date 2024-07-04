import React from 'react';
import { IoMdClose } from 'react-icons/io';
import ItemCard from './ItemCard';


const Cart = () => {

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-8">
      <div className="relative w-full lg:w-[40vw] h-full p-5 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer" />
        </div>
        <div>
          <ItemCard/>
          </div>
        <div className="mb-3">
          <h3 className="font-semibold text-gray-800">Items:</h3>
          <h3 className="font-semibold text-gray-800">Total Amount:</h3>
        </div>
        <hr />
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-full px-5">
          <button className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-full">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
