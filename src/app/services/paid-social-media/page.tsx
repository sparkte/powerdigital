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
    badge: "GROWTH MARKETING",
    title: "Paid Social Media Agency",
    description: "Achieve thumb-stopping status while making the most out of your ad spend. Our social media marketing team knows algorithms in and out, finding revenue opportunities for sustained growth.",
    buttonText: "Get a Proposal",
    buttonUrl: "#",
    image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Paid_Social.png",
    imageAlt: "Amazon Marketing Services"
};

const WorkWithData = {
    badge: "Work with Power",
    title: "Strategic PPC Management Services",
    paragraphs: [
        "Today's customer doesn't distinguish between buying online, on Amazon, or at a physical store. What matters is a frictionless, convenient and accessible shopping experience, regardless of time and place.&nbsp;",
        "For many brands, orchestrating a true customer-centric experience from digital awareness through conversion is challenging. DTC and retail divisions often operate in silos, and most retail marketing partners only cover a slice of the journey",
        "<b>Our Amazon marketing agency unifies retail and DTC digital marketing under one roof, driving brand awareness and profitable sales growth across channels and tactics</b>"
    ],
    buttonText: "Get in touch",
    buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
    cards: [
        {
            icon: ServiceIcon1.src,
            title: "Authentic Brand Experience Across Touchpoints",
            description: "Product mix consulting, product page optimization &amp; Amazon SEO, Brand Store optimization &amp; more – we ensure your Amazon presence is true to your brand, and converts in a crowded marketplace.",
            bgColor: "bg-secondary" as const,
            textColor: "#333333",
            iconColor: "invert(0)",
            alt: "Service Icon 1"
        },
        {
            icon: Layer11.src,
            title: "Full-Funnel Media Strategy",
            description: "We employ Amazon's full advertising arsenal across search, DSP and Amazon Marketing Cloud to fuel growth. From media planning &amp; ongoing optimization to advanced measurement capabilities that continuously calibrate.",
            bgColor: "bg-primary" as const,
            textColor: "#ffffff",
            iconColor: "invert(1)",
            alt: "Layer 1-1"
        },
        {
            icon: Layer1.src,
            title: "Strategic DTC and Amazon Alignment",
            description: "Holistic strategies that connect the dots between channels and uncover the true impact of your marketing across DTC, Amazon, and retail revenue streams.",
            bgColor: "bg-dark" as const,
            textColor: "#ffffff",
            iconColor: "invert(1)",
            alt: "Layer 1"
        }
    ]
};

const ServicesData = {
    badge: "Our Amazon Services",
    title: "Customized growth strategies for every storefront.",
    description: "Our strategies ensure your company is acquiring new customers, capturing market share, and positioned properly for long-term growth.",
    showButton: true,
    buttonText: "Get a free marketing audit",
    buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
    layout: "3-per-row" as const,
    items: [
        {
            title: "01 Prioritize & Plan",
            description: "Identify the highest impact Amazon and retail marketing strategies to implement based on audit results &amp; brand goals. Once we've identified your final destination, we calculate turn-by-turn directions. Using your KPIs, timeline, and industry trends, we'll outline the most efficient path and navigate the competitive landscape.&nbsp;"
        },
        {
            title: "02 Align & Grow",
            description: "Synchronize your Amazon marketing strategy with your brand's holistic ecommerce and/or B&amp;M strategy, from product mix to media activation. Implement synergistic cross-channel strategies &amp; omnichannel measurement techniques to drive overall brand growth."
        },
        {
            title: "03 Measure, Iterate, Repeat",
            description: "With advanced measurement and in-depth analytics, we consider the true impact of each strategy, pivoting with marketplace &amp; competitive landscape changes, and capitalizing on new opportunities."
        }
    ]
};

