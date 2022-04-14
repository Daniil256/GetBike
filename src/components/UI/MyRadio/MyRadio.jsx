import React, { useState } from "react";
import './MyRadio.css'

export const MyRadio = ({ values, value, setSearchQuery, nameInput, onChange }) => {



    return (
        <>
            {values.map((item, index) =>
                <label className='label'
                    key={item.name}
                    value={value}
                >
                    <input
                        defaultChecked={item.checked ? true : false}
                        value={item.value}
                        type="radio"
                        name={nameInput}
                        onChange={(e) =>
                            values[index].condition
                                ?
                                setSearchQuery({ [values[index].condition]: e.target.value })
                                :
                                onChange(e.target.value)

                        } />
                    {item.name}</label>
            )}
        </>
    )
}