import React, { FC } from "react";
import styles from "../styles/tracklist.module.scss";
import { Track } from "@/types/track";
import { Grid } from "@mui/material";
import TrackItem from "./TrackItem";

interface TrackListProps {
  tracks: Track[];
}

const TrackList: FC<TrackListProps> = ({ tracks }) => {
  return (
    <Grid container direction="column" className={styles.tracklist}>
      {tracks.map((el) => (
        <TrackItem key={el._id} track={el} />
      ))}
    </Grid>
  );
};

export default TrackList;
