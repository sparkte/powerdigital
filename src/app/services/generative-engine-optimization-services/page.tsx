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


const HeroSectionData = {
    badge: "The Future of SEO",
    title: "Generative Engine Optimization (GEO) ensures your brand is discoverable across AI-driven search platforms.",
    description: "If you’re not part of the conversation on ChatGPT, Perplexity, or Gemini, you’re invisible to a growing share of ready-to-buy customers. It’s not just about Google anymore—it’s about being the answer everywhere.",
    buttonText: "Talk to a GEO Expert",
    buttonUrl: "#",
    image: "https://powerdigitalmarketing.com/wp-content/uploads/2025/07/Page-Header.png",
    imageAlt: "Amazon Marketing Services"
};

const WorkWithData = {
    badge: "AI IS CHANGING THE LANDSCAPE",
    title: "People Aren't Just Searching—They're Prompting.",
    paragraphs: [
        "And AI models like ChatGPT and Copilot are answering instantly. If your content isn't cited or mentioned, you're missing out on conversions before the click even happens."
    ],
    buttonText: "Get in touch",
    buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
    cards: [
        {
            icon: ServiceIcon1.src,
            title: "Traditional SEO Was Built for Algorithms. GEO Is Built for Language Models.",
            description: "LLMs surface what they understand. If your content isn't structured for comprehension, it's getting left behind.",
            bgColor: "bg-primary" as const,
            textColor: "#ffffff",
            iconColor: "invert(1)",
            alt: "Service Icon 1"
        },
        {
            icon: Layer11.src,
            title: "What Is Generative Engine Optimization?",
            description: "Generative Engine Optimization is how brands earn visibility in AI-powered tools like ChatGPT, Gemini, Perplexity, Claude, and Microsoft Copilot. It's about creating structured, context-rich, conversational content that LLMs can find, understand, and surface in real-time answers.",
            bgColor: "bg-secondary" as const,
            textColor: "#333333",
            iconColor: "invert(0)",
            alt: "Layer 1-1"
        },
        {
            icon: Layer1.src,
            title: "Why GEO Matters Now",
            description: "AI-generated answers are transforming traditional search results. Nearly 65% of users now engage with zero-click search or conversational tools. GEO puts your brand at the center of those interactions.",
            bgColor: "bg-white" as const,
            textColor: "#333333",
            iconColor: "invert(0)",
            alt: "Layer 1"
        }
    ]
};

const ServicesData = {
    badge: "Industries",
    title: "Industries We Help Win in AI Search",
    description: "We’ve helped performance-driven brands across industries secure AI visibility.",
    showButton: false,
    buttonText: "Get a free marketing audit",
    buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
    layout: "3-per-row" as const,
    items: [

    ]
};

const CardSliderData1 = [
    {
        id: "ai-readiness-audit",
        title: "AI Readiness Audit",
        description: "A directional snapshot across visibility, sentiment, structure, and trust — designed to guide where to go deeper next. Think of it as an x-ray for your brand's LLM visibility.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2025/07/Structured-Data-Schema-Enhancement-768x512.png",
        imageAlt: "AI Readiness Audit",
        bgColor: "bg-primary" as const
    },
    {
        id: "prompt-theme-audit",
        title: "Prompt & Theme Opportunity Audit",
        description: "You can't win prompts you don't appear in. This audit surfaces content white space across the funnel — clarifying what to build, where to optimize, and how to align with user demand.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2025/07/Prompt-and-theme-audit-768x768.png",
        imageAlt: "Prompt & Theme Opportunity Audit",
        bgColor: "bg-secondary" as const
    },
    {
        id: "conversational-content-optimization",
        title: "Conversational Content Optimization",
        description: "We rewrite and structure content for how people ask—and how AI responds.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2025/07/AI-Visibility.png",
        imageAlt: "Conversational Content Optimization",
        bgColor: "bg-white" as const
    },
    {
        id: "structured-data-schema",
        title: "Structured Data & Schema Enhancement",
        description: "We implement technical markers that help LLMs identify and pull accurate, branded information.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2025/07/Structured-Data-Schema-Enhancement-768x513.jpg",
        imageAlt: "Structured Data & Schema Enhancement",
        bgColor: "bg-primary" as const
    },
    {
        id: "authority-mention-building",
        title: "Authority & Mention Building",
        description: "LLMs don't just read your site—they read the whole internet. We help get your brand mentioned, cited, and referenced across strategic digital sources.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2025/07/Authority-and-Mention-768x445.png",
        imageAlt: "Authority & Mention Building",
        bgColor: "bg-secondary" as const
    },
    {
        id: "ai-visibility-monitoring",
        title: "AI Visibility & Citation Share Monitoring",
        description: "We track how, where, and when AI tools mention your brand and cite your content—so you can see what's working and where to go next.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2025/07/Conversational-Content-Optimization-768x512.png",
        imageAlt: "AI Visibility & Citation Share Monitoring",
        bgColor: "bg-white" as const
    }
];

