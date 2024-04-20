import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getSongDetail, getSongLyric } from "@/network/modules/playbar";
import { ICurrentSong } from "./type";
import { ILyric, parseLyric } from "@/utils/parseLyric";

interface IPlayerState {
  currentSong: ICurrentSong;
  lyric: ILyric[];
  lyricIndex: number;
}
const initialState: IPlayerState = {
  currentSong: {
    name: "",
    id: 0,
    dt: 0,
    ar: [
      {
        name: ""
      }
    ],
    al: {
      name: "",
      picUrl: ""
    }
  },
  lyric: [],
  lyricIndex: 0
};
const playerSlice = createSlice({
  name: "playbar",
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }: PayloadAction<ICurrentSong>) {
      state.currentSong = payload;
    },
    changeLyricAction(state, { payload }: PayloadAction<ILyric[]>) {
      state.lyric = payload;
    },
    changeLyricIndexAction(state, { payload }: PayloadAction<number>) {
      state.lyricIndex = payload;
    }
  }
});

export const fetchCurrentSongData = createAsyncThunk(
  "currentSong",
  (id: number, { dispatch }) => {
    getSongDetail(id).then((res) => {
      res.songs.length && dispatch(changeCurrentSongAction(res.songs[0]));
    });
    getSongLyric(id).then((res) => {
      const lyricStr = res.lrc.lyric;
      const lyric = parseLyric(lyricStr);
      dispatch(changeLyricAction(lyric));
    });
  }
);

export default playerSlice.reducer;
export const {
  changeCurrentSongAction,
  changeLyricAction,
  changeLyricIndexAction
} = playerSlice.actions;
