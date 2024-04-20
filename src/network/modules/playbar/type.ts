import { ICurrentSong } from "@/store/modules/playbar/type";
export interface ISongRes {
  code: 200;
  songs: ICurrentSong[];
}
export interface ILyricRes {
  lrc: {
    version: number;
    lyric: string;
  };
}
