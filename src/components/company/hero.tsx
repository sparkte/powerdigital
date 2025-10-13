import React from 'react'
import imag1 from '../../images/DSC00591-scaled.jpg'
export default function hero() {
  return (
    <>
    <section className="single-hero bg-light  ">
      <div className="single-hero__text">
        <span className="badge rounded-pill bg-dark">WHO WE ARE</span>
        <div className="title">
          <h1>We are a strategic growth company with undeniable conviction.</h1>
        </div>
        <div className="text">
          <p>
            If you’re looking for a digital marketing firm full of “yes men,”
            well, you’ve come to the wrong place. Because we take pride in being
            partners, consultants and strategists who are unafraid to pursue
            what it takes to grow our clients’ businesses — even if, at first,
            it takes some convincing. The results have a way of taking care of
            the rest.
          </p>
        </div>
      </div>
      <div className="single-hero__image">
        <div className="single-badge"></div>
        <img src={imag1.src} alt="" />
      </div>
    </section>
    </>
  )
}
