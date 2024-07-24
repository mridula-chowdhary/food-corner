// src/components/Profile.js
import React, { useEffect, useState } from 'react';

const fetchWithToken = async (url, options = {}) => {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
    'Authorization': `Bearer ${token}`
  };

  const response = await fetch(url, { ...options, headers });
  return response;
};

const Profile = () => {
  const [profile, setProfile] = useState(null);

  const fetchProfile = async () => {
    try {
      const response = await fetchWithToken('http://localhost:5000/api/users/profile');
      const data = await response.json();
      setProfile(data);
    } catch (err) {
      console.error('Error fetching profile:', err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Username: {profile.username}</p>
      <p>Email: {profile.email}</p>
    </div>
  );
};

export default Profile;
