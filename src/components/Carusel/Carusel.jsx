import React, { useState, useEffect } from "react";
import image1 from "../../assets/img/smile.gif";
import image2 from "../../assets/img/callLogsSummary.png";
import image3 from "../../assets/img/featuredImgOne.png";
import "./slick.css"; // Предполагаем, что у вас есть стили для карусели

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const carouselData = [
    { text: "Надпись 1", image: image1 },
    { text: "Надпись 2", image: image2 },
    { text: "Надпись 3", image: image3 },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isRunning) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, [carouselData.length, isRunning]);

  const goToPrevSlide = () => {
    setIsRunning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setIsRunning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-inner" key={currentIndex}>
        <div className="carousel-item">
          <img
            style={{ width: "104px" }}
            className="carousel-image"
            src={carouselData[currentIndex].image}
            alt={`Изображение ${currentIndex + 1}`}
          />
        </div>
        <div className="carousel-text">
          <p>{carouselData[currentIndex].text}</p>
        </div>
      </div>
      <button onClick={goToPrevSlide}>Предыдущий</button>
      <button onClick={goToNextSlide}>Следующий</button>
    </div>
  );
};

export default Carousel;
