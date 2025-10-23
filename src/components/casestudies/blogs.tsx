import React from 'react'
import bb4ee48 from '../../images/7bb4ee48-90f0-4e4c-a228-57f1ca398e6d-e1752261316239.png';
import a0b from '../../images/45140a0b-ddac-4e68-958e-d01fcc685658.png';
import mobile from '../../images/mobile-how-often-to-go-to-the-gym.jpg';
import da3cd539 from '../../images/da3cd539-f992-4f2a-873c-addfb4b5dd02.png';
import children from '../../images/children-clothes.png';
import guitar from '../../images/guitar-iconic.png';
import pasta from '../../images/pasta.png';
import better from '../../images/better-4-u-snack-feature-scaled.jpg';

export default function blogs() {
  return (
    <>
     <section className="section-blog section-blog--case">
      <div className="section-blog__filters">
        <div className="list-tags">
          <a className="badge rounded-pill bg-dark" href="/case-studies/">
            Show All
          </a>
        </div>
        <div className="service-list">
          <a href="/case-studies/industry/b2b-marketing/">B2B Marketing</a>
          <a href="/case-studies/industry/consumer-product/">
            Consumer Product
          </a>
          <a href="/case-studies/industry/consumer-service/">
            Consumer Service
          </a>
        </div>{" "}
      </div>
      <div className="section-blog__posts-area">
        <div className="section-blog__search">
          <form
            role="search"
            method="get"
            className="ajax-search-form"
            action=""
          >
            <input
              type="search"
              name="posts_search"
              placeholder="Search for posts..."
              className="search-field"
            />
            <input type="hidden" name="post_type" defaultValue="case-studies" />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="section-blog__posts section-blog__posts--case-study">
          <article className="article-card article-card--case-study ">
            <div className="article-card__content">
              <h3 className="title">
                Winning on the Digital Shelf: How a Better-for-You Snack Brand
                Doubled ROAS at Target
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img
                src="images/better-4-u-snack-feature-scaled.jpg"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/winning-on-the-digital-shelf-how-a-better-for-you-snack-brand-doubled-roas-at-target/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study ">
            <div className="article-card__content">
              <h3 className="title">
                Striking a Chord in a Down Market: A D2C Reawakening for a
                Leading Guitar Brand
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img src={guitar.src} alt="" loading="lazy" />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/guitar-brand-d2c-growth/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study ">
            <div className="article-card__content">
              <h3 className="title">
                Retail Momentum in 72 Hours: A GTM Success Story Fueled by
                Influencer Activation
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img src={pasta.src} alt="" loading="lazy" />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/pasta-brand-go-to-market/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study ">
            <div className="article-card__content">
              <h3 className="title">
                Omnichannel Turnaround: How a Children’s Clothing Brand Cut
                Spend While Fueling Growth
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img src={children.src} alt="" loading="lazy" />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/childrens-clothing-brand-growth/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study ">
            <div className="article-card__content">
              <h3 className="title">
                Mastering Omnichannel Growth: Record Sales at Sephora and Profit
                Gains on Amazon
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img
                src={da3cd539.src}
                alt=""
                loading="lazy"
              />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/textured-hair-brand/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study ">
            <div className="article-card__content">
              <h3 className="title">
                $1.8M More Revenue, $1M Less Spend: Leading Fitness Academy
                Unlocks Efficiency
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img
                src={mobile.src}
                alt=""
                loading="lazy"
              />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/leading-fitness-academy/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study ">
            <div className="article-card__content">
              <h3 className="title">
                Power Digital Drives Market Penetration for Acai Brand,
                Increasing In-Store Sales
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img
                src={a0b.src}
                alt=""
                loading="lazy"
              />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/leading-acai-brand/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study ">
            <div className="article-card__content">
              <h3 className="title">
                The Hidden Cost of Misaligned Media: How a Leading Fashion Brand
                Reclaimed Profitability
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img
                src={bb4ee48.src}
                alt=""
                loading="lazy"
              />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/prominent-fashion-brand/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          {/* <article className="article-card article-card--case-study ">
            <div className="article-card__content">
              <h3 className="title">
                Boosting Sales at Whole Foods: A Data-Driven Approach to Retail
                Domination
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img src="images/Challenger.png" alt="" loading="lazy" />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/challenger-beverage-brand/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study ">
            <div className="article-card__content">
              <h3 className="title">
                Home Improvement Company Achieves Best Month in Digital History
                in Just 3 Months
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img
                src="images/fb9beeb5-e7b9-42a2-ad6d-0c7d9ad37838.png"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/home-improvement-company/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study d-none">
            <div className="article-card__content">
              <h3 className="title">
                Powering Profitability in the Underwear Market with a 13% AOV
                Increase
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img src="images/0_2-11.jpg" alt="" loading="lazy" />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/bold-underwear-brand/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study d-none">
            <div className="article-card__content">
              <h3 className="title">
                How Power Digital Helped B2B Skincare Device Shatter Revenue
                Targets &amp; Shorten Sales Cycles
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img
                src="images/8098fecb-ad46-480c-a0e0-2418b6cb6e5f.png"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/b2b-skincare-brand/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study d-none">
            <div className="article-card__content">
              <h3 className="title">
                Riding the Wave of Growth: +63% ROAS Surge and -37% CAC for
                Legacy Surf Brand
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img src="images/0_0-6-1.jpg" alt="" loading="lazy" />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/legacy-surf-brand/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study d-none">
            <div className="article-card__content">
              <h3 className="title">
                How Power Digital Helped Establish a New Supplement Category
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img
                src="images/u4187982957_health-conscious_individual_standing_by_a_large_w_8ba65106-198c-493c-9a3e-13d4ec19f98d_3.png"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/longevity-supplement/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study d-none">
            <div className="article-card__content">
              <h3 className="title">Celebrity-Owned Fashion Brand</h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img src="images/0_2-3_1.jpg" alt="" loading="lazy" />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/celebrity-owned-fashion-brand/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study d-none">
            <div className="article-card__content">
              <h3 className="title">
                Refined Acquisition Strategy Transforms Boutique Brand to Luxury
                Landmark
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img src="images/0_0-3.jpg" alt="" loading="lazy" />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/luxury-fashion-brand/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study d-none">
            <div className="article-card__content">
              <h3 className="title">
                Performance Meets Purpose: Elevating a Sustainable Shoe Brand
                with 75% Revenue Boost
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img src="images/0_2-3.jpg" alt="" loading="lazy" />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/sustainable-shoe-brand/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study d-none">
            <div className="article-card__content">
              <h3 className="title">
                Revolutionizing Retention &amp; Revenue: Sock Brand’s 69% Surge
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img src="images/0_3-6.jpg" alt="" loading="lazy" />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/innovative-sock-brand/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study d-none">
            <div className="article-card__content">
              <h3 className="title">
                How Power Digital Cut Leading Fitness App’s CAC by 70% and
                Doubled Paid Sign-Ups
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img src="images/0_3-5.jpg" alt="" loading="lazy" />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/leading-fitness-app/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study d-none">
            <div className="article-card__content">
              <h3 className="title">
                Driving Enterprise Software Company Transformation with
                Scalable, High-Impact Lead Generation
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img src="images/0_1-2.jpg" alt="" loading="lazy" />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/enterprise-software-company/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study d-none">
            <div className="article-card__content">
              <h3 className="title">
                Berkshire Hathaway Leverages Influencer Marketing
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img
                src="images/6724a741f5506196b1fdb816.jpg"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/berkshire-hathaway-home-services-california-properties/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study d-none">
            <div className="article-card__content">
              <h3 className="title">Vix</h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img
                src="images/vix-insiders_1000x1270_ea939549-9a72-4e02-9285-8c5034422901_1000x_720-small.png"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/vix/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study d-none">
            <div className="article-card__content">
              <h3 className="title">
                Elevating Haircare Brand’s Launch Via Experiential Event
                Storytelling
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img
                src="images/Screenshot-2024-12-01-at-9.29.48%E2%80%AFPM-small.png"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/elevating-haircare-brands-media-launch-via-experiential-event-storytelling/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study d-none">
            <div className="article-card__content">
              <h3 className="title">
                Scaling Spend and ROAS with Thoughtful Strategic Optimizations
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img src="images/Pura-Vida-photo-2-1.jpg" alt="" loading="lazy" />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/scaling-spend-and-roas-with-thoughtful-strategic-optimizations/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study d-none">
            <div className="article-card__content">
              <h3 className="title">
                How Power Digital helped Victrola more than double their online
                revenue in a single year
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img
                src="images/Screenshot-2024-12-01-at-9.31.23%E2%80%AFPM.png"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/victrola/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study d-none">
            <div className="article-card__content">
              <h3 className="title">Growth for Hayabusa Fight</h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img src="images/hero-hayabusa-1.png" alt="" loading="lazy" />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/hayabusa-fight/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study d-none">
            <div className="article-card__content">
              <h3 className="title">
                Omnichannel Revenue Growth for Catalina Crunch
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img
                src="images/Amazon_Buisness_FeaturedImage_800x600-1.png"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/catalina-crunch/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study d-none">
            <div className="article-card__content">
              <h3 className="title">The Black Dahlia</h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img src="images/1-1.jpg" alt="" loading="lazy" />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/the-black-dahlia/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study d-none">
            <div className="article-card__content">
              <img
                src="images/Alliant.png"
                alt="Alliant University"
                loading="lazy"
              />
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img src="images/Alliant-2-small.jpg" alt="" loading="lazy" />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/alliant-university/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study d-none">
            <div className="article-card__content">
              <h3 className="title">CellularOutfitter</h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img src="images/celloutift-1.jpg" alt="" loading="lazy" />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/cellularoutfitter/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study d-none">
            <div className="article-card__content">
              <h3 className="title">Gardyn</h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img
                src="images/Screenshot-2024-12-01-at-9.35.09%E2%80%AFPM-small.png"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/gardyn/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study d-none">
            <div className="article-card__content">
              <h3 className="title">
                How TomboyX’s page one search rankings rocketed by 175% thanks
                to Power Digital
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img
                src="images/Screenshot-2024-12-01-at-9.42.10%E2%80%AFPM.png"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/tomboyx/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study d-none">
            <div className="article-card__content">
              <h3 className="title">
                How Diligence Contributed To Over $100M+ In Funding for Mielle
                Organics
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img
                src="images/Screenshot-2024-12-01-at-9.28.20%E2%80%AFPM.png"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/mielle-organics-case-study/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study d-none">
            <div className="article-card__content">
              <h3 className="title">PlushCare Digital Marketing Case Study</h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img src="images/plushcare-small.png" alt="" loading="lazy" />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/plushcare/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study d-none">
            <div className="article-card__content">
              <h3 className="title">NAPS Intl.</h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img src="images/naps.jpg" alt="" loading="lazy" />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/naps/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study d-none">
            <div className="article-card__content">
              <h3 className="title">SLI Systems Website Rebuild</h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img src="images/sli.jpg" alt="" loading="lazy" />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/sli-systems/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study d-none">
            <div className="article-card__content">
              <h3 className="title">Platform 9</h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img src="images/pdm-work-hero-p9.jpg" alt="" loading="lazy" />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/platform-9/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study d-none">
            <div className="article-card__content">
              <h3 className="title">One Month</h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img src="images/pdm-work-hero-om.jpg" alt="" loading="lazy" />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/one-month/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study d-none">
            <div className="article-card__content">
              <h3 className="title">Pet Conscious</h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img
                src="images/comp-mitchell-orr-237216-1.jpg"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/pet-conscious/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--case-study d-none">
            <div className="article-card__content">
              <img
                src="images/Image-1-from-Figma.png"
                alt="Casper"
                loading="lazy"
              />
              <div className="tags">
                <span className="tag badge rounded-pill">Case Study</span>
              </div>
            </div>
            <div className="article-card__image">
              <img src="images/R4kK6j-small.png" alt="" loading="lazy" />
            </div>
            <div className="article-card__action">
              <a
                href="https://powerdigitalmarketing.com/case-studies/casper/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article> */}
        </div>
        <div className="view-more-btn w-100 text-center">
          <a href="" className="btn btn-secondary more-articles">
            <div className="icon">
              <span>View more</span>
            </div>
          </a>
        </div>
      </div>
    </section>
    </>
  )
}
