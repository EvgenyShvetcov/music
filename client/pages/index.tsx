import { Button } from "@mui/material";
import React from "react";
import styles from "../styles/index.module.scss";
import NavBar from "@/components/Navbar";

const Index = () => {
  return (
    <>
      <NavBar />
      <div className={styles.center}>
        <h1>Добро пожаловать!</h1>
        <div>Тут будут редкие треки которых не найти на обычных площадках.</div>
      </div>
    </>
  );
};

export default Index;
