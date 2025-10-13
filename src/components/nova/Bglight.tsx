import React from 'react'
import PDMWebsite from '../../images/PDM-Website-2025-Layer-1-1.png'
export default function Bglight() {
  return (
    <>
    <section className="bg-light">
      <div className="intro-twos-columns ">
        <div className="intro-twos-columns__col">
          <div className="intro-twos-columns__title">
            <span className="badge rounded-pill bg-light" />
            <h2 />
          </div>
          <div className="intro-twos-columns__text">
            <div className="group-description"></div>
          </div>
        </div>
      </div>
      <div className="product-feature-showcase">
        <div className="product-feature-showcase__content">
          <div className="product-feature-showcase__firts-card">
            <div className="title">
              <img src={PDMWebsite.src} alt="" />
              <h3>Purpose-built applications leveraging 300M+ data points</h3>
            </div>
            <a
              href="https://powerdigitalmarketing.com/work-with-us/"
              className="btn btn-primary"
            >
              <div className="icon">
                <span>Learn more about nova</span>
                <i className="icon-arrow-up-right" />
              </div>
            </a>
          </div>
          <div className="product-feature-showcase__list">
            <div className="product-feature-showcase__card ">
              <span className="number">1</span>
              <div className="text">
                <div className="title">
                  <h2>Customer Cohorts</h2>
                </div>
                <div className="paragraph">
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      With nova Customer Cohorts, businesses gain a deep
                      understanding of customer behavior and segmentation. This
                      application identifies high-value customer groups, such as
                      those with high repeat purchase rate, Lifetime Value
                      (LTV), or retention rates. By leveraging these insights,
                      businesses can craft targeted strategies that drive
                      greater revenue and profitability.
                    </span>
                  </p>
                </div>
              </div>
              <a
                href="https://powerdigitalmarketing.com/nova-collab/"
                className="btn btn--round btn-sm btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
            <div className="product-feature-showcase__card ">
              <span className="number">2</span>
              <div className="text">
                <div className="title">
                  <h2>Customer Insights</h2>
                </div>
                <div className="paragraph">
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      nova Customer Insights delivers a complete understanding
                      of your audience, leveraging data to build detailed
                      personas and uncover trends. By identifying customer
                      preferences, businesses can refine their marketing
                      strategies and maximize engagement.
                    </span>
                  </p>
                </div>
              </div>
              <a
                href="https://powerdigitalmarketing.com/nova-intelligence/customer-insights/"
                className="btn btn--round btn-sm btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
            <div className="product-feature-showcase__card ">
              <span className="number">3</span>
              <div className="text">
                <div className="title">
                  <h2>Creative Affinity</h2>
                </div>
                <div className="paragraph">
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      nova Creative Affinity revolutionizes performance
                      marketing by linking advertising creatives to customer
                      Lifetime Value (LTV). This application helps businesses
                      optimize ad content and allocate budgets effectively by
                      identifying high-performing creatives.
                    </span>
                  </p>
                </div>
              </div>
              <a
                href="https://powerdigitalmarketing.com/nova-intelligence/creative-affinity/"
                className="btn btn--round btn-sm btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
            <div className="product-feature-showcase__card ">
              <span className="number">4</span>
              <div className="text">
                <div className="title">
                  <h2>Forecasts</h2>
                </div>
                <div className="paragraph">
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      nova Forecasts empowers businesses with predictive
                      analytics, enabling data-driven decision-making. The
                      application models market demand, identifies growth
                      opportunities, and supports resource allocation.
                    </span>
                  </p>
                </div>
              </div>
              <a
                href="https://powerdigitalmarketing.com/nova-intelligence/forecasts/"
                className="btn btn--round btn-sm btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
            <div className="product-feature-showcase__card is-odd">
              <span className="number">5</span>
              <div className="text">
                <div className="title">
                  <h2>nova Insights AI</h2>
                </div>
                <div className="paragraph">
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      nova Insights AI combines 20+ marketing reports, AI-driven
                      analytics, and human expertise to deliver a comprehensive
                      data platform. Businesses can interact with their
                      marketing data, ask questions, and make agile decisions
                      based on clear insights.
                    </span>
                  </p>
                </div>
              </div>
              <a
                href="https://powerdigitalmarketing.com/nova-intelligence/insights-ai/"
                className="btn btn--round btn-sm btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
