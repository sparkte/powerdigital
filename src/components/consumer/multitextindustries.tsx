import React from 'react'
import Image from 'next/image'
import pepdmimage from '../../images/pe_pdm_image-768x430.png'
import education from '../../images/Education-768x768.jpg'
import homeservices from '../../images/0_2-2-768x768.jpg'
import healthcare from '../../images/0_1-1-768x768.jpg'
import Cardslider from '../../app/services/maincomonents/cardslider';

const CardSliderData = [
    {
        id: "media-relations",
        title: "Media Relations",
        description: "We know how to tell your story to maximize impact and build lasting buzz.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Event-Opportunities-768x768.jpg",
        imageAlt: "Media Relations",
        bgColor: "bg-white" as const,
        actionUrl: "#"
    },
    {
        id: "campaigns-activations",
        title: "Campaigns + Activations",
        description: "Showstopping stunts, memorable IRL activations , and other viral moments that will get people talking about your brand.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Possible-Story-Angles-768x768.jpg",
        imageAlt: "Campaigns + Activations",
        bgColor: "bg-secondary" as const,
        actionUrl: "#"
    },
    {
        id: "thought-leadership",
        title: "Thought Leadership",
        description: "Elevate your brand's reputation and executive visibility with impactful interviews, speaking opportunities, op-eds, and more.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Best-Media-Matches1-768x768.jpg",
        imageAlt: "Thought Leadership",
        bgColor: "bg-primary" as const,
        actionUrl: "#"
    },
    {
        id: "partnerships",
        title: "Partnerships",
        description: "Facilitate creative, strategic partnership campaigns that cross categories, increase brand awareness, reach new audiences, expand marketing resources, and so much more.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2025/01/0_1-2-768x768.jpg",
        imageAlt: "Partnerships",
        bgColor: "bg-white" as const,
        actionUrl: "#"
    },
    {
        id: "award-submissions",
        title: "Award Submissions",
        description: "Our team is always keeping a pulse on the best awards for our clients to submit for in order to build recognition and credibility",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Display-and-Native-768x768.jpg",
        imageAlt: "Award Submissions",
        bgColor: "bg-secondary" as const,
        actionUrl: "#"
    },
    {
        id: "affiliate-marketing",
        title: "Affiliate Marketing",
        description: "A combined effort between PR and Affiliate on a strategic top-of-funnel performance PR approach allows our clients to be considered for all consumer media opportunities.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2025/01/0_3-5-768x768.jpg",
        imageAlt: "Affiliate Marketing",
        bgColor: "bg-primary" as const,
        actionUrl: "#"
    },
    {
        id: "corporate-crisis-communications",
        title: "Corporate + Crisis Communications",
        description: "Strategic counsel and messaging support to guide your company through its biggest (and toughest) moments.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/12/0_2-1-768x768.jpg",
        imageAlt: "Corporate + Crisis Communications",
        bgColor: "bg-white" as const,
        actionUrl: "#"
    }
];


