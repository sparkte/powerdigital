import React from 'react'

export default function built() {
  return (
    <>
    <section className="multi-text-section bg-light ">
      <div className="multi-text-section__text">
        <div className="title">
          <span className="badge rounded-pill bg-light">
            Built for CPG. Engineered for IROAS.
          </span>
          <h2> A Smarter Growth Engine, Tuned for Your P&amp;L</h2>
        </div>
        <div className="paragraph">
          <p>
            <span style={{ fontWeight: 400 }}>
              You don’t just need more data, you need data that drives action.
              With 300M+ data points and proprietary tech (hi, nova), we map
              your best opportunities across DTC, in-store, and retail media.
              Then we execute with precision from the scroll to the shelf.
            </span>
          </p>
          <p>
            <span style={{ fontWeight: 400 }}>
              At the end of the day, we’re not just here to drive sales. We’re
              here to make them sustainable, measurable, and margin-positive.
            </span>
          </p>
        </div>
      </div>
      {/* Si hay menos de 5 items, se muestran todos en una sola fila */}
      <div className="multi-text-section__items-text">
        <div className="multi-text-section__row">
          <div className="item">
            <div className="text">
              <h3>Customer Insight &amp; Messaging</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  We help you understand your customers, and then speak to them
                  like you actually know them. Our insights fuel messaging that
                  clicks online and moves units in-store.
                </span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Omnichannel Strategy &amp; Execution </h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  No more siloed DTC vs. retail vs. Amazon. We connect the dots
                  with integrated media plans that drive total revenue and
                  measurable lift.
                </span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Measurement &amp; Incrementality</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  What’s working? Where’s the impact? We bring clarity to your
                  full funnel using incrementality testing and MMM, so you can
                  scale the channels that truly deliver.
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
