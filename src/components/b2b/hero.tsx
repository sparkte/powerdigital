import React from 'react'
import B2B from '../../images/B2B.png'
export default function hero() {
  return (
    <section className="single-hero bg-light  ">
      <div className="single-hero__text">
        <span className="badge rounded-pill bg-dark">Grow Bigger, Faster</span>
        <div className="title">
          <h1>B2B Digital Marketing Agency</h1>
        </div>
        <div className="text">
          <p>
            <span style={{ fontWeight: 400 }}>
              Experience what happens when you combine growth marketing with
              strategic consulting &amp; data excellence: the absolute right
              message, to the right people in the buying committee, at all the
              right times. Take advantage of the democratization of best
              practices and technology in B2B marketing, coupled with our deep
              expertise across multiple data and{" "}
            </span>
            <span style={{ fontWeight: 400 }}>digital </span>
            <span style={{ fontWeight: 400 }}>marketing platforms.&nbsp; </span>
          </p>
        </div>
        <a
          href="https://powerdigitalmarketing.com/work-with-us/"
          className="btn btn-secondary"
        >
          <div className="icon">
            <span>Request a consultation</span>
            <i className="icon-arrow-up-right" />
          </div>
        </a>
      </div>
      <div className="single-hero__image">
        <div className="single-badge"></div>
        <img src={B2B.src} alt="" />
      </div>
    </section>
  )
}
