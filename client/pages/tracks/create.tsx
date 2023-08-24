import React, { useState } from "react";
import styles from "../../styles/create.module.scss";
import MainLayout from "@/layouts/MainLayout";
import StepWrapper from "@/components/StepWrapper";
import { Button, Grid, TextField } from "@mui/material";
import FileUpload from "@/components/FileUpload";
import { Track } from "@/types/track";
import axios from "axios";
import { useRouter } from "next/router";

const Create = () => {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [picture, setPicture] = useState<string | null>(null);
  const [audio, setAudio] = useState<string | null>(null);
  const [info, setInfo] = useState<Pick<Track, "name" | "artist" | "text">>({
    name: "",
    artist: "",
    text: "",
  });

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep((state) => state + 1);
    } else {
      const formData = new FormData();
      formData.append("name", info.name);
      formData.append("text", info.text);
      formData.append("artist", info.artist);
      picture && formData.append("picture", picture);
      audio && formData.append("audio", audio);
      axios
        .post("http://localhost:8000/tracks", formData)
        .then((resp) => router.push("/tracks"))
        .catch((e) => console.log(e));
    }
  };

  const back = () => {
    setActiveStep((state) => state - 1);
  };

  console.log(info);

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction="column" className={styles.step1Container}>
            <h1>Загрузка трека</h1>
            <TextField
              value={info.name}
              onChange={(e) => setInfo({ ...info, name: e.target.value })}
              className={styles.textFields}
              label="Название трека"
            ></TextField>
            <TextField
              value={info.artist}
              onChange={(e) => setInfo({ ...info, artist: e.target.value })}
              className={styles.textFields}
              label="Исполнитель"
            ></TextField>
            <TextField
              value={info.text}
              onChange={(e) => setInfo({ ...info, text: e.target.value })}
              className={styles.textFields}
              label="Текст"
              multiline
              rows={3}
            ></TextField>
          </Grid>
        )}
        {activeStep === 1 && (
          <FileUpload accept="image/*" setFile={setPicture}>
            <Button>Загрузить обложку</Button>
          </FileUpload>
        )}
        {activeStep === 2 && (
          <FileUpload accept="audio/*" setFile={setAudio}>
            <Button>Загрузить аудио</Button>
          </FileUpload>
        )}
      </StepWrapper>
      <Grid container justifyContent="space-between">
        <Button disabled={activeStep === 0} onClick={back}>
          Назад
        </Button>
        <Button onClick={next}>Далее</Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;
