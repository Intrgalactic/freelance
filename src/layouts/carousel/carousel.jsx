import { useEffect, useRef, useState } from "react";
import AppBox from "src/components/appBox";
import carouselScroll from 'src/assets/images/carousel-btn.png';

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const containerRef = useRef(null);

    const showPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 3 + items.length) % items.length);
    };

    const showNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 3) % items.length);
    };

    useEffect(() => {
        const container = containerRef.current;

        if (container) {
            const scrollOptions = { behavior: 'smooth', block: 'center', inline: 'start' };
            container.scrollTo({
                left: container.clientWidth * currentIndex,
                ...scrollOptions,
            });
        }
    }, [currentIndex]);
    return (
        <div className="carousel">
            <button className="carousel-btn" onClick={showPrev}><img src={carouselScroll} style={{transform:"rotate(180deg)"}} width="30px" height="60px"/></button>
            <div className="carousel-items"  ref={containerRef}
        style={{ display: 'flex', transition: 'transform 0.5s ease-in-out' }}>
                {items.map((app, index) => (
                    <AppBox src={app.src} link={app.link} name={app.name} key={index} index={index} />
                ))}
            </div>
            <button className="carousel-btn" onClick={showNext}><img src={carouselScroll} width="30px" height="60px"/></button>
        </div>
    );
};

export default Carousel;