import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  allCountries: [],
  mode: "light",
  search: "",
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    updateAllCountries: (state, action) => {
      console.log(action);
      state.allCountries = action.payload;
    },
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { updateAllCountries, setMode, setSearch } = countrySlice.actions;
export default countrySlice.reducer;
