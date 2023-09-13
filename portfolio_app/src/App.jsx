import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Navbar from './components/navbar'
import ProjectAbout from './components/projectAbout'
import ProjectPortfolio from './components/projectPortfolio'
import Footer from './components/footer'
import ProjectContact from './components/projectContact'
import About from './pages/about'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<About/>}/>
    <Route path="/Portfolio" element={<Portfolio/>}/>
    <Route path="/Contact-Me" element={<Contact/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
