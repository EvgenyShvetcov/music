import React from "react";
import styles from "../../styles/tracks.module.scss";
// import MainLayout from "@/layouts/MainLayout";
import { Button, Card, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import TrackList from "@/components/TrackList";
import { useAppSelector } from "@/redux/hooks";

async function getData() {
  const res = await fetch("http://localhost:8000/tracks");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function Tracks() {
  // const router = useRouter();

  const track = await getData();

  console.log(track);

  // if (error) {
  //   return (
  //     <MainLayout>
  //       <h1>{error}</h1>
  //     </MainLayout>
  //   );
  // }

  return (
    <div>
      <Grid container justifyContent="center">
        <Card className={styles.card}>
          <Grid container justifyContent="space-between">
            <h1>Список треков</h1>
            <Button
            // onClick={() => router.push("/tracks/create")}
            >
              Загрузить
            </Button>
          </Grid>
          <TrackList tracks={track} />
        </Card>
      </Grid>
    </div>
  );
}

export default Tracks;

// export const getServerSideProps = wrapper.getServerSideProps(
//   // eslint-disable-next-line no-use-before-define
//   (store) => async () => {
//     const dispatch = store.dispatch as NextThunkDispatch;
//     await dispatch(await fetchTracks());
//   }
// );
