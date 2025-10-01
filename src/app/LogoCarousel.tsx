"use client";
import Marquee from "react-fast-marquee";
import Image, { StaticImageData } from "next/image";

interface CustomLogoCarouselProps {
  logos: StaticImageData[];
  title?: string;
  height?: number;
  logoWidth?: number;
  gap?: number;
  bg?: string;
}

const CustomLogoCarousel: React.FC<CustomLogoCarouselProps> = ({
  logos,
  title = "We’ve helped clients become industry leaders",
  height = 70,
  logoWidth = 120,
  gap = 50,
  bg = "#f4f4f7", // matches bg-light
}) => (
  <section className="xyz-logocarousel-section" style={{ background: bg }}>
    <div className="xyz-logocarousel-title">
      <h2>{title}</h2>
    </div>
    <div className="xyz-logocarousel-track" style={{ height }}>
      <Marquee speed={32} gradient={true} gradientWidth={120}>
        {logos.map((logo, idx) => (
          <span
            key={idx}
            className="xyz-logocarousel-logo"
            style={{
              width: logoWidth,
              height,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: gap,
              background: "transparent",
              borderRadius: "10px",
              padding: "0 10px",
            }}
          >
            <Image src={logo} alt="" height={height} width={logoWidth} />
          </span>
        ))}
      </Marquee>
    </div>
  </section>
);

export default CustomLogoCarousel;
