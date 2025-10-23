import React from 'react'
import power from '../../images/power-placeholder.png';

export default function hero() {
  return (
    <>
    <section className="single-hero bg-light  ">
      <div className="single-hero__text">
        <span className="badge rounded-pill ">Downloadables</span>
        <div className="title">
          <h2>Download What Drives Growth.</h2>
        </div>
        <div className="text">
          <p>
            Our resources aren’t about trends, they’re about outcomes. From
            market-defining reports to actionable playbooks, each download
            delivers the clarity you need to outpace the competition. Get the
            insights that turn uncertainty into undeniable growth and watch what
            happens next.
          </p>
        </div>
        <a href="/work-with-us/" className="btn btn-secondary">
          <div className="icon">
            <span>Request a consultation</span>
            <i className="icon-arrow-up-right" />
          </div>
        </a>
      </div>
      <div className="single-hero__image">
        <div className="single-badge"></div>
        <img src={power.src} alt="" />
      </div>
    </section>
    
    </>
  )
}
