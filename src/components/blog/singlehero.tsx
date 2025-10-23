import React from 'react'
import powerplaceholder from '../../images/power-placeholder.png';
export default function singlehero() {
  return (
    <>
    <section className="single-hero rgb(255, 242, 242)  ">
      <div className="single-hero__text">
        <span className="badge rounded-pill rgb(0,0,0)">INSIGHTS</span>
        <div className="title">
          <h1>The Power Blog: A sneak peek of the future.</h1>
        </div>
        <div className="text">
          <div className="single-hero__text">
            <div className="text">
              <p>
                Discover insight-rich posts about the latest trends in digital
                marketing and consumer insights for brands. The Power Blog is
                jam-packed with the knowledge and foresight you need right now
                for what’s coming next.
              </p>
            </div>
          </div>
          <div className="single-hero__image">
            <div className="single-badge" />
          </div>
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
        <img src={powerplaceholder.src} alt="" />
      </div>
    </section>
    </>
  )
}
