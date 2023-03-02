import React, { Component } from 'react';
import { get } from '../api/RESTfulApi';
import Player from './Player';
import PlayList from './PlayList';
import Audio from './Audio';
import Tester from './Tester';

export class MusicPlayer extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      currentSong: {},
      isPlaying: false,
      isMute: false,
      isRepeat: false,
      volume: 20,
      duration: 0,
    }
  }
  getSongs = async () => {
    await get('songs').then(songs => {
      this.setState({songs, currentSong: songs[0]});
    });
  }
  componentDidMount() {
    this.getSongs();
  }
  handleClickSong = () => {
    
  }
  render() {
    const {
      songs,
      currentSong,
      isPlaying,
      isMute,
      isRepeat,
      volume,
      duration
    } = this.state;
    return (
      <div className='music-player'>
        <Player currentSong={currentSong} duration={duration} />
        <PlayList songs={songs} onClickSong={this.handleClickSong} />
        <Audio
          currentSong={currentSong}
          isPlaying={isPlaying}
          isMute={isMute}
          isRepeat={isRepeat}
          volume={volume}
        />
      </div>
    )
  }
}

export default MusicPlayer