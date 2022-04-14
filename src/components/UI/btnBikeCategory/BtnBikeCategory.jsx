import React from "react";
import './BtnBikeCategory.css'

export const BtnBikeCategory = ({ value, setSearchQuery }) => {
    return (
        <label className="BtnBikeCategory"
            onClick={(e) => setSearchQuery({ category: e.target.value })}
        >
            <input type='radio'
                name="BtnBikeCategory"
                value={value}
            />
            {value}</label>
    )
}