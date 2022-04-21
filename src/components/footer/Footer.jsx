import React from "react";
import { NavLink } from "react-router-dom";
import './Footer.css'

export const Footer = () => {
    return (
        <div className="Footer container">
            <ul>
                <li className="logo"><NavLink className="logo" to="/">GetBike<img src="../img/navbar/logo2.png" alt="error" /></NavLink></li>
                <li><NavLink to="/">Лучшее - семье</NavLink></li>
                <li><NavLink to="bikes">Велосипеды</NavLink></li>
                <li><NavLink to="el_bikes">Электротранспорт</NavLink></li>
                <li><NavLink to="user">Пользователю</NavLink></li>
                <li><NavLink to="buy">Где купить</NavLink></li>
            </ul>
            <div>
                <div className="text">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, possimus fugiat ipsa ducimus ipsum provident cumque quas esse iure eos deserunt error aut repudiandae asperiores, dolorum optio, facere maiores amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate obcaecati voluptatem vitae, reprehenderit debitis rem aut ad voluptatibus libero nulla nesciunt beatae? Temporibus tenetur enim, eius magnam corporis expedita quas.</p>
                    <p>Lorem ipsum dolor sit.</p>
                </div>
                <div className="social">
                    <img srcSet="../img/social/facbook_reverse.png" alt="error" />
                    <img srcSet="../img/social/google_reverse.png" alt="error" />
                    <img srcSet="../img/social/vk_reverse.png" alt="error" />
                    <img srcSet="../img/social/youtube_reverse.png" alt="error" />
                    <img srcSet="../img/social/teleg_reverse.png" alt="error" />
                </div>
            </div>
        </div>

    )
}