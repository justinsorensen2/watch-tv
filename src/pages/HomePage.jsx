import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Featured from '../components/Featured'
import TvShow from '../components/TvShow'

const HomePage = () => {
  const [tvShows, setTvShows] = useState([])

  const getTopRated = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=16dccf4635fc67bb4bf1e38c0a4459dd&language=en-US&page=1'
    )
    console.log(resp.data.results)
    setTvShows(resp.data.results)
  }

  useEffect(() => {
    console.log('did mount')
    getTopRated()
  }, [])

  return (
    <div>
      <Featured></Featured>
      <ul className="TopRated">
        {tvShows.map((tvShow) => {
          return (
            <TvShow
              key={tvShow.id}
              name={tvShow.name}
              overview={tvShow.overview}
              poster_path={tvShow.poster_path}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default HomePage