const CardSliderData = [
    {
        id: "catalog-management",
        title: "Catalog Management & Organic Strategy",
        description: "Experts on your side to keep your account healthy, products live, and pull all organic visibility levers available to build & maintain a strong foundation for sustained growth",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Strategic-Roadmap-768x768.jpg",
        imageAlt: "Catalog Management & Organic Strategy",
        bgColor: "bg-white" as const
    },
    {
        id: "product-page-creative",
        title: "Product Page & Storefront Creative",
        description: "Conversion-driving, Amazon-optimized assets from the product image carousel to the Amazon Brand Store that turn browsers into buyers",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Amazon-Ads-1-768x768.jpg",
        imageAlt: "Product Page & Storefront Creative",
        bgColor: "bg-secondary" as const
    },
    {
        id: "seo-algorithm",
        title: "SEO - Tuned to the Amazon Algorithm",
        description: "Written content on the frontend and backend of your listings that maximizes product discoverability on the marketplace",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Conversion-Rates-768x768.jpg",
        imageAlt: "SEO - Tuned to the Amazon Algorithm",
        bgColor: "bg-primary" as const
    },

];

const WhySectionData = {
    badge: "Why Power?",
    title: "Our team of experts across all major ecommerce channels take a customized, iterative and adaptive approach to your success on Amazon and overall growth as a brand.",
    buttonText: "Get a free marketing audit",
    buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
    introText: "By partnering with us, you get:",
    contentItems: [
        {
            type: "list" as const,
            content: [
                "<b>Full-service management:</b> Amazon storefront, Amazon DSP, &amp; product mix consulting, catalog management, troubleshooting, and more taken off your hands.",
                "<b>A dedicated team of experts:</b> Hyper-focused SME's with deep knowledge and robust experience in their specific online retail discipline.",
                "<b>Adaptive Amazon marketplace strategies:</b> Continuous monitoring, measuring, and adapting to changes in your unique Amazon landscape"
            ]
        }
    ]
};

