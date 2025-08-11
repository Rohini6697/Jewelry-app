import React, { useRef } from "react";
import { Instagram } from "../../data/Instagram";
import '../../styles/homecomponent/PrevNext.css';

const Carousel = () => {
  const containerRef = useRef(null);

  // Scroll by 260px (one item + margin) on button click
  const scrollByAmount = (distance) => {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({
        left: distance,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="carousel-wrapper">
      <button className="carousel-btn prev" onClick={() => scrollByAmount(-260)}>
        &#8249;
      </button>

      <div className="carousel-container" ref={containerRef}>
        {Instagram.map((src, i) => (
          <div className="carousel-item" key={i}>
            <img src={src} alt={`carousel-${i}`} />
          </div>
        ))}
      </div>

      <button className="carousel-btn next" onClick={() => scrollByAmount(260)}>
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
