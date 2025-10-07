
export default function multitextsolutions() {
  return (
    <section className="multi-text-section bg-light ">
          <div className="multi-text-section__text">
            <div className="title">
              <span className="badge rounded-pill bg-light">Solutions</span>
              <h2>Tailored Strategies That Drive Results</h2>
            </div>
            <div className="paragraph">
              <p>
                <span style={{ fontWeight: 400 }}>
                  From enrollment goals to wellness experiences and home services,
                  we deliver custom strategies that meet your audience where they
                  are—driving results that matter and journeys that convert.
                </span>
              </p>
            </div>
          </div>
          <div className="multi-text-section__items-text">
            {/* Primera fila con los primeros 2 items */}
            <div className="multi-text-section__row">
              <div className="item">
                <div className="text">
                  <h3>Education</h3>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Aligning the right marketing mix for unique program calendars,
                      and enrollment cycles is something we’re well-versed in here
                      at Power. We design custom roadmaps that drive contactable
                      prospective students to achieve enrollment goals all while
                      addressing and preventing enrollment MELT.
                    </span>
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="text">
                  <h3>Health + Wellness</h3>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Whether you’re operating a physical location, chain of
                      locations, or a wellness app – we’ve got you covered. Our team
                      of experts simplify omnichannel campaign execution,
                      measurement and optimization – so you can focus on improving
                      the quality of service and wellbeing of your customers.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* Segunda fila con los últimos 2 items */}
            <div className="multi-text-section__row">
              <div className="item">
                <div className="text">
                  <h3>Home Services</h3>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Windows, plumbing, HVAC, roofing etc. You name it, we’ve done
                      it. We’re experienced at designing effective campaigns that
                      improve the customer journey, drives warmer leads ready for
                      appointments/quotes, speeds up the quote to sales cycle, and
                      improves operational efficiency – aka revenue. We understand
                      the urgency behind this high demand category and consumer
                      behaviors.
                    </span>
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="text">
                  <h3>Senior Living</h3>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Families in search of appropriate accommodations for their
                      loved ones undergo immense research before commitment. A
                      partner that understands the customer journey, caters
                      messaging to address their needs, and gets their attention
                      will simplify your costs and this significant decision. Win,
                      Win.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
