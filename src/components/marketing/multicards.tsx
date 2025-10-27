import React from 'react'

export default function multicards() {
  return (
    <>
    <section className="multi-cards-section bg-dark py-3">
      <div className="intro-twos-columns ">
        <div className="intro-twos-columns__col">
          <div className="intro-twos-columns__title">
            <span className="badge rounded-pill bg-secondary">Measurement</span>
            <h2>Measurement is hard. And it’s getting worse.&nbsp;</h2>
          </div>
          <div className="intro-twos-columns__text"></div>
        </div>
      </div>
      <div className="multi-cards-section__cards  ">
        <div className="three-card bg-light">
          <div className="text">
            <div className="description">
              <p>
                Privacy regulations (GDPR) and technology (iOS14.5)
                <strong>
                  {" "}
                  limit advertisers’ ability to track individual users
                </strong>
                , weakening traditional attribution.
              </p>
            </div>
          </div>
        </div>
        <div className="three-card bg-primary">
          <div className="text">
            <div className="description">
              <p>
                A fragmented media landscape{" "}
                <strong>prevents a unified view.</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="three-card bg-secondary">
          <div className="text">
            <div className="description">
              <p>
                Platforms and channels are incentivized to show the best{" "}
                <strong>“results”</strong> they can.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
