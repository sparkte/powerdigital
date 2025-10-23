import React from 'react'
import Header from '../../components/consumer/header';  
import Metalinks from './metalinks';
import Hero from './hero';
import Blogs from './blogs';

export default function resources() {
  return (
    <>
  <Metalinks/>
  
  <Header />
  <main>
    <Hero/>
    <Blogs/>
  </main>
  
</>

  )
}
