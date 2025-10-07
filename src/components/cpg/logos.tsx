import React from 'react'
import image1 from '../../images/Meta-logo-pwp34lg37zs69a7z0gd2z1p1090e578je84ycg5efw-1.png';
import image2 from '../../images/TTMarketingPartnerLogoWhite-1-1.png';
import image3 from '../../images/PremierPartner-RGB-1.png';
import image4 from '../../images/Advanced-partner-badge-5-1.png';
import image5 from '../../images/snowflake-1.png';
import image6 from '../../images/amazon-web-services.png';
export default function logos() {
  return (
    <>
     <section className="section-text-logos bg-dark">
      <div className="section-text-logos__text">
        <div className="title">
          <h2>We Play Well with the Platforms That Power CPG</h2>
          <p>
            <span style={{ fontWeight: 400 }}>
              Our partnerships go beyond access—they give you an edge.
            </span>
          </p>
        </div>
      </div>
      <ul className="section-text-logos__list-logos">
        <li>
          <picture>
            <img
              src={image1.src}
            //   src="images/Meta-logo-pwp34lg37zs69a7z0gd2z1p1090e578je84ycg5efw-1.png"
              alt=""
            />
          </picture>
        </li>
        <li>
          <picture>
            <img src={image2.src} alt="" />
            {/* <img src="images/TTMarketingPartnerLogoWhite-1-1.png" alt="" /> */}
          </picture>
        </li>
        <li>
          <picture>
            <img src={image3.src} alt="" />
            {/* <img src="images/PremierPartner-RGB-1.png" alt="" /> */}
          </picture>
        </li>
        <li>
          <picture>
            <img src={image4.src} alt="" />
            {/* <img src="images/Advanced-partner-badge-5-1.png" alt="" /> */}
          </picture>
        </li>
        <li>
          <picture>
            <img src={image5.src} alt="" />
            {/* <img src="images/snowflake-1.png" alt="" /> */}
          </picture>
        </li>
        <li>
          <picture>
            <img src="images/amazon-web-services.png" alt="" />
          </picture>
        </li>
      </ul>
    </section>
    </>
  )
}
