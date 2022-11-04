import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'

const App = () => {
  return (
    <Router>

      <div className='container'>
        <Navbar />

        <div className="main">
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>

      </div>
    </Router>
  )
}

export default App
