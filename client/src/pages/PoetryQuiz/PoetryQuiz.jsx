import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import { Navbar, Button} from '../../components'
export default function PoetryQuiz() {
  return (
    <>
    <Navbar location="auth"/>
    <Routes>
        <Route path="/" element={<QuizIntro />} />
        <Route path="/question1" element={<QuizQ1 />} />
    </Routes>

    </>
  )
}


function QuizIntro(){
    return(
        <div className='bg-[#EAE8FF]'>
            
        <div className='max-w-[1300px] w-full h-screen mx-auto flex flex-col '>
        <p className='font-thin text-xl mt-6'>Poetry Preference Quiz</p>
         <h2 className='md:text-3xl sm:text-xl text-xl h-max text-center font-normal md:py-6 mt-[100px] text-transparent bg-clip-text bg-gradient-to-r to-[#3626A7] from-[#1F255B]'>
             What’s your poetry personality?
          </h2>
          <h2 className='md:text-3xl sm:text-xl text-xl h-max text-center font-normal md:py-6 text-transparent bg-clip-text bg-gradient-to-r to-[#3626A7] from-[#1F255B]'>
          Take a short quiz to find out what kind of poetry you like!
          </h2>

          <Button text="Start" link="/poetryQuiz/question1"/>
        </div>
      </div>
    )
}

function QuizQ1(){
    return(
        <div className='bg-[#EAE8FF]'>
            
        <div className='max-w-[1300px] w-full h-screen mx-auto flex flex-col '>

        </div>
      </div>
    )
}