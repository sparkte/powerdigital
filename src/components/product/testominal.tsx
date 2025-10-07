import React from 'react'
import image from "../../images/Hero1_Desktop_90ff40f9-4f69-4acd-ab6f-d5ac8cb69d12-2-e1733342755528.webp";
import Image2 from "../../images/Profile-Image-from-Figma-1.png";
export default function testominal() {
  return (
    <>
    <section className="full-image-testimonial bg-light  section-inner">
      <img
        className="full-image-testimonial__image"
        src={image.src}
        alt=""
        style={{ maxHeight: "px" }}
      />
      <article className="2 note fade-up is-article-inner ">
        <div className="note__text">
          <p>
            With Power Digital by our side, weve found more than just a
            marketing agency—weve gained allies who champion LAGENCEs mission
            and vision. Their involvement transcends traditional marketing,
            delving into the economic aspects of our business to ensure all
            strategies are sustainable and scalable.
          </p>
        </div>
        <div className="testimonial-person">
          <div className="person-info">
            <div className="person-photo">
              <img
                src={Image2.src}
                alt=""
                srcSet=""
              />
            </div>
            <div className="person-details">
              <h3 className="person-name interface-small">Ashley Bryan</h3>
              <p className="person-title">Chief Digital Officer @ L’AGENCE</p>
            </div>
          </div>
        </div>
      </article>
    </section>
    </>
  )
}
