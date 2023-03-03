import React, { Component, createRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRepeat,
  faBackwardStep,
  faPlay,
  faPause,
  faForwardStep,
  faVolumeHigh,
  faVolumeLow,
  faVolumeXmark 
} from '@fortawesome/free-solid-svg-icons';
import { isEmpty } from 'lodash';
// import songs from'./songs/songs';
import Audio from './Audio';

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.audioRef = createRef()
  }
  // handleSetSrc = (audio, currentSong) => {
  //   const currentSongID = currentSong.id;
  //   const song = songs.find(songs => songs.id === currentSongID);
  //   audio.src = song.src;
  // }
  handleCheckSong = () => {
    const { currentSong } = this.props.data;
    let checkCurrentSong = isEmpty(currentSong);
    return checkCurrentSong;
  };
  handlePlay = () => {
    const audio = this.audioRef.current;
    audio.volume = 0.5;
    // audio.pause();
    // audio.load();
    audio.play().then(() => {});
  };
  render() {
    const { currentSong, isPlaying, isMute, isRepeat, volume, duration } = this.props.data;
    return (
      <div className='player glass'>
        <div className="player__thumb">
          <img src={
            this.handleCheckSong() === true ? null : currentSong.img
          } alt="thumb" style={
            this.handleCheckSong() === true ? {visibility: 'hidden'} : {visibility: 'visible'}
          } />
        </div>
        <div className="player__info">
          <h2>{
            this.handleCheckSong() === true ? "Tên bài hát": currentSong.name
          }</h2>
          <h4>{
            this.handleCheckSong() === true ? "Ca sĩ": currentSong.singer  
          }</h4>
        </div>
        <div className="player-controls">
          <div className="player-controls__timeline">
            <span>22:07</span>
            <input type="range" min={0} max={100} name="timeline" />
          </div>
          <div className="player-controls__buttons">
            <button>
              <FontAwesomeIcon icon={faRepeat} />
            </button>
            <button>
              <FontAwesomeIcon icon={faBackwardStep} />
            </button>
            <button onClick={this.handlePlay}>
              <FontAwesomeIcon icon={
                faPlay
              } />
            </button>
            <button>
              <FontAwesomeIcon icon={faForwardStep} />
            </button>
            <div className="player-controls__buttons__volume">
              <div className="player-controls__buttons__volume--status">
                <button>
                  <FontAwesomeIcon icon={faVolumeHigh} />
                </button>
                <button>
                  <FontAwesomeIcon icon={faVolumeLow} />
                </button>
                <button>
                  <FontAwesomeIcon icon={faVolumeXmark} />
                </button>
              </div>
              <div className="player-controls__buttons__volume__range">
                <input type="range" name="volume" />
              </div>
            </div>
          </div>
        </div>
        <Audio ref={this.audioRef} data={{ currentSong, isPlaying, isMute, isRepeat, volume, duration }} />
      </div>
    )
  }
}
