import hyRequest from "../..";
import {
  IAlbumRes,
  IArtistsRes,
  IBannerRes,
  IHotRecommendsRes,
  IRankingRes
} from "./type";

export function getBanners(): Promise<IBannerRes> {
  return hyRequest.get({
    url: "/banner"
  });
}
export function getHotRecommend(limit = 30): Promise<IHotRecommendsRes> {
  return hyRequest.get({
    url: "/personalized",
    params: {
      limit
    }
  });
}
export function getNewAlbum(): Promise<IAlbumRes> {
  return hyRequest.get({
    url: "/album/newest"
  });
}
export function getPlaylistDetail(id: number): Promise<IRankingRes> {
  return hyRequest.get({
    url: "/playlist/detail",
    params: {
      id
    }
  });
}
export function getArtistList(limit = 30): Promise<IArtistsRes> {
  return hyRequest.get({
    url: "/artist/list",
    params: {
      limit
    }
  });
}
