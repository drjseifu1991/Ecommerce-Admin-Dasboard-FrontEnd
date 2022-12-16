import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userId: '',
  loading: false
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setUser: (state, action) => {
      state.userId = action.payload
    },
    setLoading: (state) => {
      state.loading = !state.loading;
    }
  },
});

export const { setMode, setUser, setLoading } = globalSlice.actions;

export default globalSlice.reducer;