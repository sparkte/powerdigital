// "use client";
// import { useEffect, useRef } from "react";
// import Image, { StaticImageData } from "next/image";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// interface HeroAnimationProps {
//   PowerSvg: StaticImageData;
//   onHeroLogoHide?: (showNavLogo: boolean) => void; // Add this line
// }

// const HeroAnimation: React.FC<HeroAnimationProps> = ({ PowerSvg, onHeroLogoHide }) => {
//   const wrapperRef = useRef<HTMLDivElement>(null);
//   const logoRef = useRef<HTMLImageElement>(null);
//   const videoRef = useRef<HTMLDivElement>(null);
//   const textRef = useRef<HTMLDivElement>(null);
//   const MOBILE_BREAKPOINT = 990; // px, adjust if needed


//   useEffect(() => {
//     const wrapper = wrapperRef.current;
//     const logo = logoRef.current;
//     const video = videoRef.current;
//     const text = textRef.current;
//     if (!wrapper || !logo || !video || !text) return;

//     if (window.innerWidth < MOBILE_BREAKPOINT) {
//       // On mobile: show logo, nav, and text instantly (no animation)
//       if (logoRef.current) {
//         logoRef.current.style.opacity = "1";
//       }
//       if (videoRef.current) {
//         videoRef.current.style.opacity = "1";
//       }
//       if (textRef.current) {
//         textRef.current.style.opacity = "1";
//       }
//       // Optionally, call onHeroLogoHide(true) if state is used
//       if (onHeroLogoHide) {
//         onHeroLogoHide(true);
//       }
//       return;
//     }
//     const tlPinned = gsap.timeline({
//       scrollTrigger: {
//         trigger: wrapper,
//         start: "top top",
//         end: "+=900", // shorter, ends at about mid
//         scrub: true,
//         pin: true,
//         pinSpacing: false,

//       },
//     });


//     // State definitions
//     const START = {
//       logo: { top: 20, left: 0, width: 1400, opacity: 1 },
//       video: {
//         borderRadius: 10,
//         top: 376,
//         right: 134,
//         width: 470.938,
//         height: 250.475
//       },
//       text: { opacity: 1 }
//     };
//     // Mid-state is lowered by 40px compared to previous values
//     const MID = {
//       logo: { top: 59, left: 46, width: 174, opacity: 0 }, // was -49, now -9
//       video: {
//         borderRadius: 20,
//         top: 132, // was 22, now 62 (add 40px)
//         right: 40,
//         width: "calc(99.6146% - 76.0304px)",
//         height: "calc(99.5556% - 57.0228px)"
//       },
//       text: { y: 300, opacity: 0 }
//     };
//     const END = {
//       logo: { top: -9, left: 46, width: 174, opacity: 0 }, // was -49, now -9
//       video: {
//         borderRadius: 10,
//         top: "43.9472vw",
//         right: "9.9851vw",
//         width: "31.8429vw",
//         height: "17.0999vw"
//       },
//       text: { y: 300, opacity: 1 }
//     };
//     // Animate page (wrapper) position for hero unpin phase (mid->end)
//     const tlUnpinned = gsap.timeline({
//       scrollTrigger: {
//         trigger: wrapper,
//         start: "bottom top",
//         // end: "+=1500",
//         // scrub: true,

//       },
//     });
//     tlUnpinned
//       .to(video, { ...END.video, position: "absolute" }, 1)
//       .to(text, { ...END.text }, 1);

//     // Animation timeline
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: wrapper,
//         start: "top top",
//         end: "+=1753",
//         scrub: true,
//         // pin: true,
//         anticipatePin: 1
//       }
//     });
//     tl.addLabel("mid", 0.2);
//     tl.set(logo, { ...START.logo, position: "absolute" });
//     tl.set(video, { ...START.video, position: "absolute" });
//     tl.set(text, { ...START.text });

//     tl.to(logo, { top: 59, left: 46, width: 174, opacity: 0, position: "absolute" }, "mid");
//     tl.to(logo, { opacity: 1, duration: 0 }, "mid"); // <-- THIS hides logo instantly at MID
//     tl.to(logo, {
//       top: 59,
//       left: 46,
//       width: 174,
//       opacity: 0,  // Hide at mid label, not just move
//       position: "absolute",
//       onComplete: () => {
//         if (onHeroLogoHide) onHeroLogoHide(true); // Show navbar logo only at mid
//       }
//     }, "mid");

//     // tl.set(logo, { ...START.logo, position: "absolute" });
//     // tl.set(video, { ...START.video, position: "absolute" });
//     // tl.set(text, { ...START.text });

//     // tl.to(logo, { ...MID.logo, position: "absolute" }, 0.2);
//     tl.to(video, { ...MID.video, position: "absolute" }, 0.2);
//     tl.to(text, { ...MID.text }, 0.2);
//     tlPinned
//       .to(logo, { ...MID.logo, position: "absolute" }, 1)
//       .to(video, { ...MID.video, position: "absolute" }, 1)
//       .to(text, { ...MID.text }, 0);
//     tl.to(video, { ...MID.video, position: "absolute", opacity: 1 }, "mid");
//     // Animate back to visible/focused when crossing mid


