import React from 'react'

export default function PlayList(props) {
  const songs = props.songs;
  return (
    <ul className='play-list glass'>
      {
        songs.map(({id, name, singer, img}) => {
          return (
            <li key={id}>
              <div className="song-img" style={{backgroundImage: `url(${img})`}}></div>
              <p>{name} / {singer}</p>
            </li>
          )
        })
      }
    </ul>
  )
}

