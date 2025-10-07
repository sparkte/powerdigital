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
    title: "Paid media agency proven to eliminate wasted spend and maximize your company's ROI",
    description: "We build PPC campaigns built for sustainable growth.",
    buttonText: "Get a Proposal",
    buttonUrl: "#",
    image:  "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Paid-Search.png",
    imageAlt: "Amazon Marketing Services"
};

const WorkWithData = {
    badge: "Work with Power",
    title: "Strategic PPC Management Services",
    paragraphs: [
        "With over a decade of PPC advertising experience across 300+ clients in various industries, our data-backed strategies are designed to build awareness and capture demand at every stage of your customer's journey."
    ],
    buttonText: "Get in touch",
    buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
    cards: [
        {
            icon: ServiceIcon1.src,
            title: "Drive More Potential Customers To Your Website",
            description: "Relevancy and quality is the name of the game. Using precise targeting, we drive high-intent traffic directly to your site, boosting your conversion rates and ensuring that every marketing dollar is used efficiently.",
            bgColor: "bg-primary" as const,
            textColor: "#ffffff",
            iconColor: "invert(1)",
            alt: "Service Icon 1"
        },
        {
            icon: Layer11.src,
            title: "Improve Traffic Costs and Efficiencies",
            description: "Work smarter not harder. Maximize your ROI by cutting unnecessary costs and dedicating your budget to proven contributors to performance.",
            bgColor: "bg-secondary" as const,
            textColor: "#333333",
            iconColor: "invert(0)",
            alt: "Layer 1-1"
        },
        {
            icon: Layer1.src,
            title: "Continuously Grow Revenue and Reduce Customer Acquisition Cost",
            description: "We combine business data with prudent tactical decision-making, focusing on what attracts new customers and improves their retention.",
            bgColor: "bg-white" as const,
            textColor: "#333333",
            iconColor: "invert(0)",
            alt: "Layer 1"
        }
    ]
};

const ServicesData = {
    badge: "Our Approach",
    title: "Messaging for every audience at every stage of the customer journey.",
    description: "Everything you need for a successful PPC marketing strategy-under one roof.",
    showButton: false,
    buttonText: "Get a free marketing audit",
    buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
    layout: "2-per-row" as const,
    items: [
        {
            title: "Analysis",
            description: "Before a contract is ever signed, we dig into your business with a detailed appraisal. You get an in-depth report on what's working, what's not and what opportunities we've found for serious, profitable growth."
        },
        {
            title: "Strategy",
            description: "Once a baseline of your current marketing efforts is developed, we draw up the best marketing mix for reaching your business goals. Then, campaigns for each channel are mapped out, maintaining a holistic view of your overall PPC marketing strategy."
        },
        {
            title: "Implementation",
            description: "Your campaigns are launched and results are continuously measured through continuous iterations as we test and tweak."
        },
        {
            title: "Results, Rinse, Repeat",
            description: "Enjoy a greater influx of revenue while we keep doing our job. As feedback informs shifts in ad placement, copy, and targeting, you'll see a gradual increase and refinement in your results."
        }
    ]
};

