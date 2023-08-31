import React from "react";
import TracksComponent from "@/components/TracksComponent";
import axios from "axios";

async function getData() {
  try {
    const res = await axios.get("http://localhost:8000/tracks");
    return res.data;
  } catch (error) {
    console.log("Ошибка");
  }
}

async function Tracks() {
  const tracks = await getData();

  return (
    <div>
      <TracksComponent tracks={tracks} />
    </div>
  );
}

export default Tracks;
