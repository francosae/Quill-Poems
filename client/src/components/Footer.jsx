import React from 'react';
import {
  FaLinkedinIn,
  FaGithubSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-[#EAE8FF]'>
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 bg-[#EAE8FF] text-[#3626A7]'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#1F255B]'>Quill Poems</h1>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <p className='py-4'>Copyright © 2022 - All right reserved.</p>
        <div className='flex justify-evenly md:w-[75%] my-6 text-[#1F255B]'>
            <FaLinkedinIn size={30} />
            <FaGithubSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-bold  text-[#1F255B]'>Product</h6>
        <ul>
            <li className='py-2 text-sm'>Contact Us</li>
            <li className='py-2 text-sm'>FAQs</li>
            <li className='py-2 text-sm'>Terms of Service</li>
            <li className='py-2 text-sm'>Privacy Policy</li>
        </ul>
    </div>
    <div>
        <h6 className='font-bold text-[#1F255B]'>Ppellentesque</h6>
        <ul>
            <li className='py-2 text-sm'>Donec</li>
            <li className='py-2 text-sm'>Fusce</li>
            <li className='py-2 text-sm'>Phasellus</li>
            <li className='py-2 text-sm'>Quisque</li>
        </ul>
    </div>
    <div>
        <h6 className='font-bold text-[#1F255B]'>Maecenas</h6>
        <ul>
            <li className='py-2 text-sm'>Suspendisse</li>
            <li className='py-2 text-sm'>Quisque</li>
            <li className='py-2 text-sm'>Suspendisse</li>
            <li className='py-2 text-sm'>Fusce</li>
            <li className='py-2 text-sm'>Morbi</li>
        </ul>
    </div>
    <div>
        <h6 className='font-bold text-[#1F255B]'>Donec</h6>
        <ul>
            <li className='py-2 text-sm'>Commodo</li>
            <li className='py-2 text-sm'>Morbi</li>
            <li className='py-2 text-sm'>Suspendisse</li>
        </ul>
    </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;