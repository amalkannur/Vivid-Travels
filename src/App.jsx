import React from 'react'
import "./app.scss"
import {BrowserRouter, Routes , Route} from "react-router-dom"
import About from './Pages/aboutPage/About'
import Home from "./Pages/homePage/Home"
import Contact from "./Pages/contactPage/Contact"
import Destinations from './Pages/destinationPage/Destinations'
import Countries from './Pages/countriesPage/Countries'

function  App() {
  return (
   <BrowserRouter > 
    <Routes > 
      <Route index  element ={<Home />} />
      <Route path='/about'  element ={ <About />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path='/countries' element={<Countries />} />
      <Route path= "/contact" element={<Contact />} /> 
    </Routes>
   </BrowserRouter>
  )
}
export default  App
