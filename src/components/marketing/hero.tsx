import React from 'react'
import Marketing from '../../images/Marketing-Measurement-Incrementality.png'

export default function hero() {
  return (
    <>
    <section className="single-hero bg-light  ">
      <div className="single-hero__text">
        <span className="badge rounded-pill bg-light">
          Marketing Measurement + Incrementality
        </span>
        <div className="title">
          <h1>
            Stop wasting millions of dollars on{" "}
            <span className="highlighted">ineffective marketing.</span>{" "}
          </h1>
        </div>
        <div className="text">
          <p>
            The purpose of marketing is to make money. Period. If anyone says
            something differently, they’re confused or selling something.
          </p>
          <p>
            So much marketing is ineffective. It contributes no revenue, it
            damages your profitability, and it doesn’t drive incremental growth
            to the business. This is why accurate marketing measurement and
            understanding incrementality is so appealing.
          </p>
        </div>
        <a
          href="https://powerdigitalmarketing.com/work-with-us/"
          className="btn btn-secondary"
        >
          <div className="icon">
            <span>Get in touch</span>
            <i className="icon-arrow-up-right" />
          </div>
        </a>
      </div>
      <div className="single-hero__image">
        <div className="single-badge"></div>
        <img src={Marketing.src} alt="" />
      </div>
    </section>
    </>
  )
}
