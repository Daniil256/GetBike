import React, { useContext } from "react";
import { Context2 } from "../../App";
import { Subtitle } from "../../components/UI/Subtitle/Subtitle";
import './Compare.css'
let ar = []

export const Compare = () => {

    const context = useContext(Context2)
    context.setBikeNumCompare(context.bikesCompare.length)
    const clear = () => {
        context.setBikesCompare([])
        context.setBikeNumCompare(0)
    }

    const removeElem = (e) => {
        ar = context.bikesCompare
        ar.splice(e, 1)
        context.setBikesCompare(ar)
        context.setBikeNumCompare(ar.length)
    }

    return (
        <div className="Compare container">
            <Subtitle title='Сравнение' />
            <div className="row">
                {context.bikesCompare.length
                    ?
                    <div className="options">
                        <span>Выбрано:{context.bikesCompare.length}</span>
                        <button className="btn" onClick={clear}>Очистить список</button>
                    </div>
                    :
                    <span className="warning">Добавьте велосипеды в сравнение чтобы сравнить их по характеристикам!</span>
                }

                <div className="bike_list row container">
                    <div className="bike-Item column head">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Название</td>
                                    <td>Тип велосипеда</td>
                                    <td>Количество скоростей</td>
                                    <td>Размер колеса</td>
                                    <td>Тип тормоза</td>
                                    <td>Цена</td>
                                    <td>Модельный год</td>
                                    <td>Пол</td>
                                    <td>Тип рамы</td>
                                    <td>Возраст</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {context.bikesCompare.map((data, index) =>
                        <div className="bike-Item" key={data.id}>
                            <span className="clear_element" onClick={() => removeElem(index)}>&#10006;</span>

                            <img srcSet={`../img/bikes_item_img/${data.image}.jpg`} alt="error" />
                            <table>
                                <tbody>
                                    <tr>
                                        <td>{data.name}</td>
                                        <td>{data.category}</td>
                                        <td>{data.numberOfSpeeds}</td>
                                        <td>{data.wheelSize}</td>
                                        <td>{data.brakes}</td>
                                        <td>{data.cost.toLocaleString()} ₽</td>
                                        <td>{data.modelYear}</td>
                                        <td>{data.sex}</td>
                                        <td>{data.frameType}</td>
                                        <td>{data.age}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}