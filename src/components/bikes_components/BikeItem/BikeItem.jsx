import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context2 } from "../../../App";
import { BikeListObject } from "../../BikeListObject/BikeListObject";

import './BikeItem.css'
let ar = []
let arCompare = []
export const BikeItem = ({ currentCountry, category }) => {
    const context = useContext(Context2)
    const BikeList = BikeListObject()
    const addElem = (e) => {
        if (context.bikesFavorites.length === 0) {
            ar = []
        }
        if (!context.bikesFavorites.includes(e)) {
            ar.push(e)
            context.setBikesFavorites(ar)
            context.setBikeNum(ar.length)
        }
    }
    const addElemCompare = (e) => {
        if (context.bikesCompare.length === 3) return

        if (context.bikesCompare.length === 0) {
            arCompare = []
        }
        if (!context.bikesCompare.includes(e)) {
            arCompare.push(e)
            context.setBikesCompare(arCompare)
            context.setBikeNumCompare(arCompare.length)
        }
    }
    const removeElem = (e) => {
        ar = context.bikesFavorites
        ar.splice(e, 1)
        context.setBikesFavorites(ar)
        context.setBikeNum(ar.length)
    }
    return (
        <>
            {currentCountry.map((data, index) =>
                <div className="bike_item" key={BikeList[data].id}>
                    {category === 'favorites'
                        ?
                        <span className="clear_element" onClick={() => removeElem(index)}>&#10006;</span> : ''}
                    <Link to={`${BikeList[data].id}`} >
                        {BikeList[data].image ?
                            <img srcSet={`../img/bikes_item_img/${BikeList[data].image}.jpg`} alt="error" />
                            : <img srcSet={`../img/bikes_item_img/no_image.jpg`} alt="error" />}
                        {BikeList[data].name || BikeList[data].wheelSize || BikeList[data].modelYear ?
                            <div className="title">{BikeList[data].name} {BikeList[data].wheelSize} ({BikeList[data].modelYear})</div>
                            : false}
                    </Link>
                    {BikeList[data].category ?
                        <div className="category">{BikeList[data].category}</div>
                        : false}

                    <div className="row">{BikeList[data].cost ?
                        <span className="cost">{BikeList[data].cost.toLocaleString()} ₽</span>
                        : false}
                        {category === 'favorites'
                            ? ''
                            :
                            <span className="symbol btn" title="Добавить в избранное" onClick={() => addElem(BikeList[data].id)}>&#9825;</span>
                        }
                        <span className="symbol btn" title="Добавить в сравнение" onClick={() => addElemCompare(BikeList[data].id)}>&#8646;</span>
                    </div>
                    <div className="content">

                        {BikeList[data].frameMaterial || BikeList[data].frameType ?
                            <span><span className="font_bold">Рама:</span>{BikeList[data].frameMaterial} {BikeList[data].frameType}</span>
                            : false}
                        {BikeList[data].numberOfSpeeds ?
                            <span><span className="font_bold">Количество скоростей:</span>{BikeList[data].numberOfSpeeds}</span>
                            : false}
                        {BikeList[data].wheelSize ?
                            <span><span className="font_bold">Диаметр колеса:</span>{BikeList[data].wheelSize}"</span>
                            : false}
                        {BikeList[data].brakes ?
                            <span><span className="font_bold">Тормоза:</span>{BikeList[data].brakes}</span>
                            : false}
                    </div>
                </div>
            )}
        </>
    )
}