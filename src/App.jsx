import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Home, Contact, Menu, About } from './components/index.js'

function App() {
  return (
    <>
    <Menu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact/" element={<Contact />} />
      <Route path="/about/" element={<About />} />
    </Routes>
    </>
  )
}

export default App