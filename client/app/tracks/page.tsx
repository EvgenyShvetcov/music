import React from "react";
import TracksComponent from "@/components/TracksComponent";
import { createApi } from "@/api/api";

async function Tracks() {
  const tracks = await createApi().getTracks();

  return (
    <div>
      <TracksComponent tracks={tracks} />
    </div>
  );
}

export default Tracks;
