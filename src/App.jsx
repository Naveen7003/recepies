import React from 'react'
import Nav from './Components/Nav'
import {Routes,Route} from "react-router-dom"
import Home from './Components/Home'
import Recepie from "./Components/Recepie"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Create from './Components/Create'
import Indigrients from './Components/Indigrients'
const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recepie" element={<Recepie />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/create" element={<Create />} />
            <Route path="/samagri" element={<Indigrients />} />



        </Routes>
    </div>
  )
}

export default App