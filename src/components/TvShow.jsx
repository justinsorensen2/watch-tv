import React from 'react'

const TvShow = (props) => {
  const { name, overview, poster_path, id } = props
  const image = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path}`
  const alt = `${name} poster`
  return (
    <li className="Card">
      <a href={`/tvShow/${id}`}>
        <img src={image} alt={alt}></img>
        <h3>{name}</h3>
        <p>{overview}</p>
      </a>
    </li>
  )
}

export default TvShow
