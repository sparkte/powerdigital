import React from 'react'
import Image from 'next/image'
import advancedpartner from '../../images/Advanced-partner-badge-5-1.png'
import tiktokpartner from '../../images/TTMarketingPartnerLogoWhite-1-1.png'
import amazonwebservices from '../../images/amazon-web-services.png'
import meta from '../../images/Meta-logo-pwp34lg37zs69a7z0gd2z1p1090e578je84ycg5efw-1.png'
import snowflake from '../../images/snowflake-1.png'
import googlepartner from '../../images/PremierPartner-RGB-1.png'
export default function logos() {
  return (
     <section className="section-text-logos bg-dark">
          <div className="section-text-logos__text">
            <div className="title">
              <h2>Solution Partners</h2>
              <p>
                Trusted by some of the largest tech platforms, to drive business
                outcomes.
              </p>
            </div>
          </div>
          <ul className="section-text-logos__list-logos">
            <li>
              <picture>
                <img src={advancedpartner.src} alt="" />
              </picture>
            </li>
            <li>
              <picture>
                <img src={tiktokpartner.src} alt="" />
              </picture>
            </li>
            <li>
              <picture>
                <img src={amazonwebservices.src} alt="" />
              </picture>
            </li>
            <li>
              <picture>
                <img
                  src={meta.src}
                  alt=""
                />
              </picture>
            </li>
            <li>
              <picture>
                <img src={snowflake.src} alt="" />
              </picture>
            </li>
            <li>
              <picture>
                <img src={googlepartner.src} alt="" />
              </picture>
            </li>
          </ul>
        </section>
  )
}
