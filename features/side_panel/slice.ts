import { createSlice } from '@reduxjs/toolkit';

export interface SidePanelState {
  open: boolean
}

const initialState: SidePanelState = {
  open: false
}

export const sidePanelSlice = createSlice({
  name: 'side_panel',
  initialState,
  reducers: {
    toggle: (state) => {
      state.open = !state.open;
    },
    open: (state) => {
      state.open = true;
    },
    close: (state) => {
      state.open = false;
    },
  },
});

export const { toggle, open, close } = sidePanelSlice.actions;

export default sidePanelSlice.reducer;