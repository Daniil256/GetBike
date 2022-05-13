import React from "react";

export const MySelect = ({ bikeList, path, setSearchQuery }) => {
    const OnlyUniqueItems = []
    for (let i = 0; i < bikeList.length; i++) {
        if (bikeList[i][path] && !OnlyUniqueItems.includes(bikeList[i][path])) {
            OnlyUniqueItems.push(bikeList[i][path])
        }
    }
    const func = (e) => {
        if (e.target.value === 'Все')
            setSearchQuery({ category: e.target.value })
        else
            setSearchQuery({ [path]: e.target.value })
    }
    return (
        <select
            onChange={func}
        >
            <option>Все</option>
            {
                OnlyUniqueItems.map(item =>
                    <option value={item} key={item}>{item}</option>
                )
            }
        </select >
    )
}