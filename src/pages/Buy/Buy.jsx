import React from "react";
import { Subtitle } from "../../components/UI/Subtitle/Subtitle";
import './Buy.css'

export const Buy = () => {
    return (
        <div className="Buy">
            <Subtitle title='Магазины' />
            <iframe className="google_map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11360.801124729303!2d50.21021941859848!3d53.2301431668506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x416619363c52adb7%3A0x680eb1bc8f52b1a4!2z0J_QsNGA0Log0KXQsNGD0YE!5e0!3m2!1sru!2sru!4v1636367569297!5m2!1sru!2sru"
                loading="lazy"></iframe>
        </div >
    )
}