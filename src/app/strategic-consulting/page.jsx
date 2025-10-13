"use client"

import Header from '../../components/consumer/header';
import Image from 'next/image';
import HomeImage from './images/Home.png';
import Clientlogo from './clientlogo';
import { useState } from 'react';

export default function StrategicConsulting() {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <>
            <Header />
            <div className="wp-singular page-template page-template-global-template page-template-global-template-php page page-id-7207 wp-theme-pdm-theme">
                <main>
                    <section className="single-hero   ">
                        <div className="single-hero__text">
                            <span className="badge rounded-pill bg-light" />
                            <div className="title">
                                <h1>
                                    <span>Digital Marketing Consultancy: The Future Is Here</span>
                                </h1>
                            </div>
                            <div className="text">
                                <p>
                                    <span style={{ fontWeight: 400 }}>
                                        <strong>
                                            We consult hundreds of brands on their business fundamentals:
                                            product, customer, and market.
                                        </strong>
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontWeight: 400 }}>
                                        The best executed marketing program doesn’t amount to much if it’s
                                        disconnected from a larger business strategy.&nbsp;{" "}
                                    </span>
                                </p>
                            </div>
                            <a
                                href="https://powerdigitalmarketing.com/work-with-us/"
                                className="btn btn-secondary"
                            >
                                <div className="icon">
                                    <span>Request a Consultation</span>
                                    <i className="icon-arrow-up-right" />
                                </div>
                            </a>
                        </div>
                        <div className="single-hero__image">
                            <div className="single-badge"></div>
                            <Image src={HomeImage} alt="Strategic Consulting Hero" />
                        </div>
                    </section>{" "}
                    <section className="case-study-section bg-light">
                        <div className="case-study-section__content">
                            <div className="item">
                                <div className="tags">
                                    <span className="badge rounded-pill bg-primary">Our Framework</span>
                                </div>
                                <div className="content-text">
                                    <div className="title">
                                        <h2>After thousands of business appraisals...</h2>
                                    </div>
                                    <div className="text content-post">
                                        <p>
                                            After thousands of business appraisals (for operators and
                                            private equity firms) we’ve determined a framework that is most
                                            likely to achieve the results you want for your business.
                                        </p>
                                        <ul>
                                            <li>Deeply understand your customer</li>
                                            <li>Develop an actually valuable product</li>
                                            <li>Clearly communicate that value</li>
                                            <li>In a way that connects with your customer</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="tags">
                                    <span className="badge rounded-pill bg-primary">What We Do</span>
                                </div>
                                <div className="content-text">
                                    <div className="title">
                                        <h2>We help clients grow an average of 24% year over year. </h2>
                                    </div>
                                    <div className="text content-post">
                                        <p>
                                            We help growing brands follow this framework by constructing
                                            their go to market strategy, creating a media plan, and building
                                            a data-driven understanding of their customer. This method has
                                            helped our clients grow an average of 24% year over year.
                                        </p>
                                        <p>�</p>
                                        <p>
                                            Strategy is the way that a company produces differentiated
                                            value.
                                            <br />
                                            <strong> Alex MH Smith</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{" "}
                    <section className="services-overview-tags bg-light">
                        <div className="intro-twos-columns">
                            <div className="intro-twos-columns__col">
                                <div className="intro-twos-columns__title">
                                    <h2>Our Services</h2>
                                </div>
                                <div className="intro-twos-columns__text">
                                    <p>
                                        <span style={{ fontWeight: 400 }}>
                                            Transform your business with consulting that delivers. Powered
                                            by nova Intelligence, we don’t just analyze your metrics — we
                                            turn them into growth.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <ul className="services-overview-tags__list">
                            <div className="services-list">
                                <div className="text">
                                    <div className="title">
                                        <span className="number-index">01</span>
                                        <h2>Consulting</h2>
                                    </div>
                                    <div className="text__description">
                                        <p>
                                            Supercharge your business with{" "}
                                            <a href="https://fusepointinsights.com/service/measurement/">
                                                marketing performance consulting
                                            </a>{" "}
                                            that doesn’t just analyze — it transforms. Leveraging our nova
                                            Intelligence technology, we’ll dive deep into the metrics to
                                            craft bespoke strategies that ensure your growth isn’t just a
                                            goal, it’s a given.
                                        </p>
                                    </div>
                                    <div className="content-tab" style={{ display: 'block', minHeight: '50px' }}>
                                        <div className="description">
                                            {activeTab === 0 && (
                                                <p>
                                                    <span style={{ fontWeight: 400 }}>
                                                        Unlock growth with a comprehensive, data-driven{" "}
                                                    </span>
                                                    <span style={{ fontWeight: 400 }}>GTM </span>
                                                    <span style={{ fontWeight: 400 }}>digital</span>
                                                    <span style={{ fontWeight: 400 }}> strategy</span>
                                                    <span style={{ fontWeight: 400 }}>.</span>
                                                </p>
                                            )}
                                            {activeTab === 1 && (
                                                <p>
                                                    <span style={{ fontWeight: 400 }}>
                                                        Optimize ad spend with comprehensive media planning and
                                                        data-driven forecasting.
                                                    </span>
                                                </p>
                                            )}
                                            {activeTab === 2 && (
                                                <p>
                                                    <span style={{ fontWeight: 400 }}>
                                                        Develop a data-driven ideal customer profile to enhance
                                                        product and marketing strategies.
                                                    </span>
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="column-tags">
                                    <div className="title">
                                        <span className="number-index">01</span>
                                        <h2>Consulting</h2>
                                    </div>
                                    <ul className="services-overview__list">
                                        <li>
                                            <a
                                                href="https://powerdigitalmarketing.com/strategic-consulting-go-to-market-strategy/"
                                                className={`badge rounded-pill shadowed-hover ${activeTab === 0 ? 'active' : ''}`}
                                                onMouseEnter={() => setActiveTab(0)}
                                            >
                                                Full Go To Market Strategy
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://powerdigitalmarketing.com/strategic-consulting-media-planning-forecasting/"
                                                className={`badge rounded-pill shadowed-hover ${activeTab === 1 ? 'active' : ''}`}
                                                onMouseEnter={() => setActiveTab(1)}
                                            >
                                                Media Planning/Scenarios
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://powerdigitalmarketing.com/strategic-consulting-persona-development/"
                                                className={`badge rounded-pill shadowed-hover ${activeTab === 2 ? 'active' : ''}`}
                                                onMouseEnter={() => setActiveTab(2)}
                                            >
                                                Persona Development
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </ul>
                    </section>{" "}
                    <Clientlogo />
                </main>
            </div>

        </>
    )
}

