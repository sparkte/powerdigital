import ConsumerService from "../../images/Consumer-Service.png"
export default function singlehero() {
  return (
    <section className="single-hero bg-light  ">
          <div className="single-hero__text">
            <span className="badge rounded-pill bg-dark">Growth Marketing</span>
            <div className="title">
              <h1>Lead Generation Services</h1>
            </div>
            <div className="text">
              <p>
                <span style={{ fontWeight: 400 }}>
                  Our team of experts help businesses like yours drive more leads,
                  nurture existing pipelines, measure marketing impact, and solve
                  for operational challenges. We have the technology, the people,
                  and the experience to help your business thrive.
                </span>
              </p>
            </div>
            <a
              href="https://powerdigitalmarketing.com/work-with-us/"
              className="btn btn-secondary"
            >
              <div className="icon">
                <span>Get in Touch</span>
                <i className="icon-arrow-up-right" />
              </div>
            </a>
          </div>
          <div className="single-hero__image">
            <div className="single-badge"></div>
            <img src={ConsumerService.src} alt="" />
          </div>
        </section>
  )
}
