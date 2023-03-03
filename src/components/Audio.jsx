import { forwardRef } from 'react';

const Audio = (props, ref) => {
  const { currentSong, isPlaying, isMute, isRepeat, volume, duration } = props.data;
  return <audio ref={ref} src={currentSong.src} onCanPlay={alert("can play")} type='audio/mpeg'>
    {/* <source src={currentSong.src} type="audio/mpeg" /> */}
  </audio>
};
export default forwardRef(Audio);