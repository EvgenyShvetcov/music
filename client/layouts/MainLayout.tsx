import React, { FC } from "react";
import styles from "../styles/mainlayout.module.scss";
import NavBar from "@/components/Navbar";

interface Props {
  title?: string;
  description?: string;
  keywords?: string;
  children: React.ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default MainLayout;
