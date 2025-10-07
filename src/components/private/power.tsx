import React from 'react'

export default function power() {
  return (
   <>
   <section className="multi-text-section bg-light ">
      <div className="multi-text-section__text">
        <div className="title">
          <span className="badge rounded-pill bg-dark">Why Power?</span>
          <h2>We Optimize Your Investments with Data-Driven Insights</h2>
        </div>
        <div className="paragraph">
          <p>
            Our private equity practice is tailored specifically for the unique
            needs of PE firms. We combine our deep industry knowledge with
            cutting-edge technology to deliver unparalleled value and insights,
            ensuring that every marketing dollar is optimized for maximum
            return.
          </p>
        </div>
      </div>
      {/* Si hay menos de 5 items, se muestran todos en una sola fila */}
      <div className="multi-text-section__items-text">
        <div className="multi-text-section__row">
          <div className="item">
            <div className="text">
              <h3>Data</h3>
              <p>
                At Power Digital, we go beyond what others offer. Our private
                equity practice is not a single-point solution but a
                comprehensive service that integrates multiple facets of the
                marketing ecosystem. This holistic approach allows us to deliver
                unparalleled value and strategic recommendations. We provide the
                deep insights and extensive analysis necessary to drive
                substantial growth and maximize investment returns, making us
                the clear choice for private equity firms seeking to optimize
                their portfolios.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Growth</h3>
              <p>
                Marketing and advertising have long been misunderstood as mere
                costs on the P&amp;L statement. We see them as powerful growth
                levers. Private equity groups often cut these budgets, viewing
                them as expendable cost centers. Our mission is to change this
                perspective. By optimizing marketing and advertising, we drive
                substantial growth. We created this department to lead the way
                in proving their potential as massive growth drivers for PE
                groups.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Value</h3>
              <p>
                Interested in a free appraisal for one of your portfolio
                companies? Contact us today and discover how Power Digitals
                expertise and cutting-edge technology can deliver unparalleled
                value to your investments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
   </>
  )
}
