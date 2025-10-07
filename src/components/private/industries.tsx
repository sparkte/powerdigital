import React from 'react'
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

export default function industries() {
  return (
    <>
    <section className="multi-text-section bg-light">
      <div className="multi-text-section__text">
        <div className="title">
          <span className="badge rounded-pill bg-white">Industries</span>
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
                <article className="card-slider bg-primary">
                  <div className="card-slider__image">
                    <img src="images/pe_pdm_image-768x430.png" alt="Finance" />
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
                    <img src="images/Education-768x768.jpg" alt="Education" />
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
                <article className="card-slider bg-white">
                  <div className="card-slider__image">
                    <img src="images/0_2-2-768x768.jpg" alt="Home Services" />
                  </div>
                  <div className="card-slider__content">
                    <h3 className="title">Home Services</h3>
                    <div className="paragraph">
                      <p>
                        The home services industry is all about trust,
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
                <article className="card-slider bg-primary">
                  <div className="card-slider__image">
                    <img src="images/0_1-1-768x768.jpg" alt="Health Care" />
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
              <div className="swiper-slide swiper-slide--manual_services_cards">
                <article className="card-slider bg-secondary">
                  <div className="card-slider__image">
                    <img
                      src="images/beauty_pdm_image-768x430.png"
                      alt="Beauty & Personal Care"
                    />
                  </div>
                  <div className="card-slider__content">
                    <h3 className="title">Beauty &amp; Personal Care</h3>
                    <div className="paragraph">
                      <p>
                        We understand that your brand needs to not only keep up
                        but lead the conversation. Our team is trained to
                        highlight the unique qualities of your products, from
                        ingredient transparency to sustainable packaging,
                        ensuring campaigns resonate with the right audience for
                        long term success.
                      </p>
                    </div>
                  </div>
                  <div className="card-slider__action">
                    <a
                      href="https://powerdigitalmarketing.com/industries/beauty/"
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
                    <img
                      src="images/fashion_pdm_image-768x430.png"
                      alt="Fashion & Apparel"
                    />
                  </div>
                  <div className="card-slider__content">
                    <h3 className="title">Fashion &amp; Apparel</h3>
                    <div className="paragraph">
                      <p>
                        In this fast-paced industry, staying ahead of trends
                        while maintaining brand integrity is crucial. Our
                        dedicated fashion division keeps your business goals at
                        the forefront while delivering a wealth of industry
                        knowledge.
                      </p>
                    </div>
                  </div>
                  <div className="card-slider__action">
                    <a
                      href="https://powerdigitalmarketing.com/industries/fashion/"
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
                    <img
                      src="images/0_3-5-768x768.jpg"
                      alt="Health and Wellness"
                    />
                  </div>
                  <div className="card-slider__content">
                    <h3 className="title">Health and Wellness</h3>
                    <div className="paragraph">
                      <p>
                        Health and wellness is a lifestyle, not just a product
                        category. We understand that consumers in this space are
                        looking for solutions that align with their values to
                        enhance their overall well-being. Our team is well
                        versed in both the education and compliance required to
                        drive success.  
                      </p>
                    </div>
                  </div>
                  <div className="card-slider__action">
                    <a
                      href="https://powerdigitalmarketing.com/industries/health-and-wellness/"
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
                    <img
                      src="images/food-and-beverage_pdm_image-768x430.png"
                      alt="Food & Beverage"
                    />
                  </div>
                  <div className="card-slider__content">
                    <h3 className="title">Food &amp; Beverage</h3>
                    <div className="paragraph">
                      <p>
                        In the food &amp; beverage industry, taste is just the
                        beginning. From elevating your D2C strategy to
                        connecting the dots on omni-channel, we understand the
                        nuances required to ensure your brand remains top of
                        mind with your target audience.
                      </p>
                    </div>
                  </div>
                  <div className="card-slider__action">
                    <a
                      href="https://powerdigitalmarketing.com/industries/food-beverage/"
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
                    <img src="images/Pet-768x768.jpg" alt="Pet Products" />
                  </div>
                  <div className="card-slider__content">
                    <h3 className="title">Pet Products</h3>
                    <div className="paragraph">
                      <p>
                        Pet owners are more than just customers—they’re
                        passionate advocates for their furry family members.
                        Whether it’s through educational content,
                        community-building initiatives, or targeted campaigns,
                        we help you build a brand that pet owners trust and
                        continue to return to.
                      </p>
                    </div>
                  </div>
                  <div className="card-slider__action">
                    <a
                      href="https://powerdigitalmarketing.com/industries/pet-products/"
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
                    <img
                      src="images/0_0-1-768x768.jpg"
                      alt="Technology & Software"
                    />
                  </div>
                  <div className="card-slider__content">
                    <h3 className="title">Technology &amp; Software</h3>
                    <div className="paragraph">
                      <p>
                        We specialize in crafting marketing strategies that not
                        only highlight your innovative solutions but also
                        provide the compelling case studies, product demos, and
                        webinars that convert leads into loyal customers.
                      </p>
                    </div>
                  </div>
                  <div className="card-slider__action">
                    <a
                      href="https://powerdigitalmarketing.com/industries/technology-and-software/"
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
                    <img
                      src="images/Best-Media-Matches-768x768.jpg"
                      alt="Professional Services"
                    />
                  </div>
                  <div className="card-slider__content">
                    <h3 className="title">Professional Services</h3>
                    <div className="paragraph">
                      <p>
                        Our recommendations are designed to position your firm
                        as the go-to expert in your field, leveraging targeted
                        campaigns that speak directly to the unique needs of
                        your industry. We help you build and maintain the
                        credibility that drives long-term success.
                      </p>
                    </div>
                  </div>
                  <div className="card-slider__action">
                    <a
                      href="https://powerdigitalmarketing.com/industries/professional-services/"
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
                    <img
                      src="images/Manufacturing-768x768.jpg"
                      alt="Manufacturing"
                    />
                  </div>
                  <div className="card-slider__content">
                    <h3 className="title">Manufacturing</h3>
                    <div className="paragraph">
                      <p>
                        The manufacturing industry is built on efficiency,
                        precision, and innovation—and your marketing should
                        reflect that. We understand the complexities of your
                        supply chains, the importance of scalability, and the
                        need to showcase your technical prowess.
                      </p>
                    </div>
                  </div>
                  <div className="card-slider__action">
                    <a
                      href="https://powerdigitalmarketing.com/industries/manufacturing/"
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
                    <img
                      src="images/Persona-Development_pdm_image-768x430.png"
                      alt="Business & Finance"
                    />
                  </div>
                  <div className="card-slider__content">
                    <h3 className="title">Business &amp; Finance</h3>
                    <div className="paragraph">
                      <p>
                        Navigating the business &amp; finance sector requires a
                        deep understanding of the markets intricacies and the
                        regulatory landscape that governs it. We know that in
                        this industry, success hinges on trust, transparency,
                        and a keen eye for detail.
                      </p>
                    </div>
                  </div>
                  <div className="card-slider__action">
                    <a
                      href="https://powerdigitalmarketing.com/industries/business-and-finance/"
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
    </>
  )
}
