import React from 'react'

export default function approach() {
  return (
    <>
    <section className="multi-text-section bg-dark ">
      <div className="multi-text-section__text">
        <div className="title">
          <span className="badge rounded-pill bg-dark">Our Approach</span>
          <h2>Speaking Your Language: Delivering Alpha</h2>
        </div>
        <div className="paragraph">
          <p>
            We understand the language of private equity. Our expertise lies in
            delivering Alpha through meticulous thesis validation, ongoing value
            creation, and strategic exit readiness planning.
          </p>
        </div>
      </div>
      <div className="multi-text-section__items-text">
        {/* Primera fila con los primeros 2 items */}
        <div className="multi-text-section__row">
          <div className="item">
            <div className="text">
              <h3>Diligence</h3>
              <p>
                We apply nova to all marketing channels, pinpointing and
                exposing opportunities to increase valuation. Based on our
                findings, we identify marketing opportunities to boost
                valuation, expose hidden growth potential, and support your
                investment decisions with accurate data.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Thesis Validation</h3>
              <p>
                Ensure your investment hypothesis is accurate and achievable. We
                validate the likelihood of achieving projected outcomes and
                identify potential risks in marketing performance.
              </p>
            </div>
          </div>
        </div>
        {/* Segunda fila con los últimos 2 items */}
        <div className="multi-text-section__row">
          <div className="item">
            <div className="text">
              <h3>Value Creation</h3>
              <p>
                Our continuous activation work ensures that marketing milestones
                and strategic KPIs are met, driving consistent growth and
                increasing valuation.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Exit Readiness</h3>
              <p>
                We help you map out marketing-driven growth over the investment
                horizon, preparing your portfolio companies for a profitable
                exit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
