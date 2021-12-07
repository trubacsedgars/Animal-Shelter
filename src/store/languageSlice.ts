import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = 'en';

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    chooseLanguage: (state, { payload }: PayloadAction<string>) => {
      state = payload;
    },
  },
});

export const { chooseLanguage } = languageSlice.actions;

export const { reducer } = languageSlice;
