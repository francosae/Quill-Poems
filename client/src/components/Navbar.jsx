import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#1F255B]'>
      <h1 className='w-full text-3xl font-bold text-[#1F255B]'>Quill Poems</h1>
      <ul className='hidden md:flex font-semibold'>

        <li className='p-1'><a className="btn btn-ghost normal-case text-lg" >Home</a></li>
        <li className='p-1'><a className="btn btn-ghost normal-case text-lg" >About</a></li>
        <li className='p-1'><a className="btn btn-ghost normal-case text-lg" >Contact</a></li>
        <Link to="/login">
        <li className='p-1'><a className="btn btn-outline btn-primary normal-case text-lg" >Login</a></li>
        </Link>
        <li className='p-1'><a className="btn btn-primary normal-case text-lg" >Register</a></li>
      </ul>


    </div>
  );
};

export default Navbar;