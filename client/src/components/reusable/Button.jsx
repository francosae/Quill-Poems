import React from 'react'
import { Link } from 'react-router-dom'
export default function Button({text, link}) {
  return (
    <Link to={link}>
    <button className='bg-[#180F70] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#EAE8FF] btn btn-primary'>
        {text}
    </button>
    </Link>
  )
}
