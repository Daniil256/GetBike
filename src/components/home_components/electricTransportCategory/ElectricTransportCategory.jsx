import React from "react";
import { Subtitle } from "../../UI/Subtitle/Subtitle";
import './ElectricTransportCategory.css'
const ElectricTransportCategory = () => {
    return (
        <div className="ElectricTransportCategory">
            <Subtitle title='Электротранспорт' link='/electro_bikes' linkName='Смотреть все модели' />
            <div className="block">
                <div className="electric__transport__block big">
                    <img src="../img/ElectricTransportPage/1.jpg" alt="error" />
                    <div className="block_title">
                        <h3>TIGER</h3>
                    </div>

                </div>
                <div className="electric__transport__block">
                    <img src="../img/ElectricTransportPage/2.jpg" alt="error" />
                    <div className="block_title">
                        <h3>TIGER <span className="font_light">PLUS</span></h3>
                    </div>

                </div>
                <div className="electric__transport__block">
                    <img src="../img/ElectricTransportPage/3.jpg" alt="error" />
                    <div className="block_title">
                        <h3>Cyclone</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ElectricTransportCategory