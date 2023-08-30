"use client";
import React, { FC, useRef } from "react";
import styles from "../styles/tracklist.module.scss";

import { Grid } from "@mui/material";

interface Props {
  setFile: Function;
  accept: string;
  children: React.ReactNode;
}

const FileUpload: FC<Props> = ({ setFile, accept, children }) => {
  const ref = useRef<any>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.files && setFile(e.target.files[0]);
  };
  return (
    <div onClick={() => ref.current?.click()}>
      <input
        type="file"
        accept={accept}
        style={{ display: "none" }}
        ref={ref}
        onChange={onChange}
      />
      {children}
    </div>
  );
};

export default FileUpload;
