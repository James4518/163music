import React, { memo, useState, useEffect, useRef } from "react";
import type { FC, ReactNode } from "react";
import {
  BarControl,
  BarOperator,
  BarPlayerInfo,
  PlayerBarWrapper
} from "./style";
import { Link } from "react-router-dom";
import { Slider, message } from "antd";
import { useAppSelector, useAppShallowEqual, useAppDispatch } from "@/store";
import { changeLyricIndexAction } from "@/store/modules/playbar";
import { formartImg, formartTime, formartSongUrl } from "@/utils/formart";

interface IProps {
  children?: ReactNode;
}

const PlayerBar: FC<IProps> = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSliding, setIsSliding] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const { currentSong, lyric, lyricIndex } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      lyric: state.player.lyric,
      lyricIndex: state.player.lyricIndex
    }),
    useAppShallowEqual
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    audioRef.current!.src = formartSongUrl(currentSong.id);
    setDuration(currentSong.dt);
  }, [currentSong]);
  function playBtnClick() {
    isPlaying
      ? audioRef.current!.pause()
      : audioRef.current!.play().catch(() => setIsPlaying(false));
    setIsPlaying(!isPlaying);
  }
  function handleTimeUpdate() {
    const currentTime = audioRef.current!.currentTime * 1000;
    if (!isSliding) {
      const progress = (currentTime / duration) * 100;
      setProgress(progress);
      setCurrentTime(currentTime);
    }
    let index = lyric.length - 1;
    for (let i = 0; i < lyric.length; i++) {
      const lyr = lyric[i];
      if (lyr.time > currentTime) {
        index = i - 1;
        break;
      }
    }
    if (lyricIndex == index || index == -1) return;
    dispatch(changeLyricIndexAction(index));
    message.open({
      content: lyric[index].text,
      key: "lyric",
      duration: 0
    });
  }

  function handleSliderChanging(value: number) {
    setIsSliding(true);
    setProgress(value);
    const currentTime = (value / 100) * duration;
    setCurrentTime(currentTime);
  }
  function handleSliderChaged(value: number) {
    const currentTime = (value / 100) * duration;
    audioRef.current!.currentTime = currentTime / 1000;
    setCurrentTime(currentTime);
    setProgress(value);
    setIsSliding(false);
  }
  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="wrap-v2 content">
        <BarControl isPlaying={isPlaying}>
          <button className="btn sprite_playbar prev"></button>
          <button
            className="btn sprite_playbar play"
            onClick={playBtnClick}
          ></button>
          <button className="btn sprite_playbar next"></button>
        </BarControl>
        <BarPlayerInfo>
          <Link to={"/player"}>
            <img src={formartImg(currentSong?.al.picUrl, 34)} alt="" />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong?.name}</span>
              <span className="singer-name">{currentSong?.ar[0].name}</span>
            </div>
            <div className="progress">
              <Slider
                step={0.5}
                value={progress}
                tooltip={{ formatter: null }}
                onChange={handleSliderChanging}
                onChangeComplete={handleSliderChaged}
              />
              <div className="time">
                <span className="current">{formartTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formartTime(duration)}</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favour"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop"></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} />
    </PlayerBarWrapper>
  );
};

export default memo(PlayerBar);
