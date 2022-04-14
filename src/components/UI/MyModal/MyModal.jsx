import React, { useState } from "react";
import './MyModal.css'
export const MyModal = ({ visible, setVisible }) => {
    const [name, setName] = useState('')
    const [region, setRegion] = useState('')
    const [city, setCity] = useState('')
    const [tel, setTel] = useState('')
    const [persData, setPersData] = useState('')
    const enableButton = () => {
        if (name !== '' && region !== '' && city !== '' && tel !== '' && persData === true) {
            return false
        } else return true
    }

    return (
        <div className={visible ? 'MyModal active' : 'MyModal'} onClick={() => setVisible(false)}>
            <div className="content" onClick={(e) => e.stopPropagation()}>
                <form action="#" onSubmit={() => setVisible(false)}>
                    <span className="clear_element" onClick={() => setVisible(false)}>&#10006;</span>
                    <h3>Отправить заявку на велосипед</h3>
                    <p>Оставьте заявку, мы свяжемся с вами в ближайшее время</p>
                    <span>Ваше имя</span>
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
                    <span>Регион</span>
                    <input type="text" name="region" onChange={(e) => setRegion(e.target.value)} />
                    <span>Город</span>
                    <input type="text" name='city' onChange={(e) => setCity(e.target.value)} />
                    <span>Контактный телефон</span>
                    <input type="tel" name="tel" onChange={(e) => setTel(e.target.value)} />
                    <label>
                        <input type="checkbox" name="pers_data" onChange={(e) => setPersData(e.target.checked)} />
                        Я согласен на обработку моих персональных данных
                    </label>
                    <input className="button" type='submit' disabled={enableButton()} value='Отправить заявку' />
                </form>
            </div>
        </div>
    )
}