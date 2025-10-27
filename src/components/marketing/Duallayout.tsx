import React from 'react'
import meeting from '../../images/meeting.png'

export default function Duallayout() {
  return (
    <>
    <section className="dual-layout-section bg-light pb-0">
      <div className="container-note-image is-reversed">
        <div className="note-image fade-up">
          <img
            className="note-image__img"
            src={meeting.src}
            alt=""
            srcSet=""
          />
        </div>
        <div className="text-section">
          <span className="badge rounded-pill bg-dark">Accuracy</span>
          <div className="title">
            <h2> Improve the accuracy of your marketing. </h2>
          </div>
          <div className="text">
            <p>
              We believe that each measurement method has strengths and
              weaknesses, and that using them together actually improves the
              overall accuracy and utility of your marketing.
            </p>
          </div>
          <a
            href="https://powerdigitalmarketing.com/blog/the-most-important-instagram-updates-for-brands-in-2018/"
            className="btn btn-secondary"
          >
            <div className="icon">
              <span>Request a free marketing audit</span>
              <i className="icon-arrow-up-right" />
            </div>
          </a>
        </div>
      </div>
    </section>
    <section className="flexible-bootstrap-section bg-light pt-0">
      <div className="container">
        <div className="row justify-content-center align-items-center mb-0">
          <div className="col-lg-12">
            <hr className="border-liner my-1 " />
          </div>
          <div className="col-lg-4">
            <h4 className="pe-3 mb-1">
              Scientifically Rigorous Incrementality Experiments
            </h4>
            <div className="mb-2">
              <p>
                Every industry outside of advertising follows the same
                principles when determining the impact of a variable – the test
                and control group. Advertising should be treated the same as
                politics, healthcare, or culinary science to determine what’s
                working.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <h4 className="pe-3 mb-1">Media Mix Modeling</h4>
            <div className="mb-2">
              <p>
                We run tens of thousands of agile models built with machine
                learning on our clients’ data. Each model is customized to the
                brand’s specific data, but has been guided through our
                experience by vertical, incrementality experiments, and order
                values.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <h4 className="pe-3 mb-1">Incorporating Attribution</h4>
            <div className="mb-2">
              <p>
                We don’t just use attribution software (such as Google
                Analytics) out of the box. However it is still helpful when
                determining small, fast, and tactical optimizations. We apply
                the right modifiers and weights to attribution to ensure we’re
                not over-investing in the wrong areas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
