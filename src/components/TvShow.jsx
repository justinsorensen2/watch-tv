import React from 'react'

const TvShow = (props) => {
  const { name, overview, poster_path } = props
  const id = props.id
  const image = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path}`
  const alt = `${name} poster`
  return (
    <li className="Card">
      <img src={image} alt={alt}></img>
      <h3>{name}</h3>
      <p>{overview}</p>
    </li>
  )
}

export default TvShow
