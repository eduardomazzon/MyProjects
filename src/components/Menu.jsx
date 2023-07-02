import React from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="flex justify-center items-center bg-[rgb(255,0,0)]">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
    </div>
  )
}

export default Menu