const LearnMoreData = {
    badge: "Learn more",
    title: "Learn more about Amazon.",
    description: "Your Amazon Questions Answered: Optimize, Strategize, and Grow",
    faqs: [
        {
            question: "What are the advantages of having 1 agency manage my DTC and Amazon marketing (vs. specialized shops)?",
            answer: [
                "Cohesive &amp; complementary strategies (1 agency goaled on overall success vs. sales channel success), brand image &amp; messaging consistency, budget fluidity, nimbleness / agility – especially during critical periods like Q4, efficiency / ease of 1 go-to POC with a team behind them."
            ]
        },
        {
            question: "Will focusing on Amazon growth cannibalize sales from my website?",
            answer: [
                "Amazon accounts for nearly half of all ecommerce transactions in the US. Customers will continue to buy on Amazon, whether they end up purchasing your product or a competitor's. If your products aren't available where your customers want to shop, you're missing out on revenue.",
                "With the right intentional, coordinated strategies in place (avoid \"siloing\" your Amazon strategy from the rest of your digital strategy), you can avoid cannibalization and drive overall brand growth. Power Digital specializes in growing Amazon sales &amp; market share while deploying strategies that complement, instead of detract from, DTC efforts. Our team is goaled on overall brand success vs. retailer success."
            ]
        },
        {
            question: "If Amazon sales are less profitable than my DTC sales, why would I invest to grow Amazon?",
            answer: [
                "Amazon offers a sizable volume of high-intent customers to acquire – there's a high ceiling for revenue. That said, the fees charged for access to these customers often impacts profitability for brands.",
                "Profitability is a key consideration at Power Digital when tailoring Amazon strategy for brands. We first evaluate strategies to improve profitability, then take a next-best-dollar approach, balancing higher traffic and conversion on Amazon with margin, often at the product level."
            ]
        },
        {
            question: "Is paid Amazon advertising necessary? Can't I just list my products to capture that revenue?",
            answer: [
                "With 2,000+ new sellers joining Amazon every day, simply listing products isn't enough. Just like brick &amp; mortar retail, nobody will buy your products if they can't find them on the shelves.",
                "Power Digital takes a holistic approach to advertising for growth of your amazon store, with strategies like search advertising to get in front of &amp; convert interested shoppers in the digital aisle, combined with a full suite of digital marketing services to build brand intent before shoppers arrive at the (online) store."
            ]
        },
        {
            question: "What drives organic ranking on Amazon?",
            answer: [
                "Organic (unpaid) ranking for keyword searches on Amazon is driven by several factors, including a product's keyword relevancy (from the product page's written content), sales velocity, availability/fulfillment, and reviews. With the most recent update to the ranking algorithm, traffic and conversions from sources outside the marketplace (for example, from clicks on a TikTok ad) now have a significant impact on organic ranking as well.&nbsp;",
                "This highlights the importance of all facets of Amazon strategy – from operational soundness, to content &amp; creative, to Amazon ads (Amazon PPC &amp; DSP), to cross-channel paid strategy driving traffic to Amazon – in building &amp; sustaining success."
            ]
        },
        {
            question: "What are the advantages of Amazon DSP compared to other programmatic display platforms?",
            answer: [
                "The primary advantage of DSP compared to <a href=\"https://powerdigitalmarketing.com/services/programmatic-advertising-agency/\">programmatic advertising services</a> is the robust first-party Amazon customer data that powers it. This data gives brands the ability to target lucrative high-intent audiences across the internet even as a cookieless future quickly approaches. Other advantages include exclusive inventory (like Twitch and Prime Video), closed-loop attribution, and evolving in-store capabilities such as Amazon DSP x Whole Foods in-store signage and measurement."
            ]
        },
        {
            question: "What is Amazon Marketing Cloud? How can I benefit from it?",
            answer: [
                "Amazon Marketing Cloud (AMC) is a secure, privacy-safe, and cloud-based data clean room solution. Brands and advertisers can use even-level data sets across channels to perform custom analytics and gain insights that can't be found with standard business and advertising reports alone.",
                "Brands can combine event-level data from Amazon Search, Amazon DSP, Amazon Seller Central and/or Vendor Central, as well as their own DTC site and other ad platforms like Meta and TikTok, in the AMC clean room. From there they can answer questions like: What's the incremental reach of my DSP advertising? What's the LTV of my Amazon customers? How many customers that see an ad on Instagram end up buying on Amazon later? What's the overlap between my DTC and Amazon customers – how many of them purchase through both channels?",
                "Power Digital's Data Intelligence team is equipped to dive into these unanswered questions and many more through custom queries &amp; reporting, powered by AMC. These insights lead to a better understanding of your customer, their shopper journey, and better, more informed marketing decisions."
            ]
        },
        {
            question: "Can I use Amazon's Customer Reviews to improve my marketing strategy?",
            answer: [
                "Yes, customer reviews play a significant role in both your product's visibility and its credibility. Positive reviews not only build trust with potential buyers but also influence organic ranking on Amazon. At Power Digital, we recommend using customer feedback to refine your product listings, enhance your marketing messaging, and even guide your product development. Engaging with reviews (both positive and negative) can also improve your brand image and customer loyalty, ultimately contributing to long-term success."
            ]
        },
        {
            question: "How do I improve my product's visibility on Amazon?",
            answer: [
                "Improving visibility on Amazon involves optimizing your product listings, leveraging Amazon Ads, and using Amazon SEO best practices. We can help identify the right keywords, optimize your images, and implement targeted advertising strategies to increase your product's reach and attract more potential buyers."
            ]
        },
        {
            question: "How can I track my Amazon marketing performance?",
            answer: [
                "Amazon provides various metrics, such as sales data, conversion rates, and advertising performance, to help track your marketing efforts. Our team analyzes this data to uncover insights and continuously optimize your strategies, ensuring your Amazon store is always improving and generating the best possible results."
            ]
        }
    ]
};


const PaidSocialMediaPage = () => {
    return (
        <>
            <style>
                {`
                .swiper-scrollbar.swiper-scrollbar-horizontal {
                    display: none;
                }
            
                @media (max-width: 1330px) {
                    .swiper-scrollbar.swiper-scrollbar-horizontal {
                        display: block;
                    }
                }
            `}
            </style>
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
                <section className="multi-text-section bg-light">
                    <Services data={ServicesData} />

                    <Cardslider data={CardSliderData} />
                </section>
                <WhySection data={WhySectionData} />
                <LearnMore data={LearnMoreData} />
            </main>



        </>
    );
};

export default PaidSocialMediaPage;
