import React, { useState } from "react";
import { MyRadio } from "../../UI/MyRadio/MyRadio";
import { BikeItem } from "../BikeItem/BikeItem";
import './BikeList.css'

export const BikeList = ({ searchAndSortedPosts, setSelectedSort, setInvert, currentCountry }) => {
    const [active, setActive] = useState(false)
    const setCheck = (e) => {
        setActive(e.target.checked)
        return setInvert(e.target.checked)
    }

    return (
        <div className="bike_list">
            <div className="block_sort">
                <span>найдено моделей: {searchAndSortedPosts.length}</span>
                <div className="sort">
                    <span>Сортировка</span>
                    <MyRadio nameInput='sort' values={[
                        { value: 'default', name: 'По умолчанию', checked: true },
                        { value: 'cost', name: 'По цене' },
                        { value: 'name', name: 'По названию' },
                    ]}
                        onChange={setSelectedSort}
                    />
                    <label className={active ? "symbol invert active" : "symbol invert"}>▲
                        <input type="checkbox"
                            onChange={setCheck}
                        />
                    </label>
                </div>
            </div>
            <div className="bike_items">
                <BikeItem
                    currentCountry={currentCountry}
                />
            </div>
        </div>
    )
}