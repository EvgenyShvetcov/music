"use client";
import React, { FC } from "react";
import styles from "../styles/trackItem.module.scss";
import { Track } from "@/types/track";
import { Card, Grid, IconButton } from "@mui/material";
import { Delete, Pause, PlayArrow } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setActive, setPause, setPlay } from "@/redux/slices/player";

interface TrackItemProps {
  track: Track;
  active?: boolean;
}

const TrackItem: FC<TrackItemProps> = ({ track }) => {
  const router = useRouter();
  const player = useAppSelector((state) => state.player);
  const dispatch = useAppDispatch();

  const play = (e: any) => {
    if (player.pause) {
      e.stopPropagation();
      dispatch(setPlay());
      dispatch(setActive(track));
    } else {
      e.stopPropagation();
      dispatch(setPause());
    }
  };

  return (
    <Card
      className={styles.trackCard}
      onClick={() => router.push("/tracks/" + track._id)}
    >
      <div className={styles.leftSide}>
        <IconButton onClick={play} className={styles.icon}>
          {player.active?._id === track._id && !player.pause ? (
            <Pause />
          ) : (
            <PlayArrow />
          )}
        </IconButton>
        <Image
          alt="img"
          width={70}
          height={70}
          src={"http://localhost:8000/" + track.picture}
        />
        <Grid container direction="column" className={styles.infoColumn}>
          <div className={styles.name}>{track.name}</div>
          <div className={styles.artist}>{track.artist}</div>
        </Grid>
      </div>

      {player.active && <div>01:42 / 03:33</div>}
      <IconButton onClick={(e) => e.stopPropagation()} className={styles.icon}>
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;
