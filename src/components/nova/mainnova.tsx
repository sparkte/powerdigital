import React from 'react'
import Header from '../consumer/header'
import Metalinks from './metalinks'
// import Footer from '../Home/footer'
import Hero from './hero'
import LogoCarousel from '../product/logocarousal'
import Novadrives from './novadrives'
import Meet from './meet'
import Bglight from './Bglight'
import Imagenova from './imagenova'
import List from './list'
export default function mainnova() {
  return (
    <>
    <>
  <Metalinks/>
  <Header />
  <main>
    <Hero/>
    <LogoCarousel/>
    <Novadrives/>
    <Meet/>
    <Bglight/>
    <Imagenova/>
    <List/>
  </main>
  {/* <Footer /> */}
</>

    </>
  )
}
