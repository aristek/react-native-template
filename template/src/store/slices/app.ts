import { createSlice, createSelector } from "@reduxjs/toolkit";

export interface AppState {
  loggedIn: boolean;
}

const initialState: AppState = {
  loggedIn: false,
};

const sliceName = "app";

const appSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    logIn: (state) => {
      state.loggedIn = true;
    },
    logOut: (state) => {
      state.loggedIn = false;
    },
  },
});

export default appSlice.reducer;

export const appActions = appSlice.actions;

const selectState = (
  state: unknown & {
    [sliceName]: AppState;
  }
) => state;

export const appSelectors = {
  app: createSelector(selectState, (state) => state.app),
};
