import React from 'react'
import { IMG_CDN } from '../Utils/constant'

const MovieCard = ({posterPath}) => {

  //poster path not present handle it 


  return posterPath && (
    <div className='w-52 px-2' >
        <img src= {IMG_CDN + posterPath} alt='poster' className='rounded-lg'/>
    </div>
  )
}

export default MovieCard