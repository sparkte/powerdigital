'use client'
import React, { useState } from 'react'
import image1 from '../../images/PDM-Website-2025-Layer-1-1.png'
import image2 from '../../images/Screenshot-2024-11-26-at-8.27.54 AM-small.png'
import image3 from '../../images/Screenshot-2024-11-26-at-8.30.09 AM-small.png'
import image4 from '../../images/Untitled-1080-x-750-px-7.png'
import image5 from '../../images/Screenshot-2024-11-26-at-8.29.31 AM.png'
import image6 from '../../images/Untitled-1080-x-750-px-4.png'

export default function Hero() {
  const tabs = [
    {
      id: 'creative-affinity',
      label: 'Creative Affinity',
      heading: 'Creative Affinity',
      text:
        'nova Creative Affinity revolutionizes performance marketing by linking advertising creatives to customer Lifetime Value (LTV). This application helps businesses optimize ad content and allocate budgets effectively by identifying high-performing creatives.',
      img: image2,
    },
    {
      id: 'customer-insights',
      label: 'Customer Insights',
      heading: 'Customer Insights',
      text:
        'nova Customer Insights delivers a complete understanding of your audience, leveraging data to build detailed personas and uncover trends. By identifying customer preferences, businesses can refine their marketing strategies and maximize engagement.',
      img: image3,
    },
    {
      id: 'insights-ai',
      label: 'Insights AI',
      heading: 'Insights AI',
      text:
        'Insights AI combines 20+ marketing reports, AI-driven analytics, and human expertise to deliver a comprehensive data platform. Businesses can interact with their marketing data, ask questions, and make agile decisions based on clear insights.',
      img: image4,
    },
    {
      id: 'customer-cohorts',
      label: 'Customer Cohorts',
      heading: 'Customer Cohorts',
      text:
        'With nova Customer Cohorts, businesses gain a deep understanding of customer behavior and segmentation. This application identifies high-value customer groups, such as those with high repeat purchase rate, Lifetime Value (LTV), or retention rates.',
      img: image5,
    },
    {
      id: 'forecasts',
      label: 'Forecasts',
      heading: 'Forecasts',
      text:
        'nova Forecasts empowers businesses with predictive analytics, enabling data-driven decision-making. The application models market demand, identifies growth opportunities, and supports resource allocation.',
      img: image6,
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <section className="logo-hero">
        <div>
          <img src={image1.src} alt="" />
        </div>
      </section>

      <section id="tabs-nova" className="tabs-nova bg-light">
        <div className="tabs-nova__nav" role="tablist" aria-label="Nova applications">
          <span className="badge rounded-pill bg-light">NOVA APPLICATIONS</span>
          <div>
            {tabs.map((tab, idx) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeIndex === idx}
                aria-controls={`tab-panel-${tab.id}`}
                className={`tabs-nova__nav-item ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              >
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="tabs-nova__content">
          {tabs.map((tab, idx) => (
            <div
              key={tab.id}
              id={`tab-panel-${tab.id}`}
              role="tabpanel"
              hidden={activeIndex !== idx}
              className={`tabs-nova__content-item ${activeIndex === idx ? 'active' : ''}`}
            >
              <div className="title">
                <h1>{tab.heading}</h1>
              </div>
              <div className="content">
                <p>{tab.text}</p>
              </div>
              <img src={tab.img.src} alt="" />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
