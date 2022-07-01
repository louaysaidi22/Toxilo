import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav id='menu' className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <div className='navbar-header'>
        <NavLink className="navbar-brand" to="/">
          <img src="logo1.png" height ="50px" alt="Toxilo"/>
        </NavLink>
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
            <NavLink className="navbar-brand" to="/agency">
              Agency
            </NavLink>
            </li>
            <li>
            <NavLink className="navbar-brand" to="/services">
              Services
            </NavLink>
            </li>
            <li>
            <NavLink className="navbar-brand" to="/ourshop">
              Our Shop
            </NavLink>
            </li>
            <li>
            <NavLink className="navbar-brand" to="/team">
              Team
            </NavLink>
            </li>
            <li>
            <NavLink className="navbar-brand" to="/contactus">
              Contact Us
            </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
