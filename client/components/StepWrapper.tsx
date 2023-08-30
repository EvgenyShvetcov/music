"use client";
import { Card, Container, Grid, Step, StepLabel } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import React, { FC } from "react";

import styles from "../styles/stepWrapper.module.scss";
import { Steps } from "@/types/stepper";
interface Props {
  activeStep: number;
  children: React.ReactNode;
}

const StepWrapper: FC<Props> = ({ activeStep, children }) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {Object.values(Steps).map((el, i) => (
          <Step key={el} completed={activeStep > i}>
            <StepLabel>{el}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container justifyContent="center" className={styles.stepContent}>
        <Card className={styles.card}>{children}</Card>
      </Grid>
    </Container>
  );
};

export default StepWrapper;
