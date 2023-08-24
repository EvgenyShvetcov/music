import React from "react";
import styles from "../../styles/tracks.module.scss";
import MainLayout from "@/layouts/MainLayout";
import { Button, Card, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { Track } from "@/types/track";
import TrackList from "@/components/TrackList";

const Tracks = () => {
  const router = useRouter();

  const tracks: Track[] = [
    {
      _id: "1",
      name: "wu",
      artist: "wu",
      text: "wu",
      listens: 0,
      audio:
        "http://localhost:8000/audio/0400932a-9318-43d9-912e-e2380a638f78.mp3",
      picture:
        "https://i.guim.co.uk/img/media/1a0edf67de989b7897d6758767bf1a4ef43d3527/0_622_3000_1800/master/3000.jpg?width=1300&dpr=1&s=none",
      comments: [],
    },
    {
      _id: "2",
      name: "mobb",
      artist: "mobb",
      text: "mobb",
      listens: 0,
      audio:
        "http://localhost:8000/audio/0400932a-9318-43d9-912e-e2380a638f78.mp3",
      picture:
        "https://i.guim.co.uk/img/media/1a0edf67de989b7897d6758767bf1a4ef43d3527/0_622_3000_1800/master/3000.jpg?width=1300&dpr=1&s=none",
      comments: [],
    },
    {
      _id: "3",
      name: "2pac",
      artist: "2pac",
      text: "2pac",
      listens: 0,
      audio:
        "http://localhost:8000/audio/0400932a-9318-43d9-912e-e2380a638f78.mp3",
      picture:
        "https://i.guim.co.uk/img/media/1a0edf67de989b7897d6758767bf1a4ef43d3527/0_622_3000_1800/master/3000.jpg?width=1300&dpr=1&s=none",
      comments: [],
    },
  ];

  return (
    <MainLayout>
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
    </MainLayout>
  );
};

export default Tracks;
