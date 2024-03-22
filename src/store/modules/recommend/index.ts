import { getBanners, getHotRecommend } from "@/network/modules/recommend";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBanner, IHotRecommends } from "./type";

const initialState = {
  banners: [] as IBanner[],
  hotRecommends: [] as IHotRecommends[]
};
const recommandSlice = createSlice({
  name: "recommends",
  initialState,
  reducers: {
    changeBannersAction(state, { payload }: PayloadAction<IBanner[]>) {
      state.banners = payload;
    },
    changeHotRecommendsAction(
      state,
      { payload }: PayloadAction<IHotRecommends[]>
    ) {
      state.hotRecommends = payload;
    }
  }
});

export const { changeBannersAction, changeHotRecommendsAction } =
  recommandSlice.actions;
export default recommandSlice.reducer;

export const fetchBannersDataAction = createAsyncThunk(
  "banners",
  async (arg, { dispatch }) => {
    const res = await getBanners();
    dispatch(changeBannersAction(res.banners));
  }
);
export const fetchHotRecommendDataAction = createAsyncThunk(
  "hotRemmend",
  async (arg, { dispatch }) => {
    const res = await getHotRecommend(8);
    dispatch(changeHotRecommendsAction(res.result));
  }
);
