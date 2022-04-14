import React, { useState } from "react";
import { MyCheckBox } from "../../UI/MyCheckBox/MyCheckBox";
import { MyRadio } from "../../UI/MyRadio/MyRadio";
import { MySelect } from "../../UI/MySelect/MySelect";
import './BikeSearchProperties.css'
export const BikeSearchProperties = ({ bikeList, setSearchQuery }) => {
    return (
        <div className="bike_search_properties">
            <h3>Поиск</h3>
            <input type='text'
                placeholder="Поиск"
                onChange={(e) => setSearchQuery({ name: e.target.value })}
            />
            <h3>Цена</h3>
            <MyRadio nameInput='cost'
                values={[
                    { value: '12000', name: 'до 12000', condition: 'to' },
                    { value: '25000', name: 'до 25000', condition: 'to' },
                    { value: '35000', name: 'от 35000 и выше', condition: 'from' },
                ]}
                setSearchQuery={setSearchQuery}

            />

            <h3>Возраст</h3>
            <MySelect
                bikeList={bikeList}
                path='age'
                setSearchQuery={setSearchQuery}
            />

            <h3>Пол</h3>
            <MySelect
                bikeList={bikeList}
                path='sex'
                setSearchQuery={setSearchQuery}
            />

            <h3>Размер колеса</h3>
            <MySelect
                bikeList={bikeList}
                path='wheelSize'
                setSearchQuery={setSearchQuery}
            />

            <h3>Сезон</h3>
            <MyCheckBox
                bikeList={bikeList}
                path='modelYear'
                setSearchQuery={setSearchQuery}
            />
        </div>
    )
}