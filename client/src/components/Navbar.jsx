import React from 'react'
import assets, { menuLinks } from '../assets/assets'
import Link from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to='/'>
            <img src={assets.logo} alt="logo" className='h-8'/>
        </Link>
        
        <div>
          {menuLinks.map((link, index)=>
          (
            <Link key = {index} to={link.path}>
              {link.name}
            </Link>
          ))}
        </div>
    </div>
  )
}

export default Navbar