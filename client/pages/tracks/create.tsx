import React, { useState } from "react";
import styles from "../../styles/create.module.scss";
import MainLayout from "@/layouts/MainLayout";
import StepWrapper from "@/components/StepWrapper";
import { Steps } from "@/types/stepper";
import { Button, Grid, TextField } from "@mui/material";
import FileUpload from "@/components/FileUpload";

const Create = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [picture, setPicture] = useState<string | null>(null);
  const [audio, setAudio] = useState<string | null>(null);

  const next = () => {
    setActiveStep((state) => state + 1);
  };

  const back = () => {
    if (activeStep !== 2) {
      setActiveStep((state) => state - 1);
    }
  };

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction="column" className={styles.step1Container}>
            <h1>Загрузка трека</h1>
            <TextField
              className={styles.textFields}
              label="Название трека"
            ></TextField>
            <TextField
              className={styles.textFields}
              label="Исполнитель"
            ></TextField>
            <TextField
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