const CardSliderData2 = [
    {
        id: "dtc-ecommerce",
        title: "DTC & eCommerce",
        description: "Expanding brand reach and improving rankings for brand-related searches.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2025/06/e05454ea-042d-410d-a763-913f4fe9fa31-768x512.png",
        imageAlt: "DTC & eCommerce",
        bgColor: "bg-primary" as const
    },
    {
        id: "health-wellness",
        title: "Health & Wellness",
        description: "Enhancing organic traffic by targeting high-value health-related keywords.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2025/03/0_2-2-768x768.jpg",
        imageAlt: "Health & Wellness",
        bgColor: "bg-secondary" as const
    },
    {
        id: "saas-tech",
        title: "SaaS & Tech",
        description: "Ranking for competitive tech keywords and optimizing digital marketing efforts to attract qualified traffic.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2025/04/0_3-768x768.jpg",
        imageAlt: "SaaS & Tech",
        bgColor: "bg-white" as const
    },
    {
        id: "finance-legal",
        title: "Finance & Legal",
        description: "Enhancing online presence and driving qualified leads in a highly competitive market.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2025/03/2-1-768x768.png",
        imageAlt: "Finance & Legal",
        bgColor: "bg-primary" as const
    },
    {
        id: "real-estate",
        title: "Real Estate",
        description: "Supporting real estate firms with scalable digital marketing strategies that attract clients and drive business growth.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2025/03/0_1-2-768x768.jpg",
        imageAlt: "Real Estate",
        bgColor: "bg-secondary" as const
    },
    {
        id: "higher-ed-training",
        title: "Higher Ed & Training",
        description: "Boosting enrollment through targeted content and local SEO strategies.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2025/03/0_1-768x768.jpg",
        imageAlt: "Higher Ed & Training",
        bgColor: "bg-white" as const
    },
    {
        id: "b2b-services",
        title: "B2B Services",
        description: "Driving qualified leads and revenue growth through integrated digital strategy and B2B SEO expertise.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2025/03/3.-A-Complete-SEO-Pricing-Guide-768x768.jpg",
        imageAlt: "B2B Services",
        bgColor: "bg-primary" as const
    }
];

const WhySectionData = {
    badge: "Why Power?",
    title: "Be the Answer AI Gives.",
    buttonText: "Get your GEO Assessment",
    buttonUrl: "#",
    introText: "",
    contentItems: [
        {
            type: "list" as const,
            content: [
                "Don’t wait for customers to find you—show up in the conversations they’re already having. Let’s launch your GEO strategy. Book your free audit today."
            ]
        }
    ]
};

