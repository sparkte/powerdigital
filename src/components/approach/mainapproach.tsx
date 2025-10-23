import React from 'react'
// import Footer from '../Home/footer'
import Header from '../consumer/header'
import Metalinks from './metalinks'
import HERO from './hero'
import Service from './service'
import Industries from './industries'
import Services from './services'

export default function mainapproach() {
  return (
<>
  <Metalinks/>
  <Header/>
  <main>
   <HERO/>
    <Service/>
    <Industries/>
    <Services/>
  </main>
  {/* <Footer/> */}
</>
  )
}
