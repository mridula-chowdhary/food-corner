import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/Slices/CartSlice';
import { CiHeart } from 'react-icons/ci';
import { FcLike } from 'react-icons/fc';
import JsonData from '../data/JsonData'; 
import toast from 'react-hot-toast';

function Menus() {
  const [liked, setLiked] = useState({});
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);
  const searchQuery = useSelector((state) => state.search.search);

  const handleLike = (itemId) => {
    setLiked(prevLikedItems => ({
      ...prevLikedItems,
      [itemId]: !prevLikedItems[itemId] 
    }));
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, qty: 1 }));
    toast.success(`${item.name} added to cart!`);
  };

  const filteredItems = JsonData.filter(item => 
    (selectedCategory === 'All' || item.category === selectedCategory) &&
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <div className="flex flex-wrap justify-center">
      {filteredItems.map(item => (
        <div key={item.id} className="m-4 p-3 cursor-pointer transition-transform transform hover:scale-110 shadow-xl rounded-lg">
          <img src={item.img} alt={item.name} className="w-56 h-48 object-cover" />
          <p className="text-center p-2">{item.name}</p>
          <p className="text-center  p-2">Price : ₹{item.price}</p>
          <div className='flex justify-between'>
            {liked[item.id] ? (
              <FcLike onClick={() => handleLike(item.id)} style={{ cursor: 'pointer' }} size={24} />
            ) : (
              <CiHeart onClick={() => handleLike(item.id)} style={{ cursor: 'pointer' }} size={24} />
            )}
            <div className='cursor-pointer'>
              <button
                className='bg-green-400 rounded-lg p-1 font-semibold '
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Menus;
