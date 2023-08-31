"use client";
import React, { FC } from "react";
import styles from "../styles/tracksComponent.module.scss";
import { Button, Card, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import { Track } from "@/types/track";
import TrackList from "./TrackList";

interface TrackListProps {
  tracks: Track[];
}

const TracksComponent: FC<TrackListProps> = ({ tracks }) => {
  const router = useRouter();

  return (
    <div>
      <Grid container justifyContent="center">
        <Card className={styles.card}>
          <Grid container justifyContent="space-between">
            <h1>Список треков</h1>
            <Button onClick={() => router.push("/tracks/create")}>
              Загрузить
            </Button>
          </Grid>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </div>
  );
};

export default TracksComponent;
