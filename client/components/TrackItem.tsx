import React, { FC } from "react";
import styles from "../styles/trackItem.module.scss";
import { Track } from "@/types/track";
import { Card, Grid, IconButton } from "@mui/material";
import { Delete, Pause, PlayArrow } from "@mui/icons-material";

interface TrackItemProps {
  track: Track;
  active?: boolean;
}

const TrackItem: FC<TrackItemProps> = ({ track, active = false }) => {
  return (
    <Grid container direction="column" className={styles.trackItem}>
      <Card className={styles.trackCard}>
        <div className={styles.leftSide}>
          <IconButton className={styles.icon}>
            {active ? <Pause /> : <PlayArrow />}
          </IconButton>
          <img width={70} height={70} src={track.picture} />
          <Grid container direction="column" className={styles.infoColumn}>
            <div className={styles.name}>{track.name}</div>
            <div className={styles.artist}>{track.artist}</div>
          </Grid>
        </div>

        {active && <div>01:42 / 03:33</div>}
        <IconButton className={styles.icon}>
          <Delete />
        </IconButton>
      </Card>
    </Grid>
  );
};

export default TrackItem;
