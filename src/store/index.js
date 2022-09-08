import { configureStore } from "@reduxjs/toolkit";

import matrixSlice from "./slices/matrixSlice";

export const store = configureStore({
  reducer: {
    matrixSlice,
  },
});
