import Image from "next/image";
import Group259 from '../../images/Group-259.png';
import FadeUp from "./FadeUp";
export default function dualllayout2() {
  return (
    <>
    <section className="dual-layout-section bg-light ">
      <div className="container-note-image is-reversed">
        <FadeUp>
        <div className="note-image fade-up">
          <Image
            className="note-image__img"
            src={Group259}
            alt="img"
          />
        </div>
        </FadeUp>
        <div className="text-section">
          <span className="badge rounded-pill bg-dark">Our Approach</span>
          <div className="title">
            <h2> Welcome to the end of gut feelings </h2>
          </div>
          <div className="text">
            <p>
              As a leading global digital marketing agency, we do everything in
              our power to quell uncertainty through total transparency. We
              provide receipts for what’s driving business impact, believing in
              accountability versus obfuscation. Our unconventional approach
              integrates strategic consulting, data intelligence, channel
              expertise and proprietary technology — enabling our teams to
              develop clear, actionable insights and activate high-performing
              digital marketing campaigns.
            </p>
          </div>
          <a
            href="https://powerdigitalmarketing.com/approach/"
            className="btn btn-secondary"
          >
            <div className="icon">
              <span>How we work</span>
              <i className="icon-arrow-up-right" />
            </div>
          </a>
        </div>
      </div>
    </section>
    </>
  )
}
