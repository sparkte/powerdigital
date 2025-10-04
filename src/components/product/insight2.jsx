import React from 'react'
import image1 from "../../images/0_3-4.jpg";
import image2 from "../../images/0_3-2.jpg";
import image3 from "../../images/0_2-1.jpg";
import image4 from "../../images/0_0-2.jpg";
import image5 from "../../images/18cd7dc47d8e3772257e1ab13cb53a0a441556ce-7680x4323-1-1024x576.webp";
export default function insight2() {
  return (
    <>
     <section className="bg-light overflow-hidden">
      <div className="intro-twos-columns">
        <div className="intro-twos-columns__col">
          <div className="intro-twos-columns__title">
            <span className="badge rounded-pill bg-dark">Insights</span>
            <h2 />
          </div>
          <div className="intro-twos-columns__text">
            <a
              href="https://powerdigitalmarketing.com/blog/"
              className="btn btn-secondary"
            >
              <div className="icon">
                <span>Browse all insights </span>
                <i className="icon-arrow-up-right" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="blog-card-grid swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide blog-card-grid__item">
            <article className="card-blog">
              <div className="card-blog__content">
                <div className="tags"></div>
                <h3 className="title">
                  Q5 is Not a Break: How to Prepare Your Marketing Strategy for
                  Q1 Growth
                </h3>
                <p className="autor">Power Digital | December 3, 2024</p>
              </div>
              <div className="card-blog__image">
                <img
                  src={image1}
                  alt="Q5 is Not a Break: How to Prepare Your Marketing Strategy for Q1 Growth"
                />
              </div>
              <div className="card-blog__action">
                <a
                  href="https://powerdigitalmarketing.com/blog/q1-marketing-plan/"
                  className="btn btn--round btn-light stretched-link"
                >
                  <div className="icon">
                    <i className="icon-arrow-up-right" />
                  </div>
                </a>
              </div>
            </article>
          </div>
          <div className="swiper-slide blog-card-grid__item">
            <article className="card-blog">
              <div className="card-blog__content">
                <div className="tags"></div>
                <h3 className="title">
                  Institutional Investors &amp; The Age of Digital
                  Transformation: Navigating the Evolving Landscape
                </h3>
                <p className="autor">Power Digital | December 2, 2024</p>
              </div>
              <div className="card-blog__image">
                <img
                  src={image2}
                  alt="Institutional Investors & The Age of Digital Transformation: Navigating the Evolving Landscape"
                />
              </div>
              <div className="card-blog__action">
                <a
                  href="https://powerdigitalmarketing.com/blog/digital-transformation-on-investing/"
                  className="btn btn--round btn-light stretched-link"
                >
                  <div className="icon">
                    <i className="icon-arrow-up-right" />
                  </div>
                </a>
              </div>
            </article>
          </div>
          <div className="swiper-slide blog-card-grid__item">
            <article className="card-blog">
              <div className="card-blog__content">
                <div className="tags"></div>
                <h3 className="title">
                  Cutting Wasted Ad Spend and Increasing PortCo Margins: A New
                  Era of Data-Driven Profitability
                </h3>
                <p className="autor">Power Digital | December 2, 2024</p>
              </div>
              <div className="card-blog__image">
                <img
                  src={image3}
                  alt="Cutting Wasted Ad Spend and Increasing PortCo Margins: A New Era of Data-Driven Profitability"
                />
              </div>
              <div className="card-blog__action">
                <a
                  href="https://powerdigitalmarketing.com/blog/reduce-wasted-ad-spend-and-increase-profit-margins/"
                  className="btn btn--round btn-light stretched-link"
                >
                  <div className="icon">
                    <i className="icon-arrow-up-right" />
                  </div>
                </a>
              </div>
            </article>
          </div>
          <div className="swiper-slide blog-card-grid__item">
            <article className="card-blog">
              <div className="card-blog__content">
                <div className="tags"></div>
                <h3 className="title">
                  Top Strategies for Scaling Your Consumer Service Business in
                  2025
                </h3>
                <p className="autor">Power Digital | December 2, 2024</p>
              </div>
              <div className="card-blog__image">
                <img
                  src={image4}
                  alt="Top Strategies for Scaling Your Consumer Service Business in 2025"
                />
              </div>
              <div className="card-blog__action">
                <a
                  href="https://powerdigitalmarketing.com/blog/scaling-consumer-service-business/"
                  className="btn btn--round btn-light stretched-link"
                >
                  <div className="icon">
                    <i className="icon-arrow-up-right" />
                  </div>
                </a>
              </div>
            </article>
          </div>
          <div className="swiper-slide blog-card-grid__item">
            <article className="card-blog">
              <div className="card-blog__content">
                <div className="tags"></div>
                <h3 className="title">
                  Power Digital Awarded Agency Partner of the Year at the Buy
                  with Prime Partner Summit
                </h3>
                <p className="autor">Power Digital | December 4, 2024</p>
              </div>
              <div className="card-blog__image">
                <img
                  src={image5}
                  alt="Power Digital Awarded Agency Partner of the Year at the Buy with Prime Partner Summit"
                />
              </div>
              <div className="card-blog__action">
                <a
                  href="https://powerdigitalmarketing.com/blog/buy-with-prime-agency-partner-of-the-year/"
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
      </div>
    </section>
    </>
  )
}
