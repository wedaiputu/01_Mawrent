import React from "react";

export default function SliderTop() {
  const images = [
    "https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
    "https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg",
    "https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg",
    "https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg",
  ];

  const prevSlide = (prevId) => {
    document.getElementById(prevId).scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const nextSlide = (nextId) => {
    document.getElementById(nextId).scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const generateSliderItem = (index) => (
    <div
      key={`slide${index}`}
      id={`slide${index}`}
      className="carousel-item relative w-full"
    >
      <img src={images[index]} alt={`Slide ${index + 1}`} className="w-full" />
      <div className="absolute flex justify-between items-center w-full top-1/2 left-0 right-0 transform -translate-y-1/2">
        <button
          className="btn btn-circle btn-left"
          style={{ backgroundColor: "gray" }}
          onClick={() =>
            prevSlide(`slide${index === 0 ? images.length - 1 : index - 1}`)
          }
        >
          &#10094;
        </button>
        <button
          className="btn btn-circle btn-right"
          style={{ backgroundColor: "gray" }}
          onClick={() =>
            nextSlide(`slide${index === images.length - 1 ? 0 : index + 1}`)
          }
        >
          &#10095;
        </button>
      </div>
    </div>
  );

  return (
    <div className="carousel w-full relative overflow-hidden">
      {images.map((image, index) => generateSliderItem(index))}
    </div>
  );
}
