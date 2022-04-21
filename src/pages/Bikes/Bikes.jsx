import React, { useMemo, useState } from "react";
import './Bikes.css'
import { Subtitle } from "../../components/UI/Subtitle/Subtitle";
import { BikesCategory } from "../../components/bikes_components/bikesCategory/BikesCategory";
import { BikeSearchProperties } from "../../components/bikes_components/bikeSearchProperties/BikeSearchProperties";
import { BikeList } from "../../components/bikes_components/bikeList/BikeList";
import { Pagination } from "../../components/UI/Pagination/Pagination";
import { BikeListObject } from "../../components/BikeListObject/BikeListObject";
import { useParams } from "react-router-dom";

export const Bikes = () => {

    const [bikeList, setBikeList] = useState([])
    const [searchQuery, setSearchQuery] = useState({ name: '' })
    const [selectedSort, setSelectedSort] = useState('')
    const [invertSort, setInvertSort] = useState(false)

    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage] = useState(15)

    const param = useParams()

    useMemo(() => {
        const ar = []
        if (param.category === 'bikes') {
            BikeListObject.filter((item) => {
                return !item.power && ar.push(item)
            })
        }
        if (param.category === 'electro_bikes') {
            BikeListObject.filter((item) => {
                return item.power && ar.push(item)
            })
        }
        setBikeList(ar)
    }, [param.category])

    const sortedPosts = useMemo(() => {
        if (!selectedSort || selectedSort === 'default') return bikeList
        return [...bikeList].sort((a, b) => {
            if (invertSort) {
                return (b[selectedSort] < a[selectedSort]) ? -1 : 1
            }
            return (a[selectedSort] < b[selectedSort]) ? -1 : 1
        })
    }, [bikeList, selectedSort, invertSort])

    const searchAndSortedPosts = useMemo(() => {
        setCurrentPage(1)
        if (Object.keys(searchQuery)[0] === 'to') {
            return sortedPosts.filter(item =>
                Number(item.cost) >= Number(searchQuery.to)
                    ?
                    String(item.cost).includes(String(searchQuery.to))
                    :
                    String(item.cost).includes('')
            )
        }
        if (Object.keys(searchQuery)[0] === 'from') {
            return sortedPosts.filter(item =>
                Number(item.cost) <= Number(searchQuery.from)
                    ?
                    String(item.cost).includes(String(searchQuery.to))
                    :
                    String(item.cost).includes(''))
        }
        if (Object.values(searchQuery)[0] === 'Все') return sortedPosts
        if (Object.values(searchQuery)[0] === '') return sortedPosts

        return sortedPosts.filter((_item, index) =>
            String(bikeList[index][Object.keys(searchQuery)[0]]).includes(String(searchQuery[Object.keys(searchQuery)[0]])))

    }, [searchQuery, sortedPosts, bikeList, selectedSort])
    const lastCountryIndex = currentPage * countriesPerPage
    const firstCountryIndex = lastCountryIndex - countriesPerPage
    const currentCountry = searchAndSortedPosts.slice(firstCountryIndex, lastCountryIndex)

    const [active, setActive] = useState(false)
    return (
        <div className="Bikes container">

            <Subtitle title={param.category === 'bikes' ? 'Велосипеды' : param.category === 'electro_bikes' ? 'Электровелосипеды' : ''} />

            <BikesCategory
                bikeList={bikeList}
                setSearchQuery={setSearchQuery} />
            <div className="option" onClick={() => setActive(!active)}>
                <span>Фильтр</span>
                <span className={active ? 'active' : ''}>▲</span>
            </div>
            <div className="row">
                <BikeSearchProperties
                    active={active}
                    bikeList={bikeList}
                    setSearchQuery={setSearchQuery} />
                <BikeList
                    searchAndSortedPosts={searchAndSortedPosts}
                    currentCountry={currentCountry}
                    setSelectedSort={setSelectedSort}
                    setInvertSort={setInvertSort}
                    invertSort={invertSort} />
            </div>

            <Pagination
                countriesPerPage={countriesPerPage}
                totalCountries={searchAndSortedPosts.length}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage} />
        </div>
    )
}