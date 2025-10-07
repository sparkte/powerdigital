
export default function multitextwork() {
  return (
    <section className="multi-text-section bg-dark ">
          <div className="multi-text-section__text">
            <div className="title">
              <span className="badge rounded-pill bg-dark">Work with Power</span>
              <h2>What is the benefit of hiring a consumer services agency?</h2>
            </div>
            <div className="paragraph">
              <p>
                <span style={{ fontWeight: 400 }}>
                  Choosing Power Digitals Consumer Services means unlocking the full
                  potential of your business. Our team is dedicated to delivering
                  tailored strategies that align with your growth objectives. We go
                  beyond the surface, providing the insights, tools, and expertise
                  needed to overcome business and industry challenges seizing new
                  opportunities.
                </span>
              </p>
              <p>
                <span style={{ fontWeight: 400 }}>
                  With a focus on driving meaningful engagement while enhancing
                  customer brand affinity optimizing your operations, we bring a
                  holistic approach to your marketing efforts. Our commitment is to
                  help you navigate complex market dynamics and achieve sustainable
                  growth.
                </span>
              </p>
            </div>
          </div>
          {/* Si hay menos de 5 items, se muestran todos en una sola fila */}
          <div className="multi-text-section__items-text">
            <div className="multi-text-section__row">
              <div className="item">
                <div className="text">
                  <h3>Drive Your Business Forward</h3>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Partner with Power Digital to accelerate your growth with
                      strategies that keep you ahead in an ever-changing market
                      landscape.
                    </span>
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="text">
                  <h3>Elevate Customer Connections</h3>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Deepen customer relationships and boost loyalty through our
                      innovative, experience-driven approach that resonates with
                      your audience.
                    </span>
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="text">
                  <h3>Confidently Navigate Market Challenges</h3>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Trust our expertise to guide you through market complexities,
                      ensuring your operations are optimized for consistent and
                      sustainable success.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
