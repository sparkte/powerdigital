
export default function approach() {
  return (
    <section className="multi-text-section bg-light ">
      <div className="multi-text-section__text">
        <div className="title">
          <span className="badge rounded-pill bg-light">Our Approach</span>
          <h2>
            Here’s How We Help B2B Companies Thrive in a Complex, Fast-Paced
            Market.
          </h2>
        </div>
        <div className="paragraph">
          <p>
            A
            <span style={{ fontWeight: 400 }}>
              t Power Digital, we know that winning in B2B isn’t just about
              great products—it’s about reaching the right people with the right
              message at the right time. Long sales cycles, complex buying
              committees, and siloed teams can make that tough. That’s where we
              come in.
            </span>
          </p>
          <p>
            <span style={{ fontWeight: 400 }}>
              Our approach combines data-fueled insights with human-first
              creativity to simplify the complex and drive smart, scalable
              growth. Here’s how we do it:
            </span>
          </p>
        </div>
      </div>
      <div className="multi-text-section__items-text">
        {/* Primera fila con los primeros 2 items */}
        <div className="multi-text-section__row">
          <div className="item">
            <div className="text">
              <h3>DATA-DRIVEN HOLISTIC MARKETING STRATEGIES</h3>
              <p>
                We turn complex data into actionable insights that unlock new
                opportunities for growth across all channels of marketing. By
                analyzing real-world behavior and market trends, we build
                strategies that speak directly to the people making buying
                decisions—from C-level executives to end users.
              </p>
              <p>
                The result? Your messaging is clear, compelling, and aligned to
                drive action at every stage of the buyer’s journey.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>ALIGNING GROWTH TEAMS FOR PIPELINE GENERATION</h3>
              <p>
                Growth happens faster when your teams work together. We break
                down silos and align your sales, marketing, and tech departments
                around a shared strategy.
              </p>
              <p>
                By creating synergy across teams, we ensure you’re fully
                leveraging your technology, budget, and resources to move the
                needle. When everyone is pulling in the same direction,
                efficiency improves, and growth accelerates.
              </p>
            </div>
          </div>
        </div>
        {/* Segunda fila con los últimos 2 items */}
        <div className="multi-text-section__row">
          <div className="item">
            <div className="text">
              <h3>UNLOCKING ROI WITH FASTER DECISION MAKING</h3>
              <p>
                In a fast-evolving market, speed is a competitive advantage. We
                help you cut through the noise by integrating real-time data
                into your decision-making process, ensuring that your teams move
                quickly with confidence and precision.
              </p>
              <p>
                Our data-driven solutions provide clear answers to questions
                like:
              </p>
              <ul>
                <li style={{ fontWeight: 400 }} aria-level={1}>
                  How much should we spend?
                </li>
                <li style={{ fontWeight: 400 }} aria-level={1}>
                  Which channels deliver the best ROI?
                </li>
                <li style={{ fontWeight: 400 }} aria-level={1}>
                  What messaging resonates with each buyer persona?
                </li>
              </ul>
              <p>
                The faster you can answer these questions, the faster you’ll
                grow.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>CREATING TARGETED CUSTOMER RELATIONSHIPS</h3>
              <p>
                B2B isn’t just about closing deals—it’s about building trust and
                creating lasting relationships. We help you craft strategies
                that go beyond lead generation to deliver hyper-targeted value
                at every stage of the customer journey.
              </p>
              <p>
                From awareness to post-purchase, we create targeted touchpoints
                that keep your brand top-of-mind and foster loyalty, driving
                sustained, and lifelong fans of your brand
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
