import React from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { Footer, Navbar } from "../../components/index"
import { useLocation } from 'react-router-dom'

export default function Login() {
  let location = useLocation();
  return (
    <>
      <Navbar location={location.pathname}/>
      <Content/>
      <Footer/>
    </>
  )
}


function Content(){
  return(
    <div className='md:w-[600px] sm:w-[500px] w-[350px] mt-[-96px] h-screen mx-auto text-center flex flex-col justify-center '> 
    <form className="mt-8 space-y-6 border-b-8 border-[#8375e7] hover:border-[#3626A7]" action="#" method="POST">
    <p className='text-[#3626A7] md:text-4xl sm:text-3xl text-xl font-bold py-4'>
          Sign in to your account 📖
    </p>
    <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="relative block w-full font-medium appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>
          <br></br>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="relative block w-full  font-medium appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm">
              <a href="#" className="font-medium text-[#180F70] hover:text-indigo-500">
                Don't have an account?
              </a>
            </div>

          <div className="text-sm">
            <a href="#" className="font-medium text-[#180F70] hover:text-indigo-500">
              Forgot your password?
            </a>
          </div>
        </div>
        <div className='md:flex justify-center'>
          <button 
            type="submit"
            className="group relative flex justify-center rounded-md bg-[#180F70] md:w-[600px] sm:w-[500px] w-[350px] font-medium my-6 mx-auto py-3 text-[#EAE8FF] btn btn-primary"
          >
            <span className="hidden sm:flex absolute inset-y-0 left-0 items-center pl-3">
              <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
            Sign in
          </button>
        </div>
      </form>
      </div>
  )
}
