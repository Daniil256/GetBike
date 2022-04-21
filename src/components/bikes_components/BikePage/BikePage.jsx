import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BikeListObject } from "../../BikeListObject/BikeListObject";
import { MyModal } from "../../UI/MyModal/MyModal";
import { Subtitle } from "../../UI/Subtitle/Subtitle";
import './BikePage.css'

export const BikePage = () => {
    const [modal, setModal] = useState(false)
    const { id } = useParams()

    const BikeList = BikeListObject

    const bikeCategory = () => {
        if (BikeList[id].category === 'Городские') {
            return { profile: 'city', desc: 'По городу' }
        } else if (BikeList[id].category === 'Хардтейл') {
            return { profile: 'offroad', desc: 'По бездорожью' }
        } else if (BikeList[id].category === 'Спортивные') {
            return { profile: 'mountain', desc: 'По горам' }
        } else return { profile: 'road', desc: 'По пересеченной местности' }
    }

    return (
        <div className="BikePage container">
            {BikeList[id].name || BikeList[id].wheelSize || BikeList[id].modelYear
                ?
                <Subtitle title={`${BikeList[id].name} ${BikeList[id].wheelSize} (${BikeList[id].modelYear})`} />
                : ''
            }
            <MyModal visible={modal} setVisible={setModal} />
            <div className="row container">
                <div className="column inform">
                    {BikeList[id].category
                        ?
                        <span className="category">{BikeList[id].category}</span>
                        :
                        ''}
                    {BikeList[id].frameMaterial || BikeList[id].frameType
                        ?
                        <span><span className="font_bold">Рама: </span>{BikeList[id].frameMaterial}, {BikeList[id].frameType}</span>
                        : ''
                    }
                    {BikeList[id].numberOfSpeeds
                        ?
                        <span><span className="font_bold">Количество скоростей: </span>{BikeList[id].numberOfSpeeds}</span>
                        : ''
                    }
                    {BikeList[id].wheelSize
                        ?
                        <span><span className="font_bold">Размер колес: </span>{BikeList[id].wheelSize}"</span>
                        : ''
                    }
                    {BikeList[id].brakes
                        ?
                        <span><span className="font_bold">Тормоза: </span>{BikeList[id].brakes}</span>
                        : ''
                    }
                    {BikeList[id].cost
                        ?
                        <span className="cost">{BikeList[id].cost.toLocaleString()} ₽</span>
                        : ''
                    }
                    <p>Рекомендуемая розничная цена</p>
                    <button className="buy" onClick={() => setModal(true)}>Оставить заявку</button>
                    <button>Где купить?</button>
                </div>
                <div className="column img">
                    {BikeList[id].image
                        ?
                        <img srcSet={`../../img/bikes_item_img/${BikeList[id].image}.jpg`} alt="error" />
                        : ''
                    }
                </div>

            </div>
            <div className="row description">
                <div className="container">
                    <Subtitle title='Описание' />
                    <div className="column desc">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae deserunt, ratione nam numquam non architecto? Ullam, nam tempora sapiente ex nesciunt consequatur eligendi qui nihil minus totam iusto fugit error.</p>
                        <h3>Технологии</h3>
                        <div className="technology">
                            <img src="../../img/block_technology/1.svg" alt="error" />
                            <span>Alloy</span>
                        </div>
                        <div className="technology">
                            <img src="../../img/block_technology/2.svg" alt="error" />
                            <span>Junior Frame Geometry</span>
                        </div>
                        <div className="technology">
                            <img src="../../img/block_technology/3.svg" alt="error" />
                            <span>CNC Sidewalls</span>
                        </div>
                        <div className="technology">
                            <img src="../../img/block_technology/4.svg" alt="error" />
                            <span>Reusable Chain Connector</span>
                        </div>
                        <div className="technology">
                            <img src="../../img/block_technology/5.svg" alt="error" />
                            <span>Technoforming</span>
                        </div>
                    </div>
                    <div className="column desc">
                        <h4>Скачать</h4>
                        <div className="row">
                            <div className="link">
                                <a href="https://forwardvelo.ru/upload/medialibrary/1f2/forward_tradeimport_manual_2020_ru.pdf" target='blank'>
                                    <img src="../../img/block_download/1.jpg" alt="error" />
                                    <span>Инструкция</span>
                                </a>
                            </div>
                            <div className="link">
                                <a href="https://forwardvelo.ru/upload/medialibrary/ef5/pdd-ot-forward-2020.pdf" target='blank'>
                                    <img src="../../img/block_download/2.jpg" alt="error" />
                                    <span>ВелоПДД</span>
                                </a>
                            </div>
                        </div>
                        <h4>Характеристики</h4>
                        <div className="row feature">
                            <div className="column">
                                <img src={`../../img/block_feature/${bikeCategory().profile}.svg`} alt="error" />
                                <span className="font_bold">Профиль</span>
                                <span>{bikeCategory().desc}</span>
                            </div>
                            <div className="column">
                                <div className="block">
                                    {BikeList[id].wheelSize
                                        ?
                                        <span className="big_text">{BikeList[id].wheelSize}"</span>
                                        : ''
                                    }
                                    {BikeList[id].numberOfSpeeds
                                        ?
                                        <span className="small_text">{BikeList[id].numberOfSpeeds} скорость</span>
                                        : ''
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}