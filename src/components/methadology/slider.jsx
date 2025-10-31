import React, { useEffect } from "react";

export default function slider() {
  useEffect(() => {
    const wrapper = document.querySelector(".card-wrapper");
    const thumb = document.getElementById("scrollbarThumb");
    const track = document.getElementById("scrollbarTrack");

    if (!wrapper || !thumb || !track) return;

    // make cards horizontally scrollable
    wrapper.style.overflowX = "auto";
    wrapper.style.display = "flex";
    wrapper.style.scrollSnapType = "x mandatory";
    wrapper.style.scrollBehavior = "smooth";
    wrapper.style.gap = "20px";
    wrapper.style.scrollbarWidth = "none";
    wrapper.style.msOverflowStyle = "none";
    wrapper.style.overflowY = "hidden";

    const handleScroll = () => {
      const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
      const progress = (wrapper.scrollLeft / maxScroll) * 100;
      thumb.style.left = `${progress}%`;
    };

    wrapper.addEventListener("scroll", handleScroll);

    // --- DRAG LOGIC FOR CUSTOM THUMB ---
    let isDragging = false;
    let startX = 0;

    const handleMouseDown = (e) => {
      isDragging = true;
      startX = e.clientX;
      document.body.style.userSelect = "none"; // disable text selection
    };

    const handleMouseUp = () => {
      isDragging = false;
      document.body.style.userSelect = "auto";
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;

      const trackRect = track.getBoundingClientRect();
      const thumbWidth = thumb.offsetWidth;
      const maxThumbMove = trackRect.width - thumbWidth;

      // Calculate thumb position within track
      let newLeft = e.clientX - trackRect.left - thumbWidth / 2;
      newLeft = Math.max(0, Math.min(newLeft, maxThumbMove));

      const progress = newLeft / maxThumbMove;
      thumb.style.left = `${progress * 100}%`;

      // Sync cards scroll
      const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
      wrapper.scrollLeft = maxScroll * progress;
    };

    thumb.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      wrapper.removeEventListener("scroll", handleScroll);
      thumb.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="lp-element mgleft lp-pom-box" id="lp-pom-box-354">
        <div id="lp-pom-box-354-color-overlay" />
        <div
          className="lp-element lp-pom-text nlh"
          id="lp-pom-text-355"
            
        >
          <h2   >
            <span
              style={{
                fontWeight: 700,
                fontFamily: '"Darker Grotesque"',
                fontSize: 60,
                color: "rgb(43, 42, 41)",
                fontStyle: "normal"
              }}
            >
              Power Circuit Process&nbsp;
            </span>
          </h2>
        </div>
        <div className="lp-element lp-pom-box" id="lp-pom-box-356">
          <div id="lp-pom-box-356-color-overlay" />
        </div>
        <div className="lp-element lp-pom-box btn-hover" id="lp-pom-box-357">
          <div id="lp-pom-box-357-color-overlay" />
          <a
            className="lp-element lp-pom-button"
            id="lp-pom-button-358"
            href="clkn/https/powerdigitalmarketing.com/work-with-us/"
            target="_self"
          >
            <span className="label">Get in Touch</span>
          </a>
          <div className="lp-element lp-pom-image" id="lp-pom-image-359">
            <div
              className="lp-pom-image-container"
              style={{ overflow: "hidden" }}
            >
              <img
                src="//d9hhrg4mnvzow.cloudfront.net/powerdigitalmarketing.com/the-power-circuit-v1/d1f41b62-icon-1_1000000000000000000028.png"
                alt=""
                data-src-desktop-1x="//d9hhrg4mnvzow.cloudfront.net/powerdigitalmarketing.com/the-power-circuit-v1/d1f41b62-icon-1_1000000000000000000028.png"
                data-src-mobile-1x="//d9hhrg4mnvzow.cloudfront.net/powerdigitalmarketing.com/the-power-circuit-v1/d1f41b62-icon-1_1000000000000000000028.png"
                srcSet=""
              />
            </div>
          </div>
        </div>
        <div className="lp-element lp-pom-box card-wrapper" id="lp-pom-box-369">
          <div id="lp-pom-box-369-color-overlay" />
          <div className="lp-element lp-pom-box" id="lp-pom-box-370">
            <div id="lp-pom-box-370-color-overlay" />
            <div className="lp-element lp-pom-box" id="lp-pom-box-371">
              <div id="lp-pom-box-371-color-overlay" />
              <div
                className="lp-element lp-pom-text nlh"
                id="lp-pom-text-372"
                  
              >
                <p   >
                  <span
                    style={{
                      fontWeight: 500,
                      fontFamily: '"Darker Grotesque"',
                      fontSize: 22,
                      color: "rgb(43, 42, 41)",
                      fontStyle: "normal"
                    }}
                  >
                    <strong>Step 1: Connect Your Data&nbsp;</strong>
                  </span>
                </p>
              </div>
              <div
                className="lp-element lp-pom-text nlh"
                id="lp-pom-text-373"
                  
              >
                <p   >
                  <span
                    style={{
                      fontWeight: 500,
                      fontFamily: '"Darker Grotesque"',
                      fontSize: 18,
                      color: "rgb(43, 42, 41)",
                      fontStyle: "normal"
                    }}
                  >
                    We securely ingest your marketing and transaction data to
                    benchmark your brand against 103 KPIs—
                    <strong>
                      powered by $20B+ in aggregated industry data.{" "}
                    </strong>
                  </span>
                </p>
              </div>
            </div>
            <div className="lp-element lp-pom-image" id="lp-pom-image-374">
              <div
                className="lp-pom-image-container"
                style={{ overflow: "hidden" }}
              >
                <img
                  src="//d9hhrg4mnvzow.cloudfront.net/powerdigitalmarketing.com/the-power-circuit-v1/2f8deadb-rectangle-5857_1000000000000000000028.png"
                  alt=""
                  data-src-desktop-1x="//d9hhrg4mnvzow.cloudfront.net/powerdigitalmarketing.com/the-power-circuit-v1/2f8deadb-rectangle-5857_1000000000000000000028.png"
                  data-src-mobile-1x="//d9hhrg4mnvzow.cloudfront.net/powerdigitalmarketing.com/the-power-circuit-v1/2f8deadb-rectangle-5857_108c046000000000000028.png"
                  data-src-mobile-2x="//d9hhrg4mnvzow.cloudfront.net/powerdigitalmarketing.com/the-power-circuit-v1/2f8deadb-rectangle-5857_1000000000000000000028.png"
                  srcSet=""
                />
              </div>
            </div>
          </div>
          <div className="lp-element lp-pom-box" id="lp-pom-box-375">
            <div id="lp-pom-box-375-color-overlay" />
            <div className="lp-element lp-pom-box" id="lp-pom-box-376">
              <div id="lp-pom-box-376-color-overlay" />
              <div
                className="lp-element lp-pom-text nlh"
                id="lp-pom-text-377"
                  
              >
                <p   >
                  <span
                    style={{
                      fontWeight: 500,
                      fontFamily: '"Darker Grotesque"',
                      fontSize: 22,
                      color: "rgb(255, 255, 255)",
                      fontStyle: "normal"
                    }}
                  >
                    <strong>Step 2: Get a Deep Diagnostic&nbsp;</strong>
                  </span>
                </p>
              </div>
              <div
                className="lp-element lp-pom-text nlh"
                id="lp-pom-text-378"
                  
              >
                <p   >
                  <span
                    style={{
                      fontWeight: 500,
                      fontFamily: '"Darker Grotesque"',
                      fontSize: 18,
                      color: "rgb(255, 255, 255)",
                      fontStyle: "normal"
                    }}
                  >
                    Our analysts identify what’s holding you back across the six
                    critical growth pillars: Business,{" "}
                    <strong>
                      Audience, Product, Messaging, Experience, and Media.
                    </strong>
                    &nbsp;
                  </span>
                </p>
              </div>
            </div>
            <div className="lp-element lp-pom-image" id="lp-pom-image-379">
              <div
                className="lp-pom-image-container"
                style={{ overflow: "hidden" }}
              >
                <img
                  src="//d9hhrg4mnvzow.cloudfront.net/powerdigitalmarketing.com/the-power-circuit-v1/d4345b46-rectangle-5855_1000000000000000000028.png"
                  alt=""
                  data-src-desktop-1x="//d9hhrg4mnvzow.cloudfront.net/powerdigitalmarketing.com/the-power-circuit-v1/d4345b46-rectangle-5855_1000000000000000000028.png"
                  data-src-mobile-1x="//d9hhrg4mnvzow.cloudfront.net/powerdigitalmarketing.com/the-power-circuit-v1/d4345b46-rectangle-5855_108c046000000000000028.png"
                  data-src-mobile-2x="//d9hhrg4mnvzow.cloudfront.net/powerdigitalmarketing.com/the-power-circuit-v1/d4345b46-rectangle-5855_1000000000000000000028.png"
                  srcSet=""
                />
              </div>
            </div>
          </div>
          <div className="lp-element lp-pom-box" id="lp-pom-box-380">
            <div id="lp-pom-box-380-color-overlay" />
            <div className="lp-element lp-pom-box" id="lp-pom-box-381">
              <div id="lp-pom-box-381-color-overlay" />
              <div
                className="lp-element lp-pom-text nlh"
                id="lp-pom-text-382"
                  
              >
                <p   >
                  <span
                    style={{
                      fontWeight: 500,
                      fontFamily: '"Darker Grotesque"',
                      fontSize: 22,
                      color: "rgb(255, 255, 255)",
                      fontStyle: "normal"
                    }}
                  >
                    <strong>
                      Step 3: Receive a Tailored Growth Plan&nbsp;
                    </strong>
                  </span>
                </p>
              </div>
              <div
                className="lp-element lp-pom-text nlh"
                id="lp-pom-text-383"
                  
              >
                <p   >
                  <span
                    style={{
                      fontWeight: 500,
                      fontFamily: '"Darker Grotesque"',
                      fontSize: 18,
                      color: "rgb(255, 255, 255)",
                      fontStyle: "normal"
                    }}
                  >
                    We prescribe{" "}
                    <strong>proven, battle-tested strategies</strong> based on
                    thousands of client engagements and{" "}
                    <strong>800+ strategist insights.</strong>
                  </span>
                </p>
              </div>
            </div>
            <div className="lp-element lp-pom-image" id="lp-pom-image-384">
              <div
                className="lp-pom-image-container"
                style={{ overflow: "hidden" }}
              >
                <img
                  src="//d9hhrg4mnvzow.cloudfront.net/powerdigitalmarketing.com/the-power-circuit-v1/12dc2ea5-rectangle-5856_1000000000000000000028.png"
                  alt=""
                  data-src-desktop-1x="//d9hhrg4mnvzow.cloudfront.net/powerdigitalmarketing.com/the-power-circuit-v1/12dc2ea5-rectangle-5856_1000000000000000000028.png"
                  data-src-mobile-1x="//d9hhrg4mnvzow.cloudfront.net/powerdigitalmarketing.com/the-power-circuit-v1/12dc2ea5-rectangle-5856_108c046000000000000028.png"
                  data-src-mobile-2x="//d9hhrg4mnvzow.cloudfront.net/powerdigitalmarketing.com/the-power-circuit-v1/12dc2ea5-rectangle-5856_1000000000000000000028.png"
                  srcSet=""
                />
              </div>
            </div>
          </div>
          <div className="lp-element lp-pom-box" id="lp-pom-box-385">
            <div id="lp-pom-box-385-color-overlay" />
            <div className="lp-element lp-pom-box" id="lp-pom-box-386">
              <div id="lp-pom-box-386-color-overlay" />
              <div
                className="lp-element lp-pom-text nlh"
                id="lp-pom-text-387"
                  
              >
                <p   >
                  <span
                    style={{
                      fontWeight: 500,
                      fontFamily: '"Darker Grotesque"',
                      fontSize: 22,
                      color: "rgb(43, 42, 41)",
                      fontStyle: "normal"
                    }}
                  >
                    <strong>Step 4: Execute with Power Digital</strong>
                  </span>
                </p>
              </div>
              <div
                className="lp-element lp-pom-text nlh"
                id="lp-pom-text-388"
                  
              >
                <p   >
                  <span
                    style={{
                      fontWeight: 500,
                      fontFamily: '"Darker Grotesque"',
                      fontSize: 18,
                      color: "rgb(43, 42, 41)",
                      fontStyle: "normal"
                    }}
                  >
                    Our team gets to work—activating the right levers across
                    your business with{" "}
                    <strong>
                      a clear plan, tight accountability, and measurable
                      outcomes.
                    </strong>
                  </span>
                </p>
              </div>
            </div>
            <div className="lp-element lp-pom-image" id="lp-pom-image-389">
              <div
                className="lp-pom-image-container"
                style={{ overflow: "hidden" }}
              >
                <img
                  src="//d9hhrg4mnvzow.cloudfront.net/powerdigitalmarketing.com/the-power-circuit-v1/334bd580-img1_1000000000000000000028.png"
                  alt=""
                  data-src-desktop-1x="//d9hhrg4mnvzow.cloudfront.net/powerdigitalmarketing.com/the-power-circuit-v1/334bd580-img1_1000000000000000000028.png"
                  data-src-mobile-1x="//d9hhrg4mnvzow.cloudfront.net/powerdigitalmarketing.com/the-power-circuit-v1/334bd580-img1_108c046000000000000028.png"
                  data-src-mobile-2x="//d9hhrg4mnvzow.cloudfront.net/powerdigitalmarketing.com/the-power-circuit-v1/334bd580-img1_1000000000000000000028.png"
                  srcSet=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lp-element lp-code" id="lp-code-400">
          {/* lp:insertions start div#lp-code-400 */}
          <div className="scrollbar-track" id="scrollbarTrack">
            <div
              className="scrollbar-thumb"
              id="scrollbarThumb"
              style={{ left: 0 }}
            />
          </div>
          {/* lp:insertions end div#lp-code-400 */}
        </div>
        <div className="lp-element lp-pom-box" id="lp-pom-box-401">
          <div id="lp-pom-box-401-color-overlay" />
          <a
            className="lp-element lp-pom-button"
            id="lp-pom-button-402"
            href="clkn/https/powerdigitalmarketing.com/work-with-us/"
            target="_self"
          >
            <span className="label">
              Request Your PowerCircuit™ Diagnostic Today
            </span>
          </a>
          <div className="lp-element lp-pom-image" id="lp-pom-image-403">
            <div
              className="lp-pom-image-container"
              style={{ overflow: "hidden" }}
            >
              <img
                src="//d9hhrg4mnvzow.cloudfront.net/powerdigitalmarketing.com/the-power-circuit-v1/d1f41b62-icon-1_1000000000000000000028.png"
                alt=""
                data-src-desktop-1x="//d9hhrg4mnvzow.cloudfront.net/powerdigitalmarketing.com/the-power-circuit-v1/d1f41b62-icon-1_1000000000000000000028.png"
                data-src-mobile-1x="//d9hhrg4mnvzow.cloudfront.net/powerdigitalmarketing.com/the-power-circuit-v1/d1f41b62-icon-1_1000000000000000000028.png"
                srcSet=""
              />
            </div>
          </div>
        </div>
      </div>
  )
}
