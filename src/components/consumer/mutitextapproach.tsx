
export default function mutitextapproach() {
  return (
    <section className="multi-text-section bg-dark ">
          <div className="multi-text-section__text">
            <div className="title">
              <span className="badge rounded-pill bg-light">Our Approach</span>
              <h2>
                We seamlessly integrate with businesses like yours, elevating
                marketing programs to reach revenue goals.
              </h2>
            </div>
            <div className="paragraph">
              <p>
                <span style={{ fontWeight: 400 }}>
                  We’re quick on our feet – adapting and solving for new
                  possibilities and obstacles as they come. Our team of marketers,
                  data scientists, strategists, and analysts are ready to help your
                  business grow.
                </span>
              </p>
              <p>
                <span style={{ fontWeight: 400 }}>
                  We have the capabilities and resources to solve the challenges
                  that keep you up at night. Challenges such as:
                </span>
              </p>
            </div>
          </div>
          <div className="multi-text-section__items-text">
            {/* Primera fila con los primeros 2 items */}
            <div className="multi-text-section__row">
              <div className="item">
                <div className="text">
                  <h3>Increasing Contactable Volume of Customers/ Leads</h3>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Sending the right messaging, to the right audience, through
                      the right channel mix is a science. Luckily we can securely
                      analyze your marketing data, forecast where and how you should
                      spend, develop the creative concepts to attract and engage the
                      right audience, executing on campaigns that will make the
                      leads pour in and are ready to become your newest customer.
                    </span>
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="text">
                  <h3>Nurture and Retention</h3>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      It’s one thing to get a lead in the door (&amp; all the time/
                      money that goes into it), it’s another to nurture, convert and
                      retain until a lead becomes a loyal customer and comes back
                      time and time again. We’re experts when it comes to working
                      with various sales cycles, enrollment calendars, importance of
                      lifetime value and have proven success nurturing leads into
                      customers and improving retention.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* Segunda fila con los últimos 2 items */}
            <div className="multi-text-section__row">
              <div className="item">
                <div className="text">
                  <h3>Measurement and Contribution Effect</h3>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Marketers in any industry are under fire to show ROI and
                      effectiveness of the marketing mix for every dollar spent. Are
                      you spending dollars on a channel, seeing decent results, but
                      not seeing the impact on overall revenue or understanding what
                      channels are contributing most effectively? Our team of data
                      scientists can dig into the numbers and show what tactics are
                      actually contributing to incremental (or new) revenue and
                      which tactics are not. Then, we adapt and execute.
                    </span>
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="text">
                  <h3>Operational Efficiency</h3>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Are you drowning in third party tools, data, martech, and
                      disconnected teams trying to make sense of it all? Our team
                      can plug in – weaving together marketing and business
                      practices that streamline to impact your bottom line.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
