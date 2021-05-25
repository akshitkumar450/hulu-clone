import React, { useEffect, useState } from 'react'
import './Results.css'
import VideoCard from './VideoCard'
import axios from './axios'
import requests from './requests'

function Results() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await axios.get(requests.fetchActionMovies)
            setMovies(response.data.results)
            // console.log(response.data.results);
        }
        fetchMovie()
    }, [])

    return (
        <div className='results'>

            {
                movies?.map((movie) => {
                    console.log(movie);
                    return (
                        <VideoCard movie={movie} />
                    )
                })
            }

        </div>
    )
}

export default Results
