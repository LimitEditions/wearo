import React, { useState } from "react";
import Slider from "react-slick";
import { SliderProps } from "../../../types/interfaces/ISliderProps";

const SliderComponent: React.FC<SliderProps> = ({ images }) => {
    const [activeSlide, setActiveSlide] = useState<number>(0);

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (_: number, next: number) => setActiveSlide(next),
        customPaging: (i: number) => (
            <span className={`cursor-pointer text-[6px] ${i === activeSlide ? "text-custom-blue" : "text-white-fon"}`}>
                ●
            </span>
        ),
        dotsClass: "absolute bottom-2 left-0 right-0 flex justify-center space-x-2",
    };

    return (
        <div className="absolute inset-0 z-0">
            <Slider {...settings} className="custom-slider">
                {images.length > 0 && activeSlide < images.length &&
                    images.map((image, index) => (
                            <img
                            key={image.guid}
                                src={`/api/Files/${image.guid}`}
                                className="w-full h-full object-contain"
                                alt={`Изображение ${index + 1}`}
                            />
                    ))}
            </Slider>
            {/* Точки пагинации */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
                {images.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => setActiveSlide(index)}
                        className={`cursor-pointer text-[6px] ${activeSlide === index ? "text-custom-blue" : "text-white-fon"}`}
                    >
                        ●
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SliderComponent;