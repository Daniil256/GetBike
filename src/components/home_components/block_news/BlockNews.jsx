import React from "react"
import { Subtitle } from "../../UI/Subtitle/Subtitle"
import './BlockNews.css'
const BlockNews = () => {
    return (
        <div className="BlockNews">
            <Subtitle title='Новости' link='/news' linkName='Смотреть все новости' />
            <div className="container">
                <div className="block_news">
                    <div className="block">
                        <div className="img">
                            <img src="./img/block_news/1.jpg" alt="error" />
                        </div>
                        <div className="text">
                            <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero amet nemo ex quis ea reiciendis?</h3>
                            <span className="date">23 марта 2021</span>
                        </div>
                    </div>

                    <div className="block">
                        <div className="img">
                            <img src="./img/block_news/2.jpg" alt="error" />
                        </div>
                        <div className="text">
                            <h3>Lorem, ipsum dolor.</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus ad natus odit soluta.</p>
                            <span className="date">13 марта 2021</span>
                        </div>
                    </div>
                    <div className="block">
                        <div className="img">
                            <img src="./img/block_news/3.jpg" alt="error" />
                        </div>
                        <div className="text">
                            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium quisquam aliquam porro error quo sequi?</h3>
                            <span className="date">13 февраля 2021</span>
                        </div>
                    </div>
                    <div className="block">
                        <div className="img">
                            <img src="./img/block_news/4.jpg" alt="error" />
                        </div>
                        <div className="text">
                            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit quae laboriosam incidunt doloremque alias?</p>
                            <span className="date">8 февраля 2021</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default BlockNews