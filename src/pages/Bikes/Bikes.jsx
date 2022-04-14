import React, { useMemo, useState } from "react";
import './Bikes.css'
import { Subtitle } from "../../components/UI/Subtitle/Subtitle";
import { BikesCategory } from "../../components/bikes_components/bikesCategory/BikesCategory";
import { BikeSearchProperties } from "../../components/bikes_components/bikeSearchProperties/BikeSearchProperties";
import { BikeList } from "../../components/bikes_components/bikeList/BikeList";
import { Pagination } from "../../components/UI/Pagination/Pagination";
import { BikeListObject } from "../../components/BikeListObject/BikeListObject";


export const Bikes = () => {
    const [bikeList, setBikeList] = useState(BikeListObject)
    const [searchQuery, setSearchQuery] = useState({ name: '' })
    const [selectedSort, setSelectedSort] = useState('')
    const [invert, setInvert] = useState(false)

    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage] = useState(15)

    const sortedPosts = useMemo(() => {
        if (!selectedSort || selectedSort === 'default')
            return bikeList
        if (!invert) {
            return [...bikeList].sort((a, b) =>
                String(a[selectedSort]).localeCompare(String(b[selectedSort])))
        } else {
            return [...bikeList].sort((b, a) =>
                String(a[selectedSort]).localeCompare(String(b[selectedSort])))
        }
    }, [bikeList, selectedSort, invert])

    const searchAndSortedPosts = useMemo(() => {
        setCurrentPage(1)
        if (Object.keys(searchQuery)[0] === 'to') {
            return sortedPosts.filter(item =>
                Number(item.cost) >= Number(searchQuery.to)
                    ?
                    String(item.cost).includes(String(searchQuery.to))
                    :
                    String(item.cost).includes(''))
        }
        if (Object.keys(searchQuery)[0] === 'from') {
            return sortedPosts.filter(item =>
                Number(item.cost) <= Number(searchQuery.from)
                    ?
                    String(item.cost).includes(String(searchQuery.to))
                    :
                    String(item.cost).includes(''))
        }
        if (Object.values(searchQuery)[0] === 'Все')
            return bikeList
        return sortedPosts.filter(item =>
            String(item[Object.keys(searchQuery)[0]]).includes(String(searchQuery[Object.keys(searchQuery)[0]])))
    }, [searchQuery, sortedPosts])


    const lastCountryIndex = currentPage * countriesPerPage
    const firstCountryIndex = lastCountryIndex - countriesPerPage
    const items = []
    searchAndSortedPosts.map(item => {
        items.push(item.id)
    })
    const currentCountry = items.slice(firstCountryIndex, lastCountryIndex)
    return (
        <div className="Bikes container">

            <Subtitle title='Велосипеды' />

            <BikesCategory
                bikeList={bikeList}
                setSearchQuery={setSearchQuery} />

            <BikeSearchProperties
                bikeList={bikeList}
                setSearchQuery={setSearchQuery} />

            <BikeList
                searchAndSortedPosts={searchAndSortedPosts}
                currentCountry={currentCountry}
                setSelectedSort={setSelectedSort}
                setInvert={setInvert}
            />

            <Pagination
                countriesPerPage={countriesPerPage}
                totalCountries={searchAndSortedPosts.length}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage} />
        </div>
    )
}