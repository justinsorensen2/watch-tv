import React, { useState, useEffect } from 'react'
import axios from 'axios'

const TvShowPage = (props) => {
  const showId = props

  const [details, setDetails] = useState([])
  const [summary, setSummary] = useState({})

  //poll api for cast
  const getShowDetails = async () => {
    const respDetails = await axios.get(
      `https://api.themoviedb.org/3/tv/${showId}/credits?api_key=e39bd4d7934850f869dcfd33c094d2bc&language=en-US`
    )
    setDetails(respDetails.data.cast)
    console.log('details' + respDetails)
  }

  //poll API for show summary
  const getShowSummary = async () => {
    console.log(showId)
    const respSummary = await axios.get(
      `https://api.themoviedb.org/3/tv/${showId}?api_key=e39bd4d7934850f869dcfd33c094d2bc&language=en-US&page=1`
    )
    setSummary(respSummary.data)
    console.log(respSummary.data)
  }

  //import API poll data into state on page load
  useEffect(() => {
    getShowDetails()
    getShowSummary()
  }, [])

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
