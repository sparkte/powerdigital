import React from 'react'
import image from '../../images/PE.png'
export default function mainprivate() {
  return (
    <>
    <section className="single-hero bg-light  ">
      <div className="single-hero__text">
        <span className="badge rounded-pill bg-dark">Delivering Alpha</span>
        <div className="title">
          <h1>Private Equity Marketing Services</h1>
        </div>
        <div className="text">
          <p>
            At Power Digital, we are more than just a marketing firm  we are a
            resource partner for diligence and value creation work. Our
            dedicated private equity practice holds a singular mission: to
            support the rapid acceleration of growth while de-risking your
            investments. With nova, our proprietary technology, we empower
            private equity groups and capital providers to expose opportunity
            and pinpoint hidden growth levers that can impact valuations and
            investment outcomes.
          </p>
        </div>
        <a
          href="https://powerdigitalmarketing.com/work-with-us/"
          className="btn btn-secondary"
        >
          <div className="icon">
            <span>Get in Touch</span>
            <i className="icon-arrow-up-right" />
          </div>
        </a>
      </div>
      <div className="single-hero__image">
        <div className="single-badge"></div>
        <img src={image.src} alt="" />
      </div>
    </section>
    </>
  )
}
