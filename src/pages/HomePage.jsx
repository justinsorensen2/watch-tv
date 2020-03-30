import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TvShow from '../components/TvShow'

const HomePage = () => {
  const [tvShows, setTvShows] = useState([])
  const [featured, setFeatured] = useState({})

  const getTopRated = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=16dccf4635fc67bb4bf1e38c0a4459dd&language=en-US&page=1'
    )
    console.log(resp.data.results)
    setTvShows(resp.data.results)
    setFeatured(resp.data.results[Math.round(Math.random() * 20)])
  }

  useEffect(() => {
    console.log('did mount')
    getTopRated()
  }, [])

  const name = featured.name
  const poster_path = featured.poster_path
  const overview = featured.overview
  const image = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path}`
  const alt = `${name} poster`

  return (
    <div>
      <article className="Card2">
        <a href={`/tv/${featured.id}`} id={featured.id}>
          <h2>Featured Show</h2>
          <img src={image} alt={alt}></img>
          <h3>{name}</h3>
          <p>{overview}</p>
        </a>
      </article>
      <ul className="TopRated">
        {tvShows.map((tvShow) => {
          return (
            <>
              <a href={`/tv/${tvShow.id}`}>
                <TvShow
                  key={tvShow.id}
                  name={tvShow.name}
                  overview={tvShow.overview}
                  poster_path={tvShow.poster_path}
                ></TvShow>
              </a>
            </>
          )
        })}
      </ul>
    </div>
  )
}

export default HomePage
