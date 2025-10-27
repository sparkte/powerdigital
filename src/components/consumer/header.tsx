"use client";
import NovaReport from "../../images/Nova_Reporting_100.png";
import Services_InfluencerOutreach from "../../images/Services_InfluencerOutreach_100-1.png";
import Services_SocialMedia from "../../images/Services_SocialMedia_100.png";
// Renamed to avoid clash with other Services_SocialMedia_100.png image import
import ServicesSocialMedia from "../../images/Services_SocialMedia_100.png";
import ServicesPublicRelations from "../../images/Services_PublicRelations_100.png";
import ServicesSEO from "../../images/Services_SEO_100.png";
import ServicesPaidSocial from "../../images/Services_PaidSocial_100.png";
import SvgCodeFromOnlineEditor from "../../images/SVG-Code-from-Online-Editor.svg";
import TheCurrentStateOfTheFashion from "../../images/The-Current-State-of-the-Fashion-Industry-Resource-240x300.png";
import Tpc240x300 from "../../images/tpc-240x300.png";
import WebContentAuditNextStepsAssess from "../../images/WebContent_AuditNextSteps_AssemblingTeam_100.png";
import WebContentAuditNextStepsStrat from "../../images/WebContent_AuditNextSteps_StrategyProposal_100.png";
import WebContentTestimonials from "../../images/WebContent_Testimonials_100.png";
import WebContentWebinar from "../../images/WebContent_Webinar_100.png";
import ServiceCommunityManagement from "../../images/Service_CommunityManagement_100.png";
import ServicePpc from "../../images/Service_PPC_100.png";
import ServiceAmazonMarketing from "../../images/Services_AmazonMarketing_100.png";
import ServicesContentMarketing from "../../images/Services_ContentMarketing_100-1.png";
import ServicesCro from "../../images/Services_CRO_100.png";
import ServicesEmailMarketing from "../../images/Services_EmailMarketing_100.png";
import NovaMachineLearning from "../../images/Nova_MachineLearning-_100.png";
import NovaScale from "../../images/Nova_Scale_100-1.png";
import GeneralPowerDigitalMission100 from "../../images/General_PowerDigital_Mission_100.png";
import GeneralPowerDigitalValues100 from "../../images/General_PowerDigital_Values_100.png";
import GeneralUse2100 from "../../images/GeneralUse_2_100.png";
import GeneralUse5100 from "../../images/GeneralUse_5_100.png";
import GeneralUse7100 from "../../images/GeneralUse_7_100.png";
import GeneralUse9100 from "../../images/GeneralUse_9_100.png";

import Image from "next/image";
import React, { useState } from 'react'




