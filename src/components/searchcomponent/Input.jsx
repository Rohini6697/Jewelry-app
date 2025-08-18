import React from 'react'
import '../../styles/searchcomponent/Input.css'
import { FaSearch,FaTimes} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const Input = () => {
    const navigate = useNavigate();
    const goback = () => {
        navigate(-1);
    }
  return (
    <div>
        <div className='input-container'>
            <FaSearch size={25} strokeWidth={1} className='search-icon'/>
            <input type='text' placeholder='Search'/>
            <FaTimes size={25} className='cross-icon' onClick={goback}/>
        </div>
        <hr className='line'/>
    </div>
  )
}

export default Input
