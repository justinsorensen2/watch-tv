import React, { useState, useEffect } from 'react'
import axios from 'axios'

const TvShowPage = (props) => {
  const showId = props.match.params.showId

  const [details, setDetails] = useState([])
  const [summary, setSummary] = useState([])

  //poll api for cast and show summary
  const getShowDetails = async () => {
    const respDetails = await axios.get(
      `https://api.themoviedb.org/3/tv/${showId}/credits?api_key=e39bd4d7934850f869dcfd33c094d2bc&language=en-US`
    )
    const summaryResp = await axios.get(
      `https://api.themoviedb.org/3/tv/${showId}?api_key=e39bd4d7934850f869dcfd33c094d2bc&language=en-US&page=1`
    )
    setSummary(summaryResp.data)
    console.log(summaryResp.data)
    setDetails(respDetails.data.cast)
    console.log('details' + respDetails)
  }

  //import API poll data into state on page load
  useEffect(
    (props) => {
      getShowDetails()
    },
    [showId]
  )

  const poster_path = summary.poster_path
  const name = summary.name
  const overview = summary.overview
  const image = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path}`
  const alt = `${name} poster`
  return (
    <div className="Card3">
      <img src={image} alt={alt}></img>
      <h3>{name}</h3>
      <p>{overview}</p>
      <p>Cast:</p>
      <ul className="Actors">
        {details.map((actor) => {
          return <li>{actor.name}</li>
        })}
      </ul>
    </div>
  )
}

export default TvShowPage
