"use client";
import React, { FC, useCallback } from "react";
import styles from "../styles/trackItem.module.scss";
import { Track } from "@/types/track";
import { Card, Grid, IconButton } from "@mui/material";
import { Delete, Pause, PlayArrow } from "@mui/icons-material";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setActive, setPause, setPlay } from "@/redux/slices/player";
import { audio } from "./Player";
import Link from "next/link";

interface TrackItemProps {
  track: Track;
  active?: boolean;
}

const TrackItem: FC<TrackItemProps> = ({ track }) => {
  const player = useAppSelector((state) => state.player);
  const dispatch = useAppDispatch();

  const play = useCallback(() => {
    if (!player.pause && player.duration > 0) {
      dispatch(setPause());
      audio.pause();
    }
    if (player.pause && player.duration > 0) {
      dispatch(setPlay());
      audio.play();
    }
    if (!player.active || player.active._id !== track._id) {
      dispatch(setActive(track));
    }
  }, [dispatch, player.pause, player.duration, player.active]);

  return (
    <Card className={styles.trackCard}>
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

      <Link href={"/tracks/" + track._id}> Подробнее</Link>
      <IconButton onClick={(e) => e.stopPropagation()} className={styles.icon}>
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;
