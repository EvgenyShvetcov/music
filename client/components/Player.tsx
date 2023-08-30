"use client";
import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import styles from "../styles/player.module.scss";
import TrackProgress from "./TrackProgrss";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setCurrentTime,
  setDuration,
  setPause,
  setPlay,
  setVolume,
} from "@/redux/slices/player";

let audio: any;

const Player = () => {
  const player = useAppSelector((state) => state.player);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      setAudio();
      play();
    }
  }, [player.active]);

  const setAudio = () => {
    if (player.active) {
      audio.src = "http://localhost:8000/" + player.active.audio;
      audio.volume = player.volume / 100;
      audio.onloadedmetadata = () => {
        dispatch(setDuration(audio.duration));
      };
      audio.ontimeupdate = () => {
        dispatch(setCurrentTime(audio.currentTime));
      };
    }
  };

  const play = () => {
    if (player.pause) {
      dispatch(setPlay());
      audio.play();
    } else {
      dispatch(setPause());
      audio.pause();
    }
  };

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100;
    dispatch(setVolume(Number(e.target.value)));
  };

  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.target.value);
    setCurrentTime(Number(e.target.value));
  };

  if (!player.active) {
    return null;
  }

  return (
    <div className={styles.player}>
      <IconButton onClick={play}>
        {player.pause ? <PlayArrow /> : <Pause />}
      </IconButton>
      <Grid container direction="column" className="playerInfo">
        <div>{player.active?.name}</div>
        <div style={{ fontSize: 12, color: "gray" }}>
          {player.active?.artist}
        </div>
      </Grid>
      <TrackProgress
        left={player.currentTime}
        right={player.duration}
        onChange={changeCurrentTime}
      />
      <VolumeUp className="icon" />
      <TrackProgress left={player.volume} right={100} onChange={changeVolume} />
    </div>
  );
};

export default Player;
