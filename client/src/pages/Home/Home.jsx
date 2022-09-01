import React from 'react'
import { Navbar, Footer } from '../../components/index'

export default function Home() {
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
    <div className='md:w-[1500px] sm:w-[500px] w-[350px] mt-[-96px] h-screen mx-auto text-left flex flex-col  justify-center '> 
    HELLO
    </div>
  )
}

function Post(){
  return (
    <div>
      
    </div>
  )
}