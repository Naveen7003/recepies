import React from 'react'
import Nav from './Components/Nav'
import {Routes,Route} from "react-router-dom"
import Home from './Components/Home'
import Recepie from "./Components/Recepie"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Create from './Components/Create'
import Indigrients from './Components/Indigrients'
import Update from './Components/Update'
const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe" element={<Recepie />} />
            <Route path="/update-recipe" element={<Update />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/create-recipe" element={<Create />} />
            <Route path="/recipe/1" element={<Indigrients />} />



        </Routes>
    </div>
  )
}

export default App