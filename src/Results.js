import React, { useEffect, useState } from 'react'
import './Results.css'
import VideoCard from './VideoCard'
import axios from './axios'
import requests from './requests'
import FlipMove from 'react-flip-move'

function Results({ selectedOption }) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await axios.get(selectedOption)
            setMovies(response.data.results)
            // console.log(response.data.results);
        }
        fetchMovie()
    }, [selectedOption])

    return (
        <div className='results'>
            <FlipMove>
                {
                    movies?.map((movie) => {
                        // console.log(movie);
                        return (
                            <VideoCard key={movie.id} movie={movie} />
                        )
                    })
                }
            </FlipMove>

        </div>
    )
}

export default Results
