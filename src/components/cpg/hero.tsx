import React from 'react'
import cpg from '../../images/CPG.png';
export default function hero() {
  return (
    <>
     <section className="single-hero bg-light  ">
      <div className="single-hero__text">
        <span className="badge rounded-pill bg-dark">
          Consumer Product Services
        </span>
        <div className="title">
          <h1>Where CPG Brands Go to Grow Smarter</h1>
        </div>
        <div className="text">
          <p>
            <span style={{ fontWeight: 400 }}>
              For modern CPG brands, the old growth playbook doesn’t cut it.
              Fragmented sales channels, shifting consumer behavior, and
              mounting retail pressure mean performance marketing needs to do
              more than drive clicks, it needs to drive total business outcomes.
            </span>
          </p>
          <p>
            <span style={{ fontWeight: 400 }}>
              That’s where we come in. Power Digital helps CPG brands unify
              data, align retail and DTC strategies, and scale what actually
              works. Whether you’re building retail velocity or making every
              marketing dollar count, we plug into your business like an
              extension of your team, with the strategy and tools to unlock your
              next chapter of growth.
            </span>
          </p>
        </div>
        <a
          href="https://powerdigitalmarketing.com/work-with-us/"
          className="btn btn-secondary"
        >
          <div className="icon">
            <span>Request a Consultation</span>
            <i className="icon-arrow-up-right" />
          </div>
        </a>
      </div>
      <div className="single-hero__image">
        <div className="single-badge"></div>
        <img src={cpg.src} alt="" />
      </div>
    </section>{" "}
    </>
  )
}
