import { getBanners } from "@/network/modules/recommend";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBanner } from "./type";

const initialState = {
  banners: [] as IBanner[]
};
const recommandSlice = createSlice({
  name: "recommend",
  initialState,
  reducers: {
    changeBannersAction(state, { payload }: PayloadAction<IBanner[]>) {
      state.banners = payload;
    }
  }
});

export const { changeBannersAction } = recommandSlice.actions;
export default recommandSlice.reducer;

export const fetchBannersDataAction = createAsyncThunk(
  "banners",
  async (arg, { dispatch }) => {
    const res = await getBanners();
    dispatch(changeBannersAction(res.banners));
  }
);
