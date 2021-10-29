import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} variant="dark" className="w-100">
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://i.ibb.co/V2Lwzhw/28-7.jpg"
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 bg-banner"
            src="https://i.ibb.co/ZYVVRY7/03-4.jpg"
            alt="Second slide"
            />
        </Carousel.Item>
    </Carousel>
    );
};

export default Banner;