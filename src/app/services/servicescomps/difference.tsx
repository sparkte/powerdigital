"use client"

import { useState } from 'react'

export default function Difference() {
    const [activeCard, setActiveCard] = useState(0)

    const handleCardClick = (cardNumber: number) => {
        setActiveCard(cardNumber)
    }
    return (
        <>
            <section className="bg-light">
                <div className="intro-twos-columns active-columns">
                    <div className="intro-twos-columns__col">
                        <div className="intro-twos-columns__title">
                            <span className="badge rounded-pill bg-dark">OUR DIFFERENCE</span>
                            <h2>We excel at what we do — and the way it’s delivered.</h2>
                        </div>
                        <div className="intro-twos-columns__text">
                            <div className="group-description">
                                <div className="group-description__item">
                                    <h3>Custom digital strategy informed by a powerful appraisal.</h3>
                                    <p>
                                        Your business deserves better than a pre-packaged marketing
                                        strategy.
                                    </p>
                                    <p>
                                        <span style={{ fontWeight: 400 }}>
                                            That’s why the roadmap we plan for you is derived from custom
                                            data on your baseline, goals, and untapped opportunities – all
                                            informed by the free, proprietary appraisal we do before a
                                            contract is ever signed.{" "}
                                        </span>
                                        <span style={{ fontWeight: 400 }}>
                                            We tailor each strategy to your{" "}
                                        </span>
                                        <span style={{ fontWeight: 400 }}>company’s</span>
                                        <span style={{ fontWeight: 400 }}>
                                            {" "}
                                            growth stage, ensuring your{" "}
                                        </span>
                                        <span style={{ fontWeight: 400 }}>
                                            digital marketing campaigns
                                        </span>
                                        <span style={{ fontWeight: 400 }}> align with your </span>
                                        <span style={{ fontWeight: 400 }}>business</span>
                                        <span style={{ fontWeight: 400 }}>
                                            {" "}
                                            goals and audience preferences. From optimizing your{" "}
                                        </span>
                                        <span style={{ fontWeight: 400 }}>website</span>
                                        <span style={{ fontWeight: 400 }}> to launching targeted</span>
                                        <span style={{ fontWeight: 400 }}>
                                            {" "}
                                            social media and email marketing{" "}
                                        </span>
                                        <span style={{ fontWeight: 400 }}>
                                            efforts, we deliver scalable solutions that boost your brand
                                            presence and reduce unnecessary cost.
                                        </span>
                                    </p>
                                </div>
                                <div className="group-description__item">
                                    <h3>Services that dovetail together for your greatest ROI.</h3>
                                    <p>No digital marketing channel is ever siloed.</p>
                                    <p>
                                        <span style={{ fontWeight: 400 }}>
                                            Your Executive Sponsor ensures every team member is looking at
                                            the funnel holistically and rowing in the same direction toward
                                            your{" "}
                                        </span>
                                        <span style={{ fontWeight: 400 }}>brand’s</span>{" "}
                                        <span style={{ fontWeight: 400 }}>growth goals.</span>
                                    </p>
                                </div>
                                <div className="group-description__item">
                                    <h3>
                                        We’re not vendors. We’re consultants, strategists, and partners.
                                    </h3>
                                    <p>
                                        <span style={{ fontWeight: 400 }}>
                                            You get professional digital marketing specialists that are
                                            experts in their niche, including an account manager and an
                                            Executive Sponsor who acts as the team CMO.
                                        </span>
                                    </p>
                                    <p>
                                        <span style={{ fontWeight: 400 }}>
                                            And with an unheard of 98% employee retention rate, your
                                            professional team members are here for the long-haul.
                                        </span>
                                    </p>
                                </div>
                                <div className="group-description__item">
                                    <h3>
                                        See the progress we’re making and what’s driving results, anytime.
                                    </h3>
                                    <p>
                                        <span style={{ fontWeight: 400 }}>
                                            Your custom dashboard takes the data and analytics from every{" "}
                                        </span>
                                        <span style={{ fontWeight: 400 }}>digital </span>
                                        <span style={{ fontWeight: 400 }}>marketing</span>
                                        <span style={{ fontWeight: 400 }}>
                                            {" "}
                                            channel and centralizes it into one easy-to-understand view.
                                        </span>
                                    </p>
                                    <p>
                                        <span style={{ fontWeight: 400 }}>Plus, we keep</span>&nbsp;
                                        <span style={{ fontWeight: 400 }}>our </span>
                                        <span style={{ fontWeight: 400 }}>clients</span>{" "}
                                        <span style={{ fontWeight: 400 }}>
                                            consistently and transparently informed during weekly calls and
                                            monthly meetings.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-feature-showcase">
                    <div className="product-feature-showcase__content">
                        <div className="product-feature-showcase__firts-card">
                            <div className="title">
                                <img
                                    src="https://powerdigitalmarketing.com/wp-content/uploads/2024/10/Layer-1-4.png"
                                    alt=""
                                />
                                <h3>Purpose-built applications leveraging 300M+ data points</h3>
                            </div>
                            <a
                                href="#"
                                className="btn btn-primary"
                            >
                                <div className="icon">
                                    <span>Learn more about nova </span>
                                    <i className="icon-arrow-up-right" />
                                </div>
                            </a>
                        </div>
                        <div className="product-feature-showcase__list">
                            <div
                                className={`product-feature-showcase__card ${activeCard === 1 ? 'active' : ''}`}
                                style={{ zIndex: 5, top: "-10px" }}
                                onClick={() => handleCardClick(1)}
                            >
                                <span className="number">1</span>
                                <div className="text">
                                    <div className="title">
                                        <h3>Customer Cohorts</h3>
                                    </div>
                                    <div className="paragraph">
                                        <p>
                                            <span style={{ fontWeight: 400 }}>
                                                Customers are organized by shared traits such as high LTV,
                                                optimal CAC thresholds, or purchase frequency. This helps
                                                inform the strategic roadmap and ensures your marketing
                                                efforts are tailored to maximize{" "}
                                            </span>
                                            <span style={{ fontWeight: 400 }}>business</span>{" "}
                                            <span style={{ fontWeight: 400 }}>results.</span>
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="btn btn--round btn-sm btn-light stretched-link"
                                >
                                    <div className="icon">
                                        <i className="icon-arrow-up-right" />
                                    </div>
                                </a>
                            </div>
                            <div
                                className={`product-feature-showcase__card ${activeCard === 2 ? 'active' : ''}`}
                                style={{ zIndex: 4, top: "-20px" }}
                                onClick={() => handleCardClick(2)}
                            >
                                <span className="number">2</span>
                                <div className="text">
                                    <div className="title">
                                        <h3>Customer Insights</h3>
                                    </div>
                                    <div className="paragraph">
                                        <p>
                                            <span style={{ fontWeight: 400 }}>
                                                Target your customers with precision using specific data from
                                                your client’s current base. With access to ~280M profiles
                                                across the U.S., covering ~84% of the adult population, you
                                                can optimize creative, targeting, and messaging strategies
                                                effectively.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="btn btn--round btn-sm btn-light stretched-link"
                                >
                                    <div className="icon">
                                        <i className="icon-arrow-up-right" />
                                    </div>
                                </a>
                            </div>
                            <div
                                className={`product-feature-showcase__card ${activeCard === 3 ? 'active' : ''}`}
                                style={{ zIndex: 3, top: "-30px" }}
                                onClick={() => handleCardClick(3)}
                            >
                                <span className="number">3</span>
                                <div className="text">
                                    <div className="title">
                                        <h3>Creative Affinity</h3>
                                    </div>
                                    <div className="paragraph">
                                        <p>
                                            <span style={{ fontWeight: 400 }}>
                                                Leverage our first-of-its-kind technology that connects
                                                customer LTV to ad creative. By combining e-commerce data,
                                                Meta analytics, and intelligence insights, you can quickly
                                                pinpoint which creative is driving profitable growth on
                                                platforms like Meta and TikTok.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="btn btn--round btn-sm btn-light stretched-link"
                                >
                                    <div className="icon">
                                        <i className="icon-arrow-up-right" />
                                    </div>
                                </a>
                            </div>
                            <div
                                className={`product-feature-showcase__card ${activeCard === 4 ? 'active' : ''}`}
                                style={{ zIndex: 2, top: "-40px" }}
                                onClick={() => handleCardClick(4)}
                            >
                                <span className="number">4</span>
                                <div className="text">
                                    <div className="title">
                                        <h3>Forecasts</h3>
                                    </div>
                                    <div className="paragraph">
                                        <p>
                                            <span style={{ fontWeight: 400 }}>
                                                Using your customer data, Power strategy, and unit economics,
                                                nova delivers a 90% accurate revenue forecast. This includes
                                                insights on marketing costs, new customers, CAC, gross
                                                revenue, net income, net margin, and deltas, empowering you to
                                                steer your brand’s future.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="btn btn--round btn-sm btn-light stretched-link"
                                >
                                    <div className="icon">
                                        <i className="icon-arrow-up-right" />
                                    </div>
                                </a>
                            </div>
                            <div
                                className={`product-feature-showcase__card is-odd ${activeCard === 5 ? 'active' : ''}`}
                                style={{ zIndex: 1, top: "-50px" }}
                                onClick={() => handleCardClick(5)}
                            >
                                <span className="number">5</span>
                                <div className="text">
                                    <div className="title">
                                        <h3>Insights AI</h3>
                                    </div>
                                    <div className="paragraph">
                                        <p>
                                            <span style={{ fontWeight: 400 }}>
                                                Insights AI integrates 20+ marketing reports, AI-driven
                                                analytics, and expert data support within the Power Digital
                                                ecosystem. Powered by a top LLM model, it allows you to
                                                interact with your data in real-time, ask marketing questions,
                                                and receive expert-backed recommendations for impactful
                                                business decisions.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="btn btn--round btn-sm btn-light stretched-link"
                                >
                                    <div className="icon">
                                        <i className="icon-arrow-up-right" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
