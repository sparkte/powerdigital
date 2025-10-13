"use server"

import Header from '../../components/consumer/header';
import MixModeling from "./images/Mix-modeling.png"
import AdobeStock199592631 from "./images/AdobeStock_19959263-1.png"
import Icon16 from "./images/icon-16.svg"
import Icon6 from "./images/icon6.png"
import Icon14 from "./images/icon-14.svg"
import Icon9 from "./images/icon-9.svg"
import Graph from "./images/graph.png"
import Computer from "./images/computer.png"
import Conference from "./images/conference.png"
import ManualChart from "./images/manual-chart.png"
import CurveUp from "./images/curve-up.png"

const MarketingMixModelingDataSciencePage = () => {
    return (
        <>
            <Header />
            <div
                className="wp-singular page-template page-template-approach-template page-template-approach-template-php page page-id-9050 wp-theme-pdm-theme"
            >
                <main>
                    <section className="single-hero bg-light  ">
                        <div className="single-hero__text">
                            <span className="badge rounded-pill bg-light">
                                Marketing Measurement + Incrementality
                            </span>
                            <div className="title">
                                <h1>
                                    Marketing Mix Modeling (MMM) is having a{" "}
                                    <span className="highlighted">resurgence in popularity</span>{" "}
                                </h1>
                            </div>
                            <div className="text">
                                <p>
                                    Due to the challenges in the attribution space, the creation of
                                    machine learning models, and the release of open source models (such
                                    as Robyn and Meridian).
                                </p>
                            </div>
                            <a
                                href="https://powerdigitalmarketing.com/work-with-us/"
                                className="btn btn-secondary"
                            >
                                <div className="icon">
                                    <span>Request a consultation</span>
                                    <i className="icon-arrow-up-right" />
                                </div>
                            </a>
                        </div>
                        <div className="single-hero__image">
                            <div className="single-badge"></div>
                            <img src={MixModeling.src} alt="" />
                        </div>
                    </section>{" "}
                    <section className="multi-cards-section bg-dark py-4">
                        <div className="intro-twos-columns ">
                            <div className="intro-twos-columns__col">
                                <div className="intro-twos-columns__title">
                                    <span className="badge rounded-pill bg-light">Accuracy</span>
                                    <h2>Inaccurate MMM Models Cost More Than They Reveal.</h2>
                                </div>
                                <div className="intro-twos-columns__text">
                                    <p>
                                        Novice MMM practitioners might accidentally assign a significant
                                        amount of contribution from a channel or tactic that in reality is{" "}
                                        <strong>very unlikely to drive incrementality.</strong>
                                    </p>
                                    <p>
                                        Similarly, the tendency for open source or software based models
                                        is to <strong>over-emphasize error rates</strong> and model fits
                                        rather than their ability to accurately predict and forecast
                                        revenue impacts.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="multi-cards-section__cards multi-cards-section__cards--two-columns multi-cards-section__cards--carousel">
                            <div className="three-card bg-secondary">
                                <div className="icon">
                                    <img src={Icon16.src} alt="" />
                                </div>
                                <div className="text">
                                    <div className="description">
                                        <p>
                                            Understanding the<strong> business context.</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="three-card bg-primary">
                                <div className="icon">
                                    <img src={Icon6.src} alt="" />
                                </div>
                                <div className="text">
                                    <div className="description">
                                        <p>
                                            Factoring in <strong>relevant</strong> variables.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="three-card bg-grey">
                                <div className="icon">
                                    <img src={Icon14.src} alt="" />
                                </div>
                                <div className="text">
                                    <div className="description">
                                        <p>
                                            <strong>Comparing</strong> different methods.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="three-card bg-light">
                                <div className="icon">
                                    <img src={Icon9.src} alt="" />
                                </div>
                                <div className="text">
                                    <div className="description">
                                        <p>
                                            Model validation through{" "}
                                            <strong>incrementality experiments</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{" "}
                    <section className="flexible-bootstrap-section bg-light pt-0">
                        <div className="container">
                            <div className="row justify-content-center align-items-center mb-0">
                                <div className="col-lg-6">
                                    <div className="d-flex justify-content-center align-align-items-stretch mb-4 position-relative image-quote">
                                        <img
                                            className="position-absolute image-quote__image"
                                            src={AdobeStock199592631.src}
                                            alt=""
                                        />
                                        <div className="rounded-3 position-absolute bottom-0 end-0 image-quote__text p-2 bg-dark">
                                            Solving these challenges requires{" "}
                                            <span>technical expertise</span>.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <h2 className="pe-3 mb-2">Transform uncertain into undeniable.</h2>
                                    <div className="mb-2">
                                        <p>
                                            Coupled with business acumen built only{" "}
                                            <strong>
                                                through exposure and experience to thousands of models
                                            </strong>{" "}
                                            across hundreds of brands. Our Data Intelligence team has
                                            overseen the creation, deployment, and calibration of literally
                                            thousands of models across billions of dollars of ad spend and{" "}
                                            <strong>tens of billions in revenue</strong>.
                                        </p>
                                    </div>
                                    <a
                                        href="https://powerdigitalmarketing.com/work-with-us/"
                                        className="btn btn-secondary mb-2"
                                    >
                                        <div className="icon">
                                            <span>Accelerate your business</span>
                                            <i className="icon-arrow-up-right" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="flexible-bootstrap-section bg-light pt-1">
                        <div className="container">
                            <div className="row justify-content-center align-items-center mb-0">
                                <div className="col-lg-6">
                                    <h2 className="pe-3 mb-2">We deploy Modern Models</h2>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <p>
                                            Power Digital’s Data Intelligence team focuses on{" "}
                                            <strong>these five principles</strong>, working closely with our
                                            technology team to tailor build nova Intelligence. The
                                            combination of nova and our deep bench of practitioners{" "}
                                            <strong>
                                                makes us the only firm in our category to deliver with speed,
                                                scale
                                            </strong>
                                            , and <strong>impact</strong>.<br />
                                            Having a dedicated data scientist service your business can
                                            literally save you millions of dollars in wasted ad spend. Our
                                            flexible tech-enabled service{" "}
                                            <strong>
                                                affords the speed and agility of a software platform
                                            </strong>{" "}
                                            with the white glove tailoring of a big-fee consultancy.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <hr className="border-liner my-1 " />
                                </div>
                            </div>
                            <div className="row justify-content-center align-items-center mb-3">
                                <div className="col-lg-6">
                                    <div className="rounded-4 overflow-hidden mb-1">
                                        <div
                                            className="card-body"
                                            style={{ backgroundImage: 'url("' + Graph.src + '")' }}
                                        />
                                        <h4 className="card-title px-3 bg-primary">
                                            Based in business outcomes
                                        </h4>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="rounded-4 overflow-hidden mb-1">
                                        <div
                                            className="card-body"
                                            style={{ backgroundImage: 'url("' + Computer.src + '")' }}
                                        />
                                        <h4 className="card-title px-3 bg-grey">
                                            Validated for true impact
                                        </h4>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="rounded-4 overflow-hidden mb-1">
                                        <div
                                            className="card-body"
                                            style={{ backgroundImage: 'url("' + Conference.src + '")' }}
                                        />
                                        <h4 className="card-title px-3 bg-dark">
                                            Easily understood by media teams
                                        </h4>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="rounded-4 overflow-hidden mb-1">
                                        <div
                                            className="card-body"
                                            style={{ backgroundImage: 'url("' + ManualChart.src + '")' }}
                                        />
                                        <h4 className="card-title px-3 bg-white">
                                            Agile and updated frequently
                                        </h4>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="rounded-4 overflow-hidden mb-1">
                                        <div
                                            className="card-body"
                                            style={{ backgroundImage: 'url("' + CurveUp.src + '")' }}
                                        />
                                        <h4 className="card-title px-3 bg-secondary">
                                            Predictive and enable forecasting
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

        </>
    )
}

export default MarketingMixModelingDataSciencePage;