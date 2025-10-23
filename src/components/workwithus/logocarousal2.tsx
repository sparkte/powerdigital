// import React from 'react'

// export default function logocarousal2() {
//   return (
//     <>
//     <section className="logo-carousel logo-carousel-divider bg-grey-dark">
//       <div className="logo-carousel__mobile">
//         <div className="swiper mySwiper">
//           <div className="swiper-wrapper">
//             <div className="swiper-slide">
//               <img src="images/Alice_Olivia_pdm.png" alt="" />
//             </div>
//             <div className="swiper-slide">
//               <img src="images/aviator-nation_pdm.png" alt="" />
//             </div>
//             <div className="swiper-slide">
//               <img src="images/dataworld_pdm.png" alt="" />
//             </div>
//             <div className="swiper-slide">
//               <img src="images/Gold_belly_pdm.png" alt="" />
//             </div>
//             <div className="swiper-slide">
//               <img src="images/hippeas_pdm.png" alt="" />
//             </div>
//             <div className="swiper-slide">
//               <img src="images/Taylor_Guitars_logo_pdm.png" alt="" />
//             </div>
//             <div className="swiper-slide">
//               <img src="images/host-healthcare-1.png" alt="" />
//             </div>
//             <div className="swiper-slide">
//               <img src="images/chamberlain-1.png" alt="" />
//             </div>
//             <div className="swiper-slide">
//               <img src="images/Alice_Olivia_pdm.png" alt="" />
//             </div>
//             <div className="swiper-slide">
//               <img src="images/aviator-nation_pdm.png" alt="" />
//             </div>
//             <div className="swiper-slide">
//               <img src="images/dataworld_pdm.png" alt="" />
//             </div>
//             <div className="swiper-slide">
//               <img src="images/Gold_belly_pdm.png" alt="" />
//             </div>
//             <div className="swiper-slide">
//               <img src="images/hippeas_pdm.png" alt="" />
//             </div>
//             <div className="swiper-slide">
//               <img src="images/Taylor_Guitars_logo_pdm.png" alt="" />
//             </div>
//             <div className="swiper-slide">
//               <img src="images/host-healthcare-1.png" alt="" />
//             </div>
//             <div className="swiper-slide">
//               <img src="images/chamberlain-1.png" alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="logo-carousel__desktop">
//         <div className="swiper mySwiper">
//           <div className="swiper-wrapper">
//             <div className="swiper-slide">
//               <img src="images/Alice_Olivia_pdm.png" alt="" />
//             </div>
//             <div className="swiper-slide">
//               <img src="images/aviator-nation_pdm.png" alt="" />
//             </div>
//             <div className="swiper-slide">
//               <img src="images/dataworld_pdm.png" alt="" />
//             </div>
//             <div className="swiper-slide">
//               <img src="images/Gold_belly_pdm.png" alt="" />
//             </div>
//             <div className="swiper-slide">
//               <img src="images/hippeas_pdm.png" alt="" />
//             </div>
//             <div className="swiper-slide">
//               <img src="images/Taylor_Guitars_logo_pdm.png" alt="" />
//             </div>
//             <div className="swiper-slide">
//               <img src="images/host-healthcare-1.png" alt="" />
//             </div>
//             <div className="swiper-slide">
//               <img src="images/chamberlain-1.png" alt="" />
//             </div>
//             <div className="swiper-slide">
//               <img src="images/Alice_Olivia_pdm.png" alt="" />
//             </div>
//             <div className="swiper-slide">
//               <img src="images/aviator-nation_pdm.png" alt="" />
//             </div>
//             <div className="swiper-slide">
//               <img src="images/dataworld_pdm.png" alt="" />
//             </div>
//             <div className="swiper-slide">
//               <img src="images/Gold_belly_pdm.png" alt="" />
//             </div>
//             <div className="swiper-slide">
//               <img src="images/hippeas_pdm.png" alt="" />
//             </div>
//             <div className="swiper-slide">
//               <img src="images/Taylor_Guitars_logo_pdm.png" alt="" />
//             </div>
//             <div className="swiper-slide">
//               <img src="images/host-healthcare-1.png" alt="" />
//             </div>
//             <div className="swiper-slide">
//               <img src="images/chamberlain-1.png" alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     </>
//   )
// }


"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";

import Alliant from '../../images/Alliant.png'
import Catalinacrunch from '../../images/Catalina-crunch.png'
import sambazon from '../../images/sambazon.png'
import TaylorGuitarslogo from '../../images/Taylor_Guitars_logo.png'
import oneilllogo from '../../images/oneill-logo.png'
import hippeas from '../../images/hippeas.png'
import jhonnywas from '../../images/jhonny_was.png'
import gorjana from '../../images/gorjana.png'
import dataworld from '../../images/dataworld.png'
import Gold_belly from '../../images/Gold_belly.png'
import Cymbiotika from '../../images/Cymbiotika.png'
import coola from '../../images/coola.png'
import crocs from '../../images/crocs.png'
import asics from '../../images/asics.png'
import aviator_nation from '../../images/aviator-nation.png'
import Alice_Olivia from '../../images/Alice_Olivia.png'
import Graza from '../../images/Graza.png'

const logoList = [
  Alliant, Catalinacrunch, sambazon, TaylorGuitarslogo, oneilllogo, hippeas, jhonnywas, gorjana,
  Graza, dataworld, Gold_belly, Cymbiotika, coola, crocs, asics, aviator_nation, Alice_Olivia
];

export default function B2BLogoCarousel2() {
  return (
    <section className="logo-carousel">
      <div className="logo-carousel__title">
        <h2>We’ve helped clients become industry leaders</h2>
      </div>
      <div className="logo-carousel__track" style={{height: 70}}>
        <Marquee speed={32} gradient={true} gradientWidth={120}>
          {logoList.map((logo, idx) => (
            <span key={idx} className="logo-carousel__logo" style={{
              width: 120,
              height: 70,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 50,
              background: "transparent",
              borderRadius: "10px",
              padding: "0 10px",
            }}>
              <Image src={logo} alt="" height={70} width={120} />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
