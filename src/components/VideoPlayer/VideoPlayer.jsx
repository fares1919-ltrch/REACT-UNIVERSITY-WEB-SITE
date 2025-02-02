import './VideoPlayer.css';
import video from '../../assets/college-video.mp4';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const VideoPlayer = ({ playVideo, setPlayVideo }) => {
  useEffect(() => {
    console.log(`VideoPlayer rendered with playVideo: ${playVideo}`);
  }, [playVideo]);

  return (
    <div className={`video-player ${playVideo ? 'show' : 'hide'}`} onClick={() => setPlayVideo(false)}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

VideoPlayer.propTypes = {
  playVideo: PropTypes.bool.isRequired,
  setPlayVideo: PropTypes.func.isRequired,
};

export default VideoPlayer;