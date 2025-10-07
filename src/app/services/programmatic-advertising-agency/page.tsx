"use server"
// import "../../../css/endrock.styles.css"
// import "./css/endrock.styles.css"  
import ServiceIcon1 from "../amazon-marketing/images/service-icon-1.svg"
import Layer11 from "../amazon-marketing/images/Layer_1-1.svg"
import Layer1 from "../amazon-marketing/images/Layer-1.svg"
import Fullheader from '../../../components/consumer/header';
import Cardslider from '../maincomonents/cardslider';
import HeroSection from '../maincomonents/herosection';
import LearnMore from '../maincomonents/learnmore';
import WhySection from '../maincomonents/whysection';
import WorkWith from '../maincomonents/workwith';
import Services from '../maincomonents/Services';

const programmaticAdvertisingAgencyHeroSectionData = {
    badge: "GROWTH MARKETING",
    title: "Drive brand awareness and revenue with an award winning programmatic advertising agency.",
    description: "Our omni-channel programmatic services scale your business with precision-targeted strategies that optimize ad spend and drive measurable results.",
    buttonText: "Get a Proposal",
    buttonUrl: "#",
    image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Programmatic.png",
    imageAlt: "Programmatic Advertising Services"
};

const programmaticAdvertisingAgencyLearnMoreData = {
    badge: "Learn more",
    title: "Learn more about Programmatic Advertising.",
    description: "Discover how our programmatic advertising agency connects your brand with the right audience to drive incremental results.",
    faqs: [
        {
            question: "What is programmatic advertising?",
            answer: [
                "Programmatic is a media tactic that uses technology and audience data to automatically buy digital media in real time, reaching the right user with the right message to ensure efficiency and precision."
            ]
        },
        {
            question: "Why choose Power Digital over alternatives?",
            answer: [
                "Our hands-on approach, proprietary technology, and focus on measurable outcomes set us apart. As a top-tier digital marketing agency, We don't just advertise—we drive growth."
            ]
        },
        {
            question: "Can I measure results in real time and adjust as needed?",
            answer: [
                "Unlike traditional advertising, such as billboards or print advertising, you don't need to wait until the ad campaign is over to view results. Programmatic advertising enables you to view results in real time and adjust your ad campaign as needed."
            ]
        },
        {
            question: "What media channels can Power Digital activate on?",
            answer: [
                "From CTV and DOOH to display and direct mail, our expertise spans every channel, ensuring a cohesive strategy across platforms.",
                "<ul><li>CTV</li><li>Streaming Audio/Podcast</li><li>Digital OOH</li><li>Linear TV</li><li>OLV</li><li>YouTube</li><li>Display</li><li>Native</li><li>Direct Mail</li></ul>"
            ]
        },
        {
            question: "How does programmatic advertising improve targeting?",
            answer: [
                "Through advanced planning tools and partnerships with premium publishers, we create tailored strategies that match your ideal customer's behavior, location, and interests. Programmatic targeting solutions include:",
                "<ul><li>Behavioral</li><li>Demographic</li><li>Contextual</li><li>Geography</li><li>Lookalike</li><li>Competitor Conquesting</li><li>First Party Data</li><li>Cross-Channel Remarketing</li><li>Site Retargeting</li></ul>"
            ]
        },
        {
            question: "How do you ensure brand safety in programmatic advertising?",
            answer: [
                "Our programmatic team stays on top of industry trends, constantly adjusting programmatic ad campaigns to leverage the latest tools, tactics, and platforms. We monitor shifts in consumer behavior, media consumption, and technology to keep your programmatic ad campaigns fresh and impactful."
            ]
        },
        {
            question: "What type of reporting and analytics do you provide?",
            answer: [
                "We offer comprehensive, real-time reporting, giving you full visibility into campaign performance. Our detailed analytics allow you to track key metrics, from impressions to conversions, so you can make informed decisions about optimizing your campaigns."
            ]
        },
        {
            question: "What is the difference between programmatic advertising and traditional advertising?",
            answer: [
                "Programmatic advertising leverages data and automation to target specific audiences with precision in real-time, while traditional advertising relies on broad targeting methods like TV, radio, and print. Programmatic offers more efficiency, accuracy, and flexibility for measurable results."
            ]
        },
        {
            question: "What kind of targeting options are available in programmatic advertising?",
            answer: [
                "We offer a wide range of advanced targeting options, including behavioral, demographic, contextual, geographic, and lookalike targeting, among others. This ensures your ads reach the right audience based on their interests, actions, and online behaviors."
            ]
        },
        {
            question: "Can programmatic advertising be used for both B2B and B2C campaigns?",
            answer: [
                "Absolutely! Whether your focus is on B2C or <a href=\"#\" target=\"_blank\" rel=\"noopener\">B2B digital marketing services</a>, programmatic digital advertising can be tailored to meet the specific needs of your target audience. We develop strategies that align with your business goals, whether you're driving brand awareness, lead generation, or sales conversions."
            ]
        },
        {
            question: "Do you offer custom programmatic strategies for different industries?",
            answer: [
                "Yes! Our programmatic strategies are tailored to fit the unique needs of each industry, whether it's e-commerce, healthcare, technology, or any other sector. We take the time to understand your industry challenges and opportunities to create a strategy that aligns with your objectives."
            ]
        }
    ]
};

