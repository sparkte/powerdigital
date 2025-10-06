import React from 'react'
import cosumerproduct from "../../images/Consumer-Product.png";
export default function hero() {
  return (
    <>
    <section className="single-hero bg-light  ">
      <div className="single-hero__text">
        <span className="badge rounded-pill bg-dark">
          Consumer Product Services
        </span>
        <div className="title">
          <h1>B2C Digital Marketing Agency for leading consumer brands.</h1>
        </div>
        <div className="text">
          <p>
            <span style={{ fontWeight: 400 }}>
              Discover how our growth marketing expertise and consumer-focused
              data intelligence deliver the absolute right message to the right
              audience at the perfect moment. With unmatched insights into
              consumer behavior, we help you scale smarter, launch faster, and
              win customer loyalty. Let’s turn your big ideas into even bigger
              market share.
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
        <img src={cosumerproduct.src} alt="" />
      </div>
    </section>
    </>
  )
}
