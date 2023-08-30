"use client";
import { Track } from "@/types/track";
import { Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import styles from "../../../styles/trackPage.module.scss";
import React from "react";
import Image from "next/image";
import MainLayout from "@/app/layout";

const TrackPage = () => {
  const router = useRouter();
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
    <MainLayout>
      <Button variant="outlined" onClick={() => router.push("/tracks")}>
        К списку
      </Button>
      <Grid container className={styles.trackPage}>
        <Image alt="" src={track.picture} width={200} height={200} />
        <div className={styles.trackInfo}>
          <h1>Название трека - {track.name}</h1>
          <h1>Исполнитель - {track.artist}</h1>
          <h1>Прослушиваний - {track.listens}</h1>
        </div>
      </Grid>
      <h1>Слова к треку</h1>
      <p>{track.text}</p>
      <h1>Комментарии</h1>
      <Grid container className={styles.trackPage}>
        <TextField label="Ваше имя" fullWidth />
        <TextField label="Комментраий" fullWidth multiline rows={4} />
        <Button>Прокомментировать</Button>
      </Grid>
      <div>
        {track.comments.map((el) => (
          <div key={el._id}>
            <div>{el.username}</div>
            <div>{el.text}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default TrackPage;
