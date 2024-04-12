import {
  IAlbum,
  IBanner,
  IHotRecommends,
  IPlayList
} from "@/store/modules/recommend/type";

export interface IBannerRes {
  code: number;
  banners: IBanner[];
}
export interface IHotRecommendsRes {
  hasTaste: boolean;
  code: number;
  category: number;
  result: IHotRecommends[];
}
export interface IAlbumRes {
  code: number;
  albums: IAlbum[];
}
export interface IRankingRes {
  code: number;
  playlist: IPlayList;
}
