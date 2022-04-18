import React from "react";
import { BtnBikeCategory } from "../../UI/btnBikeCategory/BtnBikeCategory";
import './BikesCategory.css'

export const BikesCategory = ({ setSearchQuery, bikeList }) => {
    const modelYearList = []
    for (let i = 0; i < bikeList.length; i++) {
        if (!modelYearList.includes(bikeList[i].category) && bikeList[i].category) {
            modelYearList.push(bikeList[i].category)
        }
    }
    return (
        <div className="bike_category">
            <BtnBikeCategory
                setSearchQuery={setSearchQuery}
                modelYearList={modelYearList}
            />
        </div>
    )
}