import React from 'react'
import SideBar from '../essential/SideBar'
import '../../styles/usercomponent/UserPage.css'
import { useState } from 'react'


const UserPage = () => {
    const [loading, setLoading] = useState(false)









    
  return (
    <div className='user'>
        <img src='https://images.unsplash.com/photo-1616837874254-8d5aaa63e273?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D'/>      
        <div className='user-details'>
            <h1>My Profile</h1>
            <h3></h3>

        </div>
    </div>
  )
}

export default UserPage
