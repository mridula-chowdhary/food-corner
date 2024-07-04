import React, { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
// import { Link } from 'react-router-dom/dist';
// import Cart from './Cart';



export const jsonData = {
  items: [          
    { id: 1, price: '$10', imageUrl: '../Images/cake1.jpg' },
    { id: 2, price: '$15', imageUrl: '../Images/cake2.jpg' },
    { id: 3, price: '$5', imageUrl: '../Images/coffee1.jpg' },        
    { id: 4, price: '$12', imageUrl: '../Images/coffee2.jpg' },
    { id: 5, price: '$14', imageUrl: '../Images/pizza.jpg' },
    { id: 6, price: '$16', imageUrl: '../Images/pizza2.jpg' },
    { id: 7, price: '$20', imageUrl: '../Images/pizza3.jpg' },
    { id: 8, price: '$13', imageUrl: '../Images/sandwitch.jpg' },
    { id: 9, price: '$10', imageUrl: '../Images/icecream.jpg' },
    { id: 10, price: '$12', imageUrl: '../Images/donuts.jpg' },
    { id: 11, price: '$14', imageUrl: '../Images/dish.jpg' },            
  ]
};

function Menus() {

  const [liked, setLiked] = useState({});
  const handleLike = (itemId) => {
    setLiked(prevLikedItems => ({
      ...prevLikedItems,
      [itemId]: !prevLikedItems[itemId] 
    }));
  };

  return (
    <div className="flex flex-wrap justify-center">
      {jsonData.items.map(item => (
        <div key={item.id} className="m-4 cursor-pointer transition-transform transform hover:scale-110">
          <img src={item.imageUrl} alt={item.name} className="w-48 h-48 object-cover" />
          <p className="text-center">Price = {item.price}</p>
          <div className='flex justify-between'>
            {liked[item.id] ? (
              <FcLike onClick={() => handleLike(item.id)} style={{ cursor: 'pointer' }}  size={24}/>
            ) : (
              <CiHeart onClick={() => handleLike(item.id)} style={{ cursor: 'pointer' }}   size={24}/>
            )}
            <div className=' cursor-pointer'>
             <button className=' bg-green-400 rounded-lg p-1 font-semibold'>Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menus;
