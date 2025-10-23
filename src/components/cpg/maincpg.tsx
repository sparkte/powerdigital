import React from 'react'
import Header from '../consumer/header'
// import Footer from '../Home/footer'
import Metalinks from './metalinks'
import Hero from './hero'
import Logos from './logos'
import Built from './built'
import Logocarousal from '../product/logocarousal'
import Approach from './approach'
import Testominaimage from './testominalimage'
import Power from './power'
import Result from './result'
import Insight from '../consumer/insights'
import Insight2 from './insight2'
export default function maincpg() {
  return (
    <>
    <>
 <Metalinks/>
  <Header/>
  <main>
   <Hero/>
   <Logos/>
    <Built/>
   <Logocarousal/>
    <Approach/>
    <Testominaimage/>
   <Power/>
    <Result/>
    <Insight/>
   <Insight2/>
  </main>
 {/* <Footer/> */}
</>

    </>
  )
}
