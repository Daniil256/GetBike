import React from "react";
import { MyCheckBox } from "../../UI/MyCheckBox/MyCheckBox";
import { MyRadio } from "../../UI/MyRadio/MyRadio";
import { MySelect } from "../../UI/MySelect/MySelect";
import './BikeSearchProperties.css'

export const BikeSearchProperties = ({ active, bikeList, setSearchQuery }) => {

    return (
        <div className={active ? "bike_search_properties active" : 'bike_search_properties'}>
            <div className="column">
                <h3>Поиск</h3>
                <input type='text'
                    placeholder="Поиск"
                    onChange={(e) => setSearchQuery({ name: e.target.value })}
                />
            </div>
            <div className="column order">
                <h3>Цена</h3>
                <MyRadio nameInput='cost'
                    values={[
                        { value: 'Все', name: 'Все', condition: 'all' },
                        { value: '12000', name: 'до 12000', condition: 'to' },
                        { value: '25000', name: 'до 25000', condition: 'to' },
                        { value: '35000', name: 'от 35000 и выше', condition: 'from' },
                    ]}
                    setSearchQuery={setSearchQuery}

                />
            </div>
            <div className="column">
                <h3>Возраст</h3>
                <MySelect
                    bikeList={bikeList}
                    path='age'
                    setSearchQuery={setSearchQuery}
                />
            </div>
            <div className="column">
                <h3>Пол</h3>
                <MySelect
                    bikeList={bikeList}
                    path='sex'
                    setSearchQuery={setSearchQuery}
                />
            </div>
            <div className="column">
                <h3>Размер колеса</h3>
                <MySelect
                    bikeList={bikeList}
                    path='wheelSize'
                    setSearchQuery={setSearchQuery}
                />
            </div>
            <div className="column order">
                <h3>Сезон</h3>
                <MyCheckBox
                    bikeList={bikeList}
                    path='modelYear'
                    setSearchQuery={setSearchQuery}
                />
            </div>
        </div>
    )
}