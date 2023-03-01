import React, { Children, Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRepeat,
  faBackwardStep,
  faPlay,
  faForwardStep,
  faVolumeHigh,
  faVolumeLow,
  faVolumeXmark 
} from '@fortawesome/free-solid-svg-icons';
import { isEmpty } from 'lodash';

export default function Player(props){
  const {
    currentSong,
    isPlaying,
    isPaused,
    duration,
    volume,
  } = props;
  let checkCurrentSong = isEmpty(currentSong);
  return (
    <div className='player glass'>
      <div className="player__thumb">
        <img src={
          checkCurrentSong === true ? null : currentSong.img
        } alt="thumb" style={
          checkCurrentSong === true ? {visibility: 'hidden'} : {visibility: 'visible'}
        } />
      </div>
      <div className="player__info">
        <h2>{
          checkCurrentSong === true ? "Tên bài hát": currentSong.name
        }</h2>
        <h4>{
          checkCurrentSong === true ? "Ca sĩ": currentSong.singer  
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
          <button>
            <FontAwesomeIcon icon={faPlay} />
          </button>
          <button>
            <FontAwesomeIcon icon={faForwardStep} />
          </button>
          <div className="player-controls__volume">
            <input type="range" name="volume" />
            <div className="player-controls__volume-btn">
              <FontAwesomeIcon className='icon-v' icon={faVolumeHigh} />
              <FontAwesomeIcon icon={faVolumeLow} />
              <FontAwesomeIcon icon={faVolumeXmark} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}