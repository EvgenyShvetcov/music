import { combineReducers } from "@reduxjs/toolkit";
import PlayerSlice from "./player";
import TrackSlice from "./track";

export const rootReducer = combineReducers({
  player: PlayerSlice,
  track: TrackSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
