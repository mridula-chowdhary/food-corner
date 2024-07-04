import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Slices/CartSlice';
import { CiHeart } from "react-icons/ci";
import { FcLike } from "react-icons/fc";

export const jsonData = {
  items: [          
    { id: 1, name: 'Cake', price: 10, imageUrl: '../Images/cake1.jpg' },
    { id: 2, name: 'Cake 2', price: 15, imageUrl: '../Images/cake2.jpg' },
    { id: 3, name: 'Coffee', price: 5, imageUrl: '../Images/coffee1.jpg' },        
    { id: 4, name: 'Coffee 2', price: 12, imageUrl: '../Images/coffee2.jpg' },
    { id: 5, name: 'Pizza', price: 14, imageUrl: '../Images/pizza.jpg' },
    { id: 6, name: 'Pizza 2', price: 16, imageUrl: '../Images/pizza2.jpg' },
    { id: 7, name: 'Pizza 3', price: 20, imageUrl: '../Images/pizza3.jpg' },
    { id: 8, name: 'Sandwich', price: 13, imageUrl: '../Images/sandwitch.jpg' },
    { id: 9, name: 'Ice Cream', price: 10, imageUrl: '../Images/icecream.jpg' },
    { id: 10, name: 'Donuts', price: 12, imageUrl: '../Images/donuts.jpg' },
    { id: 11, name: 'Dish', price: 14, imageUrl: '../Images/dish.jpg' },            
  ]
};

function Menus() {
  const [liked, setLiked] = useState({});
  const dispatch = useDispatch();

  const handleLike = (itemId) => {
    setLiked(prevLikedItems => ({
      ...prevLikedItems,
      [itemId]: !prevLikedItems[itemId] 
    }));
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, qty: 1 }));
  };

  return (
    <div className="flex flex-wrap justify-center">
      {jsonData.items.map(item => (
        <div key={item.id} className="m-4 cursor-pointer transition-transform transform hover:scale-110">
          <img src={item.imageUrl} alt={item.name} className="w-48 h-48 object-cover" />
          <p className="text-center">{item.name}</p>
          <p className="text-center">Price =  ₹{item.price}</p>
          <div className='flex justify-between'>
            {liked[item.id] ? (
              <FcLike onClick={() => handleLike(item.id)} style={{ cursor: 'pointer' }} size={24} />
            ) : (
              <CiHeart onClick={() => handleLike(item.id)} style={{ cursor: 'pointer' }} size={24} />
            )}
            <div className='cursor-pointer'>
              <button
                className='bg-green-400 rounded-lg p-1 font-semibold'
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menus;
