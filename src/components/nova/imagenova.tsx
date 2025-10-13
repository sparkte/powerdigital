import React from 'react'
import Untitled from '../../images/Untitled-1080-x-750-px-3.png'
import Untitled1 from '../../images/Untitled-1080-x-750-px-1.png'
export default function imagenova() {
  return (
    <>
    <section className="title-image-Nova bg-light">
      <div className="text">
        <h2>What are you waiting for?</h2>
        <a href="#" className="btn btn-secondary">
          <div className="icon">
            <span>Get a complimentary nova appraisal</span>
            <i className="icon-arrow-up-right" />
          </div>
        </a>
      </div>
      <div className="images">
        <img src={Untitled.src} alt="" />
        <img src={Untitled1.src} alt="" />
      </div>
    </section>{" "}
    </>
  )
}
