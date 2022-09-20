import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login, Register, Landing, Home, PoetryQuiz, Profile } from "./pages/index"
import { AuthContextProvider } from "./contexts/auth"

export default function AppContainer(){
  return(
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  )
}

function App() {
  return (
    <div data-theme="light">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/*" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/poetryQuiz/*" element={<PoetryQuiz/>} />
        <Route path="/user/:username" element={<Profile /> } />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
