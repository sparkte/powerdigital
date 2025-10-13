'use client'
import React, { useState, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import { SwiperOptions, SwiperModule } from 'swiper/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
 import styles from '../../styles/companyinsight.module.css'
// Images
import wastedad from '../../images/wastedad-683x1024.png'
import holidayshop from '../../images/holidayshop-1024x683.jpg'
import b6bc2835 from '../../images/b6bc2835-dd5e-42f4-aab4-0f1283492d0b-1024x683.png'
import foodbeverage from '../../images/food-beverage.png'
import screenshot from '../../images/Screenshot-2025-09-22-at-12.36.56-AM-1024x750.png'

// Type
interface CompanyPost {
  title: string
  author: string
  image: StaticImageData
  href: string
  tags?: string[]
}

// Data (company content)
const posts: CompanyPost[] = [
  {
    title: 'The Hidden Cost of Wasted Ad Spend—and How to Fix It',
    author: 'Tara Johnson | October 9, 2025',
    image: wastedad,
    href: 'https://powerdigitalmarketing.com/blog/hidden-cost-wasted-ad-spend/',
    tags: ['Brand Building', 'Digital Marketing', 'Measurement'],
  },
  {
    title: 'Why Early Customer Acquisition Is the Key to Holiday Success',
    author: 'Tara Johnson | October 9, 2025',
    image: holidayshop,
    href: 'https://powerdigitalmarketing.com/blog/early-customer-acquisition-holiday-success/',
    tags: ['Digital Marketing', 'eCommerce', 'Paid Social'],
  },
  {
    title: 'Turning Small Carts into Big Wins: Growing LTV in Food & Beverage',
    author: 'Tara Johnson | September 22, 2025',
    image: b6bc2835,
    href: 'https://powerdigitalmarketing.com/blog/grow-ltv-food-beverage-low-aov/',
    tags: ['Digital Marketing', 'eCommerce', 'Measurement'],
  },
  {
    title: 'Messaging in a Regulated Market: 7 Food and Beverage Brand Compliance Tips',
    author: 'Tara Johnson | September 22, 2025',
    image: foodbeverage,
    href: 'https://powerdigitalmarketing.com/blog/food-beverage-messaging-compliance/',
    tags: ['Brand Building', 'Digital Marketing', 'eCommerce', 'Measurement'],
  },
  {
    title: 'How a CPG Brand Unlocked $3.6M in Incremental Revenue with the Power Circuit™',
    author: 'Tara Johnson | September 22, 2025',
    image: screenshot,
    href: 'https://powerdigitalmarketing.com/blog/cpg-brand-growth-power-circuit/',
    tags: ['Digital Marketing', 'eCommerce', 'Measurement'],
  },
]

// Responsiveness hook (consumer logic)
const MOBILE_BREAKPOINT = 768
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    const onResize = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return isMobile
}

// render card (same structure as consumer)
const renderCard = (post: CompanyPost) => (
  <article className="card-blog">
    <div className="card-blog__content">
      <div className="tags">
        {post.tags?.map((t, i) => (
          <a key={i} href="#" className="tag badge rounded-pill text-decoration-none" style={{ marginRight: 6 }}>
            {t}
          </a>
        ))}
      </div>
      <h3 className="title">{post.title}</h3>
      <p className="autor">{post.author}</p>
    </div>

    <div className="card-blog__image">
      <Image src={post.image} alt={post.title} width={1024} height={640} />
    </div>

    <div className="card-blog__action">
      <a href={post.href} className="btn btn--round btn-light stretched-link">
        <div className="icon">
          <i className="icon-arrow-up-right" />
        </div>
      </a>
    </div>
  </article>
)

export default function Insight() {
  const isMobile = useIsMobile()

  const swiperParams: SwiperOptions = {
    modules: [] as SwiperModule[],
    spaceBetween: 30,
    slidesPerView: 1.2,
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        allowTouchMove: true,
        centeredSlides: false,
      },
    },
  }

  return (
    <section className="bg-light overflow-hidden">
      <div className="intro-twos-columns">
        <div className="intro-twos-columns__col">
          <div className="intro-twos-columns__title">
            <span className="badge rounded-pill bg-dark">insights</span>
            <h2>The Power Blog: A sneak peek of the future.</h2>
          </div>
          <div className="intro-twos-columns__text">
            <p>
              Discover insight-rich posts about the latest trends in digital
              marketing and consumer insights for brands. The Power Blog is
              jam-packed with the knowledge and foresight you need right now for
              what’s coming next.
            </p>
            <a href="https://powerdigitalmarketing.com/blog/" className="btn btn-secondary">
              <div className="icon">
                <span>Browse all insights</span>
                <i className="icon-arrow-up-right" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {isMobile ? (
        <div className="blog-card-grid swiper">
          <Swiper {...swiperParams}>
            {posts.map((post, i) => (
              <SwiperSlide key={i} className="blog-card-grid__item">
                {renderCard(post)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="blog-card-grid">
          <div className="swiper-wrapper">
            {posts.map((post, i) => (
              <div key={i} className="swiper-slide blog-card-grid__item">
                {renderCard(post)}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
