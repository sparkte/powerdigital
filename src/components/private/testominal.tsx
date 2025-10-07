import React from 'react'
import Image from '../../images/mb20220421_wcp_img_4034-min.jpg'
export default function testominal() {
  return (
    <>
    <section className="full-image-testimonial bg-light  section-inner">
      <img
        className="full-image-testimonial__image"
        src={Image.src}
        alt=""
        style={{ maxHeight: "px" }}
      />
      <article className="1 note note--manual fade-up is-article-inner ">
        <div className="note__text">
          <p>
            <em>
              “Power Digital is a clear leader in the digital marketing space.
              Their team has partnered closely with our private equity firm’s
              portfolio companies to understand gaps in internal resources and
              help drive revenue growth. I’ve been on the agency side, and I’ve
              also worked with a lot of agencies on the client side, and without
              a doubt, Power Digital has shown the most consistent business
              intelligence and results.”
            </em>
          </p>
        </div>
        <div className="testimonial-person">
          <div className="person-info">
            <div className="person-photo">
              <img src="img" alt="" srcSet="" />
            </div>
            <div className="person-details">
              <h3 className="person-name interface-small" />
              <p className="person-title">CMO, Waud Capital Partners</p>
            </div>
          </div>
        </div>
      </article>
    </section>
    </>
  )
}
