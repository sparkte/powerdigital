import React from 'react'
import Untitled from '../../images/Untitled-1080-x-750-px-5.png'
export default function novadrives() {
  return (
   <>
   <section className="data-driven-insight data-driven-insight--nova bg-dark">
      <div className="separator">
        <div className="separator__title">
          <h2>
            nova drives real results <span>really fast.</span>
          </h2>
        </div>
        <hr />
      </div>
      <div className="subtitle">
        <h3>Integrate. Analyze. Activate.</h3>
      </div>
      <div className="single-hero">
        <div className="single-hero__text">
          <div className="text">
            <h4>Integrate your data into one secure platform</h4>
            <p>
              Seamlessly connect your first-party and ad platform data into nova
              Cloud, powered by the industry-leading security of Snowflake.
            </p>
          </div>
          <div className="text">
            <h4>Data analysts begin working for you</h4>
            <p>
              Unlock instant insights as over 700 data scientists, marketers,
              and business consultants dive into your data, extracting powerful
              intelligence to drive confident decision-making.
            </p>
          </div>
          <div className="text">
            <h4>Activate a predictable plan with Power</h4>
            <p>
              Your team will deliver key findings, highlight opportunities, and
              provide a precise revenue forecast alongside a strategic marketing
              plan. Next, we execute with precision.
            </p>
          </div>
          <a
            href="https://powerdigitalmarketing.com/work-with-us/"
            className="btn btn-secondary"
          >
            <div className="icon">
              <span>Get a complimentary nova appraisal</span>
              <i className="icon-arrow-up-right" />
            </div>
          </a>
        </div>
        <div className="single-hero__image">
          <img src={Untitled.src} alt="" />
        </div>
      </div>
    </section>
   </>
  )
}
