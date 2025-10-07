import React from 'react'
import FadeUp from './FadeUp';

export default function casestudies() {
  return (
    <>
    <section className="case-studies bg-dark">
      <div className="separator">
        <FadeUp>
        <div className="separator__title">
          <h2>
            <span className="heading-xxl fade-up">Case</span>
            <span className="heading-xxl fade-up">Studies</span>
          </h2>
        </div>
        </FadeUp>
        <hr />
        <div className="separator__text">
          <span>POWER DIGITAL</span>
          <div>
            <span className="separator__number">03</span>
            <span>OUR CLIENTS</span>
          </div>
        </div>
      </div>
      <div className="case-studies__content">
        <div className="case-studies__filters">
          <a href="#" className="btn btn-sm btn-outline-dark block">
            Case studies
          </a>
          <a href="/case-studies" className="btn btn-sm btn-secondary">
            View all
          </a>
        </div>
        <ul className="case-studies__list">
          <li className="case-studies__item position-relative">
            <div className="case-studies__item-number">
              <span>01</span>
            </div>
            <div className="case-studies__item-content">
              <h3 className="title">Alliant University</h3>
              <p className="industry">Consumer Service</p>
              <p className="service">
                From Insights to Impact: Power Digital’s Approach Amplifies
                Higher Ed Applicant Pipeline{" "}
              </p>
            </div>
            <div className="case-studies__item-arrow">
              <a
                href="https://powerdigitalmarketing.com/case-studies/alliant-university/"
                className="btn btn--round btn-sm btn-outline-dark stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </li>
          <li className="case-studies__item position-relative">
            <div className="case-studies__item-number">
              <span>02</span>
            </div>
            <div className="case-studies__item-content">
              <h3 className="title">Vix</h3>
              <p className="industry">Consumer Product</p>
              <p className="service">
                Explore how our strategic approach catalyzed profitable,
                sustainable growth for ViX Paula Hermanny.
              </p>
            </div>
            <div className="case-studies__item-arrow">
              <a
                href="https://powerdigitalmarketing.com/case-studies/vix/"
                className="btn btn--round btn-sm btn-outline-dark stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>{" "}
    </>
  )
}
