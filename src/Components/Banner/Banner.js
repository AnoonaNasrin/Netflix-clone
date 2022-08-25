import React, { useEffect, useState } from 'react'
import { API_KEY, imageUrl } from "../../constants/constants"
import axios from "../../axios"
import "./Banner.css"
function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    const randomNumber = Math.floor((Math.random() * 19) + 1)
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      console.log(response);
      setMovie(response.data.results[randomNumber])
    })
  }, [])

  return (
    <div
      style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }}
      className='banner'>
      <div className='content'>
        <h1 className='title'>{movie ? (movie.title ? movie.title : movie.name) : ""} </h1>
        <div className='banner_butttons'>
          <button className='button'>Play</button>
          <button className='button'>My List </button>
        </div>
        <h1 className='discription'>{movie ? movie.overview : ""}</h1>
      </div>
      <div className='fade_bottom'>
      </div>
    </div>
  )
}

export default Banner
