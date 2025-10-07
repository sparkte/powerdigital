"use client";
import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

// Import Swiper components and types
import { SwiperOptions, SwiperModule } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// Note: Uncomment the line below if you plan to add the Pagination module later
// import { Pagination } from 'swiper/modules'; 
// import 'swiper/css/pagination';

// Image Imports
import image034 from '../../images/0_3-4.jpg';
import image035 from '../../images/18cd7dc47d8e3772257e1ab13cb53a0a441556ce-7680x4323-1-1024x576.webp';
import image036 from '../../images/0_3-2.jpg';
import image037 from '../../images/0_0-2.jpg';
import image038 from '../../images/0_3-1.jpg';

// =================================================================
// TYPE DEFINITION FOR BLOG POSTS (New)
// =================================================================
interface BlogPost {
    title: string;
    author: string;
    image: StaticImageData; // Type for local image imports in Next.js
    href: string;
}

// =================================================================
// RESPONSIVENESS LOGIC
// =================================================================
const MOBILE_BREAKPOINT = 768;

// Custom Hook to track mobile vs desktop view
const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        
        // Initial check
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        };

        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return isMobile;
};

// =================================================================
// DATA STRUCTURE
// =================================================================
const blogPosts: BlogPost[] = [
    { 
        title: "Q5 is Not a Break: How to Prepare Your Marketing Strategy for Q1 Growth", 
        author: "Power Digital | December 3, 2024", 
        image: image034, 
        href: "https://powerdigitalmarketing.com/blog/q1-marketing-plan/" 
    },
    { 
        title: "Power Digital Awarded Agency Partner of the Year at the Buy with Prime Partner Summit", 
        author: "Power Digital | December 4, 2024", 
        image: image035, 
        href: "https://powerdigitalmarketing.com/blog/buy-with-prime-agency-partner-of-the-year/" 
    },
    { 
        title: "Institutional Investors & The Age of Digital Transformation: Navigating the Evolving Landscape", 
        author: "Power Digital | December 2, 2024", 
        image: image036, 
        href: "https://powerdigitalmarketing.com/blog/digital-transformation-on-investing/" 
    },
    { 
        title: "Top Strategies for Scaling Your Consumer Service Business in 2025", 
        author: "Power Digital | December 2, 2024", 
        image: image037, 
        href: "https://powerdigitalmarketing.com/blog/scaling-consumer-service-business/" 
    },
    { 
        title: "Media Mix Modeling Isn’t a Silver Bullet: Here’s What You Really Need to Know", 
        author: "Power Digital | December 2, 2024", 
        image: image038, 
        href: "https://powerdigitalmarketing.com/blog/reality-of-media-mix-modeling/" 
    },
];

// Reusable Card Rendering Function - Now explicitly typed (Fix for the error)
const renderCard = (post: BlogPost) => (
    <article className="card-blog">
        <div className="card-blog__content">
            {/* The original provided no tags data */}
            <div className="tags"></div> 
            <h3 className="title">{post.title}</h3>
            <p className="autor">{post.author}</p>
        </div>
        <div className="card-blog__image">
            {/* Using Next.js Image component */}
            <Image 
                src={post.image} 
                alt={post.title} 
                // Placeholder sizes for demonstration, adjust as needed
                width={500} 
                height={280} 
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


export default function Insights() {
    const isMobile = useIsMobile(); 

    // Swiper configuration for mobile view (Only relevant when mounted)
    const swiperParams: SwiperOptions = {
        modules: [] as SwiperModule[], 
        spaceBetween: 30,
        slidesPerView: 1.2, 
        // We rely on the conditional rendering to handle desktop layout,
        // so we only configure the mobile behavior here.
        breakpoints: {
            // Mobile config only
            320: {
                slidesPerView: 1.2,
                allowTouchMove: true,
                centeredSlides: false,
            },
        }
    };
    
    return (
        <section className="bg-light overflow-hidden">
            <div className="intro-twos-columns">
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
                                <span>Browse all insights </span>
                                <i className="icon-arrow-up-right" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Conditional structure: Swiper for mobile, static nested divs for desktop. */}
            {isMobile ? (
                // MOBILE: Uses the 'swiper' class and the <Swiper> component
                <div className="blog-card-grid swiper">
                    {/* The Swiper component handles creating the swiper-wrapper and swiper-slide internal elements */}
                    <Swiper {...swiperParams}>
                        {blogPosts.map((post, index) => (
                            // SwiperSlide needs a key and the item class
                            <SwiperSlide key={index} className="blog-card-grid__item">
                                {renderCard(post)}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            ) : (
                // DESKTOP: Renders the static grid structure exactly as requested, 
                // but crucially without the conflicting 'swiper' class on the container.
                <div className="blog-card-grid">
                    <div className="swiper-wrapper">
                        {blogPosts.map((post, index) => (
                            <div key={index} className="swiper-slide blog-card-grid__item">
                                {renderCard(post)}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            
        </section>
    );
}
