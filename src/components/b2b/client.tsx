"use client";
import React, { useState, useEffect } from "react"; 
import Image, { StaticImageData } from "next/image";
import Marquee from "react-fast-marquee";

// =================================================================
// 1. IMAGE IMPORTS 
// =================================================================
import StripeLogo from '../../images/1280px-Stripe_logo_revised_2014-1.png';
import Logo173354 from '../../images/173354_1d8bb65f000a4958bf33a4d9f6641e15mv2-1.gif';
import AircallLogo from '../../images/aircall_logo_black_rgb-Maggie-Mccarthy-1440x543-2.png';
import AlfredLogo from '../../images/Alfred-Wordmark-300x76-2.png';
import ChamberlainGroupLogo from '../../images/Chamberlain-Group-1.png';
import DataworldLogo from '../../images/dataworld-4-1.png';
import JuniperNetworksLogo from '../../images/Juniper_Networks_logo.svg-1.png';

// Row 2 Images
import ZscalerLogo from '../../images/logo-zcaler-1.png';
import PPLogoDark from '../../images/PP_Logo_Dark-1.png';
import ShipwareLogo from '../../images/shipware-1.png';
import SquareLogo from '../../images/Square_Inc._logo-1.png';
import ThermoFisherLogo from '../../images/Thermo_Fisher_Scientific_logo-1.png';
import VMwareLogo from '../../images/vmw-logo-vmware-logo-black-300-1.png';
import WPEngineLogo from '../../images/wp-engine-1.png';

// =================================================================
// 2. DATA STRUCTURE
// =================================================================
interface Logo {
    name: string;
    image: StaticImageData;
}

const row1CoreLogos: Logo[] = [
    { name: "Stripe", image: StripeLogo },
    { name: "173354 GIF", image: Logo173354 },
    { name: "Aircall", image: AircallLogo },
    { name: "Alfred", image: AlfredLogo },
    { name: "Chamberlain Group", image: ChamberlainGroupLogo },
    { name: "Dataworld", image: DataworldLogo },
    { name: "Juniper Networks", image: JuniperNetworksLogo },
];

const row2CoreLogos: Logo[] = [
    { name: "Zscaler", image: ZscalerLogo },
    { name: "PP Logo Dark", image: PPLogoDark },
    { name: "Shipware", image: ShipwareLogo },
    { name: "Square", image: SquareLogo },
    { name: "Thermo Fisher", image: ThermoFisherLogo },
    { name: "VMware", image: VMwareLogo },
    { name: "WP Engine", image: WPEngineLogo },
];

// Combined list for the single desktop row
const allUniqueLogos: Logo[] = [...row1CoreLogos, ...row2CoreLogos];


// =================================================================
// 3. RESPONSIVENESS LOGIC (BREAKPOINT: 990px)
// =================================================================
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

// =================================================================
// 4. REUSABLE LOGO RENDERER
// =================================================================
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

// =================================================================
// 5. MAIN COMPONENT
// =================================================================

export default function Client() {
    const isMobile = useIsMobile(); 

    return (
        <section className="logo-carousel bg-light">
            <div className="logo-carousel__title">
                <h2>We&apos;ve helped clients become industry leaders</h2>
            </div>
            
            <div className="logo-carousel-content">
                <div className="logo-carousel__track" style={{ height: 70 }}>
                    
                    {isMobile ? (
                        // MOBILE VIEW (<= 990px): Two Scrolling Rows
                        <>
                            {/* Mobile Marquee Row 1: Scrolls Left (Default) */}
                            <Marquee speed={32} gradient={true} gradientWidth={120} style={{ marginBottom: '10px' }}>
                                {row1CoreLogos.map((logo, idx) => (
                                    <React.Fragment key={`m-r1-${idx}`}>
                                        {renderLogo(logo)}
                                    </React.Fragment>
                                ))}
                            </Marquee>

                            {/* Mobile Marquee Row 2: Scrolls Right (Reverse) */}
                            <Marquee speed={32} gradient={true} gradientWidth={120} direction="right">
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
                            <Marquee speed={32} gradient={true} gradientWidth={120}>
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
