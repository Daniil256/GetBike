import React from "react";
import './BtnBikeCategory.css'

export const BtnBikeCategory = ({ setSearchQuery, modelYearList }) => {

    return (
        <>
            {modelYearList.length > 0
                ?
                <>
                    <label className="BtnBikeCategory"
                        onClick={(e) => setSearchQuery({ category: e.target.value })}>
                        <input type='radio'
                            name="BtnBikeCategory"
                            value='Все'
                        />
                        Все</label>
                    {modelYearList.map((item) =>
                        <label className="BtnBikeCategory" key={item}
                            onClick={(e) => setSearchQuery({ category: e.target.value })}>
                            <input type='radio'
                                name="BtnBikeCategory"
                                value={item}
                            />
                            {item}</label>
                    )}
                </>
                : ''
            }
        </>
    )
}