import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { articleType } from "../../App";
import { Api } from "../api/api";
type initialState = {
  search: string
   articles : articleType[]
   loading: boolean
   error: string
}
const initialState:initialState = {
  search: '',
   articles : [],
   loading: false,
   error: '',
};
export const getArticles = createAsyncThunk(
  "articles/fetch",
  async () => {
    try {
      const response = await Api.getArticles();
      return response.data.articles;
    } catch (error) {
      // do something
      console.log(error);
    }
  }
);
export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload
    },
  },
  extraReducers: {
    [getArticles.fulfilled.type]: (state, action) => {
      state.articles = action.payload
      state.loading = false;
    },
    [getArticles.rejected.type]: (state, action) => {
      state.error = 'Error'
      state.loading = false;
    },
    [getArticles.pending.type]: (state, action) => {
      state.loading = true;
    },
  },
});

export const { setSearch } = appSlice.actions;
export default appSlice.reducer;
