import React, { forwardRef } from 'react'
import './VideoCard.css'
import TextTruncate from 'react-text-truncate'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const baseUrl = 'https://image.tmdb.org/t/p/original/'

const VideoCard = forwardRef(({ movie }, ref) => {
    return (
        <div ref={ref} className='videoCard'>
            <img src={`${baseUrl}/${movie.poster_path || movie.backdrop_path}`} alt='' />
            <TextTruncate
                line={2}
                element='p'
                truncateText='..'
                text={movie.overview}
            />
            <h2>{movie.original_title}</h2>
            <p className='videoCard__info'>
                {movie.release_date && `${movie.release_date} .`}
                <ThumbUpIcon />
                {movie.vote_count}
            </p>
        </div>
    )
})

export default VideoCard
