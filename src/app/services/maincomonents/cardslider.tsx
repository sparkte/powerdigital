"use client";
import { useRef, useState, useEffect, useCallback } from 'react';

interface CardData {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  bgColor: 'bg-white' | 'bg-secondary' | 'bg-primary' | 'bg-dark' | 'bg-grey';
  textColor?: string;
  iconColor?: string;
  links?: Array<{
    text: string;
    url: string;
  }>;
  actionUrl?: string;
}

interface CardsliderProps {
  data?: CardData[];
}

const Cardslider = ({ data }: CardsliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollbarDragRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragPosition, setDragPosition] = useState(0);
  const animationFrameRef = useRef<number | null>(null);
  const dragHandleWidth = 40;

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      const updateMaxScroll = () => {
        const maxScrollValue = slider.scrollWidth - slider.clientWidth;
        setMaxScroll(maxScrollValue);
      };

      const resizeObserver = new ResizeObserver(() => {
        updateMaxScroll();
      });

      resizeObserver.observe(slider);
      updateMaxScroll();

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  const handleScroll = useCallback(() => {
    if (sliderRef.current && !isDragging) {
      const scrollLeft = sliderRef.current.scrollLeft;
      setScrollPosition(scrollLeft);
    }
  }, [isDragging]);

  const handleScrollbarClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const scrollbar = e.currentTarget;
    const rect = scrollbar.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left;
    const scrollbarWidth = rect.width;
    const scrollPercentage = clickPosition / scrollbarWidth;
    const newScrollPosition = scrollPercentage * maxScroll;
    const clampedPosition = Math.max(0, Math.min(maxScroll, newScrollPosition));

    if (sliderRef.current) {
      sliderRef.current.scrollLeft = clampedPosition;
      setScrollPosition(clampedPosition);
    }
  }, [maxScroll]);

  const handleDragStart = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);

    const scrollbarElement = e.currentTarget.parentElement;
    const scrollbarRect = scrollbarElement?.getBoundingClientRect();
    const scrollbarWidth = scrollbarRect?.width || 0;
    const availableScrollbarWidth = scrollbarWidth - dragHandleWidth;


    const handleRect = e.currentTarget.getBoundingClientRect();
    const initialOffset = e.clientX - (handleRect.left + handleRect.width / 2);

    const handleMouseMove = (e: MouseEvent) => {
      if (!sliderRef.current || !scrollbarElement || !scrollbarRect) return;

      const currentMouseX = e.clientX - scrollbarRect.left - initialOffset;
      const clampedMouseX = Math.max(0, Math.min(availableScrollbarWidth, currentMouseX));

      setDragPosition(clampedMouseX);

      const scrollPercentage = availableScrollbarWidth > 0 ? clampedMouseX / availableScrollbarWidth : 0;
      const newScrollLeft = scrollPercentage * maxScroll;

      sliderRef.current.scrollLeft = newScrollLeft;
      setScrollPosition(newScrollLeft);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);

      if (sliderRef.current) {
        const finalScrollLeft = sliderRef.current.scrollLeft;
        setScrollPosition(finalScrollLeft);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, [maxScroll, dragHandleWidth]);

  const scrollPercentage = maxScroll > 0 ? Math.min(1, Math.max(0, scrollPosition / maxScroll)) : 0;

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      <style jsx>{`
                .custom-scrollbar-hidden::-webkit-scrollbar {
                    display: none;
                }
                .custom-scrollbar-hidden {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .swiper-scrollbar-drag {
                    user-select: none;
                    -webkit-user-select: none;  
                    -moz-user-select: none;
                    -ms-user-select: none;
                    transition: none; 
                    will-change: transform, opacity;
                }
                .swiper-scrollbar-drag:hover {
                    cursor: grab !important;
                    opacity: 0.8;
                    transform: translateY(-50%) scale(1.1);
                }
                .swiper-scrollbar-drag:active,
                .swiper-scrollbar-drag.dragging {
                    cursor: grabbing !important;
                    opacity: 1;
                    transform: translateY(-50%) scale(1.2);
                }
                .swiper-scrollbar {
                    user-select: none;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    transition: none; 
                }
                .swiper-scrollbar:hover {
                    background-color: #d0d0d0;
                }
                .swiper-slide {
                    transition: none; 
                }
           
                .card-slider {
                    transition: none; 
                    will-change: transform, box-shadow;
                }
                
                .swiper-wrapper {
                    user-select: none;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                }
                
                .swiper-wrapper:active {
                    cursor: grabbing !important;
                }

            `}</style>
      <div className="digital-marketing-overview__carousel ">
        <span className="badge rounded-pill mt-5 bg-light" />
        <div className="slider">
          <div className="swiper-container swiper-slider-0 swiper-initialized swiper-horizontal swiper-backface-hidden">
            <div

              className="swiper-wrapper custom-scrollbar-hidden"
              ref={sliderRef}
              onScroll={handleScroll}
              onMouseDown={(e) => {

                if (sliderRef.current) {
                  const startX = e.pageX - sliderRef.current.offsetLeft;
                  const scrollLeft = sliderRef.current.scrollLeft;

                  const handleMouseMove = (e: MouseEvent) => {
                    e.preventDefault();
                    const x = e.pageX - sliderRef.current!.offsetLeft;
                    const walk = (x - startX) * 2;
                    sliderRef.current!.scrollLeft = scrollLeft - walk;
                  };

                  const handleMouseUp = () => {
                    document.removeEventListener('mousemove', handleMouseMove);
                    document.removeEventListener('mouseup', handleMouseUp);
                  };

                  document.addEventListener('mousemove', handleMouseMove);
                  document.addEventListener('mouseup', handleMouseUp);
                }
              }}
              style={{
                display: 'flex',
                overflowX: 'auto',
                scrollBehavior: 'auto',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
                gap: '0px',
                paddingRight: '24px',
                cursor: 'grab'

              }}
            >
              {data && data.map((card, index) => (
                <div
                  key={card.id}
                  className={`swiper-slide swiper-slide--manual_services_cards ${index === 0 ? 'swiper-slide-active' : index === 1 ? 'swiper-slide-next' : ''}`}
                  style={{
                    // width: "460px",
                    marginRight: 24,
                    flexShrink: 0,
                    scrollSnapAlign: 'start',
                    maxWidth: '460px'
                  }}
                >
                  <article className={`card-slider ${card.bgColor}`}>
                    <div className="card-slider__image">
                      <img
                        src={card.image}
                        alt={card.imageAlt}
                      />
                    </div>
                    <div className="card-slider__content">
                      <h3 className="title">
                        {card.title}
                      </h3>
                      <div className="paragraph">
                        <p>
                          <span style={{ fontWeight: 400 }}>
                            {card.description}
                          </span>
                        </p>
                        {card.links && card.links.map((link, linkIndex) => (
                          <p key={linkIndex}>
                            <a href={link.url}>
                              {link.text}
                            </a>
                          </p>
                        ))}
                      </div>
                    </div>
                    {card.actionUrl && (
                      <div className="card-slider__action">
                        <a href={card.actionUrl} className="btn btn--round btn-light stretched-link">
                          <div className="icon">
                            <i className="icon-arrow-up-right"></i>
                          </div>
                        </a>
                      </div>
                    )}
                  </article>
                </div>
              ))}
            </div>
            <div
              className="swiper-scrollbar swiper-scrollbar-horizontal"
              onClick={handleScrollbarClick}
              style={{
                cursor: 'pointer',
                position: 'relative',
                height: '4px',
                backgroundColor: '#e0e0e0',
                borderRadius: '2px',
                margin: '20px 0'
              }}
            >
              <div className="letters">
                <span>A</span>
                <span>Z</span>
              </div>
              <div
                ref={scrollbarDragRef}

                onMouseDown={handleDragStart}
                style={{
                  left: isDragging
                    ? `${dragPosition}px`
                    : `calc(${scrollPercentage * 100}% - ${scrollPercentage * dragHandleWidth}px)`,
                  width: dragHandleWidth,
                  height: dragHandleWidth,
                  backgroundColor: '#afaaf9',
                  borderRadius: '50%',
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'grab',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <svg
                  width="16"
                  height="8"
                  viewBox="0 0 16 8"
                  fill="none"
                  style={{ pointerEvents: 'none' }}
                >
                  <path
                    d="M2 4L14 4M14 4L10 1M14 4L10 7M2 4L6 1M2 4L6 7"
                    stroke="#000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardslider;
