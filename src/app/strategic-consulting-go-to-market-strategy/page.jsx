import Header from '../../components/consumer/header';
import HomeImage from './images/Home.png';
import Clientlogo from '../strategic-consulting/clientlogo';
import Image from 'next/image';

export default function StrategicConsulting() {
    return (
        <>
            <Header />
            <div className="wp-singular page-template page-template-global-template page-template-global-template-php page page-id-7208 wp-theme-pdm-theme">
                <main>
                    <section className="single-hero">
                        <div className="single-hero__text">
                            <span className="badge rounded-pill bg-light">Consulting</span>
                            <div className="title">
                                <h1>Go-to-Market Strategy Consulting</h1>
                            </div>
                            <div className="text">
                                <p>
                                    <span style={{ fontWeight: 400 }}>
                                        We can’t tell you how many brands come to us with excellent
                                        creative, a super smart media plan, and a ton of funding, but
                                        still struggle to grow.
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
                            <div className="single-badge" />
                            <Image src={HomeImage} alt="Strategic Consulting Hero" />
                        </div>
                    </section>
                    <section className="case-study-section bg-light">
                        <div className="case-study-section__content">
                            <div className="item">
                                <div className="tags">
                                    <span className="badge rounded-pill bg-primary">Our Approach</span>
                                </div>
                                <div className="content-text">
                                    <div className="title">
                                        <h2>The most common reason brands struggle to grow?</h2>
                                    </div>
                                    <div className="text content-post">
                                        <p>
                                            They didn’t understand the way that their product produces
                                            differentiated value for their customer. The key two words there
                                            are differentiated and value. They needed to understand:
                                        </p>
                                        <ul>
                                            <li>The larger market and the lay of the land</li>
                                            <li>Who their customer was and what problems they have</li>
                                            <li>How to communicate in a way that’s impactful</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="tags">
                                    <span className="badge rounded-pill bg-primary">Our Framework</span>
                                </div>
                                <div className="content-text">
                                    <div className="title">
                                        <h2>Your comprehensive, data-backed go to market strategy</h2>
                                    </div>
                                    <div className="text content-post">
                                        <p>
                                            If you’re selling the same thing in the same way as a half dozen
                                            other competitors, you have very little chance of being
                                            successful. Or if you’re selling to Selena Gomez and your
                                            customer is actually Dolly Parton, you’re going to burn a ton of
                                            cash on ineffective marketing.
                                        </p>
                                        <p>
                                            <strong>
                                                That’s where a fully fledged, comprehensive, data-backed go to
                                                market strategy comes in.
                                            </strong>
                                        </p>
                                        <ul>
                                            <li>
                                                <strong>A Deep Business Audit</strong>
                                                <br />
                                                We’ll plug your financials, customer file, and marketing data
                                                into nova Intelligence, our proprietary technology platform.
                                                Our expert growth analysts will diagnose your biggest pain
                                                points, assess your unit economics, compare your LTV:CAC ratio
                                                to what’s healthy, and quickly map out the biggest needle
                                                mover metrics.
                                            </li>
                                            <li>
                                                <strong>Customer Insights + Persona</strong>
                                                <br />
                                                From there we’ll compare who you think your customer is to
                                                what it actually is. This isn’t just some subjective
                                                alliterative persona either, it’s actually baked in verified
                                                deterministic data based on their past purchase behavior,
                                                media consumption, and psychographics.
                                            </li>
                                            <li>
                                                <strong>Market Research</strong>
                                                <br />
                                                What are your competitors doing? What’s the overall size of
                                                the business opportunity (revenue size and total addressable
                                                market). Is it mature and commoditized? Is it emerging and
                                                requires category education as well as product education?
                                                We’ll include the watch outs and the low hanging fruit.
                                            </li>
                                            <li>
                                                <strong>Media Plan</strong>
                                                <br />
                                                Knowing your customer, your market, and your unit economics
                                                tees up how to properly spend your marketing dollars. Where to
                                                invest, when, how much, and by what channel and tactic to
                                                generate the best return on your investment.
                                            </li>
                                        </ul>
                                        <p>
                                            And those are just the big categories. Depending on what we find
                                            during our appraisal process, we very well much identify areas
                                            of improvement around your technology stack, your processes and
                                            procedures, customer reviews or sentiment, internal management,
                                            or how you’re measuring your marketing ROI.
                                        </p>
                                        <p>
                                            Get the benefit of working with a “big 4” holding company
                                            without having to pay millions of dollars. And we’re biased, but
                                            we think our product is just as good (if not better).
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Clientlogo />
                </main>
            </div>


        </>
    )
}

