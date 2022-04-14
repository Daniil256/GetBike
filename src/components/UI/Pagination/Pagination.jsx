import React from "react";
import './Pagination.css'

export const Pagination = ({ countriesPerPage, totalCountries, setCurrentPage, currentPage }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <ul className="pagination">
            <li><a href="#" style={
                (currentPage === 1)
                    ?
                    { display: 'none' }
                    :
                    { display: 'inline' }}
                onClick={() => setCurrentPage(currentPage - 1)}>{'<<'}</a>
            </li>
            {pageNumbers.map(num => (
                <li key={num}>
                    <a href="#" style={
                        (pageNumbers.length === 1)
                            ?
                            { display: 'none' }
                            :
                            { display: 'inline' }} onClick={() => setCurrentPage(num)}>
                        {num}
                    </a>
                </li>
            ))}
            <li><a href="#" style={
                (currentPage === pageNumbers.length)
                    ?
                    { display: 'none' }
                    :
                    { display: 'inline' }}
                onClick={() => setCurrentPage(currentPage + 1)}>{'>>'}</a>
            </li>
        </ul>
    )
}