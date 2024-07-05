import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Slices/CartSlice';
import { CiHeart } from 'react-icons/ci';
import { FcLike } from 'react-icons/fc';
import JsonData from '../data/JsonData'; 
import toast from 'react-hot-toast';

function Menus() {
  const [liked, setLiked] = useState({});
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  const handleLike = (itemId) => {
    setLiked(prevLikedItems => ({
      ...prevLikedItems,
      [itemId]: !prevLikedItems[itemId] 
    }));
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, qty: 1 }))
    toast.success(`${item.name} added to cart!`);
  };

  const filteredItems = selectedCategory === 'All'
    ? JsonData
    : JsonData.filter(item => item.category === selectedCategory);

  return (
    <div className="flex flex-wrap justify-center">
      {filteredItems.map(item => (
        <div key={item.id} className="m-4 cursor-pointer transition-transform transform hover:scale-110">
          <img src={item.img} alt={item.name} className="w-48 h-48 object-cover" />
          <p className="text-center">{item.name}</p>
          <p className="text-center">Price = ₹{item.price}</p>
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
