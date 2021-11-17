import appSlice from './appSlice';
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
     app: appSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
