import React from 'react'
import image1 from '../../images/flat-mission-statement.png'
import lines from '../../images/lines.svg'
import mountain from '../../images/mountain.svg'
import graphs from '../../images/graphs.svg'
export default function Mission() {
  return (
    <>
      <section className="mission-statement bg-light">
        <div className="mission-statement__content bg-secondary">
          <img
            width={881}
            height={627}
            className="mission-statement__img"
            src={image1.src}
            alt=""
          />

          <div className="d-flex flex-column">
            <div className="mission-statement__left">
              <span className="badge rounded-pill bg-dark">about us</span>
              <div className="mission-statement__title">
                <h2>What drives us...</h2>
              </div>
            </div>
          </div>

          <div>
            <div className="mission-statement__cards">
              <div className="rounded-4 mission-statement__card-item mission-statement__card-item--1 bg-light">
                <div className="mission-statement__text">
                  <p>
                    To power the <strong>relentless pursuit of growth</strong> and
                    redefine what’s possible
                  </p>
                </div>

                <a href="/case-studies" className="mission-statement__btn btn bg-secondary">
                  <div className="icon">
                    <span>Case studies</span>
                    <i className="icon-arrow-up-right" />
                  </div>
                </a>

                <img className="mission-statement__card-img" src={graphs.src} alt="" />
              </div>

              <div className="rounded-4 mission-statement__card-item mission-statement__card-item--2 bg-dark">
                <div className="mission-statement__text">
                  <p>
                    through a team of <span style={{ color: '#afaaf9' }}><strong>growth-obsessed experts</strong></span> who demand innovation &amp; results. Driven by integrity, autonomy, and grit.
                  </p>
                </div>

                <a
                  href="https://powerdigitalmarketing.com/meet-our-leadership-team/"
                  className="mission-statement__btn btn bg-secondary"
                >
                  <div className="icon">
                    <span>Meet the Team</span>
                    <i className="icon-arrow-up-right" />
                  </div>
                </a>

                <img className="mission-statement__card-img" src={mountain.src} alt="" />
              </div>

              <div className="rounded-4 mission-statement__card-item mission-statement__card-item--3 bg-primary">
                <div className="mission-statement__text">
                  <p>
                    We provide end to end commerce growth through{' '}
                    <span style={{ color: '#ffffff' }}>
                      <strong>strategy, marketing and data.</strong>
                    </span>
                  </p>
                </div>

                <a href="/services/" className="mission-statement__btn btn bg-light">
                  <div className="icon">
                    <span>Our Services</span>
                    <i className="icon-arrow-up-right" />
                  </div>
                </a>

                <img className="mission-statement__card-img" src={lines.src} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
