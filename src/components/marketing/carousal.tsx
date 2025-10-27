import React from 'react'
import icon6 from '../../assets/images/icon6.svg'
import icon3 from '../../assets/images/icon3.svg'
import icon8 from '../../assets/images/icon8.svg'
import Layer_1 from '../../assets/images/Layer_1-1.svg'

export default function carousal() {
  return (
    <>
    <section className="flexible-bootstrap-section bg-light pt-1">
      <div className="container">
        <div className="row justify-content-center align-items-center mb-3">
          <div className="col-lg-6">
            <h2 className="pe-3 mb-3">
              Triangulation through unified marketing measurement.
            </h2>
          </div>
          <div className="col-lg-6">
            <div className="mb-0">
              <p>
                Just doing everything and calling it a measurement framework
                doesn’t count. Savvy marketers and data practitioners prioritize
                specific data for certain decisions. Different methods often
                disagree, so knowing when to use what is crucial.
              </p>
              <p>
                We save brands hundreds of millions of dollars in wasted ad
                spend while simultaneously growing their revenue, improving
                overall profitability and marketing ROI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="carousel-company bg-grey">
      <div className="carousel-company__desktop">
        <div className="carousel-company__title">
          <span className="badge rounded-pill bg-light" />
          <h2>A combined view of:</h2>
        </div>
        <div className="swiper swiper-carousel">
          <div className="swiper-wrapper">
            <div
              className="three-card swiper-slide"
              style={{ backgroundColor: "rgb(175,170,249)", color: "" }}
            >
              <div className="icon">
                <img src={icon6.src} alt="" />
              </div>
              <div className="text">
                <h4>Business level data.</h4>
              </div>
            </div>
            <div
              className="three-card swiper-slide"
              style={{
                backgroundColor: "rgb(119,86,255)",
                color: "rgb(255,255,255)"
              }}
            >
              <div className="icon">
                <img src={Layer_1.src} alt="" />
              </div>
              <div className="text">
                <h4>True scientific incrementality experiments.</h4>
              </div>
            </div>
            <div
              className="three-card swiper-slide"
              style={{ backgroundColor: "rgb(255,255,255)", color: "" }}
            >
              <div className="icon">
                <img src={icon3.src} alt="" />
              </div>
              <div className="text">
                <h4>Rigorous and ML-enabled media mix modeling.</h4>
              </div>
            </div>
            <div
              className="three-card swiper-slide"
              style={{
                backgroundColor: "rgb(0,0,0)",
                color: "rgb(255,255,255)"
              }}
            >
              <div className="icon">
                <img src={icon8.src} alt="" />
              </div>
              <div className="text">
                <h4>Knowledge of when and how to use platform attribution.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
