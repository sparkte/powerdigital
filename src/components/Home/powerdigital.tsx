import Image from "next/image";
import CountUp from "./CountUp";
import FadeUpAnimatedImage from "./animateimage";
import ProfileImageFromFigma from '../../images/Profile-Image-from-Figma.png';
import LogoBlock from '../../images/Logo-Block.png';
import Hero1Desktop from '../../images/Hero1_Desktop_90ff40f9-4f69-4acd-ab6f-d5ac8cb69d12-2-e1733342755528.webp';
export default function powerdigital() {
  return (
    <>
     <section className="data-driven-insight bg-dark">
      <div className="separator">
        <div className="separator__title">
          <h2>Get the data that dominates doubt.</h2>
          <Image src={LogoBlock} alt="img"  />
        </div>
        <hr />
        <div className="separator__text">
          <span>POWER DIGITAL</span>
          <div>
            <span>OUR RESULTS</span>
          </div>
        </div>
      </div>
      
      <div className="data-driven-insight__content">
        <FadeUpAnimatedImage className="data-driven-insight__image" src={Hero1Desktop}
          alt="img" />
        {/* <Image"
          className="data-driven-insight__image fade-up"
          src={Hero1Desktop}
          alt="img"
        /> */}
        <article className="note bg-primary">
          <div className="note__text">
            <p>
              Power brings a fresh, analytical approach to our campaigns,
              finding unique entry points and solutions that many would
              overlook. Their involvement transcends traditional marketing,
              delving into the economic aspects of our business to ensure all
              strategies are sustainable and scalable. Their commitment to our
              success is evident, and their expertise is a cornerstone of our
              strategic planning.
            </p>
          </div>
          <div className="testimonial-person">
            <div className="person-info">
              <div className="person-photo">
                <Image
                  src={ProfileImageFromFigma}
                  alt="img"
                />
              </div>
              <div className="person-details">
                <h3 className="person-name interface-small">Ashley Bryan</h3>
                <p className="person-title">Chief Digital Officer @ L’AGENCE</p>
              </div>
            </div>
            <div className="company-logo">
              <Image src={LogoBlock} alt="img"  />
            </div>
          </div>
        </article>
        <div className="data-driven-insight__text">
          <span className="badge rounded-pill bg-light">Our results</span>
          <div className="data-driven-insight__insight  insight-section">
            <div>
              <CountUp  end={27} suffix="%" prefix="+"/>
              <p>
                Increase in YoY revenue growth — 2.6x faster than the industry
                average.
              </p>
            </div>
            <div>
             <CountUp  end={95} suffix="%" />
              <p>
                Client retention rate, because exceeding expectations is our
                standard.
              </p>
            </div>
          </div>
          <div className="paragraph">
            <p>
              Simply put, we invest in the best technology and talent to produce
              outsized results and build trusting relationships with our
              clients. Get started today with an integrated digital strategy
              that’s tailored to profitably grow your unique business, generate
              ROI, drive higher EBITDA and exceed your business goals.
            </p>
          </div>
          <a
            href="https://powerdigitalmarketing.com/case-studies/"
            className="btn btn-secondary"
          >
            <div className="icon">
              <span>Our impact</span>
              <i className="icon-arrow-up-right" />
            </div>
          </a>
        </div>
      </div>
    </section>
    </>
  )
}
