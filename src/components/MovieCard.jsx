import React from 'react'
import dhurandhar from"../assets/dhurandhar.jpg"
import seetha from"../assets/seetha.jpg"
import sheersha from"../assets/sheersha.jpg"
import salaar from"../assets/salaar.jpg"
import './moviecard.css'


function MovieCard({Mtitle}) {
  return (
    <div>
      <h1 className="title">{Mtitle}</h1>
      <div className="list">
        <img src={dhurandhar} alt="" />
        <img src={seetha} alt="" />
        <img src={sheersha} alt="" />
        <img src={salaar} alt="" />
        <img src={dhurandhar} alt="" />
        <img src={seetha} alt="" />
        <img src={sheersha} alt="" />
        <img src={salaar} alt="" />
        <img src={dhurandhar} alt="" />
        <img src={seetha} alt="" />
        <img src={sheersha} alt="" />
        <img src={salaar} alt="" />
      </div>
    </div>
  )
}

export default MovieCard