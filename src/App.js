import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'


import Home from './Pages/Home/Home'

const App = () => {
  return (
    <Router>

      <Navbar />


      {/* <Routes>
        <Route path='/' element={<Home />} />
     </Routes>*/}



    </Router>
  )
}

export default App
