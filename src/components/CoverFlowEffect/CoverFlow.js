import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import "./CoverFlow.css"

const Carousel = () => {
  const [startItem, setStartItem] = useState(1);

  const handleNext = () => {
    setStartItem((prevStartItem) => (prevStartItem % 7) + 1);
  };

  const handlePrev = () => {
    setStartItem((prevStartItem) => (prevStartItem + 5) % 7 + 1);
  };

  return (
    <OwlCarousel>
      <li className={`items ${startItem === 1 ? 'main-pos' : 'left-pos'}`}>
        <img src="https://i.ibb.co/hgGJc8d/Gareth-Bale.jpg" alt="Carousel Item 1" />
      </li>
      <li className={`items ${startItem === 2 ? 'main-pos' : 'right-pos'}`}>
        <img src="https://i.ibb.co/z7Kp6yr/np-file-33188.jpg" alt="Carousel Item 2" />
      </li>
      <li className={`items ${startItem === 3 ? 'main-pos' : 'back-pos'}`}>
        <img src="https://i.ibb.co/CP5sj7g/2856040-58866808-2560-1440.jpg" alt="Carousel Item 3" />
      </li>
      <li className={`items ${startItem === 4 ? 'main-pos' : 'back-pos'}`}>
        <img src="https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg" alt="Carousel Item 4" />
      </li>
     
    </OwlCarousel>
  );
};

export default Carousel;
