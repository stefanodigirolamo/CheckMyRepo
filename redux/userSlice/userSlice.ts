import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    repository: '',
  },

  reducers: {
    getUserName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    getUserRepo(state, action: PayloadAction<string>) {
      state.repository = action.payload;
    },
  },
});

const {actions, reducer} = userSlice;

export const {getUserName, getUserRepo} = actions;

export default reducer;
