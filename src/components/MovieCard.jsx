import React from 'react'
import dhurandhar from"../assets/dhurandhar.jpg"
import seetha from"../assets/seetha.jpg"
import sheersha from"../assets/sheersha.jpg"
import salaar from"../assets/salaar.jpg"
import './moviecard.css'


function MovieCard() {
  return (
    <div>
      <h1 className="title">New this week</h1>
      <div className="list">
        <img src={dhurandhar} alt="" />
        <img src={seetha} alt="" />
        <img src={sheersha} alt="" />
        <img src={salaar} alt="" />
      </div>
    </div>
  )
}

export default MovieCard