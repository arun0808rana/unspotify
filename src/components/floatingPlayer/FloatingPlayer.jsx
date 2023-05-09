import "./FloatingPlayer.css";
import ShuffleIcon from "../../assets/shuffle-fill.svg";
import PreviousIcon from "../../assets/skip-back-fill.svg";
import PlayIcon from "../../assets/play-fill.svg";
import PauseIcon from "../../assets/pause-fill.svg";
import NextIcon from "../../assets/skip-forward-fill.svg";
import RepeatIcon from "../../assets/repeat-fill.svg";
import PlaceholderCoverArt from "../../assets/Linkin_Park_Hybrid_Theory_Album_Cover.jpg";
import ShuffleAltIcon from "../../assets/shuffle-fill_white.svg";
import RepeatAltIcon from "../../assets/repeat-fill_alt.svg";

import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
let counter = 0;

function FloatingPlayer() {
  console.log("Rendering...", ++counter);
  const [isPlaying, setIsPlaying] = useState(true);
  const [shouldShuffle, setShouldShuffle] = useState(false);
  const [shouldRepeat, setShouldRepeat] = useState(false);

  const handleShuffle = (event) => {
    setShouldShuffle(!shouldShuffle);
  };

  const handleRepeat = (event) => {
    setShouldRepeat(!shouldRepeat);
  };

  const handleOnPlay = (event) => {
    setIsPlaying(!isPlaying);
  };

  const handleOnPause = (event) => {
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (event) => {
    const progress = event.target.value;
    console.log('progress :>> ', progress);
    event.target.style.background = `linear-gradient(to right, #eff1f5 ${progress}%, #72767f ${progress}%)`;
  };
  

  return (
    <div className="floating_player">
      <div className="cover_art_container">
        <img src={PlaceholderCoverArt} className="cover_art_img" />
        <div className="cover_art_details">
          <div className="artist_name">Yoasobi</div>
          <div className="current_song_name">Plyer Mother</div>
        </div>
      </div>
      <div className="floating_player_ctrls">
        <div className="media_altering_controls">
          {shouldShuffle ? (
            <img
              src={ShuffleAltIcon}
              className="floating_player_ctrls playing_control"
              onClick={handleShuffle}
            />
          ) : (
            <img
              src={ShuffleIcon}
              className="floating_player_ctrls playing_control"
              onClick={handleShuffle}
            />
          )}
          <img
            src={PreviousIcon}
            className="floating_player_ctrls playing_control"
          />
          {isPlaying ? (
            <img
              src={PauseIcon}
              className="floating_player_ctrls playing_control active_control"
              onClick={handleOnPlay}
            />
          ) : (
            <img
              src={PlayIcon}
              className="floating_player_ctrls playing_control active_control"
              onClick={handleOnPause}
            />
          )}
          <img
            src={NextIcon}
            className="floating_player_ctrls playing_control"
          />
          {shouldRepeat ? (
            <img
              src={RepeatAltIcon}
              className="floating_player_ctrls playing_control"
              onClick={handleRepeat}
            />
          ) : (
            <img
              src={RepeatIcon}
              className="floating_player_ctrls playing_control"
              onClick={handleRepeat}
            />
          )}
        </div>
        <div className="floating_seekbar">
          <input type="range" className="floating_seekbar_porgress" onInput={handleSeek} defaultValue={0}/>
        </div>
      </div>
      <div className="floating_player_misc_controls"></div>
    </div>
  );
}

// export default FloatingPlayer;
export default React.memo(FloatingPlayer);
