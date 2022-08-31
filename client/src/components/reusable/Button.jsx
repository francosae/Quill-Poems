import React from 'react'

export default function Button({text}) {
  return (
    <button className='bg-[#180F70] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#EAE8FF] btn btn-primary'>
        {text}
    </button>
  )
}
