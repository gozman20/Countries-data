import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCountries: "",
  mode: "light",
};
const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setAllCountries: (state, action) => {
      state.allCountries = action.payload;
    },
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

// Extract and export each action creator by name
export const { setAllCountries, setMode } = countrySlice.actions;
// Export the reducer, either as a default or named export
export default countrySlice.reducer;
