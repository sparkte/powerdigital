"use client";

import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi2';

interface FAQ {
    question: string;
    answer: string[];
}

interface LearnMoreData {
    badge: string;
    title: string;
    description: string;
    faqs: FAQ[];
}

interface LearnMoreProps {
    data: LearnMoreData;
}

const LearnMore = ({ data }: LearnMoreProps) => {
    const [openIndex, setOpenIndex] = useState<number>(0);
    return (
        <>
            <section className="section-list-accordion bg-light">
                <div className="intro-twos-columns">
                    <div className="intro-twos-columns__col">
                        <div className="intro-twos-columns__title">
                            <span className="badge rounded-pill bg-dark">{data.badge}</span>
                            <div className="title">
                                <h2>{data.title}</h2>
                            </div>
                            <div className="description">
                                <p>
                                    <span style={{ fontWeight: 400 }}>
                                        {data.description}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="intro-twos-columns__text">
                            <div className="section-list-accordion-faq">
                                {data.faqs.map((faq, index) => (
                                    <details
                                        key={index}
                                        open={openIndex === index}
                                        itemScope
                                        itemProp="mainEntity"
                                        itemType="https://schema.org/Question"
                                    >
                                        <summary
                                            itemProp="name"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpenIndex(openIndex === index ? -1 : index);
                                            }}
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                width: '100%'
                                            }}
                                        >
                                            <span style={{ flex: 1, paddingRight: '16px' }}>
                                                {faq.question}
                                            </span>
                                            <HiChevronDown
                                                size={18}
                                                strokeWidth={2}
                                                style={{
                                                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    transition: 'transform 0.3s ease',
                                                    flexShrink: 0,
                                                    minWidth: '18px',
                                                    minHeight: '18px'
                                                }}
                                            />
                                        </summary>
                                        <div
                                            itemScope
                                            itemProp="acceptedAnswer"
                                            itemType="https://schema.org/Answer"
                                        >
                                            <div itemProp="text">
                                                {faq.answer.map((paragraph, pIndex) => {
                                                    // Check if the paragraph contains HTML tags
                                                    const hasHtmlTags = /<[^>]*>/g.test(paragraph);

                                                    if (hasHtmlTags) {
                                                        return (
                                                            <div
                                                                key={pIndex}
                                                                style={{ fontWeight: 400 }}
                                                                dangerouslySetInnerHTML={{ __html: paragraph }}
                                                            />
                                                        );
                                                    } else {
                                                        return (
                                                            <p key={pIndex}>
                                                                <span style={{ fontWeight: 400 }}>
                                                                    {paragraph}
                                                                </span>
                                                            </p>
                                                        );
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LearnMore;