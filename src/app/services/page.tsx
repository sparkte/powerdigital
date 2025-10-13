"use server"

import ServiceIcon1 from "./amazon-marketing/images/service-icon-1.svg"

import Layer1 from "./amazon-marketing/images/Layer-1.svg"
import Fullheader from '../../components/consumer/header';
import HeroSection from './maincomonents/herosection';
import LearnMore from './maincomonents/learnmore';
import WorkWith from './maincomonents/workwith';
import ServicesComponent from './servicescomps/services';
import FadeAnimation from './servicescomps/fadeanimaion';
import Clientlogo from "../strategic-consulting/clientlogo";
import Difference from './servicescomps/difference';

const servicesHeroSectionData = {
    badge: "GROWTH MARKETING",
    title: "Digital marketing services for less guesswork, more yes-it-will work.",
    description: "With services that stretch across every touch point of the marketing funnel, Power is the digital marketing firm for crushing your business challenges and smashing your growth targets. Together, we’ll drive incremental revenue with incredible efficiency. Dive into our services and see why we outperform in performance marketing.",
    buttonText: "Request a Consultation",
    buttonUrl: "#",
    image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Services.png",
    imageAlt: "Programmatic Advertising Services"
};

const servicesLearnMoreData = {
    badge: "FAQ",
    title: "Frequently asked questions",
    description: "",
    faqs: [
        {
            question: "1. How can digital marketing help my business grow?",
            answer: [
                "A strong online presence makes it easier for potential customers to find and connect with your business. From improving search visibility with SEO to refining ad campaign targeting, digital marketing ensures that your brand reaches the right audience at the right time, leading to increased engagement and sales."
            ]
        },
        {
            question: "2. How do I choose the right digital marketing services for my business?",
            answer: [
                "The right digital marketing strategy depends on your business goals, current marketing efforts, and where your audience is most active. Start by assessing your company objectives—whether it's brand awareness, lead generation, or customer retention. Evaluate the effectiveness of your existing marketing channels and identify opportunities for improvement. Understanding where your audience engages most will help guide your investment in strategies that drive meaningful impact and sustainable growth."
            ]
        },
        {
            question: "3. How do I know if my marketing efforts are working?",
            answer: [
                "Success is measured by how well your marketing efforts align with your business objectives. Define key performance indicators (KPIs) that reflect your goals, such as revenue growth, customer acquisition, or retention rates. Regularly assess these metrics to determine whether your strategy is driving meaningful outcomes. By connecting marketing performance to business impact, you can make informed adjustments to optimize results."
            ]
        },
        {
            question: "4. How does a well-rounded marketing strategy drive better results?",
            answer: [
                "A successful marketing strategy combines multiple channels—such as SEO, social, content, and paid media—to create a seamless customer journey. By integrating these efforts, businesses can maximize reach, engagement, and conversions while ensuring consistency across touchpoints. Data-driven insights help refine each element, improving efficiency and long-term growth."
            ]
        },
        {
            question: "5. How can I ensure my marketing efforts work together effectively?",
            answer: [
                "Effective marketing requires alignment between channels, messaging, and business objectives. Regularly analyzing performance data helps identify gaps and opportunities for optimization. By ensuring a cohesive approach—where content, ads, and engagement strategies reinforce one another—you create a stronger, more effective marketing ecosystem that drives sustained success."
            ]
        }
    ]
};

const servicesWhySectionData = {
    badge: "WHY POWER?",
    title: "Partnering with Power Digital means",
    buttonText: "Get a free marketing audit",
    buttonUrl: "#",
    introText: "",
    contentItems: [
        {
            type: "bullet_points" as const,
            content: [
                "<b>Data-Driven Decision Making:</b> Nova's insights build informed campaigns that maximize ROI.",
                "<b>Tech-Agnostic Solutions:</b> We select the best platforms, inventory, and targeting to suit your unique needs.",
                "<b>Transparent Results:</b> Comprehensive reporting ensures you have the most accurate pulse on your investment.",
                "<b>Relentless Innovation:</b> Our team constantly tests and optimizes strategies to stay ahead of the curve."
            ]
        }
    ]
};

