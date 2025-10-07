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
    title: "The cool factor doesn’t just happen for brands; it’s designed. Tirelessly strategized, meticulously executed.",
    description: "With decades of experience working with the most disruptive brands to hit the market, we know what it takes to not only build brand recognition and buzz, but longevity and evangelism without compromise.",
    buttonText: "Get a Proposal",
    buttonUrl: "#",
    image:  "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Public_Relations.png",
    imageAlt: "Amazon Marketing Services"
};

const WorkWithData = {
    badge: "Work with Power",
    title: "Power Digital's PR team is obsessed with making your brand the star of the show.",
    paragraphs: [
        "Power Digital's public relations arm is your one-stop shop for strategic brand awareness and product recognition. With strategy informed by analytics and driven by results, expect a unique, cross-platform approach to building buzz for your company.",
        "From publishing giants like The New York Times and Forbes to industry renegades like Vogue and Food & Wine, our team knows how to cultivate relationships that will catapult your brand forward. Our extensive rolodex of real, personal relationships with media, affiliate partners, and influencers - plus our meaningful connections with brand teams and celebrity management firms - gives us a competitive edge for creating news and telling impactful stories for our clients that transcend multiple platforms."
    ],
    buttonText: "Get in touch",
    buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
    cards: [
        {
            icon: ServiceIcon1.src,
            title: "PR Backed By Data",
            description: "We use technology no other PR agency has to maximize impact and results for our clients via data-driven insights and advanced analytics.",
            bgColor: "bg-primary" as const,
            textColor: "#ffffff",
            iconColor: "invert(1)",
            alt: "Service Icon 1"
        },
        {
            icon: Layer11.src,
            title: "Strategic Minds",
            description: "We identify the right mix of traditional media relations; brand, celeb and <a href=\"https://powerdigitalmarketing.com/services/affiliate-marketing/\" target=\"_blank\" rel=\"noopener\">affiliate marketing services</a>; creative activations; thought leadership and other strategic tactics that will align with broader marketing goals and support your bigger picture.",
            bgColor: "bg-secondary" as const,
            textColor: "#333333",
            iconColor: "invert(0)",
            alt: "Layer 1-1"
        },
        {
            icon: Layer1.src,
            title: "Elite Storytellers",
            description: "We lean on smart storytelling and decades-long industry relationships to maximize impact and build lasting buzz. Need help fine-tuning your story and external messaging? We've got you covered!",
            bgColor: "bg-white" as const,
            textColor: "#333333",
            iconColor: "invert(0)",
            alt: "Layer 1"
        }
    ]
};

const ServicesData = {
    badge: "Our PR Services",
    title: "We take pride in closely examining all aspects of your marketing plan to provide strategic recommendations that support your bigger picture.",
    description: "At Power Digital, we believe that effective PR is more than traditional media relations - it's about reaching your customers where they already are and showing up again and again both online and IRL.",
    description2: "To drive continual buzz and evangelism for our clients and maximize the impact of building brand awareness, we take a holistic brand strategy approach that integrates PR, affiliate, influencer and marketing tactics.",
    showButton: false,
    buttonText: "Get a free marketing audit",
    buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
    layout: "3-per-row" as const,
    items: [
        {
            title: "01 Strategy",
            description: "We build data-backed PR strategies that integrate time-tested tactics with tangible results."
        },
        {
            title: "02 360° Storytelling",
            description: "We're storytellers at heart. We know what stories journalists are looking for and what consumers want to read. And we never stay surface level; we dig into your brand to identify what's going to make you stand out in a sea of competitors, whether it's a dream feature placement or a shoppable holiday gift guide."
        },
        {
            title: "03 Opening Doors",
            description: "Over two-thirds of consumers make buying decisions from partnership campaigns. Don't miss out on this untapped market - we facilitate impactful brand-to-brand and celebrity partnerships that cross categories and reach new audiences."
        },
        {
            title: "04 Showing Up IRL",
            description: "Experiential activations, consumer events, conferences and other in-person happenings ensure that we charm audiences in real life."
        },
        {
            title: "05 Idea Shop",
            description: "Need help building out creative and impactful ideas that stand out and work across the marketing funnel? As Power Digital's earned practice, we also speak paid media, performance marketing, experiential, and social, and will build you a plan that will help your brand make waves at every customer touchpoint."
        },
        {
            title: "06 Thought Leadership",
            description: "Looking to elevate your founder, C-suite and leadership team? We secure relevant and impactful thought leadership opportunities via traditional brand and feature pitching, expert commentary, speaking opportunities, business awards, podcasts, and more. And don't worry, we can media train the team too!"
        }
    ]
};

