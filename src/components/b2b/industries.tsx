import TechSoftwareImage from '../../images/pr_pdm_image-768x430.png';
import ProfessionalServicesImage from '../../images/Persona-Development_pdm_image-768x430.png';
import ManufacturingImage from '../../images/Manufacturing-768x768.jpg';
import BusinessFinanceImage from '../../images/pe_pdm_image-768x430.png';
import B2BPEImage from '../../images/0_2-9-768x768.jpg';

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
    <section className="multi-text-section bg-dark">
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
                ones aren’t, then we swiftly adapt and execute.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Undeniable Expertise</h3>
              <p>
                Our team boasts some of the brightest minds in the world of
                digital and performance marketing, and everyone here is
                lockstep-focused on business impact — evidenced by a stellar
                96+% client retention rate. Expect nothing less than
                best-in-class.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Undeniable Results</h3>
              <p>
                We’re driven by outcomes, not ego. Perhaps that’s why we grow
                companies 2.6x faster than the industry average, with 27+% YoY
                revenue increases. All of our critical capabilities prioritize
                optimizing our clients’ investments for maximum ROI.
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
                    <img
                      src={TechSoftwareImage.src}
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
                      src={ProfessionalServicesImage.src}
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
                <article className="card-slider bg-primary">
                  <div className="card-slider__image">
                    <img
                      src={ManufacturingImage.src}
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
                <article className="card-slider bg-white">
                  <div className="card-slider__image">
                    <img
                      src={BusinessFinanceImage.src}
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
              <div className="swiper-slide swiper-slide--manual_services_cards">
                <article className="card-slider bg-secondary">
                  <div className="card-slider__image">
                    <img src={B2BPEImage.src} alt="B2B PE Firms" />
                  </div>
                  <div className="card-slider__content">
                    <h3 className="title">B2B PE Firms</h3>
                    <div className="paragraph">
                      <p>
                        Elevate your private equity firm with marketing
                        strategies that drive portfolio growth, attract top
                        C-level talent, and enhance brand visibility in a
                        crowded PE landscape.
                      </p>
                    </div>
                  </div>
                  <div className="card-slider__action">
                    <a
                      href="https://powerdigitalmarketing.com/industries/b2b-pe-firms/"
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