const servicesWorkWithData = {
    badge: "SPECIALIZATION",
    title: "Broad capabilities. Laser-focused expertise.",
    paragraphs: [
        "Our digital marketing services cover a wide spectrum, including advertising, SEO, and web design, yet we maintain specialized expertise. Whether your business aims to achieve unparalleled search rankings or establish an unmissable website brand presence, our team is equipped to deliver results.",
        "Gain the benefits of a professional digital marketing agency without the complexities and costs of in-house hiring."
    ],
    buttonText: "Get in touch",
    buttonUrl: "#",
    cards: [
        {
            icon: ServiceIcon1.src,
            title: "Custom Digital Marketing Strategy",
            description: "Our proprietary appraisal identifies the specific online marketing services you need. We don't just run campaigns—we build lasting connections between your brand and its audience through smart, scalable digital strategies.",
            bgColor: "bg-primary" as const,
            textColor: "#ffffff",
            iconColor: "invert(1)",
            alt: "Custom Digital Marketing Strategy Icon"
        },
        {
            icon: "https://powerdigitalmarketing.com/wp-content/uploads/2024/10/service_icon2.svg",
            title: "Dedicated Teams",
            description: "Your digital marketing team consists of niched experts, an account manager, and a veteran account director. Let our digital marketing agency help your company stand out, grow faster, and reach more clients than ever before.",
            bgColor: "bg-secondary" as const,
            textColor: "#333333",
            iconColor: "invert(0)",
            alt: "Dedicated Teams Icon"
        },
        {
            icon: Layer1.src,
            title: "Driven by ROI",
            description: "Get a holistic marketing approach that's focused on driving revenue growth. With advanced tools and a team dedicated to results, we improve customer communication and increase ROI across every digital touchpoint.",
            bgColor: "bg-white" as const,
            textColor: "#333333",
            iconColor: "invert(0)",
            alt: "Driven by ROI Icon"
        }
    ]
};

const servicesServicesData = {
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

const servicesCardSliderData = [
    {
        id: "connected-tv",
        title: "Connected TV (CTV)",
        description: "TV-quality ads delivered to streaming platforms for high-engagement viewing",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/CTV-768x768.jpg",
        imageAlt: "Connected TV (CTV)",
        bgColor: "bg-grey" as const
    },
    {
        id: "streaming-audio",
        title: "Streaming Audio / Podcasts",
        description: "Precision-targeted audio ads for listeners on the go",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Streaming-Audio-768x768.jpg",
        imageAlt: "Streaming Audio / Podcasts",
        bgColor: "bg-primary" as const
    },
    {
        id: "digital-out-of-home",
        title: "Digital Out Of Home (DOOH)",
        description: "Dominate key locations with data-driven outdoor placements",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/DOOH-768x768.jpg",
        imageAlt: "Digital Out Of Home (DOOH)",
        bgColor: "bg-secondary" as const
    },
    {
        id: "display-native",
        title: "Display & Native",
        description: "Capture attention and drive action with strategic placements across sites and apps",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Display-and-Native-768x768.jpg",
        imageAlt: "Display & Native",
        bgColor: "bg-white" as const
    },
    {
        id: "direct-mail",
        title: "Direct Mail",
        description: "Break through the noise with hyper-personalized mail that drives measurable responses",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Direct-Mail-768x768.jpg",
        imageAlt: "Direct Mail",
        bgColor: "bg-grey" as const
    },
    {
        id: "instream-outstream-video",
        title: "Instream & Outstream Video",
        description: "Command attention with engaging video ads across sites and apps, including YouTube",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Instream_Outstream-768x768.jpg",
        imageAlt: "Instream & Outstream Video",
        bgColor: "bg-primary" as const
    },
    {
        id: "linear-tv",
        title: "Linear TV",
        description: "Reach mass audiences with broadcast television's broad exposure",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/10/Omnichannel-Excellence-768x768.jpg",
        imageAlt: "Linear TV",
        bgColor: "bg-white" as const
    },
    {
        id: "cross-channel-media-planning",
        title: "Cross-Channel Media Planning & Strategy",
        description: "Create synchronized campaigns that amplify impact across every channel and device.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Cross-Channel-Media-Planning-Strategy-768x768.jpg",
        imageAlt: "Cross-Channel Media Planning & Strategy",
        bgColor: "bg-secondary" as const
    }
];

const ServicesPage = () => {
    return (
        <>
            <style>
                {`
                section.multi-cards-section.bg-light {
                    background-color: #2b2a29 !important;
                }
                    section.multi-cards-section.bg-light span.badge.rounded-pill.bg-dark {
                    background-color: #7756ff !important;
                    border-color: #7756ff !important;
                }
                    section.multi-cards-section.bg-light h2 {
                    color: white;
                }
                    section.multi-cards-section.bg-light p {
                    color: white;
                }
                    section.multi-cards-section.bg-light a.btn.btn-secondary {
                    display: none;
                }
                section.multi-cards-section.bg-light .intro-twos-columns {
                    border-bottom: 1px solid white;
                }
}
            `}
            </style>
            <Fullheader />
            <main>
                <HeroSection data={servicesHeroSectionData} />

                <section className="text-banner bg-light">
                    <p>Don’t settle for ordinary.</p>
                    <h3>
                        Partner with <span>extraordinary.</span>
                    </h3>
                </section>

                <WorkWith data={servicesWorkWithData} />
                <ServicesComponent />
                <FadeAnimation />
                <Clientlogo />
                <Difference />
                <LearnMore data={servicesLearnMoreData} />
            </main>



        </>
    );
};

export default ServicesPage;
