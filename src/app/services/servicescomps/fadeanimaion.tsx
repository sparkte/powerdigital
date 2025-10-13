"use client"

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function FadeAnimation() {
    const articleRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const article = articleRef.current
        if (!article) return

        // Set initial state
        gsap.set(article, {
            opacity: 0,
            y: 50
        })

        // Create the animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: article,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        })

        tl.to(article, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        })

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])
    return (
        <>
            <section className="full-image-testimonial bg-dark  section-inner">
                <img
                    className="full-image-testimonial__image"
                    src="https://powerdigitalmarketing.com/wp-content/uploads/2024/10/power-bg.jpg"
                    alt=""
                    style={{ maxHeight: "px" }}
                />
                <article
                    ref={articleRef}
                    className="1 note note--manual fade-up is-article-inner"
                >
                    <div className="note__text">
                        <h3>
                            <b>A more Powerful approach to digital marketing.</b>
                        </h3>
                        <p>
                            <i>
                                <span style={{ fontWeight: 400 }}>
                                    Strip away the complexity of online digital marketing with a
                                    data-driven approach that’s all about clear insights, robust
                                    strategies, and measurable success. Our mission is best in class
                                    growth marketing, data intelligence, strategic consulting, creative,
                                    AI and tech-enablement so our clients’ brands can be the best in the
                                    world, too.
                                </span>
                            </i>
                        </p>
                    </div>
                    <div className="testimonial-person">
                        <div className="person-info">
                            <div className="person-photo">
                                {/* <img src="" alt="" srcSet="" /> */}
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

