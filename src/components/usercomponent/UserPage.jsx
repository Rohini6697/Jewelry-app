// import React from 'react'
import SideBar from '../essential/SideBar'
import '../../styles/usercomponent/UserPage.css'
// import { useState } from 'react'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
// import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
// import '../styles/User.css';
const UserPage = () =>  {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const accessToken = localStorage.getItem('access_token');
                if (!accessToken) {
                    setError('Authentication token not found.');
                    setLoading(false);
                    toast.error('Please log in to view your profile.');
                    navigate('/login');
                    return;
                }
                const response = await axios.get('https://ecommerce-project-backend-nodejs.onrender.com/api/auth/me',
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );
                console.log("Users Details:", response.data);
                setUser(response.data.data);
                // toast.success('Details fetched successfully!');
            } catch (err) {
                const msg = err.response?.data?.message || 'Failed to get user profile. Please try again later.';
                setError(msg);
                toast.error(msg);
                console.error("Error fetching user profile:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchUserProfile();
    }, [navigate]);
    const handleLogout = () => {
        localStorage.removeItem('access_token');
        toast.success('Logged out successfully!');
        navigate('/login');
    };
    if (loading) {
        return <div className="loading-message">Loading user...</div>;
    }
    if (error) {
        return <div className="error-message">Error: {error}</div>;
    }
    if (!user) {
        return <div className="no-data-message">No user available.</div>;
    }


    
  return (
    <div className='user'>
        <img src='https://images.unsplash.com/photo-1616837874254-8d5aaa63e273?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D'/>      
        <div className='user-details'>
            <h1>My Profile</h1>
            <h2>{user.name}</h2>
            <h4>{user.email}</h4>
            <button className='logout' onClick={handleLogout}>Log Out</button>

        </div>
    </div>
  )
}

export default UserPage
