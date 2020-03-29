import React, { useState, useEffect } from 'react'
import axios from 'axios'

const TvShowPage = (props) => {
  const showId = props

  const [details, setDetails] = useState([])
  const [summary, setSummary] = useState({})

  //poll api for cast and show summary
  const getShowDetails = async () => {
    const respDetails = await axios.get(
      `https://api.themoviedb.org/3/tv/${showId}/credits?api_key=e39bd4d7934850f869dcfd33c094d2bc&language=en-US`
    )
    setDetails(respDetails.data.cast)
    console.log('details' + respDetails)
    setSummary(respDetails.data)
    console.log(respDetails.data)
  }

  //import API poll data into state on page load
  useEffect(
    (props) => {
      getShowDetails(props)
    },
    [showId]
  )

  const image = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${summary.backdrop_path}`
  const alt = `${summary.name} poster`
  return (
    <div className="Card3">
      <img src={image} alt={alt}></img>
      <h3>{summary.name}</h3>
      <p>{summary.overview}</p>
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
