import React from 'react'

export default function LearnMore() {
  return (
    <>
    <section className="section-list-accordion bg-light">
      <div className="intro-twos-columns">
        <div className="intro-twos-columns__col">
          <div className="intro-twos-columns__title">
            <span className="badge rounded-pill bg-primary">LEARN MORE</span>
            <div className="title">
              <h2>Frequently asked questions</h2>
            </div>
            <div className="description"></div>
          </div>
          <div className="intro-twos-columns__text">
            <div className="section-list-accordion-faq">
              <details
                itemScope={true}
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <summary itemProp="name">
                  How does Creative Affinity help improve my ad campaigns?{" "}
                  <i className="icon-chevron-right" />
                </summary>
                <div
                  itemScope={true}
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text">
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        By identifying top-performing creatives based on metrics
                        like LTV and engagement, you can optimize your campaigns
                        to focus on ads that resonate most with high-value
                        audiences.
                      </span>
                    </p>
                  </div>
                </div>
              </details>
              <details
                itemScope={true}
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <summary itemProp="name">
                  Can Creative Affinity be used for different platforms?{" "}
                  <i className="icon-chevron-right" />
                </summary>
                <div
                  itemScope={true}
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text">
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Yes, Creative Affinity supports ad performance analysis
                        across platforms like Meta, TikTok, and YouTube (coming
                        soon), providing tailored insights for each platform&#39;s
                        unique audience and performance metrics.
                      </span>
                    </p>
                  </div>
                </div>
              </details>
              <details
                itemScope={true}
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <summary itemProp="name">
                  How does Creative Affinity match creatives to customer data?{" "}
                  <i className="icon-chevron-right" />
                </summary>
                <div
                  itemScope={true}
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text">
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        It uses a proprietary matching algorithm that connects
                        ad creatives with customer data, including transaction
                        IDs and purchase behavior, to provide insights on which
                        ads drive the highest value.
                      </span>
                    </p>
                  </div>
                </div>
              </details>
              <details
                itemScope={true}
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <summary itemProp="name">
                  Does Creative Affinity account for different types of ad
                  creatives? <i className="icon-chevron-right" />
                </summary>
                <div
                  itemScope={true}
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text">
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Absolutely. It evaluates a variety of ad formats,
                        including static images, videos, and UGC (User-Generated
                        Content), and provides inspiration based on the format&#39;s
                        performance.
                      </span>
                    </p>
                  </div>
                </div>
              </details>
              <details
                itemScope={true}
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <summary itemProp="name">
                  Can Creative Affinity help with future creative development?{" "}
                  <i className="icon-chevron-right" />
                </summary>
                <div
                  itemScope={true}
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text">
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Yes, by analyzing trends and performance metrics, it
                        offers actionable recommendations for improving existing
                        creatives and designing new ones tailored to specific
                        audience segments.
                      </span>
                    </p>
                  </div>
                </div>
              </details>
              <details
                itemScope={true}
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <summary itemProp="name">
                  What if an ad doesn&#39;t have LTV attributed?{" "}
                  <i className="icon-chevron-right" />
                </summary>
                <div
                  itemScope={true}
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text">
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        This typically means the system was unable to match the
                        ad to a customer&#39;s transaction, often due to limited
                        data, low spend, or tracking configuration issues.
                        However, depending on your campaign objectives, or
                        recency of campaign deployment, some ads may not yet
                        have yielded customers.
                      </span>
                    </p>
                  </div>
                </div>
              </details>
              <details
                itemScope={true}
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <summary itemProp="name">
                  How can I use Creative Affinity insights to increase LTV?{" "}
                  <i className="icon-chevron-right" />
                </summary>
                <div
                  itemScope={true}
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text">
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        The tool helps you identify creatives and messaging that
                        attract high-LTV customers, allowing you to prioritize
                        these elements in your campaigns for better customer
                        retention and revenue growth.
                      </span>
                    </p>
                  </div>
                </div>
              </details>
              <details
                itemScope={true}
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <summary itemProp="name">
                  Are there future updates planned for Creative Affinity?{" "}
                  <i className="icon-chevron-right" />
                </summary>
                <div
                  itemScope={true}
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text">
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Yes, upcoming updates include enhanced filtering
                        options, customer insights linked to ads, video analysis
                        capabilities, and the integration of image recognition
                        AI to further improve creative insights.
                      </span>
                    </p>
                  </div>
                </div>
              </details>
              <details
                itemScope={true}
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <summary itemProp="name">
                  Is there a learning curve for using Creative Affinity?{" "}
                  <i className="icon-chevron-right" />
                </summary>
                <div
                  itemScope={true}
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text">
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Not at all. The platform is designed for marketers,
                        offering intuitive dashboards and tools that make it
                        easy to analyze and act on creative performance data.
                      </span>
                    </p>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
