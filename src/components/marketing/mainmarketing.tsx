import React from 'react'
import Header from '../consumer/header'
import Metalinks from './metalinks'
import Hero from './hero'
import Multicards from './multicards'
import Testominal from './testominal'
import Carousal from './carousal'
import Duallayout from './Duallayout'
import Digital from './digital'

export default function mainmarketing() {
  return (
    <>
  
  <Metalinks/>
  <Header/>
  <main>
    <Hero/>
    <Multicards/>
    <Testominal/>
    <Carousal/>
    <Duallayout/>
   <Digital/>
  </main>
  
</>

  )
}
