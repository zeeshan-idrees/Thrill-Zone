import React, { useState } from 'react';
import Slider from 'react-slick';
import './Carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cafe from '../../assets/img/cafe.png'
import bumper from '../../assets/img/bumper.png'
import toddler from '../../assets/img/toddler.png'
import play from '../../assets/img/play_btn.svg'
import IrrParallelogram from '../IrrParallelogram/IrrParallelogram';

const Carousel = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
        centerMode: true,
        centerPadding: '25%', // Adjusted to make left and right slides 50% visible
        slidesToShow: 1, // Only one slide is fully shown at a time
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: true,
        beforeChange: (current, next) => setActiveSlide(next),
        focusOnSelect: true,
        slide: 'div',
        prevArrow: <img src={play} alt='prev' className='rotate-180' />, // Set custom prev arrow
        nextArrow: <img src={play} alt='next' /> // Set custom next arrow
    };


    const slides = [
        { id: 1, image: cafe },
        { id: 2, image: bumper },
        { id: 3, image: toddler },
        { id: 4, image: cafe },
        { id: 5, image: toddler },
        { id: 6, image: bumper },
    ];


    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`slide borderParallelogram ${index === activeSlide ? 'active' : ''}`}
                    >
                        <IrrParallelogram>
                            <img src={slide.image} alt={`Slide ${slide.id}`} />
                        </IrrParallelogram>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;