//     tl.to(video, { ...END.video, position: "absolute" }, 1);
//     tl.to(text, { ...END.text }, 1);



//     // Optional: To make navbar logo disappear if user scrolls up
//     ScrollTrigger.create({
//       trigger: wrapper,
//       start: "top top",
//       end: "+=800 start",
//       scrub: true,
//       onUpdate: (self) => {
//         console.log(self.progress);
//         if (self.progress < 0.98) {
//           if (onHeroLogoHide) onHeroLogoHide(false);
//         } else {
//           // if (onHeroLogoHide) onHeroLogoHide(true);
//         }
//       }
//     });


//     return () => {
//       tl.scrollTrigger?.kill();
//       tl.kill();
//       tlUnpinned.scrollTrigger?.kill();
//       tlUnpinned.kill();
//     };
//   }, []);

//   return (
//     <div
//       ref={wrapperRef}
//       className="pin-spacer"
//       style={{
//         order: 0,
//         gridArea: "auto",
//         zIndex: 51,
//         display: "flex",
//         position: "relative",
//         width: "100vw",
//         height: 1753,
//         padding: "0 43px 0 43px",
//         margin: "0",
//         overflow: "visible",
//         boxSizing: "border-box"
//       }}
//     >
//       <section
//         id="hero-home"
//         className="hero--home bg-light"
//         style={{
//           width: "100vw",
//           maxHeight: 670,
//           height: 670,
//           padding: "0",
//           margin: "0",
//           position: "fixed",
//           boxSizing: "border-box",
//           left: 0
//         }}
//       >
//         <h1 className="fghdrhdtryhr5">
//           <Image
//             ref={logoRef as React.RefObject<HTMLImageElement>}
//             id="hero-logo"
//             className="hero--home__name"
//             src={PowerSvg}
//             alt=""
//             width={1400}
//             height={90}
//             style={{
//               position: "absolute",
//               top: 20,
//               left: 0,
//               width: 1400,
//               zIndex: 1001
//             }}
//           />
//         </h1>
//         <div>
//           <div>
//             <div
//               ref={videoRef}
//               id="content-video"
//               className="hero--home__content-video"
//               style={{
//                 borderRadius: 10,
//                 top: 356,
//                 right: 104,
//                 width: 330.938,
//                 height: 177.475,
//                 position: "absolute"
//               }}
//             >
//               <iframe
//                 id="vimeoplayer"
//                 src="https://player.vimeo.com/video/1001743392?api=1&background=1"
//                 className="hero--home__video"
//                 allow="autoplay"
//                 allowFullScreen
//               />
//             </div>
//             <div
//               ref={textRef}
//               className="hero--home__text"
//               style={{ opacity: 1 }}
//             >
//               <h2 style={{paddingLeft: "130px"}} className="heading-medium">
//                 <span>Power is </span>a world-class, tech-enabled growth marketing agency.
//               </h2>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HeroAnimation;




