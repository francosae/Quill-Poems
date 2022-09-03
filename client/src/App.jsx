import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login, Register, Landing, Home, PoetryQuiz} from "./pages/index"
// import { Footer, Navbar} from "./components/index"

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
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
