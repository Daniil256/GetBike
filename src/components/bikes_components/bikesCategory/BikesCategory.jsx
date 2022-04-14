import React from "react";
import { BtnBikeCategory } from "../../UI/btnBikeCategory/BtnBikeCategory";
import './BikesCategory.css'
export const BikesCategory = ({ bikeList, setSearchQuery }) => {

    const modelYearList = []
    for (let i = 0; i < bikeList.length; i++) {
        if (!modelYearList.includes(bikeList[i].category)) {
            modelYearList.push(bikeList[i].category)
        }
    }
    return (
        <div className="bike_category">
            <BtnBikeCategory value='Все'
                setSearchQuery={setSearchQuery}
            />
            {modelYearList.map(value =>
                <BtnBikeCategory key={value}
                    value={value}
                    setSearchQuery={setSearchQuery}
                />
            )}
        </div>
    )
}