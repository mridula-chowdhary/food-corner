import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, fetchCart } from '../redux/Slices/CartSlice';
import { CiHeart } from 'react-icons/ci';
import { FcLike } from 'react-icons/fc';
import JsonData from '../data/JsonData'; 
import toast from 'react-hot-toast';

function Menus() {
  const [liked, setLiked] = useState({});
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);
  const searchQuery = useSelector((state) => state.search.search);
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      const fetchUserCart = async () => {
        try {
          const token = localStorage.getItem('token');
          const response = await fetch('http://localhost:5000/api/users/cart', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });

          if (response.ok) {
            const data = await response.json();
            dispatch(fetchCart(data.cart)); // Assuming `fetchCart` is an action to update cart state
          } else {
            console.error('Failed to fetch cart data');
          }
        } catch (error) {
          console.error('Error fetching cart data:', error);
        }
      };

      fetchUserCart();
    }
  }, [isAuthenticated, dispatch]);

  const handleLike = (itemId) => {
    setLiked(prevLikedItems => ({
      ...prevLikedItems,
      [itemId]: !prevLikedItems[itemId] 
    }));
  };

  const handleAddToCart = async (item) => {
    if (!isAuthenticated) {
      toast.error('Please login to add items to the cart');
      return;
    }
    
    dispatch(addToCart({ ...item, qty: 1 }));
    toast.success(`${item.name} added to cart!`);
    
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/users/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          productId: item.id,
          qty: 1
        })
      });

      if (!response.ok) {
        throw new Error('Failed to add item to cart');
      }

      toast.success('Cart updated in database!');
    } catch (error) {
      toast.error('Failed to update cart in database');
    }
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
            <p className="text-center p-2">Price : ₹{item.price}</p>
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
    </>
  );
}

export default Menus;
