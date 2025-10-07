"use client";
import React from 'react';
import Image from 'next/image';

// =================================================================
// 1. IMAGE IMPORTS
// We assume these images are local files in the '../../images/' directory
// and follow the naming convention used in the original code snippets.
// =================================================================
import HubspotLogo from '../../images/hubspotlogowhite.png';
import DemandbaseLogo from '../../images/demandbase_main_logo_white.a85b8bb6b8f5.png';
import BomboraLogo from '../../images/bombora_logo-White-2022.png';
import MarketoLogo from '../../images/Marketo-Logo-white-90x198px.png';
import SalesforceLogo from '../../images/salesforcewhitefinal.png';
import SixSenseLogo from '../../images/6sense_logo_white.webp';
import IntentsifyLogo from '../../images/Intentsify_Logo.png';
import NRichLogo from '../../images/N.Rich-Logo-White.png';
import RWSLogo from '../../images/RWS_logo-white.webp';
import IndustryDiveLogo from '../../images/Industry-Dive-Logo-White.png';
import EntrypointLogo from '../../images/entrypoint-Logo-White.png';
import FoundryLogo from '../../images/Foundry-Logo-White-1.png';

// Define the data structure to map imported images
const solutionPartners = [
    { name: "HubSpot", image: HubspotLogo },
    { name: "Demandbase", image: DemandbaseLogo },
    { name: "Bombora", image: BomboraLogo },
    { name: "Marketo", image: MarketoLogo },
    { name: "Salesforce", image: SalesforceLogo },
    { name: "6sense", image: SixSenseLogo },
    { name: "Intentsify", image: IntentsifyLogo },
    { name: "N.Rich", image: NRichLogo },
    { name: "RWS", image: RWSLogo },
    { name: "Industry Dive", image: IndustryDiveLogo },
    { name: "Entrypoint", image: EntrypointLogo },
    { name: "Foundry", image: FoundryLogo },
];


export default function Solution() {
  return (
    <section className="section-text-logos bg-dark">
      <div className="section-text-logos__text">
        <div className="title">
          <h2>Solution Partners</h2>
          <p>
            <span style={{ fontWeight: 400 }}>
              We work with dozens of partners to ensure our clients&apos; success,
              including:
            </span>
          </p>
        </div>
      </div>
      <ul className="section-text-logos__list-logos">
        {solutionPartners.map((partner, index) => (
            <li key={index}>
                <picture>
                    {/* Using the Next.js Image component for performance */}
                    <Image 
                        src={partner.image} 
                        alt={`${partner.name} Logo`} 
                        // Set placeholder dimensions. You may need to adjust these 
                        // for optimal display without layout shift.
                        width={150} 
                        height={50} 
                    />
                </picture>
            </li>
        ))}
      </ul>
    </section>
  )
}
