"use server"

import ServiceIcon1 from "../amazon-marketing/images/service-icon-1.svg"
import Layer11 from "../amazon-marketing/images/Layer_1-1.svg"
import Layer1 from "../amazon-marketing/images/Layer-1.svg"
import Fullheader from '../../../components/consumer/header';
import Cardslider from '../maincomonents/cardslider';
import HeroSection from '../maincomonents/herosection';
import LearnMore from '../maincomonents/learnmore';
import WhySection from '../maincomonents/whysection';
import WorkWith from '../maincomonents/workwith';
import BackgroundImageSection from './backgroundimagesection';
import Results from './results';

const creativeHomeHeroSectionData = {
    badge: "Creative",
    title: "Brand Design Agency",
    description: "Not just strategists but creative experts. Built by a team of design and editor professionals dedicated to your brand, we are an extension of your team. Ensuring consistency, cohesion, and an elevated aesthetic to drive impact across all touch points.",
    buttonText: "Request a consultation",
    buttonUrl: "#",
    image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Hero-Image-Right-3-small.png",
    imageAlt: "Programmatic Advertising Services"
};

const creativeHomeLearnMoreData = {
    badge: "LEARN MORE",
    title: "Learn more about Creative.",
    description: "Your questions, answered.\n\nDive into the details of how we create designs that connect and convert.",
    faqs: [
        {
            question: "What types of graphic design services do you offer?",
            answer: [
                "We offer a full range of graphic design services, including social media graphics, email designs, landing pages, banners, and Amazon marketplace graphics. Each service is tailored to meet your specific marketing needs."
            ]
        },
        {
            question: "How do you ensure the designs align with our brand?",
            answer: [
                "We start every project by thoroughly understanding your brand, your audience, and your objectives. This allows us to craft creative strategies and content that are not only visually compelling but also strategically aligned with your brand's goals."
            ]
        },
        {
            question: "Can you handle large-scale design projects?",
            answer: [
                "Absolutely! Our team is equipped to manage projects of any size, from comprehensive brand strategies to large-scale video productions and design projects. We ensure that every aspect of your campaign is executed flawlessly."
            ]
        },
        {
            question: "Why should I choose Power Digital for my graphic design needs?",
            answer: [
                "At Power Digital, we combine creativity, strategy, and data to deliver results that matter. Our team of experts is dedicated to elevating your brand through innovative, effective creative solutions tailored to your specific needs."
            ]
        }
    ]
};

const creativeHomeWhySectionData = {
    badge: "WHY POWER",
    title: "Intentional Creatives with Powerful Strategies",
    buttonText: "Get a free brand audit",
    buttonUrl: "#",
    introText: "",
    contentItems: [
        {
            type: "list" as const,
            content: [
                "<p>As the creative powerhouse of Power Digital, we have a purposeful approach to developing powerful creative. By combining research, data, and expertise, we build creative that connects to your audience and inspires impact.</p>",
                "<p>We believe the best creatives tell a story—your story. With a purposeful approach, we build a connection that inspires your customers to be loyal advocates.</p>"
            ]
        }
    ]
};

const creativeHomeWorkWithData = {
    badge: "What We Do",
    title: "Creative that delivers across all platforms",
    paragraphs: [
        "We build intentional strategies that amplify your brand’s presence across all platforms. From engaging social media graphics, conversion-focused email designs, or high-impact landing pages, our creative team has the expertise and creativity to bring your vision to life."
    ],
    buttonText: "Get in touch",
    buttonUrl: "#",
    cards: [
        {
            icon: ServiceIcon1.src,
            title: "Dedicated Experts",
            description: "Committed to ensuring your brand fully aligns with all creative we dedicate a team of creative experts to your brand. Acting as an extension to your creative team driving innovation and brand evolution.",
            bgColor: "bg-secondary" as const,
            textColor: "#333333",
            iconColor: "invert(0)",
            alt: "Premium Inventory Icon"
        },
        {
            icon: Layer11.src,
            title: "Data-Backed Creative",
            description: "Everything we create is informed by performance data. Leveraging comprehensive insights at every stage, we ensure that our creative solutions are both innovative and strategically sound.",
            bgColor: "bg-primary" as const,
            textColor: "#ffffff",
            iconColor: "invert(1)",
            alt: "Hands-On Execution Icon"
        },
        {
            icon: Layer1.src,
            title: "Holistic Approach",
            description: "Our specialty is in crafting an approach that aligns creative across all channels. Diversified in execution and mindful of platform best practices.",
            bgColor: "bg-dark" as const,
            textColor: "#ffffff",
            iconColor: "invert(1)",
            alt: "Incremental Growth Icon"
        }
    ]
};

const creativeHomeCardSliderData = [
    {
        id: "performance-creative",
        title: "Performance Creative",
        description: "Crafting visually compelling content for all channels. Our creative is strategically designed to be performance drive, brand aligned, and visually impactful.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Rectangle-46-4.png",
        imageAlt: "Performance Creative",
        bgColor: "bg-secondary" as const
    },
    {
        id: "email-landing-pages",
        title: "Email & Landing Pages",
        description: "Thoughtfully curated on-brand email and landing pages templates that capture attention and are optimized for user experience and conversion rates.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Image-4096x3072-1-1-768x576.png",
        imageAlt: "Email & Landing Pages",
        bgColor: "bg-grey" as const
    },
    {
        id: "brand-development",
        title: "Brand Development",
        description: "Purposefully developing brand identities that tell a story. We approach every brand through the lens of data and insights. Allowing data to be our guiding light our brands are built on a foundation of truth.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Figma-Image-1828x841-1-768x353.png",
        imageAlt: "Brand Development",
        bgColor: "bg-primary" as const
    },
    {
        id: "design-motion-graphics",
        title: "Design & Motion Graphics",
        description: "Our team of experts are skilled in their craft and innovative in their approach. Utilizing AI to elevate creative visions and streamline processes our experts have the ability to work across all video asset types.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Rectangle-46-9.png",
        imageAlt: "Design & Motion Graphics",
        bgColor: "bg-white" as const
    }
];

