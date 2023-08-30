import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PlayerState } from "@/types/player";
import { Track } from "@/types/track";

const initialState: Track[] | null = [];

export const TrackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    fetchedTracks: (state, action: PayloadAction<Track[]>) => {
      state = action.payload;
    },
  },
});

export const { fetchedTracks } = TrackSlice.actions;

export default TrackSlice.reducer;

// import { TrackAction, TrackActionTypes } from "@/types/track";
// import axios from "axios";
// import { Dispatch } from "react";

// export const fetchTracks = () => {
//   return async (dispatch: Dispatch<TrackAction>) => {
//     try {
//       const response = await axios.get("http://localhost:8000/tracks");
//       dispatch({ type: TrackActionTypes.FETCH_TRACKS, payload: response.data });
//     } catch (error) {
//       dispatch({
//         type: TrackActionTypes.FETCH_TRACKS_ERROR,
//         payload: "Произошла неизвестная ошибка",
//       });
//     }
//   };
// };
