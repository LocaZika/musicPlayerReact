import React from 'react'

export default function PlayList(props) {
  const songs = props.songs;
  const handleClickSong = (song) => {
    const { onClickSong } = props;
    onClickSong(song);
  };
  return (
    <ul className='play-list glass'>
      {
        songs.map(({id, name, singer, img, src}) => {
          return (
            <li key={id} onClick={
              () => handleClickSong({id, name, singer, img, src})
            }>
              <div className="song-img" style={{backgroundImage: `url(${img})`}}></div>
              <p>{name} / {singer}</p>
            </li>
          )
        })
      }
    </ul>
  )
}

