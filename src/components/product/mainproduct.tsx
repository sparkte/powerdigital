import React from 'react'
import Approach from './approach'
// import Footer from '../Home/footer'
import Header from '../consumer/header'
import Hero from './hero'
import Intelligent from './intelligent'
import Insight2 from './insight2'
import Insights from './insights'
import LogoCarousel from './logocarousal'
import Power from './power'
import Result from './result'
import Solution from './solution'
import Testominal from './testominal'
import Metalinks from './metalinks'
export default function mainproduct() {
  return (
   <>
  <Metalinks/>
  <Header/>
  <main>
    <Hero/>
    <Intelligent/>
    <Approach/>
    <LogoCarousel/>
    <Result/>
    <Power/>
   <Testominal/>
   <Insights/>
    <Solution/>
    
   <Insight2/>
  </main>
  {/* <Footer/> */}
</>

  )
}
