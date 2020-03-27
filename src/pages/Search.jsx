import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
  const [searched, setSearched] = useState([])

  const getSearched = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=16dccf4635fc67bb4bf1e38c0a4459dd&language=en-US&page=1'
    )
    setSearched(resp.data)
  }

  useEffect(() => {
    console.log('did mount')
    getSearched()
  }, [])

  const name = searched.name
  const poster_path = searched.poster_path
  const overview = searched.overview
  const image = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path}`
  const alt = `${name} poster`
  return (
    <li className="Card2">
      <h2>Search Result</h2>
      <img src={image} alt={alt}></img>
      <h3>{name}</h3>
      <p>{overview}</p>
    </li>
  )
}
export default Search
