import React, { useState } from "react";
import { Carousel } from "../Carousel/Carousel";
import './TextCarousel.css'
export const TextCarousel = () => {
    const [carouselNum, setCarouselNum] = useState(1)

    const click_left = () => {
        setCarouselNum(() => {
            let newOffset = carouselNum - 1
            if (newOffset < 1) newOffset = 4
            return newOffset
        })
    }
    const click_right = () => {
        setCarouselNum(() => {
            let newOffset = carouselNum + 1
            if (newOffset > 4) newOffset = 1
            return newOffset
        })
    }
    return (
        <div className="TextCarousel">
            <img src="./img/text_carousel/background.jpg" alt="error" />
            <div className="text">
                <Carousel>
                    <div className={carouselNum === 1 ? 'block active' : 'block'}>
                        <h2>Internal Gear Hub</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta error nemo reiciendis! Atque possimus autem repudiandae, pariatur dolore laboriosam illo veniam placeat tempora, nesciunt itaque ratione, eos aut vel!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minus culpa sunt aperiam minima. Autem, sequi voluptates excepturi sed facilis rem, atque odit tempore obcaecati iste reiciendis. Placeat, quis corporis?
                        </p>
                    </div>
                    <div className={carouselNum === 2 ? 'block active' : 'block'}>
                        <h2>Steel</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor facere, mollitia, earum laboriosam cum, suscipit animi debitis fugit minima architecto reiciendis minus quod eaque temporibus nobis iste id quaerat molestiae. Quia ipsam ullam animi sint neque reiciendis vel expedita quos illum nulla, autem similique consectetur excepturi velit architecto. Vitae.</p>
                    </div>
                    <div className={carouselNum === 3 ? 'block active' : 'block'}>
                        <h2>Lady from geometry</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, accusantium dolorem animi voluptatem dignissimos fuga maxime quibusdam dolorum eos rerum eum nostrum. Fugit reiciendis aperiam dignissimos nisi temporibus sequi atque voluptatibus dolores excepturi sunt consectetur, quia laboriosam provident minus quam molestiae odit recusandae aut! Officia quod necessitatibus earum obcaecati molestias.</p>
                    </div>
                    <div className={carouselNum === 4 ? 'block active' : 'block'}>
                        <h2>CNC Sidewalls</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officiis pariatur excepturi libero dicta quas officia rem voluptatum ab iusto est perspiciatis distinctio dolor repudiandae, totam obcaecati fugiat eum qui similique tenetur impedit magnam maiores? Praesentium, incidunt deleniti earum minima quas magnam. Quo, nulla? Amet consectetur officiis unde?</p>
                    </div>
                </Carousel>
            </div>
            <div className="btn_left" onClick={click_left}><img src="./img/text_carousel/arrow_left.png" alt="error" /></div>
            <div className="btn_right" onClick={click_right}><img src="./img/text_carousel/arrow_right.png" alt="error" /></div>
        </div>
    )
}