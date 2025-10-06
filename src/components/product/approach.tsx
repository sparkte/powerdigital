import React from 'react'

export default function approach() {
  return (
    <>
    <section className="multi-text-section bg-light ">
      <div className="multi-text-section__text">
        <div className="title">
          <span className="badge rounded-pill bg-light">Our Approach</span>
          <h2>
            Here’s how we help consumer brands thrive in an ever-evolving
            market.
          </h2>
        </div>
        <div className="paragraph">
          <p>
            <span style={{ fontWeight: 400 }}>
              At Power Digital, we understand that consumer products are about
              more than just transactions—they’re about building trust, sparking
              desire, and creating experiences that keep customers coming back.
              Whether navigating crowded markets, optimizing omnichannel
              strategies, or crafting hyper-personalized content, we ensure your
              brand stands out where it matters most. Here’s how we do it:
            </span>
          </p>
        </div>
      </div>
      <div className="multi-text-section__items-text">
        {/* Primera fila con los primeros 3 items */}
        <div className="multi-text-section__row">
          <div className="item">
            <div className="text">
              <h3>Data-Driven Consumer Strategy</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  &nbsp;We leverage deep consumer insights to unlock untapped
                  opportunities. By analyzing behavioral patterns and market
                  trends, we create strategies that deliver the right message at
                  the right time. From product discovery to post-purchase
                  engagement, our approach ensures every interaction is
                  impactful.
                </span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Aligning Creative and Channel Strategy</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  Your message is only as strong as its delivery. We align
                  creative storytelling with targeted media strategies, ensuring
                  your campaigns reach your audience in the most effective ways.
                  By pairing data-driven insights with human-first creativity,
                  we craft scroll-stopping content that drives action across
                  social, eCommerce, and more.
                </span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Accelerating Decisions with Actionable Data</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  In the fast-moving world of consumer products, speed matters.
                  Our data-driven insights empower your team to make confident,
                  informed decisions—whether it’s choosing a new market to enter
                  or optimizing your ad spend. Faster decisions lead to faster
                  growth.
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* Segunda fila con los items restantes */}
        <div className="multi-text-section__row">
          <div className="item">
            <div className="text">
              <h3>Mastering Customer Retention</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  Acquisition gets you customers; retention builds your brand.
                  We design loyalty programs, personalized touchpoints, and
                  retention strategies that increase lifetime value. By
                  combining automated insights with human intuition, we create
                  real relationships that keep your customers coming back.
                </span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Measurement &amp; Incrementality Testing</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  To ensure every strategy drives real, measurable growth, we
                  implement rigorous measurement frameworks and incrementality
                  testing. Our team of experts isolates the impact of individual
                  campaigns and initiatives to provide clear insights into
                  what’s working and what needs optimization—because growth only
                  counts if you can prove it.
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
