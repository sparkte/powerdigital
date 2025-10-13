import React from 'react'
import Jeff from '../../images/Jeff-1.jpg'
export default function playbook() {
  return (
    <>
    <section className="section-testimonial-full bg-light ">
      <article className="bg-secondary">
        <div className="intro-twos-columns">
          <div className="intro-twos-columns__col">
            <div className="intro-twos-columns__title">
              <span className="badge rounded-pill bg-dark">playbook</span>
              <h2>Always playing to win.</h2>
              <div className="person-info">
                <div className="person-photo">
                  <img src={Jeff.src} alt="" srcSet="" />
                </div>
                <div className="person-details">
                  <h3 className="person-name">JEFF MASON</h3>
                  <p className="person-title">CEO @ Power</p>
                </div>
              </div>
            </div>
            <div className="intro-twos-columns__text">
              <p>
                <strong>A team culture is our playbook.</strong>
              </p>
              <p>
                People ignite the vision, services deliver the value, and
                products fulfill the promise. Together, with a play-to-win
                mentality, they transform a company into a powerful force and
                industry leader.
              </p>
              <a
                href="https://powerdigitalmarketing.com/meet-our-leadership-team/"
                className="btn btn-dark"
              >
                <div className="icon">
                  <span>View our leadership team</span>
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
    </>
  )
}
