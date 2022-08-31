import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login, Register, Landing } from "./pages/index"
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
