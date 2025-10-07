"use server"

import { HiArrowUpRight } from 'react-icons/hi2';

interface HeroSectionData {
    badge: string;
    title: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
    image: string;
    imageAlt?: string;
}

interface HeroSectionProps {
    data: HeroSectionData;
}

const HeroSection = ({ data }: HeroSectionProps) => {
    return (
        <>
            <section className="single-hero bg-light">
                <div className="single-hero__text">
                    <span className="badge rounded-pill bg-dark">{data.badge}</span>
                    <div className="title">
                        <h1>{data.title}</h1>
                    </div>
                    <div className="text">
                        <p>
                            <span style={{ fontWeight: 400 }}>
                                {data.description}
                            </span>
                        </p>
                    </div>
                    <a
                        href={data.buttonUrl}
                        className="btn btn-secondary"
                    >
                        <div className="icon">
                            <span>{data.buttonText}</span>
                            <i className="icon-arrow-up-right"></i>
                        </div>
                    </a>
                </div>
                <div className="single-hero__image">
                    <div className="single-badge"></div>
                    <img src={data.image} alt={data.imageAlt || ""} />
                </div>
            </section>
        </>
    );
};

export default HeroSection;