import React from 'react'

export default function power() {
  return (
    <>
     <section className="multi-text-section bg-light ">
      <div className="multi-text-section__text">
        <div className="title">
          <span className="badge rounded-pill bg-dark">Why Power?</span>
          <h2>Marketing That Hits Shelves, Screens, and Scorecards</h2>
        </div>
        <div className="paragraph">
          <p>
            <span style={{ fontWeight: 400 }}>
              This isn’t just about running ads. It’s about building a marketing
              ecosystem that supports every part of your business, from digital
              growth to retail partnerships.
            </span>
          </p>
          <p>
            <span style={{ fontWeight: 400 }}>
              Power Digital gives you the people, the platform, and the
              performance strategy to:
            </span>
          </p>
        </div>
      </div>
      <div className="multi-text-section__items-text">
        {/* Primera fila con los primeros 3 items */}
        <div className="multi-text-section__row">
          <div className="item">
            <div className="text">
              <h3>Activate Data-Backed Strategy</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  We turn raw insights into retail-ready plays.
                </span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Marry Creative with Performance</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  Yes, your ads can be beautiful and efficient.
                </span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Drive Growth That Sticks</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  Launch fast. Scale smart. Retain customers.
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* Segunda fila con los items restantes */}
        <div className="multi-text-section__row">
          <div className="item">
            <div className="text">
              <h3>Get All Channels Working Together</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  We build synergy across retail, DTC, Amazon, and beyond.
                </span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Measure Everything That Matters</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  Every tactic. Every campaign. Every channel. Proven.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section></>
  )
}
