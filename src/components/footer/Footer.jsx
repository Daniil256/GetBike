import React from "react";
import Navbar from "../navbar/Navbar";
import './Footer.css'

const Footer = () => {
    return (
        <div className="Footer">
            <Navbar />
            <div className="container">
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
export default Footer