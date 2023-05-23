// IMPORTS
import app, { appActions, appSelectors } from "./app";

export const reducers = {
  // REDUCERS EXPORT
  app,
};

export const actions = {
  // ACTIONS EXPORT
  ...appActions,
};

export const selectors = {
  // SELECTORS EXPORT
  ...appSelectors,
};