const LearnMoreData = {
    badge: "Learn more",
    title: "Learn more about GEO.",
    description: "We've grown brands in every era of search—from the early days of SEO to the rise of AI. Our team blends performance marketing precision with deep technical expertise to help you dominate in the next wave of digital discovery.",
    faqs: [
        {
            question: "I already do SEO, why do I need GEO?",
            answer: [
                "Search Engine Optimization (SEO) is crucial for search engines like Google. But Generative Engine Optimization (GEO) ensures your content is ready for AI-powered search engines like ChatGPT that people increasingly rely on. Together, they create a comprehensive search strategy. Optimizing for both is essential to maintain visibility and drive continued growth in the shifting digital landscape."
            ]
        },
        {
            question: "Is GEO just advanced SEO?",
            answer: [
                "Not quite. GEO is about optimizing content for how language models reason, summarize, and cite—not just how search engines rank."
            ]
        },
        {
            question: "How long does GEO take to work?",
            answer: [
                "You'll see foundational improvements in weeks, with compounding gains as AI visibility grows."
            ]
        },
        {
            question: "Can GEO help my traditional SEO performance?",
            answer: [
                "Yes. Many LLM optimizations (structured data, semantic relevance, clarity) also improve organic rankings and user experience."
            ]
        }
    ]
};


const GenerativeEngineOptimizationServicesPage = () => {
    return (
        <>
            <Fullheader  />
            <main>
                <HeroSection data={HeroSectionData} />

                {/* Text Banner */}
                <section className="text-banner bg-light">
                    <p>Don’t settle for ordinary.</p>
                    <h3>
                        Partner with <span>extraordinary.</span>
                    </h3>
                </section>

                {/* Work With */}
                <WorkWith data={WorkWithData} />
                {/* <section className="multi-text-section bg-light">
                    <Services data={ServicesData} />

                    <Cardslider data={CardSliderData} />
                </section> */}

                <section className="multi-text-section bg-dark">
                    <div className="multi-text-section__text">
                        <div className="title">
                            <span className="badge rounded-pill bg-light">Our Approach</span>
                            <h2>Power Digital’s Approach to GEO</h2>
                        </div>
                        <div className="paragraph">
                            <p>
                                <span style={{ fontWeight: 400 }}>We don’t just do traditional </span>
                                <a href="https://powerdigitalmarketing.com/services/seo/">
                                    <span style={{ fontWeight: 400 }}>SEO services</span>
                                </a>
                                <span style={{ fontWeight: 400 }}>
                                    —we optimize how AI understands your brand.
                                </span>
                            </p>
                            <p>
                                <span style={{ fontWeight: 400 }}>
                                    Through deep audits, conversational strategy, schema, and landscape
                                    analysis, we help you win in a world where machines explain you to
                                    your customers.
                                </span>
                            </p>
                            <p>
                                <strong>We optimize your brand to appear on:</strong>
                            </p>
                            <p>
                                <span style={{ fontWeight: 400 }}>●ChatGPT&nbsp; &nbsp; ●</span>
                                <span style={{ fontWeight: 400 }}>
                                    Google AI Overviews&nbsp; &nbsp; ●
                                </span>
                                <span style={{ fontWeight: 400 }}>Perplexity</span>
                            </p>
                            <p>
                                <span style={{ fontWeight: 400 }}>
                                    ●Claude&nbsp; &nbsp; &nbsp; &nbsp; ●
                                </span>
                                <span style={{ fontWeight: 400 }}>Gemini&nbsp; &nbsp; &nbsp; ●</span>
                                <span style={{ fontWeight: 400 }}>Copilot</span>
                            </p>
                            <p>And the next generation of LLM-powered engines.</p>
                        </div>
                    </div>

                    <Cardslider data={CardSliderData1} />
                </section>



                <section className="multi-text-section bg-light">
                    <Services data={ServicesData} />

                    <Cardslider data={CardSliderData2} />
                </section>





                <WhySection data={WhySectionData} />
                <LearnMore data={LearnMoreData} />
            </main>



        </>
    );
};

export default GenerativeEngineOptimizationServicesPage;
