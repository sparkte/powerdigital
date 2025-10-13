import Image from "next/image";
import WhoWeAreLeftSmallWebp from '../../images/WHO-WE-ARE-_-Left-small.webp';
import FadeUp from "./FadeUp";
export default function duallayout1() {
  return (
    <>
    
    <section className="dual-layout-section-wrapper">
      <div className="separator" >
      <hr />
      <div className="separator__text">
        <span>Power Digital</span>
        <div>
          <span className="separator__number">01</span>
          <span>Who we are</span>
        </div>
      </div>
    </div>
      <div className="dual-layout-section bg-light ">

      
      <div className="container-note-image ">
        <FadeUp>
        <div className="note-image fade-up">
          <Image
            className="note-image__img"
            src={WhoWeAreLeftSmallWebp}
            alt="img"
          />
        </div>
        </FadeUp>
        <div className="text-section">
          <span className="badge rounded-pill bg-dark">who we are</span>
          <div className="title">
            <h2> Transform uncertain into undeniable. </h2>
          </div>
          <div className="text">
            <p>
              Power is the digital marketing firm that operates at the
              intersection of data, technology, and human intelligence to make
              profit predictable. In today’s hyper-competitive, often volatile
              marketplace, average results just won’t cut it.
            </p>
          </div>
          <a
            href="https://powerdigitalmarketing.com/work-with-us/"
            className="btn btn-secondary"
          >
            <div className="icon">
              <span>Accelerate your business</span>
              <i className="icon-arrow-up-right" />
            </div>
          </a>
        </div>
      </div>
      </div>
    </section>
    </>
  )
}
