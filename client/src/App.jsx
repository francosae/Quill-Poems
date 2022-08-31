import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login, Register, Landing, Home} from "./pages/index"
// import { Footer, Navbar} from "./components/index"

function App() {
  return (
    <div data-theme="light">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
