import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import React from "react";
import styles from "../styles/player.module.scss";
import { Track } from "@/types/track";
import TrackProgress from "./TrackProgrss";

const Player = () => {
  const active = false;

  const track: Track = {
    _id: "1",
    name: "wu",
    artist: "wu",
    text: "wu",
    listens: 0,
    audio: "",
    picture:
      "https://i.guim.co.uk/img/media/1a0edf67de989b7897d6758767bf1a4ef43d3527/0_622_3000_1800/master/3000.jpg?width=1300&dpr=1&s=none",
    comments: [],
  };
  return (
    <div className={styles.player}>
      <IconButton onClick={() => {}}>
        {active ? <PlayArrow /> : <Pause />}
      </IconButton>
      <Grid container direction="column" className="playerInfo">
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: "gray" }}>{track.artist}</div>
      </Grid>
      <TrackProgress left={1} right={100} onChange={() => {}} />
      <VolumeUp className="icon" />
      <TrackProgress left={1} right={100} onChange={() => {}} />
    </div>
  );
};

export default Player;
