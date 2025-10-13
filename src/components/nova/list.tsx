import React from 'react'
import Untitled from '../../images/R4kK6j-small.png'
import Untitled1 from '../../images/Alliant-2-small.jpg'
export default function list() {
  return (
    
    <>
    
    <section className="list-articles-nova">
      <div className="title">
        <h2>The numbers don’t lie. But they do impress.</h2>
      </div>
      <div className="list-articles-nova__cards">
        <article className="article-card">
          <div className="article-card__content">
            <div className="badge rounded-pill tag">Case Study</div>
            <h3 className="title">
              35% less ad spend, 21% more venue YoY with nova Intelligence
              incrementality modeling
            </h3>
          </div>
          <div className="article-card__image">
            <img src={Untitled.src} alt="" loading="lazy" />
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
        </article>
        <article className="article-card">
          <div className="article-card__content">
            <div className="badge rounded-pill tag">Case Study</div>
            <h3 className="title">33% YoY Leads and 34% YoY Converted Leads</h3>
          </div>
          <div className="article-card__image">
            <img src={Untitled1.src} alt="" loading="lazy" />
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
      </div>
    </section></>
  )
}
