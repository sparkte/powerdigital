import Enterprise from '../../images/Enterprise-Software-Company-2-768x768.png';
import CountUp from '../Home/CountUp';
export default function result() {
  return (
   <section className="section-three-data-number bg-dark">
      <div className="section-three-data-number__text">
        <div className="title">
          <h2>Proven Results</h2>
        </div>
        <div className="description">
          <p>Anyone can talk the talk, we provide the receipts.</p>
        </div>
        <div className="section-three-data-number__insight insight-section">
          <div>
            <div className="item">
              <CountUp end={2.6} suffix="X" duration={2} data-value="2.6X" />
              {/* <h3 data-value="2.6X">0</h3> */}
              <p>Faster growth rates than the industry average</p>
            </div>
          </div>
          <div>
            <div className="item">
              <CountUp end={27} suffix="%" duration={2} data-value="27%" />
              {/* <h3 data-value="27%">0</h3> */}
              <p>Average YoY increase in client revenue</p>
            </div>
          </div>
          <div>
            <div className="item">
              <CountUp end={300} suffix="M+" duration={2} data-value="300M+" />
              <p>
                Data points leveraged by nova applications to drive business
                insight
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-three-data-number__image-text">
        <div className="image">
          <picture>
            <img
              src={Enterprise.src}
              alt=""
            />
          </picture>
        </div>
        <div className="text">
          <span className="badge rounded-pill bg-light">Our Results</span>
          <div className="data-driven-insight__insight insight-section">
            <div>
              <CountUp end={122} suffix="%" duration={2} data-value="+122%" />
              {/* <h3 data-value="122%">0</h3> */}
              <p>
                <span style={{ fontWeight: 400 }}>
                  &nbsp;YoY Sales Qualified Leads
                </span>
              </p>
            </div>
            <div>
              <CountUp end={34} suffix="%" duration={2} data-value="-80%" />
              {/* <h3 data-value=" -80%">0</h3> */}
              <p>
                <span style={{ fontWeight: 400 }}>
                  YoY Cost Decrease Per Paid Opportunity
                </span>
              </p>
            </div>
          </div>
          <div className="description">
            <p>
              <span style={{ fontWeight: 400 }}>
                A prominent software company, historically focused on serving
                SMB ecommerce clients, embarked on a transformational journey to
                shift its positioning toward the enterprise market. By
                partnering with Power Digital, the company refined its
                go-to-market strategy, resulting in remarkable business
                outcomes, including a 122% year-over-year increase in qualified
                leads at a 25% reduction in media cost, and a significant boost
                in overall marketing efficiency.
              </span>
            </p>
          </div>
          <a
            className="btn btn-secondary"
            href="https://powerdigitalmarketing.com/case-studies/enterprise-software-company/"
          >
            <div className="icon">
              <span>Learn more</span>
              <i className="icon-arrow-up-right" />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
