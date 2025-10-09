import React from 'react'
import untitled from '../../images/Untitled-1080-x-750-px-4.png'
export default function hero() {
  return (
   <>
   <section className="single-hero bg-light  ">
      <div className="single-hero__text">
        <span className="badge rounded-pill bg-dark">NOVA</span>
        <div className="title">
          <h1>Nothing beats certainty.</h1>
        </div>
        <div className="text">
          <p>
            Effective marketing doesn’t exist without data you can trust fueling
            your strategy. That’s why Power Digital developed nova. A
            proprietary platform that analyzes businesses through first-party
            data, enabling marketing teams to be data-driven, garner
            one-of-a-kind insights, eliminate ad spend waste and maximize
            profitability.
          </p>
        </div>
      </div>
      <div className="single-hero__image">
        <div className="single-badge"></div>
        <img src={untitled.src} alt="" />
      </div>
    </section>
   </>
  )
}
