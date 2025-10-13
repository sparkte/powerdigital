import React from 'react'
import PDMWebsite from '../../images/PDM-Website-2025-Group-570.png'
// import Griz from '/public'
export default function meet() {
  return (
    <>
    <section className="sinle-text-nova ">
      <div className="text">
        <h3>95% of marketers tell us they’re still winging it without data.</h3>
        <p>(You don’t have to be one of them.)</p>
      </div>
    </section>
    <section className="section-video-nova bg-dark">
      <div className="title">
        <h2>Meet</h2>
        <figure>
          <img src={PDMWebsite.src} alt="" />
        </figure>
      </div>
      <video controls={true} >
        <source
          src="/media/Griz-Nova-Client-Prospects-Final-June-22.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
    </>
  )
}