const programmaticAdvertisingAgencyWhySectionData = {
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

const programmaticAdvertisingAgencyWorkWithData = {
    badge: "WORK WITH POWER",
    title: "Transformative Growth with Programmatic Advertising",
    paragraphs: [
        "Managing multi-channel ad spend across various publishers is complex and time-consuming.",
        "Let Power Digital take the reins. As a trusted leader in programmatic advertising, we leverage data-driven strategies and advanced technology to deliver unmatched efficiency, transparent delivery, and quality results. Our team of experts ensures your campaigns outperform the competition while keeping your goals at the forefront.",
        "Our inventory first and audience-aligned approach ensures your brand reaches the right people across the most premium publishers. By continuously analyzing performance in real time, we refine strategies to maximize ROI and drive sustainable growth across all channels.",
        "At Power Digital, we combine cutting-edge technology with hands-on expertise to deliver programmatic solutions that go beyond expectations. We not only ensure precision campaign execution but also offer comprehensive creative support. If you lack assets, our in-house creative team is equipped to develop impactful, performance-driven content tailored to your brand's voice.",
        "From strategic planning to execution, we provide a seamless end-to-end experience that drives efficiency and transparency. This ensures your campaigns not only meet but exceed your growth objectives, all while maintaining a cohesive and professional creative edge."
    ],
    buttonText: "Get in touch",
    buttonUrl: "#",
    cards: [
        {
            icon: ServiceIcon1.src,
            title: "Premium Inventory First",
            description: "Bespoke deals with top-tier publishers, customized to customer insights and deterministically refined",
            bgColor: "bg-primary" as const,
            textColor: "#ffffff",
            iconColor: "invert(1)",
            alt: "Premium Inventory Icon"
        },
        {
            icon: Layer11.src,
            title: "Hands-On Execution",
            description: "Every campaign is managed and optimized by programmatic experts dedicated to maximizing ROI",
            bgColor: "bg-secondary" as const,
            textColor: "#333333",
            iconColor: "invert(0)",
            alt: "Hands-On Execution Icon"
        },
        {
            icon: Layer1.src,
            title: "Incremental Growth",
            description: "From enhanced engagement to revenue-driven results, every dollar is optimized to drive an incremental impact directly tied to business objectives",
            bgColor: "bg-white" as const,
            textColor: "#333333",
            iconColor: "invert(0)",
            alt: "Incremental Growth Icon"
        }
    ]
};

const programmaticAdvertisingAgencyServicesData = {
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

const programmaticAdvertisingAgencyCardSliderData = [
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

const ProgrammaticAdvertisingAgencyPage = () => {
    return (
        <>
            <Fullheader />
            <main>
                <HeroSection data={programmaticAdvertisingAgencyHeroSectionData} />

                {/* Text Banner */}
                <section className="text-banner bg-light">
                    <p>Don’t settle for ordinary.</p>
                    <h3>
                        Partner with <span>extraordinary.</span>
                    </h3>
                </section>

                {/* Work With */}
                <WorkWith data={programmaticAdvertisingAgencyWorkWithData} />
                <section className="multi-text-section bg-light">
                    <Services data={programmaticAdvertisingAgencyServicesData} />

                    <Cardslider data={programmaticAdvertisingAgencyCardSliderData} />
                </section>
                <WhySection data={programmaticAdvertisingAgencyWhySectionData} />
                <LearnMore data={programmaticAdvertisingAgencyLearnMoreData} />
            </main>



        </>
    );
};

export default ProgrammaticAdvertisingAgencyPage;