const CardSliderData = [
    {
        id: "paid-search",
        title: "Paid Search (Google Ads)",
        description: "Demand capture for high-performing search terms. Maximize visibility for critical keywords while driving targeted traffic to high-converting pages.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Paid-Search-768x768.jpg",
        imageAlt: "Paid Search (Google Ads)",
        bgColor: "bg-white" as const
    },
    {
        id: "google-shopping",
        title: "Standard shopping (Google Shopping)",
        description: "Get the right products showcased to the right customers. Boost product discovery by aligning ad placements with users actively searching for items like yours.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Standard-Shopping-768x768.jpg",
        imageAlt: "Standard shopping (Google Shopping)",
        bgColor: "bg-secondary" as const
    },
    {
        id: "performance-max",
        title: "Performance Max Ads",
        description: "Guide the user journey and reach customers across multiple networks.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Performance-Max-768x768.jpg",
        imageAlt: "Performance Max Ads",
        bgColor: "bg-primary" as const
    },
    {
        id: "local-service-ads",
        title: "Local Service Ads",
        description: "Near me? Get in front of customers looking for your services. Build trust with potential customers by displaying verified reviews and instant booking options.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Local-service-ads-768x768.jpg",
        imageAlt: "Local Service Ads",
        bgColor: "bg-white" as const
    },
    {
        id: "bing-ads",
        title: "Bing Ads",
        description: "Discover higher engagement with bing ads diversification. Reach an additional audience segment while benefiting from lower competition and cost-per-click.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Bing-Ads-768x768.jpg",
        imageAlt: "Bing Ads",
        bgColor: "bg-secondary" as const
    },
    {
        id: "youtube-advertising",
        title: "YouTube advertising",
        description: "Leverage YouTube's 5 million daily views with strategic ad placements. Engage viewers with dynamic video content tailored to your audience's interests and behavior.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Youtube-Advertising-768x768.jpg",
        imageAlt: "YouTube advertising",
        bgColor: "bg-primary" as const,
        links: [
            {
                text: "Learn more about YouTube advertising",
                url: "https://powerdigitalmarketing.com/services/paid-media-youtube-advertising/"
            }
        ]
    },
    {
        id: "display-ads",
        title: "Display ads",
        description: "Increase brand awareness without stretching your ad budget. Use visually compelling creatives to stay top-of-mind and capture attention on relevant websites.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Local-Services-768x768.jpg",
        imageAlt: "Display ads",
        bgColor: "bg-white" as const
    },
    {
        id: "remarketing-strategy",
        title: "Remarketing strategy",
        description: "Keep potential customers interested with a one-two punch that makes your brand hard to forget. Reignite interest with personalized messaging that addresses their specific needs and hesitations.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Remarketing-Strategy-768x768.jpg",
        imageAlt: "Remarketing strategy",
        bgColor: "bg-secondary" as const
    },
    {
        id: "programmatic-advertising",
        title: "Programmatic advertising",
        description: "Get to-the-minute, targeted control over your ad placements in real-time. Leverage advanced algorithms to continuously optimize bids and audience targeting for maximum ROI.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Programmatic-Advertising-768x768.jpg",
        imageAlt: "Programmatic advertising",
        bgColor: "bg-primary" as const
    },
    {
        id: "amazon-advertising",
        title: "Amazon advertising",
        description: "Meet the customer where they are with marketing services for Amazon. Dominate the marketplace with ads designed to boost product visibility and drive higher purchase intent.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Amazon-Ads-768x430.jpg",
        imageAlt: "Amazon advertising",
        bgColor: "bg-white" as const,
        links: [
            {
                text: "Amazon marketing services",
                url: "https://powerdigitalmarketing.com/services/amazon-marketing/"
            }
        ]
    }
];

const WhySectionData = {
    badge: "Why Power?",
    title: "By partnering with us, you get:",
    buttonText: "Get a free marketing audit",
    buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
    introText: "",
    contentItems: [
        {
            type: "bullet_points" as const,
            content: [
                "Paid media powered by our proprietary technology, nova, to build informed and scalable PPC strategies backed by data. nova provides actionable insights that enable precise targeting and smarter budgeting to maximize your ROI.",
                "A focus on new business and sales, instead of the confusion and jargon of the PPC world. We simplify the complex, empowering you with clear strategies that directly impact your bottom line.",
                "Expertise in new technologies and platforms like <a href=\"https://powerdigitalmarketing.com/services/programmatic-advertising-agency/\" target=\"_blank\" rel=\"noopener\">programmatic advertising services</a> and connected TV, while your contemporaries are merely scratching the surface.",
                "Commitment to strategic optimization with <a href=\"https://powerdigitalmarketing.com/services/cro-conversion-rate-optimization/\" target=\"_blank\" rel=\"noopener\">conversion rate optimization services</a> through our skilled digital leaders.",
                "Nimble pivots as target audience behavior shifts so your marketing always stays fresh and effective. Adapt quickly to changing market trends with strategies that keep your business ahead of the competition."
            ]
        }
    ]
};

const LearnMoreData = {
    badge: "Learn more",
    title: "Learn more about Paid Media.",
    description: "Explore the full potential of your paid media campaigns with Power Digital. Learn how our integrated PPC strategies can drive measurable growth for your business, reduce costs, and improve your overall ROI. Let us show you how we turn every click into a step closer to your business goals.",
    faqs: [
        {
            question: "What is a PPC Audit?",
            answer: [
                "The Power Digital PPC audit is a crucial step in our methodology. Our team of PPC experts will perform a comprehensive review of all your previous digital marketing campaigns and metrics to gain a deeper understanding of your current PPC strategy. Specific elements of evaluation include wasted spend, missed opportunities, keyword analysis, account structure, ad copy, and match types. We will then use these findings to develop a robust strategic plan that will help increase the effectiveness of your PPC campaigns and grow your business."
            ]
        },
        {
            question: "What platforms do you run PPC ads on?",
            answer: [
                "Our team is equipped and experienced to run PPC advertising on all the major platforms including Google, Bing, and the Google Display Network. By working with these three platforms, your paid ads will be eligible for a variety of placements. In addition, our team of PPC experts will have a wide range of targeting tools available to them. As a result, we will be able to reach your customers, no matter where they are."
            ]
        },
        {
            question: "What is paid search advertising?",
            answer: [
                "Paid search advertising is a method by which you pay for your website to appear in the advertising sections of relevant search engine results pages. Typically, this section is at the top of the results page so users' eyes land on your site first. The higher your bid is, combined with how relevant the ad is to searchers for that term, results in an increased likelihood it will appear in search results."
            ]
        },
        {
            question: "What are Google shopping campaigns?",
            answer: [
                "Google Shopping campaigns consist of shopping ads. These Google ads include rich product information such as a product image, its price, and your merchant name. It also includes data attributes from the product information you submit in your Merchant Center data feed. By utilizing these Google ads and all their information, you are able to rank higher for certain search terms within the Google Shopping Network. A campaign allows you to further those results by selecting specific products to bid on for higher results."
            ]
        },
        {
            question: "What is remarketing?",
            answer: [
                "Remarketing, and its associated campaigns, is a technique aimed at drawing visitors to your site back in and encouraging them to convert. This is done by showing ads to those individuals who have previously engaged with your site or app. Setting up such a marketing campaign provides you with additional settings and reports designed specifically to reach previous visitors and users. Typically, the ads are customizable and dynamic so you can feature the specific product or service each user was viewing when they abandoned your site."
            ]
        },
        {
            question: "How does paid media amplify brand presence?",
            answer: [
                "Paid media agencies play a crucial role in boosting brand visibility and positioning in competitive markets. Through strategic, targeted campaigns, we can help brands engage with potential customers and generate high-quality leads. By leveraging social media and other digital platforms, we promote brand narratives while increasing engagement and conversions. Efforts like influencer partnerships and <a href=\"https://powerdigitalmarketing.com/services/paid-social-media/\">paid social media services</a> further elevate brand awareness and trust. With these targeted approaches, brands see improved ROI and greater prominence in their industries.",
                "Unlock Your Most Profitable Customer Segments. <a href=\"https://powerdigitalmarketing.com/resources/who-are-your-most-profitable-customers/?utm_campaign__c=2025_Content_PC_HS&content_download_tag=PC_HS_2025\">Get the guide</a>"
            ]
        },
        {
            question: "What are the benefits of partnering with a paid media agency?",
            answer: [
                "Partnering with a paid media agency allows businesses to streamline and elevate their advertising strategies. Power Digital creates custom-tailored media campaigns designed to meet your specific business goals. By leveraging expertise in digital marketing channels and data-driven insights, we refine campaigns to deliver measurable growth. Whether it's through social media advertising or paid search, your brand will benefit from improved visibility, efficient budget allocation, and expanded reach on platforms like Google, Facebook, and Amazon to capture quality leads across diverse audiences."
            ]
        },
        {
            question: "What is programmatic advertising?",
            answer: [
                "Simply put, programmatic advertising is automated buying or selling of online advertising placements. By setting up such marketing automation, transactions become more efficient and effective because they utilize data in order to make those decisions. By streamlining the process and consolidating your digital efforts, programmatic advertising allows you to put all your efforts into one platform and let it do most of the work. But you can't just set it and forget it, which is where the Power Digital team can help monitor results and make adjustments as needed."
            ]
        },
        {
            question: "How much does PPC cost?",
            answer: [
                "At Power Digital, our strategies are customized based on the individual business and its unique needs and goals, as well as the competition in your industry. So we can't give you a specific number without first reviewing your current PPC strategy. Use one of the forms above or below to request a FREE PPC audit and we will review your current set up. From there, we can provide an estimated cost and plan for any changes that need to be made."
            ]
        },
        {
            question: "What is display advertising?",
            answer: [
                "Display advertising, or ads, sometimes referred to as banner ads, are a form of PPC that in reality come in a variety of sizes, not just banners. These ads appear on other websites relevant to your product or service. This is in contrast to search ads which appear on search engine results pages. On Google, display ads appear on sites within the Google Display Network. Such sites can include blogs, news sites, Gmail, YouTube, and more."
            ]
        },
        {
            question: "How can a paid media agency maximize returns on media investments?",
            answer: [
                "A paid media agency focuses on optimizing your advertising spend to deliver better results. With precise audience targeting and refined campaign management, Power Digital aims to reduce unnecessary costs while enhancing performance across multiple channels. By aligning paid media strategies with current market trends, we help businesses stay competitive and adaptable. Regular analysis and detailed reporting ensure campaigns remain effective, empowering businesses to achieve higher profit margins and sustained growth over time."
            ]
        }
    ]
};


const PaidMediaPage = () => {
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

export default PaidMediaPage;