export default function Header() {
    // 1. State to manage the menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);
            // 2. State to manage the selected menu item (default: Growth Marketing)
        // State to manage which Services menu tab is selected
        type MenuItemKey = "growth-marketing" | "data-intelligence" | "consulting" | "creative";
        const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItemKey>("growth-marketing");

        // Function to handle menu tab clicks
        const handleTabClick = (menuKey: MenuItemKey) => {
        setSelectedMenuItem(menuKey);
        };

    // Function to toggle the menu state
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    
    

    // Conditionally apply a class to the header for broader CSS control
    const headerClass = isMenuOpen ? 'header header-home menu-open-state' : 'header header-home';

   

    return (
        <>
        <style>
            {`
            @media (max-width: 1430px) {
                .header .navbar-container .nav-container>ul>.has-mega-menu:active .mega-menu, .header .navbar-container .nav-container>ul>.has-mega-menu:focus-visible .mega-menu, .header .navbar-container .nav-container>ul>.has-mega-menu:hover .mega-menu, .header .navbar-container .nav-container>ul>.has-mega-menu:target .mega-menu {
                    transform: translate(-30%) !important;
                }
            }
            @media (max-width: 992px) {
                .header .navbar-container .nav-container>ul>.has-mega-menu:active .mega-menu, .header .navbar-container .nav-container>ul>.has-mega-menu:focus-visible .mega-menu, .header .navbar-container .nav-container>ul>.has-mega-menu:hover .mega-menu, .header .navbar-container .nav-container>ul>.has-mega-menu:target .mega-menu {
                    transform: translateX(0) !important;
                }
            }
            `}
        </style>
        <header className={headerClass}>
            <div className="top-bar">
                <a className="d-flex d-md-none" href="/work-with-us/">
                    <span>
                        Start with a free <strong> marketing strategy audit</strong>
                    </span>{" "}
                    <i className="icon-arrow-right" />
                </a>
                <a className="d-none d-md-flex" href="/work-with-us/">
                    <span>
                        Start improving conversions with a{" "}
                        <strong>free marketing strategy audit</strong>
                    </span>
                    <i className="icon-arrow-right" />
                </a>
            </div>
            <nav className="navbar-container" style={{ background: "#f4f4f7" }}>
                <a
                    className="navbar-brand "
                    href="https://powerdigitalmarketing.com"
                    aria-label="Home - Power Digital Marketing"
                >
                    {/* SVG Logo - Assuming it should always show here, no showLogo prop in this function */}
                    <svg
                        width={140}
                        height={25}
                        viewBox="0 0 140 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-hidden="true"
                    >
                        <path
                            className="name"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M51.4346 24.4131H45.9418C46.2038 16.2896 46.3348 8.1916 45.9331 0.00854492H46.5357H55.5476C60.0885 0.0170512 63.7038 3.15587 64.088 7.53661C64.4723 11.9514 61.4334 15.473 57.3378 16.2471C56.0172 16.4989 54.6854 16.4675 53.3559 16.4362C53.0238 16.4284 52.6918 16.4206 52.3603 16.4172H51.1639C51.1028 19.1052 51.1202 21.7421 51.4346 24.4131ZM51.3288 11.8698L51.3288 11.8698C51.4015 11.8816 51.4643 11.8918 51.5307 11.8918C51.9851 11.8918 52.4385 11.8928 52.8916 11.8937H52.8919C53.7971 11.8956 54.701 11.8975 55.6088 11.8918C55.9319 11.8918 56.255 11.8323 56.5606 11.7557C58.4468 11.2539 59.3637 9.45053 59.1542 7.81732C58.9009 5.80984 57.5037 4.56792 55.5564 4.5424C54.2639 4.53389 52.9628 4.52539 51.6704 4.52539C51.542 4.52539 51.4137 4.54066 51.2894 4.55545H51.2894H51.2894L51.2893 4.55545L51.2893 4.55546L51.2892 4.55546H51.2892C51.2529 4.55979 51.2169 4.56407 51.1814 4.56792V11.8493H51.1901C51.2413 11.8555 51.2867 11.8629 51.3288 11.8698ZM82.6097 7.05176H87.8056C87.8782 7.39829 87.9481 7.74352 88.0178 8.08743L88.0179 8.08823L88.018 8.08831C88.1996 8.98509 88.3794 9.87298 88.6003 10.752C88.7627 11.4029 88.9498 12.0466 89.1366 12.6895L89.1367 12.6898L89.1368 12.6901L89.1369 12.6904C89.3015 13.257 89.466 13.823 89.6132 14.3927C89.6982 14.7193 89.7807 15.0459 89.8632 15.3726L89.8632 15.3726L89.8635 15.3741L89.8639 15.3753C90.0862 16.2562 90.3089 17.1383 90.5826 18.0249C91.0753 15.759 91.7771 13.5589 92.4791 11.3581L92.4791 11.358L92.4791 11.358L92.4791 11.358L92.4792 11.3577C92.9341 9.93159 93.3891 8.50513 93.7874 7.06026H98.241C98.6055 8.39427 99.0196 9.71371 99.4334 11.0324L99.4334 11.0325L99.4335 11.0325L99.4335 11.0326L99.4335 11.0326C100.16 13.3464 100.885 15.6579 101.341 18.0419H101.341C101.385 18.0419 101.428 18.0419 101.472 18.0334C101.489 18.001 101.509 17.9686 101.529 17.936L101.529 17.936C101.573 17.8657 101.617 17.7941 101.629 17.7187C101.851 16.2144 102.279 14.7605 102.707 13.3055L102.707 13.3053L102.707 13.3051C102.938 12.5222 103.168 11.7391 103.367 10.9476C103.558 10.1824 103.718 9.40591 103.878 8.6306L103.878 8.62979L103.878 8.62905C103.959 8.23287 104.041 7.83699 104.127 7.44305C104.147 7.353 104.176 7.26294 104.209 7.16554L104.209 7.16483C104.219 7.13364 104.23 7.10171 104.24 7.06877H109.445L108.719 9.27886C107.051 14.3628 105.389 19.4265 103.734 24.4641H99.2627C98.89 23.1475 98.4729 21.8465 98.0561 20.5469C97.3206 18.253 96.5865 15.9637 96.1015 13.6016C96.0491 13.6016 95.988 13.6016 95.9356 13.5931C95.8736 13.8573 95.8139 14.1223 95.7542 14.3872L95.7542 14.3873L95.7542 14.3873L95.7542 14.3874L95.7541 14.3875L95.7541 14.3875L95.7541 14.3875C95.6121 15.0178 95.4703 15.6473 95.2981 16.2641C95.1344 16.8524 94.9488 17.4336 94.7626 18.0169L94.7626 18.0169L94.7626 18.017L94.7626 18.017L94.7623 18.0178L94.7621 18.0184L94.7620 18.0188C94.6603 18.3373 94.5584 18.6564 94.4598 18.9776C94.3201 19.4284 94.1782 19.8793 94.0363 20.3301C93.8944 20.7809 93.7525 21.2318 93.6127 21.6826C93.3874 22.4098 93.1563 23.137 92.9196 23.8821L92.9186 23.8851L92.9184 23.8858L92.7482 24.4216H88.2684L87.846 23.126L87.8382 23.102C86.1028 17.7793 84.36 12.4337 82.6097 7.05176ZM115.654 19.9048C114.894 19.3434 114.37 18.6118 114.143 17.6336H127.617C127.63 17.5652 127.644 17.4997 127.657 17.4361L127.657 17.4355C127.691 17.2778 127.722 17.1325 127.722 16.9871C127.724 16.7577 127.732 16.527 127.74 16.2959C127.76 15.6872 127.781 15.0758 127.705 14.4778C127.312 11.4835 125.853 9.12729 123.111 7.63018C121.26 6.61794 119.243 6.35424 117.156 6.66897C114.125 7.11981 111.803 8.5999 110.344 11.2539C109.392 12.9977 109.096 14.8605 109.296 16.8085C109.602 19.7942 111.008 22.1504 113.706 23.6816C115.942 24.949 118.387 25.2127 120.911 24.8469C123.233 24.5152 125.146 23.4689 126.604 21.6656C126.669 21.5859 126.721 21.4947 126.78 21.3922C126.809 21.3415 126.84 21.288 126.875 21.2317L126.236 20.8728C125.204 20.2937 124.198 19.7292 123.199 19.1647C123.106 19.2464 123.02 19.3263 122.935 19.4039L122.935 19.4043L122.935 19.4043C122.756 19.5691 122.588 19.7235 122.404 19.8622C120.588 21.2232 117.487 21.2488 115.654 19.9048ZM123.024 14.095H114.117H114.108C114.405 12.2066 116.134 10.5649 118.832 10.6499C121.085 10.718 122.972 12.2746 123.024 14.095ZM73.3969 6.51586C78.7761 6.51586 82.8979 10.5478 82.8979 15.8047C82.8979 20.9255 78.7063 24.949 73.3794 24.949C68.0089 24.949 63.9046 20.9085 63.9133 15.6261C63.9133 10.5393 68.1137 6.51586 73.3969 6.51586ZM68.5591 15.7282C68.5591 18.4502 70.6461 20.5257 73.3881 20.5342C76.1651 20.5342 78.2871 18.4332 78.2696 15.7027C78.2434 12.9721 76.1826 10.9561 73.3969 10.9476C70.6287 10.9476 68.5591 12.9892 68.5591 15.7282ZM134.298 7.09429H129.67H129.652C130.036 12.9381 130.045 18.7139 129.643 24.4982H134.839C134.837 24.4415 134.836 24.3869 134.834 24.3341C134.829 24.1489 134.825 23.985 134.804 23.8262C134.499 21.1722 134.525 18.5012 134.595 15.8388C134.647 13.8228 135.852 12.3852 137.878 11.9174C138.336 11.8086 138.811 11.7692 139.293 11.7291C139.527 11.7096 139.763 11.69 140 11.6622V6.72852C137.363 6.80507 135.677 8.0555 134.839 10.4458C134.77 10.4394 134.705 10.433 134.64 10.4266C134.532 10.416 134.423 10.4054 134.298 10.3947V7.09429Z"
                            fill="#232323"
                        />
                        <path
                            className="icon icon1"
                            d="M19.8665 0.518799V17.3272L0 22.3289V5.55453L19.8665 0.518799Z"
                            fill="#232323"
                        />
                        <path
                            className="icon icon2"
                            d="M33.2448 2.6709V19.4878L13.3782 24.4895V7.71513L33.2448 2.6709Z"
                            fill="#232323"
                        />
                        <path
                            className="icon icon3"
                            d="M13.3782 7.71512L19.8665 6.0564V17.3272L13.3521 18.9519L13.3782 7.71512Z"
                            fill="#232323"
                        />
                    </svg>
                </a>

                {/* 2. Apply dynamic class based on state */}
                <div className={`nav-container ${isMenuOpen ? "is-menu-open" : ""}`}>
                    <span className="title-menu">Menu</span>
                    <ul className="nav nav-pills">
                        <li className="nav-item has-mega-menu">
                            <a
                                className="nav-link"
                                href="/approach/"
                                aria-current="page"
                                aria-expanded="false"
                                aria-label="Open Verticals menu"
                                role="button"
                            >
                                Verticals
                                <span className="icon-chevron-right" />
                            </a>
                            <div className="mega-menu mega-menu__one">
                                <div className="mega-menu-content has-cta">
                                    <a
                                        className="back-menu"
                                        href=""
                                        role="button"
                                        aria-label="Close Verticals menu"
                                    >
                                        <span className="icon-arrow-left" />
                                    </a>
                                    <a
                                        href="/approach/"
                                        className="mega-menu-parent-link"
                                        aria-label="Go to Verticals page"
                                    >
                                        <h3>Verticals</h3>
                                    </a>
                                    <ul className="mega-menu-list">
                                        <li className="mega-menu-item">
                                            <a
                                                href="/b2b"
                                                aria-label="Go to B2B page"
                                            >
                                                <Image
                                                    src={Services_InfluencerOutreach}
                                                    alt=""
                                                />
                                                <div className="text">
                                                    <h4>B2B</h4>
                                                    <p>Optimized multi-channel strategies for B2B.</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="mega-menu-item">
                                            <a
                                                href="/consumer/"
                                                aria-label="Go to Consumer Services page"
                                            >
                                                <Image src={Services_SocialMedia} alt="" />
                                                <div className="text">
                                                    <h4>Consumer Services</h4>
                                                    <p>Custom strategies for various service sectors.</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="mega-menu-item">
                                            <a
                                                href="/product/"
                                                aria-label="Go to Consumer Product page"
                                            >
                                                <Image
                                                    src={ServicesEmailMarketing}
                                                    alt=""
                                                />
                                                <div className="text">
                                                    <h4>Consumer Product</h4>
                                                    <p>Scalable growth with next-gen tech and insights.</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="mega-menu-item">
                                            <a
                                                href="/cpg/"
                                                aria-label="Go to CPG page"
                                            >
                                                {/* Note: Original code used a .svg, replaced with an imported one, but Next.js <Image> needs a width/height for non-SVG imports. Keeping as original image usage for now if it's an inline SVG, but treating it as a standard import based on your list. */}
                                                <Image
                                                    src={SvgCodeFromOnlineEditor}
                                                    alt=""
                                                />
                                                <div className="text">
                                                    <h4>CPG</h4>
                                                    <p>Growth and measurable results for CPG</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="mega-menu-item">
                                            <a
                                                href="/private/"
                                                aria-label="Go to Private Equity page"
                                            >
                                                <Image src={ServicePpc} alt="" />
                                                <div className="text">
                                                    <h4>Private Equity</h4>
                                                    <p>Deep marketing assessments for investors.</p>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <a href="/approach/" className="btn btn-secondary">
                                    <div className="icon">
                                        <span>How we work</span>
                                        <i className="icon-arrow-up-right" />
                                    </div>
                                </a>
                            </div>{" "}
                        </li>
                        <li className="nav-item has-mega-menu">
                            <a
                                className="nav-link"
                                href="/services/"
                                aria-current="page"
                                aria-expanded="false"
                                aria-label="Open Services menu"
                                role="button"
                            >
                                Services
                                <span className="icon-chevron-right" />
                            </a>
                            <div className="mega-menu mega-menu__two">
                                <div className="mega-menu-content has-cta">
                                    <a
                                        className="back-menu"
                                        href=""
                                        role="button"
                                        aria-label="Close Services menu"
                                    >
                                        <span className="icon-arrow-left" />
                                    </a>
                                    <a
                                        href="/services/"
                                        className="mega-menu-parent-link"
                                        aria-label="Go to Services page"
                                    >
                                        <h3>Services</h3>
                                    </a>
                                    <ul className="menu-glosary">
                                        <li className={`menu-glosary__item ${selectedMenuItem === 'growth-marketing' ? 'active' : ''}`}>
                                            <a
                                                href="/services-category/growth-marketing/"
                                                aria-label="Go to Growth Marketing page"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleTabClick('growth-marketing');
                                                }}
                                            >
                                                <p className="title">Growth Marketing</p>
                                                <p className="description">
                                                    Data-driven strategies to boost customer value.
                                                </p>
                                            </a>
                                        </li>
                                        <li className={`menu-glosary__item ${selectedMenuItem === 'data-intelligence' ? 'active' : ''}`}>
                                            <a
                                                href="/services-category/data-intelligence/"
                                                aria-label="Go to Data Intelligence page"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleTabClick('data-intelligence');
                                                }}
                                            >
                                                <p className="title">Data Intelligence</p>
                                                <p className="description">
                                                    Leverage data to enhance marketing outcomes.
                                                </p>
                                            </a>
                                        </li>
                                        <li className={`menu-glosary__item ${selectedMenuItem === 'consulting' ? 'active' : ''}`}>
                                            <a
                                                href="/services-category/consulting/"
                                                aria-label="Go to Consulting page"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleTabClick('consulting');
                                                }}
                                            >
                                                <p className="title">Consulting</p>
                                                <p className="description">
                                                    Transformative growth with bespoke strategies.
                                                </p>
                                            </a>
                                        </li>
                                        <li className={`menu-glosary__item ${selectedMenuItem === "creative" ? "active" : ""}`}
                                            onClick={() => handleTabClick("creative")}>
                                            <a
                                                href="/services-category/creative/"
                                                aria-label="Go to Creative page"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleTabClick('creative');
                                                }}
                                            >
                                                <p className="title">Creative</p>
                                                <p className="description">
                                                    Captivating campaigns for every customer touchpoint.
                                                </p>
                                            </a>
                                        </li>
                                        <li className="menu-glosary__cta">
                                            <a href="/services/" className="btn btn-secondary">
                                                <div className="icon">
                                                    <span>View all services</span>
                                                    <i className="icon-arrow-up-right" />
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                   <ul className="content-sub-items">
                                        {/* === Growth Marketing === */}
                                        <li
                                            className={`content-glosary ${selectedMenuItem === "growth-marketing" ? "active" : ""}`}
                                            onClick={() => handleTabClick("growth-marketing")}
                                        >
                                            <div className="menu-text">
                                            <h4>Growth Marketing</h4>
                                            <p>Data-driven strategies to boost customer value.</p>
                                            </div>

                                            {selectedMenuItem === "growth-marketing" && (
                                            <div className="content-list">
                                                                    <div>
                                                                      <span className="subtitle">Paid media</span>
                                                                    </div>
                                                                    <ul className="mega-menu-list">
                                                                      <li className="mega-menu-item">
                                                                        <a
                                                                          data-bs-toggle="tooltip"
                                                                          data-bs-placement="top"
                                                                          title="Unlock growth with Amazon’s power."
                                                                          href="/services/amazon-marketing/"
                                                                        >
                                                                          <Image
                                                                            src={ServiceAmazonMarketing}
                                                                            alt=""
                                                                          />
                                                                          <div className="text">
                                                                            <h5>Amazon</h5>
                                                                            <p>Unlock growth with Amazon’s power.</p>
                                                                          </div>
                                                                        </a>
                                                                      </li>
                                                                      <li className="mega-menu-item">
                                                                        <a
                                                                          data-bs-toggle="tooltip"
                                                                          data-bs-placement="top"
                                                                          title="Drive results with TikTok strategies."
                                                                          href="/services/tiktok/"
                                                                        >
                                                                          <Image src={ServicePpc} alt="" />
                                                                          <div className="text">
                                                                            <h5>TikTok</h5>
                                                                            <p>Drive results with TikTok strategies.</p>
                                                                          </div>
                                                                        </a>
                                                                      </li>
                                                                      <li className="mega-menu-item">
                                                                        <a
                                                                          data-bs-toggle="tooltip"
                                                                          data-bs-placement="top"
                                                                          title="Boost awareness with impactful media."
                                                                          href="/services/programmatic-advertising-agency/"
                                                                        >
                                                                          <Image
                                                                            src={GeneralPowerDigitalMission100}
                                                                            alt=""
                                                                          />
                                                                          <div className="text">
                                                                            <h5>Programmatic</h5>
                                                                            <p>Boost awareness with impactful media.</p>
                                                                          </div>
                                                                        </a>
                                                                      </li>
                                                                      <li className="mega-menu-item">
                                                                        <a
                                                                          data-bs-toggle="tooltip"
                                                                          data-bs-placement="top"
                                                                          title="Convert new audiences through social."
                                                                          href="/services/paid-social-media/"
                                                                        >
                                                                          <Image
                                                                            src={ServicesPaidSocial}
                                                                            alt=""
                                                                          />
                                                                          <div className="text">
                                                                            <h5>Paid Social</h5>
                                                                            <p>Convert new audiences through social.</p>
                                                                          </div>
                                                                        </a>
                                                                      </li>
                                                                      <li className="mega-menu-item">
                                                                        <a
                                                                          data-bs-toggle="tooltip"
                                                                          data-bs-placement="top"
                                                                          title="Capture traffic, eliminate wasted spend."
                                                                          href="/services/paid-media/"
                                                                        >
                                                                          <Image
                                                                            src={ServicesSocialMedia}
                                                                            alt=""
                                                                          />
                                                                          <div className="text">
                                                                            <h5>Paid Media</h5>
                                                                            <p>Capture traffic, eliminate wasted spend.</p>
                                                                          </div>
                                                                        </a>
                                                                      </li>
                                                                    </ul>
                                                                    <div>
                                                                      <span className="subtitle">Earned media</span>
                                                                    </div>
                                                                    <ul className="mega-menu-list">
                                                                      <li className="mega-menu-item">
                                                                        <a
                                                                          data-bs-toggle="tooltip"
                                                                          data-bs-placement="top"
                                                                          title="Build buzz and maximize brand awareness."
                                                                          href="/services/public-relations/"
                                                                        >
                                                                          <Image
                                                                            src={ServicesPublicRelations}
                                                                            alt=""
                                                                          />
                                                                          <div className="text">
                                                                            <h5>Public relations</h5>
                                                                            <p>Build buzz and maximize brand awareness.</p>
                                                                          </div>
                                                                        </a>
                                                                      </li>
                                                                      <li className="mega-menu-item">
                                                                        <a
                                                                          data-bs-toggle="tooltip"
                                                                          data-bs-placement="top"
                                                                          title="Expand reach with affiliate programs."
                                                                          href="/services/affiliate-marketing/"
                                                                        >
                                                                          <Image
                                                                            src={WebContentWebinar}
                                                                            alt=""
                                                                          />
                                                                          <div className="text">
                                                                            <h5>Affiliate</h5>
                                                                            <p>Expand reach with affiliate programs.</p>
                                                                          </div>
                                                                        </a>
                                                                      </li>
                                                                      <li className="mega-menu-item">
                                                                        <a
                                                                          data-bs-toggle="tooltip"
                                                                          data-bs-placement="top"
                                                                          title="Leverage trusted voices to build credibility."
                                                                          href="/services/influencer-marketing/"
                                                                        >
                                                                          <Image
                                                                            src={Services_InfluencerOutreach}
                                                                            alt=""
                                                                          />
                                                                          <div className="text">
                                                                            <h5>Influencer</h5>
                                                                            <p>
                                                                              Leverage trusted voices to build credibility.
                                                                            </p>
                                                                          </div>
                                                                        </a>
                                                                      </li>
                                                                    </ul>
                                                                    <div>
                                                                      <span className="subtitle">Owned media</span>
                                                                    </div>
                                                                    <ul className="mega-menu-list">
                                                                      <li className="mega-menu-item">
                                                                        <a
                                                                          data-bs-toggle="tooltip"
                                                                          data-bs-placement="top"
                                                                          title="Grow traffic where users shop."
                                                                          href="/services/seo/"
                                                                        >
                                                                          <Image src={ServicesSEO} alt="" />
                                                                          <div className="text">
                                                                            <h5>SEO</h5>
                                                                            <p>Grow traffic where users shop.</p>
                                                                          </div>
                                                                        </a>
                                                                      </li>
                                                                      <li className="mega-menu-item">
                                                                        <a
                                                                          data-bs-toggle="tooltip"
                                                                          data-bs-placement="top"
                                                                          title="Retain customers, expand lifetime value."
                                                                          href="/services/email-marketing/"
                                                                        >
                                                                          <Image
                                                                            src={ServicesEmailMarketing}
                                                                            alt=""
                                                                          />
                                                                          <div className="text">
                                                                            <h5>Email &amp; SMS</h5>
                                                                            <p>Retain customers, expand lifetime value.</p>
                                                                          </div>
                                                                        </a>
                                                                      </li>
                                                                      <li className="mega-menu-item">
                                                                        <a
                                                                          data-bs-toggle="tooltip"
                                                                          data-bs-placement="top"
                                                                          title="Engage customers at every journey stage."
                                                                          href="/services/content-marketing/"
                                                                        >
                                                                          <Image
                                                                            src={ServicesContentMarketing}
                                                                            alt=""
                                                                          />
                                                                          <div className="text">
                                                                            <h5>Content marketing</h5>
                                                                            <p>Engage customers at every journey stage.</p>
                                                                          </div>
                                                                        </a>
                                                                      </li>
                                                                      <li className="mega-menu-item">
                                                                        <a
                                                                          data-bs-toggle="tooltip"
                                                                          data-bs-placement="top"
                                                                          title="Connect authentically through social media."
                                                                          href="/services/organic-social-media/"
                                                                        >
                                                                          <Image
                                                                            src={Services_SocialMedia}
                                                                            alt=""
                                                                          />
                                                                          <div className="text">
                                                                            <h5>Social Media</h5>
                                                                            <p>Connect authentically through social media.</p>
                                                                          </div>
                                                                        </a>
                                                                      </li>
                                                                      <li className="mega-menu-item">
                                                                        <a
                                                                          data-bs-toggle="tooltip"
                                                                          data-bs-placement="top"
                                                                          title="Make your brand visible across AI search."
                                                                          href="/services/generative-engine-optimization-geo-services/"
                                                                        >
                                                                          <Image
                                                                            src={ServiceCommunityManagement}
                                                                            alt=""
                                                                          />
                                                                          <div className="text">
                                                                            <h5>Generative Engine Optimization (GEO)</h5>
                                                                            <p>Make your brand visible across AI search.</p>
                                                                          </div>
                                                                        </a>
                                                                      </li>
                                                                      <li className="mega-menu-item">
                                                                        <a
                                                                          data-bs-toggle="tooltip"
                                                                          data-bs-placement="top"
                                                                          title="Maximize conversions with website optimization."
                                                                          href="/services/cro-conversion-rate-optimization/"
                                                                        >
                                                                          <Image src={ServicesCro} alt="" />
                                                                          <div className="text">
                                                                            <h5>CRO</h5>
                                                                            <p>
                                                                              Maximize conversions with website optimization.
                                                                            </p>
                                                                          </div>
                                                                        </a>
                                                                      </li>
                                                                    </ul>
                                            </div>
                                            )}
                                        </li>

                                        {/* === Data Intelligence === */}
                                        <li
                                            className={`content-glosary ${selectedMenuItem === "data-intelligence" ? "active" : ""}`}
                                            onClick={() => handleTabClick("data-intelligence")}
                                        >
                                            <div className="menu-text">
                                            <h4>Data Intelligence</h4>
                                            <p>Leverage data to enhance marketing outcomes.</p>
                                            </div>

                                            {selectedMenuItem === "data-intelligence" && (
                                            <div className="content-list">
                                                                    <div>
                                                                      <a
                                                                        className="variant-item"
                                                                        href="/data-intelligence-company/"
                                                                      >
                                                                        <Image src={NovaReport} alt="" />
                                                                        <div className="text">
                                                                          <h5>Data Intelligence</h5>
                                                                          <p>
                                                                            Strategically leverage data to drive informed
                                                                            marketing decisions and optimize outcomes.
                                                                          </p>
                                                                        </div>
                                                                      </a>
                                                                    </div>
                                                                    <div>
                                                                      <a
                                                                        className="variant-item"
                                                                        href="/data-infrastructure-cdps/"
                                                                      >
                                                                        <Image src={GeneralUse9100} alt="" />
                                                                        <div className="text">
                                                                          <h5>Data Infrastructure Services</h5>
                                                                          <p>
                                                                            Build a modern data stack to simplify management,
                                                                            ensure data quality, and drive smart decisions.
                                                                          </p>
                                                                        </div>
                                                                      </a>
                                                                    </div>
                                                                    <div>
                                                                      <a
                                                                        className="variant-item"
                                                                        href="/marketing-measurement-incrementality/"
                                                                      >
                                                                        <Image
                                                                          src={WebContentAuditNextStepsStrat}
                                                                          alt=""
                                                                        />
                                                                        <div className="text">
                                                                          <h5>Marketing Measurement + Incrementality</h5>
                                                                          <p>
                                                                            Save millions on ad spend with proven marketing
                                                                            measurement and incrementality.
                                                                          </p>
                                                                        </div>
                                                                      </a>
                                                                    </div>
                                                                    <div>
                                                                      <a
                                                                        className="variant-item"
                                                                        href="/marketing-mix-modeling-data-science/"
                                                                      >
                                                                        <Image
                                                                          src={WebContentTestimonials}
                                                                          alt=""
                                                                        />
                                                                        <div className="text">
                                                                          <h5>Marketing Mix Modeling + Data Science</h5>
                                                                          <p>
                                                                            Optimize marketing with advanced mix modeling and
                                                                            expert data science.
                                                                          </p>
                                                                        </div>
                                                                      </a>
                                                                    </div>
                                            </div>
                                            )}
                                        </li>

                                        {/* === Consulting === */}
                                        <li
                                            className={`content-glosary ${selectedMenuItem === "consulting" ? "active" : ""}`}
                                            onClick={() => handleTabClick("consulting")}
                                        >
                                            <div className="menu-text">
                                            <h4>Consulting</h4>
                                            <p>Transformative growth with bespoke strategies.</p>
                                            </div>

                                            {selectedMenuItem === "consulting" && (
                                            <div className="content-list">
                                                                    <div>
                                                                      <a
                                                                        className="variant-item"
                                                                        href="/strategic-consulting/"
                                                                      >
                                                                        <Image src={GeneralUse7100} alt="" />
                                                                        <div className="text">
                                                                          <h5>Consulting</h5>
                                                                          <p>
                                                                            Navigate complexity with expert consulting
                                                                            tailored to your goals.
                                                                          </p>
                                                                        </div>
                                                                      </a>
                                                                    </div>
                                                                    <div>
                                                                      <a
                                                                        className="variant-item"
                                                                        href="/strategic-consulting-go-to-market-strategy/"
                                                                      >
                                                                        <Image
                                                                          src={NovaMachineLearning}
                                                                          alt=""
                                                                        />
                                                                        <div className="text">
                                                                          <h5>Full Go-To-Market Strategy</h5>
                                                                          <p>
                                                                            Unlock growth with a comprehensive, data-driven
                                                                            GTM digital strategy.
                                                                          </p>
                                                                        </div>
                                                                      </a>
                                                                    </div>
                                                                    <div>
                                                                      <a
                                                                        className="variant-item"
                                                                        href="/strategic-consulting-media-planning-forecasting/"
                                                                      >
                                                                        <Image
                                                                          src={WebContentAuditNextStepsAssess}
                                                                          alt=""
                                                                        />
                                                                        <div className="text">
                                                                          <h5>Media Planning Scenarios</h5>
                                                                          <p>
                                                                            Optimize ad spend with comprehensive media
                                                                            planning and data-driven forecasting.
                                                                          </p>
                                                                        </div>
                                                                      </a>
                                                                    </div>
                                                                    <div>
                                                                      <a
                                                                        className="variant-item"
                                                                        href="/strategic-consulting-persona-development/"
                                                                      >
                                                                        <Image src={GeneralUse5100} alt="" />
                                                                        <div className="text">
                                                                          <h5>Persona Development</h5>
                                                                          <p>
                                                                            Develop a data-driven ideal customer profile to
                                                                            enhance product and marketing strategies.
                                                                          </p>
                                                                        </div>
                                                                      </a>
                                                                    </div>
                                            </div>
                                            )}
                                        </li>

                                        {/* === Creative === */}
                                        <li
                                            className={`content-glosary ${selectedMenuItem === "creative" ? "active" : ""}`}
                                            onClick={() => handleTabClick("creative")}
                                        >
                                            <div className="menu-text">
                                            <h4>Creative</h4>
                                            <p>Captivating campaigns for every customer touchpoint.</p>
                                            </div>

                                            {selectedMenuItem === "creative" && (
                                            <div className="content-list">
                                                                    <div>
                                                                      <a
                                                                        className="variant-item"
                                                                        href="/services/creative-home/"
                                                                      >
                                                                        <Image
                                                                          src={GeneralPowerDigitalValues100}
                                                                          alt=""
                                                                        />
                                                                        <div className="text">
                                                                          <h5>Creative</h5>
                                                                          <p>
                                                                            Combine art and strategy to craft creative
                                                                            campaigns that captivate and convert.
                                                                          </p>
                                                                        </div>
                                                                      </a>
                                                                    </div>
                                                                    <div>
                                                                      <a
                                                                        className="variant-item"
                                                                        href="/services/creative-services-strategy/"
                                                                      >
                                                                        <Image src={GeneralUse2100} alt="" />
                                                                        <div className="text">
                                                                          <h5>Strategy</h5>
                                                                          <p>
                                                                            Transform brand strategy into performance-driven
                                                                            digital marketing campaigns with our creative
                                                                            expertise.
                                                                          </p>
                                                                        </div>
                                                                      </a>
                                                                    </div>
                                                                    <div>
                                                                      <a
                                                                        className="variant-item"
                                                                        href="/services/creative-services-brand-design-editing/"
                                                                      >
                                                                        <Image src={NovaScale} alt="" />
                                                                        <div className="text">
                                                                          <h5>Brand, Design, &amp; Editing</h5>
                                                                          <p>
                                                                            Visuals and content that captivate, engage, and
                                                                            elevate your brand.
                                                                          </p>
                                                                        </div>
                                                                      </a>
                                                                    </div>
                                            </div>
                                            )}
                                        </li>
                                        </ul>
                                </div>
                            </div>{" "}
                        </li>
                        <li className="nav-item has-mega-menu">
                            <a
                                className="nav-link"
                                href="#"
                                aria-current="page"
                                aria-expanded="false"
                                aria-label="Open Technology menu"
                                role="button"
                            >
                                Technology
                                <span className="icon-chevron-right" />
                            </a>
                            <div className="mega-menu mega-menu__one">
                                <div className="mega-menu-content ">
                                    <a
                                        className="back-menu"
                                        href=""
                                        role="button"
                                        aria-label="Close Technology menu"
                                    >
                                        <span className="icon-arrow-left" />
                                    </a>
                                    <a
                                        href="#"
                                        className="mega-menu-parent-link"
                                        aria-label="Go to Technology page"
                                    >
                                        <h3>Technology</h3>
                                    </a>
                                    <ul className="mega-menu-list">
                                        <li className="mega-menu-item">
                                            <a
                                                href="/nova/"
                                                aria-label="Go to nova page"
                                            >
                                                <Image src={GeneralUse5100} alt="" />
                                                <div className="text">
                                                    <h4>nova</h4>
                                                    <p>Transform data into results with nova</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="mega-menu-item">
                                            <a
                                                href="/novaintelligence/"
                                                aria-label="Go to nova Intelligence page"
                                            >
                                                <Image
                                                    src={WebContentAuditNextStepsStrat}
                                                    alt=""
                                                />
                                                <div className="text">
                                                    <h4>nova Intelligence</h4>
                                                    <p />
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>{" "}
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="/company/"
                                aria-current="page"
                                aria-expanded="false"
                                aria-label="Open Company menu"
                                role="button"
                            >
                                Company
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="/the-power-circuit-v1/"
                                aria-current="page"
                                aria-expanded="false"
                                aria-label="Open Our Methodology menu"
                                role="button"
                            >
                                Our Methodology
                            </a>
                        </li>
                        <li className="nav-item has-mega-menu">
                            <a
                                className="nav-link"
                                href="#"
                                aria-current="page"
                                aria-expanded="false"
                                aria-label="Open Resources menu"
                                role="button"
                            >
                                Resources
                                <span className="icon-chevron-right" />
                            </a>
                            <div className="mega-menu mega-menu__one">
                                <div className="mega-menu-content ">
                                    <a
                                        className="back-menu"
                                        href=""
                                        role="button"
                                        aria-label="Close Resources menu"
                                    >
                                        <span className="icon-arrow-left" />
                                    </a>
                                    <a
                                        href="#"
                                        className="mega-menu-parent-link"
                                        aria-label="Go to Resources page"
                                    >
                                        <h3>Resources</h3>
                                    </a>
                                    <ul className="mega-menu-list">
                                        <li className="mega-menu-item">
                                            <a
                                                href="/blog/"
                                                aria-label="Go to Blog page"
                                            >
                                                <div className="text">
                                                    <h4>Blog</h4>
                                                    <p />
                                                </div>
                                            </a>
                                        </li>
                                        <li className="mega-menu-item">
                                            <a
                                                href="/casestudies/"
                                                aria-label="Go to Case Studies page"
                                            >
                                                <div className="text">
                                                    <h4>Case Studies</h4>
                                                    <p />
                                                </div>
                                            </a>
                                        </li>
                                        <li className="mega-menu-item">
                                            <a href="/resources/" aria-label="Go to Downloadables page">
                                                <div className="text">
                                                    <h4>Downloadables</h4>
                                                    <p />
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>{" "}
                        </li>
                    </ul>
                </div>
                <div className="right-cta">
                    <a href="/workwithus/" className="btn btn-sm btn-primary">
                        <div className="icon">
                            <span>Work with us</span>
                            <i className="icon-arrow-up-right" />{" "}
                        </div>
                    </a>
                    <div className="notifications-wrapper">
                        <div className="notification-number">
                            <span>2</span>
                        </div>
                        <div className="notification-bell">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                {/*!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.*/}
                                <path d="M320 64C302.3 64 288 78.3 288 96L288 99.2C215 114 160 178.6 160 256L160 277.7C160 325.8 143.6 372.5 113.6 410.1L103.8 422.3C98.7 428.6 96 436.4 96 444.5C96 464.1 111.9 480 131.5 480L508.4 480C528 480 543.9 464.1 543.9 444.5C543.9 436.4 541.2 428.6 536.1 422.3L526.3 410.1C496.4 372.5 480 325.8 480 277.7L480 256C480 178.6 425 114 352 99.2L352 96C352 78.3 337.7 64 320 64zM258 528C265.1 555.6 290.2 576 320 576C349.8 576 374.9 555.6 382 528L258 528z" />
                            </svg>
                        </div>
                        <div className="notifications-list">
                            <ul className="notifications-list__content">
                                <li className="notifications-list__content__item">
                                    <a
                                        className="item-link"
                                        href="/resources-the-current-state-of-the-fashion-industry/"
                                    >
                                        <Image
                                            className="item-image"
                                            alt="The Current State Of The Fashion"
                                            src={TheCurrentStateOfTheFashion}
                                        />
                                        <div className="item-title">
                                            <span className="post-type">resources</span>
                                            <span className="post-title ellipsis-overflow">
                                                Fashion Study
                                            </span>
                                        </div>
                                        <span className="icon-chevron-right" />
                                    </a>
                                </li>
                                <li className="notifications-list__content__item">
                                    <a
                                        className="item-link"
                                        href="/unlock-growth-with-the-power-circuit-framework/"
                                    >
                                        <Image className="item-image" src={Tpc240x300} alt="img" />
                                        <div className="item-title">
                                            <span className="post-type">resources</span>
                                            <span className="post-title ellipsis-overflow">
                                                The Power Circuit™ Framework
                                            </span>
                                        </div>
                                        <span className="icon-chevron-right" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-toggler">
                        <div className="burger-menu">
                            {/* 3. Link checkbox checked state and change event to React state */}
                            <input
                                type="checkbox"
                                id="navbar-checkbox"
                                aria-label="Open navigation menu"
                                aria-expanded={isMenuOpen}
                                role="button"
                                checked={isMenuOpen}
                                onChange={toggleMenu}
                            />
                            <span />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}