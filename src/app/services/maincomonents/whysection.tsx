"use client";

import { useEffect, useState } from 'react';

interface ContentItem {
  type: 'paragraph' | 'list' | 'bullet_points';
  content: string | string[];
  bold?: boolean;
}

interface WhySectionData {
  badge: string;
  title: string;
  buttonText: string;
  buttonUrl: string;
  introText?: string;
  contentItems: ContentItem[];
}

interface WhySectionProps {
  data: WhySectionData;
}

const WhySection = ({ data }: WhySectionProps) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const renderContentItem = (item: ContentItem, index: number) => {
        switch (item.type) {
            case 'paragraph':
                return (
                    <p key={index}>
                        {item.bold ? (
                            <b>{item.content}</b>
                        ) : (
                            <span style={{ fontWeight: 400 }}>
                                {typeof item.content === 'string' && isMounted ? (
                                    <span dangerouslySetInnerHTML={{ __html: item.content }} />
                                ) : (
                                    <span>{item.content}</span>
                                )}
                            </span>
                        )}
                    </p>
                );
            case 'list':
                return (
                    <div key={index}>
                        {Array.isArray(item.content) && item.content.map((listItem, listIndex) => (
                            <p key={listIndex}>
                                <span style={{ fontWeight: 400 }}>
                                    {isMounted ? (
                                        <span dangerouslySetInnerHTML={{ __html: listItem }} />
                                    ) : (
                                        <span>{listItem}</span>
                                    )}
                                </span>
                            </p>
                        ))}
                    </div>
                );
            case 'bullet_points':
                return (
                    <ul key={index}>
                        {Array.isArray(item.content) && item.content.map((bulletItem, bulletIndex) => (
                            <li key={bulletIndex}>
                                <span style={{ fontWeight: 400 }}>
                                    {isMounted ? (
                                        <span dangerouslySetInnerHTML={{ __html: bulletItem }} />
                                    ) : (
                                        <span>{bulletItem}</span>
                                    )}
                                </span>
                            </li>
                        ))}
                    </ul>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <section className="section-two-columns bg-dark">
                <div className="intro-twos-columns">
                    <div className="intro-twos-columns__col">
                        <div className="intro-twos-columns__title">
                            <span className="badge rounded-pill bg-light">{data.badge}</span>
                            <h2>{data.title}</h2>
                            <a
                                href={data.buttonUrl}
                                className="btn btn-secondary mt-4 d-none d-md-inline-block"
                            >
                                <div className="icon">
                                    <span>{data.buttonText}</span>
                                    {/* <HiArrowUpRight size={16} style={{ strokeWidth: 2 }} /> */}
                                    {/* <HiArrowUpRight size={16} style={{ strokeWidth: 2 }} /> */}
                                    <i className="icon-arrow-up-right"></i>
                                </div>
                            </a>
                        </div>
                        <div className="intro-twos-columns__text">
                            {data.introText && (
                                <p>
                                    <b>{data.introText}</b>
                                </p>
                            )}
                            {data.contentItems.map((item, index) => renderContentItem(item, index))}
                            <a
                                href={data.buttonUrl}
                                className="btn btn-secondary mt-4 d-md-none"
                            >
                                <div className="icon">
                                    <span>{data.buttonText}</span>
                                    {/* <HiArrowUpRight size={16} style={{ strokeWidth: 2 }} /> */}
                                    <i className="icon-arrow-up-right"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhySection;