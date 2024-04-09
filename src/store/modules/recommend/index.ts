import {
  getBanners,
  getHotRecommend,
  getNewAlbum
} from "@/network/modules/recommend";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAlbum, IBanner, IHotRecommends } from "./type";

const initialState = {
  banners: [] as IBanner[],
  hotRecommends: [] as IHotRecommends[],
  albums: [] as IAlbum[]
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
    },
    changeAlbumAction(state, { payload }: PayloadAction<IAlbum[]>) {
      state.albums = payload;
    }
  }
});

export const {
  changeBannersAction,
  changeHotRecommendsAction,
  changeAlbumAction
} = recommandSlice.actions;
export default recommandSlice.reducer;

export const fetchRecommendDataAction = createAsyncThunk(
  "recommend/data",
  (_, { dispatch }) => {
    getBanners().then((res) => {
      dispatch(changeBannersAction(res.banners));
    });
    getHotRecommend().then((res) => {
      dispatch(changeHotRecommendsAction(res.result));
    });
    getNewAlbum().then((res) => {
      dispatch(changeAlbumAction(res.albums));
    });
  }
);
