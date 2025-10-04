import React from "react";
import BlogCardSlider from "./BlogCardSlider";
export default function education() {
  return (
    <>
    <section className="bg-light overflow-hidden">
      <div className="intro-twos-columns">
        <div className="intro-twos-columns__col">
          <div className="intro-twos-columns__title">
            <span className="badge rounded-pill bg-dark">Insights</span>
            <h2>
              Access <br /> our education
            </h2>
          </div>
          <div className="intro-twos-columns__text">
            <p>
              Unlock a wealth of cutting-edge insights on the latest trends
              shaping digital marketing and consumer behavior. From channel
              insights spanning search engine optimization, paid search, social
              media management and more, to strategic planning and measurement,
              the Power Digital Marketing Blog delivers the expertise you need
              to stay ahead. Each resource is brimming with actionable
              knowledge, designed to empower your marketing efforts today and
              prepare you for the future of digital advertising.
            </p>
            <a
              href="https://powerdigitalmarketing.com/blog/"
              className="btn btn-secondary"
            >
              <div className="icon">
                <span>Browse recent insights</span>
                <i className="icon-arrow-up-right" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <BlogCardSlider/>
      {/* <div className="blog-card-grid swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide blog-card-grid__item">
            <article className="card-blog">
              <div className="card-blog__content">
                <div className="tags">
                  <a
                    href="https://powerdigitalmarketing.com/blog/category/digital-marketing//"
                    className="tag badge rounded-pill text-decoration-none"
                  >
                    Digital Marketing
                  </a>
                  <a
                    href="https://powerdigitalmarketing.com/blog/category/ecommerce//"
                    className="tag badge rounded-pill text-decoration-none"
                  >
                    eCommerce
                  </a>
                  <a
                    href="https://powerdigitalmarketing.com/blog/category/measurement//"
                    className="tag badge rounded-pill text-decoration-none"
                  >
                    Measurement
                  </a>
                </div>
                <h3 className="title">
                  Turning Small Carts into Big Wins: Growing LTV in Food &amp;
                  Beverage
                </h3>
                <p className="autor">Tara Johnson | September 22, 2025</p>
              </div>
              <div className="card-blog__image">
                <Image
                  src={B6bc2835Off1283}
                  alt="Turning Small Carts into Big Wins: Growing LTV in Food & Beverage"
                />
              </div>
              <div className="card-blog__action">
                <a
                  href="https://powerdigitalmarketing.com/blog/grow-ltv-food-beverage-low-aov/"
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
                <div className="tags">
                  <a
                    href="https://powerdigitalmarketing.com/blog/category/brand-building//"
                    className="tag badge rounded-pill text-decoration-none"
                  >
                    Brand Building
                  </a>
                  <a
                    href="https://powerdigitalmarketing.com/blog/category/digital-marketing//"
                    className="tag badge rounded-pill text-decoration-none"
                  >
                    Digital Marketing
                  </a>
                  <a
                    href="https://powerdigitalmarketing.com/blog/category/ecommerce//"
                    className="tag badge rounded-pill text-decoration-none"
                  >
                    eCommerce
                  </a>
                  <a
                    href="https://powerdigitalmarketing.com/blog/category/measurement//"
                    className="tag badge rounded-pill text-decoration-none"
                  >
                    Measurement
                  </a>
                </div>
                <h3 className="title">
                  Messaging in a Regulated Market: 7 Food and Beverage Brand
                  Compliance Tips
                </h3>
                <p className="autor">Tara Johnson | September 22, 2025</p>
              </div>
              <div className="card-blog__image">
                <Image
                  src={FoodBeverage}
                  alt="Messaging in a Regulated Market: 7 Food and Beverage Brand Compliance Tips"
                />
              </div>
              <div className="card-blog__action">
                <a
                  href="https://powerdigitalmarketing.com/blog/food-beverage-messaging-compliance/"
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
                <div className="tags">
                  <a
                    href="https://powerdigitalmarketing.com/blog/category/digital-marketing//"
                    className="tag badge rounded-pill text-decoration-none"
                  >
                    Digital Marketing
                  </a>
                  <a
                    href="https://powerdigitalmarketing.com/blog/category/ecommerce//"
                    className="tag badge rounded-pill text-decoration-none"
                  >
                    eCommerce
                  </a>
                  <a
                    href="https://powerdigitalmarketing.com/blog/category/measurement//"
                    className="tag badge rounded-pill text-decoration-none"
                  >
                    Measurement
                  </a>
                </div>
                <h3 className="title">
                  How a CPG Brand Unlocked $3.6M in Incremental Revenue with the
                  Power Circuit™
                </h3>
                <p className="autor">Tara Johnson | September 22, 2025</p>
              </div>
              <div className="card-blog__image">
                <Image
                  src={Screenshot2025}
                  alt="How a CPG Brand Unlocked $3.6M in Incremental Revenue with the Power Circuit™"
                />
              </div>
              <div className="card-blog__action">
                <a
                  href="https://powerdigitalmarketing.com/blog/cpg-brand-growth-power-circuit/"
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
                <div className="tags">
                  <a
                    href="https://powerdigitalmarketing.com/blog/category/digital-marketing//"
                    className="tag badge rounded-pill text-decoration-none"
                  >
                    Digital Marketing
                  </a>
                  <a
                    href="https://powerdigitalmarketing.com/blog/category/ecommerce//"
                    className="tag badge rounded-pill text-decoration-none"
                  >
                    eCommerce
                  </a>
                  <a
                    href="https://powerdigitalmarketing.com/blog/category/measurement//"
                    className="tag badge rounded-pill text-decoration-none"
                  >
                    Measurement
                  </a>
                </div>
                <h3 className="title">
                  How the Power Circuit™ Drove $3.7M and $10.6M in Projected
                  Revenue Lift for Fashion Brands
                </h3>
                <p className="autor">Tara Johnson | September 22, 2025</p>
              </div>
              <div className="card-blog__image">
                <Image
                  src={RevenueFashion}
                  alt="How the Power Circuit™ Drove $3.7M and $10.6M in Projected Revenue Lift for Fashion Brands"
                />
              </div>
              <div className="card-blog__action">
                <a
                  href="https://powerdigitalmarketing.com/blog/power-circuit-fashion-brand-growth/"
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
                <div className="tags">
                  <a
                    href="https://powerdigitalmarketing.com/blog/category/digital-marketing//"
                    className="tag badge rounded-pill text-decoration-none"
                  >
                    Digital Marketing
                  </a>
                  <a
                    href="https://powerdigitalmarketing.com/blog/category/influencer-marketing//"
                    className="tag badge rounded-pill text-decoration-none"
                  >
                    Influencer Marketing
                  </a>
                  <a
                    href="https://powerdigitalmarketing.com/blog/category/measurement//"
                    className="tag badge rounded-pill text-decoration-none"
                  >
                    Measurement
                  </a>
                  <a
                    href="https://powerdigitalmarketing.com/blog/category/paid-social//"
                    className="tag badge rounded-pill text-decoration-none"
                  >
                    Paid Social
                  </a>
                </div>
                <h3 className="title">
                  How to Leverage Influencer Marketing to Reach Audiences Meta
                  No Longer Allows
                </h3>
                <p className="autor">Tara Johnson | September 22, 2025</p>
              </div>
              <div className="card-blog__image">
                <Image
                  src={InfluencerMarketing}
                  alt="How to Leverage Influencer Marketing to Reach Audiences Meta No Longer Allows"
                />
              </div>
              <div className="card-blog__action">
                <a
                  href="https://powerdigitalmarketing.com/blog/influencer-marketing-meta-targeting-changes/"
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
      </div> */}
    </section>
    </>
  )
}
