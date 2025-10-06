import React from 'react'

export default function power() {
  return (
    <>
    <section className="multi-text-section bg-light ">
      <div className="multi-text-section__text">
        <div className="title">
          <span className="badge rounded-pill bg-dark">Why Power?</span>
          <h2>
            Accelerate consumer brand growth with holistic, data-fueled
            strategies designed to win.
          </h2>
        </div>
        <div className="paragraph">
          <p>
            <span style={{ fontWeight: 400 }}>
              In the competitive world of consumer products, brands need more
              than great products—they need great strategies. At Power Digital,
              we craft campaigns that deliver measurable results, enhance your
              brand’s visibility, and grow your customer base. From driving
              awareness to increasing retention, we’re your partner for
              sustained growth and undeniable IROAS.
            </span>
          </p>
        </div>
      </div>
      <div className="multi-text-section__items-text">
        {/* Primera fila con los primeros 3 items */}
        <div className="multi-text-section__row">
          <div className="item">
            <div className="text">
              <h3>Insights That Drive Action</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  We transform consumer data into actionable strategies,
                  ensuring your brand resonates with the right audience at the
                  right time.
                </span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Creative Meets Performance</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  Our campaigns pair beautiful creative with tactical
                  excellence, so every dollar spent contributes directly to your
                  goals.
                </span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Scalable Solutions for Growth</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  Whether you’re launching a new product or scaling a legacy
                  brand, our strategies are built to evolve alongside your
                  business.
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* Segunda fila con los items restantes */}
        <div className="multi-text-section__row">
          <div className="item">
            <div className="text">
              <h3>Cross-Channel Synergy</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  We align your efforts across platforms to create a seamless,
                  engaging experience for your customers.
                </span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Results You Can Measure</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  We don’t just promise IROAS—we deliver it. Every strategy is
                  built to provide clear, measurable results that propel your
                  brand forward.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
