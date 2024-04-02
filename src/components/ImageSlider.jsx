// ImageSlider.js
import React, { useState, useEffect } from "react";
import RamMandirPic from "../../public/images/RamMandirHome.jpg";

const ImageSlider = () => {
  const images = [
    // "https://e1.pxfuel.com/desktop-wallpaper/1002/384/desktop-wallpaper-ram-darbar.jpg",

    RamMandirPic,
    // 'https://im.rediff.com/news/2020/aug/05modi-ram2.jpg',
    // "https://swarajya.gumlet.io/swarajya/2020-08/bfc54327-1c31-4480-9e5b-fe589faff092/EekLzZ4UMAACUH5.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide, images.length]);

  return (
    <div className="w-full">
      <div className="relative overflow-hidden w-full md:h-[91vh]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`w-full h-full object-fit transition-transform duration-500 ease-in-out transform ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-100"
            }`}
          />
        ))}
        <div className="absolute top-0 left-0 w-full h-3/4 flex items-center text-2xl md:text-5xl text-white justify-center">
          <p className="leading-relaxed text-center font-thin">
            रामचंद्र के चरणों में मेरा सब कुछ समर्पित है,
            <br /> उनकी कृपा से ही मैं आत्मा को पाता हूँ।
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
