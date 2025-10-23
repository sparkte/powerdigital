import React from 'react'
// import Footer from '../Home/footer'
import Header from '../consumer/header'
import Metalinks from './metalinks'
import Hero from './hero'
import Section2 from './section2'
import Mission from './mission'
import Culyure from './culyure'
import Plybook from './playbook'
import Insight from './insight'
import Section5 from './section5'

export default function company() {
  return (
    <>
      <>
        <Metalinks />
        <Header />
        <main > {/* changed: apply module class to page root */}
          <Hero />
          <Section2 />
          <Mission />
          <Culyure />
          <Section5 />
          <Plybook />
          <Insight />
        </main>
        {/* <Footer /> */}
      </>
    </>
  )
}
