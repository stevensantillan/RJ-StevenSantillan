import React from 'react'

const CardComic = ({comic}) => {
  return (
    <div>
        <img src= {`${comic.thumbnail.path}.${comic.thumbnail.extension}`}/>
    </div>
  )
}

export default CardComic