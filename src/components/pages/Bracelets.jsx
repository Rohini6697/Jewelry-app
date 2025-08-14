import React from 'react'
import SideBar from '../essential/SideBar'
import BraceletsMain from '../braceletscomponent/BraceletsMain'
import '../../styles/Pages/Bracelets.css'

const Bracelets = () => {
  return (
    <div className='bracelets'>
      <SideBar/>
      <BraceletsMain/>
      
    </div>
  )
}

export default Bracelets
