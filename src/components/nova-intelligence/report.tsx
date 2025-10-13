import React from 'react'
import image from '../../images/Untitled-1080-x-750-px-6.png'
export default function report() {
  return (
    <>
    <section className="full-image-nova bg-light">
      <span className="badge rounded-pill bg-dark">REPORTS</span>
      <div>
        <img src={image.src} alt="" />
      </div>
    </section>
    </>
  )
}
