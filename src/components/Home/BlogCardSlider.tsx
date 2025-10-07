"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

// Import types and modules
import { SwiperOptions, SwiperModule } from 'swiper/types'; 
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';

// ====================================================================================
// !!! CRITICAL FIX: YOU MUST REPLACE THESE PLACEHOLDERS WITH ACTUAL LOCAL IMPORTS. 
// E.g., import B6bc2835Off1283 from '../images/your-image-name.png';
// ====================================================================================
// Placeholder variables need to be valid image sources/objects. 
// Assuming the file is named b6bc2835-dd5e-42f4-aab4-0f1283492d0b-1024x683.png
// in a sibling 'images' folder. Adjust the path as necessary for your project structure.
import B6bc2835Off1283 from '../../images/b6bc2835-dd5e-42f4-aab4-0f1283492d0b-1024x683.png'; // Update path/file name
import FoodBeverage from '../../images/food-beverage.png'; // Update path/file name
import Screenshot2025 from '../../images/Screenshot-2025-09-22-at-12.36.56-AM-1024x750.png'; // Update path/file name
import RevenueFashion from '../../images/RevenueFashion-1024x683.jpg'; // Update path/file name
import InfluencerMarketing from '../../images/influencer-marketing-1024x683.jpg'; // Update path/file name
// ====================================================================================


// Custom Hook Logic EMBEDDED DIRECTLY
const MOBILE_BREAKPOINT = 768;

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

const BlogCardSlider: React.FC = () => {
  const isMobile = useIsMobile(); 

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
    }
  };

  const blogPosts = [
    // Use the imported image object directly
    { title: "Turning Small Carts into Big Wins: Growing LTV in Food & Beverage", author: "Tara Johnson | September 22, 2025", tags: ["Digital Marketing", "eCommerce", "Measurement"], image: B6bc2835Off1283, href: "https://powerdigitalmarketing.com/blog/grow-ltv-food-beverage-low-aov/" },
    { title: "Messaging in a Regulated Market: 7 Food and Beverage Brand Compliance Tips", author: "Tara Johnson | September 22, 2025", tags: ["Brand Building", "Digital Marketing", "eCommerce", "Measurement"], image: FoodBeverage, href: "https://powerdigitalmarketing.com/blog/food-beverage-messaging-compliance/" },
    { title: "How a CPG Brand Unlocked $3.6M in Incremental Revenue with the Power Circuit™", author: "Tara Johnson | September 22, 2025", tags: ["Digital Marketing", "eCommerce", "Measurement"], image: Screenshot2025, href: "https://powerdigitalmarketing.com/blog/cpg-brand-growth-power-circuit/" },
    { title: "How the Power Circuit™ Drove $3.7M and $10.6M in Projected Revenue Lift for Fashion Brands", author: "Tara Johnson | September 22, 2025", tags: ["Digital Marketing", "eCommerce", "Measurement"], image: RevenueFashion, href: "https://powerdigitalmarketing.com/blog/power-circuit-fashion-brand-growth/" },
    { title: "How to Leverage Influencer Marketing to Reach Audiences Meta No Longer Allows", author: "Tara Johnson | September 22, 2025", tags: ["Digital Marketing", "Influencer Marketing", "Measurement", "Paid Social"], image: InfluencerMarketing, href: "https://powerdigitalmarketing.com/blog/influencer-marketing-meta-targeting-changes/" },
  ];

  const renderCard = (post: typeof blogPosts[0], index: number) => {
    
    const tags = (
        <div className="tags">
            {post.tags.map((tag, i) => (
                <a
                    key={i}
                    href={`https://powerdigitalmarketing.com/blog/category/${tag.toLowerCase().replace(/ /g, '-')}//`}
                    className="tag badge rounded-pill text-decoration-none"
                >
                    {tag}
                </a>
            ))}
        </div>
    );

    return (
      <article className="card-blog">
        <div className="card-blog__content">
          {tags}
          <h3 className="title">{post.title}</h3>
          <p className="autor">{post.author}</p>
        </div>
        <div className="card-blog__image">
          {/* post.image now holds the imported image object */}
          <Image src={post.image} alt={post.title} width={300} height={200} /> 
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
  };


  return (
    <div className="blog-card-grid">
      {isMobile ? (
        <Swiper {...swiperParams} className="blog-swiper">
          {blogPosts.map((post, index) => (
            <SwiperSlide key={index} className="swiper-slide blog-card-grid__item">
              {renderCard(post, index)}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="swiper-wrapper">
          {blogPosts.map((post, index) => (
            <div key={index} className="swiper-slide blog-card-grid__item">
              {renderCard(post, index)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogCardSlider;