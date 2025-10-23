import React from 'react'

export default function hero() {
  return (
    <>
    <section>
      <div className="intro-twos-columns">
        <div className="intro-twos-columns__col">
          <div className="intro-twos-columns__title">
            <span className="badge rounded-pill rgb(0,0,0)">INSIGHTS</span>
            <h1>We believe results speak louder than promises.</h1>
          </div>
          <div className="intro-twos-columns__text">
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
        </div>
      </div>
    </section>
    </>
  )
}
