import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/Slices/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { setCart } from '../redux/Slices/CartSlice';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });
  
      const data = await response.json();
      if (response.ok && data.userFound) {
        dispatch(login({ email: formData.email }));
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify({ email: formData.email }));
  
        // Fetch and set cart data
        const cartResponse = await fetch('http://localhost:5000/api/users/cart', {
          headers: {
            'Authorization': `Bearer ${data.token}`
          }
        });
        const cartData = await cartResponse.json();
        if (cartResponse.ok) {
          dispatch(setCart(cartData.cart)); // Set cart data in Redux store
        }
  
        navigate('/');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while logging in');
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center">Login to Food Corner</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded" 
              required 
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded" 
              required 
            />
          </div>
          <button type="submit" className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
