import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import About from './pages/about'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'
import Resume from './pages/resume'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<About/>}/>
    <Route path="/Portfolio" element={<Portfolio/>}/>
    <Route path="/Contact-Me" element={<Contact/>}/>
    <Route path="/Resume" element={<Resume/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App
