import React, { useState, useEffect } from "react";
import { sliderItems } from "../data/sliderItems";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState(""); // 'next' | 'prev' | ''
  const [showDetail, setShowDetail] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Reset animation when component unmounts or when dependencies change
  useEffect(() => {
    return () => {
      if (animation) {
        setAnimation("");
      }
    };
  }, [animation]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "Escape" && showDetail) {
        handleBack();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, animation, showDetail]);

  const handleNext = () => {
    if (isTransitioning) return; // Prevent spam clicks
    setIsTransitioning(true);
    setAnimation("next");

    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderItems.length);
      setAnimation("");
      setIsTransitioning(false);
    }, 800); // Match CSS animation duration
  };

  const handlePrev = () => {
    if (isTransitioning) return; // Prevent spam clicks
    setIsTransitioning(true);
    setAnimation("prev");

    setTimeout(() => {
      setCurrentIndex(
        (prev) => (prev - 1 + sliderItems.length) % sliderItems.length
      );
      setAnimation("");
      setIsTransitioning(false);
    }, 800); // Match CSS animation duration
  };

  const handleShowDetail = (e) => {
    e.stopPropagation();
    setShowDetail(true);
  };

  const handleBack = () => setShowDetail(false);

  // Touch event handlers for swipe functionality
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      handleNext();
    }

    if (touchEnd - touchStart > 50) {
      // Swipe right
      handlePrev();
    }
  };

  const getClass = () => {
    return `carousel ${animation} ${showDetail ? "showDetail" : ""}`;
  };

  const visibleItems = [
    sliderItems[(currentIndex - 1 + sliderItems.length) % sliderItems.length], // Previous item
    sliderItems[currentIndex], // Current (central) item
    sliderItems[(currentIndex + 1) % sliderItems.length], // Next item
  ];

  return (
    <div
      className={getClass()}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-live="polite">
      <div className="list" role="region" aria-label="Carousel of products">
        {visibleItems.map((item, index) => {
          const itemPosition =
            index === 0 ? "previous" : index === 1 ? "current" : "next";

          return (
            <div
              className={`item item-${itemPosition}`}
              key={item.id}
              aria-hidden={itemPosition !== "current"}
              tabIndex={itemPosition === "current" ? 0 : -1}>
              <img src={item.img} alt={item.topic} />
              <div className="introduce">
                <div className="title">{item.title}</div>
                <div className="topic">{item.topic}</div>
                <div className="des">{item.description}</div>
                <button
                  className="seeMore"
                  onClick={handleShowDetail}
                  aria-expanded={showDetail}>
                  Plus d'infos ↗
                </button>
              </div>

              {item.detail && (
                <div className="detail" aria-hidden={!showDetail}>
                  <div className="title">{item.detail.title}</div>
                  <div className="des">{item.detail.description}</div>
                  <div className="specifications">
                    {item.detail.specs.map((spec, i) => (
                      <div key={i}>
                        <p className="spec-label">{spec.label}</p>
                        <p className="spec-value">{spec.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="options mt-4">
                    <h4>Options disponibles :</h4>
                    <div className="option-tags">
                      {item.detail.options.map((opt, i) => (
                        <button key={i} className="option-tag">
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="checkout">
                    <button className="add-to-cart">En savoir plus</button>
                    <button className="checkout-btn">Faire un devis</button>
                  </div>
                </div>
              )}
            </div>
          );
        })}{" "}
      </div>

      <div
        className="arrows my-32"
        role="group"
        aria-label="Carousel navigation">
        <button
          id="prev"
          onClick={handlePrev}
          disabled={isTransitioning}
          aria-label="Previous item">
          &lt;
        </button>
        <button
          id="next"
          onClick={handleNext}
          disabled={isTransitioning}
          aria-label="Next item">
          &gt;
        </button>
        <button
          id="back"
          onClick={handleBack}
          aria-label="Return to carousel view"
          className={showDetail ? "visible" : "hidden"}>
          Retour &#8599;
        </button>
      </div>

      <div className="indicators">
        {sliderItems.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => {
              if (!isTransitioning) {
                setCurrentIndex(index);
              }
            }}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex}
          />
        ))}
      </div>
    </div>
  );
}
