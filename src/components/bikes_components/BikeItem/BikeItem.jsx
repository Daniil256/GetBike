import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context2 } from "../../../App";

import './BikeItem.css'
let arList = []
let arCompareList = []

export const BikeItem = ({ category, currentCountry }) => {
    const context = useContext(Context2)

    const addElem = (e) => {
        if (context.bikesFavorites.length === 0) {
            arList = []
        }
        if (!context.bikesFavorites.includes(e)) {
            arList.push(e)
            context.setBikesFavorites(arList)
            context.setBikeNum(arList.length)
        }
    }
    const addElemCompare = (e) => {
        if (context.bikesCompare.length === 3) return

        if (context.bikesCompare.length === 0) {
            arCompareList = []
        }
        if (!context.bikesCompare.includes(e)) {
            arCompareList.push(e)
            context.setBikesCompare(arCompareList)
            context.setBikeNumCompare(arCompareList.length)
        }
    }
    const removeElem = (e) => {
        arList = context.bikesFavorites
        arList.splice(e, 1)
        context.setBikesFavorites(arList)
        context.setBikeNum(arList.length)
    }
    return (
        <>
            {currentCountry.map((data, index) =>
                <div className="bike_item" key={data.id}>
                    {category === 'favorites'
                        ?
                        <span className="clear_element" onClick={() => removeElem(index)}>&#10006;</span>
                        : ''
                    }

                    <Link to={`${data.id}`} >
                        {data.image ?
                            <img srcSet={`../img/bikes_item_img/${data.image}.jpg`} alt="error" />
                            : <img srcSet={`../img/bikes_item_img/no_image.jpg`} alt="error" />}
                        {data.name || data.wheelSize || data.modelYear ?
                            <div className="title">{data.name} {data.wheelSize} ({data.modelYear})</div>
                            : ''}
                    </Link>
                    {data.category ?
                        <div className="category">{data.category}</div>
                        : ''}

                    <div className="row">{data.cost ?
                        <span className="cost" id="section1">{data.cost.toLocaleString()} ???</span>
                        : ''}
                        {category === 'favorites'
                            ? ''
                            :
                            <span className="symbol btn" title="???????????????? ?? ??????????????????" onClick={() => addElem(data)}>&#9825;</span>
                        }
                        <span className="symbol btn" title="???????????????? ?? ??????????????????" onClick={() => addElemCompare(data)}>&#8646;</span>
                    </div>
                    <div className="content">

                        {data.frameMaterial || data.frameType ?
                            <span><span className="font_bold">????????:</span>{data.frameMaterial} {data.frameType}</span>
                            : ''}
                        {data.numberOfSpeeds ?
                            <span><span className="font_bold">???????????????????? ??????????????????:</span>{data.numberOfSpeeds}</span>
                            : ''}
                        {data.wheelSize ?
                            <span><span className="font_bold">?????????????? ????????????:</span>{data.wheelSize}"</span>
                            : ''}
                        {data.brakes ?
                            <span><span className="font_bold">??????????????:</span>{data.brakes}</span>
                            : ''}
                    </div>
                </div>
            )}
        </>
    )
}