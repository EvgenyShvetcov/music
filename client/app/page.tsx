import React from "react";
import styles from "../styles/index.module.scss";
import MainLayout from "./layout";

const Index = () => {
  return (
    <>
      <MainLayout>
        <div className={styles.center}>
          <h1>Добро пожаловать!</h1>
          <div>
            Тут будут редкие треки которых не найти на обычных площадках.
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Index;
