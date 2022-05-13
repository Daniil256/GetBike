import React from "react";
import './MyCheckBox.css'

export const MyCheckBox = ({ bikeList, path, value, setSearchQuery }) => {
    const OnlyUniqueItems = []
    for (let i = 0; i < bikeList.length; i++) {
        if (bikeList[i][path] && !OnlyUniqueItems.includes(bikeList[i][path])) {
            OnlyUniqueItems.push(bikeList[i][path])
        }
    }

    return (
        <>
            <label className="label">
                <input type="radio" name='modelYear'
                    onChange={() => setSearchQuery({ category: 'Все' })}
                />
                Все</label>
            {OnlyUniqueItems.map(item =>
                <label className="label"
                    key={item}
                    name={path}
                    value={value}
                >
                    <input type="radio" name='modelYear'
                        onChange={() => setSearchQuery({ modelYear: item })}
                    />
                    {item}</label>
            )}
        </>
    )
}