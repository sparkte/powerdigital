
export default function intelligent() {
  return (
    <section className="multi-text-section bg-dark ">
      <div className="multi-text-section__text">
        <div className="title">
          <span className="badge rounded-pill bg-primary">
            Intelligent Growth, Faster
          </span>
          <h2>
            Power Digital drives efficient, data-backed growth for B2B
            companies.
          </h2>
        </div>
        <div className="paragraph">
          <p>
            <span style={{ fontWeight: 400 }}>
              Leverage Power’s unrivaled access to over 300M+ customer data
              points and partnerships with Google, Meta, LinkedIn, Bomborra,
              Intentsify, Demandbase, 6Sense, IndustryDive, Snowflake, and many
              more. By combining our data intelligence and strategic B2B GTM
              expertise with beautiful creative, compelling messaging, and
              tactical excellence, you can accomplish both the urgent{" "}
            </span>
            <i>
              <span style={{ fontWeight: 400 }}>and </span>
            </i>
            <span style={{ fontWeight: 400 }}>
              the important. Smart, strategic growth, and no BS.
            </span>
          </p>
        </div>
      </div>
      {/* Si hay menos de 5 items, se muestran todos en una sola fila */}
      <div className="multi-text-section__items-text">
        <div className="multi-text-section__row">
          <div className="item">
            <div className="text">
              <h3>MESSAGING CLARITY</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  Our team ensures that even the most complex features of your
                  product or service are communicated in a way that resonates
                  with all buying members, from users to financial buyers,
                  simplifying complex concepts to drive clarity and engagement.
                </span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>DEMAND GENERATION</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  We fuel your pipeline by identifying key decision-makers and
                  implementing full-funnel strategies that generate qualified
                  leads. Whether through ABM, thought leadership, category
                  creation, or broad digital campaigns, we ensure each effort
                  contributes to scalable, repeatable growth.
                </span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>EFFICIENCY IN SCALE</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  From product launch to market expansion, our approach ensures
                  each stage of growth is data-driven and efficient. We optimize
                  your digital channels to reduce churn, boost retention, and
                  achieve sustainable long-term success.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
