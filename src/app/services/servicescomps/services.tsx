"use client"

import { useState } from 'react';

export default function Services() {
    const [growthMarketingTab, setGrowthMarketingTab] = useState(0);
    const [dataIntelligenceTab, setDataIntelligenceTab] = useState(0);
    const [consultingTab, setConsultingTab] = useState(0);
    const [creativeTab, setCreativeTab] = useState(0);
    return (
        <>
            <section className="services-overview-tags bg-light">
                <div className="intro-twos-columns">
                    <div className="intro-twos-columns__col">
                        <div className="intro-twos-columns__title">
                            <h2>Our Services</h2>
                        </div>
                        <div className="intro-twos-columns__text">
                            <p>
                                <span style={{ fontWeight: 400 }}>
                                    Our comprehensive services deliver measurable results, igniting
                                    every stage of the customer journey. It’s time to experience the
                                    kind of impact your business can’t afford to miss.
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
                                <h3>Growth Marketing</h3>
                            </div>
                            <div className="text__description">
                                <p>
                                    <span style={{ fontWeight: 400 }}>
                                        Power is your go-to for data-driven strategies and creative
                                        experimentation to acquire, engage, and retain the right
                                        customers. We’re experts at optimization, as well as lead testing
                                        and measurement that ultimately leads to extending customer
                                        lifetime value and sales.
                                    </span>
                                </p>
                            </div>
                            <div className="content-tab" style={{ display: 'block', minHeight: '50px' }}>
                                <div className="description">
                                    {growthMarketingTab === 0 && (
                                        <p>
                                            <span style={{ fontWeight: 400 }}>Capture high-intent </span>
                                            <span style={{ fontWeight: 400 }}>digital</span>
                                            <span style={{ fontWeight: 400 }}>
                                                {" "}
                                                traffic while eliminating wasted ad spend.
                                            </span>
                                        </p>
                                    )}
                                    {growthMarketingTab === 1 && (
                                        <p>
                                            Optimize marketing with advanced mix modeling and expert data
                                            science.
                                        </p>
                                    )}
                                    {growthMarketingTab === 2 && (
                                        <p>
                                            Reach &amp; convert vast new audiences with the power of social
                                            media.
                                        </p>
                                    )}
                                    {growthMarketingTab === 3 && (
                                        <p>
                                            Discover full-service TikTok strategies with incremental results.
                                        </p>
                                    )}
                                    {growthMarketingTab === 4 && (
                                        <p>Increase awareness with features on top-tier media outlets.</p>
                                    )}
                                    {growthMarketingTab === 5 && (
                                        <p>
                                            Leverage the reach and credibility of your audience&#39;s role models.
                                        </p>
                                    )}
                                    {growthMarketingTab === 6 && (
                                        <p>
                                            Expand market share with strategic brand and celebrity campaigns.
                                        </p>
                                    )}
                                    {growthMarketingTab === 7 && (
                                        <p>
                                            Grow organic traffic where users look to learn, research, &amp;
                                            buy.
                                        </p>
                                    )}
                                    {growthMarketingTab === 8 && (
                                        <p>Retain customers and expand LTV with lifecycle marketing.</p>
                                    )}
                                    {growthMarketingTab === 9 && (
                                        <p>
                                            Inform, engage, and convert at every stage of the customer
                                            journey.
                                        </p>
                                    )}
                                    {growthMarketingTab === 10 && (
                                        <p>
                                            Build authentic connections with your audience through social
                                            media marketing
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="column-tags">
                            <div className="title">
                                <span className="number-index">01</span>
                                <h3>Growth Marketing</h3>
                            </div>
                            <ul className="services-overview__list">
                                <li>
                                    <a 
                                        href="" 
                                        className={`badge rounded-pill shadowed-hover ${growthMarketingTab === 0 ? 'active' : ''}`}
                                        onMouseEnter={() => setGrowthMarketingTab(0)}
                                    >
                                        Paid Search
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=" /services/programmatic-advertising-agency/"
                                        className={`badge rounded-pill shadowed-hover ${growthMarketingTab === 1 ? 'active' : ''}`}
                                        onMouseEnter={() => setGrowthMarketingTab(1)}
                                    >
                                        Programmatic
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=" /services/paid-social-media/"
                                        className={`badge rounded-pill shadowed-hover ${growthMarketingTab === 2 ? 'active' : ''}`}
                                        onMouseEnter={() => setGrowthMarketingTab(2)}
                                    >
                                        Paid Social
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=" /services/tiktok/"
                                        className={`badge rounded-pill shadowed-hover ${growthMarketingTab === 3 ? 'active' : ''}`}
                                        onMouseEnter={() => setGrowthMarketingTab(3)}
                                    >
                                        TikTok
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=" /services/public-relations/"
                                        className={`badge rounded-pill shadowed-hover ${growthMarketingTab === 4 ? 'active' : ''}`}
                                        onMouseEnter={() => setGrowthMarketingTab(4)}
                                    >
                                        Public Relations
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=" /services/influencer-marketing/"
                                        className={`badge rounded-pill shadowed-hover ${growthMarketingTab === 5 ? 'active' : ''}`}
                                        onMouseEnter={() => setGrowthMarketingTab(5)}
                                    >
                                        Influencer
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="" 
                                        className={`badge rounded-pill shadowed-hover ${growthMarketingTab === 6 ? 'active' : ''}`}
                                        onMouseEnter={() => setGrowthMarketingTab(6)}
                                    >
                                        Brand Partnerships
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=" /services/seo/"
                                        className={`badge rounded-pill shadowed-hover ${growthMarketingTab === 7 ? 'active' : ''}`}
                                        onMouseEnter={() => setGrowthMarketingTab(7)}
                                    >
                                        SEO
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=" /services/email-marketing/"
                                        className={`badge rounded-pill shadowed-hover ${growthMarketingTab === 8 ? 'active' : ''}`}
                                        onMouseEnter={() => setGrowthMarketingTab(8)}
                                    >
                                        Email and SMS
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=" /services/content-marketing/"
                                        className={`badge rounded-pill shadowed-hover ${growthMarketingTab === 9 ? 'active' : ''}`}
                                        onMouseEnter={() => setGrowthMarketingTab(9)}
                                    >
                                        Content Marketing
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=" /services/organic-social-media/"
                                        className={`badge rounded-pill shadowed-hover ${growthMarketingTab === 10 ? 'active' : ''}`}
                                        onMouseEnter={() => setGrowthMarketingTab(10)}
                                    >
                                        Social
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="services-list">
                        <div className="text">
                            <div className="title">
                                <span className="number-index">02</span>
                                <h3>Data Intelligence</h3>
                            </div>
                            <div className="text__description">
                                <p>
                                    <span style={{ fontWeight: 400 }}>
                                        Strategically leverage data to drive informed marketing decisions
                                        and optimize outcomes. By gathering, analyzing, and applying
                                        insights, we ensure that every campaign is not only creative but
                                        also grounded in analytics that predict and enhance{" "}
                                    </span>
                                    <span style={{ fontWeight: 400 }}>business</span>{" "}
                                    <span style={{ fontWeight: 400 }}>performance.</span>
                                </p>
                            </div>
                            <div className="content-tab" style={{ display: 'block', minHeight: '50px' }}>
                                <div className="description">
                                    {dataIntelligenceTab === 0 && (
                                        <p>
                                            Save millions on ad spend with proven marketing measurement and
                                            incrementality.
                                        </p>
                                    )}
                                    {dataIntelligenceTab === 1 && (
                                        <p>
                                            Optimize marketing with advanced mix modeling and expert data
                                            science.
                                        </p>
                                    )}
                                    {dataIntelligenceTab === 2 && (
                                        <p>
                                            Build a modern data stack to simplify management, ensure data
                                            quality, and drive smart decisions.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="column-tags">
                            <div className="title">
                                <span className="number-index">02</span>
                                <h3>Data Intelligence</h3>
                            </div>
                            <ul className="services-overview__list">
                                <li>
                                    <a
                                        href=" /marketing-measurement-incrementality/"
                                        className={`badge rounded-pill shadowed-hover ${dataIntelligenceTab === 0 ? 'active' : ''}`}
                                        onMouseEnter={() => setDataIntelligenceTab(0)}
                                    >
                                        Marketing Measurement + Incrementality
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=" /marketing-mix-modeling-data-science/"
                                        className={`badge rounded-pill shadowed-hover ${dataIntelligenceTab === 1 ? 'active' : ''}`}
                                        onMouseEnter={() => setDataIntelligenceTab(1)}
                                    >
                                        Marketing Mix Modeling + Data Science
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=" /data-infraestructure-cdps/"
                                        className={`badge rounded-pill shadowed-hover ${dataIntelligenceTab === 2 ? 'active' : ''}`}
                                        onMouseEnter={() => setDataIntelligenceTab(2)}
                                    >
                                        Data Infrastructures + CDPs
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="services-list">
                        <div className="text">
                            <div className="title">
                                <span className="number-index">03</span>
                                <h3>Consulting</h3>
                            </div>
                            <div className="text__description">
                                <p>
                                    <span style={{ fontWeight: 400 }}>
                                        Supercharge your business with consulting that doesn’t just
                                        analyze — it transforms. Leveraging our nova Intelligence
                                        technology, we’ll dive deep into&nbsp;{" "}
                                    </span>
                                    <span style={{ fontWeight: 400 }}>client’s</span>&nbsp;
                                    <span style={{ fontWeight: 400 }}>
                                        metrics to craft bespoke strategies that ensure your growth isn’t
                                        just a goal, it’s a given.
                                    </span>
                                </p>
                            </div>
                            <div className="content-tab" style={{ display: 'block', minHeight: '50px' }}>
                                <div className="description">
                                    {consultingTab === 0 && (
                                        <p>
                                            <span style={{ fontWeight: 400 }}>Unlock </span>
                                            <span style={{ fontWeight: 400 }}>brand</span>{" "}
                                            <span style={{ fontWeight: 400 }}>
                                                growth with a comprehensive, data-driven GTM digital strategy.
                                            </span>
                                        </p>
                                    )}
                                    {consultingTab === 1 && (
                                        <p>
                                            Optimize ad spend with comprehensive media planning and
                                            data-driven forecasting.
                                        </p>
                                    )}
                                    {consultingTab === 2 && (
                                        <p>
                                            Develop a data-driven ideal customer profile to enhance product
                                            and marketing strategies.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="column-tags">
                            <div className="title">
                                <span className="number-index">03</span>
                                <h3>Consulting</h3>
                            </div>
                            <ul className="services-overview__list">
                                <li>
                                    <a
                                        href=" /strategic-consulting-go-to-market-strategy/"
                                        className={`badge rounded-pill shadowed-hover ${consultingTab === 0 ? 'active' : ''}`}
                                        onMouseEnter={() => setConsultingTab(0)}
                                    >
                                        Full Go To Market Strategy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=" /strategic-consulting-media-planning-forecasting/"
                                        className={`badge rounded-pill shadowed-hover ${consultingTab === 1 ? 'active' : ''}`}
                                        onMouseEnter={() => setConsultingTab(1)}
                                    >
                                        Media Planning/Scenarios
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=" /strategic-consulting-persona-development/"
                                        className={`badge rounded-pill shadowed-hover ${consultingTab === 2 ? 'active' : ''}`}
                                        onMouseEnter={() => setConsultingTab(2)}
                                    >
                                        Persona Development
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="services-list">
                        <div className="text">
                            <div className="title">
                                <span className="number-index">04</span>
                                <h3>Creative</h3>
                            </div>
                            <div className="text__description">
                                <p>
                                    <span style={{ fontWeight: 400 }}>
                                        We see every touchpoint as a customer experience. From cohesive
                                        branding and standout social media ads to conversion-focused{" "}
                                    </span>
                                    <span style={{ fontWeight: 400 }}>website</span>{" "}
                                    <span style={{ fontWeight: 400 }}>
                                        landing pages, our digital marketing campaigns are designed to
                                        captivate and convert.
                                    </span>
                                </p>
                            </div>
                            <div className="content-tab" style={{ display: 'block', minHeight: '50px' }}>
                                <div className="description">
                                    {creativeTab === 0 && (
                                        <p>
                                            <span style={{ fontWeight: 400 }}>
                                                Transform brand strategy into performance-driven digital
                                                marketing campaigns with our creative expertise.
                                            </span>
                                        </p>
                                    )}
                                    {creativeTab === 1 && (
                                        <p>
                                            <span style={{ fontWeight: 400 }}>
                                                Our creative work isn&#39;t just beautiful—it&#39;s built to perform.
                                                Every{" "}
                                            </span>
                                            <span style={{ fontWeight: 400 }}>campaign</span>
                                            <span style={{ fontWeight: 400 }}>
                                                {" "}
                                                is designed to capture attention, drive engagement, and increase{" "}
                                            </span>
                                            <span style={{ fontWeight: 400 }}>communication</span>
                                            <span style={{ fontWeight: 400 }}> with your </span>
                                            <span style={{ fontWeight: 400 }}>audience</span>
                                            <span style={{ fontWeight: 400 }}>
                                                {" "}
                                                across all digital channels.
                                            </span>
                                        </p>
                                    )}
                                    {creativeTab === 2 && (
                                        <p>
                                            <span style={{ fontWeight: 400 }}>Whether it&#39;s a </span>
                                            <span style={{ fontWeight: 400 }}>social media </span>
                                            <span style={{ fontWeight: 400 }}>
                                                ad, a branded email marketing campaign, or a cost-effective
                                                display ad, we create content that fuels{" "}
                                            </span>
                                            <span style={{ fontWeight: 400 }}>business</span>
                                            <span style={{ fontWeight: 400 }}>
                                                {" "}
                                                growth and brand loyalty.
                                            </span>
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="column-tags">
                            <div className="title">
                                <span className="number-index">04</span>
                                <h3>Creative</h3>
                            </div>
                            <ul className="services-overview__list">
                                <li>
                                    <a
                                        href=" /services/creative-services-strategy/"
                                        className={`badge rounded-pill shadowed-hover ${creativeTab === 0 ? 'active' : ''}`}
                                        onMouseEnter={() => setCreativeTab(0)}
                                    >
                                        Creative Strategy
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="" 
                                        className={`badge rounded-pill shadowed-hover ${creativeTab === 1 ? 'active' : ''}`}
                                        onMouseEnter={() => setCreativeTab(1)}
                                    >
                                        Graphic Design
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="" 
                                        className={`badge rounded-pill shadowed-hover ${creativeTab === 2 ? 'active' : ''}`}
                                        onMouseEnter={() => setCreativeTab(2)}
                                    >
                                        Production
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </ul>
            </section>

        </>
    )
}
