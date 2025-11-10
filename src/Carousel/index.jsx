import React, { useState } from 'react';
import classNames from 'classnames';

export const Carousel = (props) => {
    const inheritClass = props?.inheritClass
    const data = props?.data;
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselLength = data.length;

    const carouselScrollRight = () => {
        if (currentIndex === carouselLength-1) {
            return setCurrentIndex(0);
        }
        return setCurrentIndex(currentIndex+1);
    }

    const carouselScrollLeft = () => {
        if (currentIndex === 0) {
            return setCurrentIndex(carouselLength -1);
        }
        return setCurrentIndex(currentIndex-1);
    }
    console.log(inheritClass)
    return(
        <div className={inheritClass}>
            <div className="carousel-container">
                {
                    data.map((car, index) => {
                        return (
                            <div
                                className={classNames("carousel-slide", "center-carousel", {"inactive-slide": index !== currentIndex})}
                                key={index}
                            >
                                <img alt={car.alt} src={car.img} />
                            </div>
                        );
                    })
                }
            </div>
            <div className="button-container flex-content-carousel justify-center">
                <button onClick={() => carouselScrollLeft()}>last</button>
                <button onClick={() => carouselScrollRight()}>next</button>
            </div>
        </div>
    )
}
