import React from 'react'

export default function approach() {
  return (
    <>
    <section className="multi-text-section bg-dark ">
      <div className="multi-text-section__text">
        <div className="title">
          <span className="badge rounded-pill bg-light">Our Approach</span>
          <h2>
            How We Help CPG Brands Cut Waste, Build Margin, and Drive Velocity
          </h2>
        </div>
        <div className="paragraph">
          <p>
            <span style={{ fontWeight: 400 }}>
              Growth isn’t about spending more. It’s about making every dollar
              do more, especially when youre juggling DTC, retail media, and
              traditional brick-and-mortar.
            </span>
          </p>
          <p>
            <span style={{ fontWeight: 400 }}>
              Here’s how we help you scale with confidence:
            </span>
          </p>
        </div>
      </div>
      <div className="multi-text-section__items-text">
        {/* Primera fila con los primeros 3 items */}
        <div className="multi-text-section__row">
          <div className="item">
            <div className="text">
              <h3>01. Unified Data Visibility</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  We connect your digital and in-store data so you can actually
                  see what’s driving performance and allocate budget with
                  precision.
                </span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>02. Channel + Creative Alignment</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  Creative that wins in-store doesn’t always win online. We
                  build asset strategies that meet your audience where they are
                  and move them to buy.
                </span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>03. Zip Code-Level Activation</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  Our media plans get local, real local. Think store-by-store,
                  geo-specific campaigns that drive lift where it counts.
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* Segunda fila con los items restantes */}
        <div className="multi-text-section__row">
          <div className="item">
            <div className="text">
              <h3>04. Full-Funnel Optimization</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  From retail media to TikTok to Google Shopping, we build
                  strategies that don’t just hit KPIs, they grow your bottom
                  line.
                </span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>05. Measurement That Stands Up in a Boardroom</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  We isolate what’s actually working with incrementality testing
                  and MMM frameworks, so you can show up to leadership with
                  answers, not guesses.
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
