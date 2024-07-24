import { toast } from 'react-hot-toast';

export const syncCartWithDatabase = async (cart) => {
  try {
    const token = localStorage.getItem('token');
    // console.log('Syncing cart:', cart);
    const response = await fetch('http://localhost:5000/api/users/cart/sync', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ cart })
    });

    if (!response.ok) {
      throw new Error('Failed to sync cart with database');
    }

    toast.success('Cart synced with database');
  } catch (error) {
    console.error('Error syncing cart:', error);
  }
};
