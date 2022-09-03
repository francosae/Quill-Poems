import React, { useState } from 'react';
import {Button} from './index'
import { Link } from 'react-router-dom';

const Navbar = ({location}) => {
    if (location === "/login" || location === "/signup"){
        return (
            <LoginNav/>
        )
        }
    if (location === "auth"){
      return(
        <AuthNav/>
      )
    }
  return (
    <DefaultNav/>
  );
};

export default Navbar;

const DefaultNav = () => {
    return(
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#1F255B]'>
        <Link to="/">
        <h1 className='w-full text-3xl font-medium text-[#1F255B]'>Quill Poems</h1>
        </Link>
        <ul className='hidden md:flex font-semibold'>
          <li className='p-1'><a className="btn btn-ghost rounded-md font-medium" >Home</a></li>
          <li className='p-1'><a className="btn btn-ghost rounded-md font-medium" >About</a></li>
          <li className='p-1'><a className="btn btn-ghost rounded-md font-medium" >Contact</a></li>
          <Link to="/login">
          <li className='p-1'><a className="btn btn-outline btn-primary rounded-md font-medium text-[#180F70]" >Login</a></li>
          </Link>

          <Link to="/signup">
          <li className='p-1'><a className="btn btn-primary rounded-md font-medium bg-[#180F70]" >Register</a></li>
          </Link>
        </ul>
        </div>
    )
}

const LoginNav = () => {
    return(
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#1F255B]'>
        <Link to="/">
        <h1 className='w-full text-3xl font-medium text-[#1F255B]'>Quill Poems</h1>
        </Link>
        <ul className='hidden md:flex font-semibold'>
          <Link to="/login">
          <li className='p-1'><a className="btn btn-outline btn-primary rounded-md font-medium text-[#180F70]" >Login</a></li>
          </Link>

          <Link to="/signup">
          <li className='p-1'><a className="btn btn-primary rounded-md font-medium bg-[#180F70]" >Register</a></li>
          </Link>
        </ul>
        </div>
    )
}


const AuthNav = () => {
    return(
      <div className='flex max-w-full bg-[#EAE8FF] '>
        <div className='flex justify-between items-center h-15 w-[1800px] mx-auto px-4 text-[#1F255B] bg-[#e3e0ff]'>
          
        <Link to="/home">
        <h1 className='w-full text-3xl font-medium text-[#1F255B]'>Quill Poems</h1>
        </Link>

        <ul className='hidden sm:flex font-semibold'>
          <li className='p-1'><UserDropdown/></li>
        </ul>
        </div>
      </div>
    )
}

function UserDropdown(){
  return(
    <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
      <div class="w-9 rounded-full">
        <img src="https://placeimg.com/80/80/people" />
      </div>
    </label>
    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li>
        <a class="justify-between">
          Profile
          <span class="badge">New</span>
        </a>
      </li>
      <li><a>Settings</a></li>
      <li><a>Logout</a></li>
    </ul>
    </div>
  )
}