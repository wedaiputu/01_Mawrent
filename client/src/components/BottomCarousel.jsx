import React, { useState } from "react";

const BottomCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">
              <img
                className="inline-block mr-2"
                src="https://mawrent.com/wp-content/uploads/2023/12/fire.png"
                alt=""
                width="20"
                height="20"
              />
              Tempat terpopuler di Bali
            </h2>
          </div>
          <div></div>
        </div>

        <div className="relative mt-4">
          <div className="flex overflow-hidden">
            <div
              className="transition-transform duration-300 ease-in-out transform flex flex-row"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <img
                src="https://mawrent.com/wp-content/uploads/2023/12/kintamani-car-rental-245x180.jpg"
                alt="The most popular places to visit in Bali this year."
                className="w-full px-2"
              />
              <img
                src="https://mawrent.com/wp-content/uploads/2023/12/kintamani-car-rental-245x180.jpg"
                alt="The most popular places to visit in Bali this year."
                className="w-full px-2"
              />
              <img
                src="https://mawrent.com/wp-content/uploads/2023/12/kintamani-car-rental-245x180.jpg"
                alt="The most popular places to visit in Bali this year."
                className="w-full px-2"
              />
              <img
                src="https://mawrent.com/wp-content/uploads/2023/12/kintamani-car-rental-245x180.jpg"
                alt="The most popular places to visit in Bali this year."
                className="w-full px-2"
              />
              
            </div>
          </div>
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 px-2 py-1 bg-gray-100 rounded-full"
            onClick={handlePrevSlide}
          >
            &#9664; {/*unicodem panah  */}
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 px-2 py-1 bg-gray-100 rounded-full"
            onClick={handleNextSlide}
          >
            &#9654; {/* unicodem panah  */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomCarousel;
