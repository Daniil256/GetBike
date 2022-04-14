import React, { useState } from "react";
import Carousel from "../Carousel/Carousel";
import './ImageCarousel.css'

const ImageCarousel = () => {
    const [offset, setOffset] = useState(1)
    const click_left = () => {
        setOffset(() => {
            let newOffset = offset - 1
            if (newOffset < 1) newOffset = 4
            return newOffset
        })
    }
    const click_right = () => {
        setOffset(() => {
            let newOffset = offset + 1
            if (newOffset > 4) newOffset = 1
            return newOffset
        })
    }
    return (
        <>
            <div className="image_carousel">
                <Carousel >
                    <div className={offset === 1 ? 'block active' : 'block'}>
                        <img src="./img/image_carousel/carousel_1.jpg" alt="error" />
                        <span className="orange">Лучшее - семье!</span>
                    </div>
                    <div className={offset === 2 ? 'block active' : 'block'}>
                        <img src="./img/image_carousel/carousel_2.jpg" alt="error" />
                        <span className="pink">Лучшее - семье!</span>
                    </div>
                    <div className={offset === 3 ? 'block active' : 'block'}>
                        <img src="./img/image_carousel/carousel_3.jpg" alt="error" />
                        <span className="blue">Лучшее - семье!</span>
                    </div>
                    <div className={offset === 4 ? 'block active' : 'block'}>
                        <img src="./img/image_carousel/carousel_4.jpg" alt="error" />
                        <span >Лучшее - семье!</span>
                    </div>
                </Carousel>
                <div className="button_more">Подробнее</div>
                <div className="button_left" onClick={click_left}><img src="./img/image_carousel/button_left.png" alt="error" /></div>
                <div className="button_right" onClick={click_right}><img src="./img/image_carousel/button_right.png" alt="error" /></div>
            </div>
        </>
    )
}
export default ImageCarousel