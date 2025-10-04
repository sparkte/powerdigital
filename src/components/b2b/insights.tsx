"use client";
import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

// Import Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions, SwiperModule } from 'swiper/types'; 
import 'swiper/css';

// =================================================================
// 1. IMAGE IMPORTS
// =================================================================
import Q5GrowthImage from '../../images/0_3-4.jpg';
import AdSpendImage from '../../images/0_2-1.jpg';
import BuyWithPrimeImage from '../../images/18cd7dc47d8e3772257e1ab13cb53a0a441556ce-7680x4323-1-1024x576.webp';
import MediaMixImage from '../../images/0_3-1.jpg';
import HiddenWasteImage from '../../images/0_2.jpg';

// =================================================================
// 2. DATA STRUCTURE & TYPES
// =================================================================
interface BlogPost {
    title: string;
    author: string;
    image: StaticImageData;
    alt: string;
    href: string;
}

const blogData: BlogPost[] = [
    {
        title: "Q5 is Not a Break: How to Prepare Your Marketing Strategy for Q1 Growth",
        author: "Power Digital | December 3, 2024",
        image: Q5GrowthImage,
        alt: "Q5 is Not a Break: How to Prepare Your Marketing Strategy for Q1 Growth",
        href: "https://powerdigitalmarketing.com/blog/q1-marketing-plan/",
    },
    {
        title: "Cutting Wasted Ad Spend and Increasing PortCo Margins: A New Era of Data-Driven Profitability",
        author: "Power Digital | December 2, 2024",
        image: AdSpendImage,
        alt: "Cutting Wasted Ad Spend and Increasing PortCo Margins: A New Era of Data-Driven Profitability",
        href: "https://powerdigitalmarketing.com/blog/reduce-wasted-ad-spend-and-increase-profit-margins/",
    },
    {
        title: "Power Digital Awarded Agency Partner of the Year at the Buy with Prime Partner Summit",
        author: "Power Digital | December 4, 2024",
        image: BuyWithPrimeImage,
        alt: "Power Digital Awarded Agency Partner of the Year at the Buy with Prime Partner Summit",
        href: "https://powerdigitalmarketing.com/blog/buy-with-prime-agency-partner-of-the-year/",
    },
    {
        title: "Media Mix Modeling Isn’t a Silver Bullet: Here’s What You Really Need to Know",
        author: "Power Digital | December 2, 2024",
        image: MediaMixImage,
        alt: "Media Mix Modeling Isn’t a Silver Bullet: Here’s What You Really Need to Know",
        href: "https://powerdigitalmarketing.com/blog/reality-of-media-mix-modeling/",
    },
    {
        title: "The Hidden Waste in Your Media Spend: What We’ve Learned from 700+ Audits",
        author: "Power Digital | December 2, 2024",
        image: HiddenWasteImage,
        alt: "The Hidden Waste in Your Media Spend: What We’ve Learned from 700+ Audits",
        href: "https://powerdigitalmarketing.com/blog/hidden-waste-in-media-spend/",
    },
];

// =================================================================
// 3. RESPONSIVENESS LOGIC (BREAKPOINT: 990px)
// =================================================================
const MOBILE_BREAKPOINT = 990;

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        
        // Initial check using the required 990px breakpoint
        setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
        };

        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return isMobile;
};

// =================================================================
// 4. REUSABLE CARD RENDERER
// =================================================================
const renderCard = (post: BlogPost) => (
    <article className="card-blog">
        <div className="card-blog__content">
            <div className="tags"></div> {/* Tags were empty in original code */}
            <h3 className="title">{post.title}</h3>
            <p className="autor">{post.author}</p>
        </div>
        <div className="card-blog__image">
            {/* Using Next.js Image component */}
            <Image
                src={post.image}
                alt={post.alt}
                width={300} 
                height={200}
            />
        </div>
        <div className="card-blog__action">
            <a
                href={post.href}
                className="btn btn--round btn-light stretched-link"
            >
                <div className="icon">
                    <i className="icon-arrow-up-right" />
                </div>
            </a>
        </div>
    </article>
);


// =================================================================
// 5. MAIN COMPONENT
// =================================================================
export default function Insights() {
    const isMobile = useIsMobile(); 

    // Swiper settings for mobile view
    const swiperParams: SwiperOptions = {
        modules: [] as SwiperModule[],
        spaceBetween: 30,
        slidesPerView: 1.2, // Show part of the next card on mobile/tablet
        // Configuration for tablets, still allowing touch move
        breakpoints: {
            768: {
                slidesPerView: 2.5,
                allowTouchMove: true,
            },
            // Default mobile view
            320: {
                slidesPerView: 1.2,
                allowTouchMove: true,
            }
        }
    };

    return (
        <section className="bg-light overflow-hidden">
            
            {/* Introductory Content - Now includes mobile-only bottom margin (20px) */}
            <div 
                className="intro-twos-columns"
                style={isMobile ? { marginBottom: '20px' } : {}} 
            >
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
                                <span>Browse all insights</span>
                                <i className="icon-arrow-up-right" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Card Layout Container */}
            <div className="blog-card-grid">
                {isMobile ? (
                    // MOBILE VIEW (<= 990px): Active Swiper Slider
                    // The 'swiper' class is applied directly to the Swiper component
                    <Swiper {...swiperParams} className="swiper">
                        {blogData.map((post, index) => (
                            <SwiperSlide key={index} className="swiper-slide blog-card-grid__item">
                                {renderCard(post)}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    // DESKTOP VIEW (> 990px): Static Grid Layout
                    /* FIXED: Removed the redundant wrapper div. The blog-card-grid class 
                        should now directly control the layout of the blog-card-grid__item elements 
                        for a correct desktop grid display. */
                    <> 
                        {blogData.map((post, index) => (
                            <div key={index} className="blog-card-grid__item">
                                {renderCard(post)}
                            </div>
                        ))}
                    </>
                )}
            </div>
        </section>
    );
}
