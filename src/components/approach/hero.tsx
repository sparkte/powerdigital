import React from 'react'
import Approach from '../../images/Approach.png'


export default function hero() {
  return (
<>
 <section className="single-hero bg-light  ">
      <div className="single-hero__text">
        <span className="badge rounded-pill bg-dark">How we work</span>
        <div className="title">
          <h2>Going beyond surface-level solutions for next-level growth.</h2>
        </div>
        <div className="text">
          <p>
            Other digital marketing agencies make things unnecessarily
            complicated for their clients. So our data-driven approach is
            refreshingly simple: we care about doing what works, period. Brands
            work with Power when they want to see real growth in their revenue,
            create and activate a high-impact marketing strategy, clean up and
            analyze their data, and plan for a predictably profitable future.
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
        <img src={Approach.src} alt="" />
      </div>
    </section>
</>  )
}
