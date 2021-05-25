import React from 'react'
import "./Nav.css"
import requests from './requests'

function Nav({ setSelectedOption }) {
    // changing the title of movie by setter function present in the App.js file
    return (
        <div className='nav'>
            <h2 onClick={() => setSelectedOption(requests.fetchTrending)}>trending</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchTopRated)}>Top rated</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchActionMovies)}>Action</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchComedyMovies)}>Comedy</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>Horror</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchRomanceMovies)}>Romance</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchActionMovies)}>Mystery</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchDocumentaries)}>Sci-FI</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchNetflixOriginals)}>Western</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchNetflixOriginals)}>TV movie</h2>
        </div>
    )
}

export default Nav
