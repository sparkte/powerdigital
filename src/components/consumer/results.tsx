import image117 from '../../images/1-1-768x768.png';
import CountUp from '../Home/CountUp';

export default function Results() {
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
              {/* REMOVED OUTER <h3>. CountUp is now directly inside the <div>. */}
              {/* The data-value prop is now passed to CountUp to apply to its inner element. */}
              <CountUp end={2.6} suffix="X" duration={2} data-value="2.6X" />
              <p>Faster growth rates than the industry average</p>
            </div>
          </div>
          <div>
            <div className="item">
              {/* FIX APPLIED HERE: Remove outer h3, pass data-value */}
              <CountUp end={27} suffix="%" duration={2} data-value="27%" />
              <p>Average YoY increase in client revenue</p>
            </div>
          </div>
          <div>
            <div className="item">
              {/* FIX APPLIED HERE: Remove outer h3, pass data-value */}
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
            {/* Using the src property from the imported object */}
            <img src={image117.src} alt="" />
          </picture>
        </div>
        <div className="text">
          <span className="badge rounded-pill bg-light">Our Results</span>
          <div className="data-driven-insight__insight insight-section">
            <div>
              {/* FIX APPLIED HERE: Remove outer h3, pass data-value */}
              <CountUp end={33} suffix="%" duration={2} data-value="33%" />
              <p>YoY Leads</p>
            </div>
            <div>
              {/* FIX APPLIED HERE: Remove outer h3, pass data-value */}
              <CountUp end={34} suffix="%" duration={2} data-value="34%" />
              <p>YoY Converted Leads</p>
            </div>
          </div>
          <div className="description">
            <p>
              Explore how our strategic approach revolutionized the lead pipeline for Alliant University’s Masters of Social Work program.
              Through comprehensive audience research, we uncovered critical insights into platform preferences and high-potential
              demographics, enabling us to expand our targeting across diverse age groups and geographic regions. By optimizing our
              top-performing creative assets, we not only drove significant pipeline growth but also achieved a notable reduction in overall
              acquisition costs, positioning the program for long-term scalability and success.
            </p>
          </div>
          <a
            className="btn btn-secondary"
            href="https://powerdigitalmarketing.com/case-studies/alliant-university/"
          >
            <div className="icon">
              <span>Learn more</span>
              <i className="icon-arrow-up-right" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}