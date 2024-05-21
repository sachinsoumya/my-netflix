import React from 'react'
import { IMG_CDN } from '../Utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-52 px-2' >
        <img src= {IMG_CDN +posterPath} alt='poster'/>
    </div>
  )
}

export default MovieCard