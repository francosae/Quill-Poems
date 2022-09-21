import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login, Register, Landing, Home, PoetryQuiz, Profile, Post } from "./pages/index"
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
      <BrowserRouter forceRefresh={true}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/*" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/poetryQuiz/*" element={<PoetryQuiz/>} />
        <Route path="/user/:username" element={<Profile /> } />
        <Route path="/posts/:username/:postid" element={<Post /> } />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
