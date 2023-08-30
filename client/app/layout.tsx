"use client";

import React, { FC } from "react";
import styles from "../styles/mainlayout.module.scss";
import NavBar from "@/components/Navbar";
import Player from "@/components/Player";
import { Providers } from "@/redux/provider";

interface Props {
  children: React.ReactNode;
}

export const metadata = {
  title: "Плеер",
  description: "Плеер",
};

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar />
          <div className={styles.container}>{children}</div>
          <Player />
        </Providers>
      </body>
    </html>
  );
};

export default MainLayout;
