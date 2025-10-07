"use server";


interface Card {
  icon: string;
  title: string;
  description: string;
  bgColor: 'bg-secondary' | 'bg-primary' | 'bg-dark' | 'bg-light' | 'bg-white';
  textColor?: string;
  iconColor?: string;
  alt?: string;
}

interface WorkWithData {
  badge: string;
  title: string;
  paragraphs: string[];
  buttonText: string;
  buttonUrl: string;
  cards: Card[];
}

interface WorkWithProps {
  data: WorkWithData;
}

const WorkWith = ({ data }: WorkWithProps) => {
    return (
        <>
            <section className="multi-cards-section bg-light">
                <div className="intro-twos-columns">
                    <div className="intro-twos-columns__col">
                        <div className="intro-twos-columns__title">
                            <span className="badge rounded-pill bg-dark">{data.badge}</span>
                            <h2>{data.title}</h2>
                        </div>
                        <div className="intro-twos-columns__text">
                            {data.paragraphs.map((paragraph, index) => (
                                <p key={index}>
                                    <span 
                                        style={{ fontWeight: paragraph.includes('<b>') ? 'normal' : 400 }}
                                        dangerouslySetInnerHTML={{ __html: paragraph }}
                                    />
                                </p>
                            ))}
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
                        </div>
                    </div>
                </div>
                <div className="multi-cards-section__cards">
                    {data.cards.map((card, index) => (
                        <div key={index} className={`three-card ${card.bgColor}`}>
                            <div className="icon">
                                <img 
                                    src={card.icon} 
                                    alt={card.alt || ""} 
                                    style={card.iconColor ? { filter: `brightness(0) saturate(100%) ${card.iconColor}` } : {}}
                                />
                            </div>
                            <div className="text" style={card.textColor ? { color: card.textColor } : {}}>
                                <h3 style={card.textColor ? { color: card.textColor } : {}}>{card.title}</h3>
                                <div className="description">
                                    <p 
                                        dangerouslySetInnerHTML={{ __html: card.description }} 
                                        style={card.textColor ? { color: card.textColor } : {}}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default WorkWith;