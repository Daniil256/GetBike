import React, { useContext } from "react";
import { NavLink } from 'react-router-dom'
import { Context2 } from "../../App";
import './Navbar.css'
const Navbar = () => {
    const context = useContext(Context2)
    // console.log(context.bikesFavorites.length);
    return (
        <div className="navbar">
            <div className="container">
                <ul>
                    <li><NavLink className="logo" to="/">GetBike<img src="../img/navbar/logo2.png" alt="error" /></NavLink></li>
                    <li><NavLink to="/">Лучшее - семье</NavLink></li>
                    <li><NavLink to="bikes">Велосипеды</NavLink></li>
                    <li><NavLink to="el">Электротранспорт</NavLink></li>
                    <li><NavLink to="user">Пользователю</NavLink></li>
                    <li><NavLink to="/">Где купить</NavLink></li>
                    <li><NavLink to="/">Дилерам</NavLink></li>
                    <li><NavLink to="/">Вакансии</NavLink></li>
                    <li className="only_header">
                        <NavLink to="favorites" title="Избранное">
                            <span className='symbol'>&#9825;</span>
                            <span className="value">{context.bikeNum}</span>
                        </NavLink>
                    </li>
                    <li className="only_header" title="Сравнение">
                        <NavLink to="compare" className='symbol'>
                            <span className='symbol'> &#8646;</span>
                            <span className="value">{context.bikeNumCompare}</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar