import React from "react";
import { Subtitle } from "../../UI/Subtitle/Subtitle";
import './BlockTechnology.css'
export const BlockTechnology = () => {
    return (<>
        <div className="container">
            <div className="BlockTechnology">
                <Subtitle title='Технологии' link='/technology' linkName='Смотреть все технологии' />
                <div className="text">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, eum libero ipsum natus pariatur doloremque facilis voluptates ea, soluta esse id ut consectetur exercitationem obcaecati sapiente voluptatem, sunt officiis! Veniam.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate optio, soluta ratione inventore explicabo hic ipsa consequuntur beatae voluptatibus accusamus cumque necessitatibus minus eveniet quae aut. Distinctio eum voluptas voluptate.</p>
                </div>
                <div className="description">
                    <span className="font_bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque temporibus blanditiis laboriosam rerum mollitia perspiciatis dolor inventore impedit consequuntur aperiam!</span>
                </div>
            </div>
        </div>
    </>
    )
}