import {
  getArtistList,
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlaylistDetail
} from "@/network/modules/recommend";
import { IRankingRes } from "@/network/modules/type";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAlbum, IArtist, IBanner, IHotRecommends, IPlayList } from "./type";

const initialState = {
  banners: [] as IBanner[],
  hotRecommends: [] as IHotRecommends[],
  albums: [] as IAlbum[],
  rankings: [] as IPlayList[],
  artists: [] as IArtist[]
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
    },
    changeRankingAction(state, { payload }: PayloadAction<IPlayList[]>) {
      state.rankings = payload;
    },
    changeArtistsAction(state, { payload }: PayloadAction<IArtist[]>) {
      state.artists = payload;
    }
  }
});

export const {
  changeBannersAction,
  changeHotRecommendsAction,
  changeAlbumAction,
  changeRankingAction,
  changeArtistsAction
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
    getArtistList(5).then((res) => {
      dispatch(changeArtistsAction(res.artists));
    });
  }
);

const rankingIds = [19723756, 3779629, 2884035];
export const fetchRankingsData = createAsyncThunk(
  "recommend/ranking",
  (_, { dispatch }) => {
    const promises: Promise<IRankingRes>[] = [];
    for (const id of rankingIds) {
      promises.push(getPlaylistDetail(id));
    }
    console.log(promises);
    Promise.all(promises).then((res) => {
      const playlists = res
        .filter((item) => item.playlist)
        .map((item) => item.playlist);
      dispatch(changeRankingAction(playlists));
    });
  }
);
