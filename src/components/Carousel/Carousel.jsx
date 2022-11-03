import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Carousel.module.scss';
import leftArrow from '../../assets/images/left-arrow.svg';
import rightArrow from '../../assets/images/right-arrow.svg';
import ProductCard from '../ProductCard/ProductCard';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{ 
        ...style, 
        display: "block", 
        height: '55px',
        width: '55px',
        zIndex: 1000, 
        positon: 'absolute',
        right: '-5%',
        top: '233.5px'
      }}
      onClick={onClick}
    >
      <img 
        src={rightArrow} 
        alt="rightArrow" 
      />
    </button>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <button
      className={className}
      style={{ 
        ...style, 
        display: "block", 
        height: '55px',
        width: '55px',
        zIndex: 1000, 
        positon: 'absolute',
        left: '-5%',
        top: '233.5px'
      }}
      onClick={onClick}
    >
      <img 
        src={leftArrow} 
        alt="leftArrow" 
      />
    </button>
  );
}

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: true,
  };

  return (
    <div className={styles.carousel__wrapper}>
      <div className="container">
        <div className={styles.carousel}>
          <h2 className={styles.carousel__title}>Новинки</h2>
          <Slider {...settings}>
            <ProductCard newest={true}/>
            <ProductCard newest={true}/>
            <ProductCard newest={true}/>
            <ProductCard newest={true}/>
            <ProductCard newest={true}/>
            <ProductCard newest={true}/>
            <ProductCard newest={true}/>
            <ProductCard newest={true}/>
            <ProductCard newest={true}/>
            <ProductCard newest={true}/>
            <ProductCard newest={true}/>
            <ProductCard newest={true}/>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Carousel;