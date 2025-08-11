import React from 'react'
// import '../../data/HomeMenu'
import HomeMenuCard from './HomeMenuCard'
import { Menu } from '../../data/HomeMenu'
import '../../styles/homecomponent/HomeMenu.css'


const HomeMenu = () => {
  return (
    <div className='under-textloop'>
        {
            Menu.map((item,idx) => <HomeMenuCard data = {item} key = {idx}/>)

        }
    </div>
  )
}

export default HomeMenu
