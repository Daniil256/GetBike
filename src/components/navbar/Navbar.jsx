import React, { useContext } from "react";
import { NavLink } from 'react-router-dom'
import { Context2 } from "../../App";
import './Navbar.css'

const Navbar = () => {
    const context = useContext(Context2)

    return (
        <div className="navbar">
            <div className="container">
                <ul>
                    <li><NavLink className="logo" to="/">GetBike<img src="../img/navbar/logo2.png" alt="error" /></NavLink></li>
                    <li><NavLink to="/">Лучшее - семье</NavLink></li>
                    <li><NavLink to="bikes">Велосипеды</NavLink></li>
                    <li><NavLink to="el_bikes">Электротранспорт</NavLink></li>
                    <li><NavLink to="user">Пользователю</NavLink></li>
                    <li><NavLink to="buy">Где купить</NavLink></li>
                    <li className="only_header">
                        <NavLink to="favorites">
                            Избранное
                            <span className="value">{context.bikeNum}</span>
                        </NavLink>
                    </li>
                    <li className="only_header">
                        <NavLink to="compare">
                            Сравнение
                            <span className="value">{context.bikeNumCompare}</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar