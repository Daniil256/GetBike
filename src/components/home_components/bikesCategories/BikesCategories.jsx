import React from "react";
import { Subtitle } from "../../UI/Subtitle/Subtitle";
import './BikesCategories.css'

const BikesCategories = () => {
    return (
        <div className="bikes__page">
            <Subtitle title='Велосипеды' />
            <div className="block">
                <div className="bike__page__block big">
                    <img src="./img/bikesPage/bike__page__block_1.jpg" alt="error" />
                    <div className="block_title">
                        <h3>Горные</h3>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className="bike__page__block">
                    <img src="./img/bikesPage/bike__page__block_2.jpg" alt="error" />
                    <div className="block_title">
                        <h3>Городские</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro.</p>
                    </div>
                </div>
                <div className="bike__page__block">
                    <img src="./img/bikesPage/bike__page__block_3.jpg" alt="error" />
                    <div className="block_title">
                        <h3>Детские</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae.</p>
                    </div>
                </div>
                <div className="bike__page__block big">
                    <img src="./img/bikesPage/bike__page__block_4.jpg" alt="error" />
                    <div className="block_title">
                        <h3>Спортивные</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BikesCategories