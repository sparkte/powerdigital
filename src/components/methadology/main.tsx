"use client";


import React from 'react'
import '../../css/mathadology.module.css';
// import LayoutScaler from "./LayoutScaler";
import Firstsection from './firstsection'
import Bigsection from './bigsection';
import Maker from './maker';
import { useEffect, useState } from "react";

interface LayoutScalerProps {
  children: React.ReactNode;
}

export default function Main() {
    const [scale, setScale] = useState(1);

  useEffect(() => {
    const baseWidth = 1420;

    const updateScale = () => {
      let newScale : number;

      // 💡 Conditional scaling logic
      if (window.innerWidth >= 1940) newScale  = 1.3;
      else if (window.innerWidth >= 1840) newScale  = 1.25;
      else if (window.innerWidth >= 1740) newScale  = 1.2;
      else if (window.innerWidth >= 1640) newScale  = 1.15;
      else if (window.innerWidth >= 1540) newScale  = 1.07;
      else if (window.innerWidth >= 1440) newScale  = 1;
      else if (window.innerWidth >= 1340) newScale  = 0.9;
        else if (window.innerWidth >= 1240) newScale  = 0.8;
        else if (window.innerWidth >= 1140) newScale  = 0.73;
        else if (window.innerWidth >= 1040) newScale  = 0.68;
        else if (window.innerWidth >= 940) newScale  = 0.62;
        else if (window.innerWidth >= 840) newScale  = 0.55;
        else if (window.innerWidth >= 740) newScale  = 0.5;
        else if (window.innerWidth >= 640) newScale  = 0.4;
        else if (window.innerWidth >= 540) newScale  = 1.35;
        else if (window.innerWidth >= 440) newScale  = 1.2;
                else if (window.innerWidth >= 400) newScale  = 1.16;

                else if (window.innerWidth >= 340) newScale  = 1.1;

                        else if (window.innerWidth >= 240) newScale  = 1.2;

      else newScale  = 0.55;

      setScale(newScale);
      document.documentElement.style.setProperty("--scale", scale.toString());
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);
  return (
    <div><>
  <Firstsection/>
  <div className="lp-element lp-pom-root" id="lp-pom-root" style={{ "--scale": scale } as React.CSSProperties}>
    <div id="lp-pom-root-color-overlay" />
    <Bigsection/>
    <div className="lp-element lp-pom-block" id="lp-pom-block-14">
      <div id="lp-pom-block-14-color-overlay" />
      <div className="lp-pom-block-content" />
    </div>
    <div className="lp-element lp-pom-block" id="lp-pom-block-18">
      <div id="lp-pom-block-18-color-overlay" />
      <div className="lp-pom-block-content" />
    </div>
    <div className="lp-element lp-pom-block" id="lp-pom-block-33">
      <div id="lp-pom-block-33-color-overlay" />
      <div className="lp-pom-block-content" />
    </div>
    <div className="lp-element lp-pom-block Logo_sec" id="lp-pom-block-44">
      <div id="lp-pom-block-44-color-overlay" />
      <div className="lp-pom-block-content" />
    </div>
    <div className="lp-element lp-pom-block" id="lp-pom-block-11">
      <div id="lp-pom-block-11-color-overlay" />
      <div className="lp-pom-block-content" />
    </div>
    <div className="lp-element lp-pom-block" id="lp-pom-block-60">
      <div id="lp-pom-block-60-color-overlay" />
      <div className="lp-pom-block-content" />
    </div>
    <div className="lp-element lp-pom-block" id="lp-pom-block-151">
      <div id="lp-pom-block-151-color-overlay" />
      <div className="lp-pom-block-content" />
    </div>
    <div className="lp-element lp-pom-block" id="lp-pom-block-150">
      <div id="lp-pom-block-150-color-overlay" />
      <div className="lp-pom-block-content" />
    </div>
    <div className="lp-element lp-pom-block" id="lp-pom-block-264">
      <div id="lp-pom-block-264-color-overlay" />
      <div className="lp-pom-block-content" />
    </div>
    <div className="lp-element lp-pom-block" id="lp-pom-block-292">
      <div id="lp-pom-block-292-color-overlay" />
      <div className="lp-pom-block-content" />
    </div>
    <div className="lp-element lp-pom-block" id="lp-pom-block-353">
      <div id="lp-pom-block-353-color-overlay" />
      <div className="lp-pom-block-content" />
    </div>
    <div className="lp-element lp-pom-block" id="lp-pom-block-352">
      <div id="lp-pom-block-352-color-overlay" />
      <div className="lp-pom-block-content" />
    </div>
    <div className="lp-element lp-pom-block" id="lp-pom-block-420">
      <div id="lp-pom-block-420-color-overlay" />
      <div className="lp-pom-block-content" />
    </div>
  </div>
  {/* lp:insertions start body:after */}
  {/* animation-observer */}
  {/* lp:insertions end body:after */}
  <noscript
  dangerouslySetInnerHTML={{
    __html: `<img src="https://ws.zoominfo.com/pixel/HcnRBDBCYPUNDzJSOEz0" width="1" height="1" style="display:none;" />`,
  }}
/>

  <iframe
    height={0}
    width={0}
    style={{ display: "none", visibility: "hidden" }}
    data-lf-form-tracking-inspected-kn9eq4rpr2x8rlvp="true"
    data-lf-yt-playback-inspected-kn9eq4rpr2x8rlvp="true"
    data-lf-vimeo-playback-inspected-kn9eq4rpr2x8rlvp="true"
  />
  <div className="backdrop__3tG5Hl" />
  <Maker/>
  <span id="PING_IFRAME_FORM_DETECTION" style={{ display: "none" }} />
  {/* <platform-panel-sw6aw4 data-wxt-shadow-root="" /> */}
  <iframe
    // owner="archetype"
    title="archetype"
    style={{ display: "none", visibility: "hidden" }}
    data-lf-form-tracking-inspected-kn9eq4rpr2x8rlvp="true"
    data-lf-yt-playback-inspected-kn9eq4rpr2x8rlvp="true"
    data-lf-vimeo-playback-inspected-kn9eq4rpr2x8rlvp="true"
  />
  <div
    className="go2933276541 go2369186930"
    id="hs-web-interactives-top-anchor"
  >
    <div id="hs-interactives-modal-overlay" className="go1632949049" />
  </div>
  <div
    className="go2933276541 go1348078617"
    id="hs-web-interactives-bottom-anchor"
  />
  
  <div id="hs-web-interactives-floating-container" style={{ "--scale": 1 } as React.CSSProperties}>
    <div
      id="hs-web-interactives-floating-top-left-anchor"
      className="go2417249464 go613305155"
    ></div>
    <div
      id="hs-web-interactives-floating-top-right-anchor"
      className="go2417249464 go471583506"
    ></div>
    <div
      id="hs-web-interactives-floating-bottom-left-anchor"
      className="go2417249464 go3921366393"
    ></div>
    <div
      id="hs-web-interactives-floating-bottom-right-anchor"
      className="go2417249464 go3967842156"
    ></div>
  </div>
  <div id="quick-start-container" />
</>
</div>
  )
}
