import { useState, useEffect } from "react";
import styles from "./slick.module.scss";
import "../landingPage/fonts.css";
import image1 from "../../assets/img/landingCarPicOne.png";
import image2 from "../../assets/img/landingCarPicTwo.png";
import landCarIcon from "../../assets/img/landCarIcon.svg";
import landCarStar from "../../assets/img/landCarStar.svg";
import arrowRightIcon from "../../assets/img/arrowRightIcon.svg";
import arrowLeftBlack from "../../assets/img/arrowLeftBlack.svg";
import landCarQuote from "../../assets/img/landCarQuote.svg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const carouselData = [
    {
      image: image1,
      nameSurname: "Ulviyya Imamova",
      work: "Rectuiter at Pasha Bank",
      text: "Sapien donec congue lectus pharetra et et maecenas. Eros fames nunc faucibus ut rutrum vel vitae elementum lobortis. Orci mi facilisis nullam vestibulum sit. Mi bibendum interdum hendrerit elementum. Nam mattis mauris mi libero aliquet. Elit tristique quis hac ullamcorper enim.",
    },
    {
      image: image2,
      nameSurname: "Tapdiq Aliev",
      work: "CEO at Pasha Bank",
      text: "Sapien donec congue lectus pharetra et et maecenas. Eros fames nunc faucibus ut rutrum vel vitae elementum lobortis. Orci mi facilisis nullam vestibulum sit. Mi bibendum interdum hendrerit elementum. Nam mattis mauris mi libero aliquet. Elit tristique quis hac ullamcorper enim.",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isRunning) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
      }
    }, 3000);

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

  const getFirstFiveWords = (text) => {
    const words = text.split(" ");
    return words.slice(0, 5).join(" ");
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselInner} key={currentIndex}>
        <div className={styles.carouselItem}>
          <img
            className={styles.carouselImg}
            src={carouselData[currentIndex].image}
            alt={`${currentIndex + 1}`}
          />
          <div className={styles.carouselTexts}>
            <h3 className={styles.nameSurname}>
              {carouselData[currentIndex].nameSurname}
            </h3>
            <div className={styles.work}>
              <img className={styles.landCarIcon} src={landCarIcon} alt="" />
              <p className={styles.workText}>
                {carouselData[currentIndex].work}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.carouselText}>
          <p className={styles.text}>
            <span className={styles.firstFiveWords}>
              {getFirstFiveWords(carouselData[currentIndex].text)}
            </span>
            {carouselData[currentIndex].text.substring(
              getFirstFiveWords(carouselData[currentIndex].text).length
            )}
          </p>
          <div className={styles.star}>
            <img
              className={styles.landCarStar}
              src={landCarStar}
              alt="Star icon"
            />
            <img
              className={styles.landCarStar}
              src={landCarStar}
              alt="Star icon"
            />
            <img
              className={styles.landCarStar}
              src={landCarStar}
              alt="Star icon"
            />
            <img
              className={styles.landCarStar}
              src={landCarStar}
              alt="Star icon"
            />
            <img
              className={styles.landCarStar}
              src={landCarStar}
              alt="Star icon"
            />
            <p className={styles.starText}>(4.5)</p>
          </div>
        </div>
        <img className={styles.quoteImg} src={landCarQuote} alt="" />
      </div>
      <div className={styles.buttons}>
        <button onClick={goToPrevSlide}>
          <img src={arrowLeftBlack} alt="Left icon" />
        </button>
        <button onClick={goToNextSlide}>
          <img src={arrowRightIcon} alt="Right icon" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
