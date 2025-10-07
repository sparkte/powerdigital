"use server"

import { HiArrowUpRight } from 'react-icons/hi2';

interface ServiceItem {
    title: string;
    description: string;
}

interface ServicesData {
    badge: string;
    title: string;
    description: string;
    description2?: string;
    showButton?: boolean;
    buttonText?: string;
    buttonUrl?: string;
    items: ServiceItem[];
    layout?: 'auto' | '2-per-row' | '3-per-row' | '4-per-row';
}

interface ServicesProps {
    data: ServicesData;
}

const Services = ({ data }: ServicesProps) => {
    // Determine grid layout based on layout prop or number of items
    const getLayoutClass = () => {
        if (data.layout) {
            switch (data.layout) {
                case '2-per-row':
                    return 'grid-cols-1 md:grid-cols-2';
                case '3-per-row':
                    return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
                case '4-per-row':
                    return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
                default:
                    return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
            }
        }

        // Auto layout based on number of items
        const itemCount = data.items.length;
        if (itemCount <= 2) return 'grid-cols-1 md:grid-cols-2';
        if (itemCount <= 3) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
        if (itemCount <= 4) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
        if (itemCount <= 6) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
    };

    return (
        <>
            <style>
                {`
                .item h3 {
    font-size: 1.3333333333rem;
    font-weight: 700;
    line-height: 1.3333333333rem;
    margin-bottom: 20px;
}
            `}
            </style>

            <div className="multi-text-section__text">
                <div className="title">
                    <span className="badge rounded-pill bg-dark">
                        {data.badge}
                    </span>
                    <h2>{data.title}</h2>
                </div>
                <div className="paragraph">
                    <p>
                        <span style={{ fontWeight: 400 }}>
                            {data.description}
                        </span>
                    </p>
                    {data.description2 && (
                        <p>
                            <span style={{ fontWeight: 400 }}>
                                {data.description2}
                            </span>
                        </p>
                    )}
                    {data.showButton && data.buttonText && data.buttonUrl && (
                        <a
                            href={data.buttonUrl}
                            className="btn btn-secondary"
                        >
                            <div className="icon">
                                <span>{data.buttonText}</span>
                                {/* <HiArrowUpRight size={16} style={{ strokeWidth: 2 }} /> */}
                                <i className="icon-arrow-up-right"></i>
                            </div>
                        </a>
                    )}
                </div>
            </div>
            <div className="multi-text-section__items-text">
                <div className={`grid gap-2 ${getLayoutClass()}`}>
                    {data.items.map((item, index) => (
                        <div key={index} className="item">
                            <div className="text">

                                <h3 style={{ marginBottom: 20 }}>{item.title}</h3>
                                <p>
                                    <span
                                        style={{ fontWeight: 400 }}
                                        dangerouslySetInnerHTML={{ __html: item.description }}
                                    />
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Services;