"use client";
import React, { useEffect } from "react";
import image1 from "../../images/service-icon-2.svg";
import image2 from "../../images/service-icon-3.svg";
import image3 from "../../images/EDIT-Services_PublicRelations_100-01-1.svg";
import image4 from "../../images/service-icon-4.svg";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default function Section2() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      new Swiper(".swiper-carousel", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 3000, // slide every 3s
          disableOnInteraction: false,
        },
        speed: 800,
      });
    }
  }, []);


  return (
    <>
      <section className="text-banner bg-light">
        <p>Your partner for</p>
        <h3>
          Making profit <span>predictable.</span>
        </h3>
      </section>

      <section className="carousel-company bg-dark">
        <div className="carousel-company__desktop">
          <div className="carousel-company__title">
            <span className="badge rounded-pill bg-light">why us</span>
            <h2>How is working with Power different?</h2>
          </div>

          {/* 👇 Your original structure — unchanged */}
          <div className="swiper swiper-carousel">
            <div className="swiper-wrapper">
              <div
                id="maxcontent"
                className="three-card swiper-slide"
                style={{
                  backgroundColor: "rgb(175,170,249)",
                  color: "rgb(43,42,41)",
                }}
              >
                <div className="icon">
                  <img src={image1.src} alt="" />
                </div>
                <div className="text">
                  <h4>A Tailored Approach</h4>
                  <p>We never use a one-size-fits-all plan.</p>
                </div>
              </div>

              <div
                className="three-card swiper-slide"
                style={{
                  backgroundColor: "rgb(171,171,171)",
                  color: "rgb(43,42,41)",
                  width: "auto",
                }}
              >
                <div className="icon">
                  <img src={image2.src} alt="" />
                </div>
                <div className="text">
                  <h3>Business Outcomes vs. Vanity Metrics</h3>
                  <p>Clicks and engagements don’t mean shit.</p>
                </div>
              </div>

              <div
                className="three-card swiper-slide"
                style={{
                  backgroundColor: "rgb(119,86,255)",
                  color: "rgb(245,245,245)",
                  width: "auto",
                }}
              >
                <div className="icon">
                  <img src={image3.src} alt="" />
                </div>
                <div className="text">
                  <h3>Radical Transparency</h3>
                  <p>
                    Power is a glass box that shows you everything and hides
                    nothing.
                  </p>
                </div>
              </div>

              <div
                className="three-card swiper-slide"
                style={{
                  backgroundColor: "rgb(245,245,245)",
                  color: "rgb(43,42,41)",
                  width: "auto",
                }}
              >
                <div className="icon">
                  <img src={image4.src} alt="" />
                </div>
                <div className="text">
                  <h3>We Seriously Outperform</h3>
                  <p>And we’ve got the numbers to prove it.</p>
                </div>
              </div>
            </div>

            {/* 👇 Add Swiper UI controls */}
            {/* <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-pagination"></div> */}
          </div>
        </div>
      </section>
    </>
  );
}
