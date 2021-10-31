import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Testimonial = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <div className="w-lg-75 w-md-100 w-sm-100 w-100 p-sm-5 p-md-5 p-lg-0 p-5 fluid fluid-sm fluid-md container-lg mb-5 m-auto">
            <Carousel className="w-100 mb-5 m-auto p-0 p-sm-0 p-md-5 px-lg-5"  variant="dark" activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div className="w-100 mb-5 m-auto px-0 px-lg-5">
                        <img src="https://fivestar.qodeinteractive.com/wp-content/uploads/2017/03/Team-img-2.jpg" class="img-thumbnail w-25 rounded-circle" alt="..."/>
                        <h2 className="my-4 color fs-3">Mya Mullins</h2>
                        <p className="mb-5 px-0 px-lg-5"> We had our company annual offsite at Minor in Pattaya. Minor was the perfect choice for us: there are multiple large event spaces for various activities and the great staff made sure the events went smoothly. The hotel food was also of a very high quality with an impressive choice at breakfast. Combined with a stunning view of the sea and a private beach,</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="w-100 mb-5 m-auto px-0 px-lg-5">
                    <img src="https://fivestar.qodeinteractive.com/wp-content/uploads/2017/03/Team-img-8.jpg" class="img-thumbnail w-25 rounded-circle" alt="..."/>
                    <h2 className="my-4 color fs-3">Doris Stewart</h2>
                    <p className="mb-5 px-0 px-lg-5">We had our company annual offsite at Minor in Pattaya. Minor was the perfect choice for us: there are multiple large event spaces for various activities and the great staff made sure the events went smoothly. The hotel food was also of a very high quality with an impressive choice at breakfast. Combined with a stunning view of the sea and a private beach,</p>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="w-100  mb-5 m-auto px-0 px-lg-5">
                    <img src="https://fivestar.qodeinteractive.com/wp-content/uploads/2017/03/Team-img-7.jpg" class="img-thumbnail w-25 rounded-circle" alt="..."/>
                    <h2 className="my-4 color fs-3">Ralph Nguyen</h2>
                    <p className="mb-5 px-0 px-lg-5">The hotel is meticulous in its planning, providing excellent décor, signage and the like. Importantly, they never seemed to tire of the constant emails from an equally r program over into the online editor above. Tr program over into meticulous event manager. Always prompt and attentive.Particularly, Ruchika Longani and Danaithep Chanhom were excellent in their roles. </p>
                </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Testimonial;