const CardSliderData = [
    {
        id: "media-relations",
        title: "Media Relations",
        description: "We know how to tell your story to maximize impact and build lasting buzz.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Event-Opportunities-768x768.jpg",
        imageAlt: "Media Relations",
        bgColor: "bg-white" as const
    },
    {
        id: "campaigns-activations",
        title: "Campaigns + Activations",
        description: "Showstopping stunts, memorable IRL activations , and other viral moments that will get people talking about your brand.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Possible-Story-Angles-768x768.jpg",
        imageAlt: "Campaigns + Activations",
        bgColor: "bg-secondary" as const
    },
    {
        id: "thought-leadership",
        title: "Thought Leadership",
        description: "Elevate your brand's reputation and executive visibility with impactful interviews, speaking opportunities, op-eds, and more.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Best-Media-Matches1-768x768.jpg",
        imageAlt: "Thought Leadership",
        bgColor: "bg-primary" as const
    },
    {
        id: "partnerships",
        title: "Partnerships",
        description: "Facilitate creative, strategic partnership campaigns that cross categories, increase brand awareness, reach new audiences, expand marketing resources, and so much more.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2025/01/0_1-2-768x768.jpg",
        imageAlt: "Partnerships",
        bgColor: "bg-white" as const
    },
    {
        id: "award-submissions",
        title: "Award Submissions",
        description: "Our team is always keeping a pulse on the best awards for our clients to submit for in order to build recognition and credibility",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Display-and-Native-768x768.jpg",
        imageAlt: "Award Submissions",
        bgColor: "bg-secondary" as const
    },
    {
        id: "affiliate-marketing",
        title: "Affiliate Marketing",
        description: "A combined effort between PR and Affiliate on a strategic top-of-funnel performance PR approach allows our clients to be considered for all consumer media opportunities.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2025/01/0_3-5-768x768.jpg",
        imageAlt: "Affiliate Marketing",
        bgColor: "bg-primary" as const
    },
    {
        id: "corporate-crisis-communications",
        title: "Corporate + Crisis Communications",
        description: "Strategic counsel and messaging support to guide your company through its biggest (and toughest) moments.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/12/0_2-1-768x768.jpg",
        imageAlt: "Corporate + Crisis Communications",
        bgColor: "bg-white" as const
    }
];

const WhySectionData = {
    badge: "Why Power?",
    title: "Curious about how Power Digital PR can elevate your brand?",
    buttonText: "Learn more about our Idea Shop.",
    buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
    introText: "",
    contentItems: [
        {
            type: "list" as const,
            content: [
                "We are at the cutting edge of an ever-evolving PR world that fuels brand awareness, builds brand voice, and puts our clients at the forefront of the media platforms their customers are consuming day in and day out.",
                "Our PR team is broken into a multitude of categories, with specialities across CPG, beauty, lifestyle, health & wellness, hospitality, brand & celebrity partnerships, affiliate marketing and B2B. Discover how we can help you break through the noise, build your brand's reputation, and drive real business growth."
            ]
        }
    ]
};

