import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>Movie Search</h1>
      <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/moviesPage">Movies</NavLink></li>
      <li><NavLink to="/aboutUs">About Us</NavLink></li>

       
      </ul>
    </div>
  )
}

export default Navbar