const CreativeHomePage = () => {
    return (
        <>
            <style>
                {`
                .digital-marketing-overview__carousel {
                    padding-top: 40px !important;
                }
                section.single-hero.bg-light span.badge.rounded-pill.bg-dark {
                    color: black;
                    background-color: transparent !important;
                }
            `}
            </style>
            <Fullheader />
            <main>
                <HeroSection data={creativeHomeHeroSectionData} />

                <section className="text-banner bg-light">
                    <p>A purposeful approach to</p>
                    <h3>
                        powerful  <span>creative.</span>
                    </h3>
                </section>
                <WorkWith data={creativeHomeWorkWithData} />

                <section className="video-full-width">
                    <div className="video-full-width__title">
                        <h2 />
                    </div>
                    <video
                        playsInline={true as boolean}
                        autoPlay={true as boolean}
                        muted={true as boolean}
                        controls={true as boolean}
                        loop={true as boolean}
                        preload="auto"
                    >
                        <source
                            src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Production-Sizzle-2024-Social-Use-1080p.mp4"
                            type="video/mp4"
                        />
                    </video>
                </section>


                <section className="multi-text-section bg-light">
                    <div className="multi-text-section__text">
                        <div className="title">
                            <span className="badge rounded-pill bg-dark">Our Approach</span>
                            <h2>Our intentional process designed to drive success</h2>
                        </div>
                        <div className="paragraph">
                            <p>
                                Our intentional process ensures that every creative is strategically designed and flawlessly executed, delivering results that matter. From social media graphics, email designs, or complete brand overhauls, we have the expertise, data, and drive to drive impact across all channels.
                            </p>
                            <p>
                                We eliminate the guesswork and uncertainty with Nova, a proprietary
                                technology that analyzes business growth opportunities, builds a plan to
                                execute on them, and accurately tracks progress and results.
                            </p>
                        </div>
                    </div>
                    <div className="multi-text-section__items-text">
                        {/* Primera fila con los primeros 3 items */}
                        <div className="multi-text-section__row">
                            <div className="item">
                                <div className="text">
                                    <h3>01 Let’s Connect</h3>
                                    <p>
                                        We start by understanding your brand, goals, and audience to ensure our designs hit the mark.
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="text">
                                    <h3>02 Design with Purpose</h3>
                                    <p>
                                        Our team creates designs that not only look great but also serve a strategic purpose, whether it’s driving engagement, conversions, or brand awareness.
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="text">
                                    <h3>03 Motion that evokes emotion</h3>
                                    <p>
                                        With an intentional strategy Creative Ideation is designed to support brands in brand campaigns and big ideas meant to disrupt.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Segunda fila con los items restantes */}
                        <div className="multi-text-section__row">
                            <div className="item">
                                <div className="text">
                                    <h3>04 Review and Refine</h3>
                                    <p>
                                        We collaborate with you every step of the way, refining the designs until they’re perfect.
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="text">
                                    <h3>05 Final Touches</h3>
                                    <p>
                                        Once approved, we prepare the final files for all platforms, ensuring your designs are ready to make an impact.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="badge rounded-pill mt-5 bg-light">OUR CREATIVE SERVICES</span>

                    <Cardslider data={creativeHomeCardSliderData} />
                </section>


                <section className="single-hero bg-light  ">
                    <div className="single-hero__text">
                        <span className="badge rounded-pill bg-light">Creative Affinity</span>
                        <div className="title">
                            <h2>The Future of Creative Services</h2>
                        </div>
                        <div className="text">
                            <p>
                                <b>&nbsp;</b>
                                <span style={{ fontWeight: 400 }}>
                                    Powered by our nova Intelligence platform, Creative Affinity takes
                                    your brand’s creative to the next level by marrying cutting-edge
                                    technology with advanced data analytics. Recognized by Meta for its
                                    groundbreaking potential, this tool is setting new benchmarks in
                                    creative targeting and optimization, ensuring your campaigns are more
                                    impactful than ever.
                                </span>
                            </p>
                        </div>
                        <a
                            href="https://powerdigitalmarketing.com/nova-intelligence/"
                            className="btn btn-secondary"
                        >
                            <div className="icon">
                                <span>Tell me more</span>
                                <i className="icon-arrow-up-right" />
                            </div>
                        </a>
                    </div>
                    <div className="single-hero__image">
                        <div className="single-badge"></div>
                        <img
                            src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Hero-Image-Right-1.png"
                            alt=""
                        />
                    </div>
                </section>
                <Results />
                <WhySection data={creativeHomeWhySectionData} />
                <BackgroundImageSection />
                <LearnMore data={creativeHomeLearnMoreData} />
            </main>



        </>
    );
};

export default CreativeHomePage;
