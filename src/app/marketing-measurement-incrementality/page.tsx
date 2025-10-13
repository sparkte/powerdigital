"use server"

import Header from '../../components/consumer/header';
import Layer_1_1 from "./images/Layer_1-1.svg"
import Meeting from "./images/meeting.png"
import PurpleFlatSmaller from "./images/purple-flat-smaller.png"

const MarketingMeasurementIncrementalityPage = () => {
    return (
        <>
            <Header />
            <div
                data-cmplz={2}
                className="wp-singular page-template page-template-approach-template page-template-approach-template-php page page-id-8965 wp-theme-pdm-theme"
            >
                <main>
                    <section className="single-hero bg-light  ">
                        <div className="single-hero__text">
                            <span className="badge rounded-pill bg-light">
                                Marketing Measurement + Incrementality
                            </span>
                            <div className="title">
                                <h1>
                                    Stop wasting millions of dollars on{" "}
                                    <span className="highlighted">ineffective marketing.</span>{" "}
                                </h1>
                            </div>
                            <div className="text">
                                <p>
                                    The purpose of marketing is to make money. Period. If anyone says
                                    something differently, they’re confused or selling something.
                                </p>
                                <p>
                                    So much marketing is ineffective. It contributes no revenue, it
                                    damages your profitability, and it doesn’t drive incremental growth
                                    to the business. This is why accurate marketing measurement and
                                    understanding incrementality is so appealing.
                                </p>
                            </div>
                            <a
                                href="https://powerdigitalmarketing.com/work-with-us/"
                                className="btn btn-secondary"
                            >
                                <div className="icon">
                                    <span>Get in touch</span>
                                    <i className="icon-arrow-up-right" />
                                </div>
                            </a>
                        </div>
                        <div className="single-hero__image">
                            <div className="single-badge"></div>
                            <img src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Marketing-Measurement-Incrementality.png" alt="" />
                        </div>
                    </section>{" "}
                    <section className="multi-cards-section bg-dark py-3">
                        <div className="intro-twos-columns ">
                            <div className="intro-twos-columns__col">
                                <div className="intro-twos-columns__title">
                                    <span className="badge rounded-pill bg-secondary">Measurement</span>
                                    <h2>Measurement is hard. And it’s getting worse.&nbsp;</h2>
                                </div>
                                <div className="intro-twos-columns__text"></div>
                            </div>
                        </div>
                        <div className="multi-cards-section__cards  ">
                            <div className="three-card bg-light">
                                <div className="text">
                                    <div className="description">
                                        <p>
                                            Privacy regulations (GDPR) and technology (iOS14.5)
                                            <strong>
                                                {" "}
                                                limit advertisers’ ability to track individual users
                                            </strong>
                                            , weakening traditional attribution.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="three-card bg-primary">
                                <div className="text">
                                    <div className="description">
                                        <p>
                                            A fragmented media landscape{" "}
                                            <strong>prevents a unified view.</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="three-card bg-secondary">
                                <div className="text">
                                    <div className="description">
                                        <p>
                                            Platforms and channels are incentivized to show the best{" "}
                                            <strong>“results”</strong> they can.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{" "}
                    <section className="full-image-testimonial bg-light  section-inner">
                        <img
                            className="full-image-testimonial__image"
                            src={PurpleFlatSmaller.src}
                            alt=""
                            style={{ maxHeight: 300 }}
                        />
                        <article className="1 note note--manual fade-up is-article-inner bg-dark">
                            <div className="note__text">
                                <p>
                                    If marketing needs to be measured, and attribution is unable to
                                    accurately determine if a tactic is incremental
                                    <br />
                                    or not, <span className="highlighted"> what’s the solution?</span>
                                </p>
                            </div>
                            <div className="testimonial-person">
                                <div className="person-info">
                                    <div className="person-photo">
                                    </div>
                                    <div className="person-details">
                                        <h3 className="person-name interface-small" />
                                        <p className="person-title" />
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section>
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
                                        style={{ backgroundColor: "rgb(175,170,249)", color: "", marginRight: "17px" }}
                                    >
                                        <div className="icon">
                                            <img src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/icon-6.svg" alt="" />
                                        </div>
                                        <div className="text">
                                            <h4>Business level data.</h4>
                                        </div>
                                    </div>
                                    <div
                                        className="three-card swiper-slide"
                                        style={{
                                            backgroundColor: "rgb(119,86,255)",
                                            color: "rgb(255,255,255)",
                                            marginRight: "17px"
                                        }}
                                    >
                                        <div className="icon">
                                            <img src={Layer_1_1.src} alt="" />
                                        </div>
                                        <div className="text">
                                            <h4>True scientific incrementality experiments.</h4>
                                        </div>
                                    </div>
                                    <div
                                        className="three-card swiper-slide"
                                        style={{ backgroundColor: "rgb(255,255,255)", color: "", marginRight: "17px" }}
                                    >
                                        <div className="icon">
                                            <img src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/icon-3.svg" alt="" />
                                        </div>
                                        <div className="text">
                                            <h4>Rigorous and ML-enabled media mix modeling.</h4>
                                        </div>
                                    </div>
                                    <div
                                        className="three-card swiper-slide"
                                        style={{
                                            backgroundColor: "rgb(0,0,0)",
                                            color: "rgb(255,255,255)",
                                            marginRight: "17px"

                                        }}
                                    >
                                        <div className="icon">
                                            <img src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/icon8.png" alt="" />
                                        </div>
                                        <div className="text">
                                            <h4>Knowledge of when and how to use platform attribution.</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{" "}
                    <section className="dual-layout-section bg-light pb-0">
                        <div className="container-note-image is-reversed">
                            <div className="note-image fade-up">
                                <img
                                    className="note-image__img"
                                    src={Meeting.src}
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
                    <section className="section-testimonial-full bg-light py-3">
                        <article className="bg-secondary">
                            <div className="intro-twos-columns">
                                <div className="intro-twos-columns__col">
                                    <div className="intro-twos-columns__title">
                                        <span className="badge rounded-pill bg-light" />
                                        <h1>
                                            Power Digital specializes in driving meaningful (and profitable)
                                            growth for our brands.
                                        </h1>
                                    </div>
                                    <div className="intro-twos-columns__text">
                                        <p>
                                            Our dedicated measurement team will not only advise on the
                                            initial framework to best support your marketing efforts, but
                                            will provide ongoing strategy, insights, and recommendations on
                                            how to improve your marketing ROI.
                                        </p>
                                        <p>
                                            And we’ve driven undeniable results across hundreds of clients –
                                            hundreds of millions of dollars saved in wasted ad spend, and
                                            hundreds of dollars of incremental revenue generated.
                                        </p>
                                        <a
                                            href="https://powerdigitalmarketing.com/resources/building-an-effective-omnichannel-strategy-for-consumer-services-brands/"
                                            className="btn btn-dark"
                                        >
                                            <div className="icon">
                                                <span>Learn more about our services</span>
                                                <i className="icon-arrow-up-right" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section>{" "}
                </main>
            </div>

        </>
    )
}

export default MarketingMeasurementIncrementalityPage;