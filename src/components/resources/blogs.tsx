import React from 'react'
import Current from '../../images/The-Current-State-of-the-Fashion-Industry-Resource.png'
import Black from '../../images/The-Black-Friday-Cyber-Monday-2025-Reset-1.png'
import Who from '../../images/Who-Are-Your-Most-Profitable-Customers_-Understanding-Home-Services-Personas-1.png'
import tpc from '../../images/tpc.png'
import Retention from '../../images/How-an-Apparel-Brand-Used-LRFM-to-Improve-Retention.png'
import ROI from '../../images/Who-Are-Your-Most-Profitable-Customers_-Understanding-Home-Services-Personas.png'
import MMT from '../../images/Your-Brands-ROI-Accelerator.png'
import Halo from '../../images/retargeting.png'
import Halo2 from '../../images/Beauty.png'
import Final from '../../images/Creative_Final.png'
import Consumer from '../../images/Consumer-Service-STrategy.png'
import CFOS from '../../images/CFOS-CMOS.png'
import Weekly from '../../images/Weekly-Social-Trends.png'
import Group from '../../images/Group-645-1.png'
import Tik from '../../images/Tik-Tok-Guide.png'
import Post from '../../images/Post-1-1080x1350-1.png'

export default function blogs() {
  return (
    <>
    <section className="section-blog section-blog--case">
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
            <input type="hidden" name="post_type" defaultValue="resources" />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="section-blog__posts section-blog__posts--case-study">
          <article className="article-card article-card--resources ">
            <div className="article-card__content">
              <h3 className="title">
                The Black Friday Cyber Monday 2025 Reset
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Resource</span>
              </div>
            </div>
            <div className="article-card__image">
              <img
                src={Black.src}
                alt=""
                loading="lazy"
              />
            </div>
            <div className="article-card__action">
              <a
                href="the-black-friday-cyber-monday-2025-reset/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--resources ">
            <div className="article-card__content">
              <h3 className="title">
                The Current State of the Fashion Industry
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Resource</span>
              </div>
            </div>
            <div className="article-card__image">
              <img
                src={Current.src}
                alt=""
                loading="lazy"
              />
            </div>
            <div className="article-card__action">
              <a
                href="resources-the-current-state-of-the-fashion-industry/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--resources ">
            <div className="article-card__content">
              <h3 className="title">
                Understanding Performance KPIs: What Every Fashion CMO Should
                Know
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Resource</span>
              </div>
            </div>
            <div className="article-card__image">
              <img
                src={Who.src}
                alt=""
                loading="lazy"
              />
            </div>
            <div className="article-card__action">
              <a
                href="understanding-performance-kpis-what-every-fashion-cmo-should-know/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--resources ">
            <div className="article-card__content">
              <h3 className="title">
                Unlock Growth With the Power Circuit™ Framework
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Resource</span>
              </div>
            </div>
            <div className="article-card__image">
              <img src={tpc.src} alt="" loading="lazy" />
            </div>
            <div className="article-card__action">
              <a
                href="unlock-growth-with-the-power-circuit-framework/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--resources ">
            <div className="article-card__content">
              <h3 className="title">
                How an Apparel Brand Used LRFM to Improve Retention
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Resource</span>
              </div>
            </div>
            <div className="article-card__image">
              <img
                src={Retention.src}
                alt=""
                loading="lazy"
              />
            </div>
            <div className="article-card__action">
              <a
                href="how-an-apparel-brand-used-lrfm-to-improve-retention/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--resources ">
            <div className="article-card__content">
              <h3 className="title">Who Are Your Most Profitable Customers?</h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Resource</span>
              </div>
            </div>
            <div className="article-card__image">
              <img
                src={ROI.src}
                alt=""
                loading="lazy"
              />
            </div>
            <div className="article-card__action">
              <a
                href="who-are-your-most-profitable-customers/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--resources ">
            <div className="article-card__content">
              <h3 className="title">
                Retail Media Networks: Your Brand’s ROI Accelerator
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Resource</span>
              </div>
            </div>
            <div className="article-card__image">
              <img
                src={MMT.src}
                alt=""
                loading="lazy"
              />
            </div>
            <div className="article-card__action">
              <a
                href="retail-media-networks-roi-accelerator/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--resources ">
            <div className="article-card__content">
              <h3 className="title">
                How Retargeting Boosts Beauty Brand Sales
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Resource</span>
              </div>
            </div>
            <div className="article-card__image">
              <img src={Halo.src} alt="" loading="lazy" />
            </div>
            <div className="article-card__action">
              <a
                href="how-retargeting-boosts-beauty-brand-sales/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--resources ">
            <div className="article-card__content">
              <h3 className="title">
                How Power Digital’s MMT Uncovered the Halo Effect in Beauty
                Marketing
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Resource</span>
              </div>
            </div>
            <div className="article-card__image">
              <img src={Halo2.src} alt="" loading="lazy" />
            </div>
            <div className="article-card__action">
              <a
                href="how-power-digitals-mmt-uncovered-the-halo-effect-in-beauty-marketing/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--resources ">
            <div className="article-card__content">
              <h3 className="title">
                The Value of Deploying Data-Driven Creative in Advertising for
                D2C Brands
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Resource</span>
              </div>
            </div>
            <div className="article-card__image">
              <img src={Final.src} alt="" loading="lazy" />
            </div>
            <div className="article-card__action">
              <a
                href="data-driven-creative-for-d2c-brands/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--resources d-none">
            <div className="article-card__content">
              <h3 className="title">
                Building an Effective Omnichannel Strategy for Consumer Services
                Brands
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Resource</span>
              </div>
            </div>
            <div className="article-card__image">
              <img
                src={Consumer.src}
                alt=""
                loading="lazy"
              />
            </div>
            <div className="article-card__action">
              <a
                href="building-an-effective-omnichannel-strategy-for-consumer-services-brands/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--resources d-none">
            <div className="article-card__content">
              <h3 className="title">
                Bridging the Gap: How CFOs and CMOs Can Align for Stronger
                Growth in 2025
              </h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Resource</span>
              </div>
            </div>
            <div className="article-card__image">
              <img src={CFOS.src} alt="" loading="lazy" />
            </div>
            <div className="article-card__action">
              <a
                href="bridging-the-gap-how-cfos-and-cmos-can-align-for-stronger-growth-in-2025/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--resources d-none">
            <div className="article-card__content">
              <h3 className="title">Weekly Social Trends Report</h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Resource</span>
              </div>
            </div>
            <div className="article-card__image">
              <img
                src={Weekly.src}
                alt=""
                loading="lazy"
              />
            </div>
            <div className="article-card__action">
              <a
                href="weekly-social-trends-report/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--resources d-none">
            <div className="article-card__content">
              <h3 className="title">Newsletter</h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Resource</span>
              </div>
            </div>
            <div className="article-card__image">
              <img src={Group.src} alt="" loading="lazy" />
            </div>
            <div className="article-card__action">
              <a
                href="newsletter/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--resources d-none">
            <div className="article-card__content">
              <h3 className="title">Rethink TikTok</h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Resource</span>
              </div>
            </div>
            <div className="article-card__image">
              <img src={Tik.src} alt="" loading="lazy" />
            </div>
            <div className="article-card__action">
              <a
                href="rethink-tiktok/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
          <article className="article-card article-card--resources d-none">
            <div className="article-card__content">
              <h3 className="title">State of Social Media Trends 2025</h3>
              <div className="tags">
                <span className="tag badge rounded-pill">Resource</span>
              </div>
            </div>
            <div className="article-card__image">
              <img src={Post.src} alt="" loading="lazy" />
            </div>
            <div className="article-card__action">
              <a
                href="state-of-social-media-trends-2025/"
                className="btn btn--round btn-light stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </article>
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
