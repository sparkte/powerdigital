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

const creativeHomeHeroSectionData = {
    badge: "Creative",
    title: "Creative Services Agency",
    description: "As the creative powerhouse of Power Digital we have a purposeful approach to developing powerful creative. By combining research, data, and expertise we build creative that connects to your audience and inspires impact.",
    buttonText: "Request a consultation",
    buttonUrl: "#",
    image: "https://powerdigitalmarketing.com/wp-content/uploads/2025/01/HERO-IMAGE-_-Right.png",
    imageAlt: "Programmatic Advertising Services"
};

const creativeHomeLearnMoreData = {
    badge: "Learn More",
    title: "Understanding Our Creative Services",
    description: "Your questions, answered. Learn how we craft strategies that connect and convert.",
    faqs: [
        {
            question: "What is the scope of your creative strategy services?",
            answer: [
                "We offer a comprehensive range of services including campaign ideation, brand strategy, performance creative, and omnichannel execution. Each service is customized to meet your specific marketing and branding needs."
            ]
        },
        {
            question: "How do you ensure that the strategies align with our brand?",
            answer: [
                "We start every project by thoroughly understanding your brand, your audience, and your objectives. This allows us to craft creative strategies and content that are not only visually compelling but also strategically aligned with your brand's goals."
            ]
        },
        {
            question: "Can you handle large-scale creative projects?",
            answer: [
                "Absolutely! Our team is equipped to manage projects of any size, from comprehensive brand strategies to large-scale video productions and design projects. We ensure that every aspect of your campaign is executed flawlessly."
            ]
        },
        {
            question: "Why should I choose Power Digital for my creative needs?",
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
    title: "Building creatives that tell a story",
    paragraphs: [
        "We build purposeful creative with a data-backed approach. By utilizing consumer and market insights we position all creative to speak directly to your audience through characteristics that resonate with them most.",
        "All while protecting the integrity of your brand identity, we operate as an extension of your team."
    ],
    buttonText: "Get in touch",
    buttonUrl: "#",
    cards: [
        {
            icon: ServiceIcon1.src,
            title: "Brand Obsessed",
            description: "Committed to ensuring your brand fully aligns with all creative we develop together. Equally proud to represent your brand we take extra measures to ensure consistency and expertise across all touch points.",
            bgColor: "bg-secondary" as const,
            textColor: "#333333",
            iconColor: "invert(0)",
            alt: "Premium Inventory Icon"
        },
        {
            icon: Layer11.src,
            title: "Data-Drive Decisions",
            description: "We leverage comprehensive data and insights at every stage, ensuring that our creative solutions are both innovative and strategically sound.",
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

const creativeHomeServicesData = {
    badge: "OUR PROGRAMMATIC SERVICES",
    title: "The Future of Programmatic Advertising: Transparent, scalable, and ROI-driven",
    description: "Power Digital ensures seamless cross-channel and cross-device targeting for household-level precision. Pinpointing exposure and behaviors across a household's devices compounds full-funnel impact across omni-channel campaigns. This approach enables synchronized engagement that amplifies awareness and reinforces brand messaging across devices, ensuring no opportunity is missed.",
    showButton: false,
    buttonText: "",
    buttonUrl: "#",
    layout: "2-per-row" as const,
    items: [
        {
            title: "01 Detailed Analysis",
            description: "As your programmatic advertising agency, we provide a comprehensive evaluation of your existing strategies to isolate successful tactics and uncover tailored opportunities."
        },
        {
            title: "02 Custom Strategy",
            description: "Crafting a bespoke programmatic roadmap aligned with your brand, ICP, and business goals. Our approach is backed by years of experience and comprehensive research to ensure the best return on investment."
        },
        {
            title: "03 Seamless Execution",
            description: "Launch, manage, and optimize personalized campaigns seamlessly across planned high-impact channels, remaining agile at every turn."
        },
        {
            title: "04 Coverage & Results",
            description: "Monitor campaigns, making consistent adjustments, providing insightful recommendations, and measuring incremental impact to ensure sustained growth."
        }
    ]
};

const creativeHomeCardSliderData = [
    {
        id: "strategy-performance",
        title: "Strategy & Performance",
        description: "Creative concept packages that provide your brand the flexibility of utilizing concepts across platforms. Ideation to execution with built-in variations, iterations, and sizes for testing purposes.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Rectangle-46-4.png",
        imageAlt: "Strategy & Performance",
        bgColor: "bg-secondary" as const
    },
    {
        id: "design-brand",
        title: "Design & Brand",
        description: "Experts in graphic design and brand development, we have the solutions for cohesion across all touch points with intentional workflows to ensure brand cohesion.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Image-4096x2304-1-1-768x432.png",
        imageAlt: "Design & Brand",
        bgColor: "bg-grey" as const
    },
    {
        id: "editing-motion-graphics",
        title: "Editing & Motion Graphics",
        description: "Capable of bringing creative visions to life across all video assets for Meta, TikTok, YouTube, CTV, and DOOH. Our team's diverse skill set ensures quality in experience and output.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Rectangle-46-6.png",
        imageAlt: "Editing & Motion Graphics",
        bgColor: "bg-primary" as const
    },
    {
        id: "production-ugc",
        title: "Production & UGC",
        description: "We've perfected storytelling through content creation and productions. With the ability to [text is cut off].",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Rectangle-46-8.png",
        imageAlt: "Production & UGC",
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
                    <p>Don’t settle for ordinary.</p>
                    <h3>
                        Partner with <span>extraordinary.</span>
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
                            <h2>A purposeful approach to powerful creative</h2>
                        </div>
                        <div className="paragraph">
                            <p>
                                Our structured process ensures that every creative is strategically
                                designed and flawlessly executed, delivering results that matter.
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
                                    <h3>01 Audit</h3>
                                    <p>
                                        We start with a comprehensive brand audit to understand your needs,
                                        audience, and goals. Pulling creative across your landscape to place
                                        you among the competition.
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="text">
                                    <h3>02 Strategy</h3>
                                    <p>
                                        The audit provides a foundation for the strategy to be built from.
                                        We then craft a brand strategy that forms the framework of a
                                        performance-driven campaign.
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="text">
                                    <h3>03 Creative Ideation</h3>
                                    <p>
                                        With an intentional strategy, Creative Ideation is designed to
                                        support brands in brand campaigns and big ideas meant to disrupt.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Segunda fila con los items restantes */}
                        <div className="multi-text-section__row">
                            <div className="item">
                                <div className="text">
                                    <h3>04 Execution</h3>
                                    <p>
                                        Bringing those strategies across all touch points requires a team of
                                        experts who specialize in the brand and format types. Our team
                                        structure ensures your brand gets a dedicated expert for all
                                        creative services.
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="text">
                                    <h3>05 Activation</h3>
                                    <p>
                                        When ready for launch, we work hand in hand with our account
                                        specialists to ensure seamless activation across all channels and
                                        touch points.
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
                <WhySection data={creativeHomeWhySectionData} />
                <BackgroundImageSection />
                <LearnMore data={creativeHomeLearnMoreData} />
            </main>



        </>
    );
};

export default CreativeHomePage;
