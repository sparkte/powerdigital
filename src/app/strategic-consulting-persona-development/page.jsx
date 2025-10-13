import Header from '../../components/consumer/header';
import Clientlogo from '../strategic-consulting/clientlogo';


export default function StrategicConsulting() {
    return (
        <>
            <Header />
            <div className="wp-singular page-template page-template-global-template page-template-global-template-php page page-id-7208 wp-theme-pdm-theme">
                <main>


                    <section className="single-hero   ">
                        <div className="single-hero__text">
                            <span className="badge rounded-pill bg-light">Consulting</span>
                            <div className="title">
                                <h1>Persona Development Services</h1>
                            </div>
                            <div className="text">
                                <p>
                                    <strong>
                                        Are you sure you really know who your customer is and what they care
                                        about?
                                    </strong>
                                </p>
                                <p>
                                    We help brands develop a deep, data-driven understanding of who their
                                    customer actually is. This isn’t just a subjective persona based on a
                                    handful of surveys or focus groups. Instead, we analyze your audience
                                    with as much data as is possible to collect on them.
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
                            <img
                                src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Persona-Development.png"
                                alt=""
                            />
                        </div>
                    </section>



                    <section className="case-study-section bg-light">
                        <div className="case-study-section__content">
                            <div className="item">
                                <div className="tags">
                                    <span className="badge rounded-pill bg-primary">What We Do</span>
                                </div>
                                <div className="content-text">
                                    <div className="title">
                                        <h2>Customer + Audience Development</h2>
                                    </div>
                                    <div className="text content-post">
                                        <p>
                                            It’s simple: you connect your customer file to our dataset and we
                                            breakdown a comprehensive ideal customer profile, including:
                                        </p>
                                        <ul>
                                            <li>
                                                <strong>Current Customer vs Opportunity Customer</strong>
                                                <br />
                                                Who are you really selling to today? What’s a cohort of
                                                opportunity that drives a significantly higher lifetime value, but
                                                you haven’t quite cracked into yet? Why not? How can we get there?
                                            </li>
                                            <li>
                                                <strong>Cohorts, Segmentation, and Lifetime Value</strong>
                                                <br />
                                                There’s only two ways to make money: more customers, or more
                                                valuable customers. We help you understand where your biggest
                                                opportunity is on either side of the equation (acquisition or
                                                value).
                                            </li>
                                            <li>
                                                <strong>Fully Detailed Profile</strong>
                                                <br />
                                                We break down not only your “typical” customer’s demographics
                                                (age, gender, location) but also their behaviors, psychographics,
                                                interests, shopping patterns, and other traits that produce more
                                                or less value.
                                            </li>
                                            <li>
                                                <strong>Product View</strong>
                                                <br />A look at your best selling products, what products are most
                                                likely to yield more valuable customers, and a margin centric view
                                                of which products are great supplements to round out a multi-unit
                                                upsell strategy.
                                            </li>
                                            <li>
                                                <strong>Brand and Social Listening</strong>
                                                <br />
                                                To ensure we have a full picture of the market and your customer,
                                                we also engage in{" "}
                                                <a href="https://fusepointinsights.com/service/customer-and-audience/">
                                                    customer research
                                                </a>
                                                , surveys, social listening, review aggregation, and brand metrics
                                                to uncover any blind spots you might’ve missed.
                                            </li>
                                        </ul>
                                        <p>
                                            The better a brand understands their customers, the better they’re
                                            able to develop products that bring differentiated value to those
                                            customers. In other words – it’s a lot easier to sell to your best
                                            friend than it is to a stranger. We’ll help you get there.
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