const LearnMoreData = {
    badge: "Learn more",
    title: "Learn More",
    description: "",
    faqs: [
        {
            question: "The state of PR",
            answer: [
                "PR is not what it used to be. The media landscape has dramatically shifted, the line between paid and earned is blurred, and competition is at an all time high.",
                "To that extent, Power Digital is unlike any other agency, armed with the understanding of how PR impacts the full marketing funnel. We not only know how to cultivate meaningful relationships, build brand credibility and secure quality press, we are experts in how to make PR work harder for you. Our team leverages industry expertise and best practices to ensure optimal brand awareness from the start, with strategy informed by statistics, analytics, and driven by results."
            ]
        },
        {
            question: "What type of press can you expect",
            answer: [
                "It depends on your brand and goals! It is our mission to help you build buzz and boost credibility with coverage in the top tier publications that are most important to you and your customer. From product placements to founder features, our PR team secures coverage across a variety of mediums ranging including digital publications, business and trade outlets, print magazines, broadcast, and podcasts."
            ]
        },
        {
            question: "Our approach to media relations",
            answer: [
                "Our PR team has worked to establish authentic relationships with media contacts – so much so, that they come to us directly with valuable content and editorial insights. Our rolodex of media relationships across verticals and industries run the gamut from freelancers to social media editors, commerce editors, Editors-in-Chief, segment producers and everything in between. We know who will want to tell your story, and have the relationships to get it done."
            ]
        },
        {
            question: "How does Power Digital measure PR ROI?",
            answer: [
                "Great question! Since PR is mainly an earned strategy, it can be hard to put a finger on monetary value. As such, we like to establish a mix of quantitative and qualitative goals and KPIs. Data points like number of placements, impressions, number of VIPs seeded, awards won, and partnerships facilitated are things we always measure. But in PR, qualitative goals are also vital, like including certain retail partners in coverage, getting a newspaper placement on page one *above the fold* or getting your product in the hands of your favorite celebrity also has value for some brands and not for others. We'll work closely with you to make sure your goals are our goals."
            ]
        },
        {
            question: "What Is Performance PR?",
            answer: [
                "The line between organic editorial and affiliate coverage is blurring by the day and we are increasingly seeing media opportunities requiring affiliate links for inclusion. Cue: Performance PR, our combined effort between PR and Affiliate on strategic top-of-funnel media relations that grows your brand awareness and maximizes consumer media opportunities."
            ]
        },
        {
            question: "How much does PR cost?",
            answer: [
                "At Power Digital, our strategies are customized based on each individual business and its unique needs and goals, so we can't give you a specific number without knowing you better. Reach out for a chat, we'd love to learn more about your brand!"
            ]
        },
        {
            question: "Why does my brand need PR?",
            answer: [
                "A strong communications strategy plays a critical role in shaping and maintaining your brand's reputation by crafting narratives that highlight key messaging and connect with your core demo. Through a thoughtful media and awareness strategy, consistent messaging, and cohesive creative tactics like partnerships, events, and seeding efforts, PR helps to position your brand as trustworthy and credible in the public eye."
            ]
        },
        {
            question: "What is influencer and tastemaker outreach, and how can it benefit my brand?",
            answer: [
                "Influencer and/or tastemaker outreach involves collaborating with influential people whose audiences align with your target demographic – these can be traditional social media influencers or those credible in their industry (examples could be: chefs, executives and founders of likeminded companies, regionally notable thought leaders, etc.). These partnerships can boost brand awareness, foster authentic connections and drive engagement both online and offline through social posts, community events, word-of-mouth, etc."
            ]
        },
        {
            question: "What types of brands benefit most from PR?",
            answer: [
                "PR can benefit brands across industries, from startups looking to gain exposure to established companies aiming to reinforce their market position. Whether your goal is increasing awareness, launching new products, or shifting your brand narrative, a strong PR team can help you reach those goals."
            ]
        },
        {
            question: "How can PR help during a product launch?",
            answer: [
                "Public Relations is a highly effective tactic to drive awareness for notable product launches. By crafting compelling narratives, securing stories in impactful media outlets, leveraging <a href=\"https://powerdigitalmarketing.com/services/influencer-marketing/\">influencer marketing services</a>, and activating partnerships, events and other creative levers, these efforts generate a groundswell of buzz and position your product as a must-have in its market."
            ]
        },
        {
            question: "What is the difference between earned, owned, and paid media?",
            answer: [
                "Earned media refers to coverage gained through organic efforts (i.e. unpaid). Owned media includes content you create, such as blog posts and social media. Paid media involves advertising efforts. Well-rounded marketing strategies often integrate all three for maximum impact."
            ]
        },
        {
            question: "How does PR differ from traditional advertising?",
            answer: [
                "PR focuses on creating organic and earned media opportunities, such as press coverage and influencer buzz, to build credibility and trust. Unlike traditional advertising, which involves paid placements, PR relies on building compelling narratives and fostering meaningful relationships with key opinion leaders to generate authentic engagement and long-lasting brand awareness."
            ]
        },
        {
            question: "What is crisis communication?",
            answer: [
                "Crisis communication is the process of managing and mitigating the impact of unexpected challenges or negative publicity on your brand. This involves crafting thoughtful and strategic internal and external messaging, maintaining transparent communication, and addressing concerns to protect your brand's reputation and rebuild trust with stakeholders."
            ]
        }
    ]
};


const PublicRelationsPage = () => {
    return (
        <>
            <Fullheader/>
            <main>
                <HeroSection data={HeroSectionData} />

                {/* Text Banner */}
                <section className="text-banner bg-light">
                    <p>Power Digital PR hits different.</p>
                    <h3>
                       Where <span>art + science meet.</span>
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

export default PublicRelationsPage;
