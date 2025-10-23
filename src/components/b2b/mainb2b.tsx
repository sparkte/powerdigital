import React from 'react'
import Metalinks from './metalinks'
import Header from '../consumer/header'
import Hero from './hero'
import Intelligent from './intelligent'
import Approach from './approach'
import Result from './result'
import Client from './client'
import Industries from './industries'
import Power from './power'
import Solution from './solution'
import Learnmore from './learnmore'
import Insights from './insights'
// import Footer from '../Home/footer'
export default function mainb2b() {
  return (
    <>
  <Metalinks/>
  {/* Primer - Website Tracking Script */}
  {/* END OF - Primer - Website Tracking Script */}
  <Header />
  
  <main>
    <Hero/>
    <Intelligent/>
    <Approach/>
    <Result/>
  <Client/>
    <Industries/>
    <Power/>
    <Solution/>
   <Learnmore/>
    <Insights/>
  </main>
  {/* <Footer/> */}
</>

  )
}
