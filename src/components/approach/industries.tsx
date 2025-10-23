import React from 'react'

export default function industries() {
  return (
    <>
    <section className="multi-text-section bg-dark">
      <div className="multi-text-section__text">
        <div className="title">
          <span className="badge rounded-pill bg-light">Industries</span>
          <h2>
            From our talent to our tech, this is new wave digital marketing.
          </h2>
        </div>
        <div className="paragraph">
          <a
            href="https://powerdigitalmarketing.com/company/"
            className="btn btn-secondary"
          >
            <div className="icon">
              <span>Learn more about our company</span>
              <i className="icon-arrow-up-right" />
            </div>
          </a>
        </div>
      </div>
      {/* Si hay menos de 5 items, se muestran todos en una sola fila */}
      <div className="multi-text-section__items-text">
        <div className="multi-text-section__row">
          <div className="item">
            <div className="text">
              <h3>Undeniable Speed</h3>
              <p>
                Everyone has capabilities, but coupling them with agility is the
                holy grail of growth marketing. We dive into the numbers to see
                what tactics are creating incremental or new revenue and which
                ones aren’t, then we swiftly adapt and execute.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Undeniable Expertise</h3>
              <p>
                Our team boasts some of the brightest minds in the world of
                digital and performance marketing, and everyone here is
                lockstep-focused on business impact — evidenced by a stellar
                96+% client retention rate. Expect nothing less than
                best-in-class.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Undeniable Results</h3>
              <p>
                We’re driven by outcomes, not ego. Perhaps that’s why we grow
                companies 2.6x faster than the industry average, with 27+% YoY
                revenue increases. All of our critical capabilities prioritize
                optimizing our clients’ investments for maximum ROI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
