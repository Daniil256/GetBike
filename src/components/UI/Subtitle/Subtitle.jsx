import React from "react";
import { Link } from 'react-router-dom'

import './Subtitle.css'
export const Subtitle = (props) => {
    return (
        <div className="container">
            <div className="subtitle">
                <h2>{props.title}</h2>
                <span style={props.linkName ? { display: 'inline' } : { display: 'none' }}>
                    <Link to={props.link ? props.link : ''}>
                        {props.linkName ? props.linkName : ''}</Link>
                </span>
            </div>
        </div>
    )
}