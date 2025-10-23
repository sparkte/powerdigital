import React from 'react'
import Header from '../consumer/header' 
import Metalinks from './metalinks'
import Hero from './hero'
import Logocarousal from './logocarousal'
// import Logocarousal2 from './logocarousal2'
import Testominal from './testominal'

export default function workmain() {
  return (
    <>
  <Metalinks/>
  <Header/>
  <main>
    <Hero/>
    <Logocarousal/>
    {/* <Logocarousal2/> */}
    <Testominal/>
    
  </main>
  
</>

  )
}
