import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PlayerState } from "@/types/player";
import { Track } from "@/types/track";

const initialState: PlayerState = {
  currentTime: 0,
  active: null,
  duration: 0,
  pause: true,
  volume: 50,
};

export const PlayerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setPause: (state) => {
      state.pause = true;
    },
    setPlay: (state) => {
      state.pause = false;
    },
    setSwitchPlayOrPause: (state) => {
      state.pause = !state.pause;
    },
    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
    },
    setActive: (state, action: PayloadAction<Track>) => {
      state.active = action.payload;
      state.duration = 0;
      state.currentTime = 0;
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },
  },
});

export const {
  setPlay,
  setPause,
  setActive,
  setCurrentTime,
  setDuration,
  setVolume,
} = PlayerSlice.actions;

export default PlayerSlice.reducer;
