import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  currentTheme: string;
}

const initialState: AppState = {
  currentTheme: 'light',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setcurrentTheme: (state, action: PayloadAction<string>) => {
      state.currentTheme = action.payload;
    },
  },
});

export const { setcurrentTheme } = appSlice.actions;
export default appSlice.reducer;
