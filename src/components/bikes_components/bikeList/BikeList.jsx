import React, { useState } from "react";
import { MyRadio } from "../../UI/MyRadio/MyRadio";
import { BikeItem } from "../BikeItem/BikeItem";
import './BikeList.css'

export const BikeList = ({ searchAndSortedPosts, setSelectedSort, setInvertSort, currentCountry, invertSort }) => {
    const [activeSort, setActiveSort] = useState(false)
    const [values] = useState([
        { value: 'default', name: 'По умолчанию', checked: true },
        { value: 'cost', name: 'По цене' },
        { value: 'name', name: 'По названию' },
    ])

    return (
        <div className="bike_list">
            <div className="option" onClick={() => setActiveSort(!activeSort)}>
                <span>Сортировка</span>
                <span className={activeSort ? 'active' : ''}>▲</span>
            </div>
            <div className={activeSort ? "block_sort active" : "block_sort"}>
                <span>найдено моделей: {searchAndSortedPosts.length}</span>
                <div className="sort">
                    <span>Сортировка</span>
                    <MyRadio nameInput='sort'
                        values={values}
                        onChange={setSelectedSort}
                    />
                    <label>
                        {invertSort ? 'По убыванию' : 'По возрастанию'}
                        <input type="checkbox"
                            onClick={() => setInvertSort(!invertSort)}
                        />
                    </label>
                </div>
            </div>
            <div className="bike_items">
                <BikeItem
                    currentCountry={currentCountry}
                    searchAndSortedPosts={searchAndSortedPosts}
                />
            </div>
        </div>
    )
}