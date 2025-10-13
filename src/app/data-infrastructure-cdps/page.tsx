"use server"

import ServiceIcon1 from "../services/amazon-marketing/images/service-icon-1.svg"
import Layer11 from "../services/amazon-marketing/images/Layer_1-1.svg"
import Layer1 from "../services/amazon-marketing/images/Layer-1.svg"
import Amazon1 from "../services/amazon-marketing/images/Amazon-1.png"
import Header from '../../components/consumer/header';
import Cardslider from '../services/maincomonents/cardslider';
import HeroSection from '../services/maincomonents/herosection';
import LearnMore from '../services/maincomonents/learnmore';
import WhySection from '../services/maincomonents/whysection';
import WorkWith from '../services/maincomonents/workwith';
import Services from '../services/maincomonents/Services';



const optimizeAdvertisingWorkWithData = {
  badge: "STRATEGY",
  title: "Optimize Advertising",
  paragraphs: [
    "The foundation of any high impact strategic decision is dependent on clean, easy to understand, and relevant information.",
    "<b>Power Digital can build and manage your modern data stack</b> - to make sophisticated measurements, to maintain data security, or to activate across your first party data - specifically to fit your needs."
  ],
  buttonText: "Get in touch",
  buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
  cards: [
    {
      icon: ServiceIcon1.src,
      title: "Performance",
      description: "Reduce signal loss and improve platform algorithms. Ad platforms like Meta, Tiktok, and Google are more and more dependent on \"signal\" from the business. We see significant improvements to incrementality and ROI when brands properly integrate server to server feedback loops.",
      bgColor: "bg-secondary" as const,
      textColor: "#333333",
      iconColor: "invert(0)",
      alt: "Performance Icon"
    },
    {
      icon: Layer11.src,
      title: "Future-Proofing",
      description: "Cookieless data infrastructure resilient against future changes. Building first-party centric databases eliminates concerns for what's coming next.",
      bgColor: "bg-primary" as const,
      textColor: "#ffffff",
      iconColor: "invert(1)",
      alt: "Future-Proofing Icon"
    },
    {
      icon: Layer1.src,
      title: "Privacy",
      description: "Compliance with evolving privacy regulations such as GDPR and CCPA. Whether through legal means or customer preference, building a system that allows you to advertise to new and existing customers in a safe way is critical for a growing business.",
      bgColor: "bg-white" as const,
      textColor: "#333333",
      iconColor: "invert(0)",
      alt: "Privacy Icon"
    }
  ]
};

const dataChallengesServicesData = {
  badge: "ANALYSIS",
  title: "Overcome Data Challenges",
  description: "",
  showButton: true,
  buttonText: "How we work",
  buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
  layout: "2-per-row" as const,
  items: [
    {
      title: "Data Volume",
      description: "Complex data sets integrated and simplified. Most modern businesses need to pull in multiple revenue streams (social commerce, direct to consumer, retail) and marketing data (web analytics, ad spend, business intelligence) to make the right decisions. The volume of data is only going to increase and we can help you build the infrastructure to prepare."
    },
    {
      title: "Compliance",
      description: "Compliance with regulations like GDPR and CCPA. Regulatory and technology pressure are getting more strict every year. Navigating the complex landscape is practically a full time job, one that if done incorrectly opens up businesses to performance hits, audits, and even lawsuits."
    },
    {
      title: "Data Quality",
      description: "Rigorous protocols around QA and data integrity. Is your information accurate and up to date? What if it's not? How will you know? Let us take the anxiety out of the equation and ensure that the decisions you're making are off of quality assured data."
    },
    {
      title: "Integration",
      description: "Connect, seamlessly share, and analyze. Synthesizing all of this information into one clean source allows organizational alignment by all teams and units. Speak the same language, use the same definitions, and refer to the same KPIs across the entire team (internal and external)."
    }
  ]
};

const dataStackCardSliderData = [
  {
    id: "scalable-infrastructure",
    title: "Scalable Infrastructure",
    description: "A data foundation that can grow with your business. We'll help you identify the long term goals of the organization (exit? IPO? ten figure revenue?) and help build the plumbing that will last.",
    image: "https://powerdigitalmarketing.com/wp-content/uploads/2025/05/6e5a3c9229d015405348b2616b9f3db89d16f7f3-768x362.jpg",
    imageAlt: "Scalable Infrastructure",
    bgColor: "bg-grey" as const
  },
  {
    id: "data-ownership",
    title: "Data Ownership",
    description: "Have complete ownership over your first party data. Powerful businesses grow largely off of recurring revenue – revenue driven by your existing customer base. Owning and organizing that customer data is essential for you to scale.",
    image: "https://powerdigitalmarketing.com/wp-content/uploads/2025/05/58a79107a03cfbe6d079080a4978ec99caa94223-768x432.jpg",
    imageAlt: "Data Ownership",
    bgColor: "bg-primary" as const
  },
  {
    id: "etl",
    title: "ETL",
    description: "Centralized cloud-native warehouse (Google Cloud or Snowflake). We're deep partners with both Google and Snowflake and can help navigate the pros and cons of each for our business.",
    image: "https://powerdigitalmarketing.com/wp-content/uploads/2025/05/e9a993a2e6c60d71b41ce237400e2207110be60c-768x504.jpg",
    imageAlt: "ETL",
    bgColor: "bg-white" as const
  },
  {
    id: "data-transformation-pipelines",
    title: "Data Transformation and Pipelines",
    description: "Join and transform data with dbt. We believe it to be the best in class solution for organizing your data into actionable and reliable insights.",
    image: "https://powerdigitalmarketing.com/wp-content/uploads/2025/05/e0d9272cafe5686a499ad84b6d625f5c6f55dc93-768x276.jpg",
    imageAlt: "Data Transformation and Pipelines",
    bgColor: "bg-secondary" as const
  }
];

const AmazonMarketingPage = () => {
  return (
    <>
      <style>
        {`
        .intro-twos-columns__col .btn.btn-secondary{
        display: none;
        }
      `}
      </style>
      <Header />
      <main>
        <section className="single-hero bg-light  bordered-section ">
          <div className="single-hero__text">
            <span className="badge rounded-pill bg-light">Data Infrastructure + CDPs</span>

            <div className="title">
              <h1>Making smart decisions requires <span className="highlighted">accurate and accessible data.</span>  </h1>
            </div>
            <div className="text">
              <p>We build and manage modern data stacks that simplify your data management, integrate all of your different sources, and create actionable insights that lead to smart decisions.</p>

            </div>
            <a href="https://powerdigitalmarketing.com/work-with-us/" className="btn btn-secondary">
              <div className="icon">
                <span>Request a consultation</span>
                <i className="icon-arrow-up-right"></i>
              </div>
            </a>
          </div>

          <div className="single-hero__image">
            <div className="single-badge">
            </div>

            <img src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Data-Infrastructure-CDPs.png" alt="" />
          </div>
        </section>

        <section className="multi-text-section bg-light">
          <Services data={dataChallengesServicesData} />
        </section>

        <section className="multi-text-section bg-dark">
          <div className="multi-text-section__text">
            <div className="title">
              <span className="badge rounded-pill bg-light">data</span>
              <h2>Build a Modern Data Stack</h2>

            </div>
            <div className="paragraph">

            </div>
          </div>
          <Cardslider data={dataStackCardSliderData} />
        </section>

        <WorkWith data={optimizeAdvertisingWorkWithData} />
      </main>



    </>
  );
};

export default AmazonMarketingPage;