export default function multitextindustries() {
  return (
     <section className="multi-text-section bg-light">
          <div className="multi-text-section__text">
            <div className="title">
              <span className="badge rounded-pill bg-dark">Industries</span>
              <h2>
                From our talent to our tech, this is new wave digital marketing.
              </h2>
            </div>
            <div className="paragraph">
              <a
                href="https://powerdigitalmarketing.com/company/"
                className="btn btn-secondary"
              >
                <div className="icon">
                  <span>Learn more about our company</span>
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </div>
          {/* Si hay menos de 5 items, se muestran todos en una sola fila */}
          <div className="multi-text-section__items-text">
            <div className="multi-text-section__row">
              <div className="item">
                <div className="text">
                  <h3>Undeniable Speed</h3>
                  <p>
                    Everyone has capabilities, but coupling them with agility is the
                    holy grail of growth marketing. We dive into the numbers to see
                    what tactics are creating incremental or new revenue and which
                    ones aren’t then we swiftly adapt and execute.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="text">
                  <h3>Undeniable Expertise</h3>
                  <p>
                    Our team boasts some of the brightest minds in the world of
                    digital and performance marketing, and everyone here is
                    lockstep-focused on business impact  evidenced by a stellar 96+
                    % client retention rate. Expect nothing less than best-in-class.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="text">
                  <h3>Undeniable Results</h3>
                  <p>
                    We’re driven by the outcomes, not ego. Perhaps that’s why we
                    grow companies 2.6x faster than the industry average, with 27+ %
                    YoY revenue increases. All of our critical capabilities
                    prioritize optimizing our clients’ investments for maximum ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Cardslider data={CardSliderData} />
          {/* <div className="digital-marketing-overview__carousel ">
            <span className="badge rounded-pill mt-5 bg-light" />
            <div className="slider">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide swiper-slide--manual_services_cards">
                    <article className="card-slider bg-white">
                      <div className="card-slider__image">
                        <img src={pepdmimage.src} alt="Finance" />
                      </div>
                      <div className="card-slider__content">
                        <h3 className="title">Finance</h3>
                        <div className="paragraph">
                          <p>
                            We understand that your services must not only deliver
                            value but also inspire confidence in an increasingly
                            skeptical market. Our team understands your unique
                            compliance requirements and activates thoughtful
                            strategies to increase both acquisition and customer
                            value.
                          </p>
                        </div>
                      </div>
                      <div className="card-slider__action">
                        <a
                          href="https://powerdigitalmarketing.com/industries/finance/"
                          className="btn btn--round btn-light stretched-link"
                        >
                          <div className="icon">
                            <i className="icon-arrow-up-right" />
                          </div>
                        </a>
                      </div>
                    </article>
                  </div>
                  <div className="swiper-slide swiper-slide--manual_services_cards">
                    <article className="card-slider bg-secondary">
                      <div className="card-slider__image">
                        <img src={education.src} alt="Education" />
                      </div>
                      <div className="card-slider__content">
                        <h3 className="title">Education</h3>
                        <div className="paragraph">
                          <p>
                            Our marketing strategies are designed to increase your
                            visibility to qualified applicants. We focus on
                            showcasing your institutions values, innovation, and
                            real-world benefits, ensuring that your message reaches
                            the right audience and you have the results to show for
                            it.
                          </p>
                        </div>
                      </div>
                      <div className="card-slider__action">
                        <a
                          href="https://powerdigitalmarketing.com/industries/education/"
                          className="btn btn--round btn-light stretched-link"
                        >
                          <div className="icon">
                            <i className="icon-arrow-up-right" />
                          </div>
                        </a>
                      </div>
                    </article>
                  </div>
                  <div className="swiper-slide swiper-slide--manual_services_cards">
                    <article className="card-slider bg-primary">
                      <div className="card-slider__image">
                        <img src={homeservices.src} alt="Home Services" />
                      </div>
                      <div className="card-slider__content">
                        <h3 className="title">Home Services</h3>
                        <div className="paragraph">
                          <p>
                            he home services industry is all about trust,
                            reliability, and convenience. We help you stand out in a
                            competitive market by increasing reach, improving data
                            visibility to inform strategy, and aligning both
                            franchise goals &amp; operational efficiency.
                          </p>
                        </div>
                      </div>
                      <div className="card-slider__action">
                        <a
                          href="https://powerdigitalmarketing.com/industries/home-services/"
                          className="btn btn--round btn-light stretched-link"
                        >
                          <div className="icon">
                            <i className="icon-arrow-up-right" />
                          </div>
                        </a>
                      </div>
                    </article>
                  </div>
                  <div className="swiper-slide swiper-slide--manual_services_cards">
                    <article className="card-slider bg-white">
                      <div className="card-slider__image">
                        <img src={healthcare.src} alt="Health Care" />
                      </div>
                      <div className="card-slider__content">
                        <h3 className="title">Health Care</h3>
                        <div className="paragraph">
                          <p>
                            Our strategies are tailored to communicate your
                            commitment to quality care, patient safety, and ethical
                            practices, ensuring that your marketing efforts are both
                            compliant and impactful. We help you build a brand that
                            inspires trust and confidence in an industry where
                            credibility is everything.
                          </p>
                        </div>
                      </div>
                      <div className="card-slider__action">
                        <a
                          href="https://powerdigitalmarketing.com/industries/health-care/"
                          className="btn btn--round btn-light stretched-link"
                        >
                          <div className="icon">
                            <i className="icon-arrow-up-right" />
                          </div>
                        </a>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="swiper-scrollbar">
                  <div className="letters">
                    <span>A</span>
                    <span>Z</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </section>
  )
}
