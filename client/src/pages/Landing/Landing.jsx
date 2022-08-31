import React from 'react'
import Typed from 'react-typed'
import { Footer, Navbar, Button} from "../../components/index"

export default function Landing() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Footer/>
    </>
  )
}


const Hero = () => {
  return (
    <div>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-transparent bg-clip-text bg-gradient-to-r to-[#3626A7] from-[#1F255B]'>
          Write, Read, and Share Poems!
        </h1>
        <div className='flex justify-center items-center'>
          <p className='text-[#3626A7] md:text-5xl sm:text-4xl text-xl font-bold py-4'>
          Share your favorite 💌
          </p>
          <Typed
          className='text-[#8375e7] md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Haikus', 'Sonnets', 'Elegies', 'Ballads', 'Free Verses']}
            typeSpeed={120}
            backSpeed={90}
            loop
          />
        </div>
        <p className='text-[#3626A7] md:text-2xl text-xl font-bold'>Interested in poetry? Want to read poems? Thinking of writing poems?</p>
        <ul className='md:flex justify-center'>
        <li className='p-1'> <Button text="Start Reading"/></li>
        <li className='p-1'> <Button text="Start Writing"/></li>
      </ul>

      </div>
    </div>
  );
};

