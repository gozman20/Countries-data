import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  allCountries: [],
  country: [],
  mode: "light",
  search: "",
  loading: false,
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
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setLoading: (state) => {
      state.loading = !state.loading;
    },
  },
});

export const {
  updateAllCountries,
  setCountry,
  setMode,
  setSearch,
  setLoading,
} = countrySlice.actions;
export default countrySlice.reducer;
