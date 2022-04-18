import React from "react";

export const MySelect = ({ bikeList, path, setSearchQuery }) => {
    const OnlyUniqueItems = []
    for (let i = 0; i < bikeList.length; i++) {
        if (bikeList[i][path] && !OnlyUniqueItems.includes(bikeList[i][path])) {
            OnlyUniqueItems.push(bikeList[i][path])
        }
    }

    return (
        <select
            onChange={(e) => setSearchQuery({ [path]: e.target.value })}
        >
            <option>Все</option>
            {OnlyUniqueItems.map(item =>
                <option value={item} key={item}>{item}</option>
            )}
        </select>)
}