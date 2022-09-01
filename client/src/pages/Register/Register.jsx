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
    <div className='md:w-[700px] sm:w-[500px] w-[350px] mt-[-96px] h-screen mx-auto text-center flex flex-col justify-center '> 
    <div className='mt-[-50px]'>
    <form className="mt-8 space-y-6 border-b-8 border-[#8375e7] hover:border-[#3626A7]" action="#" method="POST">
      
    <p className='text-[#3626A7] md:text-4xl sm:text-3xl text-xl font-bold py-4'>
          Create your account 📖
    </p>
      <input type="hidden" name="remember" defaultValue="true" />
      
          <div className="-space-y-px rounded-md shadow-sm">
            
          <div className='flex flex-row justify-between' >

          <div>
          <p className="font-medium text-[#180F70] text-left mb-1 hover:text-indigo-500">
              First Name
          </p>
            <label htmlFor="firstName" className="sr-only">
              FirstName
            </label>
            <input
              id="firstName"
              name="firstName"
              type="firstName"
              autoComplete="firstName"
              required
              className="relative block md:w-[320px] sm:w-[200px] w-[150px] font-medium appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your first name"
            />
          </div>

          <div>
            <p className="font-medium text-[#180F70] text-left mb-1 hover:text-indigo-500">
              Last Name
            </p>
            <input
              id="lastName"
              name="lastName"
              type="lastName"
              autoComplete="lastName"
              required
              className="relative block md:w-[320px] sm:w-[200px] w-[150px] font-medium appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your last name"
            />
          </div>
          </div>
          <br></br>
          <p className="font-medium text-[#180F70] text-left mb-1 hover:text-indigo-500">
              Enter your email
          </p>
          <div className='flex'>
            <label htmlFor="username" className="sr-only">
              Username
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
          <div className='flex flex-row justify-between' >

          <div>
          <p className="font-medium text-[#180F70] text-left mb-1 hover:text-indigo-500">
              Create a password
          </p>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="password"
              required
              className="relative block md:w-[320px] sm:w-[200px] w-[150px] font-medium appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Create a password, minimum 8 characters."
            />
          </div>
          
          <div>
            <p className="font-medium text-[#180F70] text-left mb-1 hover:text-indigo-500">
              Confirm your password
            </p>
            <input
              id="passwordConfirm"
              name="passwordConfirm"
              type="passwordConfirm"
              autoComplete="passwordConfirm"
              required
              className="relative block md:w-[320px] sm:w-[200px] w-[150px] font-medium appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Confirm your password"
            />
          </div>
          </div>
          <br></br>

          <p className="font-medium text-[#180F70] text-left hover:text-indigo-500">
              Enter your birthday
          </p>
          <div className='flex flex-row justify-between'>
          
          <div>
          <p className="font-normal text-[#180F70] text-left hover:text-indigo-500">
              Select your month
          </p>
          <select class="relative block md:w-[200px] sm:w-[150px] w-[100px] font-medium appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
          </select>
          </div>

          <div>
          <p className="font-normal text-[#180F70] text-left hover:text-indigo-500">
              Enter the day
          </p>
          <select class="relative block md:w-[200px] sm:w-[150px] w-[100px] font-medium appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
          </select>
          </div>

          <div>
          <p className="font-normal text-[#180F70] text-left hover:text-indigo-500">
              Enter the year
          </p>
          <select class="relative block md:w-[200px] sm:w-[150px] w-[100px] font-medium appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
          </select>
          </div>

          </div>
        

        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm">
              <a href="#" className="font-medium text-[#180F70] hover:text-indigo-500">
                Already have an account?
              </a>
            </div>
        </div>
        <div className='md:flex justify-right'>
          <button 
            type="submit"
            className="group relative flex justify-right rounded-md bg-[#180F70] md:w-[300px] sm:w-[200px] w-[150px] font-medium my-6 py-3 text-[#EAE8FF] btn btn-primary"
          >
            <span className="hidden sm:flex absolute inset-y-0 left-0 items-center pl-3">
              <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
            Next
          </button>
        </div>
      </form>
      </div>
      </div>
  )
}
