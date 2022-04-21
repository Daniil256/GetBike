import React from "react";
import { Link } from 'react-router-dom'

import './Subtitle.css'
export const Subtitle = ({ title, linkName, link }) => {
    return (
        <div className="container">
            <div className="subtitle">
                <h2>{title}</h2>
                <span style={linkName ? { opacity: 1 } : { opacity: 0 }}>
                    <Link to={link ? link : ''}>
                        {linkName ? linkName : ''}</Link>
                </span>
            </div>
        </div>
    )
}