import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <h2 className=' text-center mt-14 text-2xl'>Your Order is Placed Successfully</h2>
      <p className="mt-4 text-lg text-gray-700 text-center">You will be redirected to the home page shortly.</p>
    </div>
  )
}

export default Success
