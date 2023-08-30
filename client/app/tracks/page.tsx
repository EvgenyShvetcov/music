"use client";
import React from "react";
import styles from "../../styles/tracks.module.scss";
// import MainLayout from "@/layouts/MainLayout";
import { Button, Card, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import TrackList from "@/components/TrackList";
import MainLayout from "../layout";
import { useAppSelector } from "@/redux/hooks";

const Tracks = () => {
  const router = useRouter();

  const track = useAppSelector((state) => state.track);
  // const { error, tracks } = useTypedSelector((state) => state.track);

  // if (error) {
  //   return (
  //     <MainLayout>
  //       <h1>{error}</h1>
  //     </MainLayout>
  //   );
  // }

  return (
    <MainLayout>
      <div>
        <Grid container justifyContent="center">
          <Card className={styles.card}>
            <Grid container justifyContent="space-between">
              <h1>Список треков</h1>
              <Button onClick={() => router.push("/tracks/create")}>
                Загрузить
              </Button>
            </Grid>
            <TrackList tracks={track} />
          </Card>
        </Grid>
      </div>
    </MainLayout>
  );
};

export default Tracks;

// export const getServerSideProps = wrapper.getServerSideProps(
//   // eslint-disable-next-line no-use-before-define
//   (store) => async () => {
//     const dispatch = store.dispatch as NextThunkDispatch;
//     await dispatch(await fetchTracks());
//   }
// );
