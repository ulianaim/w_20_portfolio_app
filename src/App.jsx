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
    <Route path="/w_20_portfolio_app" element={<About/>}/>
    <Route path="/w_20_portfolio_app/portfolio" element={<Portfolio/>}/>
    <Route path="/w_20_portfolio_app/contact-Me" element={<Contact/>}/>
    <Route path="/w_20_portfolio_app/resume" element={<Resume/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App
