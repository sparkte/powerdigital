"use client"

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function BackgroundImageSection() {
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
            <section className="full-image-testimonial bg-light  section-inner">
                <img
                    className="full-image-testimonial__image"
                    src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Figma-Image-small.png"
                    alt=""
                    style={{ maxHeight: "px" }}
                />
                <article
                    ref={articleRef}
                    className="1 note note--manual fade-up is-article-inner"
                >
                    <div className="note__text">
                        <p>
                            The results have been incredible. With Power Digital, it feels like
                            they&apos;re in our trench, supporting and understanding us. They&apos;re like a
                            partner and mentor in helping us get where we want to be.
                        </p>
                    </div>
                    <div className="testimonial-person">
                        <div className="person-info">
                            <div className="person-photo">
                                {/* <img src="" alt="" srcSet="" /> */}
                            </div>
                            <div className="person-details">
                                <h3 className="person-name interface-small">TIM TRZEPACZ</h3>
                                <p className="person-title">
                                    Director of Commercial Operations @ Victrola
                                </p>
                            </div>
                        </div>
                        <div className="company-logo">
                            <img
                                src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Logo-Block-1.png"
                                alt=""
                            />
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}