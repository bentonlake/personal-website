import { configureStore } from '@reduxjs/toolkit';

import sidePanelReducer from '@/features/side_panel/slice';

export function makeStore() {
  return configureStore({
    reducer: {
      side_panel: sidePanelReducer
    }
  })
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;