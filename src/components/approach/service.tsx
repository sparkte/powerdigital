import React from 'react'

export default function service() {
  return (
    <>
    <section className="text-banner bg-light">
      <h3>
        Transparency is <span>our currency.</span>
      </h3>
    </section>
    <section className="service-category  bg-light">
      <ul className="service-category__list">
        <li className="service-category__item position-relative">
          <div className="service-category__item-number">
            <span>01</span>
          </div>
          <div className="service-category__item-content">
            <div className="title">
              <h3>Consumer Product</h3>
            </div>
            <div className="description">
              <p>
                We harness next-gen tech, sophisticated analytics, and deep
                consumer insights to deliver scalable growth and a formidable
                marketing edge for brands. Our team takes pride in helping B2C
                clients realize ROI faster than they ever thought possible.
              </p>
            </div>
          </div>
          <div className="service-category__item-arrow">
            <a
              href="https://powerdigitalmarketing.com/vertical/consumer-product-b2c/"
              className="btn btn--round btn-sm btn-outline-dark stretched-link"
              style={{}}
            >
              <div className="icon">
                <i className="icon-arrow-up-right" />
              </div>
            </a>
          </div>
        </li>
        <li className="service-category__item position-relative">
          <div className="service-category__item-number">
            <span>02</span>
          </div>
          <div className="service-category__item-content">
            <div className="title">
              <h3>B2B</h3>
            </div>
            <div className="description">
              <p>
                From lead gen to conversion, our B2B team specializes in
                building multi-channel digital strategies that will be optimized
                at every stage of the buyer’s journey. Our full-funnel,
                data-backed approach eliminates best-guesses from the equation.
              </p>
            </div>
          </div>
          <div className="service-category__item-arrow">
            <a
              href="https://powerdigitalmarketing.com/vertical/b2b-marketing/"
              className="btn btn--round btn-sm btn-outline-dark stretched-link"
              style={{}}
            >
              <div className="icon">
                <i className="icon-arrow-up-right" />
              </div>
            </a>
          </div>
        </li>
        <li className="service-category__item position-relative">
          <div className="service-category__item-number">
            <span>03</span>
          </div>
          <div className="service-category__item-content">
            <div className="title">
              <h3>Consumer Services</h3>
            </div>
            <div className="description">
              <p>
                We have unmatched expertise crafting bespoke digital marketing
                strategies across various service sectors — from education to
                health and wellness — and a track record of transforming leads
                into loyal customers that drive incremental revenue.
              </p>
            </div>
          </div>
          <div className="service-category__item-arrow">
            <a
              href="https://powerdigitalmarketing.com/vertical/consumer-services/"
              className="btn btn--round btn-sm btn-outline-dark stretched-link"
              style={{}}
            >
              <div className="icon">
                <i className="icon-arrow-up-right" />
              </div>
            </a>
          </div>
        </li>
        <li className="service-category__item position-relative">
          <div className="service-category__item-number">
            <span>04</span>
          </div>
          <div className="service-category__item-content">
            <div className="title">
              <h3>Private Equity</h3>
            </div>
            <div className="description">
              <p>
                Power provides digital marketing due diligence for private
                equity, venture capital, and growth investors. Utilizing our
                nova platform, we conduct deep marketing assessments that aid in
                identifying valuable opportunities and optimizing investment
                decisions.
              </p>
            </div>
          </div>
          <div className="service-category__item-arrow">
            <a
              href="https://powerdigitalmarketing.com/vertical/private-equity/"
              className="btn btn--round btn-sm btn-outline-dark stretched-link"
              style={{}}
            >
              <div className="icon">
                <i className="icon-arrow-up-right" />
              </div>
            </a>
          </div>
        </li>
      </ul>
    </section>
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n  .service-category__item:hover {\n    background-color: rgba(43, 42, 41, 1);\n  }\n"
      }}
    />
    </>
  )
}
