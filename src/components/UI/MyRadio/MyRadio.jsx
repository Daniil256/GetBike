import React from "react";
import './MyRadio.css'

export const MyRadio = ({ values, value, setSearchQuery, nameInput, onChange }) => {

    const func = (index) => {
        for (let i = 0; i < values.length; i++) {
            values[i]['checked'] = false
        }
        values[index]['checked'] = true
    }
    return (
        <>
            {values.map((item, index) =>
                <label
                    className={item.checked ? 'label active' : 'label'}
                    key={item.name}
                    value={value}
                    onClick={() => func(index)}
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