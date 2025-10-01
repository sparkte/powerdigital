"use client";
import { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HeroAnimationProps {
  PowerSvg: StaticImageData;
  onHeroLogoHide?: (showNavLogo: boolean) => void; // Add this line
}

const HeroAnimation: React.FC<HeroAnimationProps> = ({ PowerSvg, onHeroLogoHide  }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const logo = logoRef.current;
    const video = videoRef.current;
    const text = textRef.current;
    if (!wrapper || !logo || !video || !text) return;
    
    const tlPinned = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        end: "+=900", // shorter, ends at about mid
        scrub: true,
        pin: true,
        pinSpacing: false,
        
      },
    });
   

    // State definitions
    const START = {
      logo: { top: 20, left: 0, width: 1400, opacity: 1 },
      video: {
        borderRadius: 10,
        top: 376,
        right: 134,
        width: 470.938,
        height: 250.475
      },
      text: { opacity: 1 }
    };
    // Mid-state is lowered by 40px compared to previous values
    const MID = {
      logo: { top: 59, left: 46, width: 174, opacity: 0 }, // was -49, now -9
      video: {
        borderRadius: 20,
        top: 132, // was 22, now 62 (add 40px)
        right: 40,
        width: "calc(99.6146% - 76.0304px)",
        height: "calc(99.5556% - 57.0228px)"
      },
      text: {y: 300, opacity: 0 }
    };
    const END = {
      logo: { top: -9, left: 46, width: 174, opacity: 0 }, // was -49, now -9
      video: {
        borderRadius: 10,
        top: "43.9472vw",
        right: "9.9851vw",
        width: "31.8429vw",
        height: "17.0999vw"
      },
      text: {y: 300, opacity: 1 }
    };
        // Animate page (wrapper) position for hero unpin phase (mid->end)
     const tlUnpinned = gsap.timeline({
  scrollTrigger: {
    trigger: wrapper,
    start: "bottom top",
    end: "+=1500",
    scrub: true,
    
  },
});
tlUnpinned
  .to(video, { ...END.video, position: "absolute" }, 1)
  .to(text, { ...END.text }, 1);

    // Animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        end: "+=1753",
        scrub: true,
        pin: true,
        anticipatePin: 1
      }
    });
      tl.addLabel("mid", 0.2);
      tl.set(logo, { ...START.logo, position: "absolute" });
      tl.set(video, { ...START.video, position: "absolute" });
      tl.set(text, { ...START.text });

      tl.to(logo, { top: 59, left: 46, width: 174, opacity: 0, position: "absolute" }, "mid");
      tl.to(logo, { opacity: 1, duration: 0 }, "mid"); // <-- THIS hides logo instantly at MID
    tl.to(logo, { 
      top: 59, 
      left: 46, 
      width: 174, 
      opacity: 0,  // Hide at mid label, not just move
      position: "absolute",
      onComplete: () => {
        if (onHeroLogoHide) onHeroLogoHide(true); // Show navbar logo only at mid
      }
    }, "mid");

    // tl.set(logo, { ...START.logo, position: "absolute" });
    // tl.set(video, { ...START.video, position: "absolute" });
    // tl.set(text, { ...START.text });

    // tl.to(logo, { ...MID.logo, position: "absolute" }, 0.2);
    tl.to(video, { ...MID.video, position: "absolute" }, 0.2);
    tl.to(text, { ...MID.text }, 0.2);
     tlPinned
      .to(logo, { ...MID.logo, position: "absolute" }, 1)
      .to(video, { ...MID.video, position: "absolute" }, 1)
      .to(text, { ...MID.text }, 0);
    tl.to(video, { ...MID.video, position: "absolute", opacity: 1 }, "mid");
// Animate back to visible/focused when crossing mid


    tl.to(video, { ...END.video, position: "absolute" }, 1);
    tl.to(text, { ...END.text }, 1);
    


    // Optional: To make navbar logo disappear if user scrolls up
   ScrollTrigger.create({
      trigger: wrapper,
      start: "top top",
      end: "start", // or match your mid
      scrub: true,
      onUpdate: (self) => {
        if (self.progress < 0.98) {
          if (onHeroLogoHide) onHeroLogoHide(false);
        } else {
          if (onHeroLogoHide) onHeroLogoHide(true);
        }
      }
    });


    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
      tlUnpinned.scrollTrigger?.kill();
      tlUnpinned.kill();
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="pin-spacer"
      style={{
        order: 0,
        gridArea: "auto",
        zIndex: 51,
        display: "flex",
        position: "relative",
        width: 1468,
        height: 1753,
        padding: "0px 0px 0px",
        overflow: "visible",
        boxSizing: "border-box"
      }}
    >
      <section
        id="hero-home"
        className="hero--home bg-light"
        style={{
          maxWidth: 1468,
          width: 1468,
          maxHeight: 670,
          height: 670,
          padding: "20.7536px 103.768px 117.11px",
          position: "fixed",
          boxSizing: "border-box",
          left: 0
        }}
      >
        <h1 className="fghdrhdtryhr5">
          <Image
            ref={logoRef as any}
            id="hero-logo"
            className="hero--home__name"
            src={PowerSvg}
            alt=""
            width={1400}
            height={90}
            style={{
              position: "absolute",
              top: 20,
              left: 0,
              width: 1400,
              zIndex: 1001
            }}
          />
        </h1>
        <div>
          <div>
            <div
              ref={videoRef}
              id="content-video"
              className="hero--home__content-video"
              style={{
                borderRadius: 10,
                top: 356,
                right: 104,
                width: 330.938,
                height: 177.475,
                position: "absolute"
              }}
            >
              <iframe
                id="vimeoplayer"
                src="https://player.vimeo.com/video/1001743392?api=1&background=1"
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
