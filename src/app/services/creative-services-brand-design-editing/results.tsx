"use client"

import CountUp from "@/components/Home/CountUp"

export default function Results() {
    return (
        <>

            <section className="section-three-data-number bg-dark">
                <div className="section-three-data-number__image-text">
                    <div className="image">
                        <picture>
                            <img
                                src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/PDM-Website-2025-3-768x785.png"
                                alt=""
                            />
                        </picture>
                    </div>
                    <div className="text">
                        <span className="badge rounded-pill bg-white">Our Results</span>
                        <div className="data-driven-insight__insight insight-section">
                            <div>
                                <CountUp end={924} suffix="%" duration={2} data-value="924%" />
                                <p>ROAS (up 77%)</p>
                            </div>
                            <div>
                                <CountUp end={105} suffix="%" duration={2} data-value="105%" />
                                <p>Revenue increase PoP</p>
                            </div>
                        </div>
                        <div className="description">
                            <p>
                                By developing a refined visual style and moving away from more playful
                                colorful palettes, our newly elevated aesthetic connected with serious
                                audiophiles looking for a high-end sound solution. Layout, type
                                treatment, muted color choices, and studio-centric product photography
                                spoke to the quality of the product we wanted to convey to audiences.
                                We saw a 26% increase in Repeat Purchase Rate due to promoting higher
                                quality products with this luxe, polished design strategy.
                            </p>
                        </div>
                        <a
                            className="btn btn-secondary"
                            href="https://powerdigitalmarketing.com/case-studies/victrola/"
                        >
                            <div className="icon">
                                <span>Read the full case study</span>
                                <i className="icon-arrow-up-right" />
                            </div>
                        </a>
                    </div>
                </div>
            </section>

        </>
    )
}