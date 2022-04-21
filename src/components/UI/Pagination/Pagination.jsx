import React, { useState } from "react";
import { Link } from "react-scroll";
import './Pagination.css'

export const Pagination = ({ countriesPerPage, totalCountries, setCurrentPage, currentPage }) => {
    const pageNumbers = []
    const [active] = useState({})
    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
        pageNumbers.push(i)
        active[i] = false
    }
    active[currentPage] = true

    return (
        <ul className="pagination">
            <li><Link
                to="block_sort"
                offset={-100}
                style={
                    (currentPage === 1)
                        ?
                        { display: 'none' }
                        :
                        { display: 'inline' }}
                onClick={() => setCurrentPage(currentPage - 1)}>{'<<'}</Link>
            </li>
            {pageNumbers.map(num => (
                <li key={num}>
                    <Link
                        to="block_sort"
                        offset={-100}
                        className={active[num] ? 'active' : 'none'}
                        style={
                            (pageNumbers.length === 1)
                                ?
                                { display: 'none' }
                                :
                                { display: 'inline' }} onClick={() => setCurrentPage(num)}>
                        {num}
                    </Link>
                </li>
            ))}
            <li><Link
                to="block_sort"
                offset={-100}
                style={
                    (currentPage === pageNumbers.length)
                        ?
                        { display: 'none' }
                        :
                        { display: 'inline' }}
                onClick={() => setCurrentPage(currentPage + 1)}>{'>>'}</Link>
            </li>
        </ul>
    )
}