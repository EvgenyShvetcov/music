import React, { FC } from "react";
import styles from "../styles/trackItem.module.scss";
import { Track } from "@/types/track";
import { Card, Grid, IconButton } from "@mui/material";
import { Delete, Pause, PlayArrow } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useActions } from "@/hooks/useActions";
import { useTypedSelector } from "@/hooks/useTypedSelector";

interface TrackItemProps {
  track: Track;
  active?: boolean;
}

const TrackItem: FC<TrackItemProps> = ({ track }) => {
  const router = useRouter();
  const { playTrack, pauseTrack, setActiveTrack } = useActions();

  const { active, pause } = useTypedSelector((state) => state.player);

  const play = (e) => {
    if (pause) {
      e.stopPropagation();
      setActiveTrack(track);
      playTrack();
    } else {
      e.stopPropagation();
      pauseTrack();
    }
  };

  return (
    <Card
      className={styles.trackCard}
      onClick={() => router.push("/tracks/" + track._id)}
    >
      <div className={styles.leftSide}>
        <IconButton onClick={play} className={styles.icon}>
          {active?._id === track._id && !pause ? <Pause /> : <PlayArrow />}
        </IconButton>
        <img
          width={70}
          height={70}
          src={"http://localhost:8000/" + track.picture}
        />
        <Grid container direction="column" className={styles.infoColumn}>
          <div className={styles.name}>{track.name}</div>
          <div className={styles.artist}>{track.artist}</div>
        </Grid>
      </div>

      {active && <div>01:42 / 03:33</div>}
      <IconButton onClick={(e) => e.stopPropagation()} className={styles.icon}>
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;
