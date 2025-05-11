import React from "react";
import Slider from "react-slick";
import ChateauImg from "../assets/img/25 avr. 2025, 19_02_08.png";

export default function CarouselCastel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const slides = [
    { id: 1, title: "Château 1", img: ChateauImg },
    { id: 2, title: "Château 2", img: ChateauImg },
    { id: 3, title: "Château 3", img: ChateauImg },
    { id: 4, title: "Château 4", img: ChateauImg },
    { id: 5, title: "Château 5", img: ChateauImg },
    { id: 6, title: "Château 6", img: ChateauImg },
  ];

  return (
    <div className="slider-container px-4 py-6">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="px-2">
            <div className="rounded overflow-hidden shadow-lg bg-white">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
