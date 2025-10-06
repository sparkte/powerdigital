import React from 'react'

export default function intelligent() {
  return (
    <>
    <section className="multi-text-section bg-dark ">
      <div className="multi-text-section__text">
        <div className="title">
          <span className="badge rounded-pill bg-dark">
            Intelligent Growth, Elevated
          </span>
          <h2>Your IROAS Growth Engine. Powered by Data. Driven by Results.</h2>
        </div>
        <div className="paragraph">
          <p>
            <span style={{ fontWeight: 400 }}>
              With access to over 300M+ consumer data points and partnerships
              with the top platforms in eCommerce, social, and digital
              advertising, we deliver data-fueled strategies that outperform the
              market. Combine our expertise in creative, messaging, and customer
              journey optimization to achieve scalable, repeatable growth.
              Dominate the shelf and the scroll—we’ve got you covered.
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
                  We tap into the hearts and minds of your consumers, ensuring
                  every message strikes a chord. By transforming data into
                  stories, we create campaigns that resonate and convert,
                  turning casual shoppers into loyal advocates.
                </span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Full-Funnel Strategy</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  From awareness to repeat purchases, we craft seamless
                  strategies that guide consumers through their journey. Whether
                  launching a new product or scaling an established brand, we
                  fuel every step of your growth with precision.
                </span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Performance at Scale</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  We optimize every dollar spent by fine-tuning your digital
                  channels, streamlining acquisition costs, and increasing
                  customer lifetime value. Efficiency isn’t just a goal; it’s
                  our guarantee.
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