"use client";
import { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroAnimationProps {
  PowerSvg: StaticImageData;
  onHeroLogoHide?: (showNavLogo: boolean) => void;
}

const HeroAnimation: React.FC<HeroAnimationProps> = ({ PowerSvg, onHeroLogoHide }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const MOBILE_BREAKPOINT = 990;

  const computeY = () => {
    if (typeof window === 'undefined') return 300;
    if (window.innerWidth < 1540) return -300;
    return -300 + Math.floor((window.innerWidth - 1540) / 100) * 15;
  };
  
  // --- Animation State Definitions ---
  const START = {
    logo: { top: 20, left: 0, width: 1400, opacity: 1 }, 
    video: {
      borderRadius: 10, top: 356, right: 104, width: 330.938, height: 177.475
    },
    text: { y: 0, opacity: 1 } 
  };
  
  const MID = {
    // Vertical position the video holds throughout Phase 2
    MID_VIDEO_TOP: 122, 
    
    logo: { top: 59, left: 46, width: 174, opacity: 1 }, 
    video: {
      borderRadius: 20, top: 122, right: 40, 
      width: "calc(100% - 80px)", height: "calc(100% - 60px)"
    },
    text: { y: 20, opacity: 0 } 
  };
  
  const END = {
    // Defines the final small dimensions and horizontal position (right)
    video: {
      borderRadius: 10, top: "33.9472vw", right: "9.9851vw", 
      width: "31.8429vw", height: "17.0999vw"
    },
    text: { y: computeY(), opacity: 1 } 
  };

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const logo = logoRef.current;
    const video = videoRef.current;
    const text = textRef.current;
    if (!wrapper || !logo || !video || !text) return;

    if (window.innerWidth < MOBILE_BREAKPOINT) {
      gsap.set([logo, video, text], { clearProps: "all" });
      if (onHeroLogoHide) onHeroLogoHide(true);
      return;
    }
    
    const ctx = gsap.context(() => {
        const MIDPOINT = 0.5;
        const EASE = "power2.inOut";
        // Duration of the "hold" relative to the entire timeline (0.05 = 5% of total scroll)
        const HOLD_DURATION = MIDPOINT * 0.3; // 10% of Phase 1/2's duration
        const PHASE2_START_TIME = MIDPOINT + HOLD_DURATION;

        // 1. Set initial state 
        gsap.set(logo, { ...START.logo, position: "absolute" });
        gsap.set(video, { ...START.video, position: "absolute" });
        gsap.set(text, { ...START.text });
        
        // 2. Create the main ScrollTrigger Timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapper,
            start: "top top", 
            end: "+=1620", 
            scrub: true,
            pin: true,
            pinSpacing: false, 
          }
        });

        // --- PHASE 1 (0% to 50%): Logo Shrinks & Video Expands ---
        // Animation from 0 to 0.5
        tl.to(logo, { 
            top: MID.logo.top, 
            left: MID.logo.left, 
            width: MID.logo.width, 
            position: "absolute", 
            ease: EASE 
        }, 0);
        tl.to(video, { ...MID.video, position: "absolute", ease: EASE }, 0);
        tl.to(text, { ...MID.text, ease: EASE }, 0);

        // --- HOLD/GAP: The timeline is paused here from 0.5 to PHASE2_START_TIME ---
        
        // --- Logo Fade Out (INSTANTLY at MIDPOINT) ---
        // Logo opacity is forced to 0 at the start of the hold
        tl.to(logo, { opacity: 0, duration: 0.001 }, MIDPOINT);


        // --- PHASE 2 (PHASE2_START_TIME to 1): Video Shrinks & Text Reappears ---
        // Start the shrinking animation AFTER the short gap
        tl.to(video, { 
            width: END.video.width,
            height: END.video.height,
            right: END.video.right,
            borderRadius: END.video.borderRadius,

            // Keep the vertical position fixed at MID.video.top (22px)
            top: '12px', 

            position: "absolute", 
            ease: EASE 
        }, PHASE2_START_TIME);
        
        // H2 Text reappears after the short gap
        tl.to(text, { y: END.text.y, opacity: END.text.opacity, ease: EASE }, PHASE2_START_TIME);
        
        // --- Header Color/Logo Swap Control ---
        ScrollTrigger.create({
            trigger: wrapper,
            start: "top top",
            end: "bottom top",
            onUpdate: (self) => {
                // Keep the original 0.5 trigger point for the header swap, 
                // as the logo fade out also happens at 0.5.
                if (self.progress > 0.499) {
                    if (onHeroLogoHide) onHeroLogoHide(true); 
                } else {
                    if (onHeroLogoHide) onHeroLogoHide(false); 
                }
            }
        });

    }, wrapper); 

    return () => {
      ctx.revert(); 
    };
    
  }, [onHeroLogoHide]); 

  return (
    <div
      ref={wrapperRef}
      className="pin-spacer"
      style={{
        order: 0, zIndex: 51, display: "flex", position: "relative",
        width: "100%", maxWidth: 1468, height: 1753, 
        padding: "0px", overflow: "visible", boxSizing: "border-box",
        margin: "0 auto", 
      }}
    >
      <section
        id="hero-home"
        className="hero--home bg-light"
        style={{
          maxWidth: 1468, width: "100%", maxHeight: 670, height: 670,
          padding: "20.7536px 103.768px 117.11px",
          position: "relative", boxSizing: "border-box",
          left: "50%", transform: "translateX(-50%)", 
        }}
      >
        <h1 className="fghdrhdtryhr5">
          <Image
            ref={logoRef as React.RefObject<HTMLImageElement>}
            id="hero-logo"
            className="hero--home__name"
            src={PowerSvg}
            alt="Power Digital Logo"
            width={1400} 
            height={90}
            priority={true}
            style={{ position: "absolute", zIndex: 1001, top: 20, left: 0, width: 1400, opacity: 1 }} 
          />
        </h1>
        <div>
          <div>
            <div
              ref={videoRef}
              id="content-video"
              className="hero--home__content-video"
              style={{ position: "absolute", opacity: 1, 
                       borderRadius: 10, top: 356, right: 104, 
                       width: 330.938, height: 177.475 
                    }} 
            >
              <iframe
                id="vimeoplayer"
                src="https://player.vimeo.com/video/1001743392?api=1&background=1&loop=1&autoplay=1"
                className="hero--home__video"
                allow="autoplay"
                allowFullScreen
              />
            </div>
            <div
              ref={textRef}
              className="hero--home__text"
              style={{ opacity: 1 }} 
            >
              <h2 className="heading-medium">
                <span>Power is </span>a world-class, tech-enabled growth marketing agency.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroAnimation;