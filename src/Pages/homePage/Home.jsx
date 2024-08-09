import React from 'react'
import Header from '../../Components/Header' 
import "./Home.scss"
import Hero from "./homeChilds/Hero"
import Booking from './homeChilds/Booking'
import Tours from './homeChilds/Tours'
import Services from './homeChilds/Services'
import Review from './homeChilds/Review'



function Home() {
  return (
    <div>
      <Header />      
      <Hero />
      <Booking />
      <Tours />
      <Services />
      <Review />
    </div>
  )
}

export default Home
