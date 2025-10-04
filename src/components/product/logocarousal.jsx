"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Marquee from "react-fast-marquee";

// =================================================================
// 1. IMAGE IMPORTS (As provided by the user)
// =================================================================
import image1 from "../../images/Alliant.png";
import image2 from "../../images/Catalina-crunch.png";
import image3 from "../../images/sambazon.png";
import image4 from "../../images/Taylor_Guitars_logo.png";
import image5 from "../../images/oneill-logo.png";
import image6 from "../../images/hippeas.png";
import image7 from "../../images/jhonny_was.png";
import image8 from "../../images/gorjana.png";
import image9 from "../../images/Graza.png";
import image10 from "../../images/dataworld.png";
import image11 from "../../images/Gold_belly.png";
import image12 from "../../images/Cymbiotika.png";
import image13 from "../../images/coola.png";
import image14 from "../../images/crocs.png";
import image15 from "../../images/asics.png";
import image16 from "../../images/aviator-nation.png";
import image17 from "../../images/Alice_Olivia.png";

// =================================================================
// 2. DATA LISTS
// =================================================================

const ALL_LOGOS = [
    image1, image2, image3, image4, image5, image6, image7, image8, image9,
    image10, image11, image12, image13, image14, image15, image16, image17
];

// Divide logos into two rows for mobile:
const MOBILE_ROW_1 = [
    image1, image2, image3, image4, image5, image6, image7, image8,
];
const MOBILE_ROW_2 = [
    image9, image10, image11, image12, image13, image14, image15, image16, image17
];


// =================================================================
// 3. RESPONSIVENESS LOGIC (BREAKPOINT: 990px)
// =================================================================
const DESKTOP_BREAKPOINT = 990;

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        
        // Use window.innerWidth <= DESKTOP_BREAKPOINT for mobile detection
        setIsMobile(window.innerWidth <= DESKTOP_BREAKPOINT);

        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= DESKTOP_BREAKPOINT);
        };

        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return isMobile;
};

// =================================================================
// 4. REUSABLE LOGO RENDERER (Wrapper for Marquee)
// =================================================================
const renderLogoRow = (logoList) => (
    <>
        {logoList.map((logo, idx) => (
            <span 
                key={idx} 
                className="logo-carousel__logo" 
                style={{
                    width: 120,
                    height: 70,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 50,
                    background: "transparent",
                    borderRadius: "10px",
                    padding: "0 10px",
                }}
            >
                <Image 
                    src={logo} 
                    alt="Client Logo" 
                    // Using fixed size as per previous Marquee example
                    height={70} 
                    width={120} 
                    style={{ objectFit: 'contain' }}
                />
            </span>
        ))}
    </>
);


// =================================================================
// 5. MAIN COMPONENT
// =================================================================
export default function Logocarousal() {
    const isMobile = useIsMobile(); 

    return (
        <section className="logo-carousel bg-light">
            <div className="logo-carousel__title">
                <h2>We’ve helped clients become industry leaders</h2>
            </div>

            {/* CONDITIONAL LOGIC FOR MOBILE VS. DESKTOP LAYOUT */}
            {isMobile ? (
                // MOBILE VIEW: Two separate Marquee rows
                <div className="logo-carousel__mobile-rows">
                    {/* Row 1: Scrolls Left (Default) */}
                    <div className="logo-carousel__track" style={{ height: 70, marginBottom: '20px' }}>
                        <Marquee speed={32} gradient={true} gradientWidth={120}>
                            {renderLogoRow(MOBILE_ROW_1)}
                        </Marquee>
                    </div>
                    {/* Row 2: Scrolls Right (Opposite Direction) */}
                    <div className="logo-carousel__track" style={{ height: 70 }}>
                        <Marquee speed={32} gradient={true} gradientWidth={120} direction="right">
                            {renderLogoRow(MOBILE_ROW_2)}
                        </Marquee>
                    </div>
                </div>
            ) : (
                // DESKTOP VIEW: Single Marquee row with all logos
                <div className="logo-carousel__desktop-row">
                    <div className="logo-carousel__track" style={{ height: 70 }}>
                        <Marquee speed={32} gradient={true} gradientWidth={120}>
                            {renderLogoRow(ALL_LOGOS)}
                        </Marquee>
                    </div>
                </div>
            )}
        </section>
    );
}
