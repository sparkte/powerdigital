"use client";
import Image from "next/image";
import CountUp from "./CountUp";
import HeroAnimation from "./heroanimation";
import NovaReport from '../images/Nova_Reporting_100.png';
import Services_InfluencerOutreach from '../images/Services_InfluencerOutreach_100-1.png';
import Services_SocialMedia from '../images/Services_SocialMedia_100.png';
import ServicesSocialMedia from '../images/Services_SocialMedia_100.png';
import ServicesPublicRelations from '../images/Services_PublicRelations_100.png';
import ServicesSEO from '../images/Services_SEO_100.png';
import ServicesPaidSocial from '../images/Services_PaidSocial_100.png';
import SvgCodeFromOnlineEditor from '../images/SVG-Code-from-Online-Editor.svg';
import TaylorGuitarsLogoPdm from '../images/Taylor_Guitars_logo_pdm.png';
import TheCurrentStateOfTheFashion from '../images/The-Current-State-of-the-Fashion-Industry-Resource-240x300.png';
import Tpc240x300 from '../images/tpc-240x300.png';
import WebContentAuditNextStepsAssess from '../images/WebContent_AuditNextSteps_AssemblingTeam_100.png';
import WebContentAuditNextStepsStrat from '../images/WebContent_AuditNextSteps_StrategyProposal_100.png';
import WebContentTestimonials from '../images/WebContent_Testimonials_100.png';
import WebContentWebinar from '../images/WebContent_Webinar_100.png';
import WhoWeAreLeftSmallWebp from '../images/WHO-WE-ARE-_-Left-small.webp';
import GrazaPdm from '../images/Graza_pdm.png';
import Group259 from '../images/Group-259.png';
import Hero1Desktop from '../images/Hero1_Desktop_90ff40f9-4f69-4acd-ab6f-d5ac8cb69d12-2-e1733342755528.webp'; 
import HippeasPdm from '../images/hippeas_pdm.png';
import InfluencerMarketing from '../images/influencer-marketing-1024x683.jpg';
import JhonnyWasPdm from '../images/jhonny_was_pdm.png';
import LogoBlock from '../images/Logo-Block.png';
import LogoWhiteSvg from '../images/logo-white.svg';
import MielleOrganics from '../images/Mielle-Organics-UNMASKED-berkshire-2021-1-1400x787-1.jpeg';
import NovaMachineLearning from '../images/Nova_MachineLearning-_100.png';
import NovaScale from '../images/Nova_Scale_100-1.png';
import OneillLogoPdm from '../images/oneill-logo_pdm.png';
import PowerSvg from '../images/power.svg';
import ProfileImageFromFigma from '../images/Profile-Image-from-Figma.png';
import RevenueFashion from '../images/RevenueFashion-1024x683.jpg';
import SambazonPdm from '../images/sambazon_pdm.png';
import Screenshot2025 from '../images/Screenshot-2025-09-22-at-12.36.56-AM-1024x750.png';
import ServiceCommunityManagement from '../images/Service_CommunityManagement_100.png';
import ServicePpc from '../images/Service_PPC_100.png';
import ServiceAmazonMarketing from '../images/Services_AmazonMarketing_100.png';
import ServicesContentMarketing from '../images/Services_ContentMarketing_100-1.png';
import ServicesCro from '../images/Services_CRO_100.png';
import ServicesEmailMarketing from '../images/Services_EmailMarketing_100.png';
// import Ninety3dSvg from '../images/93d14b833d89349ea44e.svg';
// import Sixty7ab122ac3c64d89031Svg from '../images/67ab122ac3c64d89031.svg';
// import Seven698bda74b9340381defSvg from '../images/7698bda74b9340381def.svg';
import AliceOliviaPdm from '../images/Alice_Olivia_pdm.png';
import AlliantPdm from '../images/Alliant_pdm.png';
import AsicsPdm from '../images/asics_pdm.png';
import AviatorNationPdm from '../images/aviator-nation_pdm.png';
import B6bc2835Off1283 from '../images/b6bc2835-dd5e-42f4-aab4-0f1283492d0b-1024x683.png';
import B0993e2fd1220992b536f7a8f7d18d from '../images/b0993e2fd1220992b536f7a8fd18db2d-small.webp';
import CatalinaCrunch from '../images/Catalina-crunch_pdm.png';
import CoolaPdm from '../images/Coola_pdm.png';
import CrocsPdm from '../images/crocs_pdm.png';
import CymbiotikaPdm from '../images/Cymbiotika_pdm.png';
import DataworldPdm from '../images/dataworld_pdm.png';
import DataworldSvg from '../images/dataworld.png';
import FaviconSvg from '../images/favicon1.svg';
import FoodBeverage from '../images/food-beverage.png';
import GeneralPowerDigitalMission100 from '../images/General_PowerDigital_Mission_100.png';
import GeneralPowerDigitalValues100 from '../images/General_PowerDigital_Values_100.png';
import GeneralUse2100 from '../images/GeneralUse_2_100.png';
import GeneralUse5100 from '../images/GeneralUse_5_100.png';
import GeneralUse7100 from '../images/GeneralUse_7_100.png';
import GeneralUse9100 from '../images/GeneralUse_9_100.png';
import GoldBellyPdm from '../images/Gold_Belly_pdm.png';
import GorjanaPdm from '../images/gorjana_pdm.png';
import FadeUp from "./FadeUp";
import CustomLogoCarousel from "./LogoCarousel";
import FadeUpAnimatedImage from "./animateimage";
import Fullheader from '../components/fullheader';
import { useState } from "react";
import Metadtalinks from '../components/metadtalinks';
import Seprator from '../components/seprator';
import BlogCardSlider from '../components/BlogCardSlider';
const logos = [
  AliceOliviaPdm,
  AviatorNationPdm,
  AsicsPdm,
  CrocsPdm,
  CoolaPdm,
  CymbiotikaPdm,
  GoldBellyPdm,
  DataworldPdm, 
  GrazaPdm,
  GorjanaPdm,
  JhonnyWasPdm,
  HippeasPdm,
  OneillLogoPdm,
  TaylorGuitarsLogoPdm,
  SambazonPdm,
  CatalinaCrunch,
  AlliantPdm,
  // Repeat logos as needed for the marquee effect
];

export default function Home() {
    const [showNavbarLogo, setShowNavbarLogo] = useState(false);

  return (
    <>
  <Metadtalinks/>
  <Fullheader showLogo={showNavbarLogo} />
  <main>
    <HeroAnimation PowerSvg={PowerSvg} onHeroLogoHide={setShowNavbarLogo}/>
    <Seprator/>
    <section className="dual-layout-section bg-light ">
      <div className="container-note-image ">
        <FadeUp>
        <div className="note-image fade-up">
          <Image
            className="note-image__img"
            src={WhoWeAreLeftSmallWebp}
            alt="img"
          />
        </div>
        </FadeUp>
        <div className="text-section">
          <span className="badge rounded-pill bg-dark">who we are</span>
          <div className="title">
            <h2> Transform uncertain into undeniable. </h2>
          </div>
          <div className="text">
            <p>
              Power is the digital marketing firm that operates at the
              intersection of data, technology, and human intelligence to make
              profit predictable. In today’s hyper-competitive, often volatile
              marketplace, average results just won’t cut it.
            </p>
          </div>
          <a
            href="https://powerdigitalmarketing.com/work-with-us/"
            className="btn btn-secondary"
          >
            <div className="icon">
              <span>Accelerate your business</span>
              <i className="icon-arrow-up-right" />
            </div>
          </a>
        </div>
      </div>
    </section>
    <section className="dual-layout-section bg-light ">
      <div className="container-note-image is-reversed">
        <FadeUp>
        <div className="note-image fade-up">
          <Image
            className="note-image__img"
            src={Group259}
            alt="img"
          />
        </div>
        </FadeUp>
        <div className="text-section">
          <span className="badge rounded-pill bg-dark">Our Approach</span>
          <div className="title">
            <h2> Welcome to the end of gut feelings </h2>
          </div>
          <div className="text">
            <p>
              As a leading global digital marketing agency, we do everything in
              our power to quell uncertainty through total transparency. We
              provide receipts for what’s driving business impact, believing in
              accountability versus obfuscation. Our unconventional approach
              integrates strategic consulting, data intelligence, channel
              expertise and proprietary technology — enabling our teams to
              develop clear, actionable insights and activate high-performing
              digital marketing campaigns.
            </p>
          </div>
          <a
            href="https://powerdigitalmarketing.com/approach/"
            className="btn btn-secondary"
          >
            <div className="icon">
              <span>How we work</span>
              <i className="icon-arrow-up-right" />
            </div>
          </a>
        </div>
      </div>
    </section>
    <section className="data-driven-insight bg-dark">
      <div className="separator">
        <div className="separator__title">
          <h2>Get the data that dominates doubt.</h2>
          <Image src={LogoBlock} alt="img"  />
        </div>
        <hr />
        <div className="separator__text">
          <span>POWER DIGITAL</span>
          <div>
            <span>OUR RESULTS</span>
          </div>
        </div>
      </div>
      
      <div className="data-driven-insight__content">
        <FadeUpAnimatedImage className="data-driven-insight__image" src={Hero1Desktop}
          alt="img" />
        {/* <Image"
          className="data-driven-insight__image fade-up"
          src={Hero1Desktop}
          alt="img"
        /> */}
        <article className="note bg-primary">
          <div className="note__text">
            <p>
              Power brings a fresh, analytical approach to our campaigns,
              finding unique entry points and solutions that many would
              overlook. Their involvement transcends traditional marketing,
              delving into the economic aspects of our business to ensure all
              strategies are sustainable and scalable. Their commitment to our
              success is evident, and their expertise is a cornerstone of our
              strategic planning.
            </p>
          </div>
          <div className="testimonial-person">
            <div className="person-info">
              <div className="person-photo">
                <Image
                  src={ProfileImageFromFigma}
                  alt="img"
                />
              </div>
              <div className="person-details">
                <h3 className="person-name interface-small">Ashley Bryan</h3>
                <p className="person-title">Chief Digital Officer @ L’AGENCE</p>
              </div>
            </div>
            <div className="company-logo">
              <Image src={LogoBlock} alt="img"  />
            </div>
          </div>
        </article>
        <div className="data-driven-insight__text">
          <span className="badge rounded-pill bg-light">Our results</span>
          <div className="data-driven-insight__insight  insight-section">
            <div>
              <CountUp  end={27} suffix="%" prefix="+"/>
              <p>
                Increase in YoY revenue growth — 2.6x faster than the industry
                average.
              </p>
            </div>
            <div>
             <CountUp  end={95} suffix="%" />
              <p>
                Client retention rate, because exceeding expectations is our
                standard.
              </p>
            </div>
          </div>
          <div className="paragraph">
            <p>
              Simply put, we invest in the best technology and talent to produce
              outsized results and build trusting relationships with our
              clients. Get started today with an integrated digital strategy
              that’s tailored to profitably grow your unique business, generate
              ROI, drive higher EBITDA and exceed your business goals.
            </p>
          </div>
          <a
            href="https://powerdigitalmarketing.com/case-studies/"
            className="btn btn-secondary"
          >
            <div className="icon">
              <span>Our impact</span>
              <i className="icon-arrow-up-right" />
            </div>
          </a>
        </div>
      </div>
    </section>
    <section className="case-studies bg-dark">
      <div className="separator">
        <FadeUp>
        <div className="separator__title">
          <h2>
            <span className="heading-xxl fade-up">Case</span>
            <span className="heading-xxl fade-up">Studies</span>
          </h2>
        </div>
        </FadeUp>
        <hr />
        <div className="separator__text">
          <span>POWER DIGITAL</span>
          <div>
            <span className="separator__number">03</span>
            <span>OUR CLIENTS</span>
          </div>
        </div>
      </div>
      <div className="case-studies__content">
        <div className="case-studies__filters">
          <a href="#" className="btn btn-sm btn-outline-dark block">
            Case studies
          </a>
          <a href="/case-studies" className="btn btn-sm btn-secondary">
            View all
          </a>
        </div>
        <ul className="case-studies__list">
          <li className="case-studies__item position-relative">
            <div className="case-studies__item-number">
              <span>01</span>
            </div>
            <div className="case-studies__item-content">
              <h3 className="title">Alliant University</h3>
              <p className="industry">Consumer Service</p>
              <p className="service">
                From Insights to Impact: Power Digital’s Approach Amplifies
                Higher Ed Applicant Pipeline{" "}
              </p>
            </div>
            <div className="case-studies__item-arrow">
              <a
                href="https://powerdigitalmarketing.com/case-studies/alliant-university/"
                className="btn btn--round btn-sm btn-outline-dark stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </li>
          <li className="case-studies__item position-relative">
            <div className="case-studies__item-number">
              <span>02</span>
            </div>
            <div className="case-studies__item-content">
              <h3 className="title">Vix</h3>
              <p className="industry">Consumer Product</p>
              <p className="service">
                Explore how our strategic approach catalyzed profitable,
                sustainable growth for ViX Paula Hermanny.
              </p>
            </div>
            <div className="case-studies__item-arrow">
              <a
                href="https://powerdigitalmarketing.com/case-studies/vix/"
                className="btn btn--round btn-sm btn-outline-dark stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>{" "}
    <section className="full-image-testimonial bg-dark  section-outer">
      <Image
        className="full-image-testimonial__image"
        src={B0993e2fd1220992b536f7a8f7d18d}
        alt=""
        style={{ maxHeight: "px" }}
      />
      
      <article className="2 note  is-article-outer z-100">
        <div className="note__text">
          <p>
            Their ability to understand our goals, customer journey, and
            challenges was truly remarkable. They helped us navigate a complex
            competitive landscape and achieve breakthrough results, all while
            staying well below our competitors spend threshold.
          </p>
        </div>
        <div className="testimonial-person">
          <div className="person-info">
            <div className="person-photo">
              <Image
                src={MielleOrganics}
                alt="img"
              />
            </div>
            <div className="person-details">
              <h3 className="person-name interface-small">Kaitlyn Crawford</h3>
              <p className="person-title">VP of Marketing @ Data.World</p>
            </div>
          </div>
          <div className="company-logo">
            <Image src={DataworldSvg} alt="" />
          </div>
        </div>
      </article>
      
    </section>
    <CustomLogoCarousel logos={logos}></CustomLogoCarousel>
    {/* <section className="logo-carousel bg-light">
      
      <div className="logo-carousel__title">
        <h2>We’ve helped clients become industry leaders</h2>
      </div>
      <div className="logo-carousel__mobile">
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <Image src={AliceOliviaPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={AviatorNationPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={AsicsPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={CrocsPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={CoolaPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={CymbiotikaPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={GoldBellyPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={DataworldPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={AliceOliviaPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={AviatorNationPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={AsicsPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={CrocsPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={CoolaPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={CymbiotikaPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={GoldBellyPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={DataworldPdm} alt="" />
            </div>
          </div>
        </div>
        <div className="swiper mySwiper2">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <Image src={GrazaPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={GorjanaPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={JhonnyWasPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={HippeasPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={OneillLogoPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={TaylorGuitarsLogoPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={SambazonPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={CatalinaCrunch} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={AlliantPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={GrazaPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={GorjanaPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={JhonnyWasPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={HippeasPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={OneillLogoPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={TaylorGuitarsLogoPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={SambazonPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={CatalinaCrunch} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={AlliantPdm} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="logo-carousel__desktop">
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <Image src={AliceOliviaPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={AviatorNationPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={AsicsPdm}alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={CrocsPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={CoolaPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={CymbiotikaPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={GoldBellyPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={DataworldPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={GrazaPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={GorjanaPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={JhonnyWasPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={HippeasPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={OneillLogoPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={TaylorGuitarsLogoPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={SambazonPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={CatalinaCrunch} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={AlliantPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={AliceOliviaPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={AviatorNationPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={AsicsPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={CrocsPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={CoolaPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={CymbiotikaPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={GoldBellyPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={DataworldPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={GrazaPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={GorjanaPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={JhonnyWasPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={HippeasPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={OneillLogoPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={TaylorGuitarsLogoPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={SambazonPdm} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={CatalinaCrunch} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={AlliantPdm} alt="" />
            </div>
          </div>
        </div>
      </div> 
    </section>{" "} */}
    
    <section className="services-overview  bg-light">
      <div className="services-overview__content">
        <div className="services-overview__title">
          <h2>Our Services</h2>
        </div>
        <div className="services-overview__text">
          <p>
            Our comprehensive suite of digital and growth marketing services
            ignite every phase of the customer journey. From strategic
            consulting to creative, our driving force is delivering business
            impact that can’t be ignored.
          </p>
        </div>
      </div>
      <ul className="services-overview__list">
        <li>
          <a
            href="https://powerdigitalmarketing.com/services/cro-conversion-rate-optimization/"
            className="btn btn-dark m-0"
          >
            CRO
          </a>
        </li>
        <li>
          <a
            href="https://powerdigitalmarketing.com/?page_id=7167"
            className="btn btn-outline-dark m-0"
          >
            Marketing Measurement + Incrementality
          </a>
        </li>
        <li>
          <a
            href="https://powerdigitalmarketing.com/services/seo/"
            className="btn btn-dark m-0"
          >
            SEO
          </a>
        </li>
        <li>
          <a
            href="https://powerdigitalmarketing.com/services/tiktok/"
            className="btn btn-grey m-0"
          >
            TikTok
          </a>
        </li>
        <li>
          <a
            href="https://powerdigitalmarketing.com/services/paid-social-media/"
            className="btn btn-primary m-0"
          >
            Paid Social
          </a>
        </li>
        <li>
          <a
            href="https://powerdigitalmarketing.com/services/creative-services-strategy/"
            className="btn btn-primary m-0"
          >
            Creative Services (Strategy)
          </a>
        </li>
        <li>
          <a
            href="https://powerdigitalmarketing.com/services/email-marketing/"
            className="btn btn-grey m-0"
          >
            Email &amp; SMS
          </a>
        </li>
        <li>
          <a
            href="https://powerdigitalmarketing.com/strategic-consulting-go-to-market-strategy/"
            className="btn btn-outline-dark m-0"
          >
            Strategic Consulting - Go To Market Strategy
          </a>
        </li>
        <li>
          <a
            href="https://powerdigitalmarketing.com/services/public-relations/"
            className="btn btn-dark m-0"
          >
            Public Relations
          </a>
        </li>
        <li>
          <a
            href="https://powerdigitalmarketing.com/services/influencer-marketing/"
            className="btn btn-grey m-0"
          >
            Influencer
          </a>
        </li>
        <li>
          <a
            href="https://powerdigitalmarketing.com/services/content-marketing/"
            className="btn btn-primary m-0"
          >
            Content Marketing
          </a>
        </li>
      </ul>
      <a
        className="btn btn-secondary"
        href="https://powerdigitalmarketing.com/services/"
      >
        <div className="icon">
          <span>View All Services</span>
          <i className="icon-arrow-up-right" />
        </div>
      </a>
    </section>{" "}
    <div className="separator">
      <hr />
      <div className="separator__text">
        <span>Power Digital</span>
        <div>
          <span className="separator__number">04</span>
          <span>OUR SERVICES</span>
        </div>
      </div>
    </div>
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
  </main>
  <footer className="footer">
    <section className="interested-form">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="interested-form__content">
             <FadeUp> <h2 className="fade-up">
                Ready to be <span>undeniable?</span>
              </h2></FadeUp>
              
              <div className="interested-form__two-columns">
                <FadeUp>
                <div className="text fade-up">
                  <p>
                    For brands and enterprise companies that demand digital
                    marketing strategies with proven impact, Power is ready to
                    be your partner in business growth.
                  </p>
                  <div className="text-form">
                    <p>Request your free marketing audit to get started.</p>
                  </div>
                  <a href="#" className="btn btn-secondary" id="interestedForm">
                    <div className="icon">
                      <span>Get in touch</span>
                      <i className="icon-arrow-up-right" />
                    </div>
                  </a>
                </div></FadeUp>
                <div className="form-suscribe">
                  <div
                    className="hubspot-form-container"
                    id="hs-form-75d7810d-097e-453a-a34c-606558deaa12-2"
                  ></div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="footer__content">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-4">
            <div className="footer__content__logo">
              <a href="">
                <Image
                  src={LogoWhiteSvg}
                  alt="Power Digital Marketing"
                />
              </a>
              <p>
                A leading, privately held growth marketing agency helping brands
                ignite revenue and brand recognition.
              </p>
            </div>
            <div className="footer__content__addres d-none d-lg-block">
              <div className="gfooter__addresses">
                <div className="address-container">
                  <a
                    href="https://powerdigitalmarketing.com/san-diego/"
                    className="address-link"
                  >
                    <p>San Diego</p>
                  </a>
                  <address>
                    2251 San Diego Ave.
                    <br />
                    San Diego, CA 92110
                  </address>
                </div>
                <div className="address-container">
                  <a
                    href="https://powerdigitalmarketing.com/new-york/"
                    className="address-link"
                  >
                    <p>New York</p>
                  </a>
                  <address>
                    407 Broome St
                    <br />
                    New York, NY 10013
                  </address>
                </div>
                <div className="address-container">
                  <a
                    href="https://powerdigitalmarketing.com/medellin/"
                    className="address-link"
                  >
                    <p>Medellín</p>
                  </a>
                  <address>
                    Cra. 43A #5A - 113
                    <br />
                    One Plaza Business Center
                    <br />
                    Medellín, Colombia
                  </address>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="footer__content__services">
              <h3>Learn About Power</h3>
              <ul>
                <li>
                  <a href="https://powerdigitalmarketing.com/approach/">
                    Approach
                  </a>
                </li>
                <li>
                  <a href="https://powerdigitalmarketing.com/services/">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/case-studies/">Results</a>
                </li>
                <li>
                  <a href="/nova/">Technology</a>
                </li>
                <li>
                  <a href="https://powerdigitalmarketing.com/company/">
                    Company
                  </a>
                </li>
                <li>
                  <a href="/company/careers/">Careers</a>
                </li>
                <li>
                  <a href="https://powerdigitalmarketing.com/blog/">Blog</a>
                </li>
                <li>
                  <a href="/work-with-us/">Work With Us</a>
                </li>
                <li>
                  <a href="https://trust-center.powerdigitalmarketing.com/doc/trust?id=661f051741dd1fbb4536c04d&r=ggd678n3cmyxdjwrnhbos7&_gl=1*1o7bths*_gcl_au*MTI5MTkwMzE1MC4xNzMyNTY0Mzg4*_ga*MTI1MTU5NTg5MC4xNzMyNTY0Mzg4*_ga_H7150FWT9R*MTczMzQyMzUyNC4yOC4xLjE3MzM0MzYyOTkuNTIuMC4w">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="https://trust-center.powerdigitalmarketing.com/doc/trust?rid=6671a6a7daa79be4542dcf89&r=ggd678n3cmyxdjwrnhbos7&_gl=1*1wrlvuk*_gcl_au*MTI5MTkwMzE1MC4xNzMyNTY0Mzg4*_ga*MTI1MTU5NTg5MC4xNzMyNTY0Mzg4*_ga_H7150FWT9R*MTczMzQyMzUyNC4yOC4xLjE3MzM0MzYyMzcuMzEuMC4w">
                    Privacy Statement
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="footer__content__newsletter">
              <div className="client-cta">
                <h3>Already a client?</h3>
                <a
                  href="https://prod-nova.us.auth0.com/u/login"
                  className="btn btn-secondary"
                >
                  <div className="icon">
                    <span>Login</span>
                    <i className="icon-arrow-up-right" />
                  </div>
                </a>
              </div>
              <div className="form-newsletter">
                <h3>Newsletter</h3>
                <p>
                  Learn with us as we help clients grow their customers and
                  build their brands.
                </p>
                <div className="container-form">
                  <label className="form-label">Your email</label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 d-block d-lg-none">
            <div className="footer__content__addres">
              <div className="gfooter__addresses">
                <div className="address-container">
                  <p>San Diego</p>
                  <address>
                    2251 San Diego Ave,
                    <br />
                    San Diego, CA 92110
                  </address>
                </div>
                <div className="address-container">
                  <p>New York</p>
                  <address>
                    407 Broome St
                    <br />
                    New York, NY 10013
                  </address>
                </div>
                <div className="address-container">
                  <p>Boston</p>
                  <address>
                    134 Turnpike Road
                    <br />
                    Suite 100
                    <br />
                    Southborough, MA 01772
                  </address>
                </div>
                <div className="address-container">
                  <p>Columbus</p>
                  <address>
                    6631 Commerce Pkwy
                    <br />
                    Suite A
                    <br />
                    Dublin, OH 43017
                  </address>
                </div>
                <div className="address-container">
                  <p>Washington, D.C.</p>
                  <address>
                    1201 Wilson Blvd
                    <br />
                    Ste 28-111
                    <br />
                    Arlington, VA 22209
                  </address>
                </div>
                <div className="address-container">
                  <p>Medellín</p>
                  <address>
                    Cra. 43A #5A - 113
                    <br />
                    One Plaza Business Center
                    <br />
                    Medellín, Colombia
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer__content__terms">
              <p>
                © 2024 Power Digital Marketing. All rights reserved.{" "}
                <a href="https://trust-center.powerdigitalmarketing.com/doc/trust?rid=6671a6a7daa79be4542dcf89&r=ggd678n3cmyxdjwrnhbos7&_gl=1*qamdhs*_gcl_au*MTMyODEwODAzLjE3MjgzMjU4MTA.*_ga*MTEwMTQyMTg0MC4xNjg5MDI1NTI5*_ga_H7150FWT9R*MTczMzI2MTg3OC4yMTYuMC4xNzMzMjYxODgwLjU4LjAuMA..">
                  Privacy policy.
                </a>{" "}
                <a href="https://trust-center.powerdigitalmarketing.com/doc/trust?id=661f051741dd1fbb4536c04d&r=ggd678n3cmyxdjwrnhbos7&_gl=1*n622g1*_gcl_au*MTMyODEwODAzLjE3MjgzMjU4MTA.*_ga*MTEwMTQyMTg0MC4xNjg5MDI1NTI5*_ga_H7150FWT9R*MTczMzI2MTg3OC4yMTYuMC4xNzMzMjYxODgzLjU1LjAuMA..">
                  Cookie policy.
                </a>{" "}
                <a href="https://trust-center.powerdigitalmarketing.com/doc/trust?id=6615d2cf8c676175f232105e&r=ggd678n3cmyxdjwrnhbos7&_gl=1*yx4rrb*_gcl_au*MTMyODEwODAzLjE3MjgzMjU4MTA.*_ga*MTEwMTQyMTg0MC4xNjg5MDI1NTI5*_ga_H7150FWT9R*MTczMzI2MTg3OC4yMTYuMC4xNzMzMjYxODkwLjQ4LjAuMA..">
                  Terms of use.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Begin Accessible Web A11Y Center Button Snippet */}
    {/* End Accessible Web A11Y Center Button Snippet */}
    {/* Consent Management powered by Complianz | GDPR/CCPA Cookie Consent https://wordpress.org/plugins/complianz-gdpr */}
    <div id="cmplz-cookiebanner-container">
      <div
        className="cmplz-cookiebanner cmplz-hidden banner-1 banner-a optout cmplz-bottom-right cmplz-categories-type-view-preferences"
        aria-modal="true"
        data-nosnippet="true"
        role="dialog"
        aria-live="polite"
        aria-labelledby="cmplz-header-1-optout"
        aria-describedby="cmplz-message-1-optout"
      >
        <div className="cmplz-header">
          <div className="cmplz-logo" />
          <div className="cmplz-title" id="cmplz-header-1-optout">
            Manage Consent
          </div>
          <div
            className="cmplz-close"
            tabIndex={0}
            role="button"
            aria-label="Close dialog"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="times"
              className="svg-inline--fa fa-times fa-w-11"
              role="Image"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 352 512"
            >
              <path
                fill="currentColor"
                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
              />
            </svg>
          </div>
        </div>
        <div className="cmplz-divider cmplz-divider-header" />
        <div className="cmplz-body">
          <div className="cmplz-message" id="cmplz-message-1-optout">
            To provide the best experiences, we use technologies like cookies to
            store and/or access device information. Consenting to these
            technologies will allow us to process data such as browsing behavior
            or unique IDs on this site. Not consenting or withdrawing consent,
            may adversely affect certain features and functions.
          </div>
          {/* categories start */}
          <div className="cmplz-categories">
            <details className="cmplz-category cmplz-functional">
              <summary>
                <span className="cmplz-category-header">
                  <span className="cmplz-category-title">Functional</span>
                  <span className="cmplz-always-active">
                    <span className="cmplz-banner-checkbox">
                      <input
                        type="checkbox"
                        id="cmplz-functional-optout"
                        data-category="cmplz_functional"
                        className="cmplz-consent-checkbox cmplz-functional"
                        size={40}
                        defaultValue={1}
                      />
                      <label
                        className="cmplz-label"
                        htmlFor="cmplz-functional-optout"
                        tabIndex={0}
                      >
                        <span className="screen-reader-text">Functional</span>
                      </label>
                    </span>
                    Always active{" "}
                  </span>
                  <span className="cmplz-icon cmplz-open">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      height={18}
                    >
                      <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
                    </svg>
                  </span>
                </span>
              </summary>
              <div className="cmplz-description">
                <span className="cmplz-description-functional">
                  The technical storage or access is strictly necessary for the
                  legitimate purpose of enabling the use of a specific service
                  explicitly requested by the subscriber or user, or for the
                  sole purpose of carrying out the transmission of a
                  communication over an electronic communications network.
                </span>
              </div>
            </details>
            <details className="cmplz-category cmplz-preferences">
              <summary>
                <span className="cmplz-category-header">
                  <span className="cmplz-category-title">Preferences</span>
                  <span className="cmplz-banner-checkbox">
                    <input
                      type="checkbox"
                      id="cmplz-preferences-optout"
                      data-category="cmplz_preferences"
                      className="cmplz-consent-checkbox cmplz-preferences"
                      size={40}
                      defaultValue={1}
                    />
                    <label
                      className="cmplz-label"
                      htmlFor="cmplz-preferences-optout"
                      tabIndex={0}
                    >
                      <span className="screen-reader-text">Preferences</span>
                    </label>
                  </span>
                  <span className="cmplz-icon cmplz-open">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      height={18}
                    >
                      <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
                    </svg>
                  </span>
                </span>
              </summary>
              <div className="cmplz-description">
                <span className="cmplz-description-preferences">
                  The technical storage or access is necessary for the
                  legitimate purpose of storing preferences that are not
                  requested by the subscriber or user.
                </span>
              </div>
            </details>
            <details className="cmplz-category cmplz-statistics">
              <summary>
                <span className="cmplz-category-header">
                  <span className="cmplz-category-title">Statistics</span>
                  <span className="cmplz-banner-checkbox">
                    <input
                      type="checkbox"
                      id="cmplz-statistics-optout"
                      data-category="cmplz_statistics"
                      className="cmplz-consent-checkbox cmplz-statistics"
                      size={40}
                      defaultValue={1}
                    />
                    <label
                      className="cmplz-label"
                      htmlFor="cmplz-statistics-optout"
                      tabIndex={0}
                    >
                      <span className="screen-reader-text">Statistics</span>
                    </label>
                  </span>
                  <span className="cmplz-icon cmplz-open">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      height={18}
                    >
                      <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
                    </svg>
                  </span>
                </span>
              </summary>
              <div className="cmplz-description">
                <span className="cmplz-description-statistics">
                  The technical storage or access that is used exclusively for
                  statistical purposes.
                </span>
                <span className="cmplz-description-statistics-anonymous">
                  The technical storage or access that is used exclusively for
                  anonymous statistical purposes. Without a subpoena, voluntary
                  compliance on the part of your Internet Service Provider, or
                  additional records from a third party, information stored or
                  retrieved for this purpose alone cannot usually be used to
                  identify you.
                </span>
              </div>
            </details>
            <details className="cmplz-category cmplz-marketing">
              <summary>
                <span className="cmplz-category-header">
                  <span className="cmplz-category-title">Marketing</span>
                  <span className="cmplz-banner-checkbox">
                    <input
                      type="checkbox"
                      id="cmplz-marketing-optout"
                      data-category="cmplz_marketing"
                      className="cmplz-consent-checkbox cmplz-marketing"
                      size={40}
                      defaultValue={1}
                    />
                    <label
                      className="cmplz-label"
                      htmlFor="cmplz-marketing-optout"
                      tabIndex={0}
                    >
                      <span className="screen-reader-text">Marketing</span>
                    </label>
                  </span>
                  <span className="cmplz-icon cmplz-open">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      height={18}
                    >
                      <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
                    </svg>
                  </span>
                </span>
              </summary>
              <div className="cmplz-description">
                <span className="cmplz-description-marketing">
                  The technical storage or access is required to create user
                  profiles to send advertising, or to track the user on a
                  website or across several websites for similar marketing
                  purposes.
                </span>
              </div>
            </details>
          </div>
          {/* categories end */}
        </div>
        <div className="cmplz-links cmplz-information">
          <a
            className="cmplz-link cmplz-manage-options cookie-statement"
            href="#"
            data-relative_url="#cmplz-manage-consent-container"
          >
            Manage options
          </a>
          <a
            className="cmplz-link cmplz-manage-third-parties cookie-statement"
            href="#"
            data-relative_url="#cmplz-cookies-overview"
          >
            Manage services
          </a>
          <a
            className="cmplz-link cmplz-manage-vendors tcf cookie-statement"
            href="#"
            data-relative_url="#cmplz-tcf-wrapper"
          >
            Manage {"{"}vendor_count{"}"} vendors
          </a>
          <a
            className="cmplz-link cmplz-external cmplz-read-more-purposes tcf"
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://cookiedatabase.org/tcf/purposes/"
          >
            Read more about these purposes
          </a>
        </div>
        <div className="cmplz-divider cmplz-footer" />
        <div className="cmplz-buttons">
          <button className="cmplz-btn cmplz-accept">Accept</button>
          <button className="cmplz-btn cmplz-deny">Deny</button>
          <button className="cmplz-btn cmplz-view-preferences">
            View preferences
          </button>
          <button className="cmplz-btn cmplz-save-preferences">
            Save preferences
          </button>
          <a
            className="cmplz-btn cmplz-manage-options tcf cookie-statement"
            href="#"
            data-relative_url="#cmplz-manage-consent-container"
          >
            View preferences
          </a>
        </div>
        <div className="cmplz-links cmplz-documents">
          <a
            className="cmplz-link cookie-statement"
            href="#"
            data-relative_url=""
          >
            {"{"}title{"}"}
          </a>
          <a
            className="cmplz-link privacy-statement"
            href="#"
            data-relative_url=""
          >
            {"{"}title{"}"}
          </a>
          <a className="cmplz-link impressum" href="#" data-relative_url="">
            {"{"}title{"}"}
          </a>
        </div>
      </div>
    </div>
    <div id="cmplz-manage-consent" data-nosnippet="true">
      <button className="cmplz-btn cmplz-hidden cmplz-manage-consent manage-consent-1">
        Manage consent
      </button>
    </div>
    {/* Clearbit Tag */}
    {/* End Clearbit Tag */}
    {/* Chilipiper Script Start */}
    {/* Chilipiper Script END */}
  </footer>
</>

  );
}
