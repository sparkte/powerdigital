import React from 'react'
import purple from '../../images/purple-flat-smaller.png'

export default function testominal() {
  return (
    <>
    <section className="full-image-testimonial bg-light  section-inner">
      <img
        className="full-image-testimonial__image"
        src={purple.src}
        alt=""
        style={{ maxHeight: 300 }}
      />
      <article className="1 note note--manual fade-up is-article-inner bg-dark">
        <div className="note__text">
          <p>
            If marketing needs to be measured, and attribution is unable to
            accurately determine if a tactic is incremental
            <br />
            or not, <span className="highlighted"> what’s the solution?</span>
          </p>
        </div>
        <div className="testimonial-person">
          <div className="person-info">
            <div className="person-photo">
              <img src="#" alt="" srcSet="" />
            </div>
            <div className="person-details">
              <h3 className="person-name interface-small" />
              <p className="person-title" />
            </div>
          </div>
        </div>
      </article>
    </section>
    </>
  )
}
