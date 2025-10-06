import React from 'react'

export default function technology() {
  return (
    <><section className="multi-text-section bg-dark ">
      <div className="multi-text-section__text">
        <div className="title">
          <span className="badge rounded-pill bg-light">
            Proprietary Technology
          </span>
          <h2>The Technology Behind Our Success – nova</h2>
        </div>
        <div className="paragraph">
          <p>
            nova, our proprietary technology, is at the heart of our services.
            This innovative and effective platform has garnered private equity
            funding due to its unparalleled capabilities. With nova, we de-risk
            investments, providing higher confidence levels and better
            investment outcomes.
          </p>
        </div>
      </div>
      {/* Si hay menos de 5 items, se muestran todos en una sola fila */}
      <div className="multi-text-section__items-text">
        <div className="multi-text-section__row">
          <div className="item">
            <div className="text">
              <h3>Precise Marketing Performance Analysis:</h3>
              <p>
                nova leverages advanced data analytics to offer detailed
                insights into marketing effectiveness, identifying which
                strategies yield the best results and where improvements can be
                made.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Data-Driven Valuation Increases:</h3>
              <p>
                By meticulously analyzing market trends and company performance,
                nova pinpoints opportunities to boost company valuation,
                ensuring that our clients can capitalize on growth prospects and
                achieve maximum returns.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Significant Risk Reduction</h3>
              <p>
                nova integrates both first-party and third-party data to make
                informed decisions with greater confidence. This comprehensive
                approach mitigates potential risks, allowing our clients to
                invest with peace of mind and achieve their strategic goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
