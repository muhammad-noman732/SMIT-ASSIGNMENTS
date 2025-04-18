import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaSearch, FaHome, FaVideo, FaStore, FaUsers, FaBell, FaBars } from 'react-icons/fa';
import profile from '../../assets/profile.png'; 

const Navbar = () => {
  return (
    <nav className="w-full bg-white px-3 py-2 shadow-sm flex justify-between items-center fixed top-0 z-50 ">
      
      {/* Left: Logo + Search */}
      <div className="flex items-center gap-3">
        <FaFacebook className="text-blue-600 text-3xl " />
        <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-full">
          <FaSearch className="text-gray-500 text-sm" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="ml-2 bg-transparent outline-none text-sm"
          />
        </div>
      </div>

      {/* Center: Navigation Icons */}
      <div className="hidden md:flex gap-20 w-[450px] text-gray-500 text-3xl ">
        <NavLink  to='/'><FaHome className="cursor-pointer hover:text-blue-600" /></NavLink>  
        <FaVideo className="cursor-pointer hover:text-blue-600" />
        <FaStore className="cursor-pointer hover:text-blue-600" />
        <FaUsers className="cursor-pointer hover:text-blue-600" />
      </div>

      {/* Right: Profile Avatar & Menu */}
      <div className="flex items-center gap-3 w-[150px]">
        <img src={profile} alt="profile" className="w-9 h-9 rounded-full object-cover" />
        <FaBars className="text-gray-500 cursor-pointer md:hidden" />
      </div>
    </nav>
  );
};

export default Navbar;
