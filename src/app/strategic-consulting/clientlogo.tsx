"use client";
import React, { useState, useEffect, use } from "react";
import Image, { StaticImageData } from "next/image";
import Marquee from "react-fast-marquee";


import PDM4 from './images/PDM-Website-2025-4.png';
import PDMGroup17 from './images/PDM-Website-2025-Group-17.png';
import PDMLayer12 from './images/PDM-Website-2025-Layer-1-2.png';
import PDMLayer13 from './images/PDM-Website-2025-Layer-1-3.png';
import PDMLayer14 from './images/PDM-Website-2025-Layer-1-4.png';
import PDMLayer15 from './images/PDM-Website-2025-Layer-1-5.png';
import PDMLayer16 from './images/PDM-Website-2025-Layer-1-6.png';
import PDMLayer from './images/PDM-Website-2025-Layer.png';

interface Logo {
    name: string;
    image: StaticImageData;
}

const row1CoreLogos: Logo[] = [
    { name: "PDM4", image: PDM4 },
    { name: "PDMGroup17", image: PDMGroup17 },
    { name: "PDMLayer12", image: PDMLayer12 },
    { name: "PDMLayer13", image: PDMLayer13 },
    { name: "PDMLayer14", image: PDMLayer14 },
    { name: "PDMLayer15", image: PDMLayer15 },
    { name: "PDMLayer16", image: PDMLayer16 },
    { name: "PDMLayer", image: PDMLayer },
];

const row2CoreLogos: Logo[] = [
    { name: "PDMLayer", image: PDMLayer },
    { name: "PDMGroup17", image: PDMGroup17 },
    { name: "PDMLayer12", image: PDMLayer12 },
    { name: "PDMLayer13", image: PDMLayer13 },
    { name: "PDMLayer14", image: PDMLayer14 },
    { name: "PDMLayer15", image: PDMLayer15 },
    { name: "PDMLayer16", image: PDMLayer16 },
    { name: "PDMLayer", image: PDMLayer },
];

const allUniqueLogos: Logo[] = [...row1CoreLogos, ...row2CoreLogos];


const MOBILE_BREAKPOINT = 990;

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        // Check for viewport width <= 990px
        setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
        };

        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return isMobile;
};

const renderLogo = (logo: Logo) => (
    <span className="logo-carousel__logo" style={{
        width: 120,
        height: 70,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 50, // Spacing between logos (50px margin)
        background: "transparent",
        borderRadius: "10px",
        padding: "0 10px",
    }}>
        <Image
            src={logo.image}
            alt={`${logo.name} Logo`}
            width={120}
            height={70}
            style={{ objectFit: 'contain', width: 'auto', height: '100%' }}
        />
    </span>
);


export default function Clientlogo() {
    const isMobile = useIsMobile();

    return (
        <section className="logo-carousel bg-dark">
            <div className="logo-carousel__title">
                <h2>We&apos;ve helped clients become industry leaders</h2>
            </div>

            <div className="logo-carousel-content">
                <div className="logo-carousel__track" style={{ height: 70 }}>

                    {isMobile ? (
                        // MOBILE VIEW (<= 990px): Two Scrolling Rows
                        <>
                            {/* Mobile Marquee Row 1: Scrolls Left (Default) */}
                            <Marquee speed={32} style={{ marginBottom: '10px' }}>
                                {row1CoreLogos.map((logo, idx) => (
                                    <React.Fragment key={`m-r1-${idx}`}>
                                        {renderLogo(logo)}
                                    </React.Fragment>
                                ))}
                            </Marquee>

                            {/* Mobile Marquee Row 2: Scrolls Right (Reverse) */}
                            <Marquee speed={32} direction="right">
                                {row2CoreLogos.map((logo, idx) => (
                                    <React.Fragment key={`m-r2-${idx}`}>
                                        {renderLogo(logo)}
                                    </React.Fragment>
                                ))}
                            </Marquee>
                        </>
                    ) : (
                        // DESKTOP VIEW (> 990px): Single Consolidated Scrolling Row
                        <>
                            <Marquee speed={32}>
                                {allUniqueLogos.map((logo, idx) => (
                                    <React.Fragment key={`d-r1-${idx}`}>
                                        {renderLogo(logo)}
                                    </React.Fragment>
                                ))}
                            </Marquee